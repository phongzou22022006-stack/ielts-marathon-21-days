// IELTS Marathon 21-Day Companion - Faithful transcription: Days 15-21
// Source: "IELTS Marathon 21-Day Companion 2026" - The Forum Center (Nguyễn Hoàng Huy)
// Giai đoạn 3: Perform & Audit (ngày 15-21). Ngày 18 = khắc phục lỗi ưu tiên; Ngày 20 = thi thử; Ngày 21 = đánh giá cuối.

import { makeListening } from './listeningFactory.js';

export const DAYS_15_21 = [
  // ============================================================ DAY 15
  {
    day: 15,
    phase: 3,
    title: "Ngày 15: Reading có bấm giờ",
    theme: "Timed Reading: phân bổ thời gian + duy trì chuẩn bằng chứng",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Reading có bấm giờ cần hai năng lực song song: phân bổ thời gian và duy trì chuẩn bằng chứng. Người học nên ghi thời điểm kết thúc từng nhóm câu để nhận ra phần nào đang tốn quá nhiều phút. Khi chữa bài, hãy phân biệt lỗi do hiểu sai, bỏ sót paraphrase, chọn theo cảm giác và quản lý thời gian. Mỗi loại lỗi cần một cách sửa khác nhau; đọc lại toàn bộ passage nhiều lần chưa chắc giải quyết được nguyên nhân. Thời gian chỉ được rút ngắn khi chuẩn bằng chứng vẫn được giữ. Nếu đã định vị đúng đoạn mà một câu vẫn tốn hơn 90 giây, hãy đánh dấu, chọn đáp án tạm thời hợp lý rồi chuyển tiếp để bảo toàn thời gian cho cả bài.",
    checklist: [
      "Hai bài đọc có bấm giờ (Bài 1: 18-20 phút, Bài 2: 20-22 phút, dự phòng rà soát 3-5 phút)",
      "Bảng ghi thời gian từng nhóm câu của mỗi bài đọc",
      "Bảng phân loại lỗi theo LOC/PARA/LOGIC/TIME/CARELESS (20.6)",
      "Mười cặp paraphrase từ Ngân hàng paraphrase (20.7)",
      "Năm câu làm lại sau 10 phút kèm dòng 'I chose this because the passage says...' (20.11)",
      "Một đoạn Writing 180-220 từ vận dụng ý tưởng từ bài đọc"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Chiến lược phân bổ thời gian", note: "Đọc kỹ phần 20.3 + quy tắc chuyển câu sau 90 giây" },
        { time: "10-35m", name: "Bài đọc 1 - Sleep & Memory", note: "18-20 phút, ghi thời điểm kết thúc từng nhóm câu" },
        { time: "35-60m", name: "Bài đọc 2 - Traditional Crafts", note: "20-22 phút; mức 60' có thể chỉ làm Bài 1 rồi rà soát kỹ" },
        { time: "60-80m", name: "Rà soát bằng chứng", note: "Bảng phân loại lỗi + 10 cặp paraphrase" },
        { time: "80-90m", name: "Vận dụng Writing/Speaking", note: "Đoạn 180-220 từ + 3 câu trả lời Speaking" }
      ]
    },
    reading: {
      title: "Ngày 15: Hai bài đọc có bấm giờ",
      source: "IELTS Marathon 21-Day Companion - Ngày 15 (mục 20.4 - 20.5)",
      strategy: "Bài 1: 18-20 phút (13 câu). Bài 2: 20-22 phút (13 câu). Quy tắc chuyển câu: nếu định vị đúng đoạn mà một câu vẫn tốn hơn 90 giây, đánh dấu, chọn đáp án tạm thời rồi chuyển tiếp.",
      passages: [
        {
          title: "Bài đọc 1 - Sleep, Memory and the Illusion of Extra Time",
          strategy: "Câu 1-5: True/False/Not Given. Câu 6-9: Multiple Choice. Câu 10-13: Sentence Completion (KHÔNG QUÁ BA TỪ).",
          passage: "A. Students facing an examination often treat sleep as flexible time. If revision is incomplete, bedtime can be delayed by an hour or two, creating the impression that the day has expanded. The trade appears sensible because the additional study is visible, while the cognitive cost of reduced sleep is delayed and harder to measure.\n\nB. Memory is not formed only during the moment of study. New information is initially fragile. During later periods, including sleep, the brain strengthens some connections, integrates material with existing knowledge and removes information that appears less useful. Researchers refer to this broad process as consolidation. Sleep is not the only time consolidation occurs, but it provides conditions that support it.\n\nC. Different stages of sleep appear to contribute in different ways. Deep sleep has been associated with the stabilisation of factual memories, while rapid-eye-movement sleep may support emotional processing and certain forms of creative association. The scientific picture remains incomplete, and researchers avoid claiming that one sleep stage has a single exclusive purpose.\n\nD. Sleep also affects attention before learning begins. A tired student may read the same paragraph several times because working memory cannot hold the earlier sentences clearly. This creates a double cost. Less information is encoded during study, and the material that is encoded may receive weaker consolidation later.\n\nE. The consequences can be hidden by familiarity. After several hours of revision, words and notes look recognisable. Students may interpret recognition as mastery, even when they cannot retrieve the information without looking. Sleep loss can make this judgement worse because tired learners are less effective at monitoring the quality of their own understanding.\n\nF. None of this means that one late night destroys learning. Human performance is resilient, and urgent situations sometimes require compromise. The greater concern is a repeated pattern in which sleep is consistently sacrificed. Small deficits accumulate, particularly when students use caffeine to delay tiredness without restoring the lost sleep.\n\nG. A more effective revision plan protects sleep by moving difficult work earlier and using the final period before bed for lighter review. Retrieval practice, in which students close the book and attempt to recall key ideas, is more informative than rereading familiar notes. The aim is not simply to spend fewer hours studying. It is to ensure that the hours used produce learning that survives until the examination.",
          questions: [
            { id: "r-d15-p1-q1", type: "true_false_not_given", text: "Students can easily measure the cognitive cost of sleeping less.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn A: 'the cognitive cost of reduced sleep is delayed and harder to measure' — ngược với 'easily measure'." },
            { id: "r-d15-p1-q2", type: "true_false_not_given", text: "The formation of memory continues after a study session has ended.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn B: 'Memory is not formed only during the moment of study... During later periods, including sleep, the brain strengthens some connections.'" },
            { id: "r-d15-p1-q3", type: "true_false_not_given", text: "Scientists have proved that each sleep stage performs one exclusive function.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn C: 'researchers avoid claiming that one sleep stage has a single exclusive purpose' (bẫy 'proved' + 'exclusive')." },
            { id: "r-d15-p1-q4", type: "true_false_not_given", text: "Lack of sleep can reduce both initial learning and later consolidation.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn D: 'Less information is encoded during study, and the material that is encoded may receive weaker consolidation later.'" },
            { id: "r-d15-p1-q5", type: "true_false_not_given", text: "The passage states that caffeine permanently damages memory.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN", explanation: "Đoạn F chỉ nói caffeine được dùng 'to delay tiredness without restoring the lost sleep'; không khẳng định caffeine làm hỏng trí nhớ vĩnh viễn." },
            { id: "r-d15-p1-q6", type: "multiple_choice", text: "Why may students believe late-night revision is useful?", options: ["A. The extra study time is immediately visible.", "B. Sleep has no effect until several weeks later.", "C. Teachers normally recommend it.", "D. Factual memory is formed only at night."], correct: "A", explanation: "Đoạn A: 'the additional study is visible, while the cognitive cost of reduced sleep is delayed and harder to measure.'" },
            { id: "r-d15-p1-q7", type: "multiple_choice", text: "What is the 'double cost' in Paragraph D?", options: ["A. Students pay for books and caffeine.", "B. Poor attention reduces encoding, and later consolidation may also be weaker.", "C. Deep sleep and REM sleep are both lost completely.", "D. Students study two subjects at once."], correct: "B", explanation: "Đoạn D: 'Less information is encoded during study, and the material that is encoded may receive weaker consolidation later.'" },
            { id: "r-d15-p1-q8", type: "multiple_choice", text: "What mistake can familiarity create?", options: ["A. Students may confuse recognition with the ability to recall independently.", "B. Students may believe unfamiliar words are easy.", "C. Students may stop using notes completely.", "D. Students may sleep earlier than necessary."], correct: "A", explanation: "Đoạn E: 'Students may interpret recognition as mastery, even when they cannot retrieve the information without looking.'" },
            { id: "r-d15-p1-q9", type: "multiple_choice", text: "What does the writer recommend for the final period before bed?", options: ["A. The hardest new material", "B. A full mock examination", "C. Lighter review and retrieval practice", "D. More caffeine"], correct: "C", explanation: "Đoạn G: 'using the final period before bed for lighter review. Retrieval practice... is more informative than rereading familiar notes.'" },
            { id: "r-d15-p1-q10", type: "sentence_completion", text: "The strengthening and integration of memory is broadly called ____.", options: [], correct: "consolidation", explanation: "Đoạn B: 'Researchers refer to this broad process as consolidation.'" },
            { id: "r-d15-p1-q11", type: "sentence_completion", text: "Tired students may struggle because their ____ cannot hold earlier sentences clearly.", options: [], correct: "working memory", explanation: "Đoạn D: 'working memory cannot hold the earlier sentences clearly.'" },
            { id: "r-d15-p1-q12", type: "sentence_completion", text: "Repeated small sleep deficits can ____.", options: [], correct: "accumulate", explanation: "Đoạn F: 'Small deficits accumulate, particularly when students use caffeine...'" },
            { id: "r-d15-p1-q13", type: "sentence_completion", text: "Retrieval practice requires students to close the book and ____ key ideas.", options: [], correct: "attempt to recall", explanation: "Đoạn G: 'students close the book and attempt to recall key ideas.'" }
          ]
        },
        {
          title: "Bài đọc 2 - Traditional Crafts in a Modern Economy",
          strategy: "Câu 14-18: Matching Headings (đoạn C-G). Câu 19-22: Yes/No/Not Given. Câu 23-26: Matching Information (đoạn A-H).",
          passage: "A. Traditional crafts are often described as cultural treasures, but the people who practise them must still earn a living. Pottery, weaving, wood carving and metalwork require time, specialist knowledge and repeated physical skill. If the income is too low, admiration alone will not persuade younger generations to continue.\n\nB. Tourism can create a market. Visitors may pay for handmade objects, watch demonstrations and share local products with wider audiences. In places with limited employment, this demand can provide important income. It can also increase pride when a practice that once seemed old-fashioned receives public attention.\n\nC. Commercial success, however, can change the object. A piece that originally required several days may be simplified to meet tourist demand. Traditional materials may be replaced with cheaper alternatives, and designs may be altered to match external expectations of what looks \"authentic\". These changes do not automatically destroy a tradition, since crafts have always evolved, but they raise questions about who controls that evolution.\n\nD. Ownership is particularly important. In some destinations, large shops and tour operators receive most of the profit, while artisans are paid only for production. The product is marketed through a cultural story, but the people who hold the knowledge have little influence over price or presentation. Tourism then preserves the appearance of tradition more effectively than the community that created it.\n\nE. Cooperatives offer one response. By sharing tools, marketing and sales platforms, artisans can reduce costs and negotiate more fairly. A cooperative can also establish quality standards and explain the meaning of designs directly to customers. This strengthens the link between income and cultural knowledge.\n\nF. Digital commerce has created further possibilities. An artisan can reach buyers without depending entirely on a local tourist season. Online storytelling allows makers to show the process, introduce materials and explain why a handmade object costs more than a factory-made copy. Yet digital success requires photography, language, shipping and customer-service skills that may be unfamiliar.\n\nG. Training programmes therefore need to respect both old and new expertise. Teaching a craft without business skills may leave artisans economically vulnerable. Teaching marketing without deep craft knowledge may produce attractive branding around increasingly shallow products. Sustainable preservation requires technical mastery, fair economic structures and the freedom for communities to decide how their traditions adapt.\n\nH. The goal should not be to freeze every craft in an imagined past. A living tradition changes because makers respond to new materials, customers and ideas. The central issue is whether adaptation allows knowledge and income to remain within the community, or whether the tradition becomes an image owned by others.",
          questions: [
            { id: "r-d15-p2-q14", type: "heading_matching", text: "Paragraph C", headings: ["I. A way for makers to gain collective power", "II. The disappearance of all tourist interest", "III. New opportunities that require unfamiliar abilities", "IV. Why admiration cannot replace income", "V. Commercial pressure and control over change", "VI. Training that connects cultural and economic survival", "VII. When profit and cultural ownership become separated", "VIII. Factory production as the only solution"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "V", explanation: "Đoạn C: thành công thương mại làm thay đổi sản phẩm và 'raise questions about who controls that evolution'." },
            { id: "r-d15-p2-q15", type: "heading_matching", text: "Paragraph D", headings: ["I. A way for makers to gain collective power", "II. The disappearance of all tourist interest", "III. New opportunities that require unfamiliar abilities", "IV. Why admiration cannot replace income", "V. Commercial pressure and control over change", "VI. Training that connects cultural and economic survival", "VII. When profit and cultural ownership become separated", "VIII. Factory production as the only solution"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "VII", explanation: "Đoạn D: cửa hàng lớn giữ lợi nhuận, thợ chỉ được trả công; lợi nhuận tách khỏi quyền làm chủ văn hóa." },
            { id: "r-d15-p2-q16", type: "heading_matching", text: "Paragraph E", headings: ["I. A way for makers to gain collective power", "II. The disappearance of all tourist interest", "III. New opportunities that require unfamiliar abilities", "IV. Why admiration cannot replace income", "V. Commercial pressure and control over change", "VI. Training that connects cultural and economic survival", "VII. When profit and cultural ownership become separated", "VIII. Factory production as the only solution"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "I", explanation: "Đoạn E: hợp tác xã — 'sharing tools, marketing and sales platforms... negotiate more fairly'." },
            { id: "r-d15-p2-q17", type: "heading_matching", text: "Paragraph F", headings: ["I. A way for makers to gain collective power", "II. The disappearance of all tourist interest", "III. New opportunities that require unfamiliar abilities", "IV. Why admiration cannot replace income", "V. Commercial pressure and control over change", "VI. Training that connects cultural and economic survival", "VII. When profit and cultural ownership become separated", "VIII. Factory production as the only solution"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "III", explanation: "Đoạn F: thương mại số mở cơ hội mới nhưng đòi kỹ năng 'that may be unfamiliar'." },
            { id: "r-d15-p2-q18", type: "heading_matching", text: "Paragraph G", headings: ["I. A way for makers to gain collective power", "II. The disappearance of all tourist interest", "III. New opportunities that require unfamiliar abilities", "IV. Why admiration cannot replace income", "V. Commercial pressure and control over change", "VI. Training that connects cultural and economic survival", "VII. When profit and cultural ownership become separated", "VIII. Factory production as the only solution"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "VI", explanation: "Đoạn G: chương trình đào tạo gắn tay nghề với kỹ năng kinh doanh — 'technical mastery, fair economic structures'." },
            { id: "r-d15-p2-q19", type: "yes_no_not_given", text: "The writer believes tourism is always harmful to traditional crafts.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn B: du lịch 'can provide important income' và tăng niềm tự hào — ngược với 'always harmful'." },
            { id: "r-d15-p2-q20", type: "yes_no_not_given", text: "Simplifying a craft item necessarily destroys the tradition.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn C: 'These changes do not automatically destroy a tradition' (bẫy 'necessarily')." },
            { id: "r-d15-p2-q21", type: "yes_no_not_given", text: "Cooperatives may help artisans communicate the cultural meaning of products.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn E: 'explain the meaning of designs directly to customers.'" },
            { id: "r-d15-p2-q22", type: "yes_no_not_given", text: "All artisans already possess the skills needed for online sales.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn F: 'digital success requires photography, language, shipping and customer-service skills that may be unfamiliar' (bẫy 'all' + 'already')." },
            { id: "r-d15-p2-q23", type: "matching_info", text: "The idea that cultural praise is insufficient if younger people cannot earn money", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "A", explanation: "Đoạn A: 'admiration alone will not persuade younger generations to continue.'" },
            { id: "r-d15-p2-q24", type: "matching_info", text: "A situation in which outsiders control price and presentation", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "D", explanation: "Đoạn D: 'large shops and tour operators receive most of the profit... people who hold the knowledge have little influence over price or presentation.'" },
            { id: "r-d15-p2-q25", type: "matching_info", text: "A warning that business education without technical depth can be harmful", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "G", explanation: "Đoạn G: 'Teaching marketing without deep craft knowledge may produce attractive branding around increasingly shallow products.'" },
            { id: "r-d15-p2-q26", type: "matching_info", text: "The view that genuine tradition is capable of change", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correct: "H", explanation: "Đoạn H: 'A living tradition changes because makers respond to new materials, customers and ideas... The goal should not be to freeze every craft.'" }
          ]
        }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Câu hỏi <-> diễn đạt trong passage (đặc biệt các nhóm từ tuyệt đối)",
        errorReason: "Mã lỗi: LOC (định vị) / PARA (ghép diễn đạt) / LOGIC (suy luận vượt văn bản) / TIME (thời gian) / CARELESS"
      }
    },
    listening: makeListening({
      day: 15,
      theme: "giấc ngủ và trí nhớ",
      type: "Part 4 (Bài giảng - Sleep and Memory)",
      part: "Part 4 (Bài giảng khoa học về giấc ngủ)",
      questions: [
        { id: "l-d15-q1", prompt: "Việc củng cố trí nhớ diễn ra mạnh nhất trong giai đoạn ngủ [ 1 ].", answer: "sâu" },
        { id: "l-d15-q2", prompt: "Bài giảng khuyến nghị người trưởng thành ngủ từ [ 2 ] giờ mỗi đêm.", answer: "7 đến 9" },
        { id: "l-d15-q3", prompt: "Việc lạm dụng [ 3 ] được nêu như một cách trì hoãn mệt mỏi.", answer: "caffeine" },
        { id: "l-d15-q4", prompt: "Kỹ thuật tự nhớ lại nội dung sau khi học được gọi là [ 4 ].", answer: "retrieval practice" }
      ]
    }),
    writing: {
      task: "Writing Task 2 - Đoạn thân bài 180-220 từ (vận dụng ý từ bài đọc)",
      prompt: "Chọn MỘT đề sau và viết đoạn thân bài sử dụng ý tưởng đã đọc, KHÔNG sao chép câu trong passage:\n\nĐỀ A: Students should reduce study time and sleep more during examination periods. To what extent do you agree or disagree?\n\nĐỀ B: Tourism is the best way to preserve traditional crafts. To what extent do you agree or disagree?",
      targetWords: "Đoạn thân bài: 180-220 từ",
      guidance: "Dùng ý tưởng từ bài đọc (cơ chế củng cố trí nhớ, retrieval practice, income of artisans, ai kiểm soát sự tiến hóa của nghề) nhưng viết lại theo chức năng của đoạn và lập trường của đề. Trước khi viết: xác định luận điểm → cơ chế → ví dụ. Sau khi viết: dành 5 phút cuối rà soát động từ chính và giới từ.",
      modelAnswer: "Gợi ý cơ chế (Đề A): Sleep protects the mechanisms that turn study into lasting memory. When students sacrifice rest, they reduce both how much new material is encoded during study and how firmly that material is consolidated later.",
      examinerNotes: "Sử dụng các 10 cặp paraphrase đã tìm ở mục 20.7 để kiểm tra xem câu của mình có vi phạm quy tắc sao chép chuỗi dài hay không."
    },
    speaking: {
      part: "Part 1 + Part 2 mở rộng (giấc ngủ & văn hóa truyền thống)",
      prompt: "Topic - Sleep and study:\n1. Do you sleep enough during busy periods?\n2. Why do students stay up late before exams?\n3. Should schools start later in the morning?\n\nTopic - Crafts and culture:\n1. Are traditional crafts popular in your country?\n2. Describe a handmade object you like.\n3. Can online shopping help traditional producers?",
      followUps: [
        "Why do students stay up late before exams?",
        "Can online shopping help traditional producers?"
      ],
      selfEvaluationCriteria: [
        "Câu trả lời có dùng ý 'vì mệt mà định vị chậm hơn' hoặc 'vì thu nhập quyết định nghề có tồn tại hay không' không?",
        "Tốc độ có tự nhiên, phân bổ thời gian nói có ổn định không?"
      ]
    },
    vocabulary: [
      { term: "memory consolidation", pos: "noun phrase", phonetic: "củng cố trí nhớ", meaning: "củng cố trí nhớ", example: "Sleep supports memory consolidation." },
      { term: "encode information", pos: "verb phrase", phonetic: "mã hóa thông tin vào trí nhớ", meaning: "mã hóa thông tin vào trí nhớ", example: "Tired students encode information less effectively." },
      { term: "retrieve information", pos: "verb phrase", phonetic: "gọi lại thông tin", meaning: "gọi lại thông tin", example: "Retrieval practice tests whether students can retrieve information." },
      { term: "confuse familiarity with mastery", pos: "verb phrase", phonetic: "nhầm quen mắt với thành thạo", meaning: "nhầm quen mắt với thành thạo", example: "Rereading can make students confuse familiarity with mastery." },
      { term: "monitor understanding", pos: "verb phrase", phonetic: "tự theo dõi mức hiểu", meaning: "tự theo dõi mức hiểu", example: "Tired learners monitor understanding less accurately." },
      { term: "a repeated sleep deficit", pos: "noun phrase", phonetic: "tình trạng thiếu ngủ kéo dài", meaning: "tình trạng thiếu ngủ kéo dài", example: "A repeated sleep deficit affects attention." },
      { term: "specialist knowledge", pos: "noun phrase", phonetic: "kiến thức chuyên biệt", meaning: "kiến thức chuyên biệt", example: "Craft production requires specialist knowledge." },
      { term: "generate income", pos: "verb phrase", phonetic: "tạo thu nhập", meaning: "tạo thu nhập", example: "Tourism can generate income for artisans." },
      { term: "meet tourist demand", pos: "verb phrase", phonetic: "đáp ứng nhu cầu khách du lịch", meaning: "đáp ứng nhu cầu khách du lịch", example: "Products may be simplified to meet tourist demand." },
      { term: "retain cultural meaning", pos: "verb phrase", phonetic: "giữ ý nghĩa văn hóa", meaning: "giữ ý nghĩa văn hóa", example: "Fair systems help crafts retain cultural meaning." },
      { term: "negotiate a fair price", pos: "verb phrase", phonetic: "thương lượng giá công bằng", meaning: "thương lượng giá công bằng", example: "Cooperatives help makers negotiate a fair price." },
      { term: "reach a wider market", pos: "verb phrase", phonetic: "tiếp cận thị trường rộng hơn", meaning: "tiếp cận thị trường rộng hơn", example: "Digital commerce allows artisans to reach a wider market." },
      { term: "economic viability", pos: "noun phrase", phonetic: "khả năng duy trì về kinh tế", meaning: "khả năng duy trì về kinh tế", example: "Preservation depends on economic viability." },
      { term: "a living tradition", pos: "noun phrase", phonetic: "truyền thống đang được duy trì", meaning: "truyền thống đang được duy trì", example: "A living tradition changes over time." }
    ],
    grammar: {
      title: "Ngân hàng paraphrase (20.7) và kỹ thuật làm lại câu (20.11)",
      explanation: "Tìm câu tương đương trong passage cho mỗi diễn đạt. Sau đó chọn 5 câu hỏi khó, chờ 10 phút rồi làm lại với dòng 'I chose this because the passage says...' — nói rõ đoạn nào khẳng định/phủ định/bỏ sót.",
      drillQuestion: "TÌM CÂU TƯƠNG ĐƯƠNG (đoạn + câu bảo chứng):\n1. The benefit seems obvious now, while the cost appears later.\n2. Connect new knowledge to what is already known.\n3. Ability to judge one's own learning.\n4. Loss that happens repeatedly over time.\n5. Create income in a place with few jobs.\n6. Change products to satisfy buyers.\n7. Retain the cultural story but weaken local control.\n8. Bargain for better conditions.\n9. Rely on more than visitors who arrive physically.\n10. Prevent tradition from becoming an image controlled by outsiders.",
      sampleAnswer: "1. Bài 1-A: 'the additional study is visible, while the cognitive cost of reduced sleep is delayed and harder to measure'.\n2. Bài 1-B: 'integrates material with existing knowledge'.\n3. Bài 1-E: 'less effective at monitoring the quality of their own understanding'.\n4. Bài 1-F: 'a repeated pattern in which sleep is consistently sacrificed' / 'small deficits accumulate'.\n5. Bài 2-B: 'In places with limited employment, this demand can provide important income'.\n6. Bài 2-C: 'simplified to meet tourist demand'.\n7. Bài 2-D: 'preserves the appearance of tradition more effectively than the community that created it'.\n8. Bài 2-E: 'share tools, marketing and sales platforms... negotiate more fairly'.\n9. Bài 2-F: 'reach buyers without depending entirely on a local tourist season'.\n10. Bài 2-H: 'whether the tradition becomes an image owned by others'.",
    },
    deliverables: [
      "Bảng thời gian từng nhóm câu (Day15-Time-Log)",
      "Bảng phân loại lỗi LOC/PARA/LOGIC/TIME/CARELESS (Day15-Error-Map)",
      "Mười cặp paraphrase (Day15-Paraphrase)",
      "Năm câu làm lại kèm bằng chứng (Day15-Redo-5)",
      "Một đoạn Writing 180-220 từ (Day15-Transfer-Writing)"
    ]
  },

  // ============================================================ DAY 16
  {
    day: 16,
    phase: 3,
    title: "Ngày 16: Writing có bấm giờ",
    theme: "Timed Writing: ưu tiên trong điều kiện hạn chế thời gian",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Bài Writing có bấm giờ cho thấy người học đang ưu tiên điều gì khi thời gian hạn chế. Sau lần viết đầu, cần tách lỗi lập luận, bố cục, dùng từ và ngữ pháp rồi chọn một nhóm có ảnh hưởng lớn nhất để sửa trước. Bản rewrite nên giữ đề và ý chính để phép so sánh có ý nghĩa. Dàn ý chỉ giữ những quyết định chi phối toàn bài: trong tám phút, mỗi dòng cần đủ cụ thể để biết đoạn văn sẽ chứng minh điều gì nhưng đủ ngắn để còn thời gian triển khai. Người học nên viết lại một đoạn thật kỹ trước khi viết thêm bài mới, nhất là khi lỗi cũ vẫn lặp lại.",
    checklist: [
      "Reading 'What Universities Are For' (A-F) + 8 câu hỏi (21.4)",
      "Dàn ý trong 8 phút (9 dòng quyết định chính) (21.3)",
      "Bài Task 2 40 phút theo yêu cầu cấu trúc & văn phong (21.5)",
      "Bảng tự chấm theo 4 tiêu chí kèm dẫn chứng cụ thể (21.6)",
      "Đoạn thân bài yếu nhất được viết lại theo bảng Function (21.7)",
      "Sửa 10 lỗi thường gặp (21.8) + Checklist 5 phút cuối (21.11)",
      "Vận dụng đúng 5 cụm từ trong bài viết + 3 lỗi cần ngăn lặp ở Ngày 20"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Đọc ngữ liệu + dàn ý 8 phút", note: "Đọc A-D; dàn ý chỉ giữ quyết định chi phối toàn bài" },
        { time: "10-20m", name: "Reading ứng dụng", note: "60': Questions 1-8 có bấm giờ + phương án đối chiếu" },
        { time: "20-60m", name: "Bài Task 2 có bấm giờ", note: "Viết 32 phút trong tổng 40 phút (gồm final check)" },
        { time: "60-80m", name: "Tự chấm + viết lại đoạn yếu", note: "Bảng 4 tiêu chí + viết lại theo Function" },
        { time: "80-90m", name: "Sửa 10 lỗi + Speaking", note: "21.8 + Câu hỏi Speaking về đại học & việc làm" }
      ]
    },
    reading: {
      title: "Practice Passage 16 - What Universities Are For",
      source: "IELTS Marathon 21-Day Companion - Ngày 16, mục 21.4 (Ngữ liệu ý tưởng)",
      strategy: "Câu 1-4: True/False/Not Given. Câu 5-8: Multiple Choice. Passage phục vụ cả đề Writing về đại học.",
      passage: "A. University education is expensive in both time and money, so students reasonably expect it to improve employment prospects. Governments also invest public funds and want graduates to contribute to the economy. These pressures have encouraged universities to advertise practical outcomes such as internships, industry partnerships and graduate salaries.\n\nB. Employment preparation is clearly part of the university role. Students need current technical knowledge, professional communication and an understanding of workplace expectations. Courses that ignore how a field operates outside the classroom can leave graduates with strong theory but little confidence in applying it.\n\nC. However, treating university only as job training creates a different problem. Specific software, procedures and market needs can change quickly. A graduate trained narrowly for one current role may struggle when that role is automated or reorganised. Broad knowledge, analytical reasoning and the ability to learn independently help people adapt across a longer career.\n\nD. Some subjects also have value that is not immediately captured by salary. History, philosophy, pure science and literature contribute to public culture, ethical debate and long-term discovery. Their benefits may be indirect or appear years later. If funding depends only on short-term labour demand, universities may abandon areas whose value is difficult to measure.\n\nE. The division between employment and knowledge is partly false. Deep subject knowledge can improve employability, while workplace experience can make academic ideas more meaningful. A medical student needs scientific foundations and clinical practice. An engineer needs mathematics and opportunities to solve real design problems. The strongest programmes connect the two.\n\nF. Universities should therefore avoid becoming either isolated academic institutions or narrow training centres. They need to prepare students for an initial transition into work while developing the intellectual flexibility required for jobs that do not yet exist. The challenge is not choosing one purpose. It is maintaining a productive balance under financial pressure.",
      questions: [
        { id: "r-d16-q1", type: "true_false_not_given", text: "Students have no reasonable expectation that university will improve their employment prospects.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn A: 'students reasonably expect it to improve employment prospects' — trái với 'no reasonable expectation'." },
        { id: "r-d16-q2", type: "true_false_not_given", text: "Practical preparation may include understanding professional communication.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn B: 'Students need current technical knowledge, professional communication and an understanding of workplace expectations.'" },
        { id: "r-d16-q3", type: "true_false_not_given", text: "The passage states that automation will remove every narrowly trained job.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn C: 'A graduate trained narrowly... may struggle when that role is automated or reorganised' — không nói mọi công việc bị xoá (bẫy 'every')." },
        { id: "r-d16-q4", type: "true_false_not_given", text: "Some academic fields produce benefits that are difficult to measure through salary.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn D: 'value that is not immediately captured by salary... benefits may be indirect or appear years later.'" },
        { id: "r-d16-q5", type: "multiple_choice", text: "What risk is associated with narrow job training?", options: ["A. Students learn too much theory.", "B. Graduates may struggle when specific roles change.", "C. Universities become free.", "D. Employers stop requiring skills."], correct: "B", explanation: "Đoạn C: 'A graduate trained narrowly for one current role may struggle when that role is automated or reorganised.'" },
        { id: "r-d16-q6", type: "multiple_choice", text: "Why are history and pure science mentioned?", options: ["A. To show that all subjects lead to the same salary", "B. To argue that only cultural subjects deserve funding", "C. To illustrate value that may be indirect or long-term", "D. To prove employment is unimportant"], correct: "C", explanation: "Đoạn D: 'Their benefits may be indirect or appear years later.'" },
        { id: "r-d16-q7", type: "multiple_choice", text: "What does Paragraph E argue?", options: ["A. Employment and knowledge can support each other.", "B. Clinical practice should replace science.", "C. Mathematics is unnecessary for engineering.", "D. Universities should avoid industry."], correct: "A", explanation: "Đoạn E: 'The division between employment and knowledge is partly false... The strongest programmes connect the two.'" },
        { id: "r-d16-q8", type: "multiple_choice", text: "Which position best represents the writer?", options: ["A. Universities should focus exclusively on employment.", "B. Universities should ignore employment pressure.", "C. Universities should balance work preparation with intellectual development.", "D. Every course should have the same balance."], correct: "C", explanation: "Đoạn F: 'preparing for an initial transition into work while developing the intellectual flexibility...' — cân bằng, không tuyệt đối." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn chứa ý trả lời",
        paraphrasePair: "Câu hỏi <-> diễn đạt trong passage",
        errorReason: "Xác định lỗi dùng kiến thức ngoài passage hoặc bỏ qua từ giới hạn"
      }
    },
    listening: makeListening({
      day: 16,
      theme: "đại học và việc làm",
      type: "Part 1 (Đăng ký khóa học viết)",
      part: "Part 1 (Hội thoại đăng ký khóa học)",
      questions: [
        { id: "l-d16-q1", prompt: "Tên khóa học ghi danh: Advanced [ 1 ] Writing.", answer: "Academic" },
        { id: "l-d16-q2", prompt: "Lớp học diễn ra vào chiều thứ [ 2 ] và sáng thứ Năm.", answer: "Ba" },
        { id: "l-d16-q3", prompt: "Học phí sau giảm 10% là [ 3 ] đồng.", answer: "2.700.000" },
        { id: "l-d16-q4", prompt: "Giảng viên yêu cầu mang theo hai [ 4 ] vào buổi đầu tiên.", answer: "bài mẫu" }
      ]
    }),
    writing: {
      task: "Bài Task 2 có bấm giờ (21.5)",
      prompt: "ĐỀ BÀI:\nUniversity education should focus on preparing students for employment rather than developing knowledge for its own sake. To what extent do you agree or disagree?\n\nThời gian: Lập dàn ý 8 phút • Viết bài 32 phút • Final check nằm trong 40 phút.",
      targetWords: "Bài đầy đủ 250+ từ: 1 introduction + 2 body paragraphs + 1 conclusion",
      guidance: "Yêu cầu cấu trúc: one introduction, two body paragraphs, one conclusion. Yêu cầu văn phong: natural, clear, no memorised grand opening; no semicolons; avoid exaggerated universal claims; examples should be realistic, not invented research. Dàn ý 8 phút gồm: dạng câu hỏi, từ giới hạn trong đề, lập trường, chức năng Body 1, chức năng Body 2, ví dụ 1, ví dụ 2, một ý nhượng bộ.",
      modelAnswer: "Gợi ý lập trường: I largely agree that employment preparation should be a central aim, but I do not believe universities should abandon knowledge for its own sake, because the two goals support each other.",
      examinerNotes: "Tự chấm theo 4 tiêu chí (Task Response / Coherence and Cohesion / Lexical Resource / Grammar): mỗi nhận xét 1-5 điểm phải kèm câu hoặc đoạn làm bằng chứng trong bài, nếu không sẽ khó chuyển thành quyết định sửa cụ thể."
    },
    speaking: {
      part: "Speaking về đại học và việc làm (21.9)",
      prompt: "Part 1:\n1. Did you enjoy studying at university?\n2. What kind of skills did you gain there?\n3. Do you prefer theoretical or practical classes?\n4. Is there a subject you would like to study in the future?\n\nPart 2: Describe a course or subject that was useful to you.\n\nPart 3:\n1. What should universities teach that employers need?\n2. Is university necessary for a successful career?\n3. Should governments fund subjects with limited job opportunities?\n4. How will artificial intelligence change graduate employment?",
      followUps: [
        "Is university necessary for a successful career?",
        "Should governments fund subjects with limited job opportunities?"
      ],
      selfEvaluationCriteria: [
        "Câu trả lời có dùng ý 'kỹ năng thích nghi với công việc chưa tồn tại' không?",
        "Có tránh văn phong bài luận đọc thành tiếng không?"
      ]
    },
    vocabulary: [
      { term: "employment prospects", pos: "noun phrase", phonetic: "triển vọng việc làm", meaning: "triển vọng việc làm", example: "Students expect university to improve employment prospects." },
      { term: "workplace expectations", pos: "noun phrase", phonetic: "yêu cầu trong môi trường làm việc", meaning: "yêu cầu trong môi trường làm việc", example: "Internships introduce students to workplace expectations." },
      { term: "apply theory in practice", pos: "verb phrase", phonetic: "áp dụng lý thuyết", meaning: "áp dụng lý thuyết", example: "Graduates need to apply theory in practice." },
      { term: "a narrow training model", pos: "noun phrase", phonetic: "chương trình đào tạo hẹp", meaning: "chương trình đào tạo hẹp", example: "A narrow training model may become outdated." },
      { term: "adapt to changing roles", pos: "verb phrase", phonetic: "thích nghi vai trò thay đổi", meaning: "thích nghi vai trò thay đổi", example: "Broad skills help workers adapt to changing roles." },
      { term: "independent inquiry", pos: "noun phrase", phonetic: "năng lực tìm hiểu độc lập", meaning: "năng lực tìm hiểu độc lập", example: "Universities should protect independent inquiry." },
      { term: "intellectual flexibility", pos: "noun phrase", phonetic: "sự linh hoạt trí tuệ", meaning: "sự linh hoạt trí tuệ", example: "Intellectual flexibility supports lifelong learning." },
      { term: "short-term labour demand", pos: "noun phrase", phonetic: "nhu cầu lao động ngắn hạn", meaning: "nhu cầu lao động ngắn hạn", example: "Funding should not follow short-term labour demand alone." },
      { term: "an indirect benefit", pos: "noun phrase", phonetic: "lợi ích gián tiếp", meaning: "lợi ích gián tiếp", example: "Research may produce important indirect benefits." },
      { term: "industry partnership", pos: "noun phrase", phonetic: "hợp tác doanh nghiệp", meaning: "hợp tác doanh nghiệp", example: "Industry partnerships can make courses more relevant." },
      { term: "a strong theoretical foundation", pos: "noun phrase", phonetic: "nền tảng lý thuyết vững", meaning: "nền tảng lý thuyết vững", example: "Engineers need a strong theoretical foundation." },
      { term: "initial transition into work", pos: "noun phrase", phonetic: "giai đoạn đầu đi làm", meaning: "giai đoạn đầu đi làm", example: "Universities should support the initial transition into work." },
      { term: "remain adaptable", pos: "verb phrase", phonetic: "duy trì khả năng thích nghi", meaning: "duy trì khả năng thích nghi", example: "Graduates need to remain adaptable throughout their careers." },
      { term: "reduce education to job training", pos: "verb phrase", phonetic: "thu hẹp giáo dục thành đào tạo nghề", meaning: "thu hẹp giáo dục thành đào tạo nghề", example: "Universities should not reduce education to job training." }
    ],
    grammar: {
      title: "Lỗi thường gặp khi viết có bấm giờ (21.8)",
      explanation: "Sửa mười câu sau. Mỗi lỗi thuộc một nhóm: câu mơ hồ / danh từ không đếm được / collocation / mạo từ / mệnh đề quan hệ / cấu trúc nhượng bộ / giới từ. Sau khi sửa, chép riêng ba lỗi cá nhân hay gặp nhất vào checklist Ngày 20.",
      drillQuestion: "1. University helps students have a good job in the future.\n2. Students can learn many academic knowledges.\n3. This gives them more chances to choose.\n4. Universities should not become the factories of jobs.\n5. The society needs people have wide knowledge.\n6. Employers need workers which can adapt quickly.\n7. Although job skills are essential but theory is also important.\n8. Graduates may meet many difficulties when the market changes.\n9. This issue has both advantage and disadvantage.\n10. The government should invest for subjects that do not create immediate profit.",
      sampleAnswer: "1. University education helps students get / obtain a good job in the future.\n2. Students can learn a great deal of academic knowledge. (knowledge không đếm được)\n3. This gives them more choices / career options. (chances to choose → collocation tự nhiên hơn)\n4. Universities should not become job factories. (the factories of jobs bất thường)\n5. Society needs people who have broad knowledge. (bỏ 'the' + thêm mệnh đề 'who')\n6. Employers need workers who can adapt quickly. (which → who cho người)\n7. Although job skills are essential, theory is also important. / Job skills are essential, but theory is also important. (không dùng cả although + but)\n8. Graduates may face many difficulties when the market changes. (meet difficulties → face difficulties)\n9. This issue has both advantages and disadvantages. (advantage/disadvantage đếm được, số nhiều)\n10. The government should invest in subjects that do not create immediate profit. (invest for → invest in)",
    },
    deliverables: [
      "Đáp án Reading 21.4 kèm bằng chứng (Day16-Reading)",
      "Dàn ý 8 phút (Day16-Outline)",
      "Bài Task 2 có bấm giờ (Day16-Essay)",
      "Bảng tự chấm 4 tiêu chí kèm dẫn chứng (Day16-Self-Score)",
      "Đoạn thân bài viết lại (Day16-Rewrite)",
      "Ba lỗi cần ngăn lặp lại ở Ngày 20 (Day16-Error-Watch)"
    ]
  },

  // ============================================================ DAY 17
  {
    day: 17,
    phase: 3,
    title: "Ngày 17: Thi thử Speaking",
    theme: "Mock Speaking: ghi âm, chép lời và thực hiện lần hai",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Bài thi thử đầy đủ cho thấy cách người học phản ứng xuyên suốt ba phần Speaking. Sau khi ghi âm, bản chép lời cần giữ nguyên từ lặp, chỗ ngập ngừng, câu bỏ dở và lỗi ngữ pháp; các dấu vết ấy là dữ liệu để sửa. Người học chọn một đoạn ngắn có nhiều vấn đề, xây lại câu rồi ghi âm lần hai với cùng câu hỏi. Lượt nghe đầu dùng bảng Dữ liệu 22.7: ghi khoảng dừng, từ lặp, lỗi ngữ pháp, vấn đề phát âm — không dùng nhận xét chung như 'everything sounds bad'. Trong lần hai, so sánh tiến bộ thực chất theo bảng 22.9.",
    checklist: [
      "Khởi động 5 phút trước bài thi thử (phụ âm cuối, âm cuối số nhiều/quá khứ, tốc độ tự nhiên, cụm tự sửa, nhịp thở) (22.3)",
      "Bài thi thử Speaking đầy đủ ghi âm liên tục trong một tệp (Bộ A)",
      "Bảng rà soát lượt nghe đầu: 3 khoảng dừng dài, 3 từ lặp, 3 lỗi ngữ pháp, 3 vấn đề phát âm (22.7)",
      "Bản chép lời dài 2 phút với kí hiệu [P] [R] [V] [G] [N] [PR] (22.8)",
      "Lần thực hiện thứ hai ghi âm lại cùng câu hỏi + bảng so sánh (22.9)",
      "Bộ bài sửa phát âm (phụ âm cuối, âm /t/ /d/ /ɪd/, trọng âm từ) (22.10)",
      "Bài Writing ngắn 160-190 từ (22.12)"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Khởi động + đọc ngữ liệu", note: "Phụ âm cuối, âm quá khứ, một câu Part 1 ở tốc độ tự nhiên" },
        { time: "10-25m", name: "Reading 'Accent & Intelligibility'", note: "Câu 1-8 kèm bằng chứng" },
        { time: "25-50m", name: "Thi thử Speaking Bộ A", note: "Ghi âm Part 1 + Part 2 + Part 3 liên tục" },
        { time: "50-70m", name: "Bảng dữ liệu + chép lời", note: "Ghi evidence quan sát được; mã kí hiệu [P][R][V]..." },
        { time: "70-90m", name: "Lần hai + phát âm + Writing", note: "Ghi âm lại, so sánh bảng 22.9, bài sửa phát âm" }
      ]
    },
    reading: {
      title: "Bài đọc 17 - Accent, Identity and Intelligibility",
      source: "IELTS Marathon 21-Day Companion - Ngày 17, mục 22.4",
      strategy: "Câu 1-4: Matching Headings cho đoạn B-E. Câu 5-8: Sentence Completion (KHÔNG QUÁ BA TỪ).",
      passage: "A. Language learners often describe the goal of pronunciation as \"losing an accent\". This phrase assumes that one standard form of speech is neutral and every difference is a problem. In reality, all speakers have accents, including those considered native. Accent carries information about region, community, age and personal history.\n\nB. In international communication, intelligibility is usually a more useful goal. A speaker is intelligible when listeners can understand the message without excessive effort. This does not require perfect imitation of a British, American or Australian model. It requires enough control of sounds, stress and rhythm for key words and grammatical endings to remain clear.\n\nC. Some pronunciation features create more difficulty than others. A slightly different vowel may have little effect when context is strong. Missing final consonants can be more disruptive because they may remove plural, tense or word identity. Work, worked and works carry different grammatical information. If the endings disappear repeatedly, the listener must reconstruct meaning.\n\nD. Word stress matters for a similar reason. English listeners use stressed syllables to recognise words quickly. A learner may pronounce every individual sound acceptably but place stress on an unexpected syllable, causing a familiar word to take longer to identify. Sentence stress also guides attention by making content words more prominent than function words.\n\nE. Identity complicates pronunciation goals. Some learners want to preserve features that connect them to a national or regional background. Others feel safer when their speech is closer to a dominant standard. Neither preference should be imposed universally. The practical question is whether the accent allows the speaker to participate fully in the situations that matter to them.\n\nF. Recording is one of the most useful tools because speakers hear themselves differently while speaking. A recording reveals swallowed endings, flat rhythm and repeated hesitation. However, listening without a target can become discouraging. Learners should choose one feature, repeat the same answer and judge whether intelligibility improves.\n\nG. Pronunciation progress is often gradual and highly specific. A learner may become clearer in prepared speech before the improvement appears in spontaneous conversation. The final goal is not a performance of another identity. It is a voice that remains recognisably the learner's own while requiring less effort from the listener.",
      questions: [
        { id: "r-d17-q1", type: "heading_matching", text: "Paragraph B", headings: ["I. Why final consonants may carry important grammar", "II. Personal choice in pronunciation identity", "III. Intelligibility rather than imitation", "IV. Why every learner should use one accent", "V. Stress as a guide to word recognition", "VI. The disappearance of regional speech"], options: ["I", "II", "III", "IV", "V", "VI"], correct: "III", explanation: "Đoạn B: 'intelligibility... does not require perfect imitation'." },
        { id: "r-d17-q2", type: "heading_matching", text: "Paragraph C", headings: ["I. Why final consonants may carry important grammar", "II. Personal choice in pronunciation identity", "III. Intelligibility rather than imitation", "IV. Why every learner should use one accent", "V. Stress as a guide to word recognition", "VI. The disappearance of regional speech"], options: ["I", "II", "III", "IV", "V", "VI"], correct: "I", explanation: "Đoạn C: 'Missing final consonants... may remove plural, tense or word identity.'" },
        { id: "r-d17-q3", type: "heading_matching", text: "Paragraph D", headings: ["I. Why final consonants may carry important grammar", "II. Personal choice in pronunciation identity", "III. Intelligibility rather than imitation", "IV. Why every learner should use one accent", "V. Stress as a guide to word recognition", "VI. The disappearance of regional speech"], options: ["I", "II", "III", "IV", "V", "VI"], correct: "V", explanation: "Đoạn D: 'English listeners use stressed syllables to recognise words quickly.'" },
        { id: "r-d17-q4", type: "heading_matching", text: "Paragraph E", headings: ["I. Why final consonants may carry important grammar", "II. Personal choice in pronunciation identity", "III. Intelligibility rather than imitation", "IV. Why every learner should use one accent", "V. Stress as a guide to word recognition", "VI. The disappearance of regional speech"], options: ["I", "II", "III", "IV", "V", "VI"], correct: "II", explanation: "Đoạn E: 'Identity complicates pronunciation goals... Neither preference should be imposed universally.'" },
        { id: "r-d17-q5", type: "sentence_completion", text: "An intelligible speaker can be understood without ____.", options: [], correct: "excessive effort", explanation: "Đoạn B: 'listeners can understand the message without excessive effort.'" },
        { id: "r-d17-q6", type: "sentence_completion", text: "Missing endings may remove information about plural, tense or ____.", options: [], correct: "word identity", explanation: "Đoạn C: 'they may remove plural, tense or word identity.'" },
        { id: "r-d17-q7", type: "sentence_completion", text: "English listeners use ____ to recognise words quickly.", options: [], correct: "stressed syllables", explanation: "Đoạn D: 'English listeners use stressed syllables to recognise words quickly.'" },
        { id: "r-d17-q8", type: "sentence_completion", text: "The final goal is a voice that requires less effort from the ____.", options: [], correct: "listener", explanation: "Đoạn G: 'requiring less effort from the listener.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn chứa ý chính",
        paraphrasePair: "Tiêu đề <-> chức năng cả đoạn (không phải từ khóa)",
        errorReason: "Chọn tiêu đề chỉ khớp một chi tiết, không khớp hướng lập luận"
      }
    },
    listening: makeListening({
      day: 17,
      theme: "phát âm và khóa học luyện nói",
      type: "Part 2 (Giới thiệu khóa học phát âm)",
      part: "Part 2 (Độc thoại giới thiệu khóa học)",
      questions: [
        { id: "l-d17-q1", prompt: "Khóa học sửa phát âm kéo dài [ 1 ] tuần.", answer: "sáu" },
        { id: "l-d17-q2", prompt: "Buổi đầu tiên của khóa học tập trung vào [ 2 ] cuối.", answer: "phụ âm" },
        { id: "l-d17-q3", prompt: "Học viên được yêu cầu ghi âm [ 3 ] phút mỗi ngày.", answer: "hai" },
        { id: "l-d17-q4", prompt: "Hạn nhận đơn đăng ký nhóm tháng 7 là ngày [ 4 ].", answer: "28/6" }
      ]
    }),
    writing: {
      task: "Bài Writing ngắn (22.12) - 160-190 từ",
      prompt: "Some people believe learners should try to sound like native speakers. Others believe clear communication is a more realistic goal. Discuss both views and give your opinion.\n\nFocus on one body paragraph or write a complete mini response.",
      targetWords: "160-190 từ",
      guidance: "Dùng quan điểm và từ vựng từ bài đọc 'Accent, Identity and Intelligibility'. Focus on one body paragraph or write a complete mini response. Nhớ điều kiện: lập trường rõ, một cơ chế giải thích, một ví dụ.",
      modelAnswer: "Gợi ý: Trying to sound native can be a long and often unnecessary goal, because intelligibility depends on clear sounds, stress and rhythm rather than perfect imitation of one model.",
      examinerNotes: "Đây là bài vận dụng ở mức mở rộng. Kiểm tra: đã dùng đúng 5 cụm từ từ ngân hàng 22.11 chưa?"
    },
    speaking: {
      part: "Bài thi thử Speaking - Bộ A (ghi âm liên tục trong một tệp) + Bộ B (mở rộng)",
      prompt: "BỘ A (PHẦN THI CHÍNH):\nPart 1 - Home, Photos and Skills:\n1. What part of your home do you like most?\n2. Do you prefer living in a house or an apartment?\n3. How often do you take photos?\n4. What kinds of photos do you keep?\n5. Do you enjoy learning new skills?\n6. Is there a skill that took you a long time to learn?\n7. Do you usually ask other people for help?\n8. How do you feel when you make a mistake?\n\nPart 2: Describe a difficult skill that you learned.\nYou should say: what the skill was • why you wanted to learn it • how you learned it • and explain how you felt after learning it.\n\nPart 3 - Learning Skills:\n1. Why do adults sometimes find it difficult to learn new skills?\n2. Is it better to learn from mistakes or avoid them?\n3. What kinds of skills will become more important in the future?\n4. Should employers pay for workers' professional development?\n5. Has technology made learning easier or more superficial?\n\nBỘ B (THI THỬ MỞ RỘNG):\nPart 1 - Hometown and Plans:\n1. What do you like about your hometown?\n2. Has it changed in recent years?\n3. Do you enjoy making plans?\n4. Are your plans usually detailed?\n5. What do you do when a plan changes?\nPart 2: Describe a place where you would like to live in the future.\nPart 3 - Cities and Migration:\n1. Why do young people move to large cities?\n2. What problems does rapid urban growth create?\n3. Should governments encourage people to live in smaller cities?\n4. How might remote work affect where people choose to live?",
      followUps: [
        "Why do adults sometimes find it difficult to learn new skills?",
        "Has technology made learning easier or more superficial?"
      ],
      selfEvaluationCriteria: [
        "Bảng 22.9: longest pause / answer length / final sounds / grammar accuracy / idea depth / naturalness — có tiến bộ thực chất ở Lần hai không?",
        "Bản chép lời có giữ nguyên từ lặp, chỗ ngập ngừng, câu bỏ dở (không 'tự sửa' lúc chép) không?",
        "Ưu tiên sửa theo thứ tự: nghĩa + ranh giới câu, từ mơ hồ bị lặp nhiều, giữ contraction và nhịp nói, thêm chi tiết có ích."
      ]
    },
    vocabulary: [
      { term: "pick up a skill", pos: "verb phrase", phonetic: "học được kỹ năng", meaning: "học được kỹ năng", example: "I picked up basic editing through practice." },
      { term: "go through trial and error", pos: "verb phrase", phonetic: "trải qua nhiều lần thử nghiệm", meaning: "trải qua nhiều lần thử nghiệm", example: "I went through a great deal of trial and error." },
      { term: "make steady progress", pos: "verb phrase", phonetic: "tiến bộ đều", meaning: "tiến bộ đều", example: "I began to make steady progress after changing my routine." },
      { term: "hit a plateau", pos: "verb phrase", phonetic: "chững lại", meaning: "chững lại", example: "My progress hit a plateau after the first month." },
      { term: "receive targeted feedback", pos: "verb phrase", phonetic: "nhận phản hồi đúng trọng tâm", meaning: "nhận phản hồi đúng trọng tâm", example: "Targeted feedback helped me correct one recurring error." },
      { term: "build confidence gradually", pos: "verb phrase", phonetic: "dần trở nên tự tin hơn", meaning: "dần trở nên tự tin hơn", example: "Recording helped me build confidence gradually." },
      { term: "lose my train of thought", pos: "verb phrase", phonetic: "mất mạch suy nghĩ", meaning: "mất mạch suy nghĩ", example: "I lose my train of thought when I rush." },
      { term: "rephrase the point", pos: "verb phrase", phonetic: "diễn đạt lại ý", meaning: "diễn đạt lại ý", example: "If I forget a word, I rephrase the point." },
      { term: "correct myself naturally", pos: "verb phrase", phonetic: "tự sửa tự nhiên", meaning: "tự sửa tự nhiên", example: "I am learning to correct myself naturally." },
      { term: "speak at a manageable pace", pos: "verb phrase", phonetic: "nói với tốc độ vừa phải", meaning: "nói với tốc độ vừa phải", example: "I speak at a manageable pace rather than forcing speed." },
      { term: "make the listener work", pos: "verb phrase", phonetic: "khiến người nghe khó theo dõi", meaning: "khiến người nghe khó theo dõi", example: "Missing endings make the listener work harder." },
      { term: "remain intelligible", pos: "verb phrase", phonetic: "vẫn dễ hiểu", meaning: "vẫn dễ hiểu", example: "My accent can remain noticeable and intelligible." },
      { term: "a recognisable accent", pos: "noun phrase", phonetic: "giọng nói dễ nhận ra", meaning: "giọng nói dễ nhận ra", example: "A recognisable accent is not automatically a problem." },
      { term: "sound more controlled", pos: "verb phrase", phonetic: "nghe ổn định hơn", meaning: "nghe ổn định hơn", example: "The second attempt sounded more controlled." },
      { term: "activation: work/worked/works", pos: "pronunciation drill", phonetic: "phân biệt âm cuối /t/ /d/ /ɪd/", meaning: "phân biệt âm cuối", example: "work/worked/works • learn/learned/learns • change/changed/changes • ask/asked/asks • need/needed/needs • improve/improved/improves" }
    ],
    grammar: {
      title: "Bộ bài sửa phát âm (22.10) + điều chỉnh giọng nói",
      explanation: "Luyện phân biệt âm cuối và trọng âm từ. Trong lần thực hiện thứ hai, chú ý 5 quy tắc sửa: sửa nghĩa + ranh giới câu trước, thay từ mơ hồ bị lặp, giữ contraction và nhịp nói đơn giản, không biến mọi câu thành mệnh đề quan hệ trang trọng, thêm một chi tiết có ích nếu câu trả lời mỏng.",
      drillQuestion: "PHỤ ÂM CUỐI (đọc thật rõ):\n• work/worked/works • learn/learned/learns • change/changed/changes • ask/asked/asks • need/needed/needs • improve/improved/improves\n\nÂM SỐ NHIỀU & NGÔI THỨ BA:\n• students, skills, ideas, problems, habits\n• teaches, explains, helps, requires, depends\n\nPAST ENDINGS:\n• /t/: worked, helped, watched\n• /d/: learned, changed, improved\n• /ɪd/: needed, wanted, decided\n\nWORD STRESS:\n• deVELopment • proFESsional • opporTUnity • comMUnicate • experiENCE • COMfortable • techNOLogy • reSPONsibility",
      sampleAnswer: "Quy trình ghi âm 2 lượt: lượt 1 đọc to danh sách trên, khoanh âm chưa rõ; lượt 2 đọc lại và tự chấm theo 3 mức: rõ / gần / mất. Trọng âm sai gây 'familiar word to take longer to identify' (Đoạn D bài đọc 17). Kết quả đưa vào bảng 22.9.",
    },
    deliverables: [
      "Bản ghi âm bài thi thử đầy đủ (Day17-Mock-Recording)",
      "Bảng rà soát lượt nghe đầu theo evidence quan sát được (Day17-Listen-Check)",
      "Bản chép lời dài hai phút kèm kí hiệu [P][R][V][G][N][PR] (Day17-Transcript)",
      "Bản ghi âm lần hai + bảng so sánh (Day17-Attempt-2)",
      "Bài sửa phát âm (Day17-Pronunciation)",
      "Bài Writing vận dụng ở mức mở rộng (Day17-Writing)"
    ]
  },

  // ============================================================ DAY 18
  {
    day: 18,
    phase: 3,
    title: "Ngày 18: Luyện tập theo lỗi ưu tiên",
    theme: "Priority Remediation: một bộ bài sửa lỗi hoàn chỉnh",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: true,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Ngày 18 tổ chức hoạt động học quanh một lỗi ưu tiên đã xuất hiện trong nhiều sản phẩm. Người học cần mô tả lỗi bằng hành vi quan sát được, chẳng hạn bỏ sót từ giới hạn trong Reading, thiếu động từ chính trong câu dài hoặc lặp 'I think' ở Part 3. Mức luyện được chọn dựa trên phiếu theo dõi áp lực: chọn MỘT bộ bài chính (Reading / Writing / Speaking), thực hiện bài luyện ngắn, làm lại và kiểm tra lỗi trong nhiệm vụ mới. Một lỗi chỉ được coi là đã kiểm soát khi kết quả sửa còn duy trì trong ngữ cảnh khác. Mục tiêu phải đo lường được và cụ thể, không dùng kiểu 'Improve Reading'.",
    checklist: [
      "Chọn một bộ bài chính theo phiếu áp lực (Bộ A Reading / Bộ B Writing / Bộ C Speaking) (23.2)",
      "Mục tiêu có thể đo lường viết rõ điều kiện kiểm tra (23.3)",
      "Hoàn thành bộ bài sửa lỗi đã chọn với kết quả trước và sau",
      "Mười cụm từ / ba cấu trúc ngữ pháp được vận dụng lại (23.9)",
      "Lần thực hiện thứ hai trong ngữ cảnh MỚI (23.8)",
      "Bằng chứng trước và sau khi sửa, ghi rõ lỗi giảm vì hiểu quy trình hay vì nhớ nội dung"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Chọn bộ bài + mục tiêu đo lường", note: "Bộ A (Reading) / Bộ B (Writing) / Bộ C (Speaking)" },
        { time: "10-30m", name: "Bài luyện ngắn", note: "Reading bấm giờ / sửa thesis & câu / ghi âm 6 câu trả lời" },
        { time: "30-50m", name: "Làm lại + ghi bằng chứng", note: "Redo có vị trí bằng chứng, bản viết lại, bản chép lời" },
        { time: "50-70m", name: "Vận dụng ngữ cảnh mới", note: "5 câu Reading mới / đề Writing mới / câu hỏi Speaking mới" },
        { time: "70-90m", name: "Cụm từ + kiểm tra cuối", note: "Vận dụng lại 10 cụm từ hoặc 3 cấu trúc ngữ pháp" }
      ]
    },
    reading: {
      title: "Bộ A - Sửa lỗi Reading: Food Waste Beyond the Kitchen",
      source: "IELTS Marathon 21-Day Companion - Ngày 18, mục 23.4 (A1-A3)",
      strategy: "Câu A1-A6: True/False/Not Given. Câu A7-A10: Sentence Completion (KHÔNG QUÁ BA TỪ). Lời khuyên 23.3: với mỗi đáp án ghi đoạn bằng chứng, gạch chân từ giới hạn, gắn nhãn same/opposite/missing, ghi mức tự tin.",
      passage: "A. Discussions of food waste often focus on households. Images of uneaten meals and expired products make personal responsibility visible, and consumers can certainly reduce waste by planning purchases, storing food correctly and understanding date labels. Yet household behaviour is only one part of a much larger system.\n\nB. Waste begins before food reaches a shop. Farmers may leave crops unharvested when market prices fall below the cost of labour or when buyers reject produce that does not meet cosmetic standards. A carrot can be nutritious but commercially unwanted because it is bent, small or uneven in colour.\n\nC. Retail practices add another layer. Stores want shelves to appear full because abundance attracts customers, but this creates a risk that fresh food remains unsold. Promotions that encourage people to buy several items can also transfer the waste problem from the shop to the home.\n\nD. Date labels are a common source of confusion. A \"use by\" date usually relates to safety, whereas \"best before\" describes expected quality. Consumers may discard food after a best-before date even when it remains safe. Clearer labelling and public education can reduce this form of avoidable waste.\n\nE. Restaurants face a different challenge. Large portions can appear generous and competitive, yet customers may leave a significant amount uneaten. Allowing smaller portion choices and making takeaway containers normal can reduce waste without lowering customer satisfaction.\n\nF. Donating surplus food seems an obvious solution, but it requires reliable transport, storage and coordination. Fresh products may spoil quickly, and charities need predictable information about quantity and timing. Legal rules also influence whether businesses feel confident donating food.\n\nG. Prevention is generally more valuable than managing waste after it occurs. Composting can return nutrients to soil, and anaerobic digestion can produce energy, but both processes still use resources to handle food that was grown, transported and prepared unnecessarily. The greatest environmental benefit comes from avoiding surplus earlier in the chain.\n\nH. Effective policy therefore distributes responsibility. Consumers need better planning and label knowledge. Retailers can change promotions and ordering systems. Producers need flexible standards, while governments can support donation networks and waste reporting. Treating food waste as a personal moral failure ignores the commercial and logistical decisions that shape what is thrown away.",
      questions: [
        { id: "r-d18-q1", type: "true_false_not_given", text: "A1. The passage argues that household behaviour has no effect on food waste.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn A: 'consumers can certainly reduce waste by planning purchases, storing food correctly and understanding date labels'." },
        { id: "r-d18-q2", type: "true_false_not_given", text: "A2. Some crops remain unharvested because their sale would not cover labour costs.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn B: 'may leave crops unharvested when market prices fall below the cost of labour'." },
        { id: "r-d18-q3", type: "true_false_not_given", text: "A3. All visually imperfect vegetables have lower nutritional value.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn B: 'A carrot can be nutritious but commercially unwanted' (bẫy 'all')." },
        { id: "r-d18-q4", type: "true_false_not_given", text: "A4. Full shelves may increase the risk of unsold fresh food.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn C: 'abundance attracts customers, but this creates a risk that fresh food remains unsold.'" },
        { id: "r-d18-q5", type: "true_false_not_given", text: "A5. A best-before date always indicates that food is unsafe afterwards.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn D: 'best before describes expected quality... may discard food after a best-before date even when it remains safe' (bẫy 'always')." },
        { id: "r-d18-q6", type: "true_false_not_given", text: "A6. The passage states that customers prefer large portions in every country.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN", explanation: "Đoạn E: 'Large portions can appear generous and competitive' — không nói về mọi quốc gia (bẫy 'every country')." },
        { id: "r-d18-q7", type: "sentence_completion", text: "A7. Charities require predictable information about quantity and ____.", options: [], correct: "timing", explanation: "Đoạn F: 'charities need predictable information about quantity and timing.'" },
        { id: "r-d18-q8", type: "sentence_completion", text: "A8. Composting can return ____ to the soil.", options: [], correct: "nutrients", explanation: "Đoạn G: 'Composting can return nutrients to soil.'" },
        { id: "r-d18-q9", type: "sentence_completion", text: "A9. The largest environmental benefit comes from preventing surplus ____ in the chain.", options: [], correct: "earlier", explanation: "Đoạn G: 'The greatest environmental benefit comes from avoiding surplus earlier in the chain.'" },
        { id: "r-d18-q10", type: "sentence_completion", text: "A10. Treating food waste as a personal ____ failure ignores commercial and ____ decisions.", options: [], correct: "moral; logistical", explanation: "Đoạn H: 'Treating food waste as a personal moral failure ignores the commercial and logistical decisions...' — câu theo dạng hai từ; nhập cả hai, cách nhau dấu ';'." }
      ],
      evidenceTemplate: {
        paragraphLocator: "Ghi đoạn bằng chứng cho MỌI đáp án",
        paraphrasePair: "Gạch chân từ giới hạn (all, always, every, no, only) và gắn nhãn same/opposite/missing",
        errorReason: "Sau khi chữa, làm lại 5 câu theo thứ tự khác; nguồn lỗi ghi rõ bằng chứng định vị hay xử lý logic"
      }
    },
    listening: makeListening({
      day: 18,
      theme: "chống lãng phí thực phẩm",
      type: "Part 3 (Thảo luận dự án giảm lãng phí)",
      part: "Part 3 (Hội thoại 2-3 người về dự án)",
      questions: [
        { id: "l-d18-q1", prompt: "Dự án thí điểm giảm lãng phí thực phẩm do [ 1 ] tài trợ kinh phí.", answer: "siêu thị" },
        { id: "l-d18-q2", prompt: "Cửa hàng giảm 30% sản phẩm sắp hết hạn trong khung giờ [ 2 ].", answer: "21h-22h" },
        { id: "l-d18-q3", prompt: "Số hộ gia đình tham gia sau sáu tháng đạt [ 3 ] hộ.", answer: "800" },
        { id: "l-d18-q4", prompt: "Cam kết giảm lãng phí của người tham gia được theo dõi qua ứng dụng [ 4 ].", answer: "FoodSense" }
      ]
    }),
    writing: {
      task: "Bộ B - Sửa lỗi Writing (23.5)",
      prompt: "B1. Viết một thesis cho MỖI đề sau:\n1. Some people believe environmental problems can only be solved by governments and large companies, not individuals. To what extent do you agree or disagree?\n2. Advertising encourages people to buy things they do not need. To what extent do you agree or disagree?\n3. Many cities are becoming increasingly crowded. What problems does this cause, and how can they be solved?\n\nB2. Đoạn 1 còn yếu — dựng lại theo: specific claim • mechanism • realistic scope • limitation • implication:\n'Individuals can help the environment because they can do many things. For example, they can use less plastic and save electricity. This is very good for the environment. Therefore, individuals play an important role.'\n\nB3. Đoạn 2 còn yếu — dựng lại với: emotional mechanism • example • nuance about informative advertising • clear position:\n'Advertising makes people buy unnecessary products. Companies use many attractive advertisements. People see them and want to buy. This causes waste and financial problems. So advertising is bad.'\n\nB5. Đoạn văn vận dụng: chọn một đề MỚI và viết 180-210 từ trong 18 phút. Kỹ năng vừa sửa phải được vận dụng trong ngữ cảnh mới.",
      targetWords: "B5: 180-210 từ trong 18 phút",
      guidance: "Kiểm tra thesis theo: question type answered • limiting word addressed • position visible • two body roles possible. Viết lại cả đoạn theo chức năng trước khi sửa từng câu: What is the paragraph trying to prove? Which sentence is only repeating the claim? What mechanism is missing? Is the example relevant? What wider implication should finish the paragraph?",
      modelAnswer: "Gợi ý thesis (đề 1): I largely agree that governments and large companies hold the greatest power to solve environmental problems, but I would argue that individual choices still matter through scale and political pressure.",
      examinerNotes: "B4 (kiểm soát cấu trúc câu) nằm ở mục Grammar. B5 là bài kiểm tra chuyển giao: nếu lỗi đã sửa vẫn xuất hiện trong ngữ cảnh mới, chưa thể coi là đã kiểm soát."
    },
    speaking: {
      part: "Bộ C - Sửa lỗi Speaking (23.6)",
      prompt: "C1. Ghi âm sáu câu trả lời KHÔNG dùng lời thoại viết sẵn:\n1. Why do people buy things they do not need?\n2. Should governments regulate advertising to children?\n3. Are individual environmental actions meaningful?\n4. Why do cities struggle with waste?\n5. How can schools encourage responsible consumption?\n6. Will people become more environmentally aware in the future?\n\nCấu trúc câu trả lời: direct position • one mechanism • one example • one limitation or wider lens.\n\nC2. Part 2: Describe a time when you changed a wasteful habit.\nYou should say: what the habit was • why you changed it • what you did differently • and explain whether the change lasted.\n\nC3. Chép lại 90 giây và đánh dấu: vague nouns (thing, stuff, problem), repeated adjectives (good, bad, important), missing final /s/ and past endings, grammar after long pauses, translated phrases. Rewrite ten lines and record again.",
      followUps: [
        "Are individual environmental actions meaningful?",
        "Should governments regulate advertising to children?"
      ],
      selfEvaluationCriteria: [
        "Có câu trả lời nào đạt ít nhất 40 giây, không dừng quá 4 giây, có một wider lens không? (mục tiêu đo lường 23.3)",
        "Bản chép lời sau khi sửa còn mất âm cuối /s/ hoặc quá khứ không?"
      ]
    },
    vocabulary: [
      { term: "reduce avoidable waste", pos: "verb phrase", phonetic: "giảm lãng phí có thể tránh", meaning: "giảm lãng phí có thể tránh", example: "Clear labels can reduce avoidable waste." },
      { term: "cosmetic standards", pos: "noun phrase", phonetic: "tiêu chuẩn ngoại hình sản phẩm", meaning: "tiêu chuẩn ngoại hình sản phẩm", example: "Cosmetic standards cause edible crops to be rejected." },
      { term: "remain unsold", pos: "verb phrase", phonetic: "không bán được", meaning: "không bán được", example: "Fresh products may remain unsold." },
      { term: "confuse quality with safety", pos: "verb phrase", phonetic: "nhầm chất lượng với an toàn", meaning: "nhầm chất lượng với an toàn", example: "Consumers may confuse quality with safety." },
      { term: "surplus food", pos: "noun phrase", phonetic: "thực phẩm dư thừa", meaning: "thực phẩm dư thừa", example: "Businesses can donate surplus food." },
      { term: "a donation network", pos: "noun phrase", phonetic: "mạng lưới quyên góp", meaning: "mạng lưới quyên góp", example: "A reliable donation network requires transport." },
      { term: "prevent waste at source", pos: "verb phrase", phonetic: "ngăn lãng phí từ đầu", meaning: "ngăn lãng phí từ đầu", example: "Policy should prevent waste at source." },
      { term: "share responsibility", pos: "verb phrase", phonetic: "chia sẻ trách nhiệm", meaning: "chia sẻ trách nhiệm", example: "Consumers and businesses must share responsibility." },
      { term: "industrial-scale change", pos: "noun phrase", phonetic: "thay đổi quy mô công nghiệp", meaning: "thay đổi quy mô công nghiệp", example: "Emission reduction requires industrial-scale change." },
      { term: "consumer behaviour", pos: "noun phrase", phonetic: "hành vi tiêu dùng", meaning: "hành vi tiêu dùng", example: "Advertising shapes consumer behaviour." },
      { term: "create an artificial need", pos: "verb phrase", phonetic: "tạo nhu cầu giả", meaning: "tạo nhu cầu giả", example: "Marketing can create an artificial need." },
      { term: "make an informed choice", pos: "verb phrase", phonetic: "đưa ra lựa chọn có cân nhắc", meaning: "đưa ra lựa chọn có cân nhắc", example: "Clear information helps people make an informed choice." },
      { term: "have limited influence over", pos: "verb phrase", phonetic: "ít khả năng tác động đến", meaning: "ít khả năng tác động đến", example: "Individuals have limited influence over industrial design." },
      { term: "make a measurable difference", pos: "verb phrase", phonetic: "tạo khác biệt đo được", meaning: "tạo khác biệt đo được", example: "Small actions matter when millions make the same change." }
    ],
    grammar: {
      title: "B4 - Kiểm soát cấu trúc câu (23.5)",
      explanation: "Sửa mười câu. Mỗi câu ghi rõ nhóm lỗi: hòa hợp chủ ngữ - động từ, dạng động từ, giới từ, cấu trúc nhượng bộ, mệnh đề quan hệ, dạng thức. Sau đó chọn ba lỗi xuất hiện nhiều nhất và viết một câu mới cho mỗi lỗi để kiểm tra vận dụng.",
      drillQuestion: "1. Government and companies has more power than individuals.\n2. People should reduce the use of single-use plastics.\n3. This can contribute for lower emissions.\n4. Many advertisement creates artificial needs.\n5. Consumers are influenced by advertisements which makes products look necessary.\n6. Although individuals cannot solve everything but their choices still matter.\n7. The solution should focus in industrial pollution.\n8. Companies need be responsible for the waste they produce.\n9. People buy more products because advertisements make them have desire.\n10. This policy may have a positive affect on consumption.",
      sampleAnswer: "1. Government and companies HAVE more power than individuals. (S-V)\n2. Câu đúng. (collocation tự nhiên: reduce the use of)\n3. This can contribute TO lower emissions. (giới từ: contribute to)\n4. Many ADVERTISEMENTS CREATE artificial needs. (S-V số nhiều)\n5. ...advertisements which MAKE products look necessary. (which → mệnh đề chủ ngữ số nhiều 'advertisements')\n6. Although individuals cannot solve everything, their choices still matter. (không dùng although + but)\n7. The solution should focus ON industrial pollution. (giới từ: focus on)\n8. Companies need TO BE responsible for the waste they produce. (need to + V)\n9. ...because advertisements make them desire / create desire for the product. (make sb have desire → bất thường)\n10. This policy may have a positive EFFECT on consumption. (affect = động từ, effect = danh từ)",
    },
    deliverables: [
      "Mục tiêu có thể đo lường theo phiếu áp lực (Day18-Target)",
      "Một bộ bài sửa lỗi hoàn chỉnh (Day18-Set-A/B/C)",
      "Mười cụm từ hoặc ba cấu trúc ngữ pháp vận dụng lại (Day18-Phrase-Retest)",
      "Lần thực hiện thứ hai trong ngữ cảnh mới (Day18-Transfer-Test)",
      "Bằng chứng trước và sau khi sửa (Day18-Before-After)"
    ]
  },

  // ============================================================ DAY 19
  {
    day: 19,
    phase: 3,
    title: "Ngày 19: Một chủ đề, ba kỹ năng",
    theme: "AI Tutors in Education: chuyển giao Reading → Writing → Speaking",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: false,
    orientation: "Ngày 19 kiểm tra khả năng chuyển ý tưởng và ngôn ngữ giữa Reading, Writing và Speaking. Cùng một chủ đề, người học rút ra cơ chế từ bài đọc, phát triển cơ chế ấy thành lập luận viết và diễn đạt lại bằng ngôn ngữ nói tự nhiên. Nội dung chính được giữ, còn mức độ trang trọng, độ dài câu và cách đưa ví dụ phải thay đổi theo kỹ năng. Một câu Reading không được chuyển nguyên sang Writing; Speaking không dùng câu essay đọc thành tiếng. Kiểm tra chuyển giao cuối ngày (24.19): ý tưởng từ Reading được dùng nhưng không sao chép; lập trường trả lời đúng quan hệ 'replace'; mỗi đoạn thân bài giải thích cơ chế; câu Speaking có đặc điểm lời nói; vận dụng lại ít nhất mười hai cụm từ.",
    checklist: [
      "Reading 'AI Tutors - Support or Substitute?' với 14 câu (24.4 - 24.7)",
      "Bảng rà soát Reading: đáp án + đường đi đến đáp án (24.8)",
      "Sơ đồ ý trước khi viết (24.9) + ba câu thesis (24.10)",
      "Bài Task 2 250+ từ (24.11) hoặc đoạn vận dụng 170-210 trong 12 phút (24.13)",
      "Part 1 (20-30s/câu), Part 2, Part 3 (40-60s/câu) có ghi âm (24.14)",
      "Bản chép lời được sửa theo kí hiệu [VAGUE][LOGIC][GRAM][REG][PRON][REPEAT] (24.15)",
      "Ngân hàng 24 cụm từ chuyển giao được vận dụng lại (24.16 - 24.17)",
      "Ngữ pháp: giới hạn nhận định tương lai, nhượng bộ, văn phong nói vs học thuật (24.18)"
    ],
    overview: {
      schedule: [
        { time: "00-10m", name: "Nguyên tắc chuyển giao", note: "Reading → Writing → Speaking: giữ ý, đổi ngôn ngữ" },
        { time: "10-40m", name: "Reading có bấm giờ", note: "14 câu + bảng rà soát đường đi đến đáp án" },
        { time: "40-55m", name: "Sơ đồ ý + 3 thesis", note: "Phân tích đề 'eventually replace' + 3 phiên bản thesis" },
        { time: "55-90m", name: "Writing + Speaking", note: "Task 2 40 phút; Part 1-2-3 ghi âm; chép lời 1 câu Part 3" }
      ]
    },
    reading: {
      title: "Bài đọc 19 - AI Tutors: Support or Substitute?",
      source: "IELTS Marathon 21-Day Companion - Ngày 19, mục 24.4 - 24.7",
      strategy: "Câu 1-5: Matching Headings (đoạn C-G). Câu 6-10: True/False/Not Given. Câu 11-14: Sentence Completion KHÔNG QUÁ BA TỪ lấy từ passage.",
      passage: "A. The idea of a machine that can teach is older than the current excitement around artificial intelligence. Early educational software presented fixed explanations and marked simple answers. Its role was limited because every path had to be predicted by a human designer. Recent systems appear more flexible. They can generate examples, respond to questions in ordinary language and adapt practice according to a learner's previous performance. This has led some commentators to imagine a future in which every student has access to a patient personal tutor.\n\nB. The attraction is understandable. In a classroom of forty students, one teacher cannot continuously diagnose every individual misunderstanding. A student who is confused by fractions, paragraph development or verb tense may remain quiet because asking for help feels embarrassing. An AI tutor can offer immediate explanation without displaying impatience. It can also provide several versions of the same explanation and allow the learner to repeat a task privately.\n\nC. Personalisation, however, is often described too loosely. A system may adjust difficulty after a correct or incorrect answer, but genuine teaching requires more than moving a learner up or down a ladder. A wrong answer can come from a gap in knowledge, a careless reading, anxiety, unclear instructions or a deeper misconception. Unless the system identifies the real cause, personalised practice may become nothing more than efficiently repeating the wrong kind of exercise.\n\nD. Accuracy is another concern. Generative systems can produce fluent explanations that contain factual errors, invented sources or reasoning that sounds plausible but is weak. This is especially dangerous for inexperienced learners, who may lack the knowledge needed to recognise a confident mistake. A teacher can also be wrong, but schools normally have professional standards, curriculum controls and clear lines of responsibility. When an automated explanation causes harm, accountability may be divided among the school, software provider and user.\n\nE. Supporters argue that these weaknesses can be reduced through careful design. An educational system does not need unrestricted access to every possible answer. It can be connected to approved materials, required to show sources and programmed to admit uncertainty. Teachers can review the types of questions students ask and intervene when the pattern suggests a persistent misunderstanding. In this model, AI provides frequent low-stakes support while human professionals retain control over curriculum and judgment.\n\nF. The distribution of technology also matters. Personal tutoring has traditionally been available mainly to families who can pay for it. Low-cost digital support could widen access for learners in remote areas or schools with limited specialist staff. Yet access to a device is not the same as access to effective learning. Students also need reliable internet, a quiet space, basic digital literacy and enough self-discipline to continue when no adult is watching. A tool introduced in the name of equality may widen differences if advantaged students are better able to use it.\n\nG. Education is not only the transfer of information. Teachers notice changes in mood, build classroom trust, manage disagreement and decide when a learner needs encouragement rather than another explanation. Students also learn by listening to questions from classmates and discovering that other people approach a problem differently. An individual AI conversation may be efficient, but efficiency can remove the social friction through which patience, communication and intellectual humility develop.\n\nH. There is also a risk that schools use AI to solve a staffing problem created by underinvestment. If technology is introduced as an additional resource, it may reduce routine workload and give teachers more time for complex feedback. If it becomes a reason to increase class sizes or replace trained staff, the same tool could weaken education. The result depends less on whether AI is inherently good or bad than on the institutional decisions surrounding it.\n\nI. The most realistic future is therefore neither total replacement nor complete rejection. AI tutors are likely to become one layer of educational support: useful for practice, explanation and rapid feedback, but limited in judgment, emotional understanding and responsibility. Schools should evaluate them by asking not simply whether students enjoy the technology, but whether it improves learning, for whom it works, what errors it introduces and what human contact may be lost.",
      questions: [
        { id: "r-d19-q1", type: "heading_matching", text: "Paragraph C", headings: ["I. The social learning that efficiency may remove", "II. Why affordable software automatically creates equality", "III. The difference between adjustment and genuine diagnosis", "IV. A historical account of classroom sizes", "V. Ways to reduce unreliable output", "VI. The danger of confident but inaccurate explanations", "VII. Conditions that influence whether access is meaningful", "VIII. The emotional advantages of private tutoring"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "III", explanation: "Đoạn C: 'adjust difficulty' khác với 'identifies the real cause' — sự khác biệt giữa điều chỉnh và chẩn đoán thực sự." },
        { id: "r-d19-q2", type: "heading_matching", text: "Paragraph D", headings: ["I. The social learning that efficiency may remove", "II. Why affordable software automatically creates equality", "III. The difference between adjustment and genuine diagnosis", "IV. A historical account of classroom sizes", "V. Ways to reduce unreliable output", "VI. The danger of confident but inaccurate explanations", "VII. Conditions that influence whether access is meaningful", "VIII. The emotional advantages of private tutoring"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "VI", explanation: "Đoạn D: 'fluent explanations that contain factual errors... a confident mistake' — nguy hiểm của câu trả lời sai mà nghe hợp lý." },
        { id: "r-d19-q3", type: "heading_matching", text: "Paragraph E", headings: ["I. The social learning that efficiency may remove", "II. Why affordable software automatically creates equality", "III. The difference between adjustment and genuine diagnosis", "IV. A historical account of classroom sizes", "V. Ways to reduce unreliable output", "VI. The danger of confident but inaccurate explanations", "VII. Conditions that influence whether access is meaningful", "VIII. The emotional advantages of private tutoring"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "V", explanation: "Đoạn E: 'connected to approved materials, required to show sources and programmed to admit uncertainty' — cách giảm đầu ra thiếu tin cậy." },
        { id: "r-d19-q4", type: "heading_matching", text: "Paragraph F", headings: ["I. The social learning that efficiency may remove", "II. Why affordable software automatically creates equality", "III. The difference between adjustment and genuine diagnosis", "IV. A historical account of classroom sizes", "V. Ways to reduce unreliable output", "VI. The danger of confident but inaccurate explanations", "VII. Conditions that influence whether access is meaningful", "VIII. The emotional advantages of private tutoring"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "VII", explanation: "Đoạn F: thiết bị chưa đủ — cần internet, không gian yên tĩnh, năng lực số, tự giác (điều kiện quyết định ý nghĩa của tiếp cận)." },
        { id: "r-d19-q5", type: "heading_matching", text: "Paragraph G", headings: ["I. The social learning that efficiency may remove", "II. Why affordable software automatically creates equality", "III. The difference between adjustment and genuine diagnosis", "IV. A historical account of classroom sizes", "V. Ways to reduce unreliable output", "VI. The danger of confident but inaccurate explanations", "VII. Conditions that influence whether access is meaningful", "VIII. The emotional advantages of private tutoring"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "I", explanation: "Đoạn G: 'efficiency can remove the social friction through which patience, communication and intellectual humility develop.'" },
        { id: "r-d19-q6", type: "true_false_not_given", text: "Early educational software could choose from paths that had not been planned by designers.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn A: 'every path had to be predicted by a human designer.'" },
        { id: "r-d19-q7", type: "true_false_not_given", text: "Some students may avoid asking questions because they feel embarrassed.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn B: 'may remain quiet because asking for help feels embarrassing.'" },
        { id: "r-d19-q8", type: "true_false_not_given", text: "The passage claims that AI systems are more likely to make errors than teachers.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN", explanation: "Đoạn D chỉ nói 'A teacher can also be wrong' — không so sánh xác suất mắc lỗi giữa AI và giáo viên." },
        { id: "r-d19-q9", type: "true_false_not_given", text: "Approved source material can be used to limit the information an educational system produces.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn E: 'It can be connected to approved materials, required to show sources...'." },
        { id: "r-d19-q10", type: "true_false_not_given", text: "Most students in remote areas already have a quiet place to study.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN", explanation: "Đoạn F: đề cập 'need... a quiet space' nhưng không nói 'most students already have'." },
        { id: "r-d19-q11", type: "sentence_completion", text: "Schools normally have professional standards, curriculum controls and clear lines of ____.", options: [], correct: "responsibility", explanation: "Đoạn D: 'clear lines of responsibility.'" },
        { id: "r-d19-q12", type: "sentence_completion", text: "Students need basic ____ as well as a device and internet connection.", options: [], correct: "digital literacy", explanation: "Đoạn F: 'basic digital literacy and enough self-discipline.'" },
        { id: "r-d19-q13", type: "sentence_completion", text: "Classroom interaction can help learners develop communication and intellectual ____.", options: [], correct: "humility", explanation: "Đoạn G: 'patience, communication and intellectual humility develop.'" },
        { id: "r-d19-q14", type: "sentence_completion", text: "AI may give teachers more time for ____ feedback.", options: [], correct: "complex", explanation: "Đoạn H: 'reduce routine workload and give teachers more time for complex feedback.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn chứa bằng chứng",
        paraphrasePair: "Đường đi: từ khóa định vị → paraphrase tương ứng → quy tắc logic",
        errorReason: "Ghi mã lỗi + cặp diễn đạt tương đương cho từng câu sai hoặc đoán"
      }
    },
    listening: makeListening({
      day: 19,
      theme: "AI trong giáo dục",
      type: "Part 3 (Thảo luận về AI tutor)",
      part: "Part 3 (Hội thoại giữa sinh viên và giảng viên)",
      questions: [
        { id: "l-d19-q1", prompt: "Sinh viên dùng AI tutor nhiều nhất trong môn [ 1 ].", answer: "lập trình" },
        { id: "l-d19-q2", prompt: "Ứng dụng cung cấp phản hồi trung bình trong [ 2 ] giây.", answer: "30" },
        { id: "l-d19-q3", prompt: "Giảng viên lo ngại sinh viên [ 3 ] trong các kỳ thi.", answer: "gian lận" },
        { id: "l-d19-q4", prompt: "Nhà trường chọn 50 sinh viên thuộc nhóm [ 4 ] để thử nghiệm.", answer: "có nguy cơ" }
      ]
    }),
    writing: {
      task: "Bài Writing Task 2 (24.11) - chủ đề chuyển giao",
      prompt: "ĐỀ BÀI:\nSome people believe that artificial intelligence will eventually replace teachers in schools. To what extent do you agree or disagree?\n\nThời gian gợi ý: 8 phút planning • 32 phút writing • 5 phút checking. Viết ít nhất 250 từ.\n\nĐOẠN VẬN DỤNG 24.13 (170-210 từ, 12 phút):\nAI tutors may improve educational access, but access to technology does not always create equal learning opportunities. Explain why.",
      targetWords: "Bài chính: 250+ từ; Đoạn vận dụng: 170-210 từ trong 12 phút",
      guidance: "Phần mở bài chỉ làm hai việc: establish the debate + state a precise position. Kiểm tra xem thesis thể hiện rõ QUAN HỆ 'support or replace' hay mới nói chung chung rằng AI hữu ích. Tránh mở bài sáo rỗng 'In this day and age...'. Dùng khung phát triển đoạn: Claim → Mechanism → Example → Boundary/Limitation or Wider implication → Link back.",
      modelAnswer: "Gợi ý thesis: AI can already explain concepts and generate personalised practice, but these functions do not amount to replacing a teacher. I therefore disagree that schools will or should remove human educators, although AI is likely to become a powerful form of support.",
      examinerNotes: "Sơ đồ ý 24.9 bắt buộc trả lời: 'eventually replace' thực sự nghĩa là gì? Hỗ trợ và thay thế khác nhau ở điểm nào? Cơ chế mỗi đoạn: feature → learner behaviour → educational result → limitation."
    },
    speaking: {
      part: "Part 1 + Part 2 + Part 3 (technology and learning)",
      prompt: "Part 1 (mỗi câu 20-30 giây):\n1. Do you often use technology when you study?\n2. Is there an app that has helped you learn something?\n3. Do you prefer asking a teacher or searching for an answer yourself?\n4. Did your school use much educational technology?\n5. Is it easy for you to stay focused when studying online?\n\nLanguage target Part 1: I mainly use it for... • It is useful when..., but... • I would still rather... • The problem is that I can easily... • I tend to use it as a backup rather than...\n\nPart 2: Describe a piece of technology that helped you learn something.\nYou should say: what it was • what you learned with it • how you used it • and explain why it was useful or limited.\nOne-minute notes: Context • What the tool actually did • One specific moment • Limitation • Reflection.\n\nPart 3 (mỗi câu 40-60 giây):\n1. What kinds of learning tasks can technology handle well?\n2. Why do some students learn better with a human teacher?\n3. Could AI reduce educational inequality?\n4. Should schools allow students to use generative AI for homework?\n5. How might the role of teachers change in the future?\n6. What risks arise when schools depend too heavily on technology?\n\nCấu trúc Part 3: Position → mechanism → example → limitation → wider thought.",
      followUps: [
        "Could AI reduce educational inequality?",
        "Should schools allow students to use generative AI for homework?"
      ],
      selfEvaluationCriteria: [
        "Câu trả lời Part 3 có đủ: vị trí → cơ chế → ví dụ → giới hạn → suy nghĩ rộng hơn không?",
        "Bản chép lời có đánh dấu [VAGUE] thing/stuff/good/bad/useful, [LOGIC] claim thiếu mechanism, [GRAM] câu sụp sau khoảng dừng, [REG] ngôn ngữ giống essay, [PRON], [REPEAT] không?",
        "Rewrite as spoken English, not written English."
      ]
    },
    vocabulary: [
      { term: "personalised support", pos: "noun phrase", phonetic: "hỗ trợ cá nhân hóa", meaning: "hỗ trợ cá nhân hóa", example: "Speaking: help that fits the learner" },
      { term: "a recurring error pattern", pos: "noun phrase", phonetic: "lỗi lặp lại", meaning: "lỗi lặp lại", example: "Speaking: a mistake I keep making" },
      { term: "immediate feedback", pos: "noun phrase", phonetic: "phản hồi ngay", meaning: "phản hồi ngay", example: "Speaking: feedback straight away" },
      { term: "identify the underlying misconception", pos: "verb phrase", phonetic: "xác định hiểu lầm gốc", meaning: "xác định hiểu lầm gốc", example: "Speaking: work out why the student is wrong" },
      { term: "approved source material", pos: "noun phrase", phonetic: "nguồn đã kiểm duyệt", meaning: "nguồn đã kiểm duyệt", example: "Speaking: trusted course content" },
      { term: "acknowledge uncertainty", pos: "verb phrase", phonetic: "thừa nhận không chắc", meaning: "thừa nhận không chắc", example: "Speaking: say when it is not sure" },
      { term: "retain professional oversight", pos: "verb phrase", phonetic: "giữ giám sát chuyên môn", meaning: "giữ giám sát chuyên môn", example: "Speaking: keep a teacher in control" },
      { term: "expand educational access", pos: "verb phrase", phonetic: "mở rộng tiếp cận", meaning: "mở rộng tiếp cận", example: "Speaking: reach more learners" },
      { term: "widen existing inequalities", pos: "verb phrase", phonetic: "làm bất bình đẳng lớn hơn", meaning: "làm bất bình đẳng lớn hơn", example: "Speaking: help stronger students more" },
      { term: "digital literacy", pos: "noun phrase", phonetic: "năng lực số", meaning: "năng lực số", example: "Speaking: knowing how to use tools wisely" },
      { term: "self-directed learning", pos: "noun phrase", phonetic: "tự học có định hướng", meaning: "tự học có định hướng", example: "Speaking: study without someone watching" },
      { term: "peer interaction", pos: "noun phrase", phonetic: "tương tác bạn học", meaning: "tương tác bạn học", example: "Speaking: learning from classmates" },
      { term: "clear accountability", pos: "noun phrase", phonetic: "trách nhiệm rõ ràng", meaning: "trách nhiệm rõ ràng", example: "Speaking: knowing who is responsible" },
      { term: "reduce administrative workload", pos: "verb phrase", phonetic: "giảm việc hành chính", meaning: "giảm việc hành chính", example: "Speaking: save teachers routine work" },
      { term: "context-dependent impact", pos: "noun phrase", phonetic: "tác động tùy bối cảnh", meaning: "tác động tùy bối cảnh", example: "Speaking: it depends on how it is used" },
      { term: "over-reliance on technology", pos: "noun phrase", phonetic: "phụ thuộc quá mức", meaning: "phụ thuộc quá mức", example: "Speaking: depending on it too much" }
    ],
    grammar: {
      title: "Ngữ pháp và mức độ trang trọng (24.18)",
      explanation: "Ba phần: (A) giới hạn nhận định về tương lai — dùng is likely to, may, unlikely, depend on; (B) nhượng bộ và duy trì lập trường — although, while, admittedly, provided that; (C) chuyển văn phong học thuật khô khan thành lời nói tự nhiên.",
      drillQuestion: "A. REWRITE (giới hạn nhận định):\n1. Every student will learn better with AI.\n2. AI makes education equal.\n3. Teachers cannot compete with technology.\n4. Schools that use AI get higher results.\n5. Students become lazy when they use AI.\n\nB. HOÀN THÀNH CÂU:\n1. Although AI can provide immediate feedback, ____.\n2. While digital tutoring may widen access, ____.\n3. Admittedly, teachers cannot give every learner constant individual attention, but ____.\n4. AI can support homework, provided that ____.\n\nC. LÀM TỰ NHIÊN HƠN (Speaking version):\n1. It is imperative that educational institutions retain professional oversight.\n2. The utilisation of artificial intelligence may exacerbate pre-existing inequality.\n3. Learners may demonstrate excessive dependence on automated systems.\n4. This technological intervention facilitates immediate diagnostic feedback.",
      sampleAnswer: "A. 1. AI is likely to help many students learn more effectively, particularly when it is well designed. / 2. AI may improve access, but it can also widen existing gaps. / 3. Teachers can outperform AI in judgment, emotional understanding and responsibility. / 4. The results will depend on how the technology is used, not on the technology alone. / 5. Students may become more passive if AI replaces effort, but this depends on how it is introduced.\nB. Gợi ý: 1. ..., it cannot replace diagnostic judgment. 2. ..., access alone does not create equal learning. 3. ..., schools can compensate through class size and feedback. 4. ..., teachers set clear expectations and review output.\nC. 1. Schools really need to keep professional oversight. / 2. Using AI could make inequality worse. / 3. Learners may depend too much on automated systems. / 4. This technology gives quick diagnostic feedback.",
    },
    deliverables: [
      "Đáp án Reading + nhật ký bằng chứng (Day19-Reading-Log)",
      "Ba câu thesis (Day19-Thesis-3)",
      "Một bài luận hoàn chỉnh hoặc đoạn thân bài có bấm giờ (Day19-Essay)",
      "Một đoạn văn vận dụng 12 phút (Day19-Transfer-Paragraph)",
      "Sáu bản ghi âm Part 3 (hoặc ba bản ở mức 60 phút) (Day19-Speaking)",
      "Một bản chép lời đã sửa (Day19-Transcript)",
      "24-phrase transfer bank (Day19-Phrase-Bank)"
    ]
  },

  // ============================================================ DAY 20 (FULL MOCK TEST)
  {
    day: 20,
    phase: 3,
    title: "Ngày 20: Thi thử IELTS (Full Mock)",
    theme: "Full Mock Test: mô phỏng buổi thi liền mạch",
    isCheckpoint: false,
    checkpointNum: 0,
    isPriorityRemediation: false,
    isMockTest: true,
    isFinalReview: false,
    orientation: "Buổi thi thử mô phỏng quá trình làm bài liền mạch, vì thế người học cần chuẩn bị thời gian, không gian và dụng cụ trước khi bắt đầu. Giữ đúng giới hạn đã đặt ra, không tra cứu và không dùng trợ giúp bên ngoài để sửa bài. Thứ tự: Academic Reading 60 phút (40 câu) → nghỉ 15-20 phút → Academic Writing 60 phút → nghỉ 10 phút → Speaking 11-14 phút có ghi âm. Điện thoại ở chế độ máy bay, chỉ dùng để bấm giờ và ghi âm. Mức 90 phút: làm Bài đọc 1+2 trong 40 phút, Task 2 trong 40 phút, Speaking đầy đủ; phiên bản rút gọn phải được ghi đúng tên để kết quả các lần luyện còn so sánh được. Sau buổi mô phỏng, phần rà soát cần tách lỗi do áp lực khỏi lỗi do thiếu kiến thức.",
    checklist: [
      "Chuẩn bị thời gian, không gian, dụng cụ; điện thoại chế độ máy bay",
      "Academic Reading 60 phút, 40 câu (3 passage)",
      "Academic Writing 60 phút: Task 1 (20 phút) + Task 2 (40 phút)",
      "Speaking 11-14 phút, ghi âm liên tục trong một tệp",
      "Báo cáo kết quả: điểm + thời gian theo từng section (25.26)",
      "Bảng phân loại lỗi: lỗi do áp lực vs lỗi kỹ năng (25.27)",
      "Ba câu hỏi sau buổi thi thử (25.28) + năm lỗi ưu tiên cho Ngày 21"
    ],
    overview: {
      schedule: [
        { time: "00-60m", name: "Academic Reading", note: "3 bài đọc, 40 câu; ghi đủ đáp án trước khi hết giờ" },
        { time: "60-80m", name: "Nghỉ", note: "15-20 phút" },
        { time: "80-140m", name: "Academic Writing", note: "Task 1 20 phút (bài 1) + Task 2 40 phút" },
        { time: "140-150m", name: "Nghỉ", note: "10 phút" },
        { time: "150-165m", name: "Speaking", note: "11-14 phút, ghi âm liên tục" },
        { time: "165-180m", name: "Báo cáo kết quả", note: "Bảng điểm/thời gian + phân loại lỗi áp lực vs kỹ năng" }
      ]
    },
    reading: {
      title: "Bài thi thử Academic Reading (40 câu - 60 phút)",
      source: "IELTS Marathon 21-Day Companion - Ngày 20, mục 25.3 - 25.15",
      strategy: "Bài 1: 13 câu (Q1-13). Bài 2: 13 câu (Q14-26). Bài 3: 14 câu (Q27-40). Điều kiện: không tạm dừng đồng hồ; ghi đầy đủ đáp án trước khi hết 60 phút.",
      passages: [
        {
          title: "Bài đọc 1 - Repair Culture and the Return of Maintenance",
          strategy: "Câu 1-6: True/False/Not Given. Câu 7-10: Matching Information (đoạn A-I). Câu 11-13: Sentence Completion KHÔNG QUÁ HAI TỪ lấy từ passage.",
          passage: "A. For much of human history, repairing an object was an ordinary part of ownership. Clothes were altered, tools were sharpened, furniture was restored and mechanical devices were opened by local specialists who understood how individual parts worked. This was partly a matter of culture, but it was also economic necessity. Manufactured goods were relatively expensive, supply chains were slower and replacement could cost a substantial share of household income. Skills of maintenance therefore had visible value.\n\nB. The expansion of mass production changed this relationship. Standardised manufacturing made many products cheaper, while international distribution placed new goods within easy reach of consumers. As prices fell, repair sometimes became financially irrational. A technician might charge almost as much to diagnose and fix a small appliance as a shop charged for a replacement. At the same time, advertising encouraged buyers to associate newer models with progress, style and personal identity. Disposal was no longer simply the result of physical failure. It became connected to changing expectations.\n\nC. Product design has also affected repair. Some modern devices use glued cases, specialised screws or components fixed together in a way that prevents individual replacement. Batteries may be difficult to remove, and software can restrict a new component unless it is recognised by the manufacturer. These choices can make products thinner, safer or more resistant to water, so it is too simple to assume that every sealed design is intended to force a new purchase. Nevertheless, the practical result is often the same: independent repair becomes difficult or uneconomical.\n\nD. The right-to-repair movement emerged in response to these barriers. Campaigners argue that owners and independent technicians should be able to obtain spare parts, diagnostic information, software tools and repair manuals on reasonable terms. Their claim is not that every consumer must personally open a complex device. Rather, ownership should include the realistic possibility of choosing who repairs it. Without access to information and compatible parts, a local technician may be prevented from fixing a product even when the physical problem is minor.\n\nE. Manufacturers raise several objections. Incorrect repair can create electrical, medical or mechanical risks. Opening a product may expose personal data or weaken security features. Companies also argue that unrestricted access to software and design information can threaten intellectual property. These concerns are not imaginary. A badly repaired battery, vehicle or medical device can cause serious harm. The difficult policy question is therefore how to provide access while preserving safety, cybersecurity and clear responsibility when something goes wrong.\n\nF. Community repair cafés offer one response at a smaller scale. Volunteers help visitors mend household objects, bicycles, clothing and electronics, often without charging for labour. Their environmental effect is modest compared with industrial waste systems, but their social value can be larger than the number of objects saved. Participants exchange practical knowledge, older residents pass on skills, and people begin to see broken products as understandable objects rather than sealed mysteries. Such events cannot repair every advanced device, yet they can restore confidence in maintenance.\n\nG. Environmental arguments for repair also require care. Extending the life of a product usually reduces demand for new materials and manufacturing, but repair is not automatically the greener choice in every case. An old refrigerator that consumes very large amounts of electricity may have a higher lifetime impact than a more efficient replacement. Transporting a heavy product long distances for specialised repair can also create emissions. A responsible assessment considers manufacturing, energy use, transport, expected lifespan and the availability of parts rather than treating repair as a moral absolute.\n\nH. Policy is beginning to move beyond simple slogans. Some proposals require manufacturers to publish repairability scores, provide parts for a minimum period or design products so that common components can be replaced. Digital product records may eventually show materials, repair history and compatible parts. However, rules can fail if replacement components are technically available but priced so high that repair remains unrealistic. Effective policy must consider information, design, price and the training of technicians together.\n\nI. The revival of repair does not mean returning to a romantic past in which every object lasted forever. Modern products are more complex, and some failures genuinely require specialist control. The stronger principle is that disposal should not be the default response to a minor fault simply because knowledge and parts have been withheld. A repair culture gives consumers another option. Whether they use it should depend on evidence about cost, safety and environmental impact, not on a system that makes the choice impossible from the beginning.",
          questions: [
            { id: "r-d20-p1-q1", type: "true_false_not_given", text: "In the past, the high relative cost of manufactured goods made repair economically valuable.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn A: 'Manufactured goods were relatively expensive... Skills of maintenance therefore had visible value.'" },
            { id: "r-d20-p1-q2", type: "true_false_not_given", text: "The passage says consumers became less willing to repair products solely because they grew lazy.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn B: nguyên nhân là chi phí (financially irrational) và marketing ('progress, style and personal identity'), không phải 'solely because they grew lazy'." },
            { id: "r-d20-p1-q3", type: "true_false_not_given", text: "Every sealed product is deliberately designed to make consumers buy a replacement.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn C: 'it is too simple to assume that every sealed design is intended to force a new purchase' (bẫy 'every')." },
            { id: "r-d20-p1-q4", type: "true_false_not_given", text: "Right-to-repair campaigners want independent technicians to have reasonable access to manuals and parts.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn D: 'owners and independent technicians should be able to obtain spare parts, diagnostic information, software tools and repair manuals on reasonable terms.'" },
            { id: "r-d20-p1-q5", type: "true_false_not_given", text: "The passage states that manufacturers' safety objections are entirely dishonest.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn E: 'These concerns are not imaginary.' (bẫy 'entirely dishonest')." },
            { id: "r-d20-p1-q6", type: "true_false_not_given", text: "Repairing an old product always causes less environmental damage than replacing it.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn G: 'repair is not automatically the greener choice in every case' (bẫy 'always')." },
            { id: "r-d20-p1-q7", type: "matching_info", text: "A community benefit that extends beyond the number of products repaired", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correct: "F", explanation: "Đoạn F: 'their social value can be larger than the number of objects saved.'" },
            { id: "r-d20-p1-q8", type: "matching_info", text: "A reason a new component may not work even when it physically fits", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correct: "C", explanation: "Đoạn C: 'software can restrict a new component unless it is recognised by the manufacturer.'" },
            { id: "r-d20-p1-q9", type: "matching_info", text: "A warning that nominal access to parts may still be ineffective", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correct: "H", explanation: "Đoạn H: 'rules can fail if replacement components are technically available but priced so high that repair remains unrealistic.'" },
            { id: "r-d20-p1-q10", type: "matching_info", text: "The idea that ownership should include a choice of repair provider", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correct: "D", explanation: "Đoạn D: 'ownership should include the realistic possibility of choosing who repairs it.'" },
            { id: "r-d20-p1-q11", type: "sentence_completion", text: "Advertising connected newer products with progress, style and personal ____.", options: [], correct: "identity", explanation: "Đoạn B: 'associate newer models with progress, style and personal identity.'" },
            { id: "r-d20-p1-q12", type: "sentence_completion", text: "Repair policy must protect safety, cybersecurity and clear ____.", options: [], correct: "responsibility", explanation: "Đoạn E: 'preserving safety, cybersecurity and clear responsibility when something goes wrong.'" },
            { id: "r-d20-p1-q13", type: "sentence_completion", text: "A complete environmental assessment should include manufacturing, energy use, transport and expected ____.", options: [], correct: "lifespan", explanation: "Đoạn G: 'considers manufacturing, energy use, transport, expected lifespan and the availability of parts.'" }
          ]
        },
        {
          title: "Bài đọc 2 - Paying for Congestion",
          strategy: "Câu 14-19: Matching Headings (đoạn B-G). Câu 20-23: Multiple Choice. Câu 24-26: Short Answer KHÔNG QUÁ BA TỪ từ passage.",
          passage: "A. Traffic congestion is often described as a shortage of road capacity, leading governments to build wider roads or additional routes. Yet new capacity can attract journeys that were previously avoided, delayed or made by another mode. Over time, traffic may rise until the improved road is crowded again. This pattern, sometimes called induced demand, suggests that congestion is not only an engineering problem. It is also a problem of how limited road space is allocated.\n\nB. Road pricing begins with a simple economic idea: when a resource is scarce and free at the point of use, demand can exceed the amount available. A driver entering a crowded city centre imposes costs on others by adding delay, pollution and noise. These costs are not fully reflected in the private price of the journey. A congestion charge attempts to make part of that social cost visible, particularly during times and in places where road space is under greatest pressure.\n\nC. The effect of a charge depends heavily on design. A flat daily fee may discourage occasional visitors but have little influence on a high-income commuter who drives every day. A charge that varies by time, location or vehicle type can target congestion more precisely, although it becomes harder for the public to understand. Exemptions may be necessary for emergency vehicles, people with severe mobility needs or workers whose schedules fall outside public transport hours. Too many exemptions, however, can weaken the system.\n\nD. Critics frequently raise fairness. A fee that is minor for a wealthy driver can be significant for a lower-income worker. However, income alone does not reveal who benefits or loses. In many cities, lower-income residents are less likely to drive into the centre and more likely to depend on buses. If charge revenue improves public transport, they may gain even without paying the fee. Conversely, a low-paid night worker with no reliable alternative may carry a disproportionate burden. Fairness therefore depends on travel patterns and how the revenue is used.\n\nE. Behavioural response is rarely uniform. Some drivers change departure time, combine trips or switch to public transport. Others continue driving and pay. Businesses may alter delivery schedules, while employers may introduce flexible hours. The most successful schemes do not require every journey to disappear. Even a modest reduction in traffic at the busiest point can improve flow because congested networks often operate close to their physical limit.\n\nF. Public acceptance can change after introduction. Before a scheme begins, people focus on the visible cost they may have to pay. Potential benefits such as more reliable buses, cleaner air or shorter travel times feel uncertain. Once those benefits become observable, opposition may decline. This is not guaranteed. Acceptance is more likely when the purpose is clear, the charge is easy to understand and the revenue is visibly returned to transport improvements rather than absorbed into a general budget.\n\nG. Technology makes complex charging possible but creates new concerns. Cameras or location data can identify vehicles, calculate fees and enforce payment. The same system may reveal where and when individuals travel. Strong limits on data retention, access and secondary use are therefore essential. Administrative cost also matters. A theoretically perfect scheme that consumes a large share of revenue in operation may deliver less public value than a simpler design.\n\nH. Road pricing is not a universal answer. Small towns with light traffic have little reason to introduce it, and cities without credible transport alternatives risk charging people for a choice they do not genuinely possess. Nor can pricing replace good land-use planning, safe walking routes or reliable public transport. Its value lies in managing the most crowded roads while generating resources for alternatives. The policy works best as one part of a wider mobility system rather than as punishment for drivers.",
          questions: [
            { id: "r-d20-p2-q14", type: "heading_matching", text: "Paragraph B", headings: ["I. Privacy and the cost of administration", "II. The economic logic behind a charge", "III. Why every driver will stop using a car", "IV. Different responses to the same price signal", "V. Designing a charge without destroying its effect", "VI. How visible outcomes may change public opinion", "VII. Fairness depends on more than income", "VIII. The need to build roads before introducing fees", "IX. A policy suitable for every community"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], correct: "II", explanation: "Đoạn B: 'a simple economic idea: when a resource is scarce...' — logic kinh tế của việc thu phí." },
            { id: "r-d20-p2-q15", type: "heading_matching", text: "Paragraph C", headings: ["I. Privacy and the cost of administration", "II. The economic logic behind a charge", "III. Why every driver will stop using a car", "IV. Different responses to the same price signal", "V. Designing a charge without destroying its effect", "VI. How visible outcomes may change public opinion", "VII. Fairness depends on more than income", "VIII. The need to build roads before introducing fees", "IX. A policy suitable for every community"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], correct: "V", explanation: "Đoạn C: 'The effect of a charge depends heavily on design... vary by time, location or vehicle type... Too many exemptions can weaken the system.'" },
            { id: "r-d20-p2-q16", type: "heading_matching", text: "Paragraph D", headings: ["I. Privacy and the cost of administration", "II. The economic logic behind a charge", "III. Why every driver will stop using a car", "IV. Different responses to the same price signal", "V. Designing a charge without destroying its effect", "VI. How visible outcomes may change public opinion", "VII. Fairness depends on more than income", "VIII. The need to build roads before introducing fees", "IX. A policy suitable for every community"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], correct: "VII", explanation: "Đoạn D: 'income alone does not reveal who benefits or loses... Fairness therefore depends on travel patterns and how the revenue is used.'" },
            { id: "r-d20-p2-q17", type: "heading_matching", text: "Paragraph E", headings: ["I. Privacy and the cost of administration", "II. The economic logic behind a charge", "III. Why every driver will stop using a car", "IV. Different responses to the same price signal", "V. Designing a charge without destroying its effect", "VI. How visible outcomes may change public opinion", "VII. Fairness depends on more than income", "VIII. The need to build roads before introducing fees", "IX. A policy suitable for every community"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], correct: "IV", explanation: "Đoạn E: 'Behavioural response is rarely uniform. Some drivers change... Others continue driving and pay.'" },
            { id: "r-d20-p2-q18", type: "heading_matching", text: "Paragraph F", headings: ["I. Privacy and the cost of administration", "II. The economic logic behind a charge", "III. Why every driver will stop using a car", "IV. Different responses to the same price signal", "V. Designing a charge without destroying its effect", "VI. How visible outcomes may change public opinion", "VII. Fairness depends on more than income", "VIII. The need to build roads before introducing fees", "IX. A policy suitable for every community"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], correct: "VI", explanation: "Đoạn F: 'Once those benefits become observable, opposition may decline... Acceptance is more likely when revenue is visibly returned to transport improvements.'" },
            { id: "r-d20-p2-q19", type: "heading_matching", text: "Paragraph G", headings: ["I. Privacy and the cost of administration", "II. The economic logic behind a charge", "III. Why every driver will stop using a car", "IV. Different responses to the same price signal", "V. Designing a charge without destroying its effect", "VI. How visible outcomes may change public opinion", "VII. Fairness depends on more than income", "VIII. The need to build roads before introducing fees", "IX. A policy suitable for every community"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], correct: "I", explanation: "Đoạn G: 'location data... may reveal where and when individuals travel' (privacy) + 'Administrative cost also matters.'" },
            { id: "r-d20-p2-q20", type: "multiple_choice", text: "What is the main point of Paragraph A?", options: ["A. Road construction never increases capacity.", "B. Congestion can return because added road space changes travel behaviour.", "C. Engineers deliberately underestimate future traffic.", "D. Drivers prefer delayed journeys to public transport."], correct: "B", explanation: "Đoạn A: 'new capacity can attract journeys that were previously avoided, delayed or made by another mode... traffic may rise until the improved road is crowded again.'" },
            { id: "r-d20-p2-q21", type: "multiple_choice", text: "According to Paragraph C, a charge that varies by time and location", options: ["A. is always more popular with the public.", "B. makes all exemptions unnecessary.", "C. can target congestion more accurately but is more complex.", "D. mainly affects occasional visitors."], correct: "C", explanation: "Đoạn C: 'can target congestion more precisely, although it becomes harder for the public to understand.'" },
            { id: "r-d20-p2-q22", type: "multiple_choice", text: "Why might some lower-income residents benefit from road pricing?", options: ["A. They are automatically exempt from every charge.", "B. Revenue may improve the public transport they use.", "C. Businesses will pay their commuting costs.", "D. Road pricing reduces the price of fuel."], correct: "B", explanation: "Đoạn D: 'If charge revenue improves public transport, they may gain even without paying the fee.'" },
            { id: "r-d20-p2-q23", type: "multiple_choice", text: "The writer suggests that successful schemes", options: ["A. must remove every car journey at peak time.", "B. work because congested networks can improve after a relatively small traffic reduction.", "C. require employers to ban fixed working hours.", "D. depend mainly on increasing delivery traffic."], correct: "B", explanation: "Đoạn E: 'Even a modest reduction in traffic at the busiest point can improve flow because congested networks often operate close to their physical limit.'" },
            { id: "r-d20-p2-q24", type: "short_answer", text: "What kind of budget should charge revenue not simply disappear into?", options: [], correct: "general budget", explanation: "Đoạn F: 'not absorbed into a general budget.'" },
            { id: "r-d20-p2-q25", type: "short_answer", text: "What type of data may reveal where and when individuals travel?", options: [], correct: "location data", explanation: "Đoạn G: 'location data can identify vehicles... The same system may reveal where and when individuals travel.'" },
            { id: "r-d20-p2-q26", type: "short_answer", text: "What must a city offer before charging people for driving becomes credible?", options: [], correct: "credible transport alternatives", explanation: "Đoạn H: 'cities without credible transport alternatives risk charging people for a choice they do not genuinely possess.'" }
          ]
        },
        {
          title: "Bài đọc 3 - Citizen Science - More Than Free Data?",
          strategy: "Câu 27-32: Yes/No/Not Given. Câu 33-37: Summary Completion KHÔNG QUÁ HAI TỪ từ passage. Câu 38-40: Matching Features.",
          passage: "A. Scientific research is often imagined as work conducted by trained specialists inside laboratories or universities. Yet members of the public have long contributed observations of weather, wildlife, stars and local environments. The modern term citizen science covers projects in which volunteers take part in collecting, classifying or sometimes interpreting data. Digital tools have expanded the scale of participation, allowing thousands of people to submit observations through phones and online platforms.\n\nB. The obvious advantage is reach. A small research team cannot be present across an entire country every day, but a large network of volunteers can record seasonal change, animal movement or air quality across many locations. This is particularly valuable when the research question depends on repeated observation rather than one highly specialised measurement. The resulting dataset may reveal patterns that would remain invisible in a small professional sample.\n\nC. Large quantity does not guarantee reliable data. Volunteers differ in experience, equipment and attention. They may record common species accurately but misidentify rare ones, or submit more observations from attractive and easily reached places. Researchers address these problems through training, photographs, repeated observations and statistical checks. Some projects send unusual records to experts for verification. The aim is not to pretend volunteer data are perfect, but to understand and manage their limitations.\n\nD. One project, Coastal Watch, asks volunteers to photograph sections of shoreline after storms. Images are taken from marked positions so that erosion and debris can be compared over time. The task requires little specialist knowledge, but consistent location and angle are essential. Researchers use the photographs to identify beaches needing detailed professional surveys. Volunteers therefore act as an early-warning network rather than replacing coastal scientists.\n\nE. Night Sky Count uses a different model. Participants compare the stars visible from their location with reference charts, producing an estimate of light pollution. Individual estimates are imprecise, but thousands of reports can show broad geographical patterns. Because the activity can be completed from a garden or street, it reaches people who might never join a formal astronomy organisation. The project also makes an invisible environmental issue easier to understand.\n\nF. Urban Pollinator Map requires more interpretation. Volunteers photograph bees, butterflies and other insects visiting flowers, then propose an identification. Other participants and experts review the image. This layered process turns disagreement into part of the method. A mistaken label is not simply deleted; it may become an opportunity to explain which physical feature distinguishes two similar species.\n\nG. Participation is not maintained by scientific purpose alone. Volunteers are more likely to remain involved when they receive feedback, see how their observations contribute and feel part of a community. Projects that collect data without communicating results can create the impression that the public is being used as unpaid labour. Recognition does not need to involve money, but it should make contribution visible and meaningful.\n\nH. Ethical questions become more serious when observations concern private land, health or human behaviour. A photograph of an insect may accidentally include a person or reveal the precise location of a rare species vulnerable to collection. Health projects may gather sensitive information. Organisers must explain how data will be stored, shared and anonymised. Enthusiasm for open science does not remove the need for privacy and informed consent.\n\nI. Citizen science can also influence trust. When people participate in measurement, they may understand more clearly why scientific conclusions include uncertainty and why methods matter. However, participation does not automatically produce agreement. Volunteers may distrust a project if researchers ignore local knowledge or communicate only after decisions have already been made. Respectful collaboration requires scientists to treat public contributors as partners with experience, not merely as inexpensive sensors.\n\nJ. The strongest citizen-science projects are therefore designed around a suitable relationship between task and participant. Volunteers can provide extraordinary geographical coverage, local knowledge and repeated observation. Professionals remain essential for research design, advanced measurement, verification and interpretation. The question is not whether public participation is as good as professional science in every respect. It is which parts of a scientific problem can be opened to wider participation without sacrificing quality, ethics or honesty about uncertainty.",
          questions: [
            { id: "r-d20-p3-q27", type: "yes_no_not_given", text: "Citizen science began only after smartphones became widely available.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn A: 'members of the public have long contributed observations' — trước cả smartphone." },
            { id: "r-d20-p3-q28", type: "yes_no_not_given", text: "Volunteer networks are especially useful when research requires observations across many places.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn B: 'particularly valuable when the research question depends on repeated observation rather than one highly specialised measurement.'" },
            { id: "r-d20-p3-q29", type: "yes_no_not_given", text: "The writer believes that volunteer data should be accepted without expert checking.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn C: 'Some projects send unusual records to experts for verification... to understand and manage their limitations.'" },
            { id: "r-d20-p3-q30", type: "yes_no_not_given", text: "Coastal Watch volunteers perform the same work as professional coastal scientists.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn D: 'as an early-warning network rather than replacing coastal scientists.'" },
            { id: "r-d20-p3-q31", type: "yes_no_not_given", text: "Feedback can help projects keep volunteers involved.", options: ["YES", "NO", "NOT GIVEN"], correct: "YES", explanation: "Đoạn G: 'Volunteers are more likely to remain involved when they receive feedback.'" },
            { id: "r-d20-p3-q32", type: "yes_no_not_given", text: "Every citizen-science participant becomes more trusting of scientific institutions.", options: ["YES", "NO", "NOT GIVEN"], correct: "NO", explanation: "Đoạn I: 'participation does not automatically produce agreement' (bẫy 'every')." },
            { id: "r-d20-p3-q33", type: "sentence_completion", text: "In the summary: unusual records may be sent to ____.", options: [], correct: "experts", explanation: "Đoạn C: 'Some projects send unusual records to experts for verification.'" },
            { id: "r-d20-p3-q34", type: "sentence_completion", text: "In the summary: Coastal Watch requires a consistent location and ____.", options: [], correct: "angle", explanation: "Đoạn D: 'consistent location and angle are essential.'" },
            { id: "r-d20-p3-q35", type: "sentence_completion", text: "In the summary: disagreement can become part of the ____.", options: [], correct: "method", explanation: "Đoạn F: 'This layered process turns disagreement into part of the method.'" },
            { id: "r-d20-p3-q36", type: "sentence_completion", text: "In the summary: volunteers may feel like unpaid ____ when results are not communicated.", options: [], correct: "labour", explanation: "Đoạn G: 'the impression that the public is being used as unpaid labour.'" },
            { id: "r-d20-p3-q37", type: "sentence_completion", text: "In the summary: organisers must protect privacy and obtain informed ____.", options: [], correct: "consent", explanation: "Đoạn H: 'the need for privacy and informed consent.'" },
            { id: "r-d20-p3-q38", type: "matching_features", text: "It uses comparison with prepared visual references.", options: ["A. Coastal Watch", "B. Night Sky Count", "C. Urban Pollinator Map"], correct: "B", explanation: "Đoạn E: 'compare the stars visible from their location with reference charts.'" },
            { id: "r-d20-p3-q39", type: "matching_features", text: "It sends researchers evidence that can indicate where specialist investigation is needed.", options: ["A. Coastal Watch", "B. Night Sky Count", "C. Urban Pollinator Map"], correct: "A", explanation: "Đoạn D: 'identify beaches needing detailed professional surveys.'" },
            { id: "r-d20-p3-q40", type: "matching_features", text: "It uses community and expert review to improve identification.", options: ["A. Coastal Watch", "B. Night Sky Count", "C. Urban Pollinator Map"], correct: "C", explanation: "Đoạn F: 'Other participants and experts review the image... turns disagreement into part of the method.'" }
          ]
        }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng cho từng đáp án",
        paraphrasePair: "Cặp diễn đạt tương đương trong câu hỏi và passage",
        errorReason: "Phân loại: lỗi áp lực (đọc vội, bỏ qua giới hạn từ, sao chép sai chính tả) vs lỗi kỹ năng (không phân biệt F/NG, không nhận ra chức năng đoạn)"
      }
    },
    listening: makeListening({
      day: 20,
      theme: "đô thị bền vững (mock mở rộng)",
      type: "Full-listening review (Part 4 - Bài giảng đô thị bền vững)",
      part: "Part 4 (Bài giảng - thành phố ít kẹt xe)",
      questions: [
        { id: "l-d20-q1", prompt: "Sáng kiến giảm kẹt xe ưu tiên mở rộng [ 1 ] công cộng.", answer: "giao thông" },
        { id: "l-d20-q2", prompt: "Phí đi vào trung tâm được áp dụng từ [ 2 ] giờ sáng.", answer: "7" },
        { id: "l-d20-q3", prompt: "Doanh thu phí được đầu tư vào tuyến [ 3 ] mới.", answer: "xe buýt nhanh" },
        { id: "l-d20-q4", prompt: "Số chuyến đi xe đạp tăng [ 4 ] sau hai năm.", answer: "25%" }
      ]
    }),
    writing: {
      task: "Bài thi thử Academic Writing (60 phút: Task 1 = 20 phút, Task 2 = 40 phút)",
      prompt: "TASK 1 (20 phút, ít nhất 150 từ):\nThe line graph shows the percentages of commuters in Eastford who used private cars, public transport, or walking and cycling as their main method of travel between 2005 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.\n\nTASK 2 (40 phút, ít nhất 250 từ):\nĐỀ BÀI: Some people believe governments should spend more money on preventing illness than on treating people who are already ill. To what extent do you agree or disagree?",
      targetWords: "Task 1: 150+ từ; Task 2: 250+ từ",
      guidance: "Dàn ý Task 1: highest throughout • strongest change • stable category • closest gap • nhóm dữ liệu cho Body 1 • nhóm dữ liệu cho Body 2. Dàn ý Task 2 (8 phút): exact position • limiting comparison 'prevention than treatment' • chức năng Body 1 • chức năng Body 2 • concession • một ví dụ thực tế mỗi đoạn • final thesis wording. Kiểm tra trước khi nộp theo 25.20.",
      modelAnswer: "Gợi ý overview Task 1: Private cars were the dominant mode throughout the period, while the proportion using public transport and active travel rose steadily from 2005 to 2025.",
      examinerNotes: "Hoàn thành CẢ HAI bài Writing (25.2). Không được bỏ Task 1 để dành thời gian cho Task 2. Bài mock là công cụ chẩn đoán: kết quả thấp vẫn hữu ích nếu xác định được lỗi và điều chỉnh cách luyện tập."
    },
    speaking: {
      part: "Bài thi thử Speaking (ghi toàn bộ bài thi trong một tệp, 25.21)",
      prompt: "Part 1 - Hometown and daily travel:\n1. What do you like most about your hometown?\n2. Has your hometown changed much in recent years?\n3. How do you usually travel around your city?\n4. Do you enjoy walking?\n5. Is public transport convenient where you live?\n6. Do you think you will use a different form of transport in the future?\n\nPart 2: Describe a public place that you think is well designed.\nYou should say: where it is • what it looks like • what people do there • and explain why you think it is well designed.\n(One minute to prepare. Speak for one to two minutes.)\n\nPart 3 - Public spaces and city planning:\n1. What makes a public space useful to different age groups?\n2. Why are some parks and public facilities underused?\n3. Should governments spend more on public spaces or housing?\n4. How can city design influence people's health?\n5. Do modern cities give too much space to private cars?\n6. Will technology make cities more liveable in the future?",
      followUps: [
        "How can city design influence people's health?",
        "Do modern cities give too much space to private cars?"
      ],
      selfEvaluationCriteria: [
        "Nếu có thể, một người khác đọc câu hỏi NHƯNG không giải thích, không sửa lỗi, không động viên trong lúc thi (25.21)",
        "Báo cáo kết quả chỉ hoàn thành SAU KHI kết thúc toàn bộ buổi thi thử (25.25)",
        "Ba câu hỏi sau buổi thi: kỹ năng nào ổn định dưới áp lực? Kỹ năng nào đứng ở luyện tập nhưng biến mất khi thi thử? Việc sửa nhỏ nhất nào cải thiện lần sau?"
      ]
    },
    vocabulary: [
      { term: "induced demand", pos: "noun phrase", phonetic: "nhu cầu được kích tạo", meaning: "nhu cầu được kích tạo", example: "New road capacity can create induced demand." },
      { term: "a congestion charge", pos: "noun phrase", phonetic: "phí ùn tắc", meaning: "phí ùn tắc", example: "A congestion charge makes part of the social cost visible." },
      { term: "social cost", pos: "noun phrase", phonetic: "chi phí xã hội", meaning: "chi phí xã hội", example: "Delay and pollution are social costs of driving." },
      { term: "credible transport alternatives", pos: "noun phrase", phonetic: "lựa chọn giao thông đáng tin cậy", meaning: "lựa chọn giao thông đáng tin cậy", example: "Cities need credible transport alternatives before charging." },
      { term: "repairability", pos: "noun", phonetic: "khả năng sửa chữa", meaning: "khả năng sửa chữa", example: "Some propose publishing repairability scores." },
      { term: "right-to-repair", pos: "noun phrase", phonetic: "quyền được sửa chữa", meaning: "quyền được sửa chữa", example: "The right-to-repair movement emerged in response to design barriers." },
      { term: "expected lifespan", pos: "noun phrase", phonetic: "tuổi thọ dự kiến", meaning: "tuổi thọ dự kiến", example: "Assessment should consider expected lifespan." },
      { term: "citizen science", pos: "noun phrase", phonetic: "khoa học công dân", meaning: "khoa học công dân", example: "Citizen science relies on volunteers collecting data." },
      { term: "an early-warning network", pos: "noun phrase", phonetic: "mạng lưới cảnh báo sớm", meaning: "mạng lưới cảnh báo sớm", example: "Volunteers act as an early-warning network." },
      { term: "informed consent", pos: "noun phrase", phonetic: "sự đồng thuận có đầy đủ thông tin", meaning: "sự đồng thuận có đầy đủ thông tin", example: "Health projects must respect privacy and informed consent." },
      { term: "verification", pos: "noun", phonetic: "thẩm định", meaning: "thẩm định", example: "Experts remain essential for verification." },
      { term: "data retention", pos: "noun phrase", phonetic: "lưu giữ dữ liệu", meaning: "lưu giữ dữ liệu", example: "Strong limits on data retention are essential." }
    ],
    grammar: {
      title: "Kiểm tra bài Writing trước khi nộp (25.20)",
      explanation: "Rà soát theo checklist trước khi nộp. Mỗi mục kiểm tra bằng cách khoanh / gạch chân trong bài làm của mình, không kiểm tra theo trí nhớ.",
      drillQuestion: "TASK 1:\n• Overview nêu hai đặc điểm chính có giá trị khái quát.\n• Dữ liệu được nhóm hợp lý, không kể lần lượt theo từng năm.\n• Bài viết không tự thêm nguyên nhân hoặc ý kiến.\n• Đơn vị và năm đều chính xác.\n• Bài có ít nhất hai phép so sánh trực tiếp.\n\nTASK 2:\n• Lập trường được giữ nhất quán.\n• Bài viết đề cập cả biện pháp phòng ngừa và điều trị.\n• Mỗi luận điểm đều có phần giải thích cơ chế.\n• Ví dụ hợp lý và liên quan trực tiếp.\n• Kết luận không đưa thêm ý mới.",
      sampleAnswer: "Phân loại lỗi (25.27): Các lỗi do áp lực — đọc bằng chứng đúng nhưng chọn quá nhanh; bỏ qua giới hạn số từ; sao chép sai chính tả; viết overview trước khi thấy toàn bộ biểu đồ; đổi lập trường giữa bài; nói nhanh và mất âm cuối; bỏ dở câu Part 3 sau một ý. Các lỗi kỹ năng — không phân biệt được False với Not Given; không nhận ra vai trò của đoạn; claim không có cơ chế; không so sánh dữ liệu chính xác; thiếu ngữ pháp cho nhượng bộ; thiếu ngôn ngữ để paraphrase một ý cơ bản.",
    },
    deliverables: [
      "Phiếu trả lời Reading 40 câu (Day20-Reading-Answer-Sheet)",
      "Báo cáo Task 1 (Day20-Task1)",
      "Bài luận Task 2 (Day20-Task2)",
      "Bản ghi âm Speaking liên tục (Day20-Speaking)",
      "Báo cáo kết quả: điểm + thời gian từng section (Day20-Report)",
      "Năm lỗi ưu tiên cho Ngày 21 (Day20-Priority-5)"
    ]
  },

  // ============================================================ DAY 21 (FINAL REVIEW)
  {
    day: 21,
    phase: 3,
    title: "Ngày 21: Đánh giá cuối lộ trình",
    theme: "Final Audit: hồ sơ học tập, đối chiếu trước-sau và kế hoạch 30 ngày",
    isCheckpoint: true,
    checkpointNum: 21,
    isPriorityRemediation: false,
    isMockTest: false,
    isFinalReview: true,
    orientation: "Ngày cuối tổng hợp bằng chứng từ bài đánh giá đầu vào, các mốc kiểm tra và buổi thi thử hoàn chỉnh để đánh giá thay đổi trong 21 ngày. Chọn các cặp sản phẩm trước và sau có điều kiện tương đối giống nhau, rồi mô tả tiến bộ bằng tiêu chí cụ thể. Những lỗi vẫn lặp lại được đưa vào kế hoạch 30 ngày với tần suất luyện, dạng bài và cách kiểm tra rõ ràng. Lộ trình kết thúc khi người học xác định được nội dung đã cải thiện, điểm còn yếu và hành động tiếp theo. Bản chép lời và bản ghi âm Speaking cuối phải phản ánh trung thực năng lực hiện tại, không đọc lại câu đã học thuộc.",
    checklist: [
      "Reading 'Why Reflection Makes Learning Stick' + 12 câu (26.3 - 26.6)",
      "Bảng đối chiếu trước-sau theo tiêu chí Reading/Writing/Speaking (26.8 - 26.10)",
      "Bài Writing cuối: Nhiệm vụ A viết lại đề Ngày 1 (190-220 từ/22 phút) + Nhiệm vụ B (170-200 từ) (26.12 - 26.13)",
      "Tự chấm Writing cuối theo 4 tiêu chí kèm bằng chứng (26.14)",
      "Bản ghi âm Speaking cuối lộ trình (Part 1 + Part 2 + Part 3) (26.15)",
      "Rà soát từ vựng (26.18 - 26.20) + ngữ pháp toàn lộ trình 25 câu (26.21)",
      "Checklist hồ sơ học tập 10 sản phẩm (26.23)",
      "Kế hoạch 30 ngày: 3 ưu tiên + nhịp học hằng tuần + 7 quy tắc (26.25 - 26.27)",
      "Thư tổng kết 250-400 từ (26.28)"
    ],
    overview: {
      schedule: [
        { time: "00-20m", name: "Reading cuối lộ trình", note: "12 câu kèm bảng rà soát bằng chứng" },
        { time: "20-45m", name: "Đối chiếu trước-sau", note: "So sánh sản phẩm Ngày 1 với hôm nay theo tiêu chí cụ thể" },
        { time: "45-70m", name: "Writing cuối", note: "Nhiệm vụ A (22') + Nhiệm vụ B (170-200 từ)" },
        { time: "70-85m", name: "Speaking cuối + rà soát từ vựng/ngữ pháp", note: "Ghi âm không đọc kịch bản" },
        { time: "85-90m", name: "Kế hoạch 30 ngày", note: "3 ưu tiên + lịch tuần + thư tổng kết" }
      ]
    },
    reading: {
      title: "Bài đọc 21 - Why Reflection Makes Learning Stick",
      source: "IELTS Marathon 21-Day Companion - Ngày 21, mục 26.3 - 26.6",
      strategy: "Câu 1-5: Matching Headings (đoạn B-F). Câu 6-9: True/False/Not Given. Câu 10-12: Short Answer KHÔNG QUÁ BA TỪ từ passage.",
      passage: "A. Students often treat the end of a task as the end of learning. Once an answer has been checked or an essay has been submitted, attention moves immediately to the next exercise. This feels productive because the amount of completed work rises. Yet without reflection, the learner may remember the topic while failing to notice the process that led to success or error. A correct answer can therefore produce surprisingly little improvement.\n\nB. Reflection is sometimes misunderstood as writing a vague emotional diary. In effective learning, it is more concrete. The learner reconstructs what happened, identifies the decision that mattered and chooses a change for the next attempt. After a Reading error, for example, \"I need to be more careful\" provides almost no guidance. \"I ignored the word only and selected True even though the passage described several causes\" names both the trigger and the repair rule.\n\nC. This process supports what psychologists call metacognition: awareness of one's own thinking. Skilled learners do not simply know more. They are often better at judging what they know, recognising when a strategy is failing and selecting another one. This judgment is imperfect, particularly under pressure, but it can be trained. Prediction is useful here. Before checking an answer, students can record their confidence. A wrong answer chosen with high confidence reveals a deeper misconception than one selected after an admitted guess.\n\nD. Reflection becomes more powerful when it leads to retrieval. Reading a correction creates familiarity, but familiarity is not the same as being able to use the rule later. The learner should close the explanation and reconstruct it from memory. A Writing student who has learned the phrase place pressure on should produce a new sentence without looking at the model. A Reading student should explain the difference between False and Not Given using a fresh example.\n\nE. Transfer is the next test. Repeating the exact question can improve performance because the answer is remembered, not because the underlying skill has changed. A proper retest therefore alters the topic or surface form while preserving the same reasoning demand. If a student misunderstood an extreme qualifier in a passage about education, the retest might use all, never or solely in a passage about health. Successful transfer shows that the learner has acquired a rule rather than a single answer.\n\nF. Reflection also has a motivational role, but not in the usual sense of positive thinking. Large goals such as \"reach Band 7\" are psychologically distant and influenced by many variables. Smaller evidence is easier to trust: a paragraph now contains a mechanism, a two-minute answer has fewer long pauses, or a Reading review names the exact evidence line. These changes do not guarantee a final score, but they make progress visible and give the learner a reason to continue.\n\nG. There is a danger of turning reflection into another form of procrastination. A student can design elaborate trackers, colour-code every error and spend more time describing study than studying. Reflection should therefore be short enough to serve action. A useful review often answers four questions: What happened? Why did it happen? What will I change? When will I retest it? If the process produces no new behaviour, it is administration rather than learning.\n\nH. The final purpose of reflection is independence. A teacher can diagnose an essay or correct a pronunciation error, but no teacher is present for every future decision. Learners need to recognise their own recurring patterns and select an appropriate response. Independence does not mean refusing help. It means using feedback to build an internal system that continues working after the class, course or challenge has ended.",
      questions: [
        { id: "r-d21-q1", type: "heading_matching", text: "Paragraph B", headings: ["I. Visible progress without false promises", "II. Why confidence should never be recorded", "III. Reflection as a specific diagnosis", "IV. Using memory instead of rereading", "V. Testing a rule in a changed context", "VI. Completing more work is always better", "VII. Awareness and judgment of one's thinking", "VIII. The danger of independent learning"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "III", explanation: "Đoạn B: phản tư cụ thể — 'names both the trigger and the repair rule'." },
        { id: "r-d21-q2", type: "heading_matching", text: "Paragraph C", headings: ["I. Visible progress without false promises", "II. Why confidence should never be recorded", "III. Reflection as a specific diagnosis", "IV. Using memory instead of rereading", "V. Testing a rule in a changed context", "VI. Completing more work is always better", "VII. Awareness and judgment of one's thinking", "VIII. The danger of independent learning"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "VII", explanation: "Đoạn C: metacognition = 'awareness of one's own thinking' + tự đánh giá mức tự tin." },
        { id: "r-d21-q3", type: "heading_matching", text: "Paragraph D", headings: ["I. Visible progress without false promises", "II. Why confidence should never be recorded", "III. Reflection as a specific diagnosis", "IV. Using memory instead of rereading", "V. Testing a rule in a changed context", "VI. Completing more work is always better", "VII. Awareness and judgment of one's thinking", "VIII. The danger of independent learning"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "IV", explanation: "Đoạn D: retrieval — 'close the explanation and reconstruct it from memory' thay vì chỉ đọc lại." },
        { id: "r-d21-q4", type: "heading_matching", text: "Paragraph E", headings: ["I. Visible progress without false promises", "II. Why confidence should never be recorded", "III. Reflection as a specific diagnosis", "IV. Using memory instead of rereading", "V. Testing a rule in a changed context", "VI. Completing more work is always better", "VII. Awareness and judgment of one's thinking", "VIII. The danger of independent learning"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "V", explanation: "Đoạn E: 'A proper retest therefore alters the topic or surface form while preserving the same reasoning demand.'" },
        { id: "r-d21-q5", type: "heading_matching", text: "Paragraph F", headings: ["I. Visible progress without false promises", "II. Why confidence should never be recorded", "III. Reflection as a specific diagnosis", "IV. Using memory instead of rereading", "V. Testing a rule in a changed context", "VI. Completing more work is always better", "VII. Awareness and judgment of one's thinking", "VIII. The danger of independent learning"], options: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"], correct: "I", explanation: "Đoạn F: 'These changes do not guarantee a final score, but they make progress visible' — tiến bộ nhìn thấy mà không hứa hẹn sai." },
        { id: "r-d21-q6", type: "true_false_not_given", text: "A correct answer always produces useful learning.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn A: 'A correct answer can therefore produce surprisingly little improvement' (bẫy 'always')." },
        { id: "r-d21-q7", type: "true_false_not_given", text: "High confidence in a wrong answer may indicate a deeper misunderstanding.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "TRUE", explanation: "Đoạn C: 'A wrong answer chosen with high confidence reveals a deeper misconception.'" },
        { id: "r-d21-q8", type: "true_false_not_given", text: "The passage recommends repeating exactly the same question as the best transfer test.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "FALSE", explanation: "Đoạn E: 'A proper retest therefore alters the topic or surface form... Successful transfer shows the learner has acquired a rule rather than a single answer.'" },
        { id: "r-d21-q9", type: "true_false_not_given", text: "Colour-coding errors is described as harmful in every situation.", options: ["TRUE", "FALSE", "NOT GIVEN"], correct: "NOT GIVEN", explanation: "Đoạn G chỉ nêu 'a danger' khi người học dùng tracker/colour-code để trì hoãn; không nói màu mã lỗi có hại trong mọi tình huống." },
        { id: "r-d21-q10", type: "short_answer", text: "What should a learner record before checking an answer?", options: [], correct: "confidence", explanation: "Đoạn C: 'Before checking an answer, students can record their confidence.'" },
        { id: "r-d21-q11", type: "short_answer", text: "What should reflection produce if it is to remain learning rather than administration?", options: [], correct: "new behaviour", explanation: "Đoạn G: 'If the process produces no new behaviour, it is administration rather than learning.'" },
        { id: "r-d21-q12", type: "short_answer", text: "What kind of system should feedback help a learner build?", options: [], correct: "internal system", explanation: "Đoạn H: 'using feedback to build an internal system that continues working after the class... has ended.'" }
      ],
      evidenceTemplate: {
        paragraphLocator: "Đoạn + câu bảo chứng",
        paraphrasePair: "Nhận định <-> diễn đạt trong passage",
        errorReason: "Nối lỗi với quy tắc đã học trong 21 ngày (qualifier, paragraph role, mechanism, False vs Not Given)"
      }
    },
    listening: makeListening({
      day: 21,
      theme: "tổng kết lộ trình",
      type: "Part 1 (Đặt lịch tổng kết cuối khóa)",
      part: "Part 1 (Hội thoại đăng ký buổi tổng kết)",
      questions: [
        { id: "l-d21-q1", prompt: "Học viên cần hoàn tất [ 1 ] trước khi nhận đề cuối khóa.", answer: "phiếu cam kết" },
        { id: "l-d21-q2", prompt: "Buổi tổng kết diễn ra lúc [ 2 ] sáng ngày cuối.", answer: "9h" },
        { id: "l-d21-q3", prompt: "Hồ sơ học tập được nộp qua [ 3 ] thay vì bản in.", answer: "thư mục online" },
        { id: "l-d21-q4", prompt: "Buổi vấn cá nhân kéo dài [ 4 ] phút mỗi người.", answer: "15" }
      ]
    }),
    writing: {
      task: "Bài Writing cuối lộ trình (Nhiệm vụ A + Nhiệm vụ B)",
      prompt: "NHIỆM VỤ A (viết lại đề Ngày 1, 190-220 từ, 22 phút):\nĐỀ BÀI: Some schools ban smartphones completely during the school day. Do you think this is a positive or negative development?\nRequirements: clear position in the first two sentences • one developed benefit or drawback • one concession • one realistic school example • no memorised \"society is developing\" opening • final sentence links to the exact policy of a complete school-day ban.\n\nNHIỆM VỤ B (170-200 từ):\nRegular reflection is more useful for language improvement than simply completing a larger number of practice tests. Explain your view.\nSử dụng: claim → mechanism → example → limitation → implication.",
      targetWords: "A: 190-220 từ trong 22 phút; B: 170-200 từ",
      guidance: "Lần viết cuối giữ điều kiện gần với sản phẩm đối chiếu (thời lượng, độ dài, dạng đề rồi đánh dấu cụ thể phần đã thay đổi về lập trường, cơ chế, collocation, kiểm soát câu. Tự chấm theo 26.14 với mỗi tiêu chí ghi bằng chứng trong bài + một điểm còn yếu.",
      modelAnswer: "Gợi ý mở đầu Nhiệm vụ A: A complete school-day ban gives a clear answer to a habit that distracts and divides students, but it can only succeed if schools also teach digital self-regulation.",
      examinerNotes: "So sánh trước-sau theo bảng 26.9: lập trường, câu chủ đề, cơ chế, chất lượng ví dụ, câu liên kết, collocation, kiểm soát câu — dùng bằng chứng từ bài Ngày 1 và bài hôm nay."
    },
    speaking: {
      part: "Bản ghi âm Speaking cuối lộ trình (26.15 - 26.16)",
      prompt: "Part 1 - Learning and goals:\n1. Do you enjoy learning new skills?\n2. What part of English have you improved most recently?\n3. Do you usually make study plans?\n4. Is it easy for you to notice your own mistakes?\n5. What do you do when you lose motivation?\n\nPart 2: Describe a goal that you worked hard to achieve.\nYou should say: what the goal was • why it mattered to you • what difficulties you faced • and explain what you learned from working towards it.\n\nPart 3 - Progress and assessment:\n1. Why do people sometimes fail to notice their own progress?\n2. Are examinations the best way to measure learning?\n3. How can teachers give feedback without discouraging students?\n4. Is making mistakes always useful?\n5. Why do some learners depend too heavily on teachers?\n6. How will technology change the way progress is assessed?",
      followUps: [
        "Why do people sometimes fail to notice their own progress?",
        "Is making mistakes always useful?"
      ],
      selfEvaluationCriteria: [
        "So sánh với bản ghi âm Ngày 1 và Ngày 17/20: độ dài Part 1, độ dài Part 2, số lần ngập ngừng quá 4 giây, số âm cuối bị mất, số từ mơ hồ bị lặp, khả năng mở rộng góc nhìn Part 3 (26.10)",
        "Không đọc lại câu trả lời đã học thuộc; ghi âm phản ánh trung thực năng lực hiện tại (26.16)",
        "Hoàn thành câu: 'I sound more natural when ___' và 'I still sound translated when ___'."
      ]
    },
    vocabulary: [
      { term: "place pressure on students", pos: "collocation", phonetic: "đặt áp lực lên học sinh", meaning: "đặt áp lực lên học sinh", example: "Heavy testing places pressure on students." },
      { term: "raise awareness of an issue", pos: "collocation", phonetic: "nâng cao nhận thức về vấn đề", meaning: "nâng cao nhận thức về vấn đề", example: "Campaigns raise awareness of an issue." },
      { term: "a recurring error", pos: "collocation", phonetic: "lỗi lặp lại", meaning: "lỗi lặp lại", example: "Feedback should target a recurring error." },
      { term: "access to education", pos: "collocation", phonetic: "tiếp cận giáo dục", meaning: "tiếp cận giáo dục", example: "Technology can widen access to education." },
      { term: "an informed decision", pos: "collocation", phonetic: "quyết định có cân nhắc", meaning: "quyết định có cân nhắc", example: "Clear labels support an informed decision." },
      { term: "take responsibility for a problem", pos: "collocation", phonetic: "nhận trách nhiệm về vấn đề", meaning: "nhận trách nhiệm về vấn đề", example: "Firms must take responsibility for a problem." },
      { term: "a measurable difference", pos: "collocation", phonetic: "khác biệt đo được", meaning: "khác biệt đo được", example: "The change made a measurable difference." },
      { term: "routine tasks", pos: "collocation", phonetic: "việc lặp lại hàng ngày", meaning: "việc lặp lại hàng ngày", example: "AI can handle routine tasks." },
      { term: "hold a misconception", pos: "collocation", phonetic: "giữ một hiểu lầm", meaning: "giữ một hiểu lầm", example: "Many learners hold a misconception about speed." },
      { term: "widen existing inequality", pos: "collocation", phonetic: "làm bất bình đẳng sẵn có lớn hơn", meaning: "làm bất bình đẳng sẵn có lớn hơn", example: "Poor design may widen existing inequality." },
      { term: "find evidence from the passage", pos: "collocation", phonetic: "tìm bằng chứng trong bài đọc", meaning: "tìm bằng chứng trong bài đọc", example: "Every answer needs evidence from the passage." },
      { term: "a practical solution", pos: "collocation", phonetic: "giải pháp thực tiễn", meaning: "giải pháp thực tiễn", example: "Communities need a practical solution." },
      { term: "reliable public transport", pos: "collocation", phonetic: "giao thông công cộng đáng tin cậy", meaning: "giao thông công cộng đáng tin cậy", example: "Cities need reliable public transport." },
      { term: "cultural heritage", pos: "noun phrase", phonetic: "di sản văn hóa", meaning: "di sản văn hóa", example: "Crafts are part of cultural heritage." }
    ],
    grammar: {
      title: "Rà soát ngữ pháp toàn lộ trình (26.21)",
      explanation: "Sửa mỗi câu và ghi tên quan hệ hoặc quy tắc ngữ pháp. Sau đó chọn ba lỗi xuất hiện nhiều nhất trong 21 ngày và viết câu MỚI để kiểm tra khả năng vận dụng (không chỉ nhận ra lỗi khi nhìn bảng).",
      drillQuestion: "1. The number of students are increasing.\n2. Many information is available online.\n3. Government should invest more in public transport.\n4. Students who studies regularly improve faster.\n5. Although online learning is convenient but it requires discipline.\n6. This policy can contribute for lower emissions.\n7. People should avoid to rely completely on AI.\n8. The city has built a new park last year.\n9. There are less opportunities in rural areas.\n10. My teacher explained me how the paragraph worked.\n11. Because the task was difficult.\n12. Public transport is affordable, it can reduce congestion.\n13. This is one of the most useful strategy.\n14. It depends on how well is the policy designed.\n15. Students can access to better lessons online.\n16. The government should focus in prevention.\n17. Most of students use technology every day.\n18. People which live far away may prefer online classes.\n19. If students will receive feedback, they may improve faster.\n20. The chart illustrates how glass bottles recycle.\n21. In my opinion, I think reflection is useful.\n22. It is more easier to notice errors in a transcript.\n23. I have studied English since five years.\n24. The reason is because students need clear feedback.\n25. Each learner have a different weakness.",
      sampleAnswer: "1. The number of students IS increasing. (S-V)\n2. MUCH information is available online. (danh từ không đếm được)\n3. THE Government should invest more in public transport. (mạo từ)\n4. Students who STUDY regularly improve faster. (S-V)\n5. Although online learning is convenient, it requires discipline. (cấu trúc nhượng bộ)\n6. This policy can contribute TO lower emissions. (giới từ)\n7. People should avoid RELYING completely on AI. (avoid + V-ing)\n8. The city BUILT a new park last year. (thì quá khứ với 'last year')\n9. There are FEWER opportunities in rural areas. (fewer + danh từ đếm được)\n10. My teacher explained TO me how the paragraph worked. (explain sth to sb)\n11. The task was difficult, so students needed help. (câu cụt → hoàn chỉnh)\n12. Public transport is affordable, SO it can reduce congestion. (comma splice)\n13. This is one of the most useful STRATEGIES. (one of + N số nhiều)\n14. It depends on how well THE POLICY IS designed. (câu hỏi gián tiếp mất đảo ngữ)\n15. Students can ACCESS better lessons online. (access + N, không 'to')\n16. The government should focus ON prevention. (giới từ)\n17. MOST students use technology every day. (Most + N không 'of' unless the)\n18. People WHO live far away may prefer online classes. (which → who)\n19. IF students RECEIVE feedback, they may improve faster. (không will trong mệnh đề if)\n20. The chart illustrates how glass bottles ARE RECYCLED. (bị động)\n21. In my opinion, reflection is useful. (tránh 'In my opinion, I think')\n22. It is EASIER to notice errors in a transcript. (so sánh ngắn, không 'more easier')\n23. I have studied English FOR five years. (for + khoảng thời gian)\n24. The reason is THAT students need clear feedback. (reason + that)\n25. Each learner HAS a different weakness. (each + V số ít)",
    },
    deliverables: [
      "Bài Reading cuối + bảng rà soát bằng chứng (Day21-Reading)",
      "Bảng đối chiếu trước và sau lộ trình (Day21-Before-After)",
      "Hai sản phẩm Writing cuối (Day21-Writing-A / Day21-Writing-B)",
      "Bản ghi âm Speaking cuối lộ trình (Day21-Speaking)",
      "Bài rà soát từ vựng + ngữ pháp (Day21-Review)",
      "Hồ sơ học tập 10 sản phẩm theo checklist (Day21-Portfolio)",
      "Kế hoạch 30 ngày với 3 ưu tiên (Day21-30Day-Plan)",
      "Thư tổng kết 250-400 từ (Day21-Letter)"
    ]
  }
];