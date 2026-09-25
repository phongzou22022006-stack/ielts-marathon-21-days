# IELTS Marathon 21 Days — Đề xuất Cải tiến UI/UX (Senior EduTech Design Review)

> Tài liệu đánh giá & đề xuất, bám sát codebase hiện tại (`index.html`, `styles.css`, `src/app.js`).
> Triết lý giữ nguyên: **Editorial & Focused Studio** — không hào nhoáng, không áp lực, tôn trọng sự chú ý.

---

## 0. Chẩn đoán nhanh hiện trạng (đọc code thấy)

**Điểm mạnh đã có (nên giữ):**
- Design token đã tách light/dark đầy đủ, có `prefers-reduced-motion`, focus ring a11y, toast system, PWA offline.
- Guided Mode 8 bước (`computeDaySteps` / `applyGuidedSteps`) — nền tảng tốt cho "focus mode".
- Split-screen 3 cột desktop, bottom-nav 5 mục mobile, Evidence Log (đúng tinh thần ELSA: bằng chứng chứ không phải điểm số).

**Vấn đề cần xử lý (ưu tiên P0 → P2):**

| # | Vấn đề thấy trong code | Tác động |
|---|---|---|
| P0 | Dashboard là **lưới phẳng 21 card** theo phase → không có cảm giác "con đường", không có trục thời gian | Mất động lực, không thấy tiến bộ |
| P0 | Streak chỉ hiện 1 số ở header (`🔥 3 ngày`) — không có lịch, không có "ngày nghỉ được phép" | Streak = áp lực, dễ bỏ |
| P0 | `renderDayDetail` dài ~600 dòng HTML: 8 section hiện tại cùng lúc ở cột giữa (chỉ guided mới ẩn) | Quá tải thị giác, mất focus |
| P1 | Không có Focus Mode thật (ẩn header/nav, 1 task/lần) | Không tối đa hoá tập trung |
| P1 | Progress bar duy nhất 1 con, không có micro-progress theo từng kỹ năng | Không biết mình mạnh/yếu gì |
| P1 | Mobile: dùng `max-h-64 overflow-y-auto` cho passage, text `text-xs` nhiều chỗ | Đọc mỏi mắt, cuộn lồng nhau |
| P1 | Không có thông báo nhắc học (Notification API) | Quên → bỏ |
| P2 | Thiếu bảng màu "focus" (deep calm) cho chế độ tập trung | Màu terracotta hơi nóng cho mắt |
| P2 | Không có reduced-density / font-size setting | Người lớn tuổi, học viên 40+ |

---

## PHẦN A — DASHBOARD & LỘ TRÌNH

### A1. `JourneyMap` — Trục thời gian dọc thay cho lưới phẳng *(P0)*

**Thay thế:** khối `phasesHtml` hiện tại (grid `lg:grid-cols-4`).

**Cách hoạt động:**
- Một **đường dây (path) dọc** với các node là ngày, cuộn theo chiều dọc (mobile) hoặc nằm ngang cuộn ngang (desktop ≥1024px).
- Node 3 trạng thái:
  - `done` — hình tròn đầy màu Sage, có dấu ✓, kèm tooltip "Hoàn thành 12/09 · 45 phút".
  - `current` — hình tròn viền 3px Terracotta, **nhấp nhô nhẹ 2s loop** (transform scale 1→1.06), kèm nhãn "HÔM NAY" nổi lên trên.
  - `locked` — hình tròn nền `--surface-muted`, icon 🔒, opacity 0.5, vẫn click được để xem trước.
- Nhóm theo **phase** bằng một dải nền khác nhẹ xen kẽ + nhãn phase dọc bên trái (desktop) / chip ngang trên (mobile).
- Checkpoint/Mock Test = node đặc biệt: hình thoi ★ thay vì tròn, có viền đôi.
- Node xa hơn ngày hiện tại 3+ bị **thu gọn** thành dải "⋯ 12 ngày nữa" để giảm cuộn dài.

**Vì sao:** Người học cần thấy *đường đi*, không phải *một đống thẻ*. Đường gấp khúc còn tạo cảm giác tiến bộ bằng thị giác (đã đi qua chỗ này rồi).

