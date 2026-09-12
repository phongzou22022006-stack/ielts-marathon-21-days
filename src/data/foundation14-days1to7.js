// Lộ trình 14 ngày cho người mất gốc - Faithful transcription: Ngày 1-7
// Source: "Lộ trình 14 ngày cho người mất gốc tiếng Anh nền tảng" - The Forum Center (Nguyễn Hoàng Huy)

import { makeListening } from './listeningFactory.js';

export const FOUNDATION_DAYS_1_7 = [
  // ============================================================ F DAY 01
  {
    day: 1,
    phase: 1,
    title: "Ngày 01: Cấu trúc cơ bản của câu",
    theme: "Cấu trúc câu đơn: be và động từ hành động",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu: phân biệt được hai kiểu vị ngữ cơ bản và tự viết ít nhất năm câu giới thiệu bản thân. Kiểu thứ nhất dùng be trước danh từ, tính từ hoặc cụm chỉ nơi chốn (I am a student). Kiểu thứ hai dùng một động từ hành động như study, work, live, like (I study marketing). Hai lỗi cần tránh: đặt be trước động từ hành động ở hiện tại đơn (SAI: I am study English) và bỏ be sau chủ ngữ khi cần (SAI: She very friendly). Mỗi câu chỉ nên mang một hoặc hai ý rõ ràng; độ chính xác của cấu trúc được kiểm soát trước độ dài.",
    checklist: [
      "Năm câu giới thiệu bản thân có chủ ngữ và động từ rõ (7.7)",
      "Tám câu bài tập sửa câu đã đối chiếu đáp án (7.6)",
      "Bảng ghi lỗi bốn dòng: câu cũ, lí do sai, câu sửa, một câu mới cùng cấu trúc",
      "Bài ôn năm phút: một câu S + be + adjective, một câu S + action verb + object, ba cụm từ",
      "Tự nói lại năm câu khi đóng tài liệu (chỉ nhìn từ khóa)"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Định hướng", note: "Mục tiêu + hai kiểu vị ngữ cần nhận biết" },
        { time: "05-20m", name: "Ngữ liệu & quan sát cấu trúc", note: "Đọc đoạn về Mai, gạch chân be và động từ hành động" },
        { time: "20-35m", name: "Bài tập sửa câu", note: "Tám câu 7.6; 75': thêm bài ôn năm phút 7.8" },
        { time: "35-40m", name: "Tạo đầu ra", note: "Viết năm câu về bản thân + nói lại không nhìn" },
        { time: "40-45m", name: "Ôn lại & Bảng lỗi", note: "Đóng tài liệu, ghi một lỗi theo mẫu bốn dòng" }
      ]
    },
    reading: {
      title: "Ngữ liệu - I'm Mai (Cấu trúc câu giới thiệu bản thân)",
      source: "Lộ trình 14 ngày - Ngày 01, mục 7.2",
      strategy: "Đọc ngữ liệu để nhận ra hai kiểu vị ngữ: be + danh từ/tính từ/nơi chốn và một động từ hành động + tân ngữ/chi tiết.",
      passage: "Hi, I'm Mai. I'm from Can Tho, but I live in Ho Chi Minh City now. I'm a university student, and I study marketing. I like quiet coffee shops because I can focus there. I'm still nervous when I speak English, but I want to improve.",
      questions: [
        { id: "f1-q1", type: "short_answer", text: "Sửa câu: She friendly and patient.", options: [], correct: "She is friendly and patient.", explanation: "Thiếu be trước tính từ: câu cần is." },
        { id: "f1-q2", type: "short_answer", text: "Sửa câu: I am study English every evening.", options: [], correct: "I study English every evening.", explanation: "Không đặt be trước động từ hành động ở hiện tại đơn." },
        { id: "f1-q3", type: "short_answer", text: "Sửa câu: My brother is play football on Sunday.", options: [], correct: "My brother plays football on Sunday.", explanation: "Bỏ be; thêm -s cho chủ ngữ số ít." },
        { id: "f1-q4", type: "short_answer", text: "Sửa câu: There have many cafés near my school.", options: [], correct: "There are many cafés near my school.", explanation: "Diễn đạt sự tồn tại dùng there are, không dùng there have." },
        { id: "f1-q5", type: "short_answer", text: "Sửa câu: I tired after class.", options: [], correct: "I am tired after class.", explanation: "Tính từ tired cần be đứng trước." },
        { id: "f1-q6", type: "short_answer", text: "Sửa câu: Technology make life easier.", options: [], correct: "Technology makes life easier.", explanation: "Chủ ngữ số ít → thêm -s vào động từ." },
        { id: "f1-q7", type: "short_answer", text: "Sửa câu: My parents are live in Hue.", options: [], correct: "My parents live in Hue.", explanation: "Không dùng be trước động từ hành động live." },
        { id: "f1-q8", type: "short_answer", text: "Sửa câu: The room small but comfortable.", options: [], correct: "The room is small but comfortable.", explanation: "Hai tính từ sau chủ ngữ cần be." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Ngữ liệu, câu 4 (I like quiet coffee shops...)",
        paraphrasePair: "be + tính từ <-> trạng thái; động từ hành động <-> hoạt động",
        errorReason: "Ghi rõ: đặt be trước động từ; bỏ be trước tính từ; quên -s với chủ ngữ số ít."
      }
    },
    writing: {
      task: "Bài viết: Năm câu giới thiệu bản thân",
      prompt: "Viết năm câu có thông tin thật về bản thân, theo gợi ý:\n1. I am ...\n2. I am from ...\n3. I live ...\n4. I study/work ...\n5. In my free time, I ...",
      targetWords: "5 câu ngắn (mỗi câu 5-9 từ)",
      guidance: "Sau khi viết, đóng tài liệu và nói lại năm câu. Nếu quên, chỉ cần nhìn từ khóa, không đọc nguyên câu mẫu. Kiểm tra mỗi câu: có chủ ngữ không? Động từ là be hay động từ hành động? Nếu câu dùng chủ ngữ số ít, động từ thêm -s/-es chưa?",
      modelAnswer: "Hi, I'm Mai. I'm from Can Tho, but I live in Ho Chi Minh City now. I'm a university student, and I study marketing. I like quiet coffee shops because I can focus there. I'm still nervous when I speak English, but I want to improve.",
      examinerNotes: "Đoạn mẫu truyền đạt đủ sáu loại thông tin: danh tính, nơi ở, ngành học, sở thích, lí do và cảm xúc. Mỗi câu mang một hoặc hai ý rõ; sử dụng cả be và động từ hành động."
    },
    speaking: {
      part: "Nói lại: Giới thiệu bản thân (tự ghi âm ngắn)",
      prompt: "Đóng tài liệu và nói lại năm câu giới thiệu bản thân. Chỉ nhìn các từ khóa: I am / I am from / I live / I study-work / In my free time.\nNếu quên, đừng đọc nguyên câu mẫu; tự cố gắng tạo câu mới có thông tin thật.",
      followUps: [
        "Năm câu có đủ chủ ngữ và động từ không?",
        "Câu nào dùng be, câu nào dùng động từ hành động?",
        "Bạn có ngập ngừng ở chỗ nào? Ghi lại thời điểm để tự sửa."
      ],
      selfEvaluationCriteria: [
        "Nói liên tục được 5 câu không đọc tài liệu",
        "Mỗi câu có chủ ngữ rõ ràng",
        "Không dùng be trước động từ hành động"
      ]
    },
    vocabulary: [
      { term: "be from", pos: "verb phrase", phonetic: "đến từ", meaning: "đến từ", example: "I'm from Vung Tau." },
      { term: "live in", pos: "verb phrase", phonetic: "sống ở", meaning: "sống ở", example: "I live in Ho Chi Minh City." },
      { term: "study at", pos: "verb phrase", phonetic: "học tại", meaning: "học tại", example: "I study at a local university." },
      { term: "study + subject", pos: "verb phrase", phonetic: "học môn/ngành", meaning: "học môn/ngành", example: "I study business." },
      { term: "work in + field", pos: "verb phrase", phonetic: "làm việc trong lĩnh vực", meaning: "làm việc trong lĩnh vực", example: "I work in education." },
      { term: "be interested in", pos: "verb phrase", phonetic: "quan tâm/thích", meaning: "quan tâm/thích", example: "I'm interested in psychology." },
      { term: "in my free time", pos: "adverb phrase", phonetic: "lúc rảnh", meaning: "lúc rảnh", example: "In my free time, I watch films." },
      { term: "want to improve", pos: "verb phrase", phonetic: "muốn cải thiện", meaning: "muốn cải thiện", example: "I want to improve my speaking." }
    ],
    grammar: {
      title: "Ngữ pháp: be và động từ hành động ở hiện tại đơn",
      explanation: "Kiểu câu dùng be: S + be + danh từ/tính từ/cụm nơi chốn (I am a student. / She is friendly. / They are at home.). Kiểu câu dùng động từ hành động: S + action verb + object/detail (I study marketing.). Với he/she/it hoặc danh từ số ít, động từ thêm -s/-es: My brother plays football, nhưng My parents play football.",
      drillQuestion: "SỬA LỖI (giữ cấu trúc vừa đủ):\n1. I am study English every evening.\n2. My brother is play football on Sunday.\n3. She very friendly.\n4. Technology make life easier.\n\nPHÁT TRIỂN CÂU (thêm từng thành phần):\n1. I am a student.\n2. I am a university student.\n3. I am a university student in Ho Chi Minh City.\n4. I am a university student in Ho Chi Minh City, and I study business.",
      sampleAnswer: "1. I study English every evening.\n2. My brother plays football on Sunday.\n3. She is very friendly.\n4. Technology makes life easier.\n\nThang câu mẫu: mỗi dòng chỉ thêm một thành phần có chức năng rõ. Khi câu mới xuất hiện nhiều lỗi, quay lại dòng trước và kiểm tra chủ ngữ cùng động từ."
    },
    deliverables: [
      "F14-Day01-5IntroSentences.txt",
      "F14-Day01-SentenceFix.txt",
      "F14-Day01-ErrorLog.txt",
      "F14-Day01-5minReview.txt",
      "F14-Day01-Speaking.webm"
    ]
  },

  // ============================================================ F DAY 02
  {
    day: 2,
    phase: 1,
    title: "Ngày 02: Câu hỏi và câu phủ định",
    theme: "Câu hỏi và phủ định với be / do-does",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu: đặt được câu hỏi và câu phủ định với be hoặc do/does. Cách chọn trợ động từ dựa trên động từ của câu khẳng định, không dựa vào nghĩa tiếng Việt. Nếu động từ chính là be: đưa be lên trước chủ ngữ khi hỏi, thêm not khi phủ định. Nếu động từ chính là động từ hành động ở hiện tại đơn: dùng do/does và động từ chính trở về dạng gốc (SAI: Does he lives here? ĐÚNG: Does he live here?). Chú ý: I didn't went out sai; I didn't go out đúng.",
    checklist: [
      "Sáu câu hỏi và bốn câu phủ định đã viết và đối chiếu (8.5)",
      "Bốn câu trả lời Speaking, mỗi câu gồm hai câu (8.6)",
      "Một lỗi ghi vào bảng lỗi theo mẫu bốn dòng (8.7)",
      "Tám cụm từ sinh hoạt đã dùng trong câu cá nhân",
      "Nói lại một lượt hội thoại mẫu khi đóng tài liệu"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Định hướng", note: "Chọn trợ động từ theo động từ chính, không theo tiếng Việt" },
        { time: "05-20m", name: "Hội thoại mẫu", note: "Đọc 8.2, nhận diện do/does và be trong câu hỏi" },
        { time: "20-35m", name: "Bài tập viết câu", note: "6 câu hỏi + 4 câu phủ định (8.5), đối chiếu đáp án" },
        { time: "35-40m", name: "Bài tập Speaking", note: "Trả lời 4 câu, mỗi câu 2 câu nói (8.6)" },
        { time: "40-45m", name: "Ôn lại & Bảng lỗi", note: "Ghi một lỗi theo mẫu 4 dòng (8.7)" }
      ]
    },
    reading: {
      title: "Ngữ liệu - Hội thoại mẫu (câu hỏi với do và be)",
      source: "Lộ trình 14 ngày - Ngày 02, mục 8.2",
      strategy: "Trước khi chuyển câu sang dạng hỏi/phủ định, gạch chân động từ chính. be → đưa lên trước/ thêm not; động từ hành động → dùng do/does và đưa động từ về gốc.",
      passage: "A: Do you work or study? B: I study graphic design. A: Are you busy this week? B: Yes, I am. I have two assignments. A: Do you study at home? B: Most of the time, yes. I don't study well in noisy places.",
      questions: [
        { id: "f2-q1", type: "short_answer", text: "Viết câu hỏi: You like coffee.", options: [], correct: "Do you like coffee?", explanation: "like là động từ hành động → dùng Do." },
        { id: "f2-q2", type: "short_answer", text: "Viết câu hỏi: She is tired.", options: [], correct: "Is she tired?", explanation: "Động từ chính là be → đưa is lên trước chủ ngữ." },
        { id: "f2-q3", type: "short_answer", text: "Viết câu hỏi: He works near here.", options: [], correct: "Does he work near here?", explanation: "works (hiện tại đơn) → Does; work về dạng gốc." },
        { id: "f2-q4", type: "short_answer", text: "Viết câu hỏi: They are ready.", options: [], correct: "Are they ready?", explanation: "be → Are lên trước chủ ngữ." },
        { id: "f2-q5", type: "short_answer", text: "Viết câu hỏi: Your sister studies English.", options: [], correct: "Does your sister study English?", explanation: "studies → Does ... study (về dạng gốc)." },
        { id: "f2-q6", type: "short_answer", text: "Viết câu hỏi: The room is quiet.", options: [], correct: "Is the room quiet?", explanation: "be → Is lên trước chủ ngữ." },
        { id: "f2-q7", type: "short_answer", text: "Viết câu phủ định: I study well in noisy places.", options: [], correct: "I don't study well in noisy places.", explanation: "don't + động từ gốc." },
        { id: "f2-q8", type: "short_answer", text: "Viết câu phủ định: She has enough time.", options: [], correct: "She doesn't have enough time.", explanation: "has (chủ ngữ số ít) → doesn't have." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Hội thoại mẫu, lượt A1",
        paraphrasePair: "work or study <-> study graphic design; busy <-> have two assignments",
        errorReason: "Ghi rõ: chọn trợ động từ theo tiếng Việt; sau does/did dùng sai dạng động từ."
      }
    },
    writing: {
      task: "Bài viết: Sáu câu hỏi phỏng vấn về sinh hoạt",
      prompt: "Viết sáu câu hỏi để phỏng vấn bạn học về sinh hoạt hằng ngày. Dùng cả hai dạng: be (Are you...?) và do/does (Do you...?). Sau đó viết câu trả lời mẫu cho hai câu hỏi quan trọng nhất.",
      targetWords: "6 câu hỏi + 2 câu trả lời (mỗi câu trả lời 2 câu)",
      guidance: "Trước khi viết, xác định động từ chính trong câu khẳng định để chọn trợ động từ. Nếu dùng động từ hành động, nhớ đưa động từ về dạng gốc sau do/does. Câu trả lời nên gồm câu trả lời trực tiếp + một lí do hoặc chi tiết.",
      modelAnswer: "Do you work or study? I study graphic design. Are you busy this week? Yes, I am. I have two assignments. Do you study at home? Most of the time, yes. I don't study well in noisy places.",
      examinerNotes: "Hội thoại mẫu phối hợp cả hai kiểu trợ từ: Do you work or study? (hành động) và Are you busy this week? (be). Câu đối nêu trực tiếp rồi thêm chi tiết."
    },
    speaking: {
      part: "Speaking - Trả lời bốn câu, mỗi câu hai câu nói",
      prompt: "Trả lời mỗi câu bằng HAI câu. Câu đầu trả lời trực tiếp; câu sau thêm một lí do hoặc chi tiết:\n1. Do you study English every day?\n2. Are you usually busy in the evening?\n3. Do you prefer studying alone?\n4. Are you confident when you speak English?",
      followUps: [
        "Câu trả lời có gồm cả câu khẳng định hoặc phủ định đúng dạng?",
        "Trả lời trực tiếp có dùng đúng trợ động từ không?",
        "Có tạo được một câu mới cùng cấu trúc khi sửa lỗi không?"
      ],
      selfEvaluationCriteria: [
        "Mỗi câu trả lời có đủ 2 câu nói",
        "Dùng đúng be / do / does khi trả lời",
        "Có ít nhất một lí do hoặc chi tiết"
      ]
    },
    vocabulary: [
      { term: "have class", pos: "verb phrase", phonetic: "có tiết học", meaning: "có tiết học", example: "I have class in the morning." },
      { term: "get home", pos: "verb phrase", phonetic: "về đến nhà", meaning: "về đến nhà", example: "I get home at around six." },
      { term: "take a break", pos: "verb phrase", phonetic: "nghỉ giải lao", meaning: "nghỉ giải lao", example: "I take a short break after work." },
      { term: "be busy with", pos: "verb phrase", phonetic: "bận làm gì", meaning: "bận làm gì", example: "I'm busy with an assignment." },
      { term: "spend time on", pos: "verb phrase", phonetic: "dành thời gian cho", meaning: "dành thời gian cho", example: "I spend time on pronunciation." },
      { term: "study on my own", pos: "verb phrase", phonetic: "tự học", meaning: "tự học", example: "I usually study on my own." },
      { term: "feel tired after", pos: "verb phrase", phonetic: "cảm thấy mệt sau", meaning: "cảm thấy mệt sau", example: "I feel tired after a long day." },
      { term: "have enough time", pos: "verb phrase", phonetic: "có đủ thời gian", meaning: "có đủ thời gian", example: "I don't have enough time today." }
    ],
    grammar: {
      title: "Ngữ pháp: Chọn trợ động từ be hay do/does",
      explanation: "Động từ chính là be (is/are/am) → câu hỏi đưa be lên trước; phủ định thêm not (She is not tired; Is she tired?). Động từ chính là động từ hành động ở hiện tại đơn → dùng do/does và động từ chính về gốc (Does she study English?; She does not study English.).",
      drillQuestion: "ĐIỀN TRỢ ĐỘNG TỪ (be hoặc do/does):\n1. ___ your sister work here?\n2. ___ the room quiet?\n3. ___ you like coffee?\n4. ___ they ready?\n\nSỬA LỖI:\n1. Does he lives here?\n2. She doesn't likes coffee.\n3. I didn't went out.",
      sampleAnswer: "1. Does your sister work here? (work là hành động)\n2. Is the room quiet? (be)\n3. Do you like coffee? (hành động)\n4. Are they ready? (be)\n\n1. Does he live here?\n2. She doesn't like coffee.\n3. I didn't go out."
    },
    deliverables: [
      "F14-Day02-Questions10.txt",
      "F14-Day02-Speaking4.txt",
      "F14-Day02-ErrorLog.txt",
      "F14-Day02-VocabSentences.txt"
    ]
  },

  // ============================================================ F DAY 03
  {
    day: 3,
    phase: 1,
    title: "Ngày 03: Thời điểm và dạng động từ",
    theme: "Bốn vùng thời gian: habit / now / past / plan",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu: nhận ra bốn vùng thời gian quen thuộc và chọn cấu trúc dựa trên ý nghĩa của câu: thói quen (present simple, usually), hành động đang diễn ra (present continuous, at the moment), sự việc đã kết thúc (past simple, yesterday), kế hoạch gần (be going to / will, next week). Khi tự viết câu, tìm mốc thời gian trước rồi xác định loại sự việc; đừng chọn thì theo cảm giác.",
    checklist: [
      "Sáu câu bài tập sửa câu đã đối chiếu (9.6)",
      "Bốn câu cá nhân theo bốn thời điểm (9.7)",
      "Một bản ghi âm ngắn đọc bốn câu, ngắt theo cụm ý",
      "Bài ôn 9.8: viết lại bốn nhóm mốc thời gian + một câu mẫu mỗi nhóm",
      "Một lỗi bảng lại theo mẫu bốn dòng"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Định hướng", note: "4 vùng thời gian: habit, now, finished past, plan" },
        { time: "05-20m", name: "Ngữ liệu 9.3", note: "Một sự việc ở bốn thời điểm + bảng từ chỉ thời gian" },
        { time: "20-35m", name: "Bài tập sửa câu", note: "6 câu 9.6, đối chiếu đáp án và giải thích" },
        { time: "35-40m", name: "Tạo đầu ra", note: "Viết 4 câu thật + ghi âm nói 4 câu" },
        { time: "40-45m", name: "Ôn lại 9.8", note: "Che bảng, viết lại 4 nhóm mốc + câu mẫu" }
      ]
    },
    reading: {
      title: "Ngữ liệu - I usually study for about twenty minutes... (bốn thời điểm)",
      source: "Lộ trình 14 ngày - Ngày 03, mục 9.3",
      strategy: "Tên thì chỉ giúp phân loại. Khi viết hoặc chọn, tìm mốc thời gian (usually, at the moment, yesterday, tomorrow) rồi xác định loại sự việc: thói quen, đang diễn ra, đã kết thúc hay có kế hoạch.",
      passage: "I usually study for about twenty minutes after dinner. At the moment, I'm reviewing phrases from yesterday. Last night, I recorded a short speaking answer, and it was better than I expected. Tomorrow, I'm going to listen to it again and repair two sentences.",
      questions: [
        { id: "f3-q1", type: "short_answer", text: "Sửa câu: I am usually study at night.", options: [], correct: "I usually study at night.", explanation: "thói quen → present simple; bỏ be trước động từ." },
        { id: "f3-q2", type: "short_answer", text: "Sửa câu: Yesterday, I go to the library.", options: [], correct: "Yesterday, I went to the library.", explanation: "yesterday là quá khứ kết thúc → past simple." },
        { id: "f3-q3", type: "short_answer", text: "Sửa câu: Look! It rains heavily.", options: [], correct: "Look! It is raining heavily.", explanation: "Look! / at the moment → present continuous." },
        { id: "f3-q4", type: "short_answer", text: "Sửa câu: I am go to take an English course next month.", options: [], correct: "I am going to take an English course next month.", explanation: "kế hoạch → be going to + động từ gốc." },
        { id: "f3-q5", type: "short_answer", text: "Sửa câu: Last weekend, she doesn't stay at home.", options: [], correct: "Last weekend, she didn't stay at home.", explanation: "Quá khứ kết thúc → didn't + động từ gốc (stay)." },
        { id: "f3-q6", type: "short_answer", text: "Sửa câu: I study right now, so I can't talk.", options: [], correct: "I am studying right now, so I can't talk.", explanation: "right now → present continuous." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Ngữ liệu, câu 3",
        paraphrasePair: "reviewing <-> studying; yesterday <-> last night; tomorrow <-> is going to",
        errorReason: "Ghi rõ: không dựa vào mốc thời gian; dùng sai dạng be+V-ing; quên past simple của động từ bất quy tắc."
      }
    },
    writing: {
      task: "Bài viết: Bốn câu theo bốn thời điểm",
      prompt: "Hoàn thành bốn câu bằng thông tin thật:\n1. I usually ...\n2. At the moment, I ...\n3. Yesterday, I ...\n4. Next week, I'm going to ...",
      targetWords: "4 câu, mỗi câu 6-12 từ",
      guidance: "Trước khi viết, chọn mốc thời gian và loại sự việc. Present simple cho thói quen; am/is/are + V-ing cho hành động đang diễn ra; past simple cho việc đã kết thúc; be going to cho kế hoạch đã có.",
      modelAnswer: "I usually study for about twenty minutes after dinner. At the moment, I'm reviewing phrases from yesterday. Last night, I recorded a short speaking answer, and it was better than I expected. Tomorrow, I'm going to listen to it again and repair two sentences.",
      examinerNotes: "Bốn câu dùng bốn cấu trúc khác nhau và bốn mốc thời gian rõ. Câu cuối dùng be going to vì kế hoạch đã có trước lúc nói."
    },
    speaking: {
      part: "Speaking - Ghi âm bốn câu theo bốn thời điểm",
      prompt: "Nói bốn câu thành một bản ghi âm ngắn. Ngắt sau mỗi ý và giữ rõ các từ chỉ thời gian: usually, at the moment, yesterday, next week.\nNếu sửa lỗi nhiều quá một lượt, chỉ sửa một câu và một điểm phát âm rồi ghi âm lại đúng phần đã sửa.",
      followUps: [
        "Có ngắt giữa các cụm ý không?",
        "Từ chỉ thời gian có được nói rõ không?",
        "Bốn câu có dùng đúng bốn cấu trúc không?"
      ],
      selfEvaluationCriteria: [
        "Câu nào sai về mốc thời gian hoặc dạng động từ",
        "Âm cuối của went, recorded, going to có rõ không",
        "Ngập ngừng dài nhất ở đâu"
      ]
    },
    vocabulary: [
      { term: "usually / often / every day", pos: "adverb phrase", phonetic: "thói quen", meaning: "thói quen (tín hiệu present simple)", example: "I usually review vocabulary before bed." },
      { term: "now / at the moment / currently", pos: "adverb phrase", phonetic: "thời điểm hiện tại", meaning: "thời điểm hiện tại (present continuous)", example: "I'm reviewing vocabulary now." },
      { term: "yesterday / last night / two days ago", pos: "adverb phrase", phonetic: "quá khứ đã kết thúc", meaning: "quá khứ đã kết thúc (past simple)", example: "I reviewed twenty phrases yesterday." },
      { term: "tonight / tomorrow / next week / soon", pos: "adverb phrase", phonetic: "kế hoạch gần", meaning: "kế hoạch gần (be going to / will)", example: "I'm going to practise speaking tonight." },
      { term: "first / then / after that / finally", pos: "adverb phrase", phonetic: "trình tự", meaning: "trình tự các bước", example: "First, I read the phrase. Then I write a sentence." }
    ],
    grammar: {
      title: "Ngữ pháp: Cách chọn thì theo bốn vùng thời gian",
      explanation: "Present simple: hoạt động lặp lại hoặc trạng thái ổn định. Present continuous: hành động đang diễn ra tại/quanh lúc nói (now, at the moment). Past simple: sự việc đã kết thúc (yesterday, last night). Be going to: kế hoạch đã có; will: quyết định tại lúc nói hoặc dự đoán đơn giản.",
      drillQuestion: "Chọn đúng cấu trúc cho mỗi câu:\n1. I usually ___ (study / am studying) at night.\n2. Yesterday, I ___ (go / went) to the library.\n3. Look! It ___ (rains / is raining) heavily.\n4. I ___ (take / am going to take) an English course next month.",
      sampleAnswer: "1. study (thói quen)\n2. went (quá khứ kết thúc)\n3. is raining (đang diễn ra, Look!)\n4. am going to take (kế hoạch đã có)"
    },
    deliverables: [
      "F14-Day03-TenseFix.txt",
      "F14-Day03-FourTimeSentences.txt",
      "F14-Day03-SpeakingAudio.webm",
      "F14-Day03-RecallTable.txt"
    ]
  },

  // ============================================================ F DAY 04
  {
    day: 4,
    phase: 1,
    title: "Ngày 04: Danh từ và mạo từ",
    theme: "Danh từ đếm được / không đếm được, a-an-the",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu: phân biệt danh từ đếm được với không đếm được, dùng a/an/the, much/many và there is/are trong một đoạn miêu tả ngắn. Danh từ không đếm được (information, advice, homework, traffic, furniture, equipment, knowledge) không đi với a/an và thường không thêm -s. Cấu trúc there is/are giới thiệu sự tồn tại; không dùng there have. a/an cho đối tượng lần đầu, the cho đối tượng người nghe đã biết.",
    checklist: [
      "Tám câu sửa lỗi danh từ/mạo từ đã đối chiếu (10.7)",
      "Một đoạn miêu tả địa điểm 6-8 câu (10.8)",
      "Có một câu there is/are trong đoạn viết",
      "Suốt 4 ngày: mười câu về bản thân và nơi sống đã tự kiểm tra",
      "Một lỗi bảng lại theo mẫu bốn dòng"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Định hướng", note: "Đếm được / không đếm được + a-an-the + there is/are" },
        { time: "05-20m", name: "Ngữ liệu 10.2", note: "Café gần trường: nhận diện mạo từ và there is/are" },
        { time: "20-35m", name: "Bài tập sửa câu", note: "8 câu 10.7, đối chiếu đáp án" },
        { time: "35-40m", name: "Tạo đầu ra", note: "Viết 6-8 câu miêu tả quán/thư viện/công viên" },
        { time: "40-45m", name: "Ôn lại", note: "Tự viết lại 4 cụm + 1 câu there is/are" }
      ]
    },
    reading: {
      title: "Ngữ liệu - There is a small café near my school... (danh từ & mạo từ)",
      source: "Lộ trình 14 ngày - Ngày 04, mục 10.2",
      strategy: "Quan sát cách dùng a/an (lần đầu nhắc), the (đã xác định), danh từ đếm được số ít/phức và there is/are để giới thiệu sự tồn tại.",
      passage: "There is a small café near my school. The café has comfortable seats and free WiFi. Many students go there to do homework or meet friends. There is a lot of traffic outside, but the café is usually quiet. I sometimes ask the owner for advice about coffee because he knows a lot about it.",
      questions: [
        { id: "f4-q1", type: "short_answer", text: "Sửa câu: She gave me an advice.", options: [], correct: "She gave me some advice / a piece of advice.", explanation: "advice là danh từ không đếm được, không đi với an." },
        { id: "f4-q2", type: "short_answer", text: "Sửa câu: There is two bus stops near my home.", options: [], correct: "There are two bus stops near my home.", explanation: "two bus stops → số nhiều, dùng there are." },
        { id: "f4-q3", type: "short_answer", text: "Sửa câu: I have many homework today.", options: [], correct: "I have a lot of homework today.", explanation: "homework không đếm được → a lot of/too much." },
        { id: "f4-q4", type: "short_answer", text: "Sửa câu: The people need enough sleep.", options: [], correct: "People need enough sleep.", explanation: "Nói chung về danh từ số nhiều → zero article." },
        { id: "f4-q5", type: "short_answer", text: "Sửa câu: This website has many useful informations.", options: [], correct: "This website has a lot of useful information.", explanation: "information không đếm được, không thêm -s." },
        { id: "f4-q6", type: "short_answer", text: "Sửa câu: I bought book about psychology.", options: [], correct: "I bought a book about psychology.", explanation: "book đếm được số ít, lần đầu nhắc → a." },
        { id: "f4-q7", type: "short_answer", text: "Sửa câu: There have a supermarket next to my house.", options: [], correct: "There is a supermarket next to my house.", explanation: "Diễn đạt tồn tại dùng there is, không dùng there have." },
        { id: "f4-q8", type: "short_answer", text: "Sửa câu: The traffic are very heavy this morning.", options: [], correct: "The traffic is very heavy this morning.", explanation: "traffic không đếm được → động từ số ít is." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Ngữ liệu, câu 1-2 (a café -> The café)",
        paraphrasePair: "a café <-> The café (lần đầu -> đã xác định)",
        errorReason: "Ghi rõ: dùng a/an với danh từ không đếm được; thêm -s vào danh từ không đếm được; nhầm there have."
      }
    },
    writing: {
      task: "Bài viết: Miêu tả địa điểm quen thuộc",
      prompt: "Viết 6-8 câu về một quán, thư viện, công viên hoặc khu phố quen thuộc. Yêu cầu: có một câu dùng there is/are, một danh từ đếm được số nhiều và một danh từ không đếm được. Lần đầu nhắc địa điểm/đồ vật dùng a/an; lần nhắc sau dùng the.",
      targetWords: "6-8 câu (khoảng 70-100 từ)",
      guidance: "Tự kiểm tra sau khi viết: câu nào dùng a/an lần đầu? the chỉ dùng khi người đọc xác định được đối tượng? Danh từ không đếm được (traffic, information, advice, homework) có bị thêm -s không?",
      modelAnswer: "There is a small café near my school. The café has comfortable seats and free WiFi. Many students go there to do homework or meet friends. There is a lot of traffic outside, but the café is usually quiet. I sometimes ask the owner for advice about coffee because he knows a lot about it.",
      examinerNotes: "Đoạn mẫu chuyển từ a café (lần đầu) sang the café (đã xác định); dùng there is/are, a lot of traffic và do homework đúng cụm từ."
    },
    speaking: {
      part: "Speaking - Đọc và nói lại đoạn miêu tả địa điểm",
      prompt: "Ghi âm: đọc thành tiếng đoạn (hoặc bài miêu tả của bạn) một lượt, rồi đóng tài liệu và nói lại ý chính trong 30-45 giây: nó ở đâu, có gì, cảm giác ra sao.",
      followUps: [
        "Có dùng được there is/are khi nói không?",
        "Danh từ không đếm được có bị nói thành số nhiều không?",
        "Có nói được ít nhất 4 câu hoàn chỉnh không?"
      ],
      selfEvaluationCriteria: [
        "Chủ ngữ và động từ ở mỗi câu có rõ không",
        "a/the có được dùng đúng không",
        "Thời gian nói ≥ 30 giây"
      ]
    },
    vocabulary: [
      { term: "a quiet area", pos: "noun phrase", phonetic: "khu vực yên tĩnh", meaning: "một khu vực yên tĩnh", example: "I live in a quiet area." },
      { term: "a convenient location", pos: "noun phrase", phonetic: "vị trí thuận tiện", meaning: "một vị trí thuận tiện", example: "The school is in a convenient location." },
      { term: "heavy traffic", pos: "noun phrase", phonetic: "giao thông đông đúc", meaning: "giao thông đông đúc", example: "There is heavy traffic at rush hour." },
      { term: "public transport", pos: "noun phrase", phonetic: "giao thông công cộng", meaning: "giao thông công cộng", example: "Public transport is affordable here." },
      { term: "a piece of advice", pos: "noun phrase", phonetic: "một lời khuyên", meaning: "một lời khuyên", example: "She gave me a useful piece of advice." },
      { term: "do homework", pos: "verb phrase", phonetic: "làm bài tập về nhà", meaning: "làm bài tập về nhà", example: "I usually do homework at the library." },
      { term: "affordable housing", pos: "noun phrase", phonetic: "nhà ở giá phải chăng", meaning: "nhà ở có giá phải chăng", example: "The city needs more affordable housing." },
      { term: "a lot of information", pos: "noun phrase", phonetic: "nhiều thông tin", meaning: "nhiều thông tin", example: "The website has a lot of information." }
    ],
    grammar: {
      title: "Ngữ pháp: a/an/the, much/many và there is/are",
      explanation: "Danh từ đếm được số ít cần a/an (I found a café). the dùng khi người nghe đã biết đối tượng (The café is quiet). Danh từ không đếm được dùng some/much/a lot of (some advice, a lot of traffic). There is a lot of traffic, nhưng There are two cafés.",
      drillQuestion: "Điền A / AN / THE / SOME (hoặc để trống nếu zero article):\n1. I found ___ café near my house.\n2. ___ café is usually quiet.\n3. She gave me ___ advice.\n4. Students need ___ sleep.\n5. There are ___ two libraries near my home.",
      sampleAnswer: "1. a (lần đầu nhắc)\n2. The (đã xác định)\n3. some (không đếm được)\n4. (zero) — nói chung\n5. (đã có số đếm two, không cần mạo từ)"
    },
    deliverables: [
      "F14-Day04-NounFix.txt",
      "F14-Day04-PlaceDescription.txt",
      "F14-Day04-ErrorLog.txt",
      "F14-Day04-Recall.txt"
    ]
  },

  // ============================================================ F DAY 05
  {
    day: 5,
    phase: 1,
    title: "Ngày 05: Học từ theo cụm",
    theme: "Collocation: make progress, pay attention, build a habit",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu: ghi nhớ các từ thường đi cùng nhau và cấu trúc ngữ pháp đi kèm. Đơn lẻ, progress chỉ cho biết nghĩa khái quát; cụm cần ghi nhớ là make progress tức là tiến bộ. Mỗi cụm từ cần đi kèm: từ đi kèm (partners), cấu trúc (pattern), một câu cá nhân và một câu hỏi ôn tập. Khả năng vận dụng được kiểm tra bằng ít nhất một câu cá nhân cho mỗi cụm.",
    checklist: [
      "Tám câu bài tập chọn từ đi kèm đã đối chiếu (11.6)",
      "Tám phiếu từ với đủ 4 thành phần (11.9)",
      "Năm câu cá nhân hóa hoàn thành bằng thông tin thật (11.7)",
      "Hôm sau: che phiếu, tự viết lại ít nhất năm cụm",
      "Một lỗi bảng lại theo mẫu bốn dòng"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Định hướng", note: "Từ đơn chỉ cho biết nghĩa; cụm từ cho sẵn một phần câu" },
        { time: "05-20m", name: "Ngữ liệu 11.3", note: "Học 3 cụm + 1 câu cá nhân mỗi cụm" },
        { time: "20-35m", name: "Bài tập chọn từ đi kèm", note: "8 câu 11.6 + cách diễn đạt tự nhiên 11.8" },
        { time: "35-40m", name: "Tạo phiếu từ", note: "Lập 8 phiếu từ 4 thành phần (11.9)" },
        { time: "40-45m", name: "Ôn lại", note: "Che phiếu, viết lại 5 cụm + 1 câu" }
      ]
    },
    reading: {
      title: "Ngữ liệu - I used to learn ten isolated words every day... (học từ theo cụm)",
      source: "Lộ trình 14 ngày - Ngày 05, mục 11.3",
      strategy: "Khi đọc, chú ý các cụm từ được gạch chân trong ngữ cảnh. Một từ đơn lẻ chưa đủ để tạo câu; ghi nhớ cụm + cấu trúc đi kèm.",
      passage: "I used to learn ten isolated words every day, but I rarely used them. Now I choose three useful phrases, write one personal sentence for each phrase and review them two days later. This method feels slower, but I make more progress because the phrases return when I speak. I also pay attention to the grammar around each phrase instead of memorising the Vietnamese meaning only.",
      questions: [
        { id: "f5-q1", type: "multiple_choice", text: "Chọn từ đi kèm đúng: ___ progress", options: ["A. make", "B. do"], correct: "A", explanation: "make progress là cụm tự nhiên; do progress sai." },
        { id: "f5-q2", type: "multiple_choice", text: "Chọn cụm đúng: ___ a habit", options: ["A. build", "B. pay"], correct: "A", explanation: "build a habit: hình thành thói quen." },
        { id: "f5-q3", type: "multiple_choice", text: "Chọn cụm đúng: ___ attention to pronunciation", options: ["A. give", "B. pay"], correct: "B", explanation: "pay attention to là cụm tự nhiên; make/build attention sai." },
        { id: "f5-q4", type: "multiple_choice", text: "Chọn cụm đúng: make/do a mistake", options: ["A. make", "B. do"], correct: "A", explanation: "make a mistake: mắc lỗi." },
        { id: "f5-q5", type: "multiple_choice", text: "Chọn cụm đúng: take/write notes", options: ["A. take", "B. write"], correct: "A", explanation: "take notes: ghi chép." },
        { id: "f5-q6", type: "multiple_choice", text: "Chọn giới từ đúng: spend time ___ vocabulary", options: ["A. on", "B. at"], correct: "A", explanation: "spend time on + noun." },
        { id: "f5-q7", type: "multiple_choice", text: "Chọn dạng đúng: feel ___", options: ["A. confidence", "B. confident"], correct: "B", explanation: "feel + adjective → confident." },
        { id: "f5-q8", type: "multiple_choice", text: "Chọn dạng đúng: stay ___", options: ["A. consistency", "B. consistent"], correct: "B", explanation: "stay + adjective → consistent." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Ngữ liệu 11.3, câu 3-4",
        paraphrasePair: "make more progress <-> phrases return when I speak",
        errorReason: "Ghi rõ: chọn từ đơn theo nghĩa tiếng Việt thay vì nhớ cụm đi kèm."
      }
    },
    writing: {
      task: "Bài viết: Phiếu học cụm từ và câu cá nhân hóa",
      prompt: "Chọn tám cụm từ trong bảng 11.4 và tạo phiếu từ với bốn thành phần cho mỗi cụm: (1) ý nghĩa tiếng Việt ngắn, (2) cấu trúc ngữ pháp, (3) một câu thật về bạn, (4) một câu hỏi ôn tập. Sau đó hoàn thành năm câu cá nhân hóa (11.7).",
      targetWords: "8 phiếu từ + 5 câu cá nhân",
      guidance: "Ví dụ phiếu từ cho make progress: PHRASE: make progress; PATTERN: make progress in/with + noun; PARTNERS: steady/real/significant progress; PERSONAL SENTENCE: I am making steady progress in reading; QUESTION: What helps you make progress?",
      modelAnswer: "PHRASE: make progress\nPATTERN: make progress in + noun\nPARTNERS: steady / real / significant progress\nPERSONAL SENTENCE: I am making steady progress in reading.\nQUESTION: What helps you make progress?",
      examinerNotes: "Phiếu từ có đủ bốn thành phần để dùng cho việc ôn tập. Cặp Anh-Việt đơn lẻ (progress = sự tiến bộ) thiếu thông tin để tạo câu."
    },
    speaking: {
      part: "Speaking - Nói lại cụm từ và câu cá nhân",
      prompt: "Đóng tài liệu, nói to tối thiểu năm cụm từ kèm câu cá nhân của bạn. Nếu quên cụm, ghi chú lại; đừng mở sách ngay — tên cụm quên là phần cần ôn.",
      followUps: [
        "Có nhớ lại được cụm + cấu trúc không?",
        "Câu nói có dùng đúng cụm trong ngữ cảnh không?",
        "Cuối tuần ôn lại: chuyển cụm sang một chủ đề khác được không?"
      ],
      selfEvaluationCriteria: [
        "Nói được ≥ 5 cụm từ đúng",
        "Mỗi câu đều có chủ ngữ và động từ rõ",
        "Ngữ điệu tự nhiên, không đọc như giấy"
      ]
    },
    vocabulary: [
      { term: "make progress", pos: "verb phrase", phonetic: "make + noun", meaning: "tiến bộ", example: "I'm making progress in speaking." },
      { term: "build a habit", pos: "verb phrase", phonetic: "build + noun", meaning: "hình thành thói quen", example: "I'm trying to build a reading habit." },
      { term: "pay attention to", pos: "verb phrase", phonetic: "to + noun/V-ing", meaning: "chú ý đến", example: "Pay attention to final sounds." },
      { term: "spend time on", pos: "verb phrase", phonetic: "on + noun", meaning: "dành thời gian cho", example: "I spend time on vocabulary review." },
      { term: "spend time + V-ing", pos: "verb phrase", phonetic: "V-ing", meaning: "dành thời gian làm gì", example: "I spend time practising pronunciation." },
      { term: "take notes", pos: "verb phrase", phonetic: "take + noun", meaning: "ghi chép", example: "I take notes in short phrases." },
      { term: "make fewer mistakes", pos: "verb phrase", phonetic: "make + noun, so sánh hơn", meaning: "mắc ít lỗi hơn", example: "I make fewer mistakes when I slow down." },
      { term: "feel more confident", pos: "verb phrase", phonetic: "feel + adjective", meaning: "cảm thấy tự tin hơn", example: "I feel more confident after practising." },
      { term: "stay consistent", pos: "verb phrase", phonetic: "stay + adjective", meaning: "duy trì đều đặn", example: "A small plan helps me stay consistent." },
      { term: "review regularly", pos: "verb phrase", phonetic: "verb + adverb", meaning: "ôn tập thường xuyên", example: "I review useful phrases regularly." },
      { term: "use something in context", pos: "verb phrase", phonetic: "in + noun", meaning: "dùng trong ngữ cảnh", example: "I remember words when I use them in context." },
      { term: "take a break", pos: "verb phrase", phonetic: "take + noun", meaning: "nghỉ giải lao", example: "I take a short break before reviewing." }
    ],
    grammar: {
      title: "Ngữ pháp: Cụm từ thường đi cùng nhau (collocation)",
      explanation: "Biết nghĩa đơn lẻ chưa đủ; ghi nhớ cụm và cấu trúc. Cách diễn đạt tự nhiên hơn: learn new words and phrases (thay vì learn vocabulary), make a lot of mistakes (thay vì do many mistakes), spend a lot of time studying (thay vì spend much time to study), feel more confident / have more confidence now (thay vì have more confidence), improving gradually / making steady progress (thay vì improve little by little).",
      drillQuestion: "CÁCH DIỄN ĐẠT TỰ NHIÊN (viết lại các ý sau, tránh dịch từng từ):\n1. Tôi rất thích học vào ban đêm.\n2. Điện thoại làm tôi mất tập trung hơn và hơn.\n3. Tôi bị áp lực vì có quá nhiều bài tập về nhà.\n4. Tôi muốn cải thiện bản thân trong tiếng Anh.",
      sampleAnswer: "1. I really enjoy studying at night.\n2. Phones distract me more and more.\n3. I am under pressure / stressed because of too much homework.\n4. I want to improve my English."
    },
    deliverables: [
      "F14-Day05-CollocationChoice.txt",
      "F14-Day05-8PhraseCards.txt",
      "F14-Day05-Personalized5.txt",
      "F14-Day05-ErrorLog.txt"
    ]
  },

  // ============================================================ F DAY 06
  {
    day: 6,
    phase: 1,
    title: "Ngày 06: Họ từ trong câu",
    theme: "Word family: improve, confidence, communicate, succeed",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu: chọn đúng dạng từ theo vị trí trong câu và nhận ra quan hệ giữa động từ, danh từ, tính từ và trạng từ. Nhìn các từ quanh chỗ trống: mạo từ/tính từ báo hiệu danh từ; be/feel/become/seem thường đi trước tính từ; động từ khuyết thiếu và to đi trước động từ nguyên mẫu; trạng từ bổ nghĩa cho cách hành động diễn ra. Không cần tạo đủ mọi dạng của một từ.",
    checklist: [
      "Mười câu chọn dạng từ đã đối chiếu và căn cứ lựa chọn (12.6)",
      "Ba câu chuyển đổi ý qua ba dạng (12.7)",
      "Bốn câu vận dụng họ từ (12.8)",
      "Tám cụm từ về sự tiến bộ trong câu cá nhân",
      "Một lỗi bảng lại theo mẫu bốn dòng"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Định hướng", note: "Động từ / danh từ / tính từ / trạng từ của cùng một họ từ" },
        { time: "05-20m", name: "Ngữ liệu + bảng họ từ", note: "12.2, 12.3: dấu hiệu ngữ pháp quanh chỗ trống" },
        { time: "20-35m", name: "Bài tập chọn dạng từ", note: "10 câu 12.6 + đối chiếu căn cứ" },
        { time: "35-40m", name: "Bài tập chuyển đổi câu", note: "12.7: biến ý qua 3 dạng" },
        { time: "40-45m", name: "Ôn lại", note: "Tự viết 2 cụm từ + kiểm tra dạng quanh chỗ trống" }
      ]
    },
    reading: {
      title: "Ngữ liệu - My first speaking recording... (họ từ trong câu)",
      source: "Lộ trình 14 ngày - Ngày 06, mục 12.2",
      strategy: "Trước khi chọn dạng từ, nhìn từ đứng trước và sau chỗ trống: mạo từ/tính từ → danh từ; be/feel/become/seem → tính từ; can/to → động từ nguyên mẫu; bổ nghĩa cho hành động → trạng từ.",
      passage: "My first speaking recording was not very clear, but it showed me what to improve. After two weeks of regular practice, I noticed a small improvement in fluency. I also became more confident because I could communicate my ideas without stopping after every sentence. The change was not dramatic, but the routine was effective because I actually used the language.",
      questions: [
        { id: "f6-q1", type: "multiple_choice", text: "I want to ___ my listening.", options: ["A. improve", "B. improvement"], correct: "A", explanation: "Sau to cần động từ nguyên mẫu." },
        { id: "f6-q2", type: "multiple_choice", text: "I noticed a clear ___ after one week.", options: ["A. improve", "B. improvement"], correct: "B", explanation: "Sau a clear cần danh từ." },
        { id: "f6-q3", type: "multiple_choice", text: "She sounded more ___ in the second recording.", options: ["A. confidence", "B. confident"], correct: "B", explanation: "Sau sound cần tính từ." },
        { id: "f6-q4", type: "multiple_choice", text: "Regular speaking practice can build ___.", options: ["A. confidence", "B. confident"], correct: "A", explanation: "Là tân ngữ của build → danh từ." },
        { id: "f6-q5", type: "multiple_choice", text: "The teacher explained the task ___.", options: ["A. clear", "B. clearly"], correct: "B", explanation: "Bổ nghĩa cho cách explained diễn ra → trạng từ." },
        { id: "f6-q6", type: "multiple_choice", text: "This is a simple but ___ method.", options: ["A. effect", "B. effective"], correct: "B", explanation: "Miêu tả danh từ method → tính từ." },
        { id: "f6-q7", type: "multiple_choice", text: "The change had a positive ___ on my motivation.", options: ["A. affect", "B. effect"], correct: "B", explanation: "Sau a positive cần danh từ → effect." },
        { id: "f6-q8", type: "multiple_choice", text: "Technology can ___ the way students learn.", options: ["A. affect", "B. effect"], correct: "A", explanation: "Sau can cần động từ nguyên mẫu → affect." },
        { id: "f6-q9", type: "multiple_choice", text: "Their answers were completely ___.", options: ["A. difference", "B. different"], correct: "B", explanation: "Sau were cần tính từ." },
        { id: "f6-q10", type: "multiple_choice", text: "The two students approached the task ___.", options: ["A. different", "B. differently"], correct: "B", explanation: "Bổ nghĩa cho động từ approached → trạng từ." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Ngữ liệu 12.2, câu 2-3",
        paraphrasePair: "a small improvement <-> noticed; became more confident <-> could communicate",
        errorReason: "Ghi rõ: chọn từ theo nghĩa mà không kiểm tra vị trí ngữ pháp; dùng từ cùng gốc sai dạng."
      }
    },
    writing: {
      task: "Bài viết: Chuyển đổi ý qua ba dạng từ",
      prompt: "Biến cùng một ý qua ba dạng như mẫu:\nVerb: My speaking improved.\nNoun: I noticed an improvement in my speaking.\nAdjective: My speaking is more fluent now.\n\nLàm tương tự với: 1. confidence; 2. communication; 3. success. Sau đó viết bốn câu vận dụng họ từ cho một kĩ năng bạn muốn cải thiện (12.8).",
      targetWords: "9 câu chuyển đổi + 4 câu vận dụng",
      guidance: "Không cần tạo đủ bốn dạng nếu câu gượng hoặc dạng đó ít dùng. Vị trí và nghĩa của câu quyết định dạng phù hợp. Câu cuối của phần vận dụng dùng một cụm trong bảng từ vựng (notice an improvement, gain confidence...).",
      modelAnswer: "Verb: My speaking improved.\nNoun: I noticed an improvement in my speaking.\nAdjective: My speaking is more fluent now.\n\n(e.g. with confidence) Verb: My confidence grows with practice. Noun: Practice gives me confidence. Adjective: I feel confident when I speak.",
      examinerNotes: "Cùng một nghĩa nền nhưng mỗi vị trí ngữ pháp cần một dạng khác nhau. Câu nào trở nên gượng dùng dạng từ khác."
    },
    speaking: {
      part: "Speaking - Nói chuyển đổi họ từ và cụm từ",
      prompt: "Ghi âm: nói ba câu chuyển đổi ý cho một trong các họ từ (confidence / communication / success) rồi thêm một câu dùng cụm từ như notice an improvement hoặc gain confidence.",
      followUps: [
        "Mỗi câu có động từ/danh từ/tính từ đúng vị trí không?",
        "Cụm từ dùng có tự nhiên trong câu nói không?",
        "Có ngắt đúng chỗ giữa các cụm ý không?"
      ],
      selfEvaluationCriteria: [
        "Nói được 4 câu liên tục",
        "Dùng đúng ít nhất 1 cụm từ trong bảng",
        "Phát âm rõ âm cuối -d, -t (improved, noticed, practised)"
      ]
    },
    vocabulary: [
      { term: "notice an improvement", pos: "verb phrase", phonetic: "nhận thấy sự cải thiện", meaning: "nhận thấy sự cải thiện", example: "I noticed an improvement in my pronunciation." },
      { term: "gain confidence", pos: "verb phrase", phonetic: "trở nên tự tin hơn", meaning: "trở nên tự tin hơn", example: "Small successes helped me gain confidence." },
      { term: "communicate an idea", pos: "verb phrase", phonetic: "truyền đạt một ý", meaning: "truyền đạt một ý", example: "I can communicate the main idea clearly." },
      { term: "an effective method", pos: "noun phrase", phonetic: "một phương pháp hiệu quả", meaning: "một phương pháp hiệu quả", example: "Retrieval is an effective review method." },
      { term: "have a positive effect on", pos: "verb phrase", phonetic: "có tác động tích cực đến", meaning: "có tác động tích cực đến", example: "Sleep has a positive effect on memory." },
      { term: "make a difference", pos: "verb phrase", phonetic: "tạo ra thay đổi", meaning: "tạo ra thay đổi", example: "Ten minutes a day can make a difference." },
      { term: "practical experience", pos: "noun phrase", phonetic: "kinh nghiệm thực tế", meaning: "kinh nghiệm thực tế", example: "Speaking gives learners practical experience." },
      { term: "succeed in + V-ing", pos: "verb phrase", phonetic: "thành công khi làm gì", meaning: "thành công khi làm gì", example: "She succeeded in building a routine." }
    ],
    grammar: {
      title: "Ngữ pháp: Dấu hiệu ngữ pháp quanh chỗ trống",
      explanation: "Sau động từ nối: feel confident, the method is effective, the two ideas are different. Danh từ làm chủ ngữ/tân ngữ: confidence grows; I noticed an improvement; the method had a positive effect. Động từ nguyên mẫu sau khuyết thiếu/to: I can communicate clearly; I want to improve. Trạng từ bổ nghĩa: she explained the idea clearly; he answered confidently; the team completed the task successfully.",
      drillQuestion: "ĐIỀN DẠNG TỪ ĐÚNG:\n1. I want to ___ my listening. (improve / improvement)\n2. I noticed a clear ___ after one week. (improve / improvement)\n3. The change had a positive ___ on my motivation. (affect / effect)\n4. Technology can ___ the way students learn. (affect / effect)\n5. Their answers were completely ___. (difference / different)",
      sampleAnswer: "1. improve (sau to — động từ nguyên mẫu)\n2. improvement (sau a clear — danh từ)\n3. effect (sau a positive — danh từ)\n4. affect (sau can — động từ nguyên mẫu)\n5. different (sau were — tính từ)"
    },
    deliverables: [
      "F14-Day06-WordFormChoice.txt",
      "F14-Day06-3Transforms.txt",
      "F14-Day06-WordFamily4.txt",
      "F14-Day06-ErrorLog.txt"
    ]
  },

  // ============================================================ F DAY 07
  {
    day: 7,
    phase: 1,
    title: "Ngày 07: Quan hệ giữa các ý",
    theme: "Liên từ: because, so, but, although, when, if",
    isCheckpoint: true,
    checkpointNum: 7,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Mục tiêu: dùng because, so, but, although, when và if để thể hiện đúng quan hệ giữa hai ý. Mỗi liên từ trả lời một câu hỏi: because = tại sao; so = kết quả là gì; but = điều gì trái dự kiến; although = điều gì vẫn đúng dù có trở ngại; when = trong tình huống nào; if = với điều kiện nào. Tránh cấu trúc although...but. Đây là mốc checkpoint tuần 1: tổng kết nền tảng câu trong 7 ngày.",
    checklist: [
      "Sáu câu chọn liên từ (13.5) + năm câu sửa quan hệ ý (13.6)",
      "Một đoạn 80-100 từ về thói quen dùng ≥ 4 liên từ (13.7)",
      "Bảng tự kiểm tra đoạn: mỗi liên từ đúng quan hệ, không có although...but",
      "Nói được ý chính mà không đọc nguyên đoạn",
      "Tổng kết Checkpoint 7: mười câu đầu-cuối đã tự kiểm tra"
    ],
    overview: {
      schedule: [
        { time: "00-05m", name: "Checkpoint + Định hướng", note: "Nhận diện chức năng 6 liên từ" },
        { time: "05-20m", name: "Ngữ liệu 13.2", note: "Đọc đoạn thói quen, gạch chân liên từ" },
        { time: "20-35m", name: "Bài tập liên từ", note: "13.5 (6 câu) + 13.6 (5 câu sửa)" },
        { time: "35-40m", name: "Viết đoạn", note: "80-100 từ về thói quen, ≥ 4 liên từ" },
        { time: "40-45m", name: "Tự kiểm tra", note: "Bảng 13.7 + nói lại ý chính" }
      ]
    },
    reading: {
      title: "Ngữ liệu - I used to study for a long time on Sunday... (quan hệ giữa các ý)",
      source: "Lộ trình 14 ngày - Ngày 07, mục 13.2",
      strategy: "Mỗi liên từ trả lời một câu hỏi khác nhau. Trước khi điền, xác định quan hệ giữa hai vế: nguyên nhân, kết quả, tương phản, nhượng bộ, thời điểm/tình huống hay điều kiện.",
      passage: "I used to study for a long time on Sunday, but I did almost nothing during the week. I forgot a lot because the gap between study sessions was too long. Now I study for twenty minutes most evenings, so the routine is easier to maintain. Although each session is short, I review more consistently. When I feel tired, I do a smaller task instead of skipping the whole day. If I continue this routine, I think my English will become more stable.",
      questions: [
        { id: "f7-q1", type: "multiple_choice", text: "I was nervous, ___ I still recorded my answer.", options: ["A. so", "B. but"], correct: "B", explanation: "Tương phản giữa lo lắng và việc vẫn ghi âm → but." },
        { id: "f7-q2", type: "multiple_choice", text: "I review words in sentences ___ I remember them better.", options: ["A. so", "B. because"], correct: "A", explanation: "Ôn trong câu dẫn đến nhớ tốt hơn — kết quả, nên dùng so." },
        { id: "f7-q3", type: "multiple_choice", text: "___ I do not understand a word, I first look at the surrounding sentence.", options: ["A. When", "B. Because"], correct: "A", explanation: "Nêu tình huống xảy ra → when." },
        { id: "f7-q4", type: "multiple_choice", text: "I set a small goal ___ I often feel overwhelmed by large plans.", options: ["A. so", "B. because"], correct: "B", explanation: "Lí do đặt mục tiêu nhỏ → because." },
        { id: "f7-q5", type: "multiple_choice", text: "___ the task was short, it showed me several important mistakes.", options: ["A. Because", "B. Although"], correct: "B", explanation: "Nhiệm vụ ngắn nhưng vẫn bộc lộ lỗi → although (nhượng bộ)." },
        { id: "f7-q6", type: "multiple_choice", text: "___ I practise regularly, I will become more confident.", options: ["A. If", "B. So"], correct: "A", explanation: "Điều kiện → if." },
        { id: "f7-q7", type: "short_answer", text: "Sửa câu: Although the lesson was difficult, but I finished it.", options: [], correct: "Although the lesson was difficult, I finished it.", explanation: "Không dùng although cùng but trong một câu." },
        { id: "f7-q8", type: "short_answer", text: "Viết lại bằng because of: I stayed at home because the rain was very heavy.", options: [], correct: "I stayed at home because of the heavy rain.", explanation: "because + mệnh đề; because of + danh ngữ." },
        { id: "f7-q9", type: "short_answer", text: "Sửa câu: I study English because improve my career.", options: [], correct: "I study English because I want to improve my career prospects.", explanation: "Mệnh đề because cần chủ ngữ và động từ." },
        { id: "f7-q10", type: "short_answer", text: "Sửa câu: If I will practise, I will improve.", options: [], correct: "If I practise, I will improve.", explanation: "Mệnh đề if ở hiện tại đơn." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ví dụ: Ngữ liệu 13.2, câu 3-4",
        paraphrasePair: "routine easier to maintain <-> study twenty minutes most evenings",
        errorReason: "Ghi rõ: dùng liên từ theo cảm giác; trùng although...but; mệnh đề because thiếu chủ ngữ."
      }
    },
    writing: {
      task: "Bài viết: Đoạn văn về thói quen học tập",
      prompt: "Viết 80-100 từ về một thói quen học tập bạn có thể duy trì. Dùng ít nhất bốn liên từ trong số: because, so, but, although, when, if. Kiểm tra quan hệ giữa hai vế trước khi chọn liên từ.",
      targetWords: "80-100 từ",
      guidance: "Bảng tự kiểm tra: mỗi liên từ thể hiện đúng quan hệ ý; không có cấu trúc although...but; đoạn có ít nhất một chi tiết cụ thể; bạn nói lại được ý chính mà không đọc nguyên đoạn.",
      modelAnswer: "I used to study for a long time on Sunday, but I did almost nothing during the week. I forgot a lot because the gap between study sessions was too long. Now I study for twenty minutes most evenings, so the routine is easier to maintain. Although each session is short, I review more consistently. When I feel tired, I do a smaller task instead of skipping the whole day. If I continue this routine, I think my English will become more stable.",
      examinerNotes: "Bốn liên từ (but, because, so, although) và hai liên từ bổ sung (when, if) đều thể hiện quan hệ rõ giữa hai vế và gắn với chi tiết cụ thể."
    },
    speaking: {
      part: "Speaking - Nói lại ý chính của đoạn (Checkpoint)",
      prompt: "Đóng tài liệu và nói trong 30-45 giây các ý chính của đoạn thói quen (hoặc đoạn bạn vừa viết) mà không đọc lại. Dùng tối thiểu hai liên từ trong khi nói.",
      followUps: [
        "Có dùng được liên từ đúng quan hệ khi nói không?",
        "Đoạn có ít nhất một chi tiết cụ thể không?",
        "Nói có tự nhiên, không nhìn tài liệu không?"
      ],
      selfEvaluationCriteria: [
        "Nói liên tục ≥ 30 giây",
        "Dùng ≥ 2 liên từ đúng",
        "Người nghe theo được ý chính"
      ]
    },
    vocabulary: [
      { term: "a manageable routine", pos: "noun phrase", phonetic: "một lịch học vừa sức", meaning: "một lịch học vừa sức", example: "I need a manageable routine." },
      { term: "set a realistic goal", pos: "verb phrase", phonetic: "đặt mục tiêu thực tế", meaning: "đặt mục tiêu thực tế", example: "Set a realistic goal for this week." },
      { term: "stick to a plan", pos: "verb phrase", phonetic: "bám sát kế hoạch", meaning: "bám sát kế hoạch", example: "It is easier to stick to a simple plan." },
      { term: "get distracted", pos: "verb phrase", phonetic: "bị mất tập trung", meaning: "bị mất tập trung", example: "I get distracted by my phone." },
      { term: "take a short break", pos: "verb phrase", phonetic: "nghỉ giải lao ngắn", meaning: "nghỉ giải lao ngắn", example: "I take a short break after twenty minutes." },
      { term: "skip a study session", pos: "verb phrase", phonetic: "bỏ một buổi học", meaning: "bỏ một buổi học", example: "I sometimes skip a study session when I am tired." },
      { term: "start again", pos: "verb phrase", phonetic: "bắt đầu lại", meaning: "bắt đầu lại", example: "Missing one day does not mean you cannot start again." },
      { term: "stay on track", pos: "verb phrase", phonetic: "duy trì đúng tiến độ", meaning: "duy trì đúng tiến độ", example: "A checklist helps me stay on track." }
    ],
    grammar: {
      title: "Ngữ pháp: because/so/but/although/when/if và because of",
      explanation: "because + mệnh đề (I stayed home because I was tired); because of + danh ngữ (I stayed home because of the heavy rain). Although A, B / A, but B (không dùng although...but). If + hiện tại đơn, mệnh đề chính dùng will.",
      drillQuestion: "ĐIỀN LIÊN TỪ: because, so, but, although, when, if (mỗi từ một lần):\n1. I was nervous, ___ I still recorded my answer.\n2. I review words in sentences ___ I remember them better.\n3. ___ I do not understand a word, I first look at the surrounding sentence.\n4. I set a small goal ___ I often feel overwhelmed by large plans.\n5. ___ the task was short, it showed me several important mistakes.\n6. ___ I practise regularly, I will become more confident.",
      sampleAnswer: "1. but\n2. so\n3. when\n4. because\n5. although\n6. if"
    },
    deliverables: [
      "F14-Day07-ConnectorChoice.txt",
      "F14-Day07-ConnectorFix.txt",
      "F14-Day07-HabitParagraph.txt",
      "F14-Day07-Checkpoint7.txt",
      "F14-Day07-Speaking.webm"
    ]
  }
];