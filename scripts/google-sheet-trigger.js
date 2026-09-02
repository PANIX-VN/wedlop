/**
 * ============================================================================
 * GOOGLE APPS SCRIPT: ĐỒNG BỘ DỮ LIỆU THỜI GIAN THỰC TỪ GOOGLE SHEETS VỀ VERCEL WEBHOOK
 * Website Quản Lý Lớp 11A7 (Next.js App Router)
 * ============================================================================
 *
 * HƯỚNG DẪN CÀI ĐẶT NHANH:
 * 1. Trên trang tính Google Sheets của bạn, bấm: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 2. Xóa hết mã mặc định và dán toàn bộ đoạn mã bên dưới vào file Code.gs.
 * 3. Thay đổi giá trị 2 hằng số:
 *    - WEBHOOK_URL: URL dự án Vercel của bạn (ví dụ: https://wedlop-11a7.vercel.app/api/webhook)
 *    - SECRET_KEY : Khớp chính xác với biến SHEET_WEBHOOK_SECRET cấu hình trên Vercel.
 * 4. Chạy hàm `createOnChangeTrigger()` một lần duy nhất để tạo Trigger tự động đồng bộ mỗi khi bạn chỉnh sửa trang tính.
 * ============================================================================
 */

// 1. CẤU HÌNH KẾT NỐI
var WEBHOOK_URL = "https://your-app-domain.vercel.app/api/webhook"; // URL API Webhook trên Vercel
var SECRET_KEY  = "your_secret_key_here";                          // Khớp với SHEET_WEBHOOK_SECRET trong .env
var SHEET_NAME  = "Profile";                                        // Tên Tab trang tính chứa dữ liệu học sinh/profile

/**
 * Hàm chính thực hiện đọc toàn bộ trang tính và gửi HTTP POST request về Vercel Webhook
 */
function syncSheetToVercel() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getActiveSheet();
    var data = sheet.getDataRange().getValues();

    if (data.length < 2) {
      Logger.log("Trang tính chưa có dữ liệu dòng (chỉ có dòng tiêu đề hoặc trống).");
      return;
    }

    // Lấy tên các cột tiêu đề từ Dòng 1
    var rawHeaders = data[0];
    var headers = rawHeaders.map(function(h) {
      return String(h).trim().toLowerCase().replace(/\s+/g, '_');
    });

    var payloadData = [];

    // Đọc từng dòng dữ liệu (từ dòng 2 trở đi)
    for (var r = 1; r < data.length; r++) {
      var row = data[r];
      var rowObject = {};
      var hasData = false;

      for (var c = 0; c < headers.length; c++) {
        var key = headers[c];
        var value = row[c];

        if (value !== "" && value !== null && value !== undefined) {
          hasData = true;
        }

        // Chuyển đổi Ngày tháng nếu là kiểu Date object của Apps Script
        if (value instanceof Date) {
          value = Utilities.formatDate(value, ss.getSpreadsheetTimeZone(), "yyyy-MM-dd HH:mm:ss");
        }

        rowObject[key] = value;
      }

      // Đảm bảo có thông tin user_id hoặc stt/username để nhận diện người dùng
      if (hasData && (rowObject.user_id || rowObject.userid || rowObject.stt || rowObject.username || rowObject.name)) {
        if (!rowObject.user_id) {
          rowObject.user_id = String(rowObject.userid || rowObject.username || rowObject.stt || rowObject.name).toLowerCase();
        }
        payloadData.push(rowObject);
      }
    }

    if (payloadData.length === 0) {
      Logger.log("Không tìm thấy dòng dữ liệu hợp lệ nào để gửi.");
      return;
    }

    // Đóng gói JSON Payload gửi về Vercel Webhook
    var requestBody = {
      secret: SECRET_KEY,
      timestamp: new Date().toISOString(),
      total_records: payloadData.length,
      data: payloadData
    };

    var options = {
      method: "post",
      contentType: "application/json",
      headers: {
        "x-webhook-secret": SECRET_KEY
      },
      payload: JSON.stringify(requestBody),
      muteHttpExceptions: true
    };

    // Gửi HTTP POST request tới Vercel
    var response = UrlFetchApp.fetch(WEBHOOK_URL, options);
    var responseCode = response.getResponseCode();
    var responseText = response.getContentText();

    Logger.log("HTTP Status Code: " + responseCode);
    Logger.log("Response Text: " + responseText);

    if (responseCode === 200) {
      Logger.log("✅ Đồng bộ thành công " + payloadData.length + " bản ghi lên Vercel Webhook!");
    } else {
      Logger.log("❌ Đồng bộ thất bại. Status: " + responseCode + " - Details: " + responseText);
    }
  } catch (error) {
    Logger.log("💥 Lỗi ngoại lệ trong quá trình đồng bộ: " + error.toString());
  }
}

/**
 * Hàm hỗ trợ tự động cài đặt Trigger 'onChange' trong Google Apps Script
 * Bấm chạy hàm này 1 lần duy nhất trong Apps Script Console để kích hoạt tự động đồng bộ khi sửa Sheet.
 */
function createOnChangeTrigger() {
  // Xóa các Trigger trùng lặp cũ
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === "syncSheetToVercel") {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  // Tạo Trigger mới tự động chạy syncSheetToVercel khi có sự thay đổi trang tính (onChange)
  ScriptApp.newTrigger("syncSheetToVercel")
    .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
    .onChange()
    .create();

  Logger.log("🎉 Đã tạo thành công Trigger tự động đồng bộ (onChange)!");
}