---

### A2. `TodayCard` — "Hôm nay" dạng sticky, luôn ở đỉnh *(P0)*

**Cách hoạt động:**
- Card đầu tiên, chiếm full-width, 2 cột: trái = theme ngày + ước lượng thời gian (`~45 phút · 3 kỹ năng`), phải = nút `▶ BẮT ĐẦU` (cao ≥56px, full-width trên mobile).
- **Không bao giờ đổi layout** khi điều hướng — dùng `position: sticky; top: 64px` trên desktop để luôn trong tầm mắt.
- Khi đã hoàn thành hôm nay: nút đổi thành `✓ Xem lại` + dòng phụ "Bạn đã học 47 phút hôm nay".
- Nếu streak = 0 hôm nay: viền trái màu Amber nhấp nhẹ 1 lần duy nhất (không lặp) để nhắc mà không làm phiền.

---

### A3. `StreakCalendar` — Lịch 7 ngày, thay cho badge số *(P0)*

**Thay thế:** `<div class="badge badge-sage">🔥 3 ngày</div>` ở header (giữ badge, nhưng click mở popover).

**Cách hoạt động:**
- Dải 7 ô nhỏ (T2→CN), mỗi ô 20×20px bo tròn 6px.
  - Học ≥1 phút → tô Sage đậm.
  - Học nhưng bỏ dở → tô Sage 40% (opacity).
  - Không học → `--surface-muted`.
  - Hôm nay → viền 2px Terracotta, nền trong suốt.
- Bên dưới: 2 số liệu nhỏ — `🔥 3 ngày liên tục` và `Tổng 12/21 ngày`.
- **Thiết kế không gây áp lực (quan trọng):** không hiển thị ô nào đỏ, không có chuỗi "vỡ". Khi streak bị đứt, popover hiện dòng nhẹ: *"Chuỗi 3 ngày đã kết thúc. Bắt đầu lại từ hôm nay nhé — mỗi ngày chỉ cần 1 bài."*

---

### A4. `FreezeToken` — "Ngày nghỉ có lương" *(P1, chống burnout)*

**Cách hoạt động:**
- Mỗi 7 ngày hoàn thành → nhận 1 "Phiếu nghỉ" (❄️). Tối đa 2 token.
- Trong `StreakCalendar`, ô ngày có token sẽ tô **ice-blue** thay vì xám → học viên cảm thấy "nghỉ cũng không mất chuỗi".
- Nút dùng token: chạm vào ô ngày đã trôi qua → hộp thoại xác nhận. Không tự động dùng.
- Đây là yếu tố UX quan trọng nhất để gamification **không biến thành áp lực**.

---

### A5. `SkillRadar` — Tiến độ 4 kỹ năng *(P1)*

**Cách hoạt động:**
- Radar chart 4 cạnh (L/S/W/R) đường 180px, dữ liệu suy ra từ `checklistCompleted` + `readingAnswers` + `listeningErrors` + `writingRewrite` + `speakingTranscript` đã có sẵn trong storage.
- Cạnh nào < 40% → gợi ý hành động bên dưới: *"Writing đang yếu — ôn 10 câu ở Ôn từ."* (link tới view `review`).
- Tương phản đủ cao, không dùng gradient màu; đường nét 2px Sage, tô 12%.

---

### A6. `ColorPalette` — Bảng màu chuẩn cho tập trung *(P1)*

Giữ palette Editorial hiện tại (rất tốt), nhưng thêm **hệ màu Focus** dành riêng cho chế độ tập trung:

| Token | Focus Mode | Vai trò |
|---|---|---|
| `--focus-canvas` | `#FDFCFA` (light) / `#0E1013` (dark) | Nền gần trắng/đen tuyệt đối, giảm nhiễu |
| `--focus-ink` | `#1A1C1F` | Chữ duy nhất được phép tương phản cao |
| `--focus-accent` | `#1F6F5C` (teal trầm) | Accent thay terracotta — **mát, không nóng**, giảm kích thích |
| `--focus-positive` | `#15803D` | Đúng |
| `--focus-negative` | `#9F1239` (rose đậm thay đỏ rực) | Sai |
| `--focus-muted` | `#9AA0A6` | Metadata |

