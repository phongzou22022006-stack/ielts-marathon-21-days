// IELTS Marathon - Client wrapper for the AI feedback API (cost-light).
const AI_ENABLED_KEY = 'ielts_marathon_ai_enabled';
const AI_DAY_KEY = 'ielts_marathon_ai_day';
const AI_COUNT_KEY = 'ielts_marathon_ai_count';
const DAILY_LIMIT = 12;
const TIMEOUT_MS = 45000;

export function isAiEnabled() {
  return localStorage.getItem(AI_ENABLED_KEY) !== '0';
}

export function setAiEnabled(v) {
  localStorage.setItem(AI_ENABLED_KEY, v ? '1' : '0');
}

export function aiRemainingToday() {
  const day = localStorage.getItem(AI_DAY_KEY);
  if (day !== new Date().toDateString()) return DAILY_LIMIT;
  const n = parseInt(localStorage.getItem(AI_COUNT_KEY) || '0', 10);
  return Math.max(0, DAILY_LIMIT - n);
}

export async function requestAiFeedback({ feature, text, context }) {
  if (!isAiEnabled()) throw new Error('Tính năng AI đang tắt. Bật lại trong Cài đặt để dùng.');
  if (aiRemainingToday() <= 0) {
    throw new Error('Đã dùng hết ' + DAILY_LIMIT + ' lượt phản hồi AI hôm nay. Ngày mai lại có, tiếp tục tự học bình thường nhé.');
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ feature, text, context }),
      signal: controller.signal
    });
    const data = await res.json().catch(() => ({ ok: false, error: 'Phản hồi server không đọc được.' }));
    if (!res.ok || !data.ok) throw new Error(data.error || ('Lỗi server (HTTP ' + res.status + ').'));
    const day = new Date().toDateString();
    const n = (localStorage.getItem(AI_DAY_KEY) === day ? parseInt(localStorage.getItem(AI_COUNT_KEY) || '0', 10) : 0) + 1;
    localStorage.setItem(AI_DAY_KEY, day);
    localStorage.setItem(AI_COUNT_KEY, String(n));
    return data.content;
  } catch (e) {
    if (e.name === 'AbortError') throw new Error('Quá thời gian chờ phản hồi AI (45s). Mạng yếu hoặc API bận - thử lại sau.');
    throw e;
  } finally {
    clearTimeout(timer);
  }
}