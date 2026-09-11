// generateCurriculum.js - Generates full 21-day curriculum for IELTS Marathon
const fs = require('fs');
const path = require('path');

const days = [];

const themes = [
  { day: 1, phase: 1, title: "Đo lường điểm xuất phát & Quy trình Đọc dựa trên Bằng chứng", topic: "Giáo dục & Phương pháp Tiếp nhận Tri thức", listeningType: "Điền biểu mẫu (Form Completion)", writingTask: "Task 2 Thesis Statement & Dàn ý logic" },
  { day: 2, phase: 1, title: "Tư duy Nguyên nhân - Hệ quả & Bắt nhịp Nghe chi tiết", topic: "Đô thị hóa & Thành phố Thông minh", listeningType: "Điền ghi chú (Note Completion)", writingTask: "Task 2 Xây dựng câu chủ đề & Giải thích" },
  { day: 3, phase: 1, title: "Đối chiếu Paraphrase & Nhận diện Bẫy Distractor", topic: "Năng lượng Tái tạo & Bảo vệ Môi trường", listeningType: "Trắc nghiệm nhiều lựa chọn (Multiple Choice)", writingTask: "Task 2 Viết đoạn thân bài 1 (First Draft & Rewrite)" },
  { day: 4, phase: 1, title: "Tổng quan Task 1 & Đọc bản đồ / Sơ đồ chỉ dẫn", topic: "Nhân khẩu học & Dịch chuyển Dân cư", listeningType: "Định vị bản đồ (Map Labeling)", writingTask: "Task 1 Viết Overview & Chọn lọc số liệu nổi bật" },
  { day: 5, phase: 1, title: "Dạng bài Vấn đề - Giải pháp & Bắt nhịp Hội thoại 2 người", topic: "Sức khỏe Cộng đồng & Lối sống Hiện đại", listeningType: "Nối thông tin (Matching Information)", writingTask: "Task 2 Đoạn đề xuất giải pháp khả thi" },
  { day: 6, phase: 1, title: "Phát triển Độ trôi chảy Speaking & Hoàn thành Câu Reading", topic: "Trí tuệ Nhân tạo & Tương lai Việc làm", listeningType: "Hoàn thành câu (Sentence Completion)", writingTask: "Task 2 Viết phần Mở bài & Kết bài dứt khoát" },
  { day: 7, phase: 1, title: "CHECKPOINT 1: Rà soát Tuần đầu & Bảng tổng kết Baseline", topic: "Tổng hợp Giai đoạn 1 (Reset & Repair)", isCheckpoint: true, checkpointNum: 1, listeningType: "Review 3 dạng bài Listening tuần 1", writingTask: "Đối chiếu bài viết Ngày 1 và Ngày 6" },
  
  { day: 8, phase: 2, title: "Lập luận Phản biện (Counter-Argument) & Ghi chú Bài giảng", topic: "Nông nghiệp Bền vững & An ninh Lương thực", listeningType: "Hoàn thành sơ đồ (Flowchart Completion)", writingTask: "Task 2 Xây dựng đoạn phản biện (Concession & Refutation)" },
  { day: 9, phase: 2, title: "Nối Tiêu đề Đoạn (Headings) & Thảo luận Học thuật Part 3", topic: "Tâm lý học Hành vi & Thói quen Con người", listeningType: "Thảo luận nhóm học thuật (Part 3 Multiple Choice)", writingTask: "Task 2 Kiểm soát tính mạch lạc (Cohesion & Transitions)" },
  { day: 10, phase: 2, title: "Miêu tả Xu hướng Thay đổi & Quy trình Sản xuất", topic: "Công nghiệp Chế tạo & Kinh tế Tuần hoàn", listeningType: "Gắn nhãn sơ đồ quy trình (Process Diagram Labeling)", writingTask: "Task 1 Dạng bài Quy trình sản xuất (Process)" },
  { day: 11, phase: 2, title: "Chiến thuật True/False/Not Given & Nối Đặc điểm", topic: "Sinh học Biển & Thám hiểm Đại dương", listeningType: "Nối quan điểm chuyên gia (Matching Opinion)", writingTask: "Task 2 Câu ghép phức & Mệnh đề phụ thuộc" },
  { day: 12, phase: 2, title: "Danh từ hoá (Nominalisation) & Bắt ý Bài giảng Khoa học", topic: "Công nghệ Vũ trụ & Vệ tinh Viễn thông", listeningType: "Ghi chú bài thuyết trình khoa học (Part 4 Summary)", writingTask: "Task 2 Nâng cấp phong cách học thuật (Academic Register)" },
  { day: 13, phase: 2, title: "Duy trì Tính mạch lạc Speaking Part 2 & Đọc lướt Bằng chứng", topic: "Di sản Văn hóa & Toàn cầu hóa", listeningType: "Điền bảng tổng hợp (Table Completion)", writingTask: "Task 1 So sánh 2 biểu đồ kết hợp (Mixed Charts)" },
  { day: 14, phase: 2, title: "CHECKPOINT 2: Kiểm soát Ngôn ngữ Dưới Áp lực Vừa phải", topic: "Tổng hợp Giai đoạn 2 (Idea & Pressure)", isCheckpoint: true, checkpointNum: 2, listeningType: "Đánh giá lỗi nhầm lẫn thông tin tuần 2", writingTask: "Đánh giá mức độ phát triển ý đoạn văn" },
  
  { day: 15, phase: 3, title: "Làm bài Bấm giờ Section 1-2 & Tăng tốc độ Đọc hiểu", topic: "Kinh tế Toàn cầu & Thương mại Điện tử", listeningType: "Part 1 & 2 làm bấm giờ liên tục", writingTask: "Task 2 Viết bài trong 35 phút (Timed Pressure)" },
  { day: 16, phase: 3, title: "Bài giảng Tốc độ cao Part 4 & Cấu trúc Task 2 Nâng cao", topic: "Kiến trúc Đô thị & Môi trường Âm học", listeningType: "Part 4 Bài giảng chuyên sâu không dừng", writingTask: "Task 2 Viết bài Task 2 có phản biện sắc nét" },
  { day: 17, phase: 3, title: "Hoàn thành Tóm tắt với Ngân hàng Từ & Speaking Part 3", topic: "Truyền thông Số & Đạo đức Thông tin", listeningType: "Trắc nghiệm Part 3 xoay quanh tranh luận", writingTask: "Task 1 Tinh giản dữ liệu trong 18 phút" },
  { day: 18, phase: 3, title: "KHẮC PHỤC LỖI ƯU TIÊN: Trọng tâm sửa lỗi lặp lại >= 2 lần", topic: "Chuyên đề Tự rà soát Lỗi cá nhân", isPriorityRemediation: true, listeningType: "Luyện tập theo loại lỗi hay sai nhất", writingTask: "Rewrite lại 2 đoạn văn từng bị nhiều lỗi nhất" },
  { day: 19, phase: 3, title: "Hoàn thiện Kỹ năng & Tối ưu Chiến lược Phân bổ Thời gian", topic: "Tâm lý Phòng thi & Chiến thuật Làm bài", listeningType: "Chiến thuật tận dụng 30 giây đọc trước đề", writingTask: "Rà soát checklist 10 lỗi ngữ pháp kinh điển" },
  { day: 20, phase: 3, title: "FULL MOCK TEST: Thi thử Tổng hợp 4 Kỹ năng có Bấm giờ", topic: "Mô phỏng Kỳ thi Thật chuẩn Academic", isMockTest: true, listeningType: "Full Test 4 Parts (40 câu hỏi, 30 phút)", writingTask: "Full Task 1 (20m) + Task 2 (40m)" },
  { day: 21, phase: 3, title: "HỒ SƠ TỔNG KẾT, ĐỐI CHIẾU ĐẦU-CUỐI & KẾ HOẠCH 30 NGÀY", topic: "Hành trình Trưởng thành & Tự học Bền vững", isFinalReview: true, checkpointNum: 3, listeningType: "So sánh điểm số & độ nhạy âm thanh Day 1 vs 21", writingTask: "Thư tự đánh giá & Portfolio xuất bản" }
];

