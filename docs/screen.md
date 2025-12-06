

## 1. SƠ ĐỒ TỔNG QUAN KIẾN TRÚC

┌─────────────────────────────────────────────────────┐
│                    EDUFLEX PLATFORM                 │
├─────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐ │
│  │ Học sinh│  │Giáo viên│  │Quản trị │  │Hệ thống │ │
│  │         │  │         │  │viên     │  │thanh toán│
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘ │
│       │             │            │            │      │
├───────┼─────────────┼────────────┼────────────┼─────┤
│                    GIAO DIỆN NGƯỜI DÙNG               │
│  ┌─────────────────────────────────────────────────┐ │
│  │ 1. Trang chủ     2. Danh mục    3. Tìm kiếm    │ │
│  │ 4. Chi tiết KH   5. Giỏ hàng    6. Thanh toán  │ │
│  │ 7. Học trực tuyến 8. Tài khoản  9. Quản lý KH  │ │
│  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

## 2. WIREFRAME CHI TIẾT CÁC TRANG
### 2.1 TRANG CHỦ - Desktop View

┌─────────────────────────────────────────────────────┐
│  ┌──────┐  TÌM KIẾM [.................]  🛒(2) 👤   │
│  │EDUFLEX├───────────────────────────────────────────┤
│  └──────┘  Trang chủ KH của tôi Học tập Thanh toán  │
├─────────────────────────────────────────────────────┤
│  [ HERO BANNER - Học mọi lúc, mọi nơi với EduFlex ]  │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐                    │
│  │50K+ │ │1.2K+│ │200+ │ │ 98% │                    │
│  │Học  │ │Khóa │ │GV   │ │Hài  │                    │
│  │viên │ │học  │ │     │ │lòng │                    │
│  └─────┘ └─────┘ └─────┘ └─────┘                    │
├─────────────────────────────────────────────────────┤
│  DANH MỤC: [Tất cả] [Lập trình] [Thiết kế] [Kinh doanh]│
│                                                      │
│  ┌────────────────────────────────────────────────┐ │
│  │  KHÓA HỌC NỔI BẬT                             →│ │
│  ├────────────────────────────────────────────────┤ │
│  │ ┌────┐ ┌────┐ ┌────┐                           │ │
│  │ │Img │ │Img │ │Img │   3 khóa học hàng đầu      │ │
│  │ │JS  │ │UI/UX│ │DM  │   với thông tin chi tiết  │ │
│  │ │4.8★│ │4.9★│ │4.7★│                           │ │
│  │ └────┘ └────┘ └────┘                           │ │
│  └────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────┐ │
│  │  GIẢNG VIÊN NỔI BẬT                           →│ │
│  ├────────────────────────────────────────────────┤ │
│  │ ┌──┐ ┌──┐ ┌──┐ ┌──┐                            │ │
│  │ │A │ │B │ │C │ │D │   4 giảng viên hàng đầu     │ │
│  │ │GV│ │GV│ │GV│ │GV│   với số học viên và khóa   │ │
│  │ │  │ │  │ │  │ │  │                            │ │
│  │ └──┘ └──┘ └──┘ └──┘                            │ │
│  └────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

### 2.2 TRANG CHI TIẾT KHÓA HỌC

┌─────────────────────────────────────────────────────┐
│  [Breadcrumb: Trang chủ > Lập trình > JavaScript]    │
│                                                      │
│  ┌───────────────┬─────────────────────────────────┐ │
│  │               │ LẬP TRÌNH JS TỪ ZERO ĐẾN HERO   │ │
│  │   HÌNH ẢNH    │                                 │ │
│  │   LỚN CỦA     │ 4.8★ (1,250 học viên) • 45 giờ  │ │
│  │   KHÓA HỌC    │                                 │ │
│  │               │ Giảng viên: Nguyễn Văn A        │ │
│  │               │                                 │ │
│  ├───────────────┼─────────────────────────────────┤ │
│  │               │ MÔ TẢ:                          │ │
│  │   VIDEO       │ • 120 bài giảng                 │ │
│  │   XEM THỬ     │ • 15 dự án thực tế              │ │
│  │   (3 PHÚT)    │ • Chứng chỉ hoàn thành          │ │
│  │               │ • Hỗ trợ 24/7                   │ │
│  └───────────────┴─────────────────────────────────┘ │
│                                                      │
│  ┌────────────────────────────────────────────────┐ │
│  │  NỘI DUNG KHÓA HỌC                            │ │
│  ├────────────────────────────────────────────────┤ │
│  │ Module 1: Cơ bản (12 bài)                     ▼ │
│  │ Module 2: Nâng cao (24 bài)                    │ │
│  │ Module 3: Dự án thực tế (15 bài)               │ │
│  └────────────────────────────────────────────────┘ │
│                                                      │
│  ┌───────────────┬─────────────────────────────────┐ │
│  │               │ GIÁ: 699,000đ                   │ │
│  │  THÔNG TIN    │ (Giá gốc: 999,000đ)             │ │
│  │   MUA HÀNG    │                                 │ │
│  │               │ [THÊM VÀO GIỎ HÀNG]             │ │
│  │               │ [MUA NGAY]                      │ │
│  │               │ [❤ THÊM VÀO YÊU THÍCH]          │ │
│  └───────────────┴─────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘

