// IELTS Marathon 21 Days - Complete Client Application
import { CURRICULUM_DATA } from './data/curriculumData.js';
import { RHYTHM_CONFIGS } from './data/rhythmConfig.js';
import { StorageService } from './services/storageService.js';
import { AudioRecorderEngine } from './services/audioRecorder.js';

class IELTSMarathonApp {
  constructor() {
    this.curriculum = CURRICULUM_DATA;
    this.currentDay = StorageService.getCurrentDay();
    this.rhythm = StorageService.getRhythm();
    this.theme = StorageService.getTheme();
    this.skillLevels = StorageService.getSkillLevels();
    this.currentView = 'day-detail';
    this.checkpointDay = 7;
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
    console.log('IELTS Marathon App loaded.');
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
      this.currentDay = extra.day;
      StorageService.setCurrentDay(this.currentDay);
    }
    if (extra.checkpoint) this.checkpointDay = extra.checkpoint;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  setDay(day) {
    if (day < 1 || day > 21) return;
    this.currentDay = day;
    StorageService.setCurrentDay(day);
    this.render();
  }

  setRhythm(rhythm) {
    this.rhythm = parseInt(rhythm, 10);
    StorageService.setRhythm(this.rhythm);
    this.timerSeconds = this.rhythm * 60;
    this.render();
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

    this.postRender();
  }

  postRender() {
    this.updateTimerDisplay();
    this.bindDayDetailEvents();
  }

