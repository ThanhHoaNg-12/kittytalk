# TalkDaily - Learn to Think in English 🚀

TalkDaily là một ứng dụng luyện phản xạ giao tiếp tiếng Anh dành cho người Việt, hoạt động theo mô hình dịch ý tự nhiên (tiếng Việt sang tiếng Anh), sửa lỗi và giải thích ngữ pháp thông minh bởi AI.

Ứng dụng được thiết kế tối giản, tối ưu hóa tối đa tốc độ tải trang và dung lượng bộ nhớ (RAM), thích hợp chạy trên các máy tính cấu hình yếu.

## 📁 Cấu trúc thư mục

*   **`index.html`**: Giao diện chính của Single Page Application (SPA), chứa layout và các màn hình con.
*   **`styles.css`**: Chứa các thiết kế tuỳ biến, hiệu ứng ngọn lửa, cấp độ mới, hiệu ứng shimmer, hiệu ứng chuyển tab.
*   **`app.js`**: Điều hướng trung tâm, quản lý trạng thái phiên học, phát giọng đọc (TTS) và tổng hợp chimes âm thanh.
*   **`data/sentences.js`**: Cơ sở dữ liệu hạt giống ban đầu gồm các mẫu câu thuộc nhiều chủ đề giao tiếp và giáo trình thực tế.
*   **`services/ai.js`**: Kết nối với Google Gemini API để chấm điểm câu và sinh câu mới bằng AI. Tự động chuyển sang thuật toán Heuristic offline nếu không có API Key.
*   **`utils/db.js`**: Trình quản lý cơ sở dữ liệu `localStorage` lưu trữ thông tin tiến trình học tập, chuỗi streak liên tiếp và hàng chờ ôn tập lặp lại ngắt quãng (SM-2).

## 🚀 Hướng dẫn sử dụng nhanh

Bạn có thể chạy ứng dụng trực tiếp bằng cách **click đúp vào file `index.html`** trên ổ đĩa máy tính của mình mà không cần chạy bất kỳ lệnh `npm` nào. Trình duyệt sẽ tải ứng dụng và lưu tiến trình học tập của bạn hoàn toàn cục bộ.

### Tích hợp Trí tuệ Nhân tạo (AI) nâng cao:
1.  Truy cập mục **Cài đặt** (Settings) ở thanh bên trái.
2.  Điền **Gemini API Key** của bạn (Bạn có thể nhận key miễn phí tại Google AI Studio).
3.  Lưu cài đặt. Ứng dụng sẽ chuyển sang trạng thái "Online Mode" giúp sửa lỗi ngữ pháp chi tiết hơn và hỗ trợ sinh thêm câu tự động hằng ngày.

---
*Chúc bạn học tập hiệu quả cùng TalkDaily!*