### 2.3 TRANG HỌC TRỰC TUYẾN

┌─────────────────────────────────────────────────────┐
│  [JavaScript từ Zero đến Hero] - Tiến độ: 45%       │
│                                                      │
│  ┌────────────────┬────────────────────────────────┐ │
│  │                │ VIDEO PLAYER                   │ │
│  │                │ [Title bài học hiện tại]       │ │
│  │                │                                │ │
│  │                │ ┌────────────────────────────┐ │ │
│  │                │ │ Mô tả bài học...           │ │ │
│  │                │ │                            │ │ │
│  │                │ └────────────────────────────┘ │ │
│  │                │ [◀ Trước]        [Tiếp theo ▶] │ │
│  ├────────────────┼────────────────────────────────┤ │
│  │ DANH SÁCH      │                                │ │
│  │ BÀI HỌC        │ Module 1: Cơ bản              ▼ │ │
│  │                │   ✓ 1. Giới thiệu (10:25)      │ │
│  │                │   ▶ 2. Biến và kiểu dữ liệu    │ │
│  │                │   ○ 3. Toán tử                 │ │
│  │                │   ○ 4. Câu điều kiện           │ │
│  │                │                                │ │
│  │                │ Module 2: Nâng cao             │ │
│  │                │   ○ 5. Vòng lặp                │ │
│  │                │   ○ 6. Hàm                     │ │
│  │                │                                │ │
│  │                │ [TÀI LIỆU ĐÍNH KÈM]            │ │
│  │                │ • Slide bài giảng.pdf          │ │
│  │                │ • Source code.zip              │ │
│  └────────────────┴────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
### 2.4 TRANG GIỎ HÀNG & THANH TOÁN
┌─────────────────────────────────────────────────────┐
│  GIỎ HÀNG CỦA BẠN (2 khóa học)                     │
│                                                      │
│  ┌────────────────────────────────────────────────┐ │
│  │ SẢN PHẨM                                       │ │
│  ├────────────────────────────────────────────────┤ │
│  │ ┌────┐ Lập trình JS từ Zero đến Hero           │ │
│  │ │Img │ Giảng viên: Nguyễn Văn A                │ │
│  │ │    │ 699,000đ                                │ │
│  │ └────┘ [XÓA]                                   │ │
│  │                                                │ │
│  │ ┌────┐ Thiết kế UI/UX với Figma               │ │
│  │ │Img │ Giảng viên: Trần Thị B                 │ │
│  │ │    │ 599,000đ                                │ │
│  │ └────┘ [XÓA]                                   │ │
│  └────────────────┬───────────────────────────────┘ │
│                   │ TỔNG CỘNG: 1,298,000đ          │ │
│                   │ MÃ GIẢM GIÁ: [.........] [ÁP DỤNG]│
│                   │                                  │
│                   │ THÀNH TIỀN: 1,298,000đ          │ │
│                   │ [TIẾN HÀNH THANH TOÁN] →        │ │
│                   └──────────────────────────────────┘ │
├─────────────────────────────────────────────────────┤
│  PHƯƠNG THỨC THANH TOÁN:                            │
│  ┌─┐ Thẻ ngân hàng/Visa/Mastercard                 │
│  └─┘ Ví điện tử (Momo, ZaloPay)                    │
│    ┌─┐ Chuyển khoản ngân hàng                      │
│    └─┘                                             │
└─────────────────────────────────────────────────────┘

## 3. MOCKUP VISUAL DESIGN
### 3.1 MÀU SẮC CHỦ ĐẠO
Primary Colors:
- Xanh chính: #2563EB (blue-600)
- Xanh đậm: #1D4ED8 (blue-700) 
- Xanh nhạt: #60A5FA (blue-400)