  renderDashboard() {
    const user = StorageService.getUser();
    const allProgress = StorageService.getAllProgress();
    const completedDays = Object.keys(allProgress).length;
    const progressPercent = Math.round((completedDays / 21) * 100);

    let phasesHtml = '';
    [1, 2, 3].forEach(phaseNum => {
      const phaseDays = this.curriculum.filter(d => d.phase === phaseNum);
      const phaseTitle = phaseNum === 1 ? 'Giai đoạn 1: Reset & Repair (Ngày 1 - 7)' : phaseNum === 2 ? 'Giai đoạn 2: Phát triển Ý & Áp lực (Ngày 8 - 14)' : 'Giai đoạn 3: Bấm giờ & Kiểm định (Ngày 15 - 21)';
      const phaseDesc = phaseNum === 1 ? 'Xác định điểm xuất phát, đọc dựa trên bằng chứng, viết câu rõ, ghi âm trung thực.' : phaseNum === 2 ? 'Mở rộng ý, hiểu chức năng đoạn, kiểm soát ngôn ngữ dưới áp lực vừa phải.' : 'Làm bài bấm giờ, ưu tiên khắc phục lỗi lặp lại, đánh giá thay đổi đầu-cuối.';

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
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${daysCards}
          </div>
        </div>
      `;
    });

    return `
      <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 sm:p-8 mb-8 bg-gradient-to-r from-[var(--surface)] to-[var(--surface-muted)]">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="badge badge-terracotta font-mono">LỘ TRÌNH 21 NGÀY</span>
                <span class="badge badge-sage font-mono">🔥 Streak: ${user.streak} ngày</span>
              </div>
              <h1 class="font-display text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] mb-2">
                IELTS Marathon: Tự học Có kiểm soát
              </h1>
              <p class="text-sm sm:text-base text-[var(--ink-secondary)] max-w-2xl">
                Chuyển thể từ tài liệu "IELTS Marathon 21-Day Companion" với Module Listening chuẩn hoá 21 ngày. 
                Giữ vững nguyên tắc: Bằng chứng xác thực, bản đầu bất biến và sửa lỗi có chiều sâu.
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
              <span class="text-[var(--ink-secondary)]">Tiến độ tổng thể: ${completedDays}/21 Ngày</span>
              <span class="font-mono text-[var(--accent-terracotta)]">${progressPercent}%</span>
            </div>
            <div class="w-full bg-[var(--surface-muted)] rounded-full h-2.5 overflow-hidden border border-[var(--border-subtle)]">
              <div class="bg-[var(--accent-terracotta)] h-2.5 rounded-full transition-all duration-500" style="width: ${progressPercent}%"></div>
            </div>
          </div>
        </div>
        ${phasesHtml}
      </div>
    `;
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
                <span class="badge badge-muted font-mono">NGÀY ${String(dayData.day).padStart(2, '0')} / 21</span>
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
                        class="btn btn-ghost px-2 py-1 text-xs" ${this.currentDay >= 21 ? 'disabled' : ''}>Sau →</button>
              </div>

              <div class="hidden sm:flex items-center gap-2 bg-[var(--surface-muted)] px-3 py-1.5 rounded-lg border border-[var(--border-subtle)]">
                <span class="text-xs text-[var(--ink-secondary)]">Nhịp học:</span>
                <select id="day-rhythm-select" onchange="window.app.setRhythm(this.value)" 
                        class="bg-transparent text-xs font-bold text-[var(--accent-terracotta)] font-mono outline-none cursor-pointer">
                  <option value="60" ${this.rhythm === 60 ? 'selected' : ''}>60 Phút (Rút gọn)</option>
                  <option value="90" ${this.rhythm === 90 ? 'selected' : ''}>90 Phút (Tiêu chuẩn)</option>
                  <option value="150" ${this.rhythm === 150 ? 'selected' : ''}>150 Phút (Chuyên sâu)</option>
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

        <!-- 3 Columns Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <!-- LEFT NAV (Desktop) -->
          <div class="hidden lg:block lg:col-span-3 space-y-4">
            <div class="editorial-card p-4 sticky top-20">
              <h3 class="font-display text-sm font-bold text-[var(--ink-primary)] mb-3 flex items-center justify-between">
                <span>Lộ trình 21 Ngày</span>
                <span class="font-mono text-xs text-[var(--ink-secondary)]">${dayData.day}/21</span>
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
            <section class="editorial-card p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="font-mono text-xs font-bold text-[var(--accent-terracotta)]">01. ĐỊNH HƯỚNG HỌC TẬP</span>
              </div>
              <p class="text-sm leading-relaxed text-[var(--ink-primary)]">${dayData.orientation}</p>
            </section>

            <!-- 2. Checklist -->
            <section class="editorial-card p-5">
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
            <section class="editorial-card p-5">
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
            <section class="editorial-card p-5 border-l-4 border-l-[var(--accent-terracotta)]">
              <div class="flex items-center justify-between mb-3">
                <div>
                  <span class="font-mono text-xs font-bold text-[var(--accent-terracotta)]">04. READING & EVIDENCE LOG</span>
                  <h3 class="font-display text-base font-bold text-[var(--ink-primary)]">${dayData.reading.title}</h3>
                </div>
                <span class="badge badge-muted text-xs">Gợi ý: ${rhythmInfo.moduleBudgets.reading}m</span>
              </div>

              <!-- Passage -->
              <div class="p-4 bg-[var(--surface-muted)] rounded-lg text-xs sm:text-sm font-editorial leading-relaxed max-h-64 overflow-y-auto mb-4 border border-[var(--border-subtle)]">
                ${dayData.reading.passage.split('

').map(p => `<p class="mb-3">${p}</p>`).join('')}
              </div>

              <!-- Questions -->
              <div class="space-y-4 mb-5">
                ${dayData.reading.questions.map((q, qIdx) => `
                  <div class="p-3 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-lg">
                    <p class="text-xs sm:text-sm font-semibold mb-2 text-[var(--ink-primary)]">${qIdx + 1}. ${q.text}</p>
                    <div class="space-y-1.5">
                      ${q.options.map(opt => `
                        <label class="flex items-center gap-2 text-xs text-[var(--ink-secondary)] p-1.5 rounded hover:bg-[var(--surface-muted)] cursor-pointer">
                          <input type="radio" name="${q.id}" value="${opt[0]}" onchange="window.app.saveReadingAnswer('${q.id}', '${opt[0]}')"
                                 ${dayProgress.readingAnswers?.[q.id] === opt[0] ? 'checked' : ''} class="text-[var(--accent-terracotta)]">
                          <span>${opt}</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>

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

            <!-- 5. Listening Module (NEW) -->
            <section class="editorial-card p-5 border-l-4 border-l-[var(--accent-sage)]">
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
                    ${dayData.listening.transcript.split('
').map(l => `<p class="mb-1">${l}</p>`).join('')}
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

            <!-- 6. Writing Module -->
            <section class="editorial-card p-5 border-l-4 border-l-[var(--accent-amber)]">
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
                    ${dayData.writing.modelAnswer.split('

').map(p => `<p class="mb-2">${p}</p>`).join('')}
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
            </section>

            <!-- 7. Speaking Module -->
            <section class="editorial-card p-5">
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
            </section>

            <!-- 8. Vocabulary -->
            <section class="editorial-card p-5">
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

            <!-- 9. Grammar Drill -->
            <section class="editorial-card p-5">
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

            <!-- 10. Deliverables List -->
            <section class="editorial-card p-5 bg-[var(--surface-muted)]">
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
    const cpTitle = cpDay === 7 ? 'Checkpoint Tuần 1: Reset & Repair Audit' : cpDay === 14 ? 'Checkpoint Tuần 2: Language Control Under Pressure' : 'Checkpoint Cuối kỳ: End-of-Roadmap Audit';

    return `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 mb-6">
          <div class="flex items-center justify-between mb-2">
            <span class="badge badge-amber font-mono">ĐÁNH GIÁ MỐC KIỂM SOÁT</span>
            <div class="flex gap-2">
              <button onclick="window.app.renderCheckpointWithDay(7)" class="btn ${cpDay === 7 ? 'btn-primary' : 'btn-secondary'} text-xs px-2.5 py-1">Ngày 7</button>
              <button onclick="window.app.renderCheckpointWithDay(14)" class="btn ${cpDay === 14 ? 'btn-primary' : 'btn-secondary'} text-xs px-2.5 py-1">Ngày 14</button>
              <button onclick="window.app.renderCheckpointWithDay(21)" class="btn ${cpDay === 21 ? 'btn-primary' : 'btn-secondary'} text-xs px-2.5 py-1">Ngày 21</button>
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
              <text x="60" y="145" font-size="10" fill="var(--ink-secondary)" text-anchor="middle">Ngày 1</text>
              <text x="180" y="145" font-size="10" fill="var(--ink-secondary)" text-anchor="middle">Ngày 7</text>
              <text x="320" y="145" font-size="10" fill="var(--ink-secondary)" text-anchor="middle">Ngày 14</text>
              <text x="450" y="145" font-size="10" fill="var(--ink-secondary)" text-anchor="middle">Ngày 21</text>
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
    return `
      <div class="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div class="editorial-card p-6 mb-6 border-l-4 border-l-[var(--accent-terracotta)]">
          <span class="badge badge-terracotta font-mono mb-2">MÔ PHỎNG PHÒNG THI CHUẨN ACADEMIC</span>
          <h1 class="font-display text-2xl font-bold text-[var(--ink-primary)] mb-2">
            Ngày 20: Full Mock Test 4 Kỹ Năng có Bấm Giờ
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
            <button onclick="window.app.navigateTo('day-detail', { day: 20 })" class="btn btn-primary text-xs w-full py-2">
              Bắt đầu Listening Mock Test
            </button>
          </div>

          <div class="editorial-card p-5">
            <span class="font-mono text-xs text-[var(--accent-terracotta)] font-bold block mb-1">SECTION 2 • 60 PHÚT</span>
            <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-2">Reading Academic Simulation</h3>
            <p class="text-xs text-[var(--ink-secondary)] mb-4">3 bài đọc dài, 40 câu hỏi. Áp dụng kỹ thuật định vị bằng chứng nhanh.</p>
            <button onclick="window.app.navigateTo('day-detail', { day: 20 })" class="btn btn-primary text-xs w-full py-2">
              Bắt đầu Reading Mock Test
            </button>
          </div>

          <div class="editorial-card p-5">
            <span class="font-mono text-xs text-[var(--accent-amber)] font-bold block mb-1">SECTION 3 • 60 PHÚT</span>
            <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-2">Writing Task 1 & Task 2</h3>
            <p class="text-xs text-[var(--ink-secondary)] mb-4">20 phút Task 1 (150 từ) + 40 phút Task 2 (250 từ). Khóa nộp bài tự động.</p>
            <button onclick="window.app.navigateTo('day-detail', { day: 20 })" class="btn btn-primary text-xs w-full py-2">
              Bắt đầu Writing Mock Test
            </button>
          </div>

          <div class="editorial-card p-5">
            <span class="font-mono text-xs text-[var(--ink-primary)] font-bold block mb-1">SECTION 4 • 15 PHÚT</span>
            <h3 class="font-display text-base font-bold text-[var(--ink-primary)] mb-2">Speaking Face-to-Face Simulation</h3>
            <p class="text-xs text-[var(--ink-secondary)] mb-4">Part 1, 2, 3 với đồng hồ đếm lùi và ghi âm tự động toàn bộ buổi thi.</p>
            <button onclick="window.app.navigateTo('day-detail', { day: 20 })" class="btn btn-primary text-xs w-full py-2">
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
          <p class="text-xs text-[var(--ink-secondary)]">Quản lý nhịp học, giao diện sáng/tối và sao lưu dữ liệu cá nhân.</p>
        </div>

        <div class="editorial-card p-6 space-y-6">
          <div>
            <label class="font-display text-sm font-bold text-[var(--ink-primary)] block mb-1">Nhịp học mặc định hàng ngày:</label>
            <div class="grid grid-cols-3 gap-3">
              ${[60, 90, 150].map(r => `
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
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new IELTSMarathonApp();
});
