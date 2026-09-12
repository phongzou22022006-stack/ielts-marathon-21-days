// IELTS Marathon 21-Day Companion - Faithful transcription: Days 1-3
// Source: "IELTS Marathon 21-Day Companion 2026" - The Forum Center (Nguyễn Hoàng Huy)

import { makeListening } from './listeningFactory.js';

export const DAYS_1_3 = [
  // ============================================================ DAY 01
  {
    day: 1,
    phase: 1,
    title: "Ngày 01: Xác định điểm xuất phát",
    theme: "Chi phí của việc chuyển đổi tác vụ & Sự tập trung",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu hôm nay là thu thập bằng chứng về vị trí mất điểm, nguyên nhân và lỗi cần ưu tiên sửa. Bạn ghi bốn dòng sau ở đầu trang: Ngày và giờ bắt đầu; Từ điển: không sử dụng; Đồng hồ bấm giờ: bật; Điều kiện làm bài. Không dừng đồng hồ giữa chừng. Hãy khoanh mọi đáp án bạn đã đoán. Với Speaking, giữ nguyên các khoảng ngập ngừng, lần nói lại và lỗi ngữ pháp. Nguyên tắc làm bài đầu vào: một bản làm còn lỗi nhưng phản ánh đúng năng lực hữu ích hơn một sản phẩm trau chuốt nhờ sự hỗ trợ không được ghi nhận.",
    checklist: [
      "Điểm Reading và phiếu ghi bằng chứng (câu, đáp án, độ chắc chắn 1-5, đoạn chứa bằng chứng, bẫy)",
      "Đoạn Writing đầu tiên 150-220 từ (kèm dàn ý ngắn) — chưa chỉnh sửa",
      "Bản ghi âm Speaking chưa chỉnh sửa (Part 1 + Part 2 + Part 3 trong cùng một tệp)",
      "Ba lỗi cần ưu tiên trong sơ đồ lỗi cá nhân",
      "Sáu cụm từ đã được vận dụng trong câu tự viết (3 câu thói quen + 2 câu Writing + 1 câu Speaking Part 3)"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Quy tắc đầu vào", note: "Ghi 4 dòng: giờ bắt đầu, không từ điển, bật đồng hồ, điều kiện làm bài" },
        { time: "05-30m", name: "Reading", note: "60': câu 1-8 trong 20 phút; 90': đủ 12 câu trong 25 phút; 150': trọn bộ + rà soát bằng chứng" },
        { time: "30-50m", name: "Writing", note: "60': đoạn 150 từ; 90': bài 170-200 từ; 150': đoạn mở rộng 220 từ và bản viết lại" },
        { time: "50-70m", name: "Speaking", note: "60': Part 1 và một bài Part 2 ngắn; 90': trọn bộ bài luyện ngắn; 150': trọn bộ + bản chép lời" },
        { time: "70-85m", name: "Rà soát", note: "60': ba lỗi ưu tiên; 90': sơ đồ lỗi; 150': đánh giá đầu vào chi tiết" }
      ]
    },
    reading: {
      title: "Practice Passage 01 - The Quiet Cost of Constant Switching",
      source: "IELTS Marathon 21-Day Companion - Ngày 01, mục 4.5",
      strategy: "Chỉ phần văn bản thực sự liên quan mới giúp phân biệt FALSE với NOT GIVEN. Viết TRUE nếu nhận định phù hợp với bài đọc, FALSE nếu trái với bài đọc, NOT GIVEN nếu bài không cung cấp đủ thông tin.",
      passage: "A. Many students believe that they are good at doing several things at once. A typical study session may involve reading a textbook, replying to messages, checking a short video, changing a song and returning to the textbook a few minutes later. Because each interruption is brief, the student may feel that little time has been lost. The more important loss, however, is not measured only in minutes. It is the repeated mental effort required to leave one task and rebuild attention on another.\n\nB. Psychologists often distinguish between true simultaneous activity and rapid task switching. Some combinations are relatively easy. A person can walk while having a casual conversation because walking is highly automatic for most adults. Two demanding language tasks are different. Reading a difficult article and writing a thoughtful reply both require active control of working memory. When a student moves rapidly between them, the brain does not perform both at full strength. It keeps changing which goal is receiving priority.\n\nC. This switching creates what researchers sometimes call a resumption cost. After an interruption, people need time to remember where they were, what they were trying to understand and what they planned to do next. The delay may last only several seconds, but it can occur dozens of times in one hour. More importantly, the quality of thought may become shallower. A student can still recognise words on a page while failing to build a clear understanding of the argument.\n\nD. Digital platforms are not the only cause. Students may interrupt themselves even when no notification appears. Once the habit of checking has become strong, a moment of difficulty can trigger the desire to escape. A confusing paragraph, an unfamiliar term or a slow writing task creates discomfort. Opening another app provides an immediate sense of novelty and relief. Over time, this pattern can train the learner to respond to difficulty by changing tasks instead of staying with the problem.\n\nE. The solution is not necessarily to remove every device from the room. For some learners, digital tools are essential because lessons, dictionaries and class materials are online. A more practical approach is to reduce unnecessary switching. Students can place messages on silent mode, decide in advance when they will check them and work in blocks long enough to reach deeper concentration. The exact length of a block varies. A beginner may start with fifteen focused minutes, while an experienced learner may work for forty or fifty minutes before taking a short break.\n\nF. It is also useful to make distractions visible. At the side of a notebook, a student can draw a small line every time they feel the urge to leave the task. This simple record often reveals that the problem is not a lack of intelligence or motivation. It is a repeated behavioural pattern. Once the pattern becomes visible, the student can test a different routine and compare the results. This is why a baseline matters. Improvement becomes easier to judge when the learner has evidence of the starting point.\n\nG. None of this means that long, uninterrupted study is always better. Attention declines when people are exhausted, and breaks can protect both accuracy and motivation. The important difference is whether the break is chosen or automatic. A deliberate five-minute pause after a completed work block supports concentration. An unplanned series of interruptions every two minutes prevents concentration from forming in the first place.",
      questions: [
        { id: "r-d1-q1", type: "true_false_not_given", text: "Students usually calculate the full mental cost of brief interruptions accurately.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn A: interruptions là 'brief', học sinh 'may feel that little time has been lost' — cảm giác ít hao phí là không chính xác về chi phí tinh thần thực. Đáp án đối chiếu qua phiếu bằng chứng." },
        { id: "r-d1-q2", type: "true_false_not_given", text: "Walking and holding a casual conversation may be easier than combining two demanding language tasks.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn B: 'walking is highly automatic', trong khi hai language tasks cần working memory — so sánh rõ." },
        { id: "r-d1-q3", type: "true_false_not_given", text: "Resumption costs always last for more than one minute.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn C: 'The delay may last only several seconds' — trái với 'more than one minute'." },
        { id: "r-d1-q4", type: "true_false_not_given", text: "Students may check another app even when they have received no notification.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn D: 'Students may interrupt themselves even when no notification appears'." },
        { id: "r-d1-q5", type: "true_false_not_given", text: "The passage recommends that every learner use a fifty-minute study block.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn E: 'The exact length of a block varies... A beginner may start with fifteen focused minutes' — không khuyến nghị 50 phút cho tất cả." },
        { id: "r-d1-q6", type: "multiple_choice", text: "What is the main point of Paragraph C?", options: ["A. Students should read more slowly.", "B. Switching can reduce both time and depth of understanding.", "C. Working memory can store unlimited information.", "D. Difficult vocabulary is the main cause of distraction."], correct: "B", explanation: "Đoạn C: resumption cost gây mất thời gian và 'the quality of thought may become shallower'." },
        { id: "r-d1-q7", type: "multiple_choice", text: "According to Paragraph D, why can a difficult paragraph lead to task switching?", options: ["A. It creates discomfort that the student wants to escape.", "B. It proves that the student chose the wrong subject.", "C. It makes digital tools stop working.", "D. It causes physical exhaustion immediately."], correct: "A", explanation: "Đoạn D: 'A confusing paragraph... creates discomfort. Opening another app provides an immediate sense of novelty and relief.'" },
        { id: "r-d1-q8", type: "multiple_choice", text: "What distinction does the writer make in Paragraph G?", options: ["A. Online study and classroom study", "B. Long breaks and short breaks", "C. Chosen breaks and automatic interruptions", "D. Strong students and weak students"], correct: "C", explanation: "Đoạn G: 'The important difference is whether the break is chosen or automatic'." },
        { id: "r-d1-q9", type: "sentence_completion", text: "After an interruption, a learner may need to remember the next step they had ____.", options: ["planned to do", "to do next"], correct: "planned to do", explanation: "Đoạn C: 'remember where they were... and what they planned to do next'. Giới hạn tối đa 3 từ: planned to do." },
        { id: "r-d1-q10", type: "sentence_completion", text: "Digital tools may be necessary because course materials are often ____.", options: ["online"], correct: "online", explanation: "Đoạn E: 'lessons, dictionaries and class materials are online'." },
        { id: "r-d1-q11", type: "sentence_completion", text: "A student can record the desire to leave a task by drawing ____ in a notebook.", options: ["a small line"], correct: "a small line", explanation: "Đoạn F: 'draw a small line every time they feel the urge to leave the task'." },
        { id: "r-d1-q12", type: "sentence_completion", text: "A deliberate pause can protect concentration when it follows a completed ____.", options: ["work block"], correct: "work block", explanation: "Đoạn G: 'A deliberate five-minute pause after a completed work block supports concentration'." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Đoạn [B], dòng 2-4",
        paraphrasePair: "Từ khóa câu hỏi <-> Cụm từ trong bài đọc",
        errorReason: "Ghi lý do: bỏ sót trạng từ 'often', nhầm 'a recurring error' với 'occasional', đọc lướt từ 'only'..."
      }
    },
    listening: makeListening({
      day: 1,
      theme: "sự tập trung",
      type: "Điền số & điền từ (Form Completion)",
      part: "Part 1 (Đăng ký khoá học kỹ năng tập trung)",
      questions: [
        { id: "l-d1-q1", prompt: "Khoá 'Focus Skills Workshop' bắt đầu lúc [ 1 ] giờ sáng thứ Bảy.", answer: "9" },
        { id: "l-d1-q2", prompt: "Tuổi tham gia tối thiểu là [ 2 ].", answer: "16" },
        { id: "l-d1-q3", prompt: "Học phí cho khách nội thành là [ 3 ] đô-la.", answer: "45" },
        { id: "l-d1-q4", prompt: "Người tham gia cần mang theo [ 4 ].", answer: "notebook" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - Đoạn thân bài (Body Paragraph)",
      prompt: "Some people believe that secondary schools should ban students from using smartphones during the entire school day. To what extent do you agree or disagree?\n\nHôm nay không viết toàn bộ bài luận. Chỉ viết một đoạn thân bài bảo vệ đúng lập trường đã chọn.",
      targetWords: "150-180 từ (mức nền tảng) / 190-220 từ (mức mở rộng)",
      guidance: "Khung lập ý: Lập trường trong một câu -> Chức năng của đoạn (lợi ích/bất lợi/giới hạn/phương án khác) -> Luận điểm -> Cơ chế diễn ra như thế nào? -> Vì sao vấn đề này đáng quan tâm? -> Ví dụ hoặc tình huống thực tế -> Hệ quả.\nYêu cầu tối thiểu: mức nền tảng 150-180 từ, một cơ chế rõ và một ví dụ thực tế; mức mở rộng 190-220 từ, thêm một giới hạn hoặc ý nhượng bộ và một hệ quả thuyết phục.\nTự kiểm tra: Tôi đã trả lời đúng yêu cầu về lệnh cấm hoàn toàn chưa? Mỗi câu có bổ sung một ý mới không? Ví dụ có chứng minh được luận điểm không? Tôi có dùng cụm từ nào chưa thể giải thích được không?",
      modelAnswer: "A complete ban could improve students' concentration during lessons, but it may be unnecessarily rigid during breaks or activities where phones serve a practical purpose.",
      examinerNotes: "Bài mẫu ngắn (Topic sentence only) của sách. Một topic sentence hiệu quả nêu lập trường rõ và báo trước hướng lập luận: công nhận lợi ích của lệnh cấm (cải thiện tập trung) rồi giới hạn nó (quá cứng nhắc ở giờ giải lao / hoạt động thực dụng)."
    },
    speaking: {
      part: "Part 1 + Part 2 + Part 3 (một tệp ghi âm liên tục)",
      prompt: "Part 1:\n1. What do you usually do when you need to concentrate?\n2. Do you often check your phone while studying?\n3. What subject did you find most difficult at school?\n4. Do you prefer studying in silence or with background noise?\n5. Are you good at managing your time?\n6. What would you like to improve about your English?\n\nPart 2: Describe a time when you changed the way you studied.\nYou should say: what you were studying • what your old method was • what you changed • and explain whether the new method worked.\n(Thời gian chuẩn bị: 1 phút. Nói: mức nền tảng 90 giây, mức mở rộng 2 phút.)\n\nPart 3:\n1. Why do many students find it difficult to concentrate today?\n2. Should schools control how students use technology?\n3. Is self-discipline more important than intelligence in learning?",
      followUps: [
        "Why do many students find it difficult to concentrate today?",
        "Should schools control how students use technology?",
        "Is self-discipline more important than intelligence in learning?"
      ],
      selfEvaluationCriteria: [
        "Khoảng ngập ngừng dài nhất: ghi rõ thời điểm",
        "Từ hoặc cụm từ bị lặp",
        "Lỗi ngữ pháp xuất hiện dưới áp lực",
        "Âm cuối bị mất",
        "Một đoạn nghe tự nhiên (chép lại)"
      ]
    },
    vocabulary: [
      { term: "sustain attention", pos: "verb phrase", phonetic: "duy trì sự tập trung; sustain attention for/on", meaning: "duy trì sự tập trung (cho/vào một việc)", example: "It is difficult to sustain attention when notifications appear every few minutes." },
      { term: "switch between tasks", pos: "verb phrase", phonetic: "chuyển qua lại giữa các việc", meaning: "chuyển qua lại giữa các việc", example: "Many students switch between tasks without noticing how much time is lost." },
      { term: "working memory", pos: "noun phrase", phonetic: "trí nhớ làm việc", meaning: "trí nhớ làm việc", example: "Complex reading places heavy demands on working memory." },
      { term: "a recurring error", pos: "noun phrase", phonetic: "lỗi lặp đi lặp lại", meaning: "lỗi lặp đi lặp lại", example: "Article use is one of my recurring errors." },
      { term: "lose track of", pos: "verb phrase", phonetic: "quên mình đang làm tới đâu", meaning: "quên mình đang làm tới đâu", example: "I sometimes lose track of my argument when I write too quickly." },
      { term: "rebuild concentration", pos: "verb phrase", phonetic: "lấy lại sự tập trung", meaning: "lấy lại sự tập trung", example: "After checking my phone, I need time to rebuild concentration." },
      { term: "an unplanned interruption", pos: "noun phrase", phonetic: "sự gián đoạn không chủ ý", meaning: "sự gián đoạn không chủ ý", example: "An unplanned interruption can break the flow of a difficult task." },
      { term: "work in focused blocks", pos: "verb phrase", phonetic: "học theo từng khoảng tập trung", meaning: "học theo từng khoảng tập trung", example: "I work in focused blocks of twenty-five minutes." },
      { term: "make a pattern visible", pos: "verb phrase", phonetic: "nhận diện rõ một thói quen", meaning: "nhận diện rõ một thói quen", example: "Keeping a log makes the pattern visible." },
      { term: "judge progress", pos: "verb phrase", phonetic: "đánh giá tiến bộ", meaning: "đánh giá tiến bộ", example: "A baseline helps learners judge progress more honestly." },
      { term: "under pressure", pos: "adverb phrase", phonetic: "dưới áp lực", meaning: "dưới áp lực", example: "My grammar becomes less accurate under pressure." },
      { term: "prioritise an error", pos: "verb phrase", phonetic: "ưu tiên một lỗi", meaning: "ưu tiên một lỗi", example: "I need to prioritise the errors that affect clarity." }
    ],
    grammar: {
      title: "Bài ngữ pháp đầu vào (Sửa lỗi + Cách sửa tự nhiên)",
      explanation: "Sửa các câu sau và giữ cấu trúc ở mức vừa đủ. Sau đó viết lại các ý tiếng Việt bằng tiếng Anh tự nhiên, tránh dịch từng từ.",
      drillQuestion: "SỬA LỖI (giữ cấu trúc vừa đủ):\n1. Many student checks their phone while they are study.\n2. Because notifications make it difficult to focus.\n3. The number of interruptions are increasing during online lessons.\n4. Students can lose many informations when they change tasks quickly.\n5. Although technology is useful but it can become distracting.\n6. I spend too much time to check social media.\n7. People who studies in noisy places may find difficult to concentrate.\n8. This habit affects badly to their academic performance.\n\nCÁCH SỬA TỰ NHIÊN TRONG TIẾNG ANH (viết lại các ý sau, tránh dịch từng từ):\n1. Tôi rất thích học vào ban đêm.\n2. Điện thoại làm tôi mất tập trung hơn và hơn.\n3. Tôi bị áp lực vì có quá nhiều bài tập về nhà.\n4. Tôi muốn cải thiện bản thân trong tiếng Anh.",
      sampleAnswer: "Gợi ý sửa lỗi (đối chiếu sau khi tự sửa):\n1. Many students check their phones while they are studying.\n2. Notifications make it difficult to focus. (mệnh đề Because không đứng một mình)\n3. The number of interruptions is increasing during online lessons.\n4. Students can lose a lot of information when they change tasks quickly.\n5. Although technology is useful, it can become distracting.\n6. I spend too much time checking social media.\n7. People who study in noisy places may find it difficult to concentrate.\n8. This habit affects their academic performance badly.\n\nGợi ý cách sửa tự nhiên:\n1. I really enjoy studying at night.\n2. Phones distract me more and more.\n3. I am under pressure / stressed because of too much homework.\n4. I want to improve my English."
    },
    deliverables: [
      "Điểm Reading và phiếu ghi bằng chứng (Day01-Reading-Evidence)",
      "Đoạn Writing đầu tiên (Day01-Writing-FirstDraft)",
      "Bản ghi âm Speaking chưa chỉnh sửa (Day01-Speaking-Raw)",
      "Ba lỗi cần ưu tiên (Day01-Error-Map)",
      "Sáu cụm từ đã vận dụng trong câu tự viết (Day01-Vocab-Application)"
    ]
  },

  // ============================================================ DAY 02
  {
    day: 2,
    phase: 1,
    title: "Ngày 02: Luận đề và mạch lập luận",
    theme: "Kỹ năng thực tiễn trong giáo dục & Cách viết thesis",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Một thesis hiệu quả cần trả lời đúng yêu cầu của đề và cho người đọc biết hướng lập luận sẽ được triển khai. Trước khi viết, xác định loại câu hỏi, phạm vi chủ đề và mức độ đồng tình. Ba quyết định này phải xuất hiện rõ trong thesis; câu mở bài chung hoặc cách diễn đạt trang trọng chưa thể bù cho một lập trường mơ hồ. Sang phần thân bài, từng câu cần nối với quyết định ban đầu qua một chuỗi ý có quan hệ rõ: luận điểm nêu điều gì, cơ chế giải thích vì sao, hệ quả cho thấy ý nghĩa ra sao và ví dụ minh hoạ trường hợp cụ thể nào. Ngày 2 không yêu cầu viết nhiều bài hoàn chỉnh: trọng tâm là tạo ra năm câu thesis cho năm dạng đề, sau đó chọn một lập trường để phát triển thành đoạn thân bài.",
    checklist: [
      "Năm câu luận đề — mỗi câu xác định đúng dạng đề, phạm vi và lập trường",
      "Một đoạn thân bài được phát triển đầy đủ (topic sentence + cơ chế + ví dụ + hệ quả)",
      "Một bản viết lại có trọng tâm (sửa một lỗi đã được gọi tên)",
      "Bài Reading 1-8 (ghép tiêu đề B-F + 3 câu short answer)",
      "Một bản ghi âm hoặc lượt luyện Speaking về giáo dục"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Nhiệm vụ trong ngày", note: "Phân tích cấu trúc thesis và 4 lỗi lập trường" },
        { time: "05-30m", name: "Reading", note: "60': đọc đoạn A-D, trả lời ba đề đầu; 90': trọn bộ passage + 8 câu" },
        { time: "30-55m", name: "Phân tích đề & thesis", note: "5 đề bài -> 5 câu thesis + kiểm tra chất lượng" },
        { time: "55-75m", name: "Đoạn thân bài", note: "Viết 160-220 từ bảo vệ lập trường chọn trước" },
        { time: "75-90m", name: "Sửa & Speaking", note: "Một lượt sửa ngữ pháp trọng tâm + luyện phần Speaking" }
      ]
    },
    reading: {
      title: "Practice Passage 02 - Practical Skills and the Modern School",
      source: "IELTS Marathon 21-Day Companion - Ngày 02, mục 5.5",
      strategy: "Ghép tiêu đề: chọn tiêu đề phù hợp nhất cho mỗi đoạn. Câu hỏi 6-8: trả lời bằng KHÔNG QUÁ NĂM TỪ lấy từ bài đọc.",
      passage: "A. Debates about school curricula often begin with a simple contrast. Academic subjects are associated with knowledge, examinations and university preparation, while practical subjects are linked to everyday life. This contrast is useful, but it can also be misleading. Mathematics may appear purely academic until a student uses percentages to compare loan costs. Communication may look like a soft practical skill until a scientist needs to explain complex findings clearly. In reality, the two sides overlap more than the debate usually suggests.\n\nB. Supporters of practical education argue that many teenagers leave school without basic knowledge of money, contracts, nutrition, workplace communication or household responsibilities. These gaps can have immediate consequences. A young adult who does not understand interest rates may borrow carelessly. Someone who has never practised formal communication may struggle to write an email to an employer. Schools, from this perspective, should prepare students not only to pass examinations but also to manage ordinary adult decisions.\n\nC. Critics, however, warn that the school day is limited. Every new compulsory course reduces the time available for an existing subject. They also point out that practical needs change. A lesson on a particular tax form or software platform may become outdated quickly, while a strong foundation in mathematics, reading and scientific reasoning remains useful across many situations. Schools cannot predict every task students will face, so they may serve learners better by developing adaptable minds.\n\nD. A further difficulty concerns responsibility. Some people believe financial habits, cooking and household tasks should be taught mainly at home. Yet families do not have equal time, confidence or experience. A parent who has never had access to reliable financial advice may find it difficult to teach a child about savings and credit. Leaving practical education entirely to families can therefore reproduce existing inequalities.\n\nE. The most promising approach may be integration rather than competition. Schools can teach practical applications through academic subjects. Mathematics lessons can include budgeting and interest. Language classes can cover professional emails and public speaking. Science can address nutrition, health claims and environmental decisions. This model preserves intellectual depth while showing students why knowledge matters outside an examination room.\n\nF. Integration is not automatically successful. A practical example added at the end of a lesson can feel artificial if it is not connected to the main concept. Teachers also need training and suitable materials. Nevertheless, the debate becomes more productive when it moves beyond the question of which category should win. The real question is how schools can give students both a strong intellectual foundation and the confidence to use knowledge in adult life.",
      questions: [
        { id: "r-d2-q1", type: "heading_matching", text: "Paragraph B", headings: ["I. Unequal families and unequal preparation", "II. A false division between two kinds of learning", "III. The risk of teaching information that soon becomes old", "IV. Combining application with academic content", "V. Immediate problems caused by missing life knowledge", "VI. Why examinations should be removed", "VII. The need to implement integration carefully", "VIII. Practical subjects as the only useful form of education"], options: ["I. Unequal families...", "II. A false division...", "III. The risk of teaching...", "IV. Combining application...", "V. Immediate problems...", "VI. Why examinations...", "VII. The need to implement...", "VIII. Practical subjects..."], correct: "V", explanation: "Đoạn B: 'These gaps can have immediate consequences... A young adult who does not understand interest rates may borrow carelessly.'" },
        { id: "r-d2-q2", type: "heading_matching", text: "Paragraph C", headings: ["I. Unequal families and unequal preparation", "II. A false division between two kinds of learning", "III. The risk of teaching information that soon becomes old", "IV. Combining application with academic content", "V. Immediate problems caused by missing life knowledge", "VI. Why examinations should be removed", "VII. The need to implement integration carefully", "VIII. Practical subjects as the only useful form of education"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "III", explanation: "Đoạn C: 'A lesson on a particular tax form or software platform may become outdated quickly.'" },
        { id: "r-d2-q3", type: "heading_matching", text: "Paragraph D", headings: ["I. Unequal families and unequal preparation", "II. A false division between two kinds of learning", "III. The risk of teaching information that soon becomes old", "IV. Combining application with academic content", "V. Immediate problems caused by missing life knowledge", "VI. Why examinations should be removed", "VII. The need to implement integration carefully", "VIII. Practical subjects as the only useful form of education"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "I", explanation: "Đoạn D: 'Leaving practical education entirely to families can therefore reproduce existing inequalities.'" },
        { id: "r-d2-q4", type: "heading_matching", text: "Paragraph E", headings: ["I. Unequal families and unequal preparation", "II. A false division between two kinds of learning", "III. The risk of teaching information that soon becomes old", "IV. Combining application with academic content", "V. Immediate problems caused by missing life knowledge", "VI. Why examinations should be removed", "VII. The need to implement integration carefully", "VIII. Practical subjects as the only useful form of education"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "IV", explanation: "Đoạn E: 'The most promising approach may be integration... Schools can teach practical applications through academic subjects.'" },
        { id: "r-d2-q5", type: "heading_matching", text: "Paragraph F", headings: ["I. Unequal families and unequal preparation", "II. A false division between two kinds of learning", "III. The risk of teaching information that soon becomes old", "IV. Combining application with academic content", "V. Immediate problems caused by missing life knowledge", "VI. Why examinations should be removed", "VII. The need to implement integration carefully", "VIII. Practical subjects as the only useful form of education"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "VII", explanation: "Đoạn F: 'Integration is not automatically successful... Teachers also need training and suitable materials.'" },
        { id: "r-d2-q6", type: "short_answer", text: "What may a young adult misunderstand before borrowing carelessly?", options: [], correct: "interest rates", explanation: "Đoạn B: 'A young adult who does not understand interest rates may borrow carelessly.' (tối đa 5 từ)" },
        { id: "r-d2-q7", type: "short_answer", text: "Which three academic foundations are described as useful across many situations?", options: [], correct: "mathematics, reading and scientific reasoning", explanation: "Đoạn C: 'a strong foundation in mathematics, reading and scientific reasoning remains useful across many situations.'" },
        { id: "r-d2-q8", type: "short_answer", text: "What do teachers require in addition to suitable materials?", options: [], correct: "training", explanation: "Đoạn F: 'Teachers also need training and suitable materials.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn [B-F] + câu bảo chứng",
        paraphrasePair: "Tiêu đề <-> ý chính đoạn (không dựa vào từ trùng)",
        errorReason: "Tiêu đề quá rộng hoặc chỉ bám một chi tiết phụ của đoạn"
      }
    },
    listening: makeListening({
      day: 2,
      theme: "giáo dục",
      type: "Điền biểu mẫu (Form Completion)",
      part: "Part 1 (Đăng ký khoá học kỹ năng thực tiễn tại trung tâm)",
      questions: [
        { id: "l-d2-q1", prompt: "Khoá 'Money Skills for Teens' kéo dài [ 1 ] buổi.", answer: "6" },
        { id: "l-d2-q2", prompt: "Lớp khai giảng vào thứ [ 2 ].", answer: "Tuesday" },
        { id: "l-d2-q3", prompt: "Học viên cần gửi một email giới thiệu tới địa chỉ career@[ 3 ] .", answer: "forum.com" },
        { id: "l-d2-q4", prompt: "Buổi đầu tiên bao gồm phần thực hành viết [ 4 ] professional.", answer: "emails" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - 5 câu thesis + 1 đoạn thân bài",
      prompt: "Viết một câu thesis cho MỖI đề bài sau:\n\nĐề 1: Schools should spend more time teaching practical life skills than traditional academic subjects. To what extent do you agree or disagree?\nĐề 2: University education should focus on preparing students for employment rather than developing knowledge for its own sake. To what extent do you agree or disagree?\nĐề 3: Some people think parents should teach children how to become responsible members of society, while others believe school is the best place to learn this. Discuss both views and give your opinion.\nĐề 4: In many countries, students are given more homework than in the past. Do the advantages of this development outweigh the disadvantages?\nĐề 5: Many young people leave school without the ability to manage money. Why does this happen, and what can be done about it?\n\nSau đó dùng ĐỀ 1 viết một đoạn thân bài bảo vệ quan điểm nên chú trọng hơn đến kỹ năng thực tiễn.",
      targetWords: "Thesis: mỗi câu khuyến nghị ~30-40 từ; Đoạn: 160-180 từ (nền tảng) / 190-220 từ (mở rộng)",
      guidance: "Cấu trúc gợi ý (KHÔNG chép nguyên câu khuôn):\n• I agree to a large extent because..., although...\n• While X has clear benefits, I do not believe...\n• Both views are understandable, but...\n• The main causes are..., and the most effective response would be...\n• This development is broadly positive, provided that...\n\nKiểm tra chất lượng thesis: Người đọc có nhận ra lập trường ngay không? Câu có trả lời đúng dạng câu hỏi không? Điều kiện hoặc ý tương phản có thực sự cần thiết không? Từ câu này tôi có phát triển được hai đoạn thân bài với hai chức năng khác nhau không?\n\nChuỗi phát triển đoạn: Luận điểm -> Cơ chế -> Ví dụ -> Hệ quả -> Liên kết lại luận điểm.\nMức nền tảng: 160-180 từ, một ví dụ rõ (quản lý ngân sách, giao tiếp nơi làm việc, kiến thức sức khoẻ). Mức mở rộng: 190-220 từ, thêm một giới hạn (áp lực thời khoá biểu, yêu cầu tích hợp nội dung thực tiễn).",
      modelAnswer: "Topic sentence mẫu (có quan điểm rõ): Financial literacy is useful because it changes the way young people evaluate everyday choices. Instead of seeing a loan only as immediate access to money, they learn to consider interest, repayment periods and long-term cost.",
      examinerNotes: "Một thesis hiệu quả báo trước chức năng Body 1, Body 2. Tránh câu kiểu 'This essay will discuss...' vì chỉ nêu chủ đề, chưa thể hiện lập trường. Bốn lỗi lập trường: (1) không xuất hiện, (2) thay đổi gữa thesis và kết luận, (3) cân bằng thiếu căn cứ, (4) quá rộng (bỏ từ giới hạn children, governments, entirely...)."
    },
    speaking: {
      part: "Part 1 + Part 2 + Part 3 (về giáo dục)",
      prompt: "Part 1:\n1. What subject did you enjoy most at school?\n2. Did your school teach any practical skills?\n3. Do you prefer learning from a teacher or by yourself?\n4. Is there a skill you wish you had learned earlier?\n\nPart 2: Describe a useful skill you learned outside school.\nYou should say: what the skill was • how you learned it • why it was difficult or useful • and explain whether schools should teach it.\n\nPart 3:\n1. What practical skills should all teenagers learn?\n2. Are academic subjects becoming less important?\n3. Who should be more responsible for life skills, schools or families?\n4. How can teachers make theoretical subjects feel more relevant?",
      followUps: [
        "What practical skills should all teenagers learn?",
        "Are academic subjects becoming less important?",
        "Who should be more responsible for life skills, schools or families?",
        "How can teachers make theoretical subjects feel more relevant?"
      ],
      selfEvaluationCriteria: [
        "Khung phát triển Part 3: Lập trường -> Lí do -> Minh hoạ cụ thể -> Giới hạn -> Ý kết",
        "Câu trả lời có ví dụ thực tế không?",
        "Có dùng được cụm từ học trong ngày khi nói không?",
        "Âm cuối /t, /d, /s, /z có rõ không?"
      ]
    },
    vocabulary: [
      { term: "a well-rounded education", pos: "noun phrase", phonetic: "nền giáo dục toàn diện", meaning: "nền giáo dục toàn diện", example: "A well-rounded education combines knowledge with practical competence." },
      { term: "financial literacy", pos: "noun phrase", phonetic: "hiểu biết tài chính", meaning: "hiểu biết tài chính", example: "Financial literacy can prevent avoidable mistakes in early adulthood." },
      { term: "an intellectual foundation", pos: "noun phrase", phonetic: "nền tảng tư duy và kiến thức", meaning: "nền tảng tư duy và kiến thức", example: "Academic subjects provide an intellectual foundation for later study." },
      { term: "transferable skills", pos: "noun phrase", phonetic: "kỹ năng có thể vận dụng rộng", meaning: "kỹ năng có thể vận dụng rộng", example: "Communication and problem-solving are transferable skills." },
      { term: "manage everyday responsibilities", pos: "verb phrase", phonetic: "xử lý trách nhiệm thường ngày", meaning: "xử lý trách nhiệm thường ngày", example: "Schools can help students manage everyday responsibilities." },
      { term: "prepare students for adult life", pos: "verb phrase", phonetic: "chuẩn bị cho đời sống trưởng thành", meaning: "chuẩn bị cho đời sống trưởng thành", example: "Education should prepare students for adult life as well as examinations." },
      { term: "remain relevant", pos: "verb phrase", phonetic: "vẫn phù hợp", meaning: "vẫn phù hợp", example: "Core literacy skills remain relevant even when technology changes." },
      { term: "become outdated", pos: "verb phrase", phonetic: "trở nên lỗi thời", meaning: "trở nên lỗi thời", example: "A course built around one software platform may become outdated." },
      { term: "integrate X into Y", pos: "verb phrase", phonetic: "tích hợp X vào Y", meaning: "tích hợp X vào Y", example: "Schools can integrate budgeting into mathematics lessons." },
      { term: "place pressure on the timetable", pos: "verb phrase", phonetic: "gây áp lực lên thời khoá biểu", meaning: "gây áp lực lên thời khoá biểu", example: "New compulsory subjects place pressure on the timetable." },
      { term: "unequal access to", pos: "noun phrase", phonetic: "chênh lệch khả năng tiếp cận", meaning: "chênh lệch khả năng tiếp cận", example: "Children have unequal access to financial guidance at home." },
      { term: "apply knowledge in practice", pos: "verb phrase", phonetic: "áp dụng kiến thức vào thực tế", meaning: "áp dụng kiến thức vào thực tế", example: "Students need opportunities to apply knowledge in practice." },
      { term: "learn by trial and error", pos: "verb phrase", phonetic: "học qua quá trình thử nghiệm", meaning: "học qua quá trình thử nghiệm", example: "Many adults learn money management by trial and error." },
      { term: "serve different purposes", pos: "verb phrase", phonetic: "phục vụ các mục đích khác nhau", meaning: "phục vụ các mục đích khác nhau", example: "Academic and practical subjects serve different purposes." }
    ],
    grammar: {
      title: "Lập trường & nhượng bộ + sửa lỗi trọng điểm",
      explanation: "Kết hợp hoặc viết lại các câu sau bằng ít nhất bốn cấu trúc: although / while / but / rather than / provided that / should not be prioritised at the expense of.",
      drillQuestion: "1. Practical skills are important. They should not replace academic subjects.\n2. Schools have limited time. They still need to address major gaps in life knowledge.\n3. Families can teach children about money. Not every family has the same knowledge.\n4. A course may be useful today. It may become outdated quickly.\n5. I support practical education. It must be integrated carefully.\n\nSỬA LỖI:\n1. Students can learn many knowledges from practical subjects.\n2. Schools should teach about how to manage money.\n3. This course brings many benefits for young people.\n4. Parents do not always have enough experiences to teach this.\n5. It helps students to adapt with adult life.",
      sampleAnswer: "Gợi ý kết hợp:\n1. Practical skills are important, but they should not replace academic subjects.\n2. Although schools have limited time, they still need to address major gaps in life knowledge.\n3. While families can teach children about money, not every family has the same knowledge.\n4. A course may be useful today, yet it may become outdated quickly.\n5. I support practical education, provided that it is integrated carefully.\n\nGợi ý sửa lỗi:\n1. Students can learn a great deal of knowledge / many things from practical subjects.\n2. Schools should teach students how to manage money.\n3. This course brings many benefits to young people.\n4. Parents do not always have enough experience to teach this.\n5. It helps students adapt to adult life."
    },
    deliverables: [
      "Năm đề bài đã được phân tích (Day02-Topic-Analysis)",
      "Năm câu thesis (Day02-Thesis-5)",
      "Một đoạn thân bài (Day02-Body-Paragraph)",
      "Một lượt sửa ngữ pháp có trọng tâm (Day02-Grammar-Fix)",
      "Một bản ghi âm hoặc lượt luyện Speaking (Day02-Speaking)"
    ]
  },

  // ============================================================ DAY 03
  {
    day: 3,
    phase: 1,
    title: "Ngày 03: Bằng chứng trong Reading",
    theme: "Thư viện công cộng & Truy cập tri thức",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Ngày 3 chuyển trọng tâm từ chọn đáp án sang chứng minh đáp án. Đối với True, False và Not Given, cần tách ba thao tác: xác định nội dung của nhận định, tìm phần văn bản có liên quan và so sánh mức độ khẳng định giữa hai bên. TRUE yêu cầu nhận định phù hợp với thông tin trong bài; FALSE xuất hiện khi bài đưa ra thông tin trái ngược; NOT GIVEN dùng khi văn bản không cung cấp đủ dữ liệu để xác nhận hoặc bác bỏ. Chỉ phần văn bản thực sự liên quan mới giúp phân biệt False với Not Given. Một câu được xem là đã chữa xong khi phiếu ghi bằng chứng nêu rõ đoạn, cặp paraphrase và loại bẫy. Cuối ngày, năm câu chưa chắc chắn cần được làm lại sau khi phiếu bằng chứng đã hoàn thành.",
    checklist: [
      "Đáp án Reading 14 câu (bài đọc 03)",
      "Phiếu ghi bằng chứng cho mọi câu sai hoặc chưa chắc chắn (đủ 6 cột)",
      "Mười cặp paraphrase tìm được trong bài đọc",
      "Một đoạn văn hoặc dàn ý đoạn về chủ đề thư viện (160-200 từ)",
      "Một bản ghi âm Speaking ngắn về không gian công cộng",
      "Làm lại năm câu đã đoán/sai sau ít nhất 10 phút"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Ba loại nhận định", note: "TRUE / FALSE / NOT GIVEN + bốn nhãn bẫy" },
        { time: "05-35m", name: "Reading", note: "60': câu 1-10 + ghi bằng chứng; 90': đủ 14 câu + phiếu đầy đủ" },
        { time: "35-55m", name: "Paraphrase", note: "Tìm 10 cặp diễn đạt tương đương trong passage" },
        { time: "55-75m", name: "Writing", note: "Đoạn Task 2 160-200 từ về thư viện + gạch chân chuỗi sao chép" },
        { time: "75-90m", name: "Speaking + Làm lại", note: "Speaking ngắn + 5 câu làm lại sau 10 phút nghỉ" }
      ]
    },
    reading: {
      title: "Practice Passage 03 - The Reinvention of the Public Library",
      source: "IELTS Marathon 21-Day Companion - Ngày 03, mục 6.5",
      strategy: "Phân biệt ba thao tác: nội dung nhận định -> phần văn bản liên quan -> so sánh mức độ khẳng định. Bốn nhãn bẫy: TRÁI NGƯỢC / THIẾU THÔNG TIN / MỨC ĐỘ TUYỆT ĐỐI (all, only, always, never, completely) / BẪY TỪ KHOÁ (cùng từ, quan hệ nghĩa đổi).",
      passage: "A. For much of the twentieth century, the public library was easy to describe. It was a quiet building that stored books and allowed local residents to borrow them. That function remains important, but it no longer captures the full role of many modern libraries. As information has moved online, libraries have had to answer a difficult question: what should a public institution provide when books and facts can be reached from a phone?\n\nB. One response has been to expand access to technology. In communities where home internet is unreliable or expensive, library computers and Wi-Fi are not minor conveniences. They may be the only practical way for a job seeker to complete an online application, for a student to download school materials or for an older resident to communicate with a public service. The existence of digital information does not remove inequality. In some cases, it makes access to a device and a stable connection even more important.\n\nC. Libraries have also become spaces for guided learning. A person searching online faces a huge quantity of material, much of it unreliable, commercially motivated or difficult to evaluate. Librarians increasingly help visitors locate trustworthy sources, understand databases and distinguish evidence from opinion. This role is less visible than lending a physical book, but it is central to a society in which misinformation can spread rapidly.\n\nD. A third development is the growth of community programmes. Libraries may host language classes, children's activities, career workshops, local history groups and basic digital training. These events are often free or inexpensive, which makes them accessible to people who cannot pay for private courses. They also give residents a reason to share a public space without being expected to buy anything.\n\nE. Not everyone welcomes this expansion. Some regular users worry that conversation, group activities and children's events weaken the quiet environment that made libraries valuable. Staff can also be placed under pressure when a single building is expected to function as a reading room, technology centre, classroom, social service and community hall. Expanding the mission without increasing funding may produce an institution that promises more than it can deliver.\n\nF. Design can reduce some of these tensions. Newer libraries often separate silent study zones from collaborative areas. Movable furniture allows rooms to serve different purposes at different times, while sound-absorbing materials limit disturbance. These solutions require investment, but they recognise that silence and community activity do not have to be treated as complete opposites.\n\nG. The value of a library is also difficult to measure. Counting borrowed books captures only one part of its impact. A visitor may use a desk for three hours, receive help with a government form, attend a free class or simply spend time in a safe indoor space. None of these activities appears clearly in traditional lending statistics. As a result, a library can look less active on paper even while it is serving a wider range of needs.\n\nH. The future of public libraries will probably differ from place to place. A rural town may need reliable internet and access to government services, while a dense urban neighbourhood may need quiet study space and children's programmes. The strongest libraries are therefore unlikely to follow one universal model. Their shared principle is more basic: public access to knowledge, support and space should not depend entirely on a person's income.",
      questions: [
        { id: "r-d3-q1", type: "true_false_not_given", text: "Modern public libraries have completely stopped focusing on book lending.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn A: 'That function remains important' — chưa ngừng hoàn toàn (bẫy tuyệt đối: completely)." },
        { id: "r-d3-q2", type: "true_false_not_given", text: "Some people depend on library internet access to complete employment-related tasks.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn B: 'the only practical way for a job seeker to complete an online application'." },
        { id: "r-d3-q3", type: "true_false_not_given", text: "The passage states that online information is generally more reliable than printed information.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN", explanation: "Bài chỉ nói 'much of it unreliable' (Đoạn C) nhưng không so sánh độ tin cậy với bản in." },
        { id: "r-d3-q4", type: "true_false_not_given", text: "Librarians may teach visitors how to judge the quality of sources.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn C: 'help visitors locate trustworthy sources... distinguish evidence from opinion'." },
        { id: "r-d3-q5", type: "true_false_not_given", text: "Every community programme in a library is free.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Bẫy tuyệt đối 'Every' + trạng từ 'often': 'These events are often free or inexpensive'." },
        { id: "r-d3-q6", type: "true_false_not_given", text: "Some library users believe that additional activities can damage the quiet atmosphere.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn E: 'Some regular users worry that conversation... weaken the quiet environment'." },
        { id: "r-d3-q7", type: "true_false_not_given", text: "Sound-absorbing materials are the cheapest way to redesign a library.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN", explanation: "Đoạn F nói 'require investment' nhưng không so sánh chi phí (cheapest — thiếu thông tin)." },
        { id: "r-d3-q8", type: "sentence_completion", text: "A stable connection and a device may become more important because digital information does not remove ____.", options: [], correct: "inequality", explanation: "Đoạn B: 'The existence of digital information does not remove inequality.'" },
        { id: "r-d3-q9", type: "sentence_completion", text: "Librarians help visitors distinguish evidence from ____.", options: [], correct: "opinion", explanation: "Đoạn C: 'distinguish evidence from opinion'." },
        { id: "r-d3-q10", type: "sentence_completion", text: "Libraries allow residents to share public space without needing to ____.", options: [], correct: "buy anything", explanation: "Đoạn D: 'share a public space without being expected to buy anything'." },
        { id: "r-d3-q11", type: "sentence_completion", text: "Staff may face pressure if one building is expected to perform too many ____.", options: [], correct: "functions", explanation: "Đoạn E: 'function as a reading room, technology centre, classroom, social service and community hall'." },
        { id: "r-d3-q12", type: "sentence_completion", text: "Modern designs may use ____ so rooms can change function.", options: [], correct: "movable furniture", explanation: "Đoạn F: 'Movable furniture allows rooms to serve different purposes at different times'." },
        { id: "r-d3-q13", type: "sentence_completion", text: "Traditional statistics mainly count the number of ____.", options: [], correct: "borrowed books", explanation: "Đoạn G: 'Counting borrowed books captures only one part of its impact.'" },
        { id: "r-d3-q14", type: "sentence_completion", text: "The passage argues that access to knowledge and space should not depend entirely on a person's ____.", options: [], correct: "income", explanation: "Đoạn H: 'should not depend entirely on a person's income'." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu chứa thông tin liên quan",
        paraphrasePair: "Cách diễn đạt trong câu hỏi <-> trong bài đọc",
        errorReason: "Mã lỗi: TRÁI NGƯỢC / THIẾU THÔNG TIN / MỨC ĐỘ TUYỆT ĐỐI / BẪY TỪ KHOÁ"
      }
    },
    listening: makeListening({
      day: 3,
      theme: "thư viện & không gian công cộng",
      type: "Multiple Choice (Part 2 - Giới thiệu thư viện mới)",
      part: "Part 2 (Thuyết trình về tiện ích thư viện)",
      questions: [
        { id: "l-d3-q1", prompt: "Khi nào thư viện mới mở cửa?", options: ["A. 8:00 sáng", "B. 9:00 sáng", "C. 7:30 sáng"], answer: "B" },
        { id: "l-d3-q2", prompt: "Tầng một dành riêng cho dịch vụ nào?", options: ["A. Phòng trẻ em", "B. Khu máy tính", "C. Cà phê"], answer: "B" },
        { id: "l-d3-q3", prompt: "Thành viên được mượn tối đa bao nhiêu sách?", options: ["A. 5 cuốn", "B. 10 cuốn", "C. 15 cuốn"], answer: "C" },
        { id: "l-d3-q4", prompt: "Hội thảo số hoá được tổ chức vào lúc nào?", options: ["A. Thứ Ba", "B. Thứ Năm", "C. Thứ Bảy"], answer: "A" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - Đoạn thân bài 160-200 từ",
      prompt: "Public libraries are no longer necessary because most information is available online. To what extent do you agree or disagree?\n\nViết một đoạn thân bài dài 160-200 từ. Có thể sử dụng ý tưởng từ bài đọc nhưng cần diễn đạt lại bằng lời của bạn.",
      targetWords: "160-200 từ",
      guidance: "Trình tự phát triển ý bắt buộc: Luận điểm -> bất bình đẳng số hoặc đánh giá nguồn tin -> ví dụ thực tế -> hệ quả rộng hơn.\n\nKiểm tra mức độ sao chép: sau khi viết, gạch chân mọi chuỗi từ năm từ trở lên được lấy trực tiếp từ bài đọc. Viết lại các chuỗi này; chỉ giữ nguyên thuật ngữ cố định.",
      modelAnswer: "Bài mẫu ngắn - Paraphrase. Ý trong bài đọc: 'The existence of digital information does not remove inequality.' Cách viết lại: 'Putting information online does not guarantee that every citizen can reach or use it effectively.'",
      examinerNotes: "Vietnamese learners thường bị 0 điểm vì sao chép chuỗi dài từ bài đọc. Quy tắc: chuỗi 5 từ trở lên lấy trực tiếp từ passage phải được viết lại, trừ thuật ngữ cố định. Cặp paraphrase đầu tiên cần nắm: cannot afford private classes <-> in expensive; reduce conflict <-> sound-absorbing materials, separate zones..."
    },
    speaking: {
      part: "Part 1 + Part 2 + Part 3 (không gian công cộng)",
      prompt: "Part 1:\n1. Do you ever go to a library?\n2. Do you prefer reading on paper or on a screen?\n3. Is there a quiet place where you usually study?\n4. Did you use libraries more when you were younger?\n\nPart 2: Describe a public place where you can study or concentrate.\nYou should say: where it is • what the place looks like • what you do there • and explain why it helps you concentrate.\n\nPart 3:\n1. Why should cities provide free public spaces?\n2. Will physical libraries disappear in the future?\n3. How can people learn to identify unreliable information?",
      followUps: [
        "Why should cities provide free public spaces?",
        "Will physical libraries disappear in the future?",
        "How can people learn to identify unreliable information?"
      ],
      selfEvaluationCriteria: [
        "Có mô tả giác quan (hình dáng, âm thanh) cho Part 2 không?",
        "Câu trả lời Part 3 có Lập trường -> Lí do -> Minh hoạ -> Giới hạn không?",
        "Có dùng cụm từ 'bridge the digital divide', 'reliable source' tự nhiên không?",
        "Chỗ ngập ngừng có nằm giữa hai cụm nghĩa không?"
      ]
    },
    vocabulary: [
      { term: "public access to knowledge", pos: "noun phrase", phonetic: "quyền tiếp cận tri thức", meaning: "quyền tiếp cận tri thức", example: "Libraries protect public access to knowledge." },
      { term: "bridge the digital divide", pos: "verb phrase", phonetic: "thu hẹp khoảng cách số", meaning: "thu hẹp khoảng cách số", example: "Free internet can help bridge the digital divide." },
      { term: "a reliable source", pos: "noun phrase", phonetic: "nguồn đáng tin", meaning: "nguồn đáng tin", example: "Students need to distinguish a reliable source from a popular one." },
      { term: "evaluate information critically", pos: "verb phrase", phonetic: "đánh giá thông tin bằng tư duy phản biện", meaning: "đánh giá thông tin bằng tư duy phản biện", example: "Media literacy helps people evaluate information critically." },
      { term: "a community hub", pos: "noun phrase", phonetic: "trung tâm sinh hoạt cộng đồng", meaning: "trung tâm sinh hoạt cộng đồng", example: "The library has become a community hub." },
      { term: "a quiet study zone", pos: "noun phrase", phonetic: "khu học yên tĩnh", meaning: "khu học yên tĩnh", example: "The second floor is used as a quiet study zone." },
      { term: "serve a wider range of needs", pos: "verb phrase", phonetic: "phục vụ nhiều nhu cầu hơn", meaning: "phục vụ nhiều nhu cầu hơn", example: "Modern libraries serve a wider range of needs." },
      { term: "place staff under pressure", pos: "verb phrase", phonetic: "gây áp lực lên nhân viên", meaning: "gây áp lực lên nhân viên", example: "An expanding mission can place staff under pressure." },
      { term: "traditional lending statistics", pos: "noun phrase", phonetic: "số liệu mượn sách truyền thống", meaning: "số liệu mượn sách truyền thống", example: "Traditional lending statistics miss many forms of use." },
      { term: "safe indoor space", pos: "noun phrase", phonetic: "không gian trong nhà an toàn", meaning: "không gian trong nhà an toàn", example: "A library can provide a safe indoor space during extreme weather." },
      { term: "depend on a person's income", pos: "verb phrase", phonetic: "phụ thuộc thu nhập", meaning: "phụ thuộc thu nhập", example: "Basic public services should not depend on a person's income." },
      { term: "follow a universal model", pos: "verb phrase", phonetic: "theo một khuôn mẫu chung", meaning: "theo một khuôn mẫu chung", example: "Libraries do not need to follow a universal model." }
    ],
    grammar: {
      title: "Phép quy chiếu & từ chỉ lượng",
      explanation: "Chọn phương án đúng về danh từ số ít/số nhiều và từ chỉ lượng, sau đó viết lại các câu cho tự nhiên.",
      drillQuestion: "CHỌN ĐÚNG:\n1. Digital information does not remove inequality/inequalities in access.\n2. Libraries provide many useful information/a great deal of useful information.\n3. A visitor may receive help, and this/these can be difficult to measure.\n4. New zones reduce noise, which/that means different users can share the building.\n5. There are fewer/less physical books in some redesigned spaces.\n6. The number/A number of community programmes is increasing.\n7. The number/A number of residents use libraries for internet access.\n8. Staff need more funding/more fundings if their responsibilities expand.\n\nSỬA CÂU (viết lại cho tự nhiên):\n1. Libraries give people many knowledges.\n2. The government should invest money for public libraries.\n3. People can approach reliable information there.\n4. This service is very convenience for poor people.\n5. The library has less visitors than before, but they stay longer.",
      sampleAnswer: "Gợi ý chọn:\n1. inequality  2. a great deal of useful information  3. this  4. which  5. fewer  6. The number  7. A number  8. funding\n\nGợi ý sửa:\n1. Libraries give people a great deal of knowledge.\n2. The government should invest money in public libraries.\n3. People can access reliable information there.\n4. This service is very convenient for poor people.\n5. The library has fewer visitors than before, but they stay longer."
    },
    deliverables: [
      "Đáp án Reading + phiếu bằng chứng đủ 6 cột (Day03-Reading-Evidence)",
      "Mười cặp paraphrase (Day03-Paraphrase-10)",
      "Đoạn văn Writing or dàn ý (Day03-Writing-Paragraph)",
      "Bản ghi âm Speaking ngắn (Day03-Speaking)",
      "Năm câu làm lại sau 10 phút với dòng 'I chose this because the passage says...' (Day03-Redo-5)"
    ]
  }
];