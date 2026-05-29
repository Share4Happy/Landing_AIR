
# Landing AirTrang đích chuyên nghiệp cho AIR System - một nền tảng quản lý giáo dục hiện đại.

## 📋 Mục đích

Landing Air là trang web chào mừng và thu hút người dùng mới, cung cấp thông tin về AIR System và các chức năng chính của nó.

## 🎯 Tính năng Chính

- **Banner tương tác** - Giới thiệu sản phẩm với hình ảnh động
- **Hệ thống đăng ký** - Form đăng ký người dùng mới
- **Chatbot trợ lý** - Hỗ trợ khách hàng 24/7
- **Navigation hiện đại** - Menu điều hướng thân thiện
- **Responsive Design** - Tối ưu cho tất cả các thiết bị
- **Các tính năng được quảng cáo** - Popup, thông báo, tooltip

## 🏗️ Cấu trúc Dự án

landing_air/
├── src/
│ ├── app/ # App Next.js chính
│ │ ├── layout.js # Layout trang
│ │ ├── page.js # Trang chủ
│ │ ├── [id]/ # Trang động
│ │ ├── register/ # Trang đăng ký
│ │ ├── registers/ # Trang đăng ký bổ sung
│ │ └── api/form/ # API xử lý form
│ ├── component/ # Components trang
│ │ ├── banner/ # Banner chính
│ │ ├── footer/ # Footer
│ │ ├── chatbot/ # Chatbot trợ lý
│ │ ├── nav/ # Navigation
│ │ └── ...
│ ├── components/ # Thư viện components tái sử dụng
│ │ ├── (features)/ # Các tính năng (popup, notification)
│ │ ├── (ui)/ # Components UI (button, input, loading)
│ │ ├── (icon)/ # Icon SVG
│ │ └── (layout)/ # Layout components
│ ├── data/ # Kết nối database
│ │ ├── conectDB.js # Config kết nối
│ │ └── models/ # Models dữ liệu
│ └── globals.css # CSS toàn cục
├── public/ # Tài nguyên tĩnh
│ └── staric/Image/ # Hình ảnh
├── package.json # Dependencies
├── next.config.js # Config Next.js
└── README.md # File này


## 🛠️ Công nghệ

- **Framework**: Next.js (React framework)
- **Styling**: CSS Modules + Global CSS
- **Database**: MongoDB (được cấu hình trong data/)
- **API**: Next.js API Routes

## 📦 Dependencies

Xem file `package.json` để biết danh sách đầy đủ các thư viện.

## 🚀 Cách Chạy

### 1. Cài đặt Dependencies
```bash
npm install