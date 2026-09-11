// IELTS Marathon 21 Days - Client Storage Service
// Powered by LocalStorage + IndexedDB for reliable offline persistence

const STORAGE_KEYS = {
  USER_PROFILE: 'ielts_marathon_user',
  CURRENT_DAY: 'ielts_marathon_current_day',
  RHYTHM: 'ielts_marathon_rhythm',
  THEME: 'ielts_marathon_theme',
  SKILL_LEVELS: 'ielts_marathon_skill_levels',
  PROGRESS: 'ielts_marathon_progress',
  ERROR_LOG: 'ielts_marathon_error_log',
  PHRASE_BANK: 'ielts_marathon_phrase_bank',
  STREAK: 'ielts_marathon_streak',
  CHECKPOINTS: 'ielts_marathon_checkpoints'
};

// --- IndexedDB for Audio Blobs ---
const DB_NAME = 'IELTSMarathonAudioDB';
const DB_VERSION = 1;
const STORE_NAME = 'recordings';

function openAudioDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      console.warn('IndexedDB not supported, audio will use memory fallback');
      resolve(null);
      return;
    }
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export const StorageService = {
  // User & Settings
  getUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE)) || {
      name: "Người học IELTS",
      streak: 3,
      startDate: new Date().toISOString(),
      onboarded: true
    };
  },
  setUser(user) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(user));
  },

  getCurrentDay() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.CURRENT_DAY) || '1', 10);
  },
  setCurrentDay(day) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_DAY, day.toString());
  },

  getRhythm() {
    return parseInt(localStorage.getItem(STORAGE_KEYS.RHYTHM) || '90', 10);
  },
  setRhythm(rhythm) {
    localStorage.setItem(STORAGE_KEYS.RHYTHM, rhythm.toString());
  },

  getTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
  },
  setTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  },

  getSkillLevels() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.SKILL_LEVELS)) || {
      reading: 'expansion',
      listening: 'expansion',
      writing: 'foundation',
      speaking: 'foundation'
    };
  },
  setSkillLevels(levels) {
    localStorage.setItem(STORAGE_KEYS.SKILL_LEVELS, JSON.stringify(levels));
  },

  // Daily Progress
  getAllProgress() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROGRESS)) || {};
  },
  getDayProgress(day) {
    const all = this.getAllProgress();
    return all[day] || {
      completedModules: [],
      readingEvidence: { locator: '', paraphrase: '', errorReason: '' },
      readingAnswers: {},
      listeningAnswers: {},
      listeningErrors: [],
      listeningListenCount: 0,
      listeningAttempt2Used: false,
      writingFirstDraft: '',
      writingFirstDraftLocked: false,
      writingRewrite: '',
      speakingTranscript: '',
      speakingAttempt1Key: null,
      speakingAttempt2Key: null,
      vocabExamples: {},
      grammarAnswer: '',
      checklistCompleted: []
    };
  },
  saveDayProgress(day, dayData) {
    const all = this.getAllProgress();
    all[day] = { ...all[day], ...dayData, lastUpdated: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(all));
  },

  // Error Log
  getErrorLog() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ERROR_LOG)) || [
      { id: 'err-1', day: 1, skill: 'Listening', description: 'Bỏ quên âm đuôi -s trong danh từ số nhiều (participants)', errorType: 'Mất âm cuối', frequency: 2, recurring: true, date: '2026-09-10' },
      { id: 'err-2', day: 2, skill: 'Reading', description: 'Nhầm lẫn giữa False và Not Given do suy diễn quá xa bài đọc', errorType: 'Bẫy suy diễn', frequency: 1, recurring: false, date: '2026-09-11' },
      { id: 'err-3', day: 2, skill: 'Writing', description: 'Câu chủ đề quá dài (6 dòng), thiếu mệnh đề chính rõ ràng', errorType: 'Run-on sentence', frequency: 2, recurring: true, date: '2026-09-11' }
    ];
  },
  addErrorLog(entry) {
    const logs = this.getErrorLog();
    const existing = logs.find(item => item.skill === entry.skill && item.errorType === entry.errorType);
    if (existing) {
      existing.frequency += 1;
      existing.recurring = existing.frequency >= 2;
      existing.lastOccurred = new Date().toISOString();
    } else {
      logs.push({
        id: 'err-' + Date.now(),
        ...entry,
        frequency: 1,
        recurring: false,
        date: new Date().toISOString().split('T')[0]
      });
    }
    localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify(logs));
  },
  updateErrorLog(logs) {
    localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify(logs));
  },

  // Audio Recordings (IndexedDB)
  async saveAudioRecording(id, blob, metadata = {}) {
    const db = await openAudioDB();
    if (!db) return null;
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const record = { id, blob, metadata, createdAt: new Date().toISOString() };
      store.put(record);
      tx.oncomplete = () => resolve(id);
      tx.onerror = () => reject(tx.error);
    });
  },

  async getAudioRecording(id) {
    const db = await openAudioDB();
    if (!db) return null;
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result ? req.result.blob : null);
      req.onerror = () => reject(req.error);
    });
  },

  // Export full portfolio
  exportFullPortfolio() {
    const progress = this.getAllProgress();
    const errorLog = this.getErrorLog();
    const user = this.getUser();
    return {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      user,
      progress,
      errorLog
    };
  }
};
