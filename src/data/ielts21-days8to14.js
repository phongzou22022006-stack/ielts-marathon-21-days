// IELTS Marathon 21-Day Companion - Faithful transcription: Days 8-14
// Source: "IELTS Marathon 21-Day Companion 2026" - The Forum Center (Nguyễn Hoàng Huy)
// Giai đoạn 2: Build & Transfer (ngày 8-14)

import { makeListening } from './listeningFactory.js';

export const DAYS_8_14 = [
  // ============================================================ DAY 08
  {
    day: 8,
    phase: 2,
    title: "Ngày 08: Phát triển ý trong Task 2",
    theme: "Chuỗi phát triển ý & cơ chế lập luận",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Một ý Task 2 được phát triển đầy đủ khi người viết giải thích được cơ chế nối luận điểm với hệ quả. Từ nhận định ban đầu, người viết cần làm rõ hiện tượng diễn ra như thế nào, vì sao đáng chú ý, hệ quả cụ thể là gì và ví dụ nào minh hoạ đúng quan hệ ấy. Mỗi câu phải tiếp nối thông tin của câu trước để đoạn văn có một hướng lập luận thống nhất. Ví dụ chỉ có giá trị khi làm rõ cơ chế đã nêu. Phần luyện của Ngày 8 yêu cầu xây dựng ba chuỗi ý trước khi viết đoạn hoàn chỉnh: trước hết xác định quan hệ logic bằng ghi chú ngắn, sau đó mới diễn đạt bằng câu học thuật.",
    checklist: [
      "Ba chuỗi phát triển ý (luận điểm → cơ chế → lí do → ví dụ → hệ quả → liên hệ lại)",
      "Một đoạn thân bài 170-220 từ theo mức đã chọn",
      "Lượt sửa liên kết (khoanh từ nối, bỏ từ nối thừa, dùng phép quy chiếu)",
      "Bốn câu trả lời Speaking dùng cùng nhóm ý theo văn phong nói",
      "Năm câu hedging + năm chuỗi nguyên nhân - hệ quả",
      "Bài kiểm tra từ vựng 12.11"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Chuỗi phát triển ý", note: "Luận điểm → Cơ chế → Lí do → Ví dụ → Hệ quả → Liên hệ lại" },
        { time: "10-30m", name: "Reading", note: "60': đoạn A-E + câu 1-7; 90': toàn bộ ngữ liệu" },
        { time: "30-55m", name: "Ba chuỗi phát triển", note: "Chọn 3 đề A-D + khung phát triển ý" },
        { time: "55-75m", name: "Đoạn văn Writing", note: "170-190 từ (nền tảng) / 200-220 từ + nhượng bộ (mở rộng)" },
        { time: "75-90m", name: "Sửa liên kết + Speaking", note: "Từ nối liên kết + 4 câu Part 1" }
      ]
    },
    reading: {
      title: "Bài đọc 08 - Why Short Videos Feel So Easy",
      source: "IELTS Marathon 21-Day Companion - Ngày 08, mục 12.5",
      strategy: "Câu 1-5 phân loại nhận định (YES/NO/NOT GIVEN); câu 6-10 hoàn thành câu với KHÔNG QUÁ BA TỪ.",
      passage: "A. Short-form video is designed to remove friction. A user does not need to choose a programme, follow a long plot or wait for a difficult explanation to become interesting. With one movement of a finger, the next clip appears. Algorithms quickly learn which faces, topics, sounds and emotions hold the user's attention, so the stream becomes increasingly personalised.\n\nB. This design creates a rapid cycle of expectation and reward. Each clip offers the possibility of humour, surprise, beauty, outrage or useful information within seconds. Most clips are forgotten quickly, but the next one is immediately available. The user is not only consuming content. They are repeatedly making a tiny decision to continue, and the cost of that decision feels almost zero.\n\nC. Educators worry that this pattern may influence how longer tasks feel. Reading a demanding article provides fewer immediate rewards. The reader must hold earlier ideas in memory, tolerate uncertainty and sometimes continue through a confusing paragraph before the argument becomes clear. A student who is used to constant novelty may interpret this normal difficulty as evidence that the task is boring or impossible.\n\nD. The effect should not be exaggerated. Short videos do not automatically destroy attention, and they can serve educational purposes. A sixty-second demonstration can make an unfamiliar scientific process visible, while a brief historical clip may create curiosity about a larger topic. The important question is what happens next. If the clip opens a door to deeper learning, it can be useful. If it replaces every longer explanation, understanding remains shallow.\n\nE. Social effects are equally mixed. Short videos allow young creators to find audiences without traditional media companies. They can spread practical advice, humour and cultural expression quickly. At the same time, the constant display of edited bodies, lifestyles and achievements can intensify social comparison. Users may intellectually understand that they are seeing selected moments, yet still feel that other people's lives are more attractive or successful.\n\nF. A realistic response should focus on use rather than total prohibition. Turning off notifications during study, removing the application from the home screen and setting a clear stopping point can introduce useful friction. Schools can also teach students to recognise the difference between active use, such as creating or analysing content, and passive scrolling that continues without a deliberate purpose.\n\nG. The broader lesson is that convenience changes behaviour. When an activity becomes nearly effortless to begin and difficult to stop, personal intention may be weaker than people assume. Digital self-control therefore depends not only on willpower but also on designing an environment in which the desired behaviour is easier to maintain.",
      questions: [
        { id: "r-d8-q1", type: "yes_no_not_given", text: "Short-form platforms require users to plan carefully before choosing a video.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn A: 'A user does not need to choose a programme... With one movement of a finger, the next clip appears.' Việc chọn video gần như không cần kế hoạch." },
        { id: "r-d8-q2", type: "yes_no_not_given", text: "Algorithms can make the video stream increasingly suited to an individual user.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn A: 'Algorithms quickly learn which faces, topics, sounds and emotions hold the user's attention, so the stream becomes increasingly personalised.'" },
        { id: "r-d8-q3", type: "yes_no_not_given", text: "The passage states that most users remember every short video they watch.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn B: 'Most clips are forgotten quickly' — trái ngược với 'remember every short video'." },
        { id: "r-d8-q4", type: "yes_no_not_given", text: "A difficult paragraph may feel worse to someone accustomed to constant novelty.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn C: 'A student who is used to constant novelty may interpret this normal difficulty as evidence that the task is boring or impossible.'" },
        { id: "r-d8-q5", type: "yes_no_not_given", text: "The writer believes all educational uses of short video are ineffective.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn D: 'Short videos do not automatically destroy attention, and they can serve educational purposes' (bẫy 'all')." },
        { id: "r-d8-q6", type: "sentence_completion", text: "Longer reading requires students to tolerate ____.", options: [], correct: "uncertainty", explanation: "Đoạn C: 'The reader must hold earlier ideas in memory, tolerate uncertainty...'" },
        { id: "r-d8-q7", type: "sentence_completion", text: "A short educational clip is useful when it leads to ____.", options: [], correct: "deeper learning", explanation: "Đoạn D: 'If the clip opens a door to deeper learning, it can be useful.'" },
        { id: "r-d8-q8", type: "sentence_completion", text: "Edited images of success can intensify ____.", options: [], correct: "social comparison", explanation: "Đoạn E: 'the constant display of edited bodies, lifestyles and achievements can intensify social comparison.'" },
        { id: "r-d8-q9", type: "sentence_completion", text: "Removing an app from the home screen can introduce useful ____.", options: [], correct: "friction", explanation: "Đoạn F: 'removing the application from the home screen and setting a clear stopping point can introduce useful friction.'" },
        { id: "r-d8-q10", type: "sentence_completion", text: "Digital self-control involves willpower and the design of a person's ____.", options: [], correct: "environment", explanation: "Đoạn G: 'designing an environment in which the desired behaviour is easier to maintain.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Nhận định <-> diễn đạt trong bài (nhớ bẫy từ tuyệt đối)",
        errorReason: "Dùng kiến thức bên ngoài hoặc bỏ qua từ phủ định / tuyệt đối"
      }
    },
    listening: makeListening({
      day: 8,
      theme: "video ngắn",
      type: "Multiple Choice (Part 2 - Câu lạc bộ làm video)",
      part: "Part 2 (Giới thiệu câu lạc bộ nội dung số)",
      questions: [
        { id: "l-d8-q1", prompt: "Câu lạc bộ họp vào tối thứ mấy?", options: ["A. Thứ Hai", "B. Thứ Tư", "C. Thứ Sáu"], answer: "B" },
        { id: "l-d8-q2", prompt: "Buổi đầu tiên dạy kỹ năng nào?", options: ["A. Viết kịch bản", "B. Quay video", "C. Dựng hậu kỳ"], answer: "A" },
        { id: "l-d8-q3", prompt: "Mỗi video dự thi dài tối đa bao nhiêu phút?", options: ["A. 1 phút", "B. 3 phút", "C. 5 phút"], answer: "B" },
        { id: "l-d8-q4", prompt: "Hạn nộp bài dự thi là ngày nào?", options: ["A. 15/11", "B. 22/11", "C. 30/11"], answer: "C" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - Đoạn thân bài 170-220 từ",
      prompt: "ĐỀ BÀI A: Many teenagers spend a large amount of time watching short videos online. What effects can this have on their learning and social life?\n\nViết đoạn văn về ảnh hưởng đối với việc học.",
      targetWords: "Nền tảng: 170-190 từ; Mở rộng: 200-220 từ",
      guidance: "Nền tảng: phát triển một cơ chế (sự mới lạ liên tục hoặc tiếp nhận nội dung thụ động). Mở rộng: phát triển một cơ chế rồi bổ sung ý nhượng bộ để giải thích điều kiện giúp nội dung dạng ngắn có giá trị giáo dục. Sau khi viết: khoanh mọi từ nối, xoá những từ không diễn đạt một quan hệ logic thực sự. Có thể dùng: This constant exposure..., The problem becomes more serious when..., This matters because..., As a result..., Such a pattern..., The educational value therefore depends on...",
      modelAnswer: "Bài mẫu ngắn - Hệ quả: As sustained reading begins to feel unusually demanding, students may avoid precisely the tasks that would rebuild their attention, creating a cycle in which concentration weakens through lack of practice.",
      examinerNotes: "Câu phải có chức năng rõ trong hệ thống 6 bước: luận điểm → cơ chế → lí do → ví dụ → hệ quả → liên hệ lại. Từ nối nào không diễn đạt quan hệ logic thực sự thì bỏ."
    },
    speaking: {
      part: "Part 1 + Part 2 + Part 3 (mạng xã hội)",
      prompt: "Part 1:\n1. How often do you watch short videos?\n2. What kind of content usually appears on your feed?\n3. Do you ever set limits on screen time?\n4. Have your online habits changed in recent years?\n\nPart 2: Describe an online video that taught you something useful.\nYou should say: what the video was about • where you found it • what you learned • and explain why the video was effective.\n\nPart 3:\n1. Why is short-form content so popular?\n2. Should parents strictly limit teenagers' screen time?\n3. Can educational content be entertaining without becoming shallow?\n4. How might social media affect young people's view of success?",
      followUps: [
        "Why is short-form content so popular?",
        "Should parents strictly limit teenagers' screen time?",
        "Can educational content be entertaining without becoming shallow?"
      ],
      selfEvaluationCriteria: [
        "Câu trả lời có quan điểm + lí do + ví dụ cụ thể không?",
        "Dùng cùng nhóm ý với Writing nhưng theo văn phong nói",
        "Từ nối có thật sự nối quan hệ ý nghĩa hay chỉ chèn thêm?"
      ]
    },
    vocabulary: [
      { term: "short-form content", pos: "noun phrase", phonetic: "nội dung dạng ngắn", meaning: "nội dung dạng ngắn", example: "Short-form content provides rapid entertainment." },
      { term: "constant stimulation", pos: "noun phrase", phonetic: "kích thích liên tục", meaning: "kích thích liên tục", example: "Constant stimulation can make slower tasks feel dull." },
      { term: "sustained attention", pos: "noun phrase", phonetic: "tập trung kéo dài", meaning: "tập trung kéo dài", example: "Academic reading requires sustained attention." },
      { term: "an instant reward", pos: "noun phrase", phonetic: "phần thưởng tức thì", meaning: "phần thưởng tức thì", example: "Each new clip offers a small instant reward." },
      { term: "passive consumption", pos: "noun phrase", phonetic: "tiêu thụ thụ động", meaning: "tiêu thụ thụ động", example: "Passive consumption rarely produces deep learning." },
      { term: "a personalised feed", pos: "noun phrase", phonetic: "bảng tin cá nhân hóa", meaning: "bảng tin cá nhân hóa", example: "A personalised feed becomes difficult to leave." },
      { term: "hold information in memory", pos: "verb phrase", phonetic: "giữ thông tin trong trí nhớ", meaning: "giữ thông tin trong trí nhớ", example: "Readers must hold earlier points in memory." },
      { term: "tolerate uncertainty", pos: "verb phrase", phonetic: "chấp nhận điều chưa chắc chắn", meaning: "chấp nhận điều chưa chắc chắn", example: "Learning requires students to tolerate uncertainty." },
      { term: "spark curiosity", pos: "verb phrase", phonetic: "khơi gợi tò mò", meaning: "khơi gợi tò mò", example: "A short video can spark curiosity about science." },
      { term: "replace deeper learning", pos: "verb phrase", phonetic: "lấn át hoạt động học chuyên sâu", meaning: "lấn át hoạt động học chuyên sâu", example: "Entertainment becomes harmful when it replaces deeper learning." },
      { term: "social comparison", pos: "noun phrase", phonetic: "so sánh xã hội", meaning: "so sánh xã hội", example: "Curated images can intensify social comparison." },
      { term: "introduce friction", pos: "verb phrase", phonetic: "tạo rào cản nhỏ", meaning: "tạo rào cản nhỏ", example: "Logging out can introduce friction and reduce automatic use." },
      { term: "use technology deliberately", pos: "verb phrase", phonetic: "dùng công nghệ có chủ đích", meaning: "dùng công nghệ có chủ đích", example: "Students should learn to use technology deliberately." },
      { term: "shape a habit", pos: "verb phrase", phonetic: "định hình thói quen", meaning: "định hình thói quen", example: "Platform design can shape a habit without users noticing." }
    ],
    grammar: {
      title: "Nguyên nhân, hệ quả và hedging",
      explanation: "Phần 1: viết lại từng nhận định để diễn đạt thận trọng và chính xác hơn, giới hạn đối tượng, hoàn cảnh hoặc mức độ chắc chắn. Phần 2: kết hợp các câu theo quan hệ nguyên nhân - hệ quả.",
      drillQuestion: "PHẦN 1 - HEDGING (viết lại cho thận trọng hơn; có thể dùng may, can contribute to, tend to, in some cases, particularly when, is more likely to):\n1. Short videos destroy teenagers' brains.\n2. Social media makes everyone insecure.\n3. Students cannot read books anymore.\n4. Technology always reduces attention.\n5. Parents are the only people responsible for screen habits.\n\nPHẦN 2 - QUAN HỆ NGUYÊN NHÂN - HỆ QUẢ (kết hợp tự nhiên):\n1. Clips change rapidly. Users expect constant novelty. Longer tasks feel slow.\n2. Students receive notifications. Their attention is interrupted. They lose the argument in a text.\n3. A video introduces a topic. Students read more afterwards. The video supports learning.\n4. Young people compare themselves with edited images. They feel less satisfied with ordinary life.\n5. An app is difficult to stop using. The user should change the environment, not rely only on willpower.\n\nBÀI KIỂM TRA TỪ VỰNG (12.11) - hoàn thành bằng một cụm trong ngân hàng ngày học:\n1. A documentary clip may ____ about a topic without explaining it fully.\n2. Academic tasks demand ____ rather than rapid switching.\n3. The danger is greatest when short videos ____.\n4. Removing notifications helps people ____.\n5. Highly edited lifestyles can increase ____ among teenagers.",
      sampleAnswer: "Gợi ý hedging: 1. Heavy short-video use may contribute to concentration problems in some teenagers, particularly when it replaces sleep. / 2. Excessive social media use can make some individuals insecure. / 3. Many students read fewer books than before and may find long texts unusually demanding. / 4. Constant novelty tends to weaken sustained attention in some cases. / 5. Parents play a major role, but platform design is also likely to influence habits.\n\nGợi ý kết hợp: 1. Because clips change rapidly, users come to expect constant novelty and longer tasks may feel slow. / 2. Constant notifications interrupt attention, which means students lose the thread of a difficult argument. / 3. A video that introduces a topic can support learning if students read more afterwards. / 4. When young people compare themselves with edited images, they may feel less satisfied with ordinary life. / 5. If an app is difficult to stop using, the user should change the environment rather than rely only on willpower.\n\nGợi ý từ vựng: 1. spark curiosity  2. sustained attention  3. replace deeper learning  4. use technology deliberately / introduce friction  5. social comparison."
    },
    deliverables: [
      "Bài Reading kèm vị trí bằng chứng (Day08-Reading)",
      "Ba chuỗi phát triển ý (Day08-Argument-Chains)",
      "Một đoạn văn phát triển đầy đủ (Day08-Writing)",
      "Lượt sửa liên kết (Day08-Link-Fix)",
      "Bốn câu trả lời Speaking hoặc một bản ghi âm (Day08-Speaking)",
      "Bài chuyển đổi ngữ pháp (Day08-Hedging-CauseEffect)"
    ]
  },

  // ============================================================ DAY 09
  {
    day: 9,
    phase: 2,
    title: "Ngày 09: Chức năng đoạn văn",
    theme: "Matching Headings & cấu trúc lập luận của đoạn",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Matching Headings yêu cầu nhận diện chức năng và hướng phát triển của cả đoạn. Một từ xuất hiện nhiều lần chỉ cho biết chủ đề; tiêu đề đúng còn phải phản ánh điều tác giả đang làm với chủ đề ấy: nêu vấn đề, giải thích nguyên nhân, đưa bằng chứng, bổ sung giới hạn hoặc đề xuất giải pháp. Trước khi xem các phương án, hãy tóm tắt mỗi đoạn bằng một cụm ngắn gồm hai phần: chủ đề và chức năng. Khi so sánh với danh sách tiêu đề, kiểm tra cả phạm vi lẫn hướng lập luận để loại phương án chỉ đúng với một chi tiết. Cách đọc này còn hỗ trợ Writing: xác định được chức năng từng câu trong đoạn mẫu thì dễ kiểm tra đoạn của mình hơn.",
    checklist: [
      "Hoàn thành 8 câu Matching Headings và ghi lí do chọn/loại phương án",
      "Hoàn thành 6 câu Matching Information",
      "Sơ đồ chức năng đoạn cho tám đoạn (chủ đề, chức năng, hướng chuyển ý)",
      "Mười cặp diễn đạt cùng chức năng (13.8)",
      "Dàn ý Task 2 hoặc đoạn văn 190-220 từ",
      "Bài luyện từ quy chiếu + sửa quy chiếu (13.12)"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Sơ đồ chức năng đoạn", note: "Chủ đề + chức năng; lỗi chọn tiêu đề theo từ khoá" },
        { time: "10-40m", name: "Reading", note: "60': đoạn A-F + nối tiêu đề + sơ đồ; 90': toàn bộ 14 câu" },
        { time: "40-55m", name: "Loại phương án + diễn đạt chức năng", note: "5 nguyên nhân loại + mười cặp diễn đạt" },
        { time: "55-75m", name: "Vận dụng Writing", note: "Dàn ý ở mức 90 phút hoặc đoạn mở rộng 190-220 từ" },
        { time: "75-90m", name: "Quy chiếu + Speaking", note: "Kết hợp câu + sửa quy chiếu" }
      ]
    },
    reading: {
      title: "Bài đọc 09 - Cities Need Shade, Not Just Trees",
      source: "IELTS Marathon 21-Day Companion - Ngày 09, mục 13.5",
      strategy: "Câu 1-8: ghép tiêu đề cho đoạn A-H. Câu 9-14: ghép thông tin (đoạn nào chứa thông tin được nêu).",
      passage: "A. Urban tree-planting campaigns are easy to support. Trees improve the appearance of streets, store carbon, provide habitats and can reduce heat. For this reason, city leaders often announce ambitious targets involving thousands or even millions of new trees. Yet the number planted is a weak measure of success if the trees do not survive or if shade is concentrated in places that already enjoy good environmental conditions.\n\nB. The cooling effect of a tree depends on more than its existence. Species, age, canopy size, soil quality and access to water all matter. A newly planted tree may take years before it creates meaningful shade. In a narrow street with poor soil, it may never grow to full size. Counting each young tree as an equal unit therefore hides large differences in future benefit.\n\nC. Location is equally important. Wealthier neighbourhoods often have wider pavements, private gardens and established tree cover. Lower-income districts may contain more concrete, heavy traffic and fewer public spaces. If new planting follows the easiest available locations, investment can strengthen an existing environmental advantage rather than reduce inequality.\n\nD. Heat risk is also shaped by daily routines. A shaded park is valuable, but it may offer limited protection to a worker who waits for a bus on an exposed road or to a child walking home from school. Urban planners increasingly use heat maps, pedestrian routes and public-transport data to identify where shade is needed at the times people are most exposed.\n\nE. Trees are not the only tool. Covered walkways, redesigned bus shelters, reflective materials, drinking-water points and building regulations can provide faster protection. In some locations, these measures are more practical than waiting decades for a canopy to mature. A resilient heat strategy therefore combines long-term tree growth with immediate changes to public infrastructure.\n\nF. Maintenance determines whether plans survive beyond the announcement. Young trees require watering, protection and replacement when they die. Responsibility may be divided among several agencies, making neglect easy to hide. A city can celebrate the planting stage while failing to fund the years of care that follow.\n\nG. Some critics worry that greener streets can raise property values and contribute to the displacement of lower-income residents. This process, sometimes called green gentrification, does not mean environmental improvement should stop. It means housing protection and community participation need to be part of the plan. Residents should help decide where changes occur and how benefits are shared.\n\nH. Successful urban cooling is therefore not a competition to plant the largest number of trees. It is a public-health project that asks who is exposed to heat, where protection is missing and whether solutions will remain effective over time. Trees remain central, but the meaningful unit is not the tree planted. It is the person whose daily environment becomes safer.",
      questions: [
        { id: "r-d9-q1", type: "heading_matching", text: "Paragraph A", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "II", explanation: "Đoạn A: 'the number planted is a weak measure of success...' — con số trồng dễ gây ấn tượng sai." },
        { id: "r-d9-q2", type: "heading_matching", text: "Paragraph B", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "VIII", explanation: "Đoạn B: species, age, canopy size, soil quality, access to water — yếu tố sinh học quyết định mức bóng mát." },
        { id: "r-d9-q3", type: "heading_matching", text: "Paragraph C", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "VII", explanation: "Đoạn C: khu giàu có sẵn điều kiện tốt, khu thu nhập thấp nhiều bê tông, ít công viên — điểm xuất phát không đều." },
        { id: "r-d9-q4", type: "heading_matching", text: "Paragraph D", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "IX", explanation: "Đoạn D: dùng heat maps, pedestrian routes, public-transport data để định vị nơi mọi người tiếp xúc nóng khi di chuyển." },
        { id: "r-d9-q5", type: "heading_matching", text: "Paragraph E", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "I", explanation: "Đoạn E: kết hợp tăng trưởng cây dài hạn với thay đổi hạ tầng tức thì — delayed + immediate protection." },
        { id: "r-d9-q6", type: "heading_matching", text: "Paragraph F", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "IV", explanation: "Đoạn F: bảo trì là những năm công việc ẩn sau buổi công bố." },
        { id: "r-d9-q7", type: "heading_matching", text: "Paragraph G", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "V", explanation: "Đoạn G: green gentrification — đường xanh có thể đẩy cư dân thu nhập thấp vì giá nhà tăng." },
        { id: "r-d9-q8", type: "heading_matching", text: "Paragraph H", headings: ["I. The need to combine delayed and immediate protection", "II. Why raw planting totals can create a false impression", "III. A final shift from objects to human outcomes", "IV. The hidden years of work after a public announcement", "V. When environmental improvement may increase housing pressure", "VI. Why heat maps are too expensive for most cities", "VII. Unequal starting conditions across neighbourhoods", "VIII. The biological factors behind different levels of shade", "IX. Using patterns of movement to locate real exposure", "X. A campaign that has no environmental benefits"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"], correct: "III", explanation: "Đoạn H: 'the meaningful unit is not the tree planted. It is the person...' — chuyển từ vật thể sang kết quả con người." },
        { id: "r-d9-q9", type: "matching_info", text: "Examples of non-tree methods for reducing heat", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "E", explanation: "Đoạn E: 'covered walkways, redesigned bus shelters, reflective materials, drinking-water points and building regulations'." },
        { id: "r-d9-q10", type: "matching_info", text: "The possibility that a planted tree may never create much shade", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "B", explanation: "Đoạn B: 'In a narrow street with poor soil, it may never grow to full size.'" },
        { id: "r-d9-q11", type: "matching_info", text: "A warning that environmental benefits can be concentrated in already advantaged areas", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "C", explanation: "Đoạn C: 'investment can strengthen an existing environmental advantage rather than reduce inequality.'" },
        { id: "r-d9-q12", type: "matching_info", text: "The idea that different government bodies can make neglect difficult to identify", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "F", explanation: "Đoạn F: 'Responsibility may be divided among several agencies, making neglect easy to hide.'" },
        { id: "r-d9-q13", type: "matching_info", text: "A group of people exposed while travelling rather than while using a park", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "D", explanation: "Đoạn D: worker chờ xe buýt, child đi bộ về nhà — bị nóng khi di chuyển thay vì dùng công viên." },
        { id: "r-d9-q14", type: "matching_info", text: "A recommendation that local people influence decisions", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "G", explanation: "Đoạn G: 'Residents should help decide where changes occur and how benefits are shared.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn chứa thông tin",
        paraphrasePair: "Thông tin câu hỏi <-> câu trong đoạn",
        errorReason: "Chọn đoạn chỉ trùng từ khoá, không trùng ý"
      }
    },
    listening: makeListening({
      day: 9,
      theme: "đô thị",
      type: "Map (Part 2 - Hướng dẫn công viên mới)",
      part: "Part 2 (Tour khu vực tái phát triển)",
      questions: [
        { id: "l-d9-q1", prompt: "Lối vào chính nằm ở phía đông của công viên, gần sân chơi [ 1 ].", answer: "trẻ em" },
        { id: "l-d9-q2", prompt: "Quán cà phê nằm cạnh hồ nước ở phía [ 2 ].", answer: "tây" },
        { id: "l-d9-q3", prompt: "Khu vực quan sát chim nằm ở góc [ 3 ] của công viên.", answer: "đông nam" },
        { id: "l-d9-q4", prompt: "Bãi đỗ xe máy được bố trí ngoài cổng [ 4 ].", answer: "bắc" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - Dàn ý / đoạn mở rộng 190-220 từ",
      prompt: "ĐỀ BÀI: Some people believe that creating more green spaces is the best way to improve life in cities. To what extent do you agree or disagree?\n\nDàn ý ở mức 90 phút: Lập trường • Chức năng của Body 1 • Chức năng của Body 2 • Một ý nhượng bộ • Một ví dụ thực tế.",
      targetWords: "Đoạn mở rộng: 190-220 từ",
      guidance: "Đoạn văn mức mở rộng viết 190-220 từ để giải thích vì sao vị trí và khả năng tiếp cận quyết định hiệu quả của không gian xanh. Mỗi câu trong đoạn phải có một chức năng rõ và phục vụ cùng luận điểm: topic sentence nêu hướng, phần giải thích làm rõ cơ chế, ví dụ cung cấp tình huống, câu cuối nối lại luận điểm.",
      modelAnswer: "Bài mẫu ngắn - Topic sentence: Expanding green space improves urban life only when the new areas are located where residents can reach and use them safely.",
      examinerNotes: "Áp dụng 'chủ đề + chức năng' vào Writing giống như Matching Headings: mỗi câu cần trả lời được câu hỏi 'Câu này đang làm gì với chủ đề?'"
    },
    speaking: {
      part: "Part 1 + Part 2 + Part 3 (không gian công cộng)",
      prompt: "Part 1:\n1. Are there many trees near your home?\n2. Do you often visit parks?\n3. What is the hottest time of year in your hometown?\n4. Is your city comfortable for walking?\n\nPart 2: Describe a green place in a city that you enjoyed visiting.\n\nPart 3:\n1. What makes a city liveable?\n2. Should cities spend more on parks or public transport?\n3. Why do poorer neighbourhoods sometimes have fewer environmental benefits?\n4. Can city improvement create problems for existing residents?",
      followUps: [
        "What makes a city liveable?",
        "Why do poorer neighbourhoods sometimes have fewer environmental benefits?",
        "Can city improvement create problems for existing residents?"
      ],
      selfEvaluationCriteria: [
        "Mỗi đoạn trả lời có rõ chức năng (quan điểm, ví dụ, giới hạn) không?",
        "Có chuyển được ý 'vị trí quyết định lợi ích' sang lời nói tự nhiên không?"
      ]
    },
    vocabulary: [
      { term: "urban tree cover", pos: "noun phrase", phonetic: "độ phủ cây đô thị", meaning: "độ phủ cây đô thị", example: "Urban tree cover is unevenly distributed." },
      { term: "provide meaningful shade", pos: "verb phrase", phonetic: "tạo bóng mát đáng kể", meaning: "tạo bóng mát đáng kể", example: "Young trees may take years to provide meaningful shade." },
      { term: "an ambitious planting target", pos: "noun phrase", phonetic: "mục tiêu trồng cây tham vọng", meaning: "mục tiêu trồng cây tham vọng", example: "The city announced an ambitious planting target." },
      { term: "existing environmental inequality", pos: "noun phrase", phonetic: "bất bình đẳng môi trường hiện hữu", meaning: "bất bình đẳng môi trường hiện hữu", example: "Poor planning can reinforce existing environmental inequality." },
      { term: "heat exposure", pos: "noun phrase", phonetic: "mức tiếp xúc với nhiệt", meaning: "mức tiếp xúc với nhiệt", example: "Bus users may face severe heat exposure." },
      { term: "public infrastructure", pos: "noun phrase", phonetic: "hạ tầng công cộng", meaning: "hạ tầng công cộng", example: "Shade should be treated as public infrastructure." },
      { term: "a short-term measure", pos: "noun phrase", phonetic: "giải pháp ngắn hạn", meaning: "giải pháp ngắn hạn", example: "Covered walkways can provide a short-term measure." },
      { term: "long-term maintenance", pos: "noun phrase", phonetic: "bảo trì dài hạn", meaning: "bảo trì dài hạn", example: "Tree survival depends on long-term maintenance." },
      { term: "raise property values", pos: "verb phrase", phonetic: "làm tăng giá bất động sản", meaning: "làm tăng giá bất động sản", example: "Greener streets can raise property values." },
      { term: "displace existing residents", pos: "verb phrase", phonetic: "đẩy cư dân hiện tại ra khỏi khu vực", meaning: "đẩy cư dân hiện tại ra khỏi khu vực", example: "Development may displace existing residents." },
      { term: "community participation", pos: "noun phrase", phonetic: "sự tham gia cộng đồng", meaning: "sự tham gia cộng đồng", example: "Community participation improves local planning." },
      { term: "share benefits fairly", pos: "verb phrase", phonetic: "chia lợi ích công bằng", meaning: "chia lợi ích công bằng", example: "Policy should ensure that benefits are shared fairly." },
      { term: "an unintended consequence", pos: "noun phrase", phonetic: "hệ quả ngoài ý muốn", meaning: "hệ quả ngoài ý muốn", example: "Higher rents can be an unintended consequence." },
      { term: "improve daily conditions", pos: "verb phrase", phonetic: "cải thiện điều kiện hằng ngày", meaning: "cải thiện điều kiện hằng ngày", example: "The real goal is to improve daily conditions." }
    ],
    grammar: {
      title: "Từ quy chiếu và mệnh đề quan hệ",
      explanation: "Phần 1: kết hợp các câu sao cho tự nhiên, dùng which, where, whose, that, this, these, such. Phần 2: xác định đối tượng mà phần gạch chân (từ in đậm) thay thế và viết lại nếu cách quy chiếu chưa rõ.",
      drillQuestion: "KẾT HỢP CÂU:\n1. Some districts have less tree cover. These districts also experience heavier traffic.\n2. A newly planted tree may die. The tree receives little water.\n3. A bus stop has no shade. Many schoolchildren use the bus stop.\n4. The city opened a new park. The park raised nearby property prices.\n5. Covered walkways provide immediate protection. This protection is important while trees mature.\n\nSỬA TỪ QUY CHIẾU (xác định đối tượng mà đại từ thay thế; viết lại nếu chưa rõ):\n1. The city planted trees near expensive apartments and schools, and this was unfair.\n2. New shelters and trees were introduced, but they were not maintained.\n3. Residents opposed the project because it would increase them.\n4. The policy raised property values. This improvement displaced some families.\n5. Trees need water for several years, and this period is often ignored.",
      sampleAnswer: "Gợi ý kết hợp:\n1. Districts that have less tree cover also experience heavier traffic.\n2. A newly planted tree that receives little water may die.\n3. Schoolchildren use a bus stop which has no shade.\n4. The park, which the city opened recently, raised nearby property prices.\n5. Covered walkways provide immediate protection, which is important while trees mature.\n\nGợi ý sửa quy chiếu:\n1. ...planted trees near expensive apartments and schools, and this / such a choice was unfair.\n2. ...but the shelters and trees were not maintained.\n3. Residents opposed the project because it would increase rent / housing costs.\n4. The policy raised property values, and this improvement displaced some families. (rõ người tạo ra improving)\n5. Trees need water for several years, yet this need / period is often ignored."
    },
    deliverables: [
      "14 đáp án Reading + vị trí bằng chứng (Day09-Reading)",
      "Sơ đồ chức năng đoạn (Day09-Paragraph-Map)",
      "Ghi chú loại phương án tiêu đề (Day09-Heading-Reject)",
      "Mười cặp diễn đạt chức năng (Day09-Function-Pairs)",
      "Dàn ý Task 2 hoặc đoạn văn mức mở rộng (Day09-Writing)",
      "Bài luyện quy chiếu và mệnh đề quan hệ (Day09-Reference)"
    ]
  },

  // ============================================================ DAY 10
  {
    day: 10,
    phase: 2,
    title: "Ngày 10: Ngân hàng câu chuyện",
    theme: "Story Bank & Part 2 linh hoạt",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Ngân hàng câu chuyện hữu ích gồm một số trải nghiệm có thật, mỗi trải nghiệm có bối cảnh, diễn biến, chi tiết chọn lọc và phần suy ngẫm. Người học dùng lại cùng một sự kiện cho nhiều cue card bằng cách thay đổi trọng tâm: nhấn vào con người, địa điểm, lời khuyên hoặc kết quả. Trong một phút chuẩn bị, ghi chú chỉ cần đủ để gợi lại trật tự câu chuyện — hai đến ba chi tiết cụ thể hiệu quả hơn một chuỗi sự kiện dài. Sau khi ghi âm, kiểm tra xem câu trả lời có đáp ứng đủ các ý trên cue card, giữ được mạch thời gian và kết thúc bằng một nhận xét có liên quan hay chưa.",
    checklist: [
      "Ba câu chuyện (người / địa điểm / trải nghiệm), mỗi câu có bối cảnh, sự kiện, 2 chi tiết, suy ngẫm",
      "Mỗi câu chuyện điều chỉnh được cho ít nhất ba cue card",
      "Năm dàn ý lập trong một phút, mỗi dàn ý 5-7 từ khoá",
      "Một hoặc hai bản ghi âm Part 2 theo thời lượng đã chọn",
      "Lượt sửa: chép lại một đoạn và loại chi tiết không phục vụ trọng tâm",
      "Ba lượt chuyển câu chuyện cá nhân thành ví dụ học thuật"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Câu chuyện và trí nhớ", note: "Bối cảnh → Sự kiện → Chi tiết → Cảm xúc → Điều rút ra" },
        { time: "10-30m", name: "Reading", note: "Câu 1-4 ghép tiêu đề B-E + câu 5-8 trả lời ngắn" },
        { time: "30-55m", name: "Xây ba câu chuyện", note: "Người / Địa điểm / Trải nghiệm + khung 7 trường" },
        { time: "55-70m", name: "Chuyển đổi cue card + dàn ý 1 phút", note: "Vận dụng 3 câu chuyện cho 3+ cue card" },
        { time: "70-90m", name: "Ghi âm + kiểm tra chi tiết", note: "Part 2: 90-120s nền tảng / 1:45-2:00 mở rộng" }
      ]
    },
    reading: {
      title: "Bài đọc 10 - Why Memory Prefers Stories",
      source: "IELTS Marathon 21-Day Companion - Ngày 10, mục 14.5",
      strategy: "Câu 1-4 ghép tiêu đề cho đoạn B-E; câu 5-8 trả lời ngắn KHÔNG QUÁ BỐN TỪ.",
      passage: "A. Human memory does not store every experience as a complete recording. It selects, compresses and reconstructs. Many ordinary details disappear, while moments connected to emotion, surprise or change remain easier to retrieve. This is one reason stories can be more memorable than isolated information.\n\nB. A story gives details a structure. Instead of remembering five unrelated facts, the listener remembers that a person wanted something, faced a difficulty, made a decision and experienced a result. Cause and sequence create links between the pieces. When one part is recalled, it can help bring back the next.\n\nC. Concrete detail also matters. 'I had a difficult lesson' is abstract. 'I stared at the same paragraph for twenty minutes while the red correction marks seemed to cover the page' creates an image. The second version does not need advanced vocabulary. Its strength comes from specificity.\n\nD. Emotion increases memorability, but exaggerated drama is unnecessary. Embarrassment, relief, frustration, pride or affection can make an experience personally meaningful. In Speaking, a simple line explaining how the speaker felt often gives the story more life than a long list of physical descriptions.\n\nE. Reflection adds a final layer. Two people can describe the same event, but the stronger answer often explains how the experience changed a habit or belief. Reflection transforms a sequence of events into a story with meaning. It also helps a learner adapt one experience to several cue cards because the same event may contain different lessons.\n\nF. There is a risk, however, in over-preparing stories. If every sentence is memorised, the speaker may struggle when the question changes slightly. The answer can also sound detached from the actual wording of the cue card. A more flexible method is to remember the event, a few key phrases and the order of the story, then rebuild the language during the test.\n\nG. This flexibility requires practice. Learners can take one real event and plan it from several angles. The story of a trip, for example, can focus on the place, the person who joined, a problem that occurred, a photograph taken or a decision made. Each version uses the same factual base but selects different details and reflections.",
      questions: [
        { id: "r-d10-q1", type: "heading_matching", text: "Paragraph B", headings: ["I. Why emotion must always be dramatic", "II. Connecting facts through cause and sequence", "III. The value of a specific image", "IV. Turning an event into a lesson", "V. Emotion makes an experience personally meaningful", "VI. Why all memories are accurate", "VII. The importance of listing every detail"], options: ["I", "II", "III", "IV", "V", "VI", "VII"], correct: "II", explanation: "Đoạn B: 'Cause and sequence create links between the pieces.'" },
        { id: "r-d10-q2", type: "heading_matching", text: "Paragraph C", headings: ["I. Why emotion must always be dramatic", "II. Connecting facts through cause and sequence", "III. The value of a specific image", "IV. Turning an event into a lesson", "V. Emotion makes an experience personally meaningful", "VI. Why all memories are accurate", "VII. The importance of listing every detail"], options: ["I", "II", "III", "IV", "V", "VI", "VII"], correct: "III", explanation: "Đoạn C: 'I stared at the same paragraph for twenty minutes...' — chi tiết cụ thể tạo hình ảnh." },
        { id: "r-d10-q3", type: "heading_matching", text: "Paragraph D", headings: ["I. Why emotion must always be dramatic", "II. Connecting facts through cause and sequence", "III. The value of a specific image", "IV. Turning an event into a lesson", "V. Emotion makes an experience personally meaningful", "VI. Why all memories are accurate", "VII. The importance of listing every detail"], options: ["I", "II", "III", "IV", "V", "VI", "VII"], correct: "V", explanation: "Đoạn D: embarrassment, relief, frustration, pride, affection — cảm xúc làm trải nghiệm có ý nghĩa cá nhân." },
        { id: "r-d10-q4", type: "heading_matching", text: "Paragraph E", headings: ["I. Why emotion must always be dramatic", "II. Connecting facts through cause and sequence", "III. The value of a specific image", "IV. Turning an event into a lesson", "V. Emotion makes an experience personally meaningful", "VI. Why all memories are accurate", "VII. The importance of listing every detail"], options: ["I", "II", "III", "IV", "V", "VI", "VII"], correct: "IV", explanation: "Đoạn E: 'Reflection transforms a sequence of events into a story with meaning.'" },
        { id: "r-d10-q5", type: "short_answer", text: "Which three kinds of moments are easier to retrieve according to Paragraph A? (Không quá 4 từ)", options: [], correct: "emotion, surprise, change", explanation: "Đoạn A: 'moments connected to emotion, surprise or change remain easier to retrieve.'" },
        { id: "r-d10-q6", type: "short_answer", text: "What can help one part of a story bring back the next? (Không quá 4 từ)", options: [], correct: "cause and sequence", explanation: "Đoạn B: 'Cause and sequence create links between the pieces. When one part is recalled, it can help bring back the next.'" },
        { id: "r-d10-q7", type: "short_answer", text: "What may happen if every sentence is memorised? (Không quá 4 từ)", options: [], correct: "struggle", explanation: "Đoạn F: 'If every sentence is memorised, the speaker may struggle when the question changes slightly.'" },
        { id: "r-d10-q8", type: "short_answer", text: "What stays the same when a story is planned from several angles? (Không quá 4 từ)", options: [], correct: "the facts", explanation: "Đoạn G: 'Each version uses the same factual base.' Đáp án chấp nhận: the facts / the factual base." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Từ trong đáp án <-> cụm từ passage",
        errorReason: "Trả lời dài hơn 4 từ hoặc không có trong bài"
      }
    },
    listening: makeListening({
      day: 10,
      theme: "kể chuyện",
      type: "Short Answer (Part 2 - CLB kể chuyện)",
      part: "Part 2 (Giới thiệu buổi workshop kể chuyện)",
      questions: [
        { id: "l-d10-q1", prompt: "Workshop diễn ra vào thứ [ 1 ] hằng tuần.", answer: "Bảy" },
        { id: "l-d10-q2", prompt: "Mỗi thành viên cần chuẩn bị một [ 2 ] có thật.", answer: "câu chuyện" },
        { id: "l-d10-q3", prompt: "Buổi cuối cùng sẽ ghi âm một bài dài [ 3 ] phút.", answer: "2" },
        { id: "l-d10-q4", prompt: "Lệ phí tham gia được miễn cho thành viên mới trong tuần [ 4 ].", answer: "đầu" }
      ]
    }),
    writing: {
      task: "Vận dụng câu chuyện vào Writing",
      prompt: "Câu chuyện cá nhân phù hợp với Speaking, còn Task 2 cần lập luận có tính khái quát. Chuyển ba câu chuyện đã chuẩn bị thành ví dụ học thuật theo mẫu:\n\nChi tiết cá nhân → Cơ chế khái quát → Ví dụ học thuật",
      targetWords: "3 lượt chuyển (mỗi lượt 2-3 câu)",
      guidance: "Ví dụ: 'I learned budgeting after overspending during my first month of work' → 'A young employee who has never learned basic budgeting may spend most of a first salary immediately and struggle with essential costs later in the month.' Bỏ chi tiết cá nhân riêng lẻ, nêu chủ thể khái quát và cơ chế hoạt động.",
      modelAnswer: "Ví dụ học thuật mẫu: A young employee who has never learned basic budgeting may spend most of a first salary immediately and struggle with essential costs later in the month.",
      examinerNotes: "Trọng tâm là chuyển 'I' → chủ thể khái quát (a young employee, many students, families...) và thêm cơ chế/điều kiện để ý có tính tổng quát."
    },
    speaking: {
      part: "Part 2 - Story Bank",
      prompt: "Xây ba câu chuyện chính:\n\nCÂU CHUYỆN A - Một người (giáo viên, người thân, bạn bè, đồng nghiệp, người hướng dẫn): Who and relationship • Setting • One memorable action or sentence • Why it mattered • Feeling • Reflection • Phrases\n\nCÂU CHUYỆN B - Một địa điểm (quán cà phê, thư viện, lớp học, bãi biển, thành phố...): Where and when • Two sensory details • What you did there • One small event • Feeling • Reflection • Phrases\n\nCÂU CHUYỆN C - Một trải nghiệm (học kỹ năng, thay đổi thói quen, thất bại, giúp người khác, đi du lịch): Before • Trigger • Main difficulty • Decision • Result • Reflection • Phrases\n\nNGÂN HÀNG CUE CARD (nối mỗi câu chuyện với ít nhất 3 cue card):\n1. Describe a teacher who helped you.\n2. Describe useful advice you received.\n3. Describe a place where you can concentrate.\n4. Describe a place you would recommend to a visitor.\n5. Describe a difficult skill you learned.\n6. Describe a time you changed your mind.\n7. Describe a small success.\n8. Describe a conversation you remember.\n9. Describe a time technology made your life easier.\n10. Describe an activity you would like to do again.\n\nDÀN Ý MỘT PHÚT: lập dàn ý cho 5 cue card, mỗi dàn ý chỉ 5-7 từ khoá (VD: 'Torts class - weak essay - one paragraph - annoyed - breakthrough - less is more').",
      followUps: [
        "How can a personal story be adapted to a different cue card?",
        "Why are memorised answers risky in Part 2?"
      ],
      selfEvaluationCriteria: [
        "Câu trả lời có bối cảnh, sự kiện chính, chi tiết chọn lọc, cảm xúc và phần suy ngẫm không?",
        "Gạch bỏ chi tiết nào không giúp hiểu nhân vật/địa điểm/sự kiện/ý nghĩa?",
        "Có tránh học thuộc phần mở bài không?"
      ]
    },
    vocabulary: [
      { term: "what stands out most is...", pos: "phrase", phonetic: "chọn chi tiết nổi bật", meaning: "chọn chi tiết nổi bật", example: "What stands out most is how calmly she responded." },
      { term: "I can still remember...", pos: "phrase", phonetic: "giới thiệu ký ức cụ thể", meaning: "giới thiệu ký ức cụ thể", example: "I can still remember the red marks across the page." },
      { term: "at the time...", pos: "phrase", phonetic: "nêu góc nhìn ở thời điểm quá khứ", meaning: "nêu góc nhìn ở thời điểm quá khứ", example: "At the time, I thought the advice was too simple." },
      { term: "looking back...", pos: "phrase", phonetic: "nêu nhận xét khi nhìn lại", meaning: "nêu nhận xét khi nhìn lại", example: "Looking back, it was a turning point." },
      { term: "a turning point", pos: "noun phrase", phonetic: "bước ngoặt", meaning: "bước ngoặt", example: "That conversation became a turning point in my studies." },
      { term: "learn something the hard way", pos: "verb phrase", phonetic: "rút kinh nghiệm sau khó khăn", meaning: "rút kinh nghiệm sau khó khăn", example: "I learned time management the hard way." },
      { term: "trial and error", pos: "noun phrase", phonetic: "thử nghiệm và điều chỉnh", meaning: "thử nghiệm và điều chỉnh", example: "I improved the skill through trial and error." },
      { term: "push me out of my comfort zone", pos: "verb phrase", phonetic: "buộc tôi thử điều chưa quen", meaning: "buộc tôi thử điều chưa quen", example: "The project pushed me out of my comfort zone." },
      { term: "have sentimental value", pos: "verb phrase", phonetic: "có giá trị tình cảm", meaning: "có giá trị tình cảm", example: "The object has sentimental value." },
      { term: "bring back a memory", pos: "verb phrase", phonetic: "gợi lại ký ức", meaning: "gợi lại ký ức", example: "The smell of coffee brings back that memory." },
      { term: "feel a sense of relief", pos: "verb phrase", phonetic: "cảm thấy nhẹ nhõm", meaning: "cảm thấy nhẹ nhõm", example: "I felt a sense of relief when the task was finished." },
      { term: "change the way I see...", pos: "verb phrase", phonetic: "thay đổi góc nhìn", meaning: "thay đổi góc nhìn", example: "The experience changed the way I see failure." },
      { term: "be worth the effort", pos: "verb phrase", phonetic: "đáng công", meaning: "đáng công", example: "The process was difficult but worth the effort." },
      { term: "end up doing", pos: "verb phrase", phonetic: "cuối cùng lại làm", meaning: "cuối cùng lại làm", example: "We ended up talking for three hours." }
    ],
    grammar: {
      title: "Ngữ pháp kể chuyện quá khứ",
      explanation: "Phần 1: chọn thì phù hợp để kể chuyện quá khứ chính xác. Phần 2: phát triển câu trả lời bằng một chi tiết và một nhận xét tự nhiên.",
      drillQuestion: "PHẦN 1 - CHỌN THÌ:\n1. I studied/had studied English for several years before I changed my method.\n2. While I prepared/was preparing for the exam, I noticed the same error again.\n3. My teacher suggested/had suggested that I focus on one paragraph.\n4. I used to write/was used to write full essays every day.\n5. By the time the course ended, I improved/had improved my planning.\n6. I was nervous because I never gave/had never given a public presentation before.\n7. We were discussing/discussed the project when the power went out.\n8. I would/used to visit the café every weekend when I lived nearby.\n\nPHẦN 2 - MỞ RỘNG CÂU (thêm một chi tiết + một nhận xét tự nhiên):\n1. I visited a café.\n2. My teacher gave me advice.\n3. I learned a difficult skill.\n4. I went on a trip.\n5. I received a small gift.",
      sampleAnswer: "Gợi ý thì:\n1. had studied  2. was preparing  3. suggested  4. used to write (thói quen)  5. had improved  6. had never given  7. were discussing  8. used to visit\n\nGợi ý mở rộng:\n1. I visited a café right next to my university, and the quiet corner upstairs made it easier to concentrate. Looking back, that is where I did most of my serious revision.\n2. One teacher gave me surprisingly simple advice: rewrite a single body paragraph. At the time, it sounded too small, but the change helped me notice why my examples were weak.\n3. I learned a difficult skill, audio editing, mostly through trial and error. It was frustrating at first, but the process was worth the effort.\n4. I went on a trip to a coastal town with three friends. What stands out most is how we ended up talking for hours on the beach without noticing the time.\n5. I received a small gift from my mother before an exam. It had sentimental value, and I felt a sense of relief every time I looked at it."
    },
    deliverables: [
      "Ba khung câu chuyện (Day10-Story-Frames)",
      "Chín lượt chuyển đổi cue card hoặc sáu lượt ở mức nền tảng (Day10-Cue-Card-Map)",
      "Năm dàn ý thực hiện trong một phút (Day10-One-Minute-Outlines)",
      "Một hoặc hai bản ghi âm (Day10-Recording)",
      "Ba lượt chuyển câu chuyện thành lập luận (Day10-Story-to-Essay)"
    ]
  },

  // ============================================================ DAY 11
  {
    day: 11,
    phase: 2,
    title: "Ngày 11: Ngữ pháp trong lập luận",
    theme: "Quan hệ ý nghĩa & ranh giới câu",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Ngữ pháp trong Ngày 11 được dùng để biểu đạt quan hệ giữa các ý. Trước khi chọn cấu trúc, cần xác định mình đang nêu nguyên nhân, hệ quả, điều kiện, đối chiếu hay nhượng bộ — quyết định về ý nghĩa phải có trước quyết định về liên từ và dạng mệnh đề. Câu dài chỉ nên chứa nhiều mệnh đề khi quan hệ giữa chúng vẫn rõ, dấu câu chính xác và từ quy chiếu không gây nhầm lẫn. Sau khi viết, đánh dấu chủ ngữ, động từ chính và ranh giới mệnh đề để thấy câu đang thiếu thành phần, nối sai quan hệ hay chứa quá nhiều ý.",
    checklist: [
      "Bảng sửa câu: nhóm nguyên nhân, hệ quả, đối lập, điều kiện, hedging",
      "Kiểm tra ranh giới câu: 12 câu được đánh dấu S/V/DC/IC/P",
      "Đoạn văn ngắn 160-190 từ dùng ít nhất bốn quan hệ ý nghĩa",
      "Bốn câu trả lời Speaking vận dụng cấu trúc không viết sẵn",
      "Sửa 8 câu tiếng Anh kèm tên loại lỗi (15.12)"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Ngữ pháp và quan hệ ý nghĩa", note: "Năm quan hệ + câu hỏi kiểm tra" },
        { time: "10-30m", name: "Reading", note: "60': đoạn A-D + câu 1-6; 90': toàn bộ bài 8 câu" },
        { time: "30-55m", name: "Ranh giới câu + bài luyện ngữ pháp", note: "S/V/DC/IC/P + nguyên nhân-đối lập-điều kiện-hedging" },
        { time: "55-75m", name: "Đoạn văn ngắn", note: "160-190 từ, 4+ quan hệ, gạch chân cấu trúc" },
        { time: "75-90m", name: "Sửa dấu câu + Speaking", note: "8 câu dấu câu + 4 câu trả lời" }
      ]
    },
    reading: {
      title: "Bài đọc 11 - The Hidden Logic of Good Explanations",
      source: "IELTS Marathon 21-Day Companion - Ngày 11, mục 15.5",
      strategy: "Câu 1-5 hoàn thành câu KHÔNG QUÁ BA TỪ; câu 6-8 trắc nghiệm.",
      passage: "A. A clear explanation does more than provide correct facts. It shows the relationship between those facts. A learner may know that sleep affects memory, that screens can delay bedtime and that tired students make more mistakes. Unless these ideas are connected, however, the listener must build the logic independently.\n\nB. Cause is often the first relationship people attempt to express, but it is easy to oversimplify. Saying 'technology causes poor sleep' treats all forms of technology and all users as identical. A more accurate explanation identifies a mechanism and a condition. Bright screens may delay sleep when they are used late at night, particularly if the content is emotionally stimulating.\n\nC. Contrast is equally important because many social questions do not have one universal answer. Remote work can save commuting time, whereas it may also blur the boundary between work and rest. The contrast does not cancel either statement. It shows that the outcome depends on the worker, the home environment and the way the job is managed.\n\nD. Concession allows a writer to recognise a valid opposing point without losing the main position. 'Although public transport requires major investment, it can reduce congestion for decades' is stronger than ignoring cost completely. The writer appears more accurate because the argument has survived contact with a real limitation.\n\nE. Conditions prevent overgeneralisation. Online education can expand access if students have suitable devices and reliable internet. A policy may be effective provided that teachers receive training. These structures reveal that a claim is not equally true in every situation.\n\nF. Sentence length should follow thought rather than ambition. Several relationships can sometimes fit naturally into one sentence, but combining too much creates unclear reference and punctuation problems. Good writers vary sentence length and stop when a new main idea needs its own space.\n\nG. The best grammar practice therefore begins with meaning. Instead of asking learners to make a sentence 'more complex', teachers can ask what relationship the sentence needs to express. Complexity becomes a result of clearer thinking rather than a decoration added after the idea.",
      questions: [
        { id: "r-d11-q1", type: "sentence_completion", text: "Without clear connections, the listener has to build the ____ alone.", options: [], correct: "logic", explanation: "Đoạn A: 'the listener must build the logic independently.'" },
        { id: "r-d11-q2", type: "sentence_completion", text: "A more accurate causal explanation gives a mechanism and a ____.", options: [], correct: "condition", explanation: "Đoạn B: 'A more accurate explanation identifies a mechanism and a condition.'" },
        { id: "r-d11-q3", type: "sentence_completion", text: "Remote work may blur the boundary between work and ____.", options: [], correct: "rest", explanation: "Đoạn C: 'it may also blur the boundary between work and rest.'" },
        { id: "r-d11-q4", type: "sentence_completion", text: "A concession recognises a valid ____ point.", options: [], correct: "opposing", explanation: "Đoạn D: 'Concession allows a writer to recognise a valid opposing point.'" },
        { id: "r-d11-q5", type: "sentence_completion", text: "Several ideas in one sentence may cause unclear reference and ____ problems.", options: [], correct: "punctuation", explanation: "Đoạn F: 'combining too much creates unclear reference and punctuation problems.'" },
        { id: "r-d11-q6", type: "multiple_choice", text: "What does the writer criticise about 'technology causes poor sleep'?", options: ["A. It is grammatically incorrect.", "B. It is too formal.", "C. It treats different uses and users as the same.", "D. It contains no advanced vocabulary."], correct: "C", explanation: "Đoạn B: 'treats all forms of technology and all users as identical.'" },
        { id: "r-d11-q7", type: "multiple_choice", text: "Why is the public-transport sentence in Paragraph D stronger?", options: ["A. It uses a longer sentence.", "B. It recognises a real limitation while maintaining the claim.", "C. It proves public transport is cheap.", "D. It removes all uncertainty."], correct: "B", explanation: "Đoạn D: 'stronger than ignoring cost completely... the argument has survived contact with a real limitation.'" },
        { id: "r-d11-q8", type: "multiple_choice", text: "What is the main recommendation in Paragraph G?", options: ["A. Add complex structures to every sentence.", "B. Learn punctuation before ideas.", "C. Begin grammar choices with the relationship of meaning.", "D. Avoid short sentences."], correct: "C", explanation: "Đoạn G: 'The best grammar practice therefore begins with meaning.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Từ trong câu hỏi <-> diễn đạt trong bài",
        errorReason: "Trả lời quá 3 từ hoặc chọn phương án tuyệt đối"
      }
    },
    listening: makeListening({
      day: 11,
      theme: "làm việc từ xa",
      type: "Form Completion (Part 1 - Đăng ký khoá học online)",
      part: "Part 1 (Gọi điện đăng ký khoá làm việc từ xa)",
      questions: [
        { id: "l-d11-q1", prompt: "Họ người đăng ký: [ 1 ].", answer: "Nguyễn" },
        { id: "l-d11-q2", prompt: "Khoá học quan tâm: quản lý [ 2 ].", answer: "thời gian" },
        { id: "l-d11-q3", prompt: "Hình thức học mong muốn: [ 3 ] và tối theo yêu cầu.", answer: "cuối tuần" },
        { id: "l-d11-q4", prompt: "Số học viên tối đa mỗi lớp: [ 4 ].", answer: "25" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - Đoạn văn ngắn 160-190 từ",
      prompt: "ĐỀ BÀI: Some people believe working from home is beneficial for both employees and employers. To what extent do you agree or disagree?\n\nYêu cầu: dùng ít nhất bốn quan hệ ý nghĩa (nguyên nhân, hệ quả, đối lập, điều kiện, nhượng bộ), gạch chân cấu trúc đã dùng và ghi tên quan hệ bên lề.",
      targetWords: "160-190 từ",
      guidance: "Mỗi cấu trúc phải giúp người đọc hiểu rõ hơn mạch lập luận. Nếu bỏ liên từ mà hai ý vẫn chỉ đứng cạnh nhau, câu cần được viết lại để quan hệ nguyên nhân, điều kiện hoặc nhượng bộ hiện ra rõ hơn.",
      modelAnswer: "Bài mẫu ngắn - Nhượng bộ có kiểm soát: Although remote work can reduce commuting time, the benefit may disappear if employees remain available throughout the evening and never develop a clear boundary between work and rest.",
      examinerNotes: "Although tạo quan hệ nhượng bộ, if cho biết hoàn cảnh khiến kết quả thay đổi. Hai cấu trúc cùng phục vụ một lập luận; không thêm vào chỉ để làm câu dài hơn."
    },
    speaking: {
      part: "Part 3 - Vận dụng cấu trúc vào câu trả lời",
      prompt: "Trả lời không viết sẵn toàn bộ lời thoại; mỗi nhóm câu dùng ít nhất một cấu trúc (because, although, if, which means, whereas):\n1. Why do some people prefer working from home?\n2. What problems can remote workers experience?\n3. Should companies allow all employees to work remotely?\n4. How might work change in the future?",
      followUps: [
        "Should companies allow all employees to work remotely?",
        "How might work change in the future?"
      ],
      selfEvaluationCriteria: [
        "Câu nói có dùng đúng cấu trúc quan hệ ý nghĩa không?",
        "Câu có bị bỏ dở vì cấu trúc quá dài không?",
        "Mạch nói có tự nhiên, không giống đọc bài viết?"
      ]
    },
    vocabulary: [
      { term: "lead to", pos: "verb phrase", phonetic: "dẫn đến hệ quả", meaning: "dẫn đến hệ quả", example: "Long commutes can lead to exhaustion." },
      { term: "contribute to", pos: "verb phrase", phonetic: "góp phần tạo ra nguyên nhân", meaning: "góp phần tạo ra nguyên nhân", example: "Social media can contribute to anxiety." },
      { term: "result in", pos: "verb phrase", phonetic: "tạo ra hệ quả", meaning: "tạo ra hệ quả", example: "Poor planning may result in wasted funding." },
      { term: "stem from", pos: "verb phrase", phonetic: "chỉ nguồn gốc của vấn đề", meaning: "chỉ nguồn gốc của vấn đề", example: "The problem often stems from weak regulation." },
      { term: "be partly explained by", pos: "verb phrase", phonetic: "nêu nguyên nhân với mức độ thận trọng", meaning: "nêu nguyên nhân với mức độ thận trọng", example: "The trend may be partly explained by changing work patterns." },
      { term: "despite this limitation", pos: "phrase", phonetic: "thừa nhận giới hạn", meaning: "thừa nhận giới hạn", example: "Despite this limitation, the policy remains useful." },
      { term: "the opposite is true for", pos: "phrase", phonetic: "tạo quan hệ đối lập", meaning: "tạo quan hệ đối lập", example: "The opposite is true for older workers." },
      { term: "under these conditions", pos: "phrase", phonetic: "quy chiếu lại điều kiện", meaning: "quy chiếu lại điều kiện", example: "Under these conditions, online learning can be effective." },
      { term: "provided that", pos: "conjunction", phonetic: "nêu điều kiện trang trọng", meaning: "nêu điều kiện trang trọng", example: "The system can work provided that teachers are trained." },
      { term: "this means that", pos: "phrase", phonetic: "giải thích hệ quả", meaning: "giải thích hệ quả", example: "Travel time is removed. This means that workers can rest longer." },
      { term: "a likely consequence", pos: "noun phrase", phonetic: "cụm danh từ chỉ hệ quả", meaning: "cụm danh từ chỉ hệ quả", example: "A likely consequence is greater inequality." },
      { term: "the effect depends on", pos: "verb phrase", phonetic: "giới hạn phạm vi khẳng định", meaning: "giới hạn phạm vi khẳng định", example: "The effect depends on age and context." }
    ],
    grammar: {
      title: "Quan hệ ý nghĩa, ranh giới câu và hedging",
      explanation: "Bốn bài nhỏ: A) kết hợp câu nguyên nhân - hệ quả; B) đối lập và nhượng bộ; C) điều kiện; D) hedging. Sau đó sửa 8 lỗi dấu câu và 8 lỗi diễn đạt tiếng Anh (15.12).",
      drillQuestion: "A. NGUYÊN NHÂN VÀ HỆ QUẢ - kết hợp cho tự nhiên:\n1. Students receive constant notifications. Their attention is broken repeatedly. They lose track of difficult arguments.\n2. Public transport is unreliable. People continue using private cars. Congestion remains high.\n3. Teenagers do not understand interest. They may borrow carelessly. They face higher long-term costs.\n\nB. ĐỐI LẬP VÀ NHƯỢNG BỘ:\n4. Online learning gives students flexibility. It may reduce direct interaction.\n5. Practical skills are valuable. Academic knowledge remains essential.\n6. Green spaces improve cities. Poorly planned projects can raise local rents.\n\nC. ĐIỀU KIỆN:\n7. A school device policy can work. Teachers apply it consistently.\n8. Artificial intelligence can support learning. Students verify the information.\n9. Remote work can improve work-life balance. Employees have clear boundaries.\n\nD. HEDGING - viết lại câu cho chính xác, đồng thời giới hạn đối tượng hoặc hoàn cảnh:\n10. Advertising makes people buy useless products.\n11. Exams measure intelligence.\n12. Living alone causes loneliness.\n\nSỬA LỖI DẤU CÂU:\n1. Online learning is convenient, it gives students control over pace.\n2. Although public transport is expensive to build. It can serve a city for decades.\n3. Many people work from home however they do not have a separate office.\n4. Students need media literacy, because misinformation spreads quickly.\n5. The policy may reduce distraction, however, it is difficult to enforce.\n6. Schools should teach practical skills such as budgeting communication and basic health knowledge.\n7. If teenagers use screens late at night they may sleep less.\n8. The city planted trees which reduced heat in several streets.\n\nSỬA CÁCH DIỄN ĐẠT TIẾNG ANH (15.12) - ghi loại lỗi (collocation, giới từ, cấu trúc nguyên nhân hoặc danh từ không đếm được):\n1. This policy can bring a bad result for workers.\n2. It makes employees difficult to relax.\n3. Remote work is suitable with every person.\n4. People can save the time of travelling.\n5. The reason is because offices are expensive.\n6. It depends in the job.\n7. Employees have more freedom to choose their time.\n8. Companies can reduce many costs of office.",
      sampleAnswer: "Gợi ý A:\n1. Because students receive constant notifications, their attention is broken repeatedly and they lose track of difficult arguments.\n2. Since public transport is unreliable, people continue using private cars, which means congestion remains high.\n3. If teenagers do not understand interest, they may borrow carelessly and face higher long-term costs.\n\nGợi ý B:\n4. Although online learning gives students flexibility, it may reduce direct interaction.\n5. Practical skills are valuable, whereas academic knowledge remains essential.\n6. While green spaces improve cities, poorly planned projects can raise local rents.\n\nGợi ý C:\n7. A school device policy can work provided that teachers apply it consistently.\n8. Artificial intelligence can support learning if students verify the information.\n9. Remote work can improve work-life balance when employees have clear boundaries.\n\nGợi ý D:\n10. Some advertising can encourage people to buy products they do not really need.\n11. Exams may partly measure a limited range of abilities rather than intelligence as a whole.\n12. Long periods of isolation can contribute to loneliness in some people.\n\nSửa dấu câu:\n1. Online learning is convenient, and it gives students control over pace. / Online learning is convenient; it gives students control over pace.\n2. Although public transport is expensive to build, it can serve a city for decades.\n3. Many people work from home; however, they do not have a separate office.\n4. Students need media literacy because misinformation spreads quickly.\n5. The policy may reduce distraction; however, it is difficult to enforce.\n6. Schools should teach practical skills such as budgeting, communication and basic health knowledge.\n7. If teenagers use screens late at night, they may sleep less.\n8. The city planted trees, which reduced heat in several streets.\n\nSửa diễn đạt (loại lỗi):\n1. This policy can produce a negative/harmful result for workers. (collocation: bring a bad result)\n2. It makes it difficult for employees to relax. / Employees find it difficult to relax. (cấu trúc make it difficult to)\n3. Remote work is not suitable for every person. (giới từ: suitable for)\n4. People can save time on travelling / reduce travelling time. (collocation: save time)\n5. The reason is that offices are expensive. (cấu trúc reason is that)\n6. It depends on the job. (giới từ: depend on)\n7. Đúng.\n8. Companies can reduce many office costs. (danh từ không đếm được + tính từ sở hữu cách)"
    },
    deliverables: [
      "Bài Reading kèm vị trí bằng chứng (Day11-Reading)",
      "Bản kiểm tra ranh giới của mười hai câu (Day11-S-V-DC-IC)",
      "Mười hai câu được nâng cấp ngữ pháp (Day11-Grammar-Upgrade)",
      "Bài sửa lỗi dấu câu (Day11-Punctuation)",
      "Đoạn văn ngắn 160-190 từ (Day11-Writing)",
      "Bốn câu trả lời Speaking (Day11-Speaking)"
    ]
  },

  // ============================================================ DAY 12
  {
    day: 12,
    phase: 2,
    title: "Ngày 12: Độ chính xác trong Task 1",
    theme: "Chọn đặc điểm & số liệu chính xác có bấm giờ",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Độ chính xác trong Task 1 gồm ba lớp kiểm soát: chọn đúng đặc điểm, dùng đúng số liệu và diễn đạt đúng quan hệ. Một câu đúng ngữ pháp vẫn có thể sai nhiệm vụ nếu số liệu bị đọc nhầm, đơn vị bị đổi hoặc chi tiết được nhấn mạnh không thuộc nhóm đặc điểm chính. Trước khi viết, trả lời năm câu hỏi: hai đặc điểm quan trọng nhất là gì? chi tiết nào nhóm được? dữ liệu nào so sánh trực tiếp? chi tiết nào lược bỏ? loại hình cần cấu trúc ngữ pháp nào? Bản viết lại phải sửa cả lựa chọn thông tin lẫn ngôn ngữ.",
    checklist: [
      "Đọc bài 'Remote Work After the Emergency' + 8 câu hỏi",
      "Dàn ý năm phút: hai đặc điểm chính + cách chia hai đoạn thân bài",
      "Bài Task 1 có bấm giờ (20 phút, 160-190 từ)",
      "Bản tự kiểm tra theo loại hình đã chọn",
      "Bản viết lại: overview + ít nhất hai câu thân bài",
      "Mười câu sửa lỗi ngôn ngữ Task 1 (16.11)",
      "Part 1 + Part 2 + Part 3 về công việc"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Kiểm tra độ chính xác Task 1", note: "Năm câu hỏi trước khi viết + checklist sau khi viết" },
        { time: "10-30m", name: "Reading", note: "60': đoạn A-D + câu 1-4; 90': toàn bộ 8 câu + hình A" },
        { time: "30-55m", name: "Dàn ý + viết có bấm giờ", note: "20 phút viết, 160-190 từ, 2 phút cuối đối chiếu số liệu" },
        { time: "55-70m", name: "Tự chấm + viết lại", note: "Bảng 0/1/2 điểm + overview và hai câu sửa" },
        { time: "70-90m", name: "Sửa ngôn ngữ + Speaking", note: "10 câu bị động/so sánh/vị trí" }
      ]
    },
    reading: {
      title: "Bài đọc 12 - Remote Work After the Emergency",
      source: "IELTS Marathon 21-Day Companion - Ngày 12, mục 16.5",
      strategy: "Câu 1-4 phân loại quan điểm (YES/NO/NOT GIVEN); câu 5-8 trả lời ngắn KHÔNG QUÁ BỐN TỪ.",
      passage: "A. During the global health emergency, remote work moved from a limited employee benefit to a large-scale necessity. Many organisations adopted it quickly, without the technology, management systems or home conditions that would normally support a planned transition. Early experiences were therefore shaped as much by crisis as by the work arrangement itself.\n\nB. As offices reopened, companies did not simply return to earlier patterns. Some adopted fully remote systems, but hybrid arrangements became more common. Employees might work from home for two or three days and attend the office for meetings, collaboration or tasks requiring specialist equipment. The appeal of this model lies in combining flexibility with face-to-face contact.\n\nC. Benefits differ by sector and role. Software, design and administrative work can often be completed away from a central office. Healthcare, manufacturing and hospitality require more physical presence. Even within the same company, a manager, technician and new employee may have very different needs. A single policy applied to every role can therefore create unfairness rather than consistency.\n\nD. Productivity is equally difficult to summarise. Some workers complete focused tasks more efficiently at home because they avoid commuting and office interruptions. Others struggle with limited space, family demands or weak supervision. Measurements based only on hours online may also reward visibility rather than useful output.\n\nE. Hybrid work creates new coordination problems. A meeting can become unequal when some participants sit together in a room and others join through a screen. Informal information may reach office-based staff first, giving them an advantage in decisions or promotion. Companies need deliberate systems so that flexibility does not produce a less visible class of employees.\n\nF. The long-term outcome will depend on management rather than location alone. Clear expectations, suitable equipment, fair access to information and the right to disconnect all matter. Remote work is neither a universal solution nor a temporary mistake. It is a tool whose value changes according to the task, worker and organisational design.",
      questions: [
        { id: "r-d12-q1", type: "yes_no_not_given", text: "Early remote-work experiences reflected emergency conditions as well as remote work itself.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn A: 'Early experiences were therefore shaped as much by crisis as by the work arrangement itself.'" },
        { id: "r-d12-q2", type: "yes_no_not_given", text: "The writer believes fully remote work has become more common than hybrid work.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn B: 'Some adopted fully remote systems, but hybrid arrangements became more common.'" },
        { id: "r-d12-q3", type: "yes_no_not_given", text: "Every employee within one company should follow the same location policy.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn C: 'A single policy applied to every role can therefore create unfairness rather than consistency.'" },
        { id: "r-d12-q4", type: "yes_no_not_given", text: "Measuring online hours may fail to reflect useful productivity.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn D: 'Measurements based only on hours online may also reward visibility rather than useful output.'" },
        { id: "r-d12-q5", type: "short_answer", text: "What does hybrid work try to combine with face-to-face contact? (Không quá 4 từ)", options: [], correct: "flexibility", explanation: "Đoạn B: 'The appeal of this model lies in combining flexibility with face-to-face contact.'" },
        { id: "r-d12-q6", type: "short_answer", text: "Which three sectors are given as examples requiring more physical presence? (Không quá 4 từ)", options: [], correct: "healthcare, manufacturing, hospitality", explanation: "Đoạn C: 'Healthcare, manufacturing and hospitality require more physical presence.'" },
        { id: "r-d12-q7", type: "short_answer", text: "What kind of employees may receive informal information first? (Không quá 4 từ)", options: [], correct: "office-based staff", explanation: "Đoạn E: 'Informal information may reach office-based staff first.' Chấp nhận: office-based staff." },
        { id: "r-d12-q8", type: "short_answer", text: "What employee right is mentioned as part of fair management? (Không quá 4 từ)", options: [], correct: "the right to disconnect", explanation: "Đoạn F: '...the right to disconnect all matter.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Từ trong câu hỏi <-> diễn đạt trong bài",
        errorReason: "Dùng kiến thức bên ngoài hoặc đổi dạng từ so với bài"
      }
    },
    listening: makeListening({
      day: 12,
      theme: "công việc",
      type: "Multiple Choice (Part 3 - Dự án cải thiện văn phòng)",
      part: "Part 3 (Hai sinh viên bàn về khảo sát nơi làm việc)",
      questions: [
        { id: "l-d12-q1", prompt: "Hình thức *remote* phổ biến nhất trong khảo sát là:", options: ["A. 2 ngày/tuần", "B. 3 ngày/tuần", "C. 4 ngày/tuần"], answer: "B" },
        { id: "l-d12-q2", prompt: "Vấn đề lớn nhất của làm việc từ xa được nêu ra là:", options: ["A. Cô lập", "B. Ranh giới công - tư", "C. Thiết bị"], answer: "B" },
        { id: "l-d12-q3", prompt: "Sinh viên đề xuất khảo sát thêm nhóm nào?", options: ["A. Nhân viên mới", "B. Quản lý cấp trung", "C. Nhân viên bán thời gian"], answer: "A" }
      ]
    }),
    writing: {
      task: "Writing Task 1 - Báo cáo có bấm giờ",
      prompt: "Figure A - Hybrid Work by Sector: The bar chart shows the percentages of employees in five sectors who worked remotely for at least two days per week in 2019, 2022 and 2026.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nDàn ý trong năm phút: Nhóm cao nhất và thấp nhất trong từng năm • Mức tăng lớn nhất 2019→2022 • Thay đổi 2022→2026 • Ngành ổn định/khác biệt • Nhóm dữ liệu cho đoạn thân bài 1 • Nhóm dữ liệu cho đoạn thân bài 2.\n\n(Ở mức mở rộng: thêm Figure B - Map of Rivergate hoặc Figure C - Glass Recycling Process.)",
      targetWords: "160-190 từ, viết trong 20 phút",
      guidance: "Trong hai phút cuối, đối chiếu từng con số với biểu đồ và khoanh các đơn vị đã dùng. Không thêm nguyên nhân không xuất hiện trong hình. Câu bị động dùng đúng chỗ; phương hướng và vị trí gọi tên nhất quán.",
      modelAnswer: "Ngân hàng ngôn ngữ Task 1:\nBiểu đồ: worked remotely at least two days per week / recorded the highest proportion / rose sharply during the period / fell back slightly after 2022 / remained well above the 2019 level / the increase was most pronounced in...\nBản đồ: was converted into / was replaced by / was expanded towards the east / remained in the same location / a new footbridge was constructed / access to the station was improved / the area became more residential.\nQuy trình: the cycle begins with / is collected and transported / is sorted and cleaned / is crushed before being melted / is formed into new bottles / is returned to retailers.",
      examinerNotes: "Quy trình kiểm tra sau khi viết: Overview có nhất quán với cách nhóm ở hai đoạn thân bài không? Mức thay đổi diễn đạt đúng phần trăm / điểm phần trăm? Câu bị động dùng đúng chỗ? Vị trí gọi tên nhất quán?"
    },
    speaking: {
      part: "Part 1 + Part 2 + Part 3 (công việc)",
      prompt: "Part 1:\n1. Do you prefer working at home or in another place?\n2. Is your home a good place to concentrate?\n3. Do you spend much time commuting?\n4. What makes a workplace comfortable?\n\nPart 2: Describe a place where you worked or studied effectively.\n\nPart 3:\n1. Why has hybrid work remained popular?\n2. Should companies let employees choose where to work?\n3. Can remote workers be disadvantaged in promotion?\n4. How might office design change in the future?",
      followUps: [
        "Why has hybrid work remained popular?",
        "Can remote workers be disadvantaged in promotion?",
        "How might office design change in the future?"
      ],
      selfEvaluationCriteria: [
        "Phần đánh giá có bám vào tiêu chí: quan điểm, cơ chế, ví dụ, phạm vi?",
        "Có cách nói thận trọng (tend to, can, may) thay vì khái quát tuyệt đối?"
      ]
    },
    vocabulary: [
      { term: "a hybrid arrangement", pos: "noun phrase", phonetic: "phương án làm việc kết hợp", meaning: "phương án làm việc kết hợp", example: "Many firms adopted a hybrid arrangement." },
      { term: "work remotely", pos: "verb phrase", phonetic: "làm việc từ xa", meaning: "làm việc từ xa", example: "Over half of finance employees worked remotely." },
      { term: "avoid a lengthy commute", pos: "verb phrase", phonetic: "tránh thời gian đi lại kéo dài", meaning: "tránh thời gian đi lại kéo dài", example: "Remote work allows employees to avoid a lengthy commute." },
      { term: "blur the boundary", pos: "verb phrase", phonetic: "làm mờ ranh giới", meaning: "làm mờ ranh giới", example: "Home working can blur the boundary between work and rest." },
      { term: "focused work", pos: "noun phrase", phonetic: "công việc cần tập trung", meaning: "công việc cần tập trung", example: "Quiet home conditions support focused work." },
      { term: "face-to-face collaboration", pos: "noun phrase", phonetic: "hợp tác trực tiếp", meaning: "hợp tác trực tiếp", example: "Some tasks still require face-to-face collaboration." },
      { term: "fair access to information", pos: "noun phrase", phonetic: "quyền tiếp cận thông tin bình đẳng", meaning: "quyền tiếp cận thông tin bình đẳng", example: "Hybrid teams need fair access to information." },
      { term: "be less visible", pos: "verb phrase", phonetic: "ít được nhìn thấy hơn", meaning: "ít được nhìn thấy hơn", example: "Remote employees may be less visible to managers." },
      { term: "the right to disconnect", pos: "noun phrase", phonetic: "quyền ngắt kết nối ngoài giờ", meaning: "quyền ngắt kết nối ngoài giờ", example: "Workers should have the right to disconnect." },
      { term: "undergo redevelopment", pos: "verb phrase", phonetic: "được cải tạo", meaning: "được cải tạo", example: "The town centre underwent major redevelopment." },
      { term: "remain unchanged", pos: "verb phrase", phonetic: "giữ nguyên", meaning: "giữ nguyên", example: "The station remained unchanged." },
      { term: "a cyclical process", pos: "noun phrase", phonetic: "quy trình tuần hoàn", meaning: "quy trình tuần hoàn", example: "Glass recycling is a cyclical process." }
    ],
    grammar: {
      title: "Bị động, so sánh và vị trí",
      explanation: "Sửa các câu sau và nêu quy tắc chi phối từng lỗi: cấu trúc so sánh, giới từ chỉ vị trí, dạng chủ động/bị động, hòa hợp chủ ngữ - động từ.",
      drillQuestion: "1. In 2022, 71% technology workers worked remotely.\n2. The figure in finance was increased from 12% to 58%.\n3. Technology had the highest rate, followed by finance was 58%.\n4. In 2026, education was more higher than retail.\n5. The old houses were replaced to apartments.\n6. A shopping centre was built at the east of the park.\n7. The factory was demolished and changed into a sports centre.\n8. Used bottles collect at collection points.\n9. After cleaning, the glass crushes and melts.\n10. The process is ended when new bottles return to shops.\n\nBẢNG TỰ CHẤM 0/1/2 (16.9): Đặc điểm chính • Cách nhóm dữ liệu • So sánh • Độ chính xác • Ngữ pháp. Sau đó viết lại: (1) câu overview; (2) câu số liệu thiếu chính xác nhất; (3) một câu có cấu trúc phức tạp hơn mức cần thiết.",
      sampleAnswer: "Gợi ý sửa:\n1. 71% of technology workers worked remotely. (thiếu of)\n2. The figure for finance increased from 12% to 58%. (bỏ was nếu không dùng câu bị động; for + tên nhóm)\n3. Technology had the highest rate, followed by finance at 58%.\n4. In 2026, education was higher than retail. / education recorded a higher rate than retail. (bỏ 'more' trước tính từ ngắn)\n5. The old houses were replaced by apartments. (replaced by/with)\n6. A shopping centre was built to the east of the park. (to the east = hướng từ ngoài nhìn vào)\n7. The factory was demolished and the site was changed into a sports centre. (chủ ngữ đổi)\n8. Used bottles are collected at collection points. (bị động: bottles không tự collect)\n9. After cleaning, the glass is crushed and melted. (bị động)\n10. The process ends when new bottles are returned to shops. (process ends - chủ động; bottles are returned - bị động)"
    },
    deliverables: [
      "Đáp án Reading kèm vị trí bằng chứng (Day12-Reading)",
      "Dàn ý Task 1 trong năm phút (Day12-Outline)",
      "Báo cáo có bấm giờ (Day12-Task1)",
      "Bảng tự chấm (Day12-Self-Assess)",
      "Overview và hai câu được viết lại (Day12-Rewrites)",
      "Bài sửa ngôn ngữ + Speaking (Day12-Language-Fix)"
    ]
  },

  // ============================================================ DAY 13
  {
    day: 13,
    phase: 2,
    title: "Ngày 13: Góc nhìn rộng trong Part 3",
    theme: "Nhiều góc nhìn, cơ chế và hedging trong Speaking",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Speaking Part 3 yêu cầu mở rộng từ trải nghiệm cá nhân sang nhóm người, nguyên nhân xã hội, chính sách và hệ quả dài hạn. Đại từ 'I' xuất hiện quá dày thường khiến câu trả lời dừng ở trải nghiệm cá nhân. Người học có thể chuyển góc nhìn sang gia đình, trường học, doanh nghiệp, nền tảng công nghệ hoặc chính quyền — mỗi góc nhìn phải bổ sung một nguyên nhân hoặc hệ quả mới. Khi luyện, chọn một góc nhìn chính và một góc nhìn rộng hơn; câu trả lời cần có quan điểm, cơ chế, ví dụ và phạm vi áp dụng phù hợp.",
    checklist: [
      "Hai sơ đồ góc nhìn (cá nhân, tổ chức, xã hội/chính sách)",
      "6-10 câu trả lời Part 3 đã ghi âm theo khung Position → Reason → Example → Counterpoint → Closing",
      "Bản chép lời 60 giây với kí hiệu P, R, V, G, N, F",
      "Bản sửa tám dòng ảnh hưởng nhất + lần ghi âm thứ hai",
      "Sáu nhận định tuyệt đối được viết lại có sắc thái",
      "Dàn ý Task 2 về media literacy"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Sơ đồ góc nhìn Part 3", note: "Sáu góc nhìn + ví dụ câu trả lời nhiều góc nhìn" },
        { time: "10-35m", name: "Reading", note: "60': đoạn A-D + câu 1-6; 90': toàn bộ 10 câu" },
        { time: "35-55m", name: "Hai sơ đồ + Part 3", note: "Thông tin sai lệch + Giáo dục và công nghệ" },
        { time: "55-75m", name: "Bản chép lời + sửa", note: "60 giây chép + kí hiệu lỗi + thu lần 2" },
        { time: "75-90m", name: "Sắc thái + Writing", note: "6 câu tuyệt đối + dàn ý Task 2" }
      ]
    },
    reading: {
      title: "Bài đọc 13 - Who Should Control Online Information?",
      source: "IELTS Marathon 21-Day Companion - Ngày 13, mục 17.5",
      strategy: "Câu 1-5 phân loại quan điểm (YES/NO/NOT GIVEN); câu 6-10 trắc nghiệm.",
      passage: "A. False information is not new, but digital platforms have changed its speed, scale and visibility. A misleading claim can move from one account to millions of screens before professional fact-checkers or public institutions respond. The difficulty is made greater by the fact that misinformation often travels through friends, relatives or familiar creators rather than obviously suspicious sources.\n\nB. Some people therefore call for stronger platform regulation. They argue that companies design recommendation systems, profit from attention and possess detailed information about how content spreads. From this perspective, platforms cannot present themselves as neutral spaces. If their systems repeatedly promote harmful falsehoods, they should be required to reduce that risk.\n\nC. Regulation, however, raises questions about power. A government or company that can remove dangerous misinformation may also suppress legitimate disagreement. Scientific understanding develops, political claims are contested and satire can be mistaken for factual reporting. Rules written too broadly may protect the public from one harm while creating another.\n\nD. Media literacy offers a different response. Instead of deciding every claim for users, schools and public institutions can teach people to examine sources, identify emotional manipulation and look for independent evidence. This approach supports personal judgement, but it is slow. A short lesson cannot fully compete with systems that deliver persuasive content every hour.\n\nE. Professional journalism remains important because reporters can investigate claims, contact experts and correct errors publicly. Yet trust in news organisations is uneven, and high-quality reporting is expensive. When reliable information is placed behind a paywall while false content is free and visually engaging, accuracy may be at a practical disadvantage.\n\nF. No single actor can solve the problem. Platforms can redesign incentives, governments can set transparent standards, journalists can explain evidence and citizens can pause before sharing. The aim should not be a perfectly controlled information environment, which is neither realistic nor desirable. It should be a system in which misleading claims face more friction and trustworthy information is easier to recognise.",
      questions: [
        { id: "r-d13-q1", type: "yes_no_not_given", text: "The writer believes digital platforms invented false information.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn A: 'False information is not new, but digital platforms have changed its speed, scale and visibility.'" },
        { id: "r-d13-q2", type: "yes_no_not_given", text: "Familiar people may be involved in spreading misinformation.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn A: 'misinformation often travels through friends, relatives or familiar creators.'" },
        { id: "r-d13-q3", type: "yes_no_not_given", text: "Platforms have no information about how content circulates.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn B: platforms 'possess detailed information about how content spreads.'" },
        { id: "r-d13-q4", type: "yes_no_not_given", text: "Rules against misinformation can create risks for legitimate disagreement.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn C: 'A government or company that can remove dangerous misinformation may also suppress legitimate disagreement.'" },
        { id: "r-d13-q5", type: "yes_no_not_given", text: "The writer believes media-literacy lessons can solve the problem immediately.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn D: 'it is slow. A short lesson cannot fully compete...' (bẫy 'immediately')." },
        { id: "r-d13-q6", type: "multiple_choice", text: "Why do supporters of regulation believe platforms have responsibility?", options: ["A. Platforms create every false claim themselves.", "B. Platforms design systems and profit from attention.", "C. Governments have no legal authority.", "D. Users never choose what to share."], correct: "B", explanation: "Đoạn B: 'companies design recommendation systems, profit from attention'." },
        { id: "r-d13-q7", type: "multiple_choice", text: "What is the concern in Paragraph C?", options: ["A. Regulation may be too weak to affect satire.", "B. Scientific knowledge never changes.", "C. The power to remove harmful content can also suppress valid disagreement.", "D. Companies are unable to remove any content."], correct: "C", explanation: "Đoạn C: 'A government or company that can remove dangerous misinformation may also suppress legitimate disagreement.'" },
        { id: "r-d13-q8", type: "multiple_choice", text: "What limitation of media literacy is identified?", options: ["A. It is illegal in some schools.", "B. It develops judgement slowly compared with constant persuasive content.", "C. It prevents people from reading news.", "D. It makes users trust every source equally."], correct: "B", explanation: "Đoạn D: 'it is slow. A short lesson cannot fully compete with systems that deliver persuasive content every hour.'" },
        { id: "r-d13-q9", type: "multiple_choice", text: "Why may reliable journalism be at a practical disadvantage?", options: ["A. It never uses visual content.", "B. It refuses to correct errors.", "C. It may cost money while false content is free and engaging.", "D. It is controlled by schools."], correct: "C", explanation: "Đoạn E: 'reliable information is placed behind a paywall while false content is free and visually engaging.'" },
        { id: "r-d13-q10", type: "multiple_choice", text: "Which solution best matches the writer's conclusion?", options: ["A. Give complete control to governments.", "B. Ban all recommendation systems.", "C. Combine action from platforms, governments, journalists and users.", "D. Let citizens solve the problem alone."], correct: "C", explanation: "Đoạn F: 'No single actor can solve the problem' — cần hành động kết hợp từ nhiều bên." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Ý trong câu hỏi <-> diễn đạt trong bài",
        errorReason: "Dùng kiến thức bên ngoài hoặc bỏ qua từ tuyệt đối (all, every, never)"
      }
    },
    listening: makeListening({
      day: 13,
      theme: "truyền thông",
      type: "Short Answer (Part 2 - Hội nghị báo cáo online)",
      part: "Part 2 (Hội nghị về tin tức số)",
      questions: [
        { id: "l-d13-q1", prompt: "Hội nghị khai mạc lúc [ 1 ] giờ sáng.", answer: "9" },
        { id: "l-d13-q2", prompt: "Diễn giả chính là nhà báo của chuyên mục [ 2 ].", answer: "công nghệ" },
        { id: "l-d13-q3", prompt: "Hội thảo buổi chiều bàn về cách [ 3 ] thông tin.", answer: "kiểm chứng" },
        { id: "l-d13-q4", prompt: "Hội nghị kết thúc bằng phiên hỏi - đáp diễn ra trong [ 4 ] phút.", answer: "30" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - Dàn ý / đoạn 190-220 từ",
      prompt: "ĐỀ BÀI: Schools should teach students how to evaluate online information. To what extent do you agree or disagree?\n\nChuẩn bị: thesis • chuỗi phát triển ý cho đoạn thân bài 1 • chuỗi phát triển ý cho đoạn thân bài 2 • một ý nhượng bộ • năm cụm từ trong ngân hàng của ngày học.",
      targetWords: "Đoạn mở rộng: 190-220 từ",
      guidance: "Khi chuyển ý từ Speaking sang Writing: bỏ các cụm đệm mang tính hội thoại, làm rõ chủ thể của nhận định và dùng hedging phù hợp với phạm vi bằng chứng.",
      modelAnswer: "",
      examinerNotes: "Dùng ngân hàng 17.12: misleading information, source credibility, independent evidence, recommendation system, platform responsibility, transparent standards, legitimate disagreement, media literacy, fact-check a claim, public trust, strike a balance..."
    },
    speaking: {
      part: "Part 3 - Bộ câu hỏi ghi âm",
      prompt: "Ghi âm ít nhất 6 câu (mở rộng: đủ 10 câu). Dùng khung Position → Main reason → Mechanism/example → Counterpoint → Closing thought.\n\nTRUYỀN THÔNG:\n1. Why does misinformation spread quickly?\n2. Should social-media companies remove false information?\n3. How can ordinary users judge whether a source is reliable?\n4. Why do some people distrust professional news organisations?\n5. Should online news be free?\n\nGIÁO DỤC VÀ CÔNG NGHỆ:\n6. Should media literacy be a compulsory school subject?\n7. Will artificial intelligence make teachers less important?\n8. Why do some students use technology more effectively than others?\n9. Should schools restrict access to generative AI?\n10. How might education change over the next twenty years?\n\nVIDỤ góc nhìn rộng cho câu 'Why does misinformation spread quickly?': At the individual level, users often share information that confirms what they already believe. At the platform level, emotional content attracts attention and is therefore promoted more widely. The problem becomes social when repeated exposure makes a weak claim appear familiar and trustworthy.\n\nNHỊP NÓI: viết hoa từ mang nội dung chính, đọc nhẹ từ chức năng. VD: I think the MAIN reason is that EMOTIONAL content attracts ATTENTION much faster than a careful EXPLANATION.\n\nCỤM TỰ SỬA: What I mean is... • Let me be more precise. • I would not say all users, but many... • That is only one side of the issue. • A better way to look at it is... • The effect probably depends on...",
      followUps: [
        "Can ordinary users judge whether a source is reliable?",
        "Will artificial intelligence make teachers less important?"
      ],
      selfEvaluationCriteria: [
        "Chép 60 giây nói, đánh dấu: P = dừng >3s, R = lặp, V = từ mơ hồ (thing, good, bad, a lot), G = ngữ pháp, N = kết hợp từ chưa tự nhiên, F = thiếu âm cuối",
        "Sửa 8 dòng ảnh hưởng rõ nhất; bản sửa nói trôi chảy trong một nhịp thở",
        "Lần thu thứ hai có giảm từ tuyệt đối và dùng hedging đúng nghĩa?"
      ]
    },
    vocabulary: [
      { term: "misleading information", pos: "noun phrase", phonetic: "thông tin gây hiểu sai", meaning: "thông tin gây hiểu sai", example: "Misleading information can spread quickly." },
      { term: "source credibility", pos: "noun phrase", phonetic: "độ tin cậy của nguồn", meaning: "độ tin cậy của nguồn", example: "Students should evaluate source credibility." },
      { term: "independent evidence", pos: "noun phrase", phonetic: "bằng chứng độc lập", meaning: "bằng chứng độc lập", example: "A claim needs independent evidence." },
      { term: "emotional manipulation", pos: "noun phrase", phonetic: "thao túng cảm xúc", meaning: "thao túng cảm xúc", example: "Headlines may rely on emotional manipulation." },
      { term: "confirm an existing belief", pos: "verb phrase", phonetic: "củng cố niềm tin sẵn có", meaning: "củng cố niềm tin sẵn có", example: "Users often share content that confirms an existing belief." },
      { term: "recommendation system", pos: "noun phrase", phonetic: "hệ thống đề xuất", meaning: "hệ thống đề xuất", example: "A recommendation system rewards attention." },
      { term: "platform responsibility", pos: "noun phrase", phonetic: "trách nhiệm nền tảng", meaning: "trách nhiệm nền tảng", example: "Platform responsibility cannot be ignored." },
      { term: "transparent standards", pos: "noun phrase", phonetic: "tiêu chuẩn minh bạch", meaning: "tiêu chuẩn minh bạch", example: "Regulation should use transparent standards." },
      { term: "legitimate disagreement", pos: "noun phrase", phonetic: "bất đồng chính đáng", meaning: "bất đồng chính đáng", example: "Broad rules may suppress legitimate disagreement." },
      { term: "media literacy", pos: "noun phrase", phonetic: "năng lực tiếp nhận truyền thông", meaning: "năng lực tiếp nhận truyền thông", example: "Media literacy should begin at school." },
      { term: "fact-check a claim", pos: "verb phrase", phonetic: "kiểm chứng một tuyên bố", meaning: "kiểm chứng một tuyên bố", example: "Users rarely fact-check every claim." },
      { term: "public trust", pos: "noun phrase", phonetic: "niềm tin công chúng", meaning: "niềm tin công chúng", example: "Repeated errors can damage public trust." },
      { term: "place content behind a paywall", pos: "verb phrase", phonetic: "giới hạn nội dung bằng phí truy cập", meaning: "giới hạn nội dung bằng phí truy cập", example: "Reliable reporting is often placed behind a paywall." },
      { term: "introduce friction", pos: "verb phrase", phonetic: "thêm bước hạn chế thao tác tự động", meaning: "thêm bước hạn chế thao tác tự động", example: "Platforms can introduce friction before users repost content." },
      { term: "strike a balance", pos: "verb phrase", phonetic: "tạo thế cân bằng", meaning: "tạo thế cân bằng", example: "Policy must strike a balance between safety and open debate." }
    ],
    grammar: {
      title: "Hedging và khái quát hoá",
      explanation: "Chọn câu chính xác hơn trong từng cặp và giải thích lí do: từ hoặc cấu trúc nào đã giới hạn đối tượng, mức độ, hoàn cảnh hay quan hệ nguyên nhân. Một nhận định thận trọng vẫn phải rõ — dùng nhiều động từ tình thái trong cùng câu dễ làm quan điểm mơ hồ.",
      drillQuestion: "1. A. Social media makes people misinformed.  |  B. Heavy reliance on social media can increase exposure to misleading claims.\n2. A. Governments always censor criticism.  |  B. Broad regulation may be used to suppress criticism in some contexts.\n3. A. Young people never check sources.  |  B. Some young users share content before checking its source.\n4. A. Journalism is reliable.  |  B. Professional journalism can provide stronger verification, although quality varies.\n5. A. AI will destroy education.  |  B. Uncritical AI use may weaken learning if students replace thinking with generated answers.\n\nVIẾT LẠI NĂM CÂU TUYỆT ĐỐI (có thể dùng: many users, in some cases, tend to, may, is more likely when, not necessarily, depends on):\n1. People believe everything they see online.\n2. Social-media companies only care about money.\n3. Governments should control all online information.\n4. Young people do not read professional news.\n5. Artificial intelligence will replace teachers.\n6. Online learning is better for every student.",
      sampleAnswer: "Gợi ý chọn đúng: 1-B, 2-B, 3-B, 4-B, 5-B.\nGợi ý viết lại:\n1. Many users are more likely to believe content that appears similar to what they already think.\n2. Social-media companies are primarily motivated by engagement, not by a desire to mislead users.\n3. Governments should regulate harmful content carefully, but controls should keep space for legitimate disagreement.\n4. Some young people rarely read traditional news and tend to rely on short updates on social platforms.\n5. AI may change the way teachers deliver lessons, but it is unlikely to replace the human side of teaching.\n6. Online learning tends to suit students with strong self-discipline, although it works less well for certain subjects."
    },
    deliverables: [
      "Bài Reading kèm vị trí bằng chứng (Day13-Reading)",
      "Hai sơ đồ góc nhìn (Day13-Perspective-Maps)",
      "Sáu đến mười câu trả lời Part 3 đã ghi âm (Day13-Part3)",
      "Bản chép lời 60 giây và lần ghi âm thứ hai (Day13-Transcript-Record2)",
      "Dàn ý Task 2 (Day13-Writing-Outline)",
      "Năm câu được viết lại với phạm vi chính xác hơn (Day13-Nuance)"
    ]
  },

  // ============================================================ DAY 14 (CHECKPOINT TUẦN 2)
  {
    day: 14,
    phase: 2,
    title: "Ngày 14: Đánh giá có bấm giờ (Checkpoint)",
    theme: "Checkpoint Tuần 2: Build & Transfer Audit",
    isCheckpoint: true,
    checkpointNum: 14,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Áp lực thời gian thường làm lộ những kỹ năng mới chỉ ổn định khi luyện chậm. Bài đánh giá thứ hai cần chỉ ra chính xác phần nào suy giảm: Reading thiếu bằng chứng, Writing bỏ overview hoặc viết câu quá dài, Speaking lặp ý hay mất âm cuối. Mỗi lỗi cần được phân loại theo bốn nguyên nhân: thiếu kiến thức, dùng sai kỹ thuật, phân bổ thời gian chưa hợp lý hoặc mất tập trung. Sau khi xác định nguyên nhân, thiết kế một bài tập ngắn mô phỏng đúng áp lực đã gặp rồi thực hiện lại với cùng giới hạn thời gian.",
    checklist: [
      "Bài Reading có bấm giờ (12 câu; 25 phút nền tảng / 20 phút mở rộng)",
      "Bài Writing có bấm giờ (Chọn A - Task 1 hoặc B - phần Task 2)",
      "Bài thi thử Speaking ghi âm liên tục không dừng giữa chừng",
      "Phiếu theo dõi áp lực (thời điểm, hành vi, nguyên nhân, cách sửa)",
      "Bài kiểm tra ngữ pháp tổng hợp (10 câu, giới hạn 10 phút)",
      "Bảng tổng kết áp lực Tuần 2 + ba ưu tiên cho Tuần 3"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Hướng dẫn đánh giá", note: "Nhóm nguyên nhân áp lực: Kiến thức / Kỹ thuật / Thời gian / Tập trung" },
        { time: "05-30m", name: "Reading bấm giờ", note: "Đọc 'The Multitasking Myth' + 12 câu" },
        { time: "30-60m", name: "Writing bấm giờ", note: "A: Task 1 20 phút hoặc B: phần Task 2 25 phút" },
        { time: "60-75m", name: "Speaking thi thử", note: "Ghi âm liên tục 4-15 phút theo mức" },
        { time: "75-90m", name: "Rà soát + phiếu áp lực", note: "Kiểm tra ngữ pháp 10 phút + tổng kết tuần" }
      ]
    },
    reading: {
      title: "Bài đọc 14 - The Multitasking Myth",
      source: "IELTS Marathon 21-Day Companion - Ngày 14, mục 18.5",
      strategy: "Bài đánh giá có bấm giờ: 12 câu. Câu 1-5 phân loại nhận định; câu 6-9 trắc nghiệm; câu 10-12 hoàn thành câu KHÔNG QUÁ BA TỪ.",
      passage: "A. Modern work and study environments reward visible activity. A person who answers messages while attending a meeting and editing a document may appear highly productive. Yet the appearance of simultaneous progress can hide a large amount of switching, delay and error.\n\nB. Human attention has limits. Simple automatic activities can sometimes occur together, but two tasks that both require language, decision-making or working memory compete for the same mental resources. The brain does not smoothly divide full concentration between them. It rapidly changes priority, often without the person noticing the transition.\n\nC. Each switch creates a small cost. The worker must remember the previous goal, reconstruct context and decide what to do next. When switches are frequent, these costs accumulate. The person may still complete many small actions, but complex work takes longer and contains more mistakes.\n\nD. Multitasking can also create an inaccurate feeling of productivity. Rapid activity is stimulating, and clearing notifications provides frequent moments of completion. Deep work feels slower because progress may remain invisible for a long period. A researcher can spend an hour understanding a difficult problem without producing a single finished message, yet that hour may create far more value.\n\nE. The effect is not identical for every task. Routine administrative work may tolerate more interruption than writing, coding or analysing evidence. Experience can also reduce the mental effort required for familiar tasks. However, expertise does not remove the basic limit. An experienced writer may recover faster after an interruption, but the interruption still has a cost.\n\nF. Organisations sometimes cause the problem through expectations. Employees may be praised for immediate replies even when their main work requires concentration. Meetings are scheduled across the day, leaving no uninterrupted block. If responsiveness is treated as the main sign of commitment, workers adapt by keeping communication channels open constantly.\n\nG. Solutions therefore need more than personal willpower. Individuals can silence notifications and group similar tasks, but organisations must also protect focused time. Some teams create meeting-free periods, define which messages are genuinely urgent and evaluate output rather than online visibility.\n\nH. The aim is not to eliminate communication or perform one activity for an entire day. It is to match the attention strategy to the task. Fast switching may be acceptable while processing simple requests. It becomes costly when the work requires a person to hold several ideas together and develop them carefully.",
      questions: [
        { id: "r-d14-q1", type: "yes_no_not_given", text: "Visible activity always indicates high productivity.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn A: 'the appearance of simultaneous progress can hide a large amount of switching, delay and error' (bẫy 'always')." },
        { id: "r-d14-q2", type: "yes_no_not_given", text: "Two demanding language tasks compete for limited mental resources.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn B: 'two tasks that both require language, decision-making or working memory compete for the same mental resources.'" },
        { id: "r-d14-q3", type: "yes_no_not_given", text: "Every task switch is consciously noticed.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn B: 'It rapidly changes priority, often without the person noticing the transition' (bẫy 'every')." },
        { id: "r-d14-q4", type: "yes_no_not_given", text: "A worker may feel productive because notifications provide small moments of completion.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn D: 'clearing notifications provides frequent moments of completion.'" },
        { id: "r-d14-q5", type: "yes_no_not_given", text: "The passage states that experienced workers are unaffected by interruptions.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn E: 'expertise does not remove the basic limit... the interruption still has a cost.'" },
        { id: "r-d14-q6", type: "multiple_choice", text: "What does Paragraph C emphasise?", options: ["A. Complex work is impossible in offices.", "B. Small switching costs can accumulate into slower, less accurate work.", "C. Memory becomes unlimited with practice.", "D. Messages are more difficult than research."], correct: "B", explanation: "Đoạn C: 'When switches are frequent, these costs accumulate.'" },
        { id: "r-d14-q7", type: "multiple_choice", text: "Why can deep work feel less productive?", options: ["A. It produces no value.", "B. It is always boring.", "C. Progress may remain invisible for a period.", "D. It requires no mental effort."], correct: "C", explanation: "Đoạn D: 'Deep work feels slower because progress may remain invisible for a long period.'" },
        { id: "r-d14-q8", type: "multiple_choice", text: "According to Paragraph F, how can organisations encourage multitasking?", options: ["A. By providing longer holidays", "B. By rewarding immediate responses and filling the day with meetings", "C. By reducing access to email", "D. By evaluating useful output"], correct: "B", explanation: "Đoạn F: 'Employees may be praised for immediate replies... Meetings are scheduled across the day, leaving no uninterrupted block.'" },
        { id: "r-d14-q9", type: "multiple_choice", text: "What is the writer's main recommendation?", options: ["A. Remove all communication from work.", "B. Use one attention strategy for every task.", "C. Match the amount of switching to the demands of the task.", "D. Allow only experienced workers to multitask."], correct: "C", explanation: "Đoạn H: 'It is to match the attention strategy to the task.'" },
        { id: "r-d14-q10", type: "sentence_completion", text: "After a switch, a worker has to reconstruct ____.", options: [], correct: "context", explanation: "Đoạn C: 'The worker must remember the previous goal, reconstruct context and decide what to do next.'" },
        { id: "r-d14-q11", type: "sentence_completion", text: "Teams may protect concentration by creating ____ periods.", options: [], correct: "meeting-free", explanation: "Đoạn G: 'Some teams create meeting-free periods.'" },
        { id: "r-d14-q12", type: "sentence_completion", text: "Fast switching is least suitable when workers must hold several ideas together and develop them ____.", options: [], correct: "carefully", explanation: "Đoạn H: 'It becomes costly when the work requires a person to hold several ideas together and develop them carefully.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Nhận định <-> diễn đạt trong bài",
        errorReason: "Phân loại theo 4 nguyên nhân áp lực: kiến thức / kỹ thuật / thời gian / tập trung"
      }
    },
    listening: makeListening({
      day: 14,
      theme: "đánh giá",
      type: "Review (Part 1 - Đặt lịch đánh giá kỹ năng)",
      part: "Part 1 (Gọi điện đặt lịch kiểm tra suất thi)",
      questions: [
        { id: "l-d14-q1", prompt: "Suất thi thử được đặt vào [ 1 ], thứ Bảy.", answer: "sáng" },
        { id: "l-d14-q2", prompt: "Số báo danh: [ 2 ].", answer: "A205" },
        { id: "l-d14-q3", prompt: "Phần thi Speaking bắt đầu lúc [ 3 ].", answer: "13h30" },
        { id: "l-d14-q4", prompt: "Học viên cần mang theo [ 4 ] khi đến địa điểm thi.", answer: "thẻ sinh viên" }
      ]
    }),
    writing: {
      task: "Bài Writing có bấm giờ (Chọn một phương án)",
      prompt: "LỰA CHỌN A - TASK 1:\nThe bar chart shows the average number of hours per day that four age groups spent using screens for study or work, social media, video entertainment and gaming. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n• Lập dàn ý: 4 phút • Thời gian viết bài: 20 phút • Không dùng từ điển.\n\nLỰA CHỌN B - MỘT PHẦN TASK 2:\nSome people believe that being able to do several things at the same time is an important skill. Others believe people perform better when they focus on one task. Discuss both views and give your opinion.\nViết: phần mở bài • một đoạn thân bài • phần kết luận ngắn. Thời gian: 25 phút.",
      targetWords: "A: 150+ từ; B: mở bài + một đoạn thân bài + kết luận ngắn",
      guidance: "Bài viết có bấm giờ phải đúng phần bài và dành thời gian rà soát. So sánh với Checkpoint Ngày 7: overview có bị bỏ trong áp lực không? Câu có trở nên quá dài khi vội?",
      modelAnswer: "",
      examinerNotes: "Ghi lỗi do bỏ kiểm tra (timer pressure errors) riêng khỏi lỗi kiến thức. Mỗi lỗi xếp vào một trong bốn nhóm nguyên nhân áp lực."
    },
    speaking: {
      part: "Bài thi thử Speaking (ghi âm liên tục, không dừng giữa chừng)",
      prompt: "Part 1:\n1. Do you often do several things at the same time?\n2. What usually distracts you?\n3. Are you good at replying to messages quickly?\n4. Do you prefer a busy or quiet workplace?\n\nPart 2: Describe a time when you had to manage several responsibilities.\n\nPart 3:\n1. Why do workplaces value quick responses?\n2. Is multitasking more common now than in the past?\n3. Should schools teach students how to manage attention?",
      followUps: [
        "Why do workplaces value quick responses?",
        "Is multitasking more common now than in the past?"
      ],
      selfEvaluationCriteria: [
        "Phiếu theo dõi áp lực: ghi sự việc theo thời điểm cụ thể (VD: 'Ở phút x, tôi dừng lâu trước động từ vì...')",
        "Xác định chỗ mất mạch, lặp ý, lỗi phát âm tăng khi vội",
        "Chọn một nguyên nhân chính cho mỗi lỗi và một bài tập ngắn mô phỏng lại áp lực"
      ]
    },
    vocabulary: [
      { term: "cognitive load", pos: "noun phrase", phonetic: "tải nhận thức", meaning: "tải nhận thức", example: "Multitasking increases cognitive load." },
      { term: "task switching", pos: "noun phrase", phonetic: "chuyển đổi nhiệm vụ", meaning: "chuyển đổi nhiệm vụ", example: "Frequent task switching reduces efficiency." },
      { term: "reconstruct context", pos: "verb phrase", phonetic: "dựng lại bối cảnh", meaning: "dựng lại bối cảnh", example: "Workers need time to reconstruct context." },
      { term: "an accumulated cost", pos: "noun phrase", phonetic: "chi phí tích lũy", meaning: "chi phí tích lũy", example: "Small delays create an accumulated cost." },
      { term: "visible activity", pos: "noun phrase", phonetic: "hoạt động dễ quan sát", meaning: "hoạt động dễ quan sát", example: "Visible activity is not always valuable output." },
      { term: "deep work", pos: "noun phrase", phonetic: "công việc tập trung sâu", meaning: "công việc tập trung sâu", example: "Deep work needs uninterrupted time." },
      { term: "routine administrative work", pos: "noun phrase", phonetic: "việc hành chính lặp lại", meaning: "việc hành chính lặp lại", example: "Routine administrative work tolerates interruption better." },
      { term: "immediate responsiveness", pos: "noun phrase", phonetic: "phản hồi tức thì", meaning: "phản hồi tức thì", example: "Some companies reward immediate responsiveness." },
      { term: "protect focused time", pos: "verb phrase", phonetic: "bảo vệ thời gian tập trung", meaning: "bảo vệ thời gian tập trung", example: "Managers should protect focused time." },
      { term: "group similar tasks", pos: "verb phrase", phonetic: "gom việc giống nhau", meaning: "gom việc giống nhau", example: "I group similar tasks and answer messages together." },
      { term: "meeting-free period", pos: "noun phrase", phonetic: "khoảng thời gian không họp", meaning: "khoảng thời gian không họp", example: "The team introduced a meeting-free period." },
      { term: "online visibility", pos: "noun phrase", phonetic: "mức độ hiện diện trực tuyến", meaning: "mức độ hiện diện trực tuyến", example: "Online visibility should not replace performance." },
      { term: "an avoidable error", pos: "noun phrase", phonetic: "lỗi có thể tránh", meaning: "lỗi có thể tránh", example: "Misreading the instruction was an avoidable error." },
      { term: "quality drops under pressure", pos: "phrase", phonetic: "chất lượng giảm dưới áp lực", meaning: "chất lượng giảm dưới áp lực", example: "My sentence control drops under pressure." }
    ],
    grammar: {
      title: "Kiểm tra ngữ pháp tổng hợp Tuần 2",
      explanation: "Sửa các câu trong giới hạn mười phút rồi phân loại lỗi theo hòa hợp chủ ngữ - động từ, cấu trúc song song, dạng động từ, giới từ và collocation. Sau lượt sửa, viết thêm một câu mới cho hai loại lỗi xuất hiện nhiều nhất.",
      drillQuestion: "1. The figure for working adults were the highest in study and work.\n2. People who multitasks often makes more errors.\n3. Although messages are useful, but they interrupt concentration.\n4. Employees are expected replying immediately.\n5. Deep work requires to hold several ideas in memory.\n6. The amount of gaming hours were lower among older adults.\n7. Social media accounted the second largest use for three groups.\n8. The reason is because quick replies are visible.\n9. Workers may be less productivity when they switch too often.\n10. It depends in the complexity of the task.",
      sampleAnswer: "1. The figure for working adults WAS the highest in study and work. (chủ ngữ - động từ)\n2. People who MULTITASK OFTEN MAKE more errors. (chủ ngữ - động từ)\n3. Although messages are useful, they interrupt concentration. / Messages are useful, but they interrupt concentration. (trùng although + but)\n4. Employees are expected TO REPLY immediately. (dạng động từ)\n5. Deep work requires HOLDING several ideas in memory. (dạng động từ)\n6. The number of gaming hours was lower among older adults. (The amount + was; hours đếm được → the number of)\n7. Social media ACCOUNTED FOR the second largest use for three groups. (giới từ: account for)\n8. The reason is THAT quick replies are visible. (cấu trúc reason is that)\n9. Workers may be less PRODUCTIVE when they switch too often. (dạng từ: productivity → productive)\n10. It depends ON the complexity of the task. (giới từ: depend on)"
    },
    deliverables: [
      "Bài Reading có bấm giờ (Day14-Reading)",
      "Bài Writing có bấm giờ (Day14-Writing)",
      "Bài thi thử Speaking ngắn + bản ghi âm (Day14-Speaking)",
      "Phiếu theo dõi áp lực (Day14-Pressure-Log)",
      "Ba ưu tiên cho Tuần 3 (Day14-Week2-Review)"
    ]
  }
];