**Quy tắc áp dụng Focus Mode (giảm 70% nhiễu thị giác):**
1. Xoá Terracotta → dùng `--focus-accent`.
2. Tắt mọi `animation` trừ phần đang làm.
3. Header + bottom nav → `opacity: 0.06` overlay, click lại hiện (không `display:none` để không nhảy layout).
4. Nền chuyển sang `--focus-canvas`, bo góc giảm còn 8px.

---

### A7. `TypeScale` — Typography *(P1)*

Giữ 4 font hiện tại (đúng gu), sửa scale:

| Vai trò | Font | Size / Line-height | Dùng ở đâu |
|---|---|---|---|
| Display | Plus Jakarta Sans 700/800 | 28/34 (mobile) → 40/46 (desktop) | Tiêu đề ngày, số lớn |
| Body | Inter 400 | **16/26** | Nội dung học — *tăng từ 15 lên 16* |
| Editorial | Newsreader 400 italic | 17/28 | Orientation, trích dẫn passage |
| Mono | JetBrains Mono 500 | 13/20 | Timer, số ngày, badge phase |
| **Passage (mới)** | Newsreader 400 | **18/30** | Riêng phần đọc hiểu |

**Lưu ý quan trọng:** passage IELTS hiện đang render ở `text-xs sm:text-sm` (12–14px) — quá nhỏ cho bài đọc dài. Đây là lỗi readability nghiêm trọng nhất trên mobile. Tách class `.passage-text` với `font-size: 18px; line-height: 1.65; max-width: 68ch` (68ch = độ dài dòng thoải mái cho mắt).

Thêm setting `A- / A / A+` trong Cài đặt → nhân toàn bộ `--font-scale: 0.9 | 1 | 1.15`.

---

## PHẦN B — DAILY LEARNING UX (FOCUS MODE)

### B1. `FocusModeShell` — Bật/tắt chế độ tập trung *(P0)*

**Cách hoạt động:**
- Nút `🎯 Tập trung` ở góc phải Day Detail. Bật → thêm class `focus-mode` lên `<body>`.
- Khi bật: header & bottom nav mờ đi, chuyển sang bảng màu A6, **chỉ hiện đúng section bước hiện tại** (dùng lại `computeDaySteps` + `firstPending` đã có sẵn — không cần viết logic mới).
- Auto-exit khi hoàn thành bước cuối → hiện màn `DayCompleteOverlay`.
- Lưu trạng thái vào StorageService → vào lại ngày sau vẫn ở focus mode.
- Phím tắt: `F` bật/tắt, `Esc` thoát.

### B2. `TaskStepper` — Thanh 8 bước dọc, thay vì 8 section dồn *(P0)*

**Hiện tại vấn đề:** `renderDayDetail` sinh tất cả section Reading/Listening/Writing/Speaking/Vocab/Grammar cùng lúc; chỉ khi `mode==='guided'` mới ẩn (và ẩn bằng `display:none` → mất ngữ cảnh, người dùng tưởng mất dữ liệu).

**Cách hoạt động:**
- Một **thanh bước dọc cố định** (desktop: cột trái 88px; mobile: thanh ngang cuộn ở trên, 40px cao) hiển thị 8 node: `1 Định hướng · 2 Tiêu chí · 3 Reading · 4 Listening · 5 Writing · 6 Speaking · 7 Từ vựng · 8 Ngữ pháp`.
- Node điện biên độ: 32px, số trong hình tròn, dưới là nhãn 2 từ.
  - `done` — Sage fill + ✓, click để xem lại.
  - `current` — Terracotta fill, viền trắng 2px, **nhấp nhẹ 1 lần** mỗi lần load.
  - `locked` — `--ink-muted`, 40% opacity.
- Bấm node → chuyển **cùng một thẻ** (single card) bên dưới, có hiệu ứng crossfade 200ms. Không cuộn tới anchor như hiện tại.
- Tiến độ lưu ngay khi chuyển bước (đã có `_dayStepDone`).
- Ưu điểm: giữ ngữ cảnh (các bước khác vẫn truy cập được), giảm 80% chiều dài trang.

