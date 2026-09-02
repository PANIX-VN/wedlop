/**
 * ============================================================================
 * GOOGLE APPS SCRIPT: ĐỒNG BỘ DỮ LIỆU THỜI GIAN THỰC TỪ GOOGLE SHEETS VỀ VERCEL WEBHOOK
 * Website Quản Lý Lớp 11A7 (Next.js App Router)
 * ============================================================================
 *
 * CẤU TRÚC SHEET YÊU CẦU (Dòng 1 là tiêu đề):
 *   Cột A: STT
 *   Cột B: HỌ TÊN
 *   Cột C: TỔNG ĐIỂM
 *   Cột D: Số buổi nghỉ tháng
 *   Cột E: HẠNH KIÊM
 *   Cột F: Ghi chú
 *   Cột G: username  ← BẮT BUỘC (ví dụ: an.pt, anh.lt, van.tt...)
 *
 * HƯỚNG DẪN CÀI ĐẶT NHANH:
 *   1. Thêm cột G tiêu đề là "username" vào sheet, điền username từng học sinh.
 *   2. Vào Tiện ích mở rộng (Extensions) -> Apps Script, dán toàn bộ mã này vào Code.gs.
 *   3. Thay WEBHOOK_URL và SECRET_KEY bên dưới cho đúng.
 *   4. Chạy hàm createOnChangeTrigger() một lần để kích hoạt tự động đồng bộ.
 * ============================================================================
 */

// ===== CẤU HÌNH KẾT NỐI =====
var WEBHOOK_URL = "https://your-app-domain.vercel.app/api/webhook"; // ← Thay bằng URL Vercel của bạn
var SECRET_KEY  = "your_secret_key_here";                           // ← Khớp với SHEET_WEBHOOK_SECRET trên Vercel
var SHEET_NAME  = "TN.19";                                          // ← Tên Tab sheet chứa dữ liệu (xem tab dưới cùng)

// ===== MAP TÊN CỘT TRONG SHEET CỦA BẠN -> KEY GỬI LÊN SERVER =====
// Nếu bạn đổi tiêu đề cột trong sheet, hãy sửa PHẦN BÊN TRÁI tương ứng.
var COLUMN_MAP = {
  "stt"               : "stt",
  "họ tên"            : "name",
  "ho ten"            : "name",
  "tổng điểm"         : "tong_diem",
  "tong diem"         : "tong_diem",
  "số buổi nghỉ tháng": "so_buoi_nghi",
  "so buoi nghi thang": "so_buoi_nghi",
  "hạnh kiêm"         : "hanh_kiem",
  "hanh kiem"         : "hanh_kiem",
  "ghi chú"           : "ghi_chu",
  "ghi chu"           : "ghi_chu",
  "username"          : "username"   // ← Cột nhận diện người dùng
};

/**
 * Hàm chính: Đọc toàn bộ sheet và gửi dữ liệu về Vercel Webhook.
 */
function syncSheetToVercel() {
  try {
    var ss    = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
    var data  = sheet.getDataRange().getValues();

    if (data.length < 2) {
      Logger.log("⚠️ Sheet chưa có dữ liệu (chỉ có dòng tiêu đề hoặc trống).");
      return;
    }

    // Đọc dòng tiêu đề (Dòng 1) và map sang key chuẩn
    var rawHeaders = data[0];
    var mappedHeaders = rawHeaders.map(function(h) {
      var normalized = String(h).trim().toLowerCase();
      return COLUMN_MAP[normalized] || normalized.replace(/\s+/g, '_');
    });

    var payloadData = [];

    // Đọc từng dòng dữ liệu (từ Dòng 2 trở đi)
    for (var r = 1; r < data.length; r++) {
      var row = data[r];
      var rowObject = {};
      var hasData = false;

      for (var c = 0; c < mappedHeaders.length; c++) {
        var key   = mappedHeaders[c];
        var value = row[c];

        // Đánh dấu dòng có dữ liệu thực
        if (value !== "" && value !== null && value !== undefined) {
          hasData = true;
        }

        // Chuyển Date object thành chuỗi ISO
        if (value instanceof Date) {
          value = Utilities.formatDate(value, ss.getSpreadsheetTimeZone(), "yyyy-MM-dd HH:mm:ss");
        }

        rowObject[key] = value;
      }

      // Chỉ gửi dòng có username hợp lệ
      var username = String(rowObject.username || "").trim();
      if (hasData && username !== "" && username !== "undefined") {
        rowObject.user_id = username.toLowerCase(); // user_id = username
        payloadData.push(rowObject);
      }
    }

    if (payloadData.length === 0) {
      Logger.log("⚠️ Không tìm thấy dòng nào có cột 'username' hợp lệ. Hãy kiểm tra lại sheet.");
      return;
    }

    // Đóng gói JSON Payload
    var requestBody = {
      secret        : SECRET_KEY,
      timestamp     : new Date().toISOString(),
      total_records : payloadData.length,
      data          : payloadData
    };

    var options = {
      method          : "post",
      contentType     : "application/json",
      headers         : { "x-webhook-secret": SECRET_KEY },
      payload         : JSON.stringify(requestBody),
      muteHttpExceptions: true
    };

    // Gửi HTTP POST tới Vercel
    var response     = UrlFetchApp.fetch(WEBHOOK_URL, options);
    var responseCode = response.getResponseCode();
    var responseText = response.getContentText();

    Logger.log("📡 HTTP Status: " + responseCode);
    Logger.log("📥 Response: "   + responseText);

    if (responseCode === 200) {
      Logger.log("✅ Đồng bộ thành công " + payloadData.length + " học sinh lên Vercel!");
    } else if (responseCode === 401) {
      Logger.log("❌ Lỗi xác thực: SECRET_KEY không khớp với SHEET_WEBHOOK_SECRET trên Vercel.");
    } else {
      Logger.log("❌ Đồng bộ thất bại. Status: " + responseCode + " | Chi tiết: " + responseText);
    }

  } catch (error) {
    Logger.log("💥 Lỗi ngoại lệ: " + error.toString());
  }
}

/**
 * Cài đặt Trigger tự động: Chạy hàm này 1 lần duy nhất để kích hoạt
 * tự động đồng bộ mỗi khi có ai chỉnh sửa trang tính.
 */
function createOnChangeTrigger() {
  // Xóa các Trigger cũ trùng tên để tránh chạy trùng lặp
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "syncSheetToVercel") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Tạo Trigger mới: tự chạy syncSheetToVercel mỗi khi sheet thay đổi
  ScriptApp.newTrigger("syncSheetToVercel")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onChange()
    .create();

  Logger.log("🎉 Đã tạo thành công Trigger tự động đồng bộ (onChange)!");
  Logger.log("📌 Từ giờ khi bạn chỉnh sửa sheet, dữ liệu sẽ tự động cập nhật lên website!");
}

/**
 * Chạy thủ công: Dùng để test đồng bộ ngay lập tức mà không cần sửa sheet.
 */
function syncNow() {
  Logger.log("🔄 Đang đồng bộ thủ công...");
  syncSheetToVercel();
}