themes.forEach((item) => {
  const dayNum = item.day;
  const phase = item.phase;
  const dayPad = String(dayNum).padStart(2, '0');

  days.push({
    day: dayNum,
    phase: phase,
    title: `Ngày ${dayPad}: ${item.title}`,
    theme: item.topic,
    isCheckpoint: !!item.isCheckpoint,
    checkpointNum: item.checkpointNum || 0,
    isPriorityRemediation: !!item.isPriorityRemediation,
    isMockTest: !!item.isMockTest,
    isFinalReview: !!item.isFinalReview,
    orientation: `Mục tiêu ngày ${dayNum}: Tập trung vào chủ đề "${item.topic}". Rèn luyện thói quen đưa ra câu trả lời dựa trên bằng chứng xác thực, giữ bản thảo đầu tiên bất biến và nghiêm túc phân loại lỗi sai để rút kinh nghiệm.`,
    checklist: [
      `Hoàn thành bài đọc Reading và ghi lại ít nhất 3 cặp bằng chứng (evidence pairs).`,
      `Nghe bài Listening theo đúng quy tắc 2 lượt (Lượt 1 thi thật, Lượt 2 tự soát).`,
      `Viết First Draft phần Writing, sau đó mở bài mẫu và tạo bản Rewrite rút kinh nghiệm.`,
      `Ghi âm Speaking lần 1, chép lại 30s âm thanh, và ghi âm lần 2 đối chiếu.`,
      `Lưu lại các lỗi cần ưu tiên vào Nhật ký lỗi (tối đa 3 lỗi/ngày).`,
      `Kiểm tra danh mục sản phẩm cần nộp cuối ngày với quy tắc đặt tên Day${dayPad}-...`
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Định hướng & Tiêu chí", note: "Xác định tâm thế và mục tiêu ngày" },
        { time: "05-30m", name: "Reading Evidence Drill", note: "Đọc sâu & lập bảng chứng cứ" },
        { time: "30-50m", name: "Listening 2-Attempt Cycle", note: "Nghe nghiêm ngặt & phân tích transcript" },
        { time: "50-75m", name: "Writing Draft & Rewrite", note: "Viết bản đầu 🔒 rồi tạo bản hoàn thiện" },
        { time: "75-85m", name: "Speaking Dual-Record", note: "Thu âm 1 -> Chép lời -> Thu âm 2" },
        { time: "85-90m", name: "Vocabulary & Error Sync", note: "Đồng bộ cụm từ và cập nhật nhật ký lỗi" }
      ]
    },
    reading: {
      title: `Chuyên khảo: ${item.topic}`,
      source: "IELTS Academic Research Journal",
      passage: `[A] The phenomenon of ${item.topic.toLowerCase()} has garnered unprecedented attention from scholars and policymakers worldwide. In recent decades, empirical investigations demonstrate that traditional methods often fail to account for multifaceted behavioral nuances. When individuals engage with complex cognitive systems, the underlying neurological pathways exhibit substantial adaptation, confirming hypotheses proposed by contemporary cognitive theorists.\n\n[B] A critical dimension of this discourse centers on systemic efficiency and resource allocation. Critics argue that aggressive expansion without meticulous regulatory oversight precipitates adverse socioeconomic outcomes. Conversely, proponents emphasize that targeted interventions, particularly those integrated with technological infrastructure, yield compounding benefits that significantly outweigh transitional friction.\n\n[C] Comparative studies conducted across longitudinal cohorts reveal striking discrepancies. In environments where structured feedback loops were systematically enforced, participants demonstrated a forty percent increase in task fidelity compared to passive control groups. This underscores the paramount significance of evidence-based deliberation over intuitive guesswork.\n\n[D] Ultimately, synthesized findings suggest that sustainable mastery necessitates iterative refinement. Rather than pursuing superficial speed, practitioners who prioritize rigorous error analysis and systematic evidence tracking attain durable proficiencies that withstand high-pressure evaluative conditions.`,
      questions: [
        {
          id: `r-q1-${dayNum}`,
          type: "multiple_choice",
          text: `Theo đoạn [A], các cuộc điều tra thực nghiệm gần đây đã chỉ ra điều gì liên quan đến ${item.topic.toLowerCase()}?`,
          options: [
            "A. Các phương pháp truyền thống hoàn toàn không có giá trị học thuật.",
            "B. Các phương pháp truyền thống thường bỏ sót những sắc thái hành vi đa diện.",
            "C. Hệ thần kinh của con người không có khả năng thích nghi khi gặp hệ thống phức tạp.",
            "D. Các nhà hoạch định chính sách đã ngừng đầu tư vào lĩnh vực này."
          ],
          correct: "B",
          explanation: "Đoạn [A] nêu rõ: 'traditional methods often fail to account for multifaceted behavioral nuances' (các phương pháp truyền thống thường không giải thích được các sắc thái hành vi đa diện)."
        },
        {
          id: `r-q2-${dayNum}`,
          type: "true_false_not_given",
          text: `Theo đoạn [C], những môi trường áp dụng vòng lặp phản hồi có cấu trúc giúp người tham gia tăng 40% độ chính xác trong công việc.`,
          options: ["TRUE", "FALSE", "NOT GIVEN"],
          correct: "TRUE",
          explanation: "Đoạn [C] khẳng định: 'participants demonstrated a forty percent increase in task fidelity' (task fidelity tương đương với độ chính xác/độ bám sát nhiệm vụ)."
        },
        {
          id: `r-q3-${dayNum}`,
          type: "heading_matching",
          text: `Ý chính cốt lõi của đoạn [D] là gì?`,
          options: [
            "A. Sự cần thiết của tốc độ trong quá trình luyện tập",
            "B. Vai trò của việc sửa đổi lặp đi lặp lại và phân tích lỗi có hệ thống",
            "C. Tác hại của áp lực thi cử đối với sinh viên",
            "D. So sánh giữa người học trực tuyến và người học truyền thống"
          ],
          correct: "B",
          explanation: "Đoạn [D] nhấn mạnh: 'sustainable mastery necessitates iterative refinement... prioritize rigorous error analysis and systematic evidence tracking'."
        }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Đoạn [A], dòng 2-4",
        paraphrasePair: "Từ khóa câu hỏi <-> Cụm từ trong bài đọc",
        errorReason: "Ghi rõ lý do nếu làm sai (Ví dụ: Đọc lướt quá nhanh bỏ sót từ 'often', nhầm từ đồng nghĩa)"
      }
    },
    listening: {
      title: `Listening Section: ${item.topic}`,
      part: (dayNum % 4 === 1) ? "Part 1 (Thông tin đời sống thường ngày)" : (dayNum % 4 === 2) ? "Part 2 (Hướng dẫn / Giới thiệu công cộng)" : (dayNum % 4 === 3) ? "Part 3 (Thảo luận học thuật giữa 2-3 người)" : "Part 4 (Bài giảng chuyên ngành của giáo sư)",
      type: item.listeningType,
      duration: "04:15",
      audioUrl: `https://actions.google.com/sounds/v1/speech/test_track_${dayNum}.mp3`, // Placeholder / WebAudio fallback
      audioScript: `Welcome to today's academic session on ${item.topic}. Let us examine the foundational concepts and empirical case studies that illustrate this phenomenon... In section one, researchers observed that clear protocols significantly reduced ambiguity. Notice how the initial metrics fluctuated before stabilizing in the third quarter...`,
      questions: [
        {
          id: `l-q1-${dayNum}`,
          type: "fill_blank",
          prompt: "The research project initially focused on measuring [ 1 ] among participants.",
          correct: "accuracy",
          distractor: "speed / velocity",
          explanation: "Người nói nhấn mạnh: 'the primary focus was always on accuracy rather than superficial speed'."
        },
        {
          id: `l-q2-${dayNum}`,
          type: "multiple_choice",
          prompt: "What primary challenge did the coordinator mention regarding data collection?",
          options: [
            "A. Insufficient financial resources",
            "B. Difficulty in tracking long-term behavioral changes",
            "C. Lack of volunteer engagement",
            "D. Equipment malfunction in remote stations"
          ],
          correct: "B",
          explanation: "Đoạn audio nói: 'our greatest hurdle was maintaining continuity in tracking behavioral shifts over extended durations'."
        },
        {
          id: `l-q3-${dayNum}`,
          type: "matching",
          prompt: "Match the following phase with its key recommendation: Phase 1 -> [ ? ]",
          options: [
            "A. Rigorous baseline documentation",
            "B. Timed simulation under exam conditions",
            "C. Peer review and group presentations"
          ],
          correct: "A",
          explanation: "Người thuyết trình khuyến nghị: 'Phase one strictly mandates rigorous baseline documentation before any advanced interventions'."
        }
      ],
      transcript: `SPEAKER A: Good morning and welcome. Today we are addressing the complex domain of ${item.topic}.\nSPEAKER B: Thank you, Professor. To begin with, our recent field tests showed that participants who instituted rigorous self-checks avoided over 60 percent of common transcription errors.\nSPEAKER A: Exactly. The primary focus was always on [accuracy] rather than superficial speed. Furthermore, our greatest hurdle was maintaining continuity in tracking behavioral shifts over extended durations. For anyone starting out, phase one strictly mandates rigorous baseline documentation before any advanced interventions.`,
      commonErrorCategories: [
        "Mất âm cuối (Ending sounds: -s, -ed, -th)",
        "Nhầm số hoặc đánh vần tên riêng (Spelling & numbers)",
        "Bẫy phân tán thông tin (Distractor traps)",
        "Không bắt kịp tốc độ nói nhanh (Pacing & linked speech)",
        "Nhầm từ đồng nghĩa (Paraphrase mismatch)"
      ]
    },
    writing: {
      task: (dayNum % 2 === 1) ? "Task 2 (Academic Essay)" : "Task 1 (Data / Diagram Report)",
      prompt: (dayNum % 2 === 1) 
        ? `Some people believe that advancements in ${item.topic.toLowerCase()} primarily benefit developed nations, while others argue that they are essential for global equality. Discuss both views and give your own opinion.`
        : `The chart below illustrates the comparative adoption rates of sustainable initiatives related to ${item.topic.toLowerCase()} across five global regions between 2010 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.`,
      targetWords: (dayNum % 2 === 1) ? "250-280 từ" : "150-180 từ",
      guidance: "Quy tắc bất biến: Viết bản nháp đầu tiên (First Draft) mà không tra từ điển. Sau khi nộp, đáp án và bài mẫu sẽ mở khóa. Bạn sẽ viết lại (Rewrite) ở khung bên dưới để rút kinh nghiệm.",
      modelAnswer: `In the contemporary era, the discourse surrounding ${item.topic.toLowerCase()} has ignited profound debates across academic and political spheres. While it is understandable that preliminary capital expenditure predominantly favors affluent societies, I firmly maintain that democratizing access to these frameworks is indispensable for global equity.\n\nOn the one hand, advanced economies possess the fiscal resilience and institutional infrastructure requisite for pioneering research. Consequently, initial implementations often manifest within developed boundaries. However, restricting these breakthroughs perpetuates historical disparities.\n\nOn the other hand, developing regions frequently stand to gain the most transformative advantages. By leapfrogging antiquated technologies, emerging economies can address critical infrastructure bottlenecks. Therefore, international cooperation and open-source dissemination are imperative.\n\nIn conclusion, while initial developmental asymmetries exist, global prosperity hinges upon the equitable dispersion of ${item.topic.toLowerCase()}.`,
      examinerNotes: "Bài mẫu đạt Band 8.0+: Cấu trúc đoạn văn chặt chẽ, luận điểm rõ ràng có phản biện (counter-argument), sử dụng từ vựng học thuật tự nhiên (fiscal resilience, institutional infrastructure, leapfrogging) và kiểm soát hoàn hảo các mệnh đề phức."
    },
    speaking: {
      part: (dayNum % 3 === 1) ? "Part 1 (Personal & Familiar)" : (dayNum % 3 === 2) ? "Part 2 (Long Turn - 2 minutes)" : "Part 3 (Two-way Discussion)",
      prompt: `Speaking Task: Describe an experience where you learned about ${item.topic.toLowerCase()}. You should say: what it was, when you encountered it, why it was memorable, and explain how it influenced your perspective.`,
      followUps: [
        `How do you think future generations will perceive ${item.topic.toLowerCase()}?`,
        `Do governments have a responsibility to regulate this sector more strictly?`
      ],
      selfEvaluationCriteria: [
        "Fluency: Có ngập ngừng nhiều hơn 3 lần không?",
        "Lexical Resource: Đã sử dụng ít nhất 2 cụm collocations học thuật chưa?",
        "Grammar: Có bị nhầm lẫn thì quá khứ đơn và hiện tại hoàn thành không?",
        "Pronunciation: Các âm đuôi (-s, -ed) có được phát âm rõ ràng không?"
      ]
    },
    vocabulary: [
      { term: "empirical investigation", pos: "noun phrase", phonetic: "/ɪmˈpɪr.ɪ.kəl ɪnˌves.tɪˈɡeɪ.ʃən/", meaning: "nghiên cứu thực nghiệm dựa trên dữ liệu thực tế", example: "The hypothesis was substantiated through rigorous empirical investigation." },
      { term: "multifaceted", pos: "adj", phonetic: "/ˌmʌl.tiˈfæs.ɪ.tɪd/", meaning: "nhiều mặt, đa chiều", example: "Urban sustainability is a multifaceted challenge requiring cross-disciplinary solutions." },
      { term: "precipitate", pos: "verb", phonetic: "/prɪˈsɪp.ɪ.teɪt/", meaning: "gây ra, thúc đẩy một biến cố diễn ra nhanh chóng", example: "Unregulated expansion may precipitate severe ecological degradation." },
      { term: "discrepancy", pos: "noun", phonetic: "/dɪˈskrep.ən.si/", meaning: "sự khác biệt, sự bất đồng số liệu", example: "Researchers identified a noticeable discrepancy between reported and actual energy consumption." },
      { term: "iterative refinement", pos: "noun phrase", phonetic: "/ˈɪt.ər.ə.tɪv rɪˈfaɪn.mənt/", meaning: "quá trình cải tiến lặp đi lặp lại có chủ đích", example: "Writing mastery is achieved through continuous, iterative refinement of initial drafts." }
    ],
    grammar: {
      title: "Ngữ pháp Trọng tâm: Cấu trúc Nhượng bộ & Mệnh đề Phản biện (Concession & Contrast)",
      explanation: "Sử dụng 'While', 'Whereas', 'Notwithstanding', 'Albeit' để tạo các câu văn học thuật có chiều sâu lập luận thay vì chỉ dùng 'Although' hoặc 'But'.",
      drillQuestion: "Kết hợp 2 câu sau thành 1 câu học thuật sử dụng 'While' hoặc 'Notwithstanding':\n'Initial capital investment is extremely high. The long-term societal returns far exceed transitional costs.'",
      sampleAnswer: "While the initial capital investment is undeniably substantial, the long-term societal returns far exceed the transitional costs."
    },
    deliverables: [
      `Day${dayPad}-Reading-evidence.txt`,
      `Day${dayPad}-Listening-log.json`,
      `Day${dayPad}-Writing-first-draft.txt`,
      `Day${dayPad}-Writing-rewrite.txt`,
      `Day${dayPad}-Speaking-attempt1.webm`,
      `Day${dayPad}-Speaking-attempt2.webm`,
      `Day${dayPad}-Phrase-bank.json`
    ]
  });
});

const content = `// IELTS Marathon 21 Days - Complete Curriculum Dataset
// Auto-generated curriculum with full 21 days data including new Listening module

export const CURRICULUM_DATA = ${JSON.stringify(days, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'curriculumData.js'), content, 'utf8');
console.log(`Generated curriculumData.js with ${days.length} days successfully.`);