### B3. `StickyActionBar` — Thanh hành động dính đáy *(P0)*

**Cách hoạt động:**
- Mobile: thanh cố định đáy, cao 64px + `env(safe-area-inset-bottom)`, nằm **trên** bottom-nav (nâng bottom-nav lên `padding-bottom` tương ứng để không chồng).
- Desktop: thanh dưới thẻ bài, `position: sticky; bottom: 16px`.
- Nội dung: `← Trước` · `<trạng thái>` · `Tiếp tục →` (nút chính đổi nhãn theo bước: "Xem kết quả", "Chấm điểm", "Lưu & tiếp").
- Luôn hiện 1 hành động chính → loại bỏ phải cuộn tìm nút.

### B4. `ReadingSplitView` — Chữ lớn + không cuộn lồng *(P0)*

**Cách hoạt động:**
- Bỏ `max-h-64 overflow-y-auto` (nguyên nhân cuộn lồng khó chịu nhất trên mobile).
- Mới: passage nằm trong `<details>` mặc định **thu gọn** trên mobile, tự mở trên desktop. Nút "Hiện toàn bộ đoạn văn" + nhấn-vào-để-tìm-đáp-án.
- Highlight từ khóa: bấm 1 từ trong câu hỏi → passage highlight từ đó (đây là kỹ thuật của IELTS reading, tăng giá trị học tập rất cao).
- Chữ `.passage-text` 18px (A7), `max-width: 68ch`.
- Desktop ≥1280px: 2 cột passage | câu hỏi, hai cột cuộn độc lập.

### B5. `AudioDock` — Thanh điều khiển nghe cố định *(P1)*

**Cách hoạt động:**
- Thanh cố định đáy (mobile) / đáy card (desktop) chỉ khi module Listening mở.
- Waveform thanh đơn giản (canvas 30px) hiển thị tiến độ, tô Terracotta phần đã nghe, `--border-subtle` phần chưa.
- Controls: ▶/⏸ · `-10s` · tốc độ `0.75× / 1× / 1.25×` · đã nghe `2/3 lần`.
- **Không** đưa transcript vào luồng chính: nút `📄 Xem transcript` mở sheet trượt từ dưới (bottom sheet, 85% chiều cao) — giữ màn hình sạch.

### B6. `RestBreakPrompt` *(P1, chống burnout)*

- Khi timer chạm 50% nhịp học → toast nhẹ: *"Đã nửa buổi. Đứng dậy 2 phút nhé."*
- Không modal, không chặn.

---

## PHẦN C — MICRO-INTERACTIONS & FEEDBACK

### C1. `CheckPop` — Vòng sóng khi tích checklist *(P0)*
- Checkbox được tick → vòng tròn xanh `--accent-sage` scale 0→1.25→1 trong 280ms, kèm tick-mark vẽ bằng `stroke-dashoffset`.
- Đồng thời node tương ứng ở `TaskStepper` chuyển sang done với delay 120ms (kết nối hành vi ↔ trạng thái).

### C2. `ProgressFill` — Thanh tiến độ có ý nghĩa *(P0)*
- 4 thanh độc lập thay vì 1 thanh: **Hôm nay** (bước đã xong / tổng bước) và **Cả lộ trình** (ngày / tổng ngày).
- `width` transition 500ms `cubic-bezier(0.16,1,0.3,1)`; khi tăng → số % **đếm mượt** bằng `requestAnimationFrame` trong 400ms.
- Khi đạt 100%: 1 lần confetti tối giản (6 mảnh giấy rơi 900ms), rồi ổn định — không lặp lại.

### C3. `CorrectShake` — Phản hồi sai/đúng *(P0)*
- **Đúng:** nền Sage 8% + border 1px Sage, checkmark ✓ xuất hiện cạnh câu hỏi, không rung.
- **Sai:** rung nhẹ `translateX ±4px` 3 lần trong 240ms, nền Rose 8%, **hiện đáp án đúng sau 400ms** (không làm lộ ngay trước khi người dùng kịp đọc lại lựa chọn của mình — đây là chi tiết pedagogy quan trọng).
- `aria-live="polite"` để screen reader đọc kết quả.

