// IELTS Marathon - Client Storage Service
// Powered by LocalStorage + IndexedDB for reliable offline persistence
// Multi-track: mỗi track lưu riêng currentDay / rhythm / progress với key namespaced.
// Track ielts21 giữ các key legacy để không làm mất dữ liệu cũ.

const STORAGE_KEYS = {
  TRACK: 'ielts_marathon_track',
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

const DEFAULT_RHYTHM = {
  ielts21: 90,
  foundation14: 45
};

// Track ielts21 giữ key legacy; các track khác dùng prefix riêng.
function keyFor(baseKey, track) {
  if (track === 'ielts21') return baseKey;
  return `${baseKey}_${track}`;
}

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
  // Track settings
  getTrack() {
    const stored = localStorage.getItem(STORAGE_KEYS.TRACK);
    return stored || 'ielts21';
  },
  setTrack(track) {
    localStorage.setItem(STORAGE_KEYS.TRACK, track);
  },

  // User & Settings
  getUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_PROFILE)) || {
      name: "Người học IELTS",
      streak: 0,
      startDate: new Date().toISOString(),
      onboarded: true
    };
  },
  setUser(user) {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(user));
  },

  getCurrentDay(track) {
    const t = track || this.getTrack();
    return parseInt(localStorage.getItem(keyFor(STORAGE_KEYS.CURRENT_DAY, t)) || '1', 10);
  },
  setCurrentDay(day, track) {
    const t = track || this.getTrack();
    localStorage.setItem(keyFor(STORAGE_KEYS.CURRENT_DAY, t), day.toString());
  },

  getRhythm(track) {
    const t = track || this.getTrack();
    return parseInt(localStorage.getItem(keyFor(STORAGE_KEYS.RHYTHM, t)) || String(DEFAULT_RHYTHM[t] || 90), 10);
  },
  setRhythm(rhythm, track) {
    const t = track || this.getTrack();
    localStorage.setItem(keyFor(STORAGE_KEYS.RHYTHM, t), rhythm.toString());
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

  // Daily Progress (namespaced per track; ielts21 keep legacy key)
  getAllProgress(track) {
    const t = track || this.getTrack();
    return JSON.parse(localStorage.getItem(keyFor(STORAGE_KEYS.PROGRESS, t))) || {};
  },
  getDayProgress(day, track) {
    const t = track || this.getTrack();
    const all = this.getAllProgress(t);
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
  saveDayProgress(day, dayData, track) {
    const t = track || this.getTrack();
    const all = this.getAllProgress(t);
    all[day] = { ...all[day], ...dayData, lastUpdated: new Date().toISOString() };
    localStorage.setItem(keyFor(STORAGE_KEYS.PROGRESS, t), JSON.stringify(all));
  },

  // Error Log (global across tracks)
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

  // Export full portfolio (cho track đang hoạt động)
  exportFullPortfolio(track) {
    const t = track || this.getTrack();
    const progress = this.getAllProgress(t);
    const errorLog = this.getErrorLog();
    const user = this.getUser();
    return {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      track: t,
      user,
      progress,
      errorLog
    };
  }
};