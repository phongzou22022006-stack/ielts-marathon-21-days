// IELTS Marathon - Exclusive Listening Module Factory (mỗi ngày)
// Giữ nguyên Module Listening độc quyền của ứng dụng, bố trí theo chủ đề của ngày.

const AUDIO_STEMS = [
  "https://actions.google.com/sounds/v1/alarms/beep_short.ogg",
  "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg",
  "https://actions.google.com/sounds/v1/speech/test_track_1.mp3"
];

export function makeListening({ day, theme, type, part, questions, transcript, commonErrorCategories }) {
  return {
    title: `Listening Section: ${theme}`,
    part: part || (day % 2 === 0 ? "Part 2 (Độc thoại giới thiệu)" : "Part 1 (Hội thoại đăng ký)"),
    type: type || "Điền từ (Form Completion)",
    duration: "04:30",
    audioUrl: AUDIO_STEMS[day % AUDIO_STEMS.length],
    audioScript: "",
    questions: questions || [],
    transcript: transcript || defaultTranscript(theme),
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