// IELTS Marathon - Exclusive Listening Module Factory (mỗi ngày)
// Giữ nguyên Module Listening độc quyền của ứng dụng, bố trí theo chủ đề của ngày.
// Khi có Listening Script tiếng Anh chuẩn → dùng audio thật do giọng bản ngữ đọc,
// transcript + câu hỏi tiếng Anh; ngược lại giữ behaviour cũ (audio mô phỏng).

import { getListeningScript, LISTENING_DURATIONS } from './listeningScripts.js';

const AUDIO_STEMS = [
  "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
  "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg",
  "https://actions.google.com/sounds/v1/speech/test_track_1.mp3"
];

export function makeListening({ day, theme, type, part, questions, transcript, commonErrorCategories, track }) {
  const script = getListeningScript(day, track);
  const useNative = !!script;
  const audioUrl = useNative
    ? `/assets/audio/listening/${track}-d${String(day).padStart(2, '0')}.mp3`
    : AUDIO_STEMS[day % AUDIO_STEMS.length];
  const duration = useNative
    ? (LISTENING_DURATIONS[`${track}-d${String(day).padStart(2, '0')}`] || "04:00")
    : "04:30";
  return {
    title: `Listening Section: ${theme}`,
    part: part || (day % 2 === 0 ? "Part 2 (Độc thoại giới thiệu)" : "Part 1 (Hội thoại đăng ký)"),
    type: type || "Điền từ (Form Completion)",
    duration: duration,
    audioUrl: audioUrl,
    audioScript: useNative ? script.transcript : "",
    questions: useNative ? (script.questions || questions || []) : (questions || []),
    transcript: useNative ? script.transcript : (transcript || defaultTranscript(theme)),
    commonErrorCategories: commonErrorCategories || [
      "Mất âm cuối",
      "Danh từ số ít/số nhiều",
      "Nghe sai số liệu",
      "Viết sai chính tả từ nghe được",
      "Mạo từ (a/an/the) khi điền"
    ]
  };
}

function defaultTranscript(theme) {
  return `Mỗi ngày ứng dụng bố trí một bài Listening riêng theo chủ đề "${theme}". Lượt 1: nghe như thi thật, chỉ nghe một lần. Lượt 2: nghe lại và tự soát trước khi mở transcript. Sau khi nghe, ghi 3 lỗi ưu tiên vào phiếu dưới đây.`;
}