### C4. `StreakFlame` — Ngọn lửa streak *(P1)*
- Khi hoàn thành ngày: icon 🔥 từ header **bay** theo đường cong tới badge streak, phóng to 1.3× rồi đứng lại; badge đổi số liệu bằng `countUp` 600ms.
- Chạy 1 lần/ngày, có guard `sessionStorage` để không chạy lại khi reload.

### C5. `XPMilestone` — Ẩn/hiện cảm giác thành công *(P1)*
- Mỗi ngày có 3 mốc XP: **Bronze** (mở app hôm nay) → **Silver** (làm 1 bài) → **Gold** (hoàn thành ngày).
- Badge nhỏ 24px cạnh tên ngày, đi từ xám → màu khi đạt. Không có "mất XP" (đây là app học, không phải game chiến đấu).

### C6. `DayCompleteOverlay` — Màn kết ngày *(P1)*
- Overlay 90% opacity blur 6px, panel 420px:
  - "Ngày 07 hoàn thành 🎉" (font 32/38)
  - 3 số liệu: thời gian thực tế · số câu đúng · số lỗi đã ghi
  - Dòng khuyến khích **không so sánh**: *"3 lỗi đã ghi nhật ký — đó là tài sản của bạn."*
  - 2 nút: `Ôn lại lỗi hôm nay` / `Sang Ngày 08 →`
- Không có confetti dồn dập; chỉ 1 lần nhẹ.

### C7. `AudioWaveLive` — Waveform khi ghi âm *(P1, đã có nền)*
- Giữ hiệu ứng sóng micro sống (đúng tinh thần "physical feedback"), nhưng thêm số dB nhỏ và thanh ghi đỏ 3px — chỉ khi thật sự ghi.

### C8. `EmptyState` — Trạng thái rỗng có hướng dẫn *(P2)*
- Thay mọi màn trống bằng: icon nhẹ + 1 câu giải thích + 1 nút hành động. Tuyệt đối không để trang trắng.

### C9. `MotionSpec` — Quy chuẩn chuyển động *(P2)*
| Loại | Thời lượng | Easing |
|---|---|---|
| Hover / focus | 160ms | `cubic-bezier(0.16,1,0.3,1)` |
| Hiện/ẩn panel | 260ms | cùng trên |
| Chuyển bước (crossfade) | 200ms | `ease-out` |
| Count-up số | 400–600ms | `easeOutCubic` |
| Rung khi sai | 240ms | `ease-in-out` |

Giữ nguyên block `prefers-reduced-motion` sẵn có (tắt tất cả → `0.01ms`) — đã đúng chuẩn.

---

## PHẦN D — MOBILE

### D1. Kích thước chạm tối thiểu 44×44px *(P0)*
Hiện tại có nhiều nút `p-1.5 text-sm` (khoảng 28px) — quá nhỏ. Chuẩn: **44×44px** cho tất cả tap target, khoảng cách tối thiểu 8px giữa các nút liền kề.

### D2. Sửa viewport & an toàn vùng ngón tay *(P0)*
- Bỏ `maximum-scale=1.0, user-scalable=no` khỏi `<meta viewport>` — **đang chặn zoom**, vi phạm WCAG 1.4.4 và gây khó chịu khi người dùng muốn phóng chữ passage.
- Thêm `viewport-fit=cover` + dùng `env(safe-area-inset-*)` ở header, bottom nav, StickyActionBar, toast-root.
- `Toast` hiện đã tính `safe-area-inset-bottom` — giữ nguyên.

### D3. Bottom Sheet thay cho modal *(P1)*
Transcript, AI feedback, Evidence Log chi tiết → `BottomSheet` trượt lên 85% chiều cao, có drag handle, vuốt xuống để đóng, `overscroll-behavior: contain`.

### D4. Ngang cắt ngang (thumb reach) *(P1)*
- Mọi hành động chính phải nằm ở **1/3 dưới** màn hình. `StickyActionBar` (B3) là hiện thực hoá nguyên tắc này.
- Không có hành động quan trọng nào chỉ nằm trong header.