Secondary Colors:
- Tím: #7C3AED (purple-600)
- Cam: #F59E0B (amber-500)

Neutral:
- Trắng: #FFFFFF
- Xám nhạt: #F9FAFB (gray-50)
- Xám vừa: #6B7280 (gray-500)
- Xám đậm: #1F2937 (gray-800)

### 3.2 TYPOGRAPHY
Font chính: Inter hoặc system sans-serif

Headings:
- H1: 36px, Bold, #1F2937
- H2: 30px, Bold, #1F2937  
- H3: 24px, Bold, #1F2937
- H4: 20px, Semibold, #1F2937

Body:
- Paragraph: 16px, Regular, #4B5563
- Small text: 14px, Regular, #6B7280
- Button text: 16px, Medium, White/Blue

### 3.3 COMPONENTS VISUAL
#### A. Card khóa học:
┌─────────────────────────────────────┐
│  [Hình ảnh khóa học]                │
│  ┌─────────────────────────────┐    │
│  │ NỔI BẬT                    │    │
│  └─────────────────────────────┘    │
│  ❤                                  │
│                                      │
│  Lập trình JavaScript từ...          │
│  Giảng viên: Nguyễn Văn A            │
│                                      │
│  ★★★★☆ 4.8 (1,250) • 45 giờ         │
│                                      │
│  699,000đ  999,000đ                  │
│  [THÊM VÀO GIỎ]                     │
└─────────────────────────────────────┘

#### B. Navigation bar:

┌─────────────────────────────────────────────────────┐
│  ███  EDUFLEX  [Tìm kiếm... 🔍]  🛒(2)  👤 Học sinh A│
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Trang chủ  •  Khóa học của tôi  •  Tiến độ  •  ... │
└─────────────────────────────────────────────────────┘

#### C. Button styles:

Primary Button:
[███████████████]
Background: #2563EB
Text: White
Hover: #1D4ED8

Secondary Button:
[▐██████████████▌] 
Background: White
Border: #2563EB  
Text: #2563EB
Hover: #F3F4F6

Ghost Button:
[   Text only   ]
Background: Transparent
Text: #2563EB
Hover: #F3F4F6

## 4. USER FLOW CHÍNH

         ┌─────────────────┐
         │   TRANG CHỦ     │
         └────────┬────────┘
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
┌──────────────┐    ┌──────────────┐
│Tìm kiếm/Browse│    │Danh mục khóa │
│khóa học      │    │học           │
└──────┬───────┘    └──────┬───────┘
       │                   │
       └─────────┬─────────┘
                 ▼
        ┌──────────────┐
        │Chi tiết khóa │
        │học           │
        └──────┬───────┘
               │
        ┌──────┴───────┐
        ▼              ▼
┌──────────────┐ ┌──────────────┐
│Thêm vào giỏ  │ │Mua ngay      │
│hàng          │ │              │
└──────┬───────┘ └──────┬───────┘
       │                │
       └───────┬────────┘
               ▼
        ┌──────────────┐
        │Giỏ hàng &    │
        │Thanh toán    │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │Xác nhận thanh│
        │toán          │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │Trang học     │
        │trực tuyến    │
        └──────────────┘

## 5. RESPONSIVE BREAKPOINTS

Mobile (≤ 640px):
- Navigation hamburger menu
- Single column layout
- Compact course cards
- Bottom navigation for key actions

Tablet (641px - 1024px):
- 2-column grid for courses
- Visible main navigation
- Adjusted font sizes

Desktop (≥ 1025px):
- Full navigation bar
- 3-4 column grids
- Sidebar for course learning
- Full feature set

## 6. VISUAL HIỆU ỨNG & MICRO-INTERACTIONS
Hover effects trên card khóa học:

Shadow nâng lên (elevation)

Scale nhẹ (transform: scale(1.02))

Transition mượt (300ms)

Loading states:

Skeleton screens cho danh sách khóa học

Spinner khi thanh toán

Progress bar khi tải video

Feedback animations:

Success checkmark khi thêm vào giỏ

Heart fill animation khi yêu thích

Toast notifications
## 7. MOCKUP ẢNH TÓM TẮT

Tôi đề xuất tạo các mockup ảnh cho các trang chính:

Trang chủ - Hiển thị danh sách khóa học nổi bật

Chi tiết khóa học - Đầy đủ thông tin và nút CTA

Trang học - Video player + danh sách bài học

Giỏ hàng - Danh sách khóa học đã chọn

Thanh toán - Form thông tin và phương thức