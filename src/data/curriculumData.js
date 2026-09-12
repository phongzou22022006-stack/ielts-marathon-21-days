// IELTS Marathon - Track Registry & Curriculum Aggregator
// Tập trung toàn bộ dữ liệu từ các track (21 Ngày + Nền tảng 14 Ngày).
// CURRICULUM_DATA giữ back-compat: luôn trỏ về track 21 Ngày.

import { DAYS_1_3 } from './ielts21-days1to3.js';
import { DAYS_4_7 } from './ielts21-days4to7.js';
import { DAYS_8_14 } from './ielts21-days8to14.js';
import { DAYS_15_21 } from './ielts21-days15to21.js';
import { FOUNDATION_14_DAYS } from './foundation14.js';

const TRACKS = {
  ielts21: {
    id: 'ielts21',
    label: 'Lộ trình 21 Ngày',
    shortLabel: '21 Ngày',
    description: 'Roadmap chuẩn 21 ngày IELTS Marathon Companion với Full Mock Test Ngày 20.',
    progressDenominator: 21,
    rhythms: [60, 90, 150],
    defaultRhythm: 90,
    checkpoints: [7, 14, 21],
    mockTestDay: 20,
    phases: [
      { number: 1, range: 'Ngày 1 - 7', title: 'Giai đoạn 1: Reset & Repair', desc: 'Xác định điểm xuất phát, đọc dựa trên bằng chứng, viết câu rõ, ghi âm trung thực.' },
      { number: 2, range: 'Ngày 8 - 14', title: 'Giai đoạn 2: Phát triển Ý & Áp lực', desc: 'Mở rộng ý, hiểu chức năng đoạn, kiểm soát ngôn ngữ dưới áp lực vừa phải.' },
      { number: 3, range: 'Ngày 15 - 21', title: 'Giai đoạn 3: Bấm giờ & Kiểm định', desc: 'Làm bài bấm giờ, ưu tiên khắc phục lỗi lặp lại, đánh giá thay đổi đầu-cuối.' }
    ],
    milestones: [
      { day: 7, label: 'Checkpoint Tuần 1: Reset & Repair Audit' },
      { day: 14, label: 'Checkpoint Tuần 2: Language Control Under Pressure' },
      { day: 21, label: 'Checkpoint Cuối kỳ: End-of-Roadmap Audit' }
    ],
    presetDeliverablePrefix: 'Day',
    badgeClass: 'badge-terracotta'
  },
  foundation14: {
    id: 'foundation14',
    label: 'Lộ trình Nền tảng 14 Ngày',
    shortLabel: 'Nền tảng 14',
    description: 'Xây nền tảng ngôn ngữ & thói quen học đúng trước khi bước vào lộ trình 21 ngày.',
    progressDenominator: 14,
    rhythms: [20, 45, 75],
    defaultRhythm: 45,
    checkpoints: [7, 14],
    mockTestDay: null,
    phases: [
      { number: 1, range: 'Ngày 1 - 7', title: 'Giai đoạn 1: Nền tảng Ngôn ngữ & Thói quen', desc: 'Xây dựng nền tảng phát âm, từ vựng, cấu trúc câu và thói quen học có kiểm soát.' },
      { number: 2, range: 'Ngày 8 - 12', title: 'Giai đoạn 2: Phát triển Ý & Xử lý Bài tập', desc: 'Phát triển câu trả lời, luyện đọc-nghe theo dạng bài thực tế dưới nhịp học vừa phải.' },
      { number: 3, range: 'Ngày 13 - 14', title: 'Giai đoạn 3: Kiểm định & Tổng kết', desc: 'Ôn luyện viết có số liệu, bài kiểm tra cuối và đánh giá tổng kết năng lực.' }
    ],
    milestones: [
      { day: 7, label: 'Checkpoint Tuần 1: Đánh giá nền tảng' },
      { day: 14, label: 'Bài kiểm tra cuối & Tổng kết lộ trình' }
    ],
    presetDeliverablePrefix: 'F14',
    badgeClass: 'badge-sage'
  }
};

const CURRICULUM_DATA = [
  ...DAYS_1_3,
  ...DAYS_4_7,
  ...DAYS_8_14,
  ...DAYS_15_21
];

export { TRACKS };
export { CURRICULUM_DATA };
export { FOUNDATION_14_DAYS };