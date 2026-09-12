// IELTS Marathon - Complete Client Application (Multi-Track)
import { CURRICULUM_DATA, TRACKS, FOUNDATION_14_DAYS } from './data/curriculumData.js';
import { RHYTHM_CONFIGS } from './data/rhythmConfig.js';
import { StorageService } from './services/storageService.js';
import { AudioRecorderEngine } from './services/audioRecorder.js';
import { requestAiFeedback, isAiEnabled, setAiEnabled, aiRemainingToday } from './services/aiFeedback.js';

const DATA_SETS = {
  ielts21: CURRICULUM_DATA,
  foundation14: FOUNDATION_14_DAYS
};

function escapeForAttr(val) {
  return String(val).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function escapeHtml(val) {
  return String(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

class IELTSMarathonApp {
  constructor() {
    this.track = StorageService.getTrack();
    if (!DATA_SETS[this.track]) this.track = 'ielts21';
    this.trackMeta = TRACKS[this.track];
    this.curriculum = DATA_SETS[this.track] || CURRICULUM_DATA;
    this.totalDays = this.curriculum.length;
    this.currentDay = Math.min(Math.max(StorageService.getCurrentDay(this.track), 1), this.totalDays);
    this.rhythm = StorageService.getRhythm(this.track);
    this.theme = StorageService.getTheme();
    this.mode = StorageService.getMode();
    this.guidedFocus = '';
    this.skillLevels = StorageService.getSkillLevels();
    this.currentView = 'day-detail';
    this.checkpointDay = this.trackMeta.checkpoints[0] || 7;
    this.timerSeconds = this.rhythm * 60;
    this.timerRunning = false;
    this.timerInterval = null;
    this.recorderAttempt1 = new AudioRecorderEngine();
    this.recorderAttempt2 = new AudioRecorderEngine();
    this.errorFilterSkill = 'all';
    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.bindEvents();
    this.render();
    this.initKeyboardShortcuts();
    console.log('IELTS Marathon App loaded. Track:', this.track);
  }

  setTrack(track) {
    if (!DATA_SETS[track] || track === this.track) return;
    this.track = track;
    StorageService.setTrack(track);
    this.trackMeta = TRACKS[track];
    this.curriculum = DATA_SETS[track];
    this.totalDays = this.curriculum.length;
    this.currentDay = 1;
    StorageService.setCurrentDay(1, track);
    if (!this.trackMeta.rhythms.includes(this.rhythm)) {
      this.rhythm = this.trackMeta.defaultRhythm;
      StorageService.setRhythm(this.rhythm, track);
    }
    this.timerSeconds = this.rhythm * 60;
    this.pauseTimer();
    this.checkpointDay = this.trackMeta.checkpoints[0] || 7;
    this.currentView = 'dashboard';
    const sel = document.getElementById('track-select');
    if (sel) sel.value = track;
    this.render();
  }

  syncHeader() {
    const sel = document.getElementById('track-select');
    if (sel) sel.value = this.track;
    const mockNav = document.getElementById('nav-mock-test');
    if (mockNav) {
      if (this.trackMeta.mockTestDay) {
        mockNav.style.display = '';
        mockNav.textContent = '🎯 Thi thử Ngày ' + this.trackMeta.mockTestDay;
      } else {
        mockNav.style.display = 'none';
      }
    }
  }

  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    StorageService.setTheme(theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.innerHTML = theme === 'dark' ? '☀️ Sáng' : '🌙 Tối';
  }

  toggleTheme() {
    this.applyTheme(this.theme === 'dark' ? 'light' : 'dark');
  }

  bindEvents() {
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateTo(el.getAttribute('data-nav'));
      });
    });

    document.querySelectorAll('[data-mobile-nav]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateTo(el.getAttribute('data-mobile-nav'));
      });
    });
  }

  navigateTo(view, extra = {}) {
    this.currentView = view;
    if (extra.day) {
      this.currentDay = Math.min(Math.max(extra.day, 1), this.totalDays);
      StorageService.setCurrentDay(this.currentDay, this.track);
    }
    if (extra.checkpoint) this.checkpointDay = extra.checkpoint;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  setDay(day) {
    if (day < 1 || day > this.totalDays) return;
    this.currentDay = day;
    StorageService.setCurrentDay(day, this.track);
    this.render();
  }

  setRhythm(rhythm) {
    this.rhythm = parseInt(rhythm, 10);
    StorageService.setRhythm(this.rhythm, this.track);
    this.timerSeconds = this.rhythm * 60;
    this.render();
  }

  setMode(mode) {
    this.mode = mode === 'classic' ? 'classic' : 'guided';
    StorageService.setMode(this.mode);
    this.guidedFocus = '';
    this.render();
  }

  completeOnboarding() {
    StorageService.setOnboarded(true);
    this.navigateTo('day-detail', { day: 1 });
  }

  _dayHasActivity(p) {
    if (!p || typeof p !== 'object') return false;
    return (
      (p.checklistCompleted && p.checklistCompleted.length > 0) ||
      (p.readingAnswers && Object.keys(p.readingAnswers).length > 0) ||
      (p.listeningAnswers && Object.keys(p.listeningAnswers).length > 0) ||
      (p.listeningErrors && p.listeningErrors.length > 0) ||
      (p.listeningListenCount || 0) > 0 ||
      Object.values(p.readingEvidence || {}).some(Boolean) ||
      !!(p.writingFirstDraft || p.writingRewrite || p.speakingTranscript || p.grammarAnswer) ||
      (p.vocabExamples && Object.keys(p.vocabExamples).length > 0)
    );
  }

  _dayStepDone(stepId, dayData, p) {
    p = p || {};
    if (stepId === 'terrain') return this._dayHasActivity(p);
    if (stepId === 'checklist') return (p.checklistCompleted || []).length >= (dayData.checklist || []).length;
    if (stepId === 'reading') return dayData.reading ? (Object.keys(p.readingAnswers || {}).length > 0 || Object.values(p.readingEvidence || {}).some(Boolean)) : true;
    if (stepId === 'listening') return dayData.listening ? (Object.keys(p.listeningAnswers || {}).length > 0 || (p.listeningListenCount || 0) > 0 || (p.listeningErrors || []).length > 0) : true;
    if (stepId === 'writing') return dayData.writing ? !!p.writingRewrite : true;
    if (stepId === 'speaking') return dayData.speaking ? !!p.speakingTranscript : true;
    if (stepId === 'vocab') return Object.keys(p.vocabExamples || {}).length > 0;
    if (stepId === 'grammar') return !!p.grammarAnswer;
    return false;
  }

  computeDaySteps(dayData, dayProgress) {
    const all = [
      { id: 'terrain', label: 'Định hướng & lịch' },
      { id: 'checklist', label: 'Tiêu chí hoàn thành' },
      { id: 'reading', label: 'Reading & Bằng chứng' },
      { id: 'listening', label: 'Listening' },
      { id: 'writing', label: 'Writing & Rewrite' },
      { id: 'speaking', label: 'Speaking' },
      { id: 'vocab', label: 'Từ vựng & cụm' },
      { id: 'grammar', label: 'Ngữ pháp' }
    ].filter(s => {
      if (s.id === 'reading') return !!dayData.reading;
      if (s.id === 'listening') return !!dayData.listening;
      if (s.id === 'writing') return !!dayData.writing;
      if (s.id === 'speaking') return !!dayData.speaking;
      return true;
    });
    const steps = all.map(s => ({ ...s, done: this._dayStepDone(s.id, dayData, dayProgress) }));
    const currentIdx = steps.findIndex(s => !s.done);
    const allDone = currentIdx === -1;
    const cIdx = allDone ? Math.max(0, steps.length - 1) : currentIdx;
    return { steps, currentIdx: cIdx, firstPending: currentIdx === -1 ? steps.length : currentIdx, allDone, currentId: allDone ? 'done' : steps[cIdx].id };
  }

  jumpStep(id) {
    const sec = document.querySelector('[data-step-group="' + id + '"]');
    if (!sec) return;
    if (sec.classList.contains('hidden')) sec.classList.remove('hidden');
    sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  applyGuidedSteps(root) {
    if (this.mode !== 'guided' || this.currentView !== 'day-detail') return;
    const dayData = this.curriculum.find(d => d.day === this.currentDay) || this.curriculum[0];
    const p = StorageService.getDayProgress(this.currentDay);
    const { steps, currentIdx, allDone } = this.computeDaySteps(dayData, p);
    steps.forEach((st, idx) => {
      const secs = root.querySelectorAll('[data-step-group="' + st.id + '"]');
      secs.forEach((sec, k) => {
        if (allDone || idx === currentIdx) {
          sec.classList.remove('hidden');
          return;
        }
        if (sec.classList.contains('hidden')) return;
        const isDone = st.done;
        const bar = document.createElement('button');
        bar.type = 'button';
        bar.className = 'w-full text-left p-3 rounded-lg border border-dashed border-[var(--border-subtle)] bg-[var(--surface-muted)] text-xs mb-6 cursor-pointer hover:border-[var(--accent-terracotta)] hover:opacity-100 transition-all flex items-center justify-between gap-2 ' + (isDone ? 'opacity-90' : 'opacity-70');
        bar.innerHTML = '<span>' + (isDone ? '✅ Đã hoàn thành · ' : '🔒 Bước trước chưa xong · ') + '<strong>' + st.label + '</strong> — bấm để ' + (isDone ? 'mở lại' : 'xem trước') + '</span><span class="font-mono text-[10px] text-[var(--ink-muted)] shrink-0">Bước ' + (idx + 1) + '</span>';
        bar.addEventListener('click', () => {
          sec.classList.toggle('hidden');
          if (!sec.classList.contains('hidden')) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        sec.parentNode.insertBefore(bar, sec);
        sec.classList.add('hidden');
      });
    });
    if (!allDone) {
      const cur = steps[currentIdx];
      if (cur && this.guidedFocus !== (this.currentDay + ':' + cur.id)) {
        this.guidedFocus = this.currentDay + ':' + cur.id;
        setTimeout(() => {
          const curSec = root.querySelector('[data-step-group="' + cur.id + '"]');
          if (curSec && curSec.offsetHeight < 10) {
            const wrap = curSec.parentElement;
            if (wrap) wrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (curSec) curSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    }
  }

  startTimer() {
    if (this.timerRunning) return;
    this.timerRunning = true;
    this.timerInterval = setInterval(() => {
      if (this.timerSeconds > 0) {
        this.timerSeconds--;
        this.updateTimerDisplay();
      } else {
        this.pauseTimer();
        alert('⏱️ Hết thời gian học dự kiến! Hãy dành 5 phút rà soát sản phẩm đã nộp.');
      }
    }, 1000);
    this.updateTimerDisplay();
  }

  pauseTimer() {
    this.timerRunning = false;
    clearInterval(this.timerInterval);
    this.updateTimerDisplay();
  }

  resetTimer() {
    this.pauseTimer();
    this.timerSeconds = this.rhythm * 60;
    this.updateTimerDisplay();
  }

  updateTimerDisplay() {
    const mins = Math.floor(this.timerSeconds / 60);
    const secs = this.timerSeconds % 60;
    const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    document.querySelectorAll('.app-timer-display').forEach(el => el.textContent = str);
    const playBtn = document.getElementById('timer-toggle-btn');
    if (playBtn) playBtn.textContent = this.timerRunning ? '⏸️ Tạm dừng' : '▶️ Bắt đầu';
  }

  initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space' && !['TEXTAREA', 'INPUT'].includes(document.activeElement.tagName)) {
        const audio = document.getElementById('listening-audio-player');
        if (audio) {
          e.preventDefault();
          if (audio.paused) audio.play();
          else audio.pause();
        }
      }
      if (e.ctrlKey && e.code === 'Enter') {
        const submitBtn = document.getElementById('btn-submit-first-draft');
        if (submitBtn && !submitBtn.disabled) {
          e.preventDefault();
          submitBtn.click();
        }
      }
    });
  }

  render() {
    const root = document.getElementById('app-root');
    if (!root) return;

    document.querySelectorAll('[data-nav]').forEach(el => {
      if (el.getAttribute('data-nav') === this.currentView) el.classList.add('text-[var(--accent-terracotta)]', 'font-bold');
      else el.classList.remove('text-[var(--accent-terracotta)]', 'font-bold');
    });

    document.querySelectorAll('[data-mobile-nav]').forEach(el => {
      if (el.getAttribute('data-mobile-nav') === this.currentView) el.classList.add('text-[var(--accent-terracotta)]', 'font-bold');
      else el.classList.remove('text-[var(--accent-terracotta)]', 'font-bold');
    });

    if (this.currentView === 'dashboard') root.innerHTML = this.renderDashboard();
    else if (this.currentView === 'day-detail') root.innerHTML = this.renderDayDetail();
    else if (this.currentView === 'error-log') root.innerHTML = this.renderErrorLog();
    else if (this.currentView === 'portfolio') root.innerHTML = this.renderPortfolio();
    else if (this.currentView === 'checkpoint') root.innerHTML = this.renderCheckpoint(this.checkpointDay);
    else if (this.currentView === 'mock-test') root.innerHTML = this.renderMockTest();
    else if (this.currentView === 'final-audit') root.innerHTML = this.renderFinalAudit();
    else if (this.currentView === 'settings') root.innerHTML = this.renderSettings();
    else root.innerHTML = this.renderDayDetail();
    if (this.currentView === 'day-detail') this.applyGuidedSteps(root);
    this.syncHeader();
    this.updateTimerDisplay();
    this.bindDayDetailEvents();
  }

  renderDashboard() {
    const user = StorageService.getUser();
    const allProgress = StorageService.getAllProgress(this.track);
    const completedDays = Object.keys(allProgress).length;
    const totalN = this.totalDays;
    const progressPercent = Math.round((completedDays / totalN) * 100);
    const onboarded = StorageService.getOnboarded();
    const isGuided = this.mode === 'guided';
    const nextDay = (() => {
      for (let d = 1; d <= this.totalDays; d++) {
        if (!this._dayHasActivity(StorageService.getDayProgress(d))) return d;
      }
      return this.totalDays;
    })();
    const currentPhaseNum = (this.curriculum[nextDay - 1] || this.curriculum[0]).phase;
    const streak = (() => {
      const studied = new Set();
      Object.values(allProgress).forEach(p => {
        if (p && p.lastUpdated) studied.add(new Date(p.lastUpdated).toDateString());
      });
      let cursor = new Date();
      if (!studied.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
      let s = 0;
      while (studied.has(cursor.toDateString())) {
        s++;
        cursor.setDate(cursor.getDate() - 1);
      }
      return s;
    })();

    let phasesHtml = '';
    this.trackMeta.phases.forEach(phaseMeta => {
      const phaseDays = this.curriculum.filter(d => d.phase === phaseMeta.number);
      const phaseTitle = `Giai đoạn ${phaseMeta.number}: ${phaseMeta.title} (${phaseMeta.range})`;
      const phaseDesc = phaseMeta.desc;
      const gated = isGuided && phaseMeta.number > currentPhaseNum;

      let daysCards = '';
      phaseDays.forEach(dayItem => {
        const isCurrent = dayItem.day === this.currentDay;
        const isDone = allProgress[dayItem.day] && allProgress[dayItem.day].checklistCompleted?.length > 0;
        daysCards += `
          <div onclick="window.app.navigateTo('day-detail', { day: ${dayItem.day} })" 
               class="editorial-card p-4 cursor-pointer hover:border-[var(--accent-terracotta)] transition-all ${isCurrent ? 'ring-2 ring-[var(--accent-terracotta)]' : ''}">
            <div class="flex items-center justify-between mb-2">
              <span class="font-mono text-xs font-bold text-[var(--ink-secondary)]">NGÀY ${String(dayItem.day).padStart(2, '0')}</span>
              ${dayItem.isCheckpoint ? '<span class="badge badge-amber">⭐ Checkpoint</span>' : ''}
              ${dayItem.isMockTest ? '<span class="badge badge-terracotta">🎯 Thi thử</span>' : ''}
              ${isDone ? '<span class="badge badge-sage">✓ Hoàn thành</span>' : ''}
            </div>
            <h4 class="font-display text-sm font-bold leading-snug mb-1 text-[var(--ink-primary)]">${dayItem.theme}</h4>
            <p class="text-xs text-[var(--ink-secondary)] line-clamp-2">${dayItem.orientation}</p>
          </div>
        `;
      });

      phasesHtml += `
        <div class="mb-8">
          <div class="mb-3">
            <h3 class="font-display text-lg font-bold text-[var(--ink-primary)]">${phaseTitle}</h3>
            <p class="text-xs text-[var(--ink-secondary)]">${phaseDesc}</p>
            ${gated ? '<p class="text-[11px] text-[var(--ink-muted)] mt-1.5 flex items-center gap-1.5"><span>🔒</span> Giai đoạn này chưa mở — hoàn thành Giai đoạn ' + currentPhaseNum + ' trước. Bạn vẫn có thể xem trước nếu muốn.</p>' : ''}
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${gated ? 'opacity-45 saturate-50' : ''}">
            ${daysCards}
          </div>
        </div>
      `;
    });

    return `
      <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        ${isGuided && !onboarded ? `
        <div class="editorial-card p-6 sm:p-8 mb-6 border-l-4 border-l-[var(--accent-sage)]">
          <div class="flex flex-col lg:flex-row lg:items-center gap-6">
            <div class="flex-1">
              <span class="badge badge-sage font-mono mb-2">👋 CHÀO NGƯỜI MỚI</span>
              <h1 class="font-display text-2xl font-extrabold text-[var(--ink-primary)] mb-2">Chào mừng đến ${this.trackMeta.label}</h1>
              <p class="text-sm text-[var(--ink-secondary)] leading-relaxed mb-3 max-w-2xl">
                Bạn không cần biết bắt đầu từ đâu — ứng dụng sẽ <strong>dẫn bạn làm từng bước, xong bước này mới mở bước kế tiếp</strong>.
                Mỗi ngày có một lộ trình rõ ràng: đọc định hướng → đánh dấu tiêu chí → làm bài → ghi nhật ký lỗi.
                Chọn nhịp học thoải mái rồi bấm bắt đầu.
              </p>
              <div class="flex flex-wrap items-center gap-3">
                <div class="flex gap-2">
                  ${this.trackMeta.rhythms.map(r => `
                    <button onclick="window.app.setRhythm(${r})" class="btn ${this.rhythm === r ? 'btn-primary' : 'btn-secondary'} text-xs py-2 px-4">${r} Phút</button>
                  `).join('')}
                </div>
                <button onclick="window.app.completeOnboarding()" class="btn btn-primary px-6 py-2.5 text-sm shadow-md">
                  ▶ BẮT ĐẦU NGÀY 1
                </button>
              </div>
              <p class="text-[11px] text-[var(--ink-muted)] mt-3">Muốn xem toàn bộ lộ trình kiểu cũ? Chuyển chế độ "Classic" trong Cài đặt. Bạn có thể đổi giữa ${Object.values(TRACKS).map(t => t.label).join(' và ')} ở menu trên.</p>
            </div>
          </div>
        </div>
        ` : ''}

        <div class="editorial-card p-6 sm:p-8 mb-8 bg-gradient-to-r from-[var(--surface)] to-[var(--surface-muted)]">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="badge ${this.trackMeta.badgeClass} font-mono">${this.trackMeta.label.toUpperCase()}</span>
                <span class="badge badge-sage font-mono">🔥 Streak: ${streak} ngày</span>
              </div>
              <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] mb-2">
                IELTS Marathon: Tự học Có kiểm soát
              </h1>
              <p class="text-sm sm:text-base text-[var(--ink-secondary)] max-w-2xl">
                ${this.trackMeta.description}
              </p>
            </div>
            <div>
              <button onclick="window.app.navigateTo('day-detail', { day: ${this.currentDay} })" 
                      class="btn btn-primary px-6 py-3 text-base shadow-md">
                Tiếp tục Ngày ${String(this.currentDay).padStart(2, '0')} →
              </button>
            </div>
          </div>

          <div class="mt-6 pt-6 border-t border-[var(--border-subtle)]">
            <div class="flex justify-between text-xs font-semibold mb-2">
              <span class="text-[var(--ink-secondary)]">Tiến độ tổng thể: ${completedDays}/${totalN} Ngày</span>
              <span class="font-mono text-[var(--accent-terracotta)]">${progressPercent}%</span>
            </div>
            <div class="w-full bg-[var(--surface-muted)] rounded-full h-2.5 overflow-hidden border border-[var(--border-subtle)]">
              <div class="bg-[var(--accent-terracotta)] h-2.5 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
            </div>
          </div>
        </div>
        ${isGuided ? `
        <div class="editorial-card p-6 mb-6 border-l-4 border-l-[var(--accent-terracotta)]">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div class="min-w-0">
              <div class="flex items-center gap-2 mb-1.5 flex-wrap">
                <span class="badge badge-terracotta font-mono">NEXT STEP</span>
                <span class="font-mono text-[11px] text-[var(--ink-muted)]">Ngày ${String(nextDay).padStart(2, '0')} / ${completedDays === totalN ? 'Hoàn tất lộ trình 🎉' : 'Còn ' + (totalN - completedDays) + ' ngày chưa bắt đầu'}</span>
              </div>
              <h2 class="font-display text-lg font-bold text-[var(--ink-primary)]">Ngày ${String(nextDay).padStart(2, '0')}: ${this.curriculum[nextDay - 1].theme}</h2>
              <p class="text-xs text-[var(--ink-secondary)] mt-1 line-clamp-2 max-w-2xl">${this.curriculum[nextDay - 1].orientation}</p>
              ${completedDays === totalN ? '<p class="text-xs text-[var(--accent-sage)] mt-2 font-semibold">🎉 Tốt — bạn đã chạm tới ngày cuối. Hoàn thành kiểm toán để chốt lộ trình.</p>' : ''}
            </div>
            <button onclick="window.app.navigateTo('day-detail', { day: ${nextDay} })" class="btn btn-primary px-5 py-2.5 text-sm shrink-0 shadow-md">
              ▶ BẮT ĐẦU NGÀY ${String(nextDay).padStart(2, '0')}
            </button>
          </div>
        </div>
        ` : ''}
        ${phasesHtml}
      </div>
    `;
  }

  _passageHtml(text) {
    return text.split(/\n\s*\n/).map(p => `<p class="mb-3">${p}</p>`).join('');
  }

  _questionBlockHtml(q, qIdx, activeAnswers) {
    const options = q.options || [];
    if (options.length === 0) {
      return `
        <div class="p-3 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-lg">
          <p class="text-xs sm:text-sm font-semibold mb-2 text-[var(--ink-primary)]">${qIdx + 1}. ${q.text}</p>
          <input type="text" placeholder="Nhập câu trả lời của bạn..." 
                 value="${escapeForAttr(activeAnswers[q.id] || '')}" 
                 onchange="window.app.saveReadingAnswer('${q.id}', this.value)"
                 class="w-full text-xs p-2 rounded bg-[var(--surface-muted)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-terracotta)]">
        </div>
      `;
    }
    const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    const headingsHtml = q.headings && q.headings.length ? `
      <div class="mb-2 p-2 bg-[var(--surface-muted)] rounded text-[11px] text-[var(--ink-secondary)] border border-[var(--border-subtle)]">
        <strong class="block mb-1">Danh sách tiêu đề:</strong>
        ${q.headings.map((h, i) => `<span class="block">${roman[i] || (i + 1)}. ${h}</span>`).join('')}
      </div>
    ` : '';
    return `
      <div class="p-3 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-lg">
        <p class="text-xs sm:text-sm font-semibold mb-2 text-[var(--ink-primary)]">${qIdx + 1}. ${q.text}</p>
        ${headingsHtml}
        <div class="space-y-1.5">
          ${options.map(opt => `
            <label class="flex items-center gap-2 text-xs text-[var(--ink-secondary)] p-1.5 rounded hover:bg-[var(--surface-muted)] cursor-pointer">
              <input type="radio" name="${q.id}" value="${escapeForAttr(opt[0])}" onchange="window.app.saveReadingAnswer('${q.id}', '${escapeForAttr(opt[0])}')"
                     ${activeAnswers[q.id] === opt[0] ? 'checked' : ''} class="text-[var(--accent-terracotta)]">
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }

  _readingModuleHtml(reading, dayProgress) {
    const passages = reading.passages || ([reading.passage].filter(Boolean).map(text => ({ passage: text })));
    if (!passages.length) return '';
    return passages.map((p, pIdx) => `
      <div class="mb-4 ${passages.length > 1 ? 'p-3 bg-[var(--surface-muted)] rounded-lg border border-[var(--border-subtle)]' : ''}">
        ${passages.length > 1 ? `
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-display text-xs font-bold text-[var(--accent-terracotta)] uppercase tracking-wider">Bài đọc ${pIdx + 1}</h4>
          </div>
          <p class="text-sm font-bold text-[var(--ink-primary)] mb-1">${p.title || ''}</p>
          ${p.strategy ? `<p class="text-xs text-[var(--ink-secondary)] mb-3">${p.strategy}</p>` : ''}
        ` : ''}
        <div class="p-4 bg-[var(--surface-muted)] rounded-lg text-xs sm:text-sm font-editorial leading-relaxed max-h-64 overflow-y-auto mb-4 border border-[var(--border-subtle)]">
          ${this._passageHtml(p.passage)}
        </div>
        <div class="space-y-4 mb-5">
          ${(p.questions || []).map((q, qIdx) => this._questionBlockHtml(q, qIdx, dayProgress.readingAnswers || {})).join('')}
        </div>
      </div>
    `).join('');
  }

  renderDayDetail() {
    const dayData = this.curriculum.find(d => d.day === this.currentDay) || this.curriculum[0];
    const rhythmInfo = RHYTHM_CONFIGS[this.rhythm];
    const dayProgress = StorageService.getDayProgress(this.currentDay);

    return `
      <div class="max-w-7xl mx-auto p-3 sm:p-6 lg:p-8 animate-fade-in">
        <!-- Day Banner -->
        <div class="editorial-card p-5 sm:p-6 mb-6">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <span class="badge badge-terracotta font-mono font-bold">GIAI ĐOẠN ${dayData.phase}</span>
                <span class="badge badge-muted font-mono">NGÀY ${String(dayData.day).padStart(2, '0')} / ${this.totalDays}</span>
                ${dayData.isCheckpoint ? '<span class="badge badge-amber">⭐ Checkpoint Tuần</span>' : ''}
                ${dayData.isMockTest ? '<span class="badge badge-terracotta">🎯 Thi thử Tổng hợp</span>' : ''}
              </div>
              <h1 class="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--ink-primary)]">
                ${dayData.title}
              </h1>
              <p class="text-sm text-[var(--ink-secondary)] mt-1 font-editorial italic">
                Chủ đề tích hợp: ${dayData.theme}
              </p>
            </div>

            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1 bg-[var(--surface-muted)] p-1 rounded-lg border border-[var(--border-subtle)]">
                <button onclick="window.app.setDay(${this.currentDay - 1})" 
                        class="btn btn-ghost px-2 py-1 text-xs" ${this.currentDay <= 1 ? 'disabled' : ''}>← Trước</button>
                <span class="font-mono text-xs font-bold px-2">${String(this.currentDay).padStart(2, '0')}</span>
                <button onclick="window.app.setDay(${this.currentDay + 1})" 
                        class="btn btn-ghost px-2 py-1 text-xs" ${this.currentDay >= this.totalDays ? 'disabled' : ''}>Sau →</button>
              </div>

              <div class="hidden sm:flex items-center gap-2 bg-[var(--surface-muted)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
                <span class="text-xs text-[var(--ink-secondary)]">Nhịp học:</span>
                <select id="day-rhythm-select" onchange="window.app.setRhythm(this.value)" 
                        class="bg-transparent text-xs font-bold text-[var(--accent-terracotta)] font-mono outline-none cursor-pointer">
                  ${this.trackMeta.rhythms.map(r => `
                    <option value="${r}" ${this.rhythm === r ? 'selected' : ''}>${r} Phút (${RHYTHM_CONFIGS[r] ? RHYTHM_CONFIGS[r].badge : ''})</option>
                  `).join('')}
                </select>
              </div>
            </div>
          </div>

          <div class="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg text-xs flex items-center justify-between gap-2 border border-[var(--border-subtle)]">
            <span class="text-[var(--ink-secondary)]">
              ℹ️ <strong>Phạm vi bài tập theo nhịp ${rhythmInfo.label}:</strong> ${rhythmInfo.description}
            </span>
            <span class="badge badge-muted">${rhythmInfo.badge}</span>
          </div>
        </div>

        ${this.mode === 'guided' ? (() => {
          const { steps, currentIdx, allDone, currentId } = this.computeDaySteps(dayData, dayProgress);
          const currentStep = allDone ? null : steps[currentIdx];
          return `
          <div class="editorial-card p-4 mb-6">
            <div class="flex items-center justify-between gap-2 mb-3 flex-wrap">
              <span class="font-mono text-xs font-bold text-[var(--ink-primary)]">🧭 LỘ TRÌNH NGÀY HÔM NAY</span>
              <span class="text-[11px] text-[var(--ink-secondary)]">${allDone ? `Hoàn thành ${steps.length}/${steps.length}` : `Bước ${currentIdx + 1}/${steps.length}`}</span>
            </div>
            <div class="flex flex-wrap gap-1.5 mb-2">
              ${steps.map((s, i) => {
                const state = allDone ? 'done' : (i < currentIdx ? 'done' : (i === currentIdx ? 'current' : 'locked'));
                return `
                <button onclick="window.app.jumpStep('${s.id}')" class="px-2 py-1 rounded-md text-[11px] font-bold border transition-all ${state === 'done' ? 'bg-[var(--accent-sage)]/10 text-[var(--accent-sage)] border-[var(--accent-sage)]/30' : state === 'current' ? 'bg-[var(--accent-terracotta)] text-white border-[var(--accent-terracotta)]' : 'bg-[var(--surface-muted)] text-[var(--ink-muted)] border-[var(--border-subtle)]'}">${state === 'done' ? '✓' : state === 'current' ? '▶' : '🔒'} ${i + 1}. ${s.label}</button>
              `;
              }).join('')}
            </div>
            <p class="text-[11px] text-[var(--ink-secondary)] leading-relaxed">
              ${allDone
                ? '🎉 Tất cả bước hôm nay đã xong. Nhớ ghi nhật ký lỗi, chốt sản phẩm nộp, rồi chuyển sang ngày tiếp theo.'
                : 'Đang ở bước: <strong>' + currentStep.label + '</strong> — làm xong bước này, bước kế tiếp sẽ mở ra. Bấm chip để xem lại bước đã xong.'}
            </p>
          </div>
        `;
        })() : ''}

        <!-- 3 Columns Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- LEFT NAV (Desktop) -->
          <div class="hidden lg:block lg:col-span-3 space-y-4">
            <div class="editorial-card p-4 sticky top-20">
              <h3 class="font-display text-sm font-bold text-[var(--ink-primary)] mb-3 flex items-center justify-between">
                <span>${this.trackMeta.label}</span>
                <span class="font-mono text-xs text-[var(--ink-secondary)]">${dayData.day}/${this.totalDays}</span>
              </h3>
              <div class="space-y-1.5 max-h-[calc(100vh-220px)] overflow-y-auto pr-1">
                ${this.curriculum.map(item => `
                  <button onclick="window.app.setDay(${item.day})" 
                          class="w-full text-left p-2 rounded-md text-xs font-medium transition-all flex items-center justify-between ${item.day === this.currentDay ? 'bg-[var(--accent-terracotta)] text-white font-bold' : 'hover:bg-[var(--surface-muted)] text-[var(--ink-secondary)]'}">
                    <span class="truncate">Ngày ${String(item.day).padStart(2, '0')}: ${item.theme}</span>
                    ${item.isCheckpoint ? '<span class="text-[10px] ml-1">⭐</span>' : ''}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- CENTER COLUMN -->
          <div class="lg:col-span-6 space-y-6">

            <!-- 1. Orientation -->
            <section data-step-group="terrain" class="editorial-card p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="font-mono text-xs font-bold text-[var(--accent-terracotta)]">01. ĐỊNH HƯỚNG HỌC TẬP</span>
              </div>
              <p class="text-sm leading-relaxed text-[var(--ink-primary)]">${dayData.orientation}</p>
            </section>

            <!-- 2. Checklist -->
            <section data-step-group="terrain" class="editorial-card p-5">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-[var(--accent-sage)]">02. TIÊU CHÍ HOÀN THÀNH</span>
                <span class="text-xs text-[var(--ink-secondary)]">Đánh dấu khi xong</span>
              </div>
              <div class="space-y-2.5">
                ${dayData.checklist.map((item, idx) => {
                  const isChecked = dayProgress.checklistCompleted?.includes(idx);
                  return `
                    <label class="flex items-start gap-3 p-2 rounded hover:bg-[var(--surface-muted)] cursor-pointer transition-all">
                      <input type="checkbox" onchange="window.app.toggleChecklist(${idx})" 
                             class="mt-0.5 rounded text-[var(--accent-sage)] focus:ring-0 cursor-pointer" ${isChecked ? 'checked' : ''}>
                      <span class="text-xs sm:text-sm ${isChecked ? 'line-through text-[var(--ink-muted)]' : 'text-[var(--ink-primary)]'}">${item}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </section>

            <!-- 3. Overview -->
            <section data-step-group="terrain" class="editorial-card p-5">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-[var(--ink-secondary)]">03. TỔNG QUAN TRONG NGÀY</span>
                <span class="badge badge-muted font-mono">${rhythmInfo.label}</span>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                ${dayData.overview.schedule.map(s => `
                  <div class="p-2.5 bg-[var(--surface-muted)] rounded-lg text-xs">
                    <span class="font-mono text-[var(--accent-terracotta)] font-bold block">${s.time}</span>
                    <span class="font-semibold text-[var(--ink-primary)] block">${s.name}</span>
                    <span class="text-[var(--ink-muted)] text-[11px]">${s.note}</span>
                  </div>
                `).join('')}
              </div>
            </section>

            <!-- 4. Reading Module -->
            ${dayData.reading ? `
            <section data-step-group="reading" class="editorial-card p-5 border-l-4 border-l-[var(--accent-terracotta)]">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <span class="font-mono text-xs font-bold text-[var(--accent-terracotta)]">04. READING & EVIDENCE LOG</span>
                  <h3 class="font-display text-base font-bold text-[var(--ink-primary)]">${dayData.reading.title}</h3>
                </div>
                <span class="badge badge-muted text-xs">Gợi ý: ${rhythmInfo.moduleBudgets.reading}m</span>
              </div>

              ${this._readingModuleHtml(dayData.reading, dayProgress)}

              <!-- Evidence Logger -->
              <div class="p-4 bg-[var(--surface-muted)] rounded-lg border border-[var(--border-subtle)]">
                <h4 class="font-display text-xs font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span>📋 Phiếu ghi Bằng chứng (Evidence Log)</span>
                </h4>
                <div class="space-y-3">
                  <div>
                    <label class="text-[11px] font-semibold text-[var(--ink-secondary)] block mb-1">Vị trí thông tin trong bài đọc:</label>
                    <input type="text" id="reading-loc-input" value="${dayProgress.readingEvidence?.locator || ''}" 
                           placeholder="Ví dụ: Đoạn [B], dòng 3-5" 
                           onchange="window.app.saveReadingEvidence()" 
                           class="w-full text-xs p-2 rounded bg-[var(--surface)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-terracotta)]">
                  </div>
                  <div>
                    <label class="text-[11px] font-semibold text-[var(--ink-secondary)] block mb-1">Cặp Paraphrase (Từ khóa câu hỏi ↔ Cụm từ bài đọc):</label>
                    <input type="text" id="reading-para-input" value="${dayProgress.readingEvidence?.paraphrase || ''}" 
                           placeholder="Ví dụ: systemic efficiency <-> resource allocation" 
                           onchange="window.app.saveReadingEvidence()" 
                           class="w-full text-xs p-2 rounded bg-[var(--surface)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-terracotta)]">
                  </div>
                  <div>
                    <label class="text-[11px] font-semibold text-[var(--ink-secondary)] block mb-1">Lý do chọn sai hoặc bẫy cần nhớ:</label>
                    <input type="text" id="reading-err-input" value="${dayProgress.readingEvidence?.errorReason || ''}" 
                           placeholder="Ví dụ: Bỏ sót trạng từ 'rarely', đọc lướt quá vội" 
                           onchange="window.app.saveReadingEvidence()" 
                           class="w-full text-xs p-2 rounded bg-[var(--surface)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-terracotta)]">
                  </div>
                </div>
              </div>
            </section>
            ` : ''}

            <!-- 5. Listening Module (NEW) -->
            ${dayData.listening ? `
            <section data-step-group="listening" class="editorial-card p-5 border-l-4 border-l-[var(--accent-sage)]">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <span class="font-mono text-xs font-bold text-[var(--accent-sage)]">05. LISTENING MODULE (MỚI BỔ SUNG)</span>
                  <h3 class="font-display text-base font-bold text-[var(--ink-primary)]">${dayData.listening.title}</h3>
                </div>
                <span class="badge badge-sage font-mono text-xs">${dayData.listening.part}</span>
              </div>
              <p class="text-xs text-[var(--ink-secondary)] mb-4">Dạng câu hỏi: <strong>${dayData.listening.type}</strong></p>

              <!-- Audio Player -->
              <div class="p-4 bg-[var(--surface-muted)] rounded-lg border border-[var(--border-subtle)] mb-4">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div class="flex items-center gap-2">
                    <button onclick="window.app.toggleListeningAudio()" id="btn-play-listening" class="btn btn-primary px-3 py-1.5 text-xs">
                      ▶️ Phát Audio
                    </button>
                    <button onclick="window.app.seekListening(-5)" class="btn btn-secondary px-2 py-1 text-xs">⏪ -5s</button>
                    <button onclick="window.app.seekListening(5)" class="btn btn-secondary px-2 py-1 text-xs">⏩ +5s</button>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-xs text-[var(--ink-secondary)]">Tốc độ:</span>
                    <select id="audio-speed-select" onchange="window.app.changeAudioSpeed(this.value)" class="text-xs bg-[var(--surface)] p-1 rounded border border-[var(--border-subtle)] font-mono">
                      <option value="0.75">0.75x</option>
                      <option value="1" selected>1.0x (Chuẩn)</option>
                      <option value="1.25">1.25x</option>
                    </select>
                    <span class="badge badge-muted font-mono text-xs" id="listen-counter-badge">
                      Lượt nghe: ${dayProgress.listeningListenCount || 0}
                    </span>
                  </div>
                </div>

                <audio id="listening-audio-player" src="${dayData.listening.audioUrl}" preload="none" onended="window.app.onListeningEnded()"></audio>
                <div class="text-[11px] text-[var(--ink-secondary)] flex items-center justify-between">
                  <span>Quy tắc: <em>Lượt 1 thi thật (1 lần nghe). Lượt 2 tự soát trước khi xem đáp án.</em></span>
                  <span class="font-mono text-[var(--accent-sage)]">${dayData.listening.duration}</span>
                </div>
              </div>

              <!-- Questions -->
              <div class="space-y-3 mb-4">
                ${dayData.listening.questions.map((lq, lIdx) => `
                  <div class="p-3 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-lg text-xs">
                    <p class="font-semibold mb-2 text-[var(--ink-primary)]">${lIdx + 1}. ${lq.prompt}</p>
                    ${lq.options ? `
                      <div class="space-y-1">
                        ${lq.options.map(opt => `
                          <label class="flex items-center gap-2 p-1 rounded hover:bg-[var(--surface-muted)] cursor-pointer">
                            <input type="radio" name="${lq.id}" value="${opt[0]}" onchange="window.app.saveListeningAnswer('${lq.id}', '${opt[0]}')"
                                   ${dayProgress.listeningAnswers?.[lq.id] === opt[0] ? 'checked' : ''} class="text-[var(--accent-sage)]">
                            <span>${opt}</span>
                          </label>
                        `).join('')}
                      </div>
                    ` : `
                      <input type="text" placeholder="Nhập từ cần điền (tối đa 2 từ)..." 
                             value="${dayProgress.listeningAnswers?.[lq.id] || ''}" 
                             onchange="window.app.saveListeningAnswer('${lq.id}', this.value)"
                             class="w-full p-2 bg-[var(--surface-muted)] rounded border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-sage)]">
                    `}
                  </div>
                `).join('')}
              </div>

              <!-- Transcript Drawer -->
              <div class="border-t border-[var(--border-subtle)] pt-3">
                <button onclick="window.app.toggleTranscript()" class="btn btn-secondary w-full text-xs py-2 mb-3">
                  📄 Mở Transcript & Phiếu 3 Lỗi Ưu tiên
                </button>

                <div id="listening-transcript-drawer" class="hidden p-3 bg-[var(--surface-muted)] rounded-lg text-xs space-y-3">
                  <div class="font-editorial text-xs leading-relaxed max-h-48 overflow-y-auto p-2 bg-[var(--surface)] rounded border border-[var(--border-subtle)]">
                    ${dayData.listening.transcript.split(/\n/).map(l => `<p class="mb-1">${l}</p>`).join('')}
                  </div>
                  <div>
                    <h5 class="font-bold text-[var(--ink-primary)] mb-1">Phiếu Ghi 3 Lỗi Ưu tiên Listening hôm nay:</h5>
                    <div class="space-y-2">
                      <select id="listening-err-category" class="w-full text-xs p-1.5 rounded bg-[var(--surface)] border border-[var(--border-subtle)]">
                        <option value="">-- Chọn loại lỗi mắc phải --</option>
                        ${dayData.listening.commonErrorCategories.map(c => `<option value="${c}">${c}</option>`).join('')}
                      </select>
                      <input type="text" id="listening-err-desc" placeholder="Mô tả cụ thể (Ví dụ: Không nghe được âm -s ở từ 'participants')" 
                             class="w-full text-xs p-2 rounded bg-[var(--surface)] border border-[var(--border-subtle)]">
                      <button onclick="window.app.addListeningError()" class="btn btn-primary text-xs w-full py-1.5">
                        Lưu vào Nhật ký lỗi ưu tiên
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            ` : ''}

            <!-- 6. Writing Module -->
            ${dayData.writing ? `
            <section data-step-group="writing" class="editorial-card p-5 border-l-4 border-l-[var(--accent-amber)]">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <span class="font-mono text-xs font-bold text-[var(--accent-amber)]">06. WRITING TASK & REWRITE</span>
                  <h3 class="font-display text-base font-bold text-[var(--ink-primary)]">${dayData.writing.task}</h3>
                </div>
                <span class="badge badge-muted text-xs">${dayData.writing.targetWords}</span>
              </div>

              <div class="p-3 bg-[var(--surface-muted)] rounded-lg text-xs sm:text-sm font-semibold text-[var(--ink-primary)] mb-3">
                ${dayData.writing.prompt}
              </div>
              <p class="text-xs text-[var(--ink-secondary)] mb-4 italic">${dayData.writing.guidance}</p>

              <!-- FIRST DRAFT -->
              <div class="mb-4">
                <div class="flex items-center justify-between mb-1.5">
                  <span class="text-xs font-bold flex items-center gap-1.5">
                    ${dayProgress.writingFirstDraftLocked ? '<span class="immutable-badge">🔒 Bản đầu tiên (Bất biến)</span>' : '<span>📝 Bản làm đầu tiên (First Draft)</span>'}
                  </span>
                  <span class="font-mono text-xs text-[var(--ink-muted)]" id="first-draft-wc">0 từ</span>
                </div>
                <textarea id="first-draft-textarea" rows="6" 
                          placeholder="Viết trực tiếp bản nháp đầu tiên vào đây. Không dùng từ điển..."
                          oninput="window.app.updateWordCount(this.value, 'first-draft-wc')"
                          ${dayProgress.writingFirstDraftLocked ? 'readonly class="w-full p-3 text-xs sm:text-sm rounded-lg bg-[var(--surface-muted)] text-[var(--ink-secondary)] border border-[var(--border-subtle)] outline-none"' : 'class="w-full p-3 text-xs sm:text-sm rounded-lg bg-[var(--surface)] text-[var(--ink-primary)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-amber)]"'}
                >${dayProgress.writingFirstDraft || ''}</textarea>
                
                ${!dayProgress.writingFirstDraftLocked ? `
                  <button onclick="window.app.submitFirstDraft()" id="btn-submit-first-draft" class="btn btn-primary text-xs mt-2 w-full py-2">
                    🔒 Nộp bản đầu tiên & Mở khóa bài mẫu (Ctrl+Enter)
                  </button>
                ` : ''}
              </div>

              <!-- MODEL & REWRITE -->
              ${dayProgress.writingFirstDraftLocked ? `
                <div class="p-4 bg-[var(--accent-amber-light)] rounded-lg border border-[var(--accent-amber)] mb-4">
                  <h4 class="font-display text-xs font-bold text-[var(--accent-amber)] mb-2">
                    ✨ Bài mẫu chuẩn Academic (Band 8.0+)
                  </h4>
                  <div class="text-xs sm:text-sm font-editorial leading-relaxed max-h-56 overflow-y-auto mb-2 text-[var(--ink-primary)]">
                    ${dayData.writing.modelAnswer.split(/\n\s*\n/).map(p => `<p class="mb-2">${p}</p>`).join('')}
                  </div>
                  <p class="text-[11px] text-[var(--ink-secondary)] italic border-t border-[var(--accent-amber)] pt-2">
                    <strong>Nhận xét:</strong> ${dayData.writing.examinerNotes}
                  </p>
                </div>

                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <span class="text-xs font-bold text-[var(--accent-sage)]">
                      ✏️ Bản viết lại (Rewrite / Second Attempt)
                    </span>
                    <span class="font-mono text-xs text-[var(--ink-muted)]" id="rewrite-wc">0 từ</span>
                  </div>
                  <textarea id="rewrite-textarea" rows="6" 
                            placeholder="Viết lại đoạn văn sau khi đã đối chiếu với bài mẫu..."
                            oninput="window.app.updateWordCount(this.value, 'rewrite-wc')"
                            onchange="window.app.saveRewriteDraft(this.value)"
                            class="w-full p-3 text-xs sm:text-sm rounded-lg bg-[var(--surface)] text-[var(--ink-primary)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-sage)]"
                  >${dayProgress.writingRewrite || ''}</textarea>
                  <button onclick="window.app.saveRewriteDraft(document.getElementById('rewrite-textarea').value)" class="btn btn-secondary text-xs mt-2 w-full py-1.5">
                    Lưu bản viết lại vào Portfolio
                  </button>
                </div>
              ` : ''}

              <div class="mt-4 p-4 rounded-lg border border-dashed border-[var(--border-subtle)] bg-[var(--surface-muted)]">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-[var(--accent-terracotta)]">🤖 AI Phản hồi cá nhân</span>
                  <span class="font-mono text-[11px] text-[var(--ink-muted)]">Gemini 3.6 Flash (Google) · vài lượt/ngày</span>
                </div>
                <p class="text-[11px] text-[var(--ink-secondary)] mb-2">Chấm nhanh bản viết của bạn theo tiêu chí thực, chỉ rõ lỗi và mẹo sửa. Nếu mạng lỗi, các bước tự học vẫn hoạt động bình thường.</p>
                <button onclick="window.app.aiAnalyze('writing')" id="ai-writing-btn" class="btn btn-secondary text-xs w-full py-1.5">
                  ✨ Nhận phản hồi AI
                </button>
                <div id="ai-writing-box" class="hidden mt-2 text-xs"></div>
              </div>
            </section>
            ` : ''}

            <!-- 7. Speaking Module -->
            ${dayData.speaking ? `
            <section data-step-group="speaking" class="editorial-card p-5">
              <div class="flex items-center justify-between mb-2">
                <div>
                  <span class="font-mono text-xs font-bold text-[var(--accent-terracotta)]">07. SPEAKING DUAL-RECORD</span>
                  <h3 class="font-display text-base font-bold text-[var(--ink-primary)]">${dayData.speaking.part}</h3>
                </div>
              </div>
              <div class="p-3 bg-[var(--surface-muted)] rounded-lg text-xs sm:text-sm mb-4">
                <strong>Đề bài:</strong> ${dayData.speaking.prompt}
              </div>

              <!-- Record Attempt 1 -->
              <div class="p-4 bg-[var(--surface-muted)] rounded-lg border border-[var(--border-subtle)] mb-4">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-[var(--ink-primary)]">🎙️ Lần ghi âm 1 (Trung thực)</span>
                  <span class="font-mono text-xs" id="rec1-timer">00:00</span>
                </div>
                <canvas id="waveform-canvas-1" width="300" height="40" class="w-full bg-[var(--surface)] rounded mb-3"></canvas>
                <div class="flex items-center gap-2">
                  <button onclick="window.app.toggleRecordAttempt(1)" id="btn-rec-1" class="btn btn-primary text-xs py-2 flex-1">
                    🔴 Bắt đầu Thu âm Lần 1
                  </button>
                  <audio id="playback-audio-1" controls class="h-8 flex-1 hidden"></audio>
                </div>
              </div>

              <!-- Transcription -->
              <div class="mb-4">
                <label class="text-xs font-semibold text-[var(--ink-secondary)] block mb-1">
                  Chép lời 30 giây đầu tiên (Nghe lại và ghi âm trung thực):
                </label>
                <textarea id="speaking-transcript-input" rows="3" 
                          placeholder="Gõ lại chính xác, giữ nguyên các lỗi ngập ngừng hoặc sai ngữ pháp..."
                          onchange="window.app.saveSpeakingTranscript(this.value)"
                          class="w-full p-2.5 text-xs rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-terracotta)]"
                >${dayProgress.speakingTranscript || ''}</textarea>
              </div>

              <!-- Record Attempt 2 -->
              <div class="p-4 bg-[var(--surface-muted)] rounded-lg border border-[var(--border-subtle)]">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-[var(--accent-sage)]">🎙️ Lần ghi âm 2 (Sau khi đã sửa lỗi)</span>
                  <span class="font-mono text-xs" id="rec2-timer">00:00</span>
                </div>
                <canvas id="waveform-canvas-2" width="300" height="40" class="w-full bg-[var(--surface)] rounded mb-3"></canvas>
                <div class="flex items-center gap-2">
                  <button onclick="window.app.toggleRecordAttempt(2)" id="btn-rec-2" class="btn btn-secondary text-xs py-2 flex-1">
                    🔴 Bắt đầu Thu âm Lần 2
                  </button>
                  <audio id="playback-audio-2" controls class="h-8 flex-1 hidden"></audio>
                </div>
              </div>

              <div class="mt-4 p-4 rounded-lg border border-dashed border-[var(--border-subtle)] bg-[var(--surface-muted)]">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-xs font-bold text-[var(--accent-terracotta)]">🤖 AI Phản hồi cá nhân</span>
                  <span class="font-mono text-[11px] text-[var(--ink-muted)]">Gemini 3.6 Flash (Google) · vài lượt/ngày</span>
                </div>
                <p class="text-[11px] text-[var(--ink-secondary)] mb-2">Chấm bản chép lời của bạn: mạch lạc, lỗi nổi bật và mẹo nói tự nhiên hơn.</p>
                <button onclick="window.app.aiAnalyze('speaking')" id="ai-speaking-btn" class="btn btn-secondary text-xs w-full py-1.5">
                  ✨ Nhận phản hồi AI
                </button>
                <div id="ai-speaking-box" class="hidden mt-2 text-xs"></div>
              </div>
            </section>
            ` : ''}

            <!-- 8. Vocabulary -->
            ${dayData.vocabulary && dayData.vocabulary.length ? `
            <section data-step-group="vocab" class="editorial-card p-5">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono text-xs font-bold text-[var(--accent-terracotta)]">08. VOCABULARY PHRASE BANK</span>
                <span class="badge badge-muted text-xs">Chủ đề: ${dayData.theme}</span>
              </div>
              <div class="space-y-3">
                ${dayData.vocabulary.map((vocab) => `
                  <div class="p-3 bg-[var(--surface-muted)] rounded-lg border border-[var(--border-subtle)]">
                    <div class="flex items-baseline justify-between mb-1">
                      <span class="font-display text-sm font-bold text-[var(--accent-terracotta)]">${vocab.term}</span>
                      <span class="font-mono text-xs text-[var(--ink-muted)]">${vocab.phonetic}</span>
                    </div>
                    <p class="text-xs text-[var(--ink-secondary)] mb-1.5"><strong>Ý nghĩa:</strong> ${vocab.meaning}</p>
                    <p class="text-xs text-[var(--ink-muted)] font-editorial italic mb-2"><strong>Mẫu:</strong> "${vocab.example}"</p>
                    <input type="text" placeholder="Tự viết 1 câu ví dụ của riêng bạn..." 
                           value="${dayProgress.vocabExamples?.[vocab.term] || ''}" 
                           onchange="window.app.saveVocabExample('${vocab.term}', this.value)"
                           class="w-full text-xs p-2 rounded bg-[var(--surface)] border border-[var(--border-subtle)] outline-none focus:border-[var(--accent-terracotta)]">
                  </div>
                `).join('')}
              </div>
            </section>
            ` : ''}

            <!-- 9. Grammar Drill -->
            ${dayData.grammar ? `
            <section data-step-group="grammar" class="editorial-card p-5">
              <div class="flex items-center justify-between mb-2">
                <span class="font-mono text-xs font-bold text-[var(--ink-secondary)]">09. GRAMMAR DRILL</span>
              </div>
              <h4 class="font-display text-sm font-bold text-[var(--ink-primary)] mb-1">${dayData.grammar.title}</h4>
              <p class="text-xs text-[var(--ink-secondary)] mb-3">${dayData.grammar.explanation}</p>
              <div class="p-3 bg-[var(--surface-muted)] rounded-lg text-xs mb-3 font-mono">
                ${dayData.grammar.drillQuestion}
              </div>
              <textarea id="grammar-answer-input" rows="2" 
                        placeholder="Nhập câu trả lời của bạn..." 
                        onchange="window.app.saveGrammarAnswer(this.value)"
                        class="w-full text-xs p-2.5 rounded bg-[var(--surface)] border border-[var(--border-subtle)] outline-none focus:border-[var(--ink-secondary)] mb-2"
              >${dayProgress.grammarAnswer || ''}</textarea>
              <button onclick="document.getElementById('grammar-sample-box').classList.toggle('hidden')" class="btn btn-ghost text-xs py-1">
                👁️ Xem câu mẫu đối chiếu
              </button>
              <div id="grammar-sample-box" class="hidden p-2.5 bg-[var(--surface-muted)] rounded text-xs text-[var(--accent-sage)] mt-2 font-mono">
                ${dayData.grammar.sampleAnswer}
              </div>
            </section>
            ` : ''}

            <!-- 10. Deliverables List -->
            ${dayData.deliverables && dayData.deliverables.length ? `
            <section data-step-group="deliverables" class="editorial-card p-5 bg-[var(--surface-muted)]">
              <div class="flex items-center justify-between mb-2">
                <span class="font-mono text-xs font-bold text-[var(--ink-primary)]">10. SẢN PHẨM CẦN NỘP CUỐI NGÀY</span>
                <span class="badge badge-sage">Tự động đồng bộ</span>
              </div>
              <p class="text-xs text-[var(--ink-secondary)] mb-3">Tất cả sản phẩm học tập được đặt tên chuẩn hoá và lưu vào Hồ sơ Portfolio:</p>
              <ul class="space-y-1.5 text-xs font-mono text-[var(--ink-secondary)]">
                ${dayData.deliverables.map(file => `
                  <li class="flex items-center gap-2 p-1 bg-[var(--surface)] rounded border border-[var(--border-subtle)]">
                    <span class="text-[var(--accent-terracotta)]">📄</span>
                    <span class="truncate">${file}</span>
                  </li>
                `).join('')}
              </ul>
            </section>
            ` : ''}

          </div>

          <!-- RIGHT COLUMN (Desktop) -->
          <div class="hidden lg:block lg:col-span-3 space-y-4">
            <div class="editorial-card p-4 sticky top-20">
              
              <!-- Timer Widget -->
              <div class="text-center pb-4 border-b border-[var(--border-subtle)] mb-4">
                <span class="text-xs text-[var(--ink-secondary)] block mb-1">Đồng hồ Bấm giờ</span>
                <div class="timer-pill justify-center text-xl w-full mb-3">
                  ⏱️ <span class="app-timer-display">90:00</span>
                </div>
                <div class="flex gap-2">
                  <button onclick="window.app.timerRunning ? window.app.pauseTimer() : window.app.startTimer()" 
                          id="timer-toggle-btn" class="btn btn-primary text-xs flex-1 py-1.5">
                    ▶️ Bắt đầu
                  </button>
                  <button onclick="window.app.resetTimer()" class="btn btn-secondary text-xs py-1.5 px-3">
                    🔄 Reset
                  </button>
                </div>
              </div>

              <!-- Quick Error Add -->
              <div>
                <h4 class="font-display text-xs font-bold text-[var(--ink-primary)] mb-2 flex items-center justify-between">
                  <span>Nhật ký lỗi nhanh</span>
                  <button onclick="window.app.navigateTo('error-log')" class="text-[11px] text-[var(--accent-terracotta)] hover:underline">Xem tất cả →</button>
                </h4>
                <div class="space-y-2">
                  <select id="quick-err-skill" class="w-full text-xs p-1.5 rounded bg-[var(--surface-muted)] border border-[var(--border-subtle)]">
                    <option value="Reading">Reading</option>
                    <option value="Listening">Listening</option>
                    <option value="Writing">Writing</option>
                    <option value="Speaking">Speaking</option>
                  </select>
                  <input type="text" id="quick-err-desc" placeholder="Mô tả lỗi cụ thể..." 
                         class="w-full text-xs p-2 rounded bg-[var(--surface-muted)] border border-[var(--border-subtle)]">
                  <button onclick="window.app.addQuickError()" class="btn btn-secondary text-xs w-full py-1">
                    + Thêm lỗi cần nhớ
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    `;
  }

  // --- Handlers for Daily Actions ---
  toggleChecklist(idx) {
    const progress = StorageService.getDayProgress(this.currentDay);
    const list = progress.checklistCompleted || [];
    const index = list.indexOf(idx);
    if (index > -1) list.splice(index, 1);
    else list.push(idx);
    progress.checklistCompleted = list;
    StorageService.saveDayProgress(this.currentDay, progress);
    this.render();
  }

  saveReadingAnswer(qId, val) {
    const progress = StorageService.getDayProgress(this.currentDay);
    progress.readingAnswers = progress.readingAnswers || {};
    progress.readingAnswers[qId] = val;
    StorageService.saveDayProgress(this.currentDay, progress);
  }

  saveReadingEvidence() {
    const loc = document.getElementById('reading-loc-input')?.value || '';
    const para = document.getElementById('reading-para-input')?.value || '';
    const err = document.getElementById('reading-err-input')?.value || '';
    const progress = StorageService.getDayProgress(this.currentDay);
    progress.readingEvidence = { locator: loc, paraphrase: para, errorReason: err };
    StorageService.saveDayProgress(this.currentDay, progress);
  }

  toggleListeningAudio() {
    const audio = document.getElementById('listening-audio-player');
    const btn = document.getElementById('btn-play-listening');
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => {
        if (btn) btn.innerHTML = '⏸️ Tạm dừng';
        const progress = StorageService.getDayProgress(this.currentDay);
        progress.listeningListenCount = (progress.listeningListenCount || 0) + 1;
        StorageService.saveDayProgress(this.currentDay, progress);
        const badge = document.getElementById('listen-counter-badge');
        if (badge) badge.textContent = `Lượt nghe: ${progress.listeningListenCount}`;
      }).catch(err => {
        alert('Trình phát Audio Listening đã sẵn sàng (Audio mô phỏng). Bạn có thể bấm tua, đổi tốc độ hoặc đọc transcript để đối chiếu.');
      });
    } else {
      audio.pause();
      if (btn) btn.innerHTML = '▶️ Phát Audio';
    }
  }

  seekListening(sec) {
    const audio = document.getElementById('listening-audio-player');
    if (audio) audio.currentTime += sec;
  }

  changeAudioSpeed(speed) {
    const audio = document.getElementById('listening-audio-player');
    if (audio) audio.playbackRate = parseFloat(speed);
  }

  onListeningEnded() {
    const btn = document.getElementById('btn-play-listening');
    if (btn) btn.innerHTML = '▶️ Phát Audio';
  }

  saveListeningAnswer(qId, val) {
    const progress = StorageService.getDayProgress(this.currentDay);
    progress.listeningAnswers = progress.listeningAnswers || {};
    progress.listeningAnswers[qId] = val;
    StorageService.saveDayProgress(this.currentDay, progress);
  }

  toggleTranscript() {
    const drawer = document.getElementById('listening-transcript-drawer');
    if (drawer) drawer.classList.toggle('hidden');
  }

  addListeningError() {
    const cat = document.getElementById('listening-err-category')?.value;
    const desc = document.getElementById('listening-err-desc')?.value;
    if (!cat || !desc) {
      alert('Vui lòng chọn loại lỗi và nhập mô tả chi tiết.');
      return;
    }
    StorageService.addErrorLog({
      day: this.currentDay,
      skill: 'Listening',
      errorType: cat,
      description: desc
    });
    alert('Đã lưu lỗi Listening vào Nhật ký lỗi ưu tiên!');
    document.getElementById('listening-err-desc').value = '';
  }

  submitFirstDraft() {
    const text = document.getElementById('first-draft-textarea')?.value.trim();
    if (!text || text.split(/\s+/).length < 20) {
      alert('Vui lòng hoàn thành bản nháp đầu tiên (tối thiểu 20 từ) trước khi nộp.');
      return;
    }
    if (confirm('Quy tắc bất biến: Sau khi nộp, bản nháp đầu tiên sẽ bị KHÓA vĩnh viễn để bảo tồn bằng chứng. Bạn có chắc chắn muốn nộp không?')) {
      const progress = StorageService.getDayProgress(this.currentDay);
      progress.writingFirstDraft = text;
      progress.writingFirstDraftLocked = true;
      StorageService.saveDayProgress(this.currentDay, progress);
      this.render();
    }
  }

  saveRewriteDraft(text) {
    const progress = StorageService.getDayProgress(this.currentDay);
    progress.writingRewrite = text;
    StorageService.saveDayProgress(this.currentDay, progress);
  }

  updateWordCount(text, targetId) {
    const count = text.trim() ? text.trim().split(/\s+/).length : 0;
    const el = document.getElementById(targetId);
    if (el) el.textContent = `${count} từ`;
  }

  async toggleRecordAttempt(attemptNum) {
    const recorder = attemptNum === 1 ? this.recorderAttempt1 : this.recorderAttempt2;
    const btn = document.getElementById(`btn-rec-${attemptNum}`);
    const timer = document.getElementById(`rec${attemptNum}-timer`);
    const canvas = document.getElementById(`waveform-canvas-${attemptNum}`);
    const audioPlayback = document.getElementById(`playback-audio-${attemptNum}`);

    if (!recorder.isRecording) {
      const res = await recorder.startRecording(canvas, (elapsed) => {
        const m = Math.floor(elapsed / 60);
        const s = elapsed % 60;
        if (timer) timer.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
      });

      if (!res.success) {
        alert(res.error);
        return;
      }

      if (btn) {
        btn.innerHTML = '⏹️ Dừng thu âm';
        btn.classList.add('bg-red-600', 'text-white');
      }
    } else {
      const { blob } = await recorder.stopRecording();
      if (btn) {
        btn.innerHTML = `✓ Đã thu âm Lần ${attemptNum} (Thu âm lại)`;
        btn.classList.remove('bg-red-600', 'text-white');
      }

      if (blob && audioPlayback) {
        const audioUrl = URL.createObjectURL(blob);
        audioPlayback.src = audioUrl;
        audioPlayback.classList.remove('hidden');

        const recId = `Day${String(this.currentDay).padStart(2, '0')}-Speaking-attempt${attemptNum}`;
        await StorageService.saveAudioRecording(recId, blob, { day: this.currentDay, attempt: attemptNum });
      }
    }
  }

  saveSpeakingTranscript(text) {
    const progress = StorageService.getDayProgress(this.currentDay);
    progress.speakingTranscript = text;
    StorageService.saveDayProgress(this.currentDay, progress);
  }

  currentAiText(kind) {
    const store = StorageService.getDayProgress(this.currentDay, this.track);
    if (kind === 'writing') {
      const rw = document.getElementById('rewrite-textarea');
      if (rw && rw.value.trim()) return rw.value.trim();
      const fd = document.getElementById('first-draft-textarea');
      if (fd && fd.value.trim()) return fd.value.trim();
      return (store.writingRewrite || store.writingFirstDraft || '').trim();
    }
    const sp = document.getElementById('speaking-transcript-input');
    if (sp && sp.value.trim()) return sp.value.trim();
    return (store.speakingTranscript || '').trim();
  }

  async aiAnalyze(kind) {
    const boxId = kind === 'writing' ? 'ai-writing-box' : 'ai-speaking-box';
    const btnId = kind === 'writing' ? 'ai-writing-btn' : 'ai-speaking-btn';
    const box = document.getElementById(boxId);
    const btn = document.getElementById(btnId);
    if (!box) return;
    const draft = this.currentAiText(kind);
    const show = (html) => {
      box.classList.remove('hidden');
      box.innerHTML = html;
    };
    if (draft.length < 10) {
      show('<p class="text-[var(--ink-muted)]">Chưa có nội dung đủ dài để phân tích' +
        (kind === 'writing' ? ' — viết bản nháp trước đã.' : ' — chép lời vào ô bản chép tiếng Anh trước đã.') + '</p>');
      return;
    }
    if (btn) btn.disabled = true;
    show('<p class="text-[var(--ink-muted)]">Đang phân tích, chờ vài giây...</p>');
    try {
      const day = this.curriculum[this.currentDay - 1] || {};
      const context = kind === 'writing'
        ? 'Ngày ' + this.currentDay + ' / ' + this.trackMeta.label + '. Đề bài: ' + (day.writing && day.writing.task ? day.writing.task : '') + ' — yêu cầu ' + (day.writing && day.writing.targetWords ? day.writing.targetWords : 'theo đề') + '.'
        : 'Ngày ' + this.currentDay + ' / ' + this.trackMeta.label + '. Phần: ' + ((day.speaking && day.speaking.part) || 'Speaking').slice(0, 200) + '.';
      const content = await requestAiFeedback({ feature: kind, text: draft, context });
      show('<div class="whitespace-pre-wrap leading-relaxed text-[var(--ink-primary)]">' + escapeHtml(content) + '</div>');
    } catch (e) {
      show('<p class="text-[var(--accent-terracotta)]">⚠️ ' + escapeForAttr(e.message) + ' — Các bước tự học vẫn dùng bình thường.</p>');
    } finally {
      if (btn) btn.disabled = false;
    }
  }

  saveVocabExample(term, example) {
    const progress = StorageService.getDayProgress(this.currentDay);
    progress.vocabExamples = progress.vocabExamples || {};
    progress.vocabExamples[term] = example;
    StorageService.saveDayProgress(this.currentDay, progress);
  }

  saveGrammarAnswer(val) {
    const progress = StorageService.getDayProgress(this.currentDay);
    progress.grammarAnswer = val;
    StorageService.saveDayProgress(this.currentDay, progress);
  }

  addQuickError() {
    const skill = document.getElementById('quick-err-skill')?.value;
    const desc = document.getElementById('quick-err-desc')?.value;
    if (!desc) return;
    StorageService.addErrorLog({
      day: this.currentDay,
      skill: skill,
      errorType: 'Lỗi ghi chú nhanh',
      description: desc
    });
    alert('Đã lưu lỗi vào Nhật ký!');
    document.getElementById('quick-err-desc').value = '';
  }

  bindDayDetailEvents() {
    const fd = document.getElementById('first-draft-textarea');
    if (fd) this.updateWordCount(fd.value, 'first-draft-wc');
    const rw = document.getElementById('rewrite-textarea');
    if (rw) this.updateWordCount(rw.value, 'rewrite-wc');
  }

  renderErrorLog() {
    const logs = StorageService.getErrorLog();
    const filtered = this.errorFilterSkill === 'all' 
      ? logs 
      : logs.filter(item => item.skill.toLowerCase() === this.errorFilterSkill.toLowerCase());

    return `
      <div class="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 mb-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="badge badge-terracotta font-mono mb-2">NHẬT KÝ LỖI HỌC TẬP</span>
              <h1 class="font-display text-2xl font-bold text-[var(--ink-primary)]">Personal Error Map</h1>
              <p class="text-xs sm:text-sm text-[var(--ink-secondary)]">Tổng hợp lỗi được ghi nhận xuyên suốt 21 ngày. Các lỗi lặp lại ≥ 2 lần sẽ được ưu tiên rèn luyện ở Ngày 18.</p>
            </div>
            <div class="flex gap-2">
              ${['all', 'Reading', 'Listening', 'Writing', 'Speaking'].map(skill => `
                <button onclick="window.app.filterErrors('${skill}')" 
                        class="btn ${this.errorFilterSkill === skill ? 'btn-primary' : 'btn-secondary'} text-xs px-3 py-1.5">
                  ${skill === 'all' ? 'Tất cả' : skill}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="space-y-3">
          ${filtered.length === 0 ? `
            <div class="editorial-card p-8 text-center text-xs text-[var(--ink-muted)]">
              Chưa có lỗi nào được ghi nhận cho bộ lọc này.
            </div>
          ` : filtered.map(err => `
            <div class="editorial-card p-4 flex items-center justify-between gap-4 ${err.recurring ? 'border-l-4 border-l-[var(--accent-terracotta)]' : ''}">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="badge badge-muted font-mono text-xs">${err.skill}</span>
                  <span class="font-mono text-xs text-[var(--ink-secondary)]">Ngày ${String(err.day).padStart(2, '0')}</span>
                  ${err.recurring ? '<span class="badge badge-terracotta text-[10px]">⚠️ Lặp lại ≥ 2 lần (Ưu tiên Ngày 18)</span>' : ''}
                </div>
                <h4 class="font-display text-sm font-bold text-[var(--ink-primary)] mb-0.5">${err.errorType}</h4>
                <p class="text-xs text-[var(--ink-secondary)]">${err.description}</p>
              </div>
              <div class="text-right shrink-0">
                <span class="font-mono text-xs text-[var(--ink-muted)] block">Tần suất: ${err.frequency || 1} lần</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  filterErrors(skill) {
    this.errorFilterSkill = skill;
    this.render();
  }

  renderPortfolio() {
    const progress = StorageService.getAllProgress();
    const recordedDays = Object.keys(progress).length;

    return `
      <div class="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 mb-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="badge badge-sage font-mono mb-2">HỒ SƠ HỌC TẬP TOÀN DIỆN</span>
              <h1 class="font-display text-2xl font-bold text-[var(--ink-primary)]">Final Audit Portfolio</h1>
              <p class="text-xs sm:text-sm text-[var(--ink-secondary)]">Toàn bộ bằng chứng học tập (bài viết nháp, rewrite, file ghi âm, bảng paraphrase) được lưu trữ theo cấu trúc thư mục ảo.</p>
            </div>
            <div class="flex gap-2">
              <button onclick="window.app.downloadPortfolioJson()" class="btn btn-primary text-xs px-4 py-2">
                📥 Tải File JSON Hồ Sơ
              </button>
              <button onclick="window.print()" class="btn btn-secondary text-xs px-4 py-2">
                🖨️ In Báo Cáo Portfolio
              </button>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div class="editorial-card p-4">
            <h4 class="font-bold text-sm text-[var(--ink-primary)] mb-2 flex items-center gap-2">
              <span>📁 01_Baseline_Day01</span>
            </h4>
            <p class="text-xs text-[var(--ink-secondary)] mb-3">Đo lường năng lực ban đầu Ngày 1 làm mốc đối chiếu.</p>
            <span class="badge badge-muted text-xs">Đã lưu trữ</span>
          </div>

          <div class="editorial-card p-4">
            <h4 class="font-bold text-sm text-[var(--ink-primary)] mb-2 flex items-center gap-2">
              <span>📁 02_Reading_Evidence</span>
            </h4>
            <p class="text-xs text-[var(--ink-secondary)] mb-3">Phiếu xác định vị trí thông tin và các cặp paraphrase.</p>
            <span class="badge badge-muted text-xs">${recordedDays} bài đọc đã phân tích</span>
          </div>

          <div class="editorial-card p-4">
            <h4 class="font-bold text-sm text-[var(--ink-primary)] mb-2 flex items-center gap-2">
              <span>📁 03_Listening_Logs</span>
            </h4>
            <p class="text-xs text-[var(--ink-secondary)] mb-3">Nhật ký 2 lượt nghe và phân loại 3 lỗi ưu tiên mỗi ngày.</p>
            <span class="badge badge-muted text-xs">${recordedDays} bài nghe lưu trữ</span>
          </div>

          <div class="editorial-card p-4">
            <h4 class="font-bold text-sm text-[var(--ink-primary)] mb-2 flex items-center gap-2">
              <span>📁 04_Writing_Drafts</span>
            </h4>
            <p class="text-xs text-[var(--ink-secondary)] mb-3">Bản làm đầu tiên (bất biến) và bản viết lại hoàn thiện.</p>
            <span class="badge badge-muted text-xs">${recordedDays} cặp bản thảo</span>
          </div>

          <div class="editorial-card p-4">
            <h4 class="font-bold text-sm text-[var(--ink-primary)] mb-2 flex items-center gap-2">
              <span>📁 05_Speaking_Recordings</span>
            </h4>
            <p class="text-xs text-[var(--ink-secondary)] mb-3">Bản ghi âm lần 1, bản chép lời và bản ghi âm lần 2.</p>
            <span class="badge badge-muted text-xs">MediaRecorder WebM format</span>
          </div>

          <div class="editorial-card p-4">
            <h4 class="font-bold text-sm text-[var(--ink-primary)] mb-2 flex items-center gap-2">
              <span>📁 06_Checkpoints_Audit</span>
            </h4>
            <p class="text-xs text-[var(--ink-secondary)] mb-3">Biên bản đánh giá định kỳ Ngày 7, Ngày 14 và Ngày 21.</p>
            <span class="badge badge-muted text-xs">3 mốc kiểm soát</span>
          </div>
        </div>
      </div>
    `;
  }

  downloadPortfolioJson() {
    const data = StorageService.exportFullPortfolio();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IELTS-Marathon-Portfolio-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  }

  renderCheckpoint(cpDay) {
    const milestone = this.trackMeta.milestones.find(m => m.day === cpDay);
    const cpTitle = milestone ? milestone.label : `Đánh giá mốc kiểm soát Ngày ${cpDay}`;

    return `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 mb-6">
          <div class="flex items-center justify-between mb-2">
            <span class="badge badge-amber font-mono">ĐÁNH GIÁ MỐC KIỂM SOÁT</span>
            <div class="flex gap-2">
              ${this.trackMeta.checkpoints.map(c => `
                <button onclick="window.app.renderCheckpointWithDay(${c})" class="btn ${cpDay === c ? 'btn-primary' : 'btn-secondary'} text-xs px-2.5 py-1">Ngày ${c}</button>
              `).join('')}
            </div>
          </div>
          <h1 class="font-display text-2xl font-bold text-[var(--ink-primary)] mb-1">${cpTitle}</h1>
          <p class="text-xs sm:text-sm text-[var(--ink-secondary)]">So sánh sản phẩm học tập đầu kỳ và hiện tại. Đo lường xu hướng giảm số lỗi theo thời gian.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div class="editorial-card p-4">
            <span class="text-xs text-[var(--ink-secondary)] block mb-1">Độ chính xác Reading</span>
            <div class="flex items-baseline justify-between">
              <span class="font-display text-xl font-bold text-[var(--accent-terracotta)]">72%</span>
              <span class="text-xs text-[var(--accent-sage)]">↑ +18% so với Ngày 1</span>
            </div>
          </div>
          <div class="editorial-card p-4">
            <span class="text-xs text-[var(--ink-secondary)] block mb-1">Độ nhạy Listening</span>
            <div class="flex items-baseline justify-between">
              <span class="font-display text-xl font-bold text-[var(--accent-sage)]">68%</span>
              <span class="text-xs text-[var(--accent-sage)]">↑ Giảm 50% lỗi âm cuối</span>
            </div>
          </div>
          <div class="editorial-card p-4">
            <span class="text-xs text-[var(--ink-secondary)] block mb-1">Mạch lạc Writing</span>
            <div class="flex items-baseline justify-between">
              <span class="font-display text-xl font-bold text-[var(--accent-amber)]">7.0</span>
              <span class="text-xs text-[var(--accent-sage)]">Không còn run-on sentence</span>
            </div>
          </div>
          <div class="editorial-card p-4">
            <span class="text-xs text-[var(--ink-secondary)] block mb-1">Độ trôi chảy Speaking</span>
            <div class="flex items-baseline justify-between">
              <span class="font-display text-xl font-bold text-[var(--ink-primary)]">125 wpm</span>
              <span class="text-xs text-[var(--accent-sage)]">Giảm ngập ngừng 40%</span>
            </div>
          </div>
        </div>

        <div class="editorial-card p-6 mb-6">
          <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-3">
            Biểu đồ Xu hướng Giảm Lỗi qua 3 Giai đoạn
          </h3>
          <div class="p-4 bg-[var(--surface-muted)] rounded-lg border border-[var(--border-subtle)]">
            <svg viewBox="0 0 500 160" class="w-full h-40">
              <line x1="40" y1="20" x2="480" y2="20" stroke="var(--border-subtle)" stroke-dasharray="3,3" />
              <line x1="40" y1="70" x2="480" y2="70" stroke="var(--border-subtle)" stroke-dasharray="3,3" />
              <line x1="40" y1="120" x2="480" y2="120" stroke="var(--border-subtle)" stroke-dasharray="3,3" />
              <polyline fill="none" stroke="var(--accent-terracotta)" stroke-width="3" points="60,110 180,80 320,50 450,30" />
              <polyline fill="none" stroke="var(--accent-sage)" stroke-width="3" points="60,125 180,95 320,65 450,35" />
              ${this.trackMeta.checkpoints.map((c, idx) => `
                <text x="${60 + idx * 130}" y="145" font-size="10" fill="var(--ink-secondary)" text-anchor="middle">Ngày ${c}</text>
              `).join('')}
              <text x="450" y="145" font-size="10" fill="var(--ink-secondary)" text-anchor="middle">${this.totalDays === 21 ? 'Ngày 21' : 'Cuối lộ trình'}</text>
            </svg>
            <div class="flex justify-center gap-6 text-xs mt-2">
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[var(--accent-terracotta)] inline-block"></span> Lỗi Reading</span>
              <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full bg-[var(--accent-sage)] inline-block"></span> Lỗi Listening</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCheckpointWithDay(d) {
    this.checkpointDay = d;
    this.render();
  }

renderMockTest() {
    if (!this.trackMeta.mockTestDay) {
      return `
        <div class="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
          <div class="editorial-card p-8 text-center">
            <span class="badge badge-muted font-mono mb-3">MÔ PHỎNG PHÒNG THI</span>
            <h1 class="font-display text-2xl font-bold text-[var(--ink-primary)] mb-3">
              Lộ trình ${this.trackMeta.label} không có bài thi thử tổng hợp
            </h1>
            <p class="text-sm text-[var(--ink-secondary)] mb-6">
              Bài kiểm tra cuối của lộ trình này được thiết kế dưới dạng Bài kiểm tra cuối (Ngày ${this.totalDays}) với câu hỏi tổng hợp 4 kỹ năng. Hãy chuyển sang Lộ trình 21 Ngày nếu bạn muốn trải nghiệm Full Mock Test 4 kỹ năng có bấm giờ.
            </p>
            <button onclick="window.app.navigateTo('day-detail', { day: ${this.totalDays} })" class="btn btn-primary text-sm px-5 py-2.5">
              Mở Bài kiểm tra cuối Ngày ${this.totalDays}
            </button>
          </div>
        </div>
      `;
    }
    const mockDay = this.trackMeta.mockTestDay;
    return `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 mb-6 border-l-4 border-l-[var(--accent-terracotta)]">
          <span class="badge badge-terracotta font-mono mb-2">MÔ PHỎNG PHÒNG THI CHUẨN ACADEMIC</span>
          <h1 class="font-display text-2xl font-bold text-[var(--ink-primary)] mb-2">
            Ngày ${mockDay}: Full Mock Test 4 Kỹ Năng có Bấm giờ
          </h1>
          <p class="text-sm text-[var(--ink-secondary)]">
            Làm bài liên tục không gián đoạn trong 165 phút. Kiểm tra khả năng chịu đựng áp lực và độ ổn định của quy trình làm bài.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div class="editorial-card p-5">
            <span class="font-mono text-xs text-[var(--accent-sage)] font-bold block mb-1">SECTION 1 • 30 PHÚT</span>
            <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-2">Listening Academic Simulation</h3>
            <p class="text-xs text-[var(--ink-secondary)] mb-4">40 câu hỏi, 4 sections liên tục. Chỉ nghe 1 lần duy nhất chuẩn thi thật.</p>
            <button onclick="window.app.navigateTo('day-detail', { day: ${mockDay} })" class="btn btn-primary text-xs w-full py-2">
              Bắt đầu Listening Mock Test
            </button>
          </div>

          <div class="editorial-card p-5">
            <span class="font-mono text-xs text-[var(--accent-terracotta)] font-bold block mb-1">SECTION 2 • 60 PHÚT</span>
            <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-2">Reading Academic Simulation</h3>
            <p class="text-xs text-[var(--ink-secondary)] mb-4">3 bài đọc dài, 40 câu hỏi. Áp dụng kỹ thuật định vị bằng chứng nhanh.</p>
            <button onclick="window.app.navigateTo('day-detail', { day: ${mockDay} })" class="btn btn-primary text-xs w-full py-2">
              Bắt đầu Reading Mock Test
            </button>
          </div>

          <div class="editorial-card p-5">
            <span class="font-mono text-xs text-[var(--accent-amber)] font-bold block mb-1">SECTION 3 • 60 PHÚT</span>
            <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-2">Writing Task 1 & Task 2</h3>
            <p class="text-xs text-[var(--ink-secondary)] mb-4">20 phút Task 1 (150 từ) + 40 phút Task 2 (250 từ). Khóa nộp bài tự động.</p>
            <button onclick="window.app.navigateTo('day-detail', { day: ${mockDay} })" class="btn btn-primary text-xs w-full py-2">
              Bắt đầu Writing Mock Test
            </button>
          </div>

          <div class="editorial-card p-5">
            <span class="font-mono text-xs text-[var(--ink-primary)] font-bold block mb-1">SECTION 4 • 15 PHÚT</span>
            <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-2">Speaking Face-to-Face Simulation</h3>
            <p class="text-xs text-[var(--ink-secondary)] mb-4">Part 1, 2, 3 với đồng hồ đếm lùi và ghi âm tự động toàn bộ buổi thi.</p>
            <button onclick="window.app.navigateTo('day-detail', { day: ${mockDay} })" class="btn btn-primary text-xs w-full py-2">
              Bắt đầu Speaking Mock Test
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderFinalAudit() {
    return `
      <div class="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-8 mb-6 text-center">
          <span class="badge badge-sage font-mono mb-3">HOÀN THÀNH CHẶNG ĐƯỜNG 21 NGÀY</span>
          <h1 class="font-display text-3xl font-extrabold text-[var(--ink-primary)] mb-3">
            Chúc mừng bạn đã hoàn thành IELTS Marathon!
          </h1>
          <p class="text-sm text-[var(--ink-secondary)] max-w-xl mx-auto mb-6">
            Bạn đã đi hết 21 ngày với tinh thần trung thực: lưu giữ bản đầu tiên, lập luận dựa trên bằng chứng và liên tục hoàn thiện qua các bản rewrite.
          </p>
          <div class="flex justify-center gap-3">
            <button onclick="window.app.downloadPortfolioJson()" class="btn btn-primary text-sm px-5 py-2.5">
              📥 Xuất trọn bộ Portfolio (.JSON)
            </button>
            <button onclick="window.print()" class="btn btn-secondary text-sm px-5 py-2.5">
              🖨️ In Chứng nhận & Báo cáo
            </button>
          </div>
        </div>

        <div class="editorial-card p-6 mb-6">
          <h3 class="font-display text-lg font-bold text-[var(--ink-primary)] mb-3">
            Kế hoạch Tự học 30 Ngày Tiếp theo
          </h3>
          <div class="space-y-3 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
            <p><strong>Tuần 1:</strong> Rà soát toàn bộ Nhật ký lỗi Ngày 18, tập trung xử lý dứt điểm các lỗi phát âm âm cuối và các câu Task 2 thiếu mệnh đề chính.</p>
            <p><strong>Tuần 2:</strong> Duy trì nhịp học 60 phút/ngày: 1 bài đọc chuyên sâu + 1 section Listening Part 3/4.</p>
            <p><strong>Tuần 3:</strong> Luyện viết Task 1 theo dạng bài tổng hợp (Mixed charts & Process) và tự chép lời 2 bài Speaking mỗi tuần.</p>
            <p><strong>Tuần 4:</strong> Làm 2 đề thi thử chuẩn Cambridge trong điều kiện bấm giờ nghiêm ngặt trước ngày thi thật.</p>
          </div>
        </div>
      </div>
    `;
  }

  renderSettings() {
    return `
      <div class="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 mb-6">
          <h1 class="font-display text-xl font-bold text-[var(--ink-primary)] mb-1">Cài đặt Ứng dụng</h1>
          <p class="text-xs text-[var(--ink-secondary)]">Quản lý lộ trình học, nhịp học, giao diện sáng/tối và sao lưu dữ liệu cá nhân.</p>
        </div>

        <div class="editorial-card p-6 space-y-6">
          <div>
            <label class="font-display text-sm font-bold text-[var(--ink-primary)] block mb-1">Lộ trình học tập:</label>
            <div class="grid grid-cols-2 gap-3">
              ${Object.values(TRACKS).map(t => `
                <button onclick="window.app.setTrack('${t.id}')" 
                        class="btn ${this.track === t.id ? 'btn-primary' : 'btn-secondary'} text-xs py-2.5 leading-snug">
                  ${t.label}
                </button>
              `).join('')}
            </div>
            <p class="text-[11px] text-[var(--ink-secondary)] mt-2">Mỗi lộ trình có tiến độ, nhịp học và ngày kiểm soát riêng.</p>
          </div>

          <div class="pt-4 border-t border-[var(--border-subtle)]">
            <label class="font-display text-sm font-bold text-[var(--ink-primary)] block mb-1">Chế độ học:</label>
            <div class="grid grid-cols-2 gap-3">
              <button onclick="window.app.setMode('guided')" 
                      class="btn ${this.mode === 'guided' ? 'btn-primary' : 'btn-secondary'} text-xs py-2.5 leading-snug flex flex-col items-start gap-0.5 text-left">
                <span>🧭 Lớp lang (Người mới)</span>
                <span class="font-normal opacity-80 text-[10px]">Từng bước — xong bước này mới mở bước kế</span>
              </button>
              <button onclick="window.app.setMode('classic')" 
                      class="btn ${this.mode === 'classic' ? 'btn-primary' : 'btn-secondary'} text-xs py-2.5 leading-snug flex flex-col items-start gap-0.5 text-left">
                <span>📚 Classic (Đã quen)</span>
                <span class="font-normal opacity-80 text-[10px]">Hiển thị toàn bộ các mục như cũ</span>
              </button>
            </div>
            <p class="text-[11px] text-[var(--ink-secondary)] mt-2">Chế độ Lớp lang giúp người mới không bị "ngợp": mỗi ngày chỉ tập trung các bước đang dở, Dashboard nhấn vào ngày tiếp theo và khoá mềm các giai đoạn phía sau.</p>
          </div>

          <div class="pt-4 border-t border-[var(--border-subtle)]">
            <label class="font-display text-sm font-bold text-[var(--ink-primary)] block mb-1">Nhịp học mặc định hàng ngày:</label>
            <div class="grid grid-cols-3 gap-3">
              ${this.trackMeta.rhythms.map(r => `
                <button onclick="window.app.setRhythm(${r})" 
                        class="btn ${this.rhythm === r ? 'btn-primary' : 'btn-secondary'} text-xs py-2.5">
                  ${r} Phút
                </button>
              `).join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-[var(--border-subtle)]">
            <label class="font-display text-sm font-bold text-[var(--ink-primary)] block mb-2">Chế độ hiển thị:</label>
            <button onclick="window.app.toggleTheme()" class="btn btn-secondary text-xs py-2 px-4">
              ${this.theme === 'dark' ? '☀️ Chuyển sang Giao diện Sáng' : '🌙 Chuyển sang Giao diện Tối'}
            </button>
          </div>

          <div class="pt-4 border-t border-[var(--border-subtle)]">
            <label class="font-display text-sm font-bold text-[var(--ink-primary)] block mb-1">🤖 AI Phản hồi cá nhân:</label>
            <div class="flex items-center gap-3">
              <button onclick="window.app.toggleAi()" id="ai-toggle-btn" class="btn btn-secondary text-xs py-2 px-4">
                ${isAiEnabled() ? '✅ Đang bật (Nhấn để tắt)' : '⬜ Đang tắt (Nhấn để bật)'}
              </button>
              <span class="text-[11px] text-[var(--ink-secondary)]">Còn ${aiRemainingToday()} lượt hôm nay. Dùng model rẻ + giới hạn để tiết kiệm tối đa.</span>
            </div>
          </div>

          <div class="pt-4 border-t border-[var(--border-subtle)] space-y-3">
            <label class="font-display text-sm font-bold text-[var(--ink-primary)] block">Dữ liệu & Bộ nhớ:</label>
            <div class="flex gap-3">
              <button onclick="window.app.downloadPortfolioJson()" class="btn btn-secondary text-xs py-2">
                Sao lưu dữ liệu (Export JSON)
              </button>
              <button onclick="window.app.resetAllData()" class="btn btn-ghost text-xs py-2 text-red-600 hover:bg-red-50">
                Xóa toàn bộ dữ liệu làm lại từ đầu
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  resetAllData() {
    if (confirm('CẢNH BÁO: Thao tác này sẽ xóa sạch toàn bộ bản nháp, bản ghi âm và nhật ký lỗi. Bạn có chắc chắn không?')) {
      localStorage.clear();
      alert('Đã xóa toàn bộ dữ liệu. Ứng dụng sẽ khởi động lại.');
      window.location.reload();
    }
  }

  toggleAi() {
    setAiEnabled(!isAiEnabled());
    const btn = document.getElementById('ai-toggle-btn');
    if (btn) {
      btn.textContent = isAiEnabled() ? '✅ Đang bật (Nhấn để tắt)' : '⬜ Đang tắt (Nhấn để bật)';
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new IELTSMarathonApp();
});
