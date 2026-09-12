// IELTS Marathon - Serverless Google Gemini proxy (Vercel Functions)
// Uses the Generative Language API OpenAI-compatible endpoint. Holds up to 4
// keys as env vars GEMINI_API_KEY_1..4 (fallback GEMINI_API_KEY), rotates
// them, skips dead/quota-exhausted keys, and enforces soft per-hour/day caps.
const GEMINI_URL = 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions';
const MODEL = process.env.GEMINI_MODEL || 'gemini-3.6-flash';

const KEYS = [];
for (let i = 1; i <= 4; i++) {
  const k = process.env['GEMINI_API_KEY_' + i] || process.env['GEMINI_API_KEY' + i];
  if (k) KEYS.push(k);
}
if (process.env.GEMINI_API_KEY && !KEYS.includes(process.env.GEMINI_API_KEY)) {
  KEYS.push(process.env.GEMINI_API_KEY);
}

let cursor = 0;

const HOURLY_LIMIT = parseInt(process.env.AI_MAX_PER_HOUR || '30', 10);
const DAILY_LIMIT = parseInt(process.env.AI_MAX_PER_DAY || '120', 10);
const calls = [];
let dayBucket = 0;
let dayString = new Date().toDateString();

function quotaOk() {
  const now = Date.now();
  while (calls.length && now - calls[0] > 60 * 60 * 1000) calls.shift();
  if (dayString !== new Date().toDateString()) {
    dayString = new Date().toDateString();
    dayBucket = 0;
  }
  if (calls.length >= HOURLY_LIMIT || dayBucket >= DAILY_LIMIT) return false;
  calls.push(now);
  dayBucket++;
  return true;
}

const SYSTEM_PROMPTS = {
  writing: 'Bạn là gia sư IELTS cho người Việt tự học. Đánh giá bài viết bằng tiếng Việt, NGẮN và CỤ THỂ, tối đa 170 từ, theo đúng 3 phần: (1) 2-3 ưu điểm ngắn; (2) 2-3 lỗi nổi bật nhất - mỗi lỗi nêu câu gốc và câu đã sửa ngắn; (3) đúng MỘT mẹo nâng điểm duy nhất. Không chấm band, không viết lại toàn bài, không khen suông.',
  speaking: 'Bạn là huấn luyện viên IELTS Speaking cho người Việt tự học. Nhận xét bản chép lời nói tiếng Anh bằng tiếng Việt, NGẮN, tối đa 170 từ, 3 phần: (1) mạch lạc có tốt không; (2) 2-3 lỗi nghe rõ nhất kèm cách nói lại tự nhiên hơn; (3) đúng MỘT mẹo phát âm/ngữ điệu nên tập hôm nay. Không viết lại toàn bộ câu trả lời.'
};

function buildMessages(feature, text, context) {
  const system = SYSTEM_PROMPTS[feature] ||
    'Bạn là gia sư IELTS giải thích bằng tiếng Việt, NGẮN, tối đa 150 từ: vì sao đáp án đúng là vậy và cách nhận diện dấu hiệu để lần sau không sai. Không thêm phần chấm điểm.';
  const user = '[Bối cảnh]\n' + (context || 'Luyện tập IELTS hôm nay') + '\n\n[Nội dung học viên]\n' + String(text).slice(0, 4000);
  return [{ role: 'system', content: system }, { role: 'user', content: user }];
}

async function callKey(key, messages) {
  const payload = { model: MODEL, messages, max_tokens: 700, temperature: 0.4 };
  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const err = body && body.error && (body.error.message || body.error.code || body.error.type);
    return { status: res.status, error: String(err || '').slice(0, 240) };
  }
  const data = await res.json();
  const content = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!content) return { status: -1, error: 'empty completion' };
  return { status: 0, content: content.trim() };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'POST only' });
    return;
  }
  if (!KEYS.length) {
    res.status(503).json({ ok: false, error: 'Chưa cấu hình Gemini key trên server: đặt GEMINI_API_KEY_1..4 trong Vercel.' });
    return;
  }
  if (!quotaOk()) {
    res.status(429).json({ ok: false, error: 'Hết hạn mức phản hồi AI trong giờ/ngày này. Thử lại sau; các bước tự học vẫn dùng bình thường.' });
    return;
  }

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) { /* ignore */ }

  const feature = String(body.feature || 'writing');
  const text = String(body.text || '').trim();
  const context = String(body.context || '').slice(0, 1500);
  if (text.length < 10) {
    res.status(400).json({ ok: false, error: 'Nội dung quá ngắn để phân tích.' });
    return;
  }

  const messages = buildMessages(feature, text, context);
  let lastErr = '';
  const reasons = [];
  for (let i = 0; i < KEYS.length; i++) {
    const key = KEYS[cursor++ % KEYS.length];
    const out = await callKey(key, messages);
    if (out.status === 0) {
      res.json({ ok: true, content: out.content });
      return;
    }
    lastErr = 'HTTP ' + out.status;
    if (out.error && !reasons.includes(out.error)) reasons.push(out.error);
  }
  res.status(502).json({ ok: false, error: 'Toàn bộ key Gemini thất bại (' + lastErr + '). Lý do: ' + (reasons.join(' | ') || 'không rõ') + '. Kiểm tra hạn mức hoặc tín dụng của từng key.' });
};