### D5. Bảng lưới 1 cột, chuỗi dọc *(P1)*
- Sidebar timeline desktop (`lg:col-span-3`) → thay bằng **horizontal day-strip** cuộn ngang, snap, 8 ô/ngang, cao 64px, ẩn thanh cuộn.
- `grid-cols-1` đã đúng; nhưng phần Reading + Evidence Log phải gộp thành accordion 1 cấp, không lồng 2 cấp.

### D6. Offline & PWA *(P1)*
- Đã có `sw.js` + manifest. Bổ sung:
  - **Badge "offline"** trên header khi mất mạng (giải thích tại sao thao tác không đổi).
  - `navigator.storage.persist()` để không bị xoá cache.
  - Màn hình "Cài app" (beforeinstallprompt) — 1 lần/tuần, dạng card nhỏ dưới cùng.
- Sync khi có mạng: nếu sau này thêm backend, đánh dấu pending bằng chấm nhỏ trên card ngày.

### D7. Notification nhắc học *(P1)*
- Cho phép user chọn giờ nhắc (21:00 mặc định), dùng Notification API + service worker.
- Copy thân thiện, không phán xét: *"Tới giờ 45 phút rồi — hôm nay làm nửa buổi cũng được."*
- Cho phép tắt dễ dàng, tôn trọng `Notification.permission === 'denied'`.

### D8. Chiều cao động & vùng gõ *(P2)*
- Dùng `100dvh` (dynamic viewport) thay `100vh` — tránh bị che khi bàn phím Android mở.
- Mọi `input`/`textarea` có `font-size: 16px` (nếu <16px iOS Safari tự zoom — bug kinh điển).

---

## PHẦN E — CHECKLIST ƯU TIÊN TRIỂN KHAI

**Wave 1 — Sửa lỗi trải nghiệm (1–2 ngày)**
- [ ] Bỏ `user-scalable=no` (D2)
- [ ] Passage 16–18px, bỏ `max-h-64 overflow-y-auto` (B4, A7)
- [ ] Tap target ≥44px (D1)
- [ ] `TaskStepper` thay grid 8 section (B2)
- [ ] `StickyActionBar` (B3)

**Wave 2 — Động lực & sức mạnh (2–3 ngày)**
- [ ] `JourneyMap` (A1) + `TodayCard` sticky (A2)
- [ ] `StreakCalendar` (A3) + `FreezeToken` (A4)
- [ ] `ProgressFill` (C2) + `CheckPop` (C1) + `CorrectShake` (C3)

**Wave 3 — Focus & Chiều sâu (3–4 ngày)**
- [ ] `FocusModeShell` + bảng màu focus (B1, A6)
- [ ] `SkillRadar` (A5)
- [ ] `DayCompleteOverlay` (C6) + `StreakFlame` (C4) + `XPMilestone` (C5)

**Wave 4 — Mobile/PWA hoàn thiện (2 ngày)**
- [ ] `BottomSheet` (D3), day-strip ngang (D5)
- [ ] Notification nhắc học (D7), offline badge (D6)
- [ ] `100dvh` + `input` 16px (D8)

---

## PHẦN F — NGUYÊN TẮC BẤT BIẾN

Những điều **không được** phá vỡ khi cải tiến:

1. **Không gamify kiểu Duolingo.** Không nhân vật hoạt hình, không đồng xu vàng, không "bạn sắp mất chuỗi!".
2. **Không so sánh người học với nhau.** Không bảng xếp hạng, không "bạn kém 80% người khác".
3. **Evidence over Score.** Giữ triết lý bằng chứng (Evidence Log, Transcript, nhật ký lỗi) — đây là thứ phân biệt app này với app thi điểm rác.
4. **Không áp lực ngày nghỉ.** Nghỉ 1 ngày = bình thường, có thể dùng Freeze Token.
5. **Tôn trọng `prefers-reduced-motion`.** Mọi hiệu ứng mới phải nằm trong block này.
6. **Tôn trọng accessibility.** Tương phản ≥4.5:1, focus ring luôn hiện, `aria-live` cho phản hồi, không chỉ dùng màu để truyền đạt (luôn kèm icon/nhãn).
