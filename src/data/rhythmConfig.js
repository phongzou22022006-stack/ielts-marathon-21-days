// IELTS Marathon 21 Days - Rhythm Configuration
export const RHYTHM_CONFIGS = {
  20: {
    id: 20,
    label: "20 phút (Khởi động)",
    badge: "Khởi động",
    description: "Nhịp ngắn cho ngày bận rộn hoặc giai đoạn nền tảng. Chỉ hoàn thành 1-2 module cốt lõi.",
    moduleBudgets: {
      orientation: 2,
      reading: 7,
      listening: 5,
      writing: 4,
      speaking: 2,
      vocabulary: 0,
      grammar: 0,
      deliverables: 0
    },
    scopeRules: {
      reading: "Làm 1 bài đọc cốt lõi (3-5 câu hỏi) + ghi lại 1 cặp bằng chứng chính.",
      listening: "Nghe Lượt 1 thi thật + dò nhanh transcript để đối chiếu.",
      writing: "Viết dàn ý + đoạn mở hoặc thân bài ngắn (First Draft).",
      speaking: "Ghi âm 1 lần, tự nghe lại nhanh.",
      vocabulary: "Đọc lướt 3 cụm từ trọng tâm của ngày.",
      grammar: "Tự động gộp vào nhịp dài hơn."
    }
  },
  45: {
    id: 45,
    label: "45 phút (Tiêu chuẩn - Khuyên dùng)",
    badge: "Tiêu chuẩn",
    description: "Nhịp tiêu chuẩn của lộ trình Nền tảng 14 Ngày. Hoàn thành tuần tự 4 kỹ năng và chu trình sửa lỗi trung thực.",
    moduleBudgets: {
      orientation: 3,
      reading: 12,
      listening: 10,
      writing: 12,
      speaking: 5,
      vocabulary: 3,
      grammar: 0,
      deliverables: 0
    },
    scopeRules: {
      reading: "Hoàn thành bài đọc + ghi phiếu bằng chứng & cặp paraphrase chính.",
      listening: "Đủ 2 lượt nghe (Lượt 1 thi thật + Lượt 2 tự soát) + Phiếu 3 lỗi ưu tiên.",
      writing: "Viết First Draft hoàn chỉnh + mở bài mẫu + viết Rewrite rút kinh nghiệm.",
      speaking: "Ghi âm Lần 1 + Chép lời đoạn 30s + Ghi âm Lần 2 so sánh.",
      vocabulary: "Học toàn bộ cụm từ của ngày + tự đặt câu ví dụ.",
      grammar: "Làm bài tập điểm ngữ pháp nếu còn dư thời gian."
    }
  },
  75: {
    id: 75,
    label: "75 phút (Chuyên sâu)",
    badge: "Chuyên sâu",
    description: "Nhịp chuyên sâu của lộ trình Nền tảng 14 Ngày. Hoàn thành trọn vẹn mọi module và phân tích sâu.",
    moduleBudgets: {
      orientation: 4,
      reading: 18,
      listening: 15,
      writing: 20,
      speaking: 8,
      vocabulary: 5,
      grammar: 5,
      deliverables: 0
    },
    scopeRules: {
      reading: "Đọc chuyên sâu, lập bảng phân tích toàn bộ từ vựng học thuật trong bài.",
      listening: "Nghe 2 lượt + Shadowing đoạn khó + phân tích triệt để transcript.",
      writing: "Viết trọn vẹn bài tập + Rewrite toàn bài sau đối chiếu bài mẫu.",
      speaking: "Ghi âm + chép lời toàn bộ + ghi âm lần 2 đối chiếu.",
      vocabulary: "Nắm vững toàn bộ từ vựng + tra cứu collocation mở rộng.",
      grammar: "Hoàn thành toàn bộ bài tập ngữ pháp và tự sửa lỗi câu của mình."
    }
  },
  60: {
    id: 60,
    label: "60 phút (Rút gọn)",
    badge: "Rút gọn",
    description: "Dành cho ngày bận rộn. Tập trung vào kỹ năng trọng tâm và bản nháp đầu tiên, tinh giản phần mở rộng.",
    moduleBudgets: {
      orientation: 5,
      reading: 20,
      listening: 15,
      writing: 15,
      speaking: 5,
      vocabulary: 0, // Tích hợp trong bài đọc
      grammar: 0,
      deliverables: 0
    },
    scopeRules: {
      reading: "Chỉ làm 1 bài đọc cốt lõi (5 câu hỏi) + 2 phiếu bằng chứng chính.",
      listening: "Làm Phần nghe Lượt 1 thi thật + đối chiếu nhanh transcript.",
      writing: "Lập dàn ý chi tiết + viết 1 đoạn thân bài cốt lõi (First Draft).",
      speaking: "Ghi âm 1 lần duy nhất, nghe lại nhanh không cần chép lời chi tiết.",
      vocabulary: "Đọc lướt 3 cụm từ trọng tâm của ngày.",
      grammar: "Tự động gộp vào ngày nghỉ cuối tuần."
    }
  },
  90: {
    id: 90,
    label: "90 phút (Tiêu chuẩn - Khuyên dùng)",
    badge: "Tiêu chuẩn",
    description: "Nhịp học tiêu chuẩn của The Forum Center. Hoàn thành đầy đủ 4 kỹ năng và chu trình sửa lỗi trung thực.",
    moduleBudgets: {
      orientation: 5,
      reading: 25,
      listening: 20,
      writing: 25,
      speaking: 10,
      vocabulary: 5,
      grammar: 0,
      deliverables: 0
    },
    scopeRules: {
      reading: "Hoàn thành toàn bộ bài đọc + đầy đủ phiếu ghi bằng chứng & cặp paraphrase.",
      listening: "Đầy đủ 2 lượt nghe (Lượt 1 thi thật + Lượt 2 tự soát) + Phiếu 3 lỗi ưu tiên.",
      writing: "Viết First Draft hoàn chỉnh + mở bài mẫu + viết Rewrite rút kinh nghiệm.",
      speaking: "Ghi âm Lần 1 + Chép lời đoạn 30s + Ghi âm Lần 2 so sánh.",
      vocabulary: "Học 5 cụm từ + tự đặt ít nhất 3 câu ví dụ.",
      grammar: "Làm bài tập điểm ngữ pháp nếu còn dư thời gian."
    }
  },
  150: {
    id: 150,
    label: "150 phút (Chuyên sâu)",
    badge: "Chuyên sâu",
    description: "Luyện tập tối đa với áp lực thi thật. Viết hoàn chỉnh cả bài, chép lời chi tiết và phân tích ngữ pháp sâu.",
    moduleBudgets: {
      orientation: 5,
      reading: 35,
      listening: 30,
      writing: 45,
      speaking: 15,
      vocabulary: 10,
      grammar: 10,
      deliverables: 0
    },
    scopeRules: {
      reading: "Đọc chuyên sâu, lập bảng phân tích toàn bộ từ vựng học thuật trong bài.",
      listening: "Nghe 2 lượt + nghe Shadowing đoạn khó + phân tích triệt để transcript.",
      writing: "Viết trọn vẹn Task 1 / Task 2 chuẩn 40 phút + Rewrite toàn bài sau đối chiếu.",
      speaking: "Ghi âm cả 3 phần Speaking + chép lời toàn bộ + ghi âm lần 2.",
      vocabulary: "Nắm vững toàn bộ từ vựng + tra cứu collocation mở rộng trong từ điển.",
      grammar: "Hoàn thành toàn bộ bài tập ngữ pháp và tự sửa lỗi câu của mình."
    }
  }
};
