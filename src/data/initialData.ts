import { Student, RuleItem, ColumnRow, DutyTask } from './types';

export const INITIAL_STUDENTS: Student[] = [
  // Tổ 1 (STT 1 - 13)
  { id: '1', stt: 1, name: 'CHU BÙI AN', group: 1 },
  { id: '2', stt: 2, name: 'PHẠM TRƯỜNG AN', group: 1 },
  { id: '3', stt: 3, name: 'LÊ TUẤN ANH', group: 1 },
  { id: '4', stt: 4, name: 'VŨ PHẠM HÀ CHÂU', group: 1 },
  { id: '5', stt: 5, name: 'LỤC ĐINH ĐỨC DUY', group: 1 },
  { id: '6', stt: 6, name: 'NGUYỄN ÁNH DƯƠNG', group: 1 },
  { id: '7', stt: 7, name: 'ĐINH MẠNH ĐẠT', group: 1 },
  { id: '8', stt: 8, name: 'BÙI ANH ĐỨC', group: 1 },
  { id: '9', stt: 9, name: 'NGUYỄN TRUNG HẢI', group: 1 },
  { id: '10', stt: 10, name: 'NGUYỄN MẠNH HÙNG', group: 1 },
  { id: '11', stt: 11, name: 'ĐỖ ĐỨC HUY', group: 1 },
  { id: '12', stt: 12, name: 'NGUYỄN QUANG HUY', group: 1 },
  { id: '13', stt: 13, name: 'LÊ KHÁNH HƯNG', group: 1 },

  // Tổ 2 (STT 14 - 26)
  { id: '14', stt: 14, name: 'NGUYỄN TRUNG KIÊN', group: 2 },
  { id: '15', stt: 15, name: 'PHẠM HOÀNG LINH', group: 2 },
  { id: '16', stt: 16, name: 'TRẦN ĐỨC LONG', group: 2 },
  { id: '17', stt: 17, name: 'VI THANH LỘC', group: 2 },
  { id: '18', stt: 18, name: 'VŨ MINH LƯỢNG', group: 2 },
  { id: '19', stt: 19, name: 'PHẠM QUANG MINH', group: 2 },
  { id: '20', stt: 20, name: 'VŨ TRÀ MY', group: 2 },
  { id: '21', stt: 21, name: 'ĐẶNG HÀO NAM', group: 2 },
  { id: '22', stt: 22, name: 'VŨ HẢI NAM', group: 2 },
  { id: '23', stt: 23, name: 'VŨ BÍCH NGỌC', group: 2 },
  { id: '24', stt: 24, name: 'TRẦN MINH NGUYỆT', group: 2 },
  { id: '25', stt: 25, name: 'PHẠM GIA PHONG', group: 2 },
  { id: '26', stt: 26, name: 'VŨ ĐAN PHONG', group: 2 },

  // Tổ 3 (STT 27 - 38)
  { id: '27', stt: 27, name: 'NGUYỄN TIẾN SƠN', group: 3 },
  { id: '28', stt: 28, name: 'DƯƠNG MẠNH TÂM', group: 3 },
  { id: '29', stt: 29, name: 'ĐINH QUYẾT TIẾN', group: 3 },
  { id: '30', stt: 30, name: 'PHẠM THÙY TRANG', group: 3 },
  { id: '31', stt: 31, name: 'TRẦN THÀNH TRUNG', group: 3 },
  { id: '32', stt: 32, name: 'NGUYỄN MINH TUỆ', group: 3 },
  { id: '33', stt: 33, name: 'NGUYỄN VĂN TUYÊN', group: 3 },
  { id: '34', stt: 34, name: 'ĐOÀN ÁNH VI', group: 3 },
  { id: '35', stt: 35, name: 'BÙI THẾ VINH', group: 3 },
  { id: '36', stt: 36, name: 'LÝ TRIỆU VŨ', group: 3 },
  { id: '37', stt: 37, name: 'ĐINH THANH TRÀ', group: 3 },
  { id: '38', stt: 38, name: 'BẢO NAM', group: 3 }
];

export const INITIAL_RULES: RuleItem[] = [
  // Điểm Trừ
  { id: 'r1', category: 'Chuyên cần', title: 'Đi muộn dưới 5 phút', points: -5, unit: 'lần' },
  { id: 'r2', category: 'Chuyên cần', title: 'Đi muộn trên 5 phút', points: -10, unit: 'lần' },
  { id: 'r3', category: 'Chuyên cần', title: 'Vào lớp muộn', points: -20, unit: 'lần' },
  { id: 'r4', category: 'Chuyên cần', title: 'Nghỉ học ko lý do', points: -30, unit: 'lần' },
  { id: 'r5', category: 'Chuyên cần', title: 'Nghỉ học có phép từ buổi thứ 4 trở đi (Văn hóa)', points: -10, unit: 'lần' },
  { id: 'r6', category: 'Chuyên cần', title: 'Nghỉ học nghề (từ buổi thứ 3)', points: -10, unit: 'lần' },
  { id: 'r7', category: 'Chuyên cần', title: 'Bỏ tiết', points: -30, unit: 'lần' },
  { id: 'r8', category: 'Chuyên cần', title: 'Không chào cờ hoặc tham gia các buổi SH tập thể', points: -20, unit: 'lần' },

  { id: 'r9', category: 'Học tập', title: 'Không làm BT, ko học bài', points: -10, unit: 'lần' },
  { id: 'r10', category: 'Học tập', title: 'Quên sách vở dụng cụ', points: -5, unit: 'lần' },
  { id: 'r11', category: 'Học tập', title: 'Không thực hiện nhiệm vụ học tập', points: -5, unit: 'lần' },
  { id: 'r12', category: 'Học tập', title: 'Ngủ trong giờ', points: -10, unit: 'lần' },
  { id: 'r13', category: 'Học tập', title: 'Không ghi bài', points: -10, unit: 'lần' },
  { id: 'r14', category: 'Học tập', title: 'Không làm OLM', points: -10, unit: 'bài' },
  { id: 'r15', category: 'Học tập', title: 'Không nộp BTVN', points: -20, unit: 'lần' },
  { id: 'r16', category: 'Học tập', title: 'Nói chuyện làm việc riêng', points: -5, unit: 'lần' },
  { id: 'r17', category: 'Học tập', title: 'Bị ghi vào SĐB', points: -20, unit: 'lần' },
  { id: 'r18', category: 'Học tập', title: 'Làm việc riêng bị ghi vào SĐB', points: -50, unit: 'lần' },
  { id: 'r19', category: 'Học tập', title: 'Chữa bài sai (nếu xung phong)', points: -10, unit: 'lần' },
  { id: 'r20', category: 'Học tập', title: 'Gian lận trong kiểm tra', points: -50, unit: 'lần' },
  { id: 'r21', category: 'Học tập', title: 'Điểm dưới TB', points: -10, unit: 'cột' },
  { id: 'r22', category: 'Học tập', title: 'Điểm kém (1-3)', points: -20, unit: 'cột' },
  { id: 'r23', category: 'Học tập', title: 'Điểm 0', points: -50, unit: 'cột' },
  { id: 'r24', category: 'Học tập', title: 'Không làm bài KTTX', points: -50, unit: 'lần' },
  { id: 'r25', category: 'Học tập', title: 'Không làm bài ĐK', points: -50, unit: 'lần' },

  { id: 'r26', category: 'Nề nếp', title: 'Trực nhật muộn / bẩn', points: -10, unit: 'lần' },
  { id: 'r27', category: 'Nề nếp', title: 'Không trực nhật', points: -20, unit: 'lần' },
  { id: 'r28', category: 'Nề nếp', title: 'Ăn quà trong lớp', points: -20, unit: 'lần' },
  { id: 'r29', category: 'Nề nếp', title: 'Vứt rác bừa bãi', points: -20, unit: 'lần' },
  { id: 'r30', category: 'Nề nếp', title: 'Sai trang phục / Ko đeo thẻ / Đi dép lê', points: -20, unit: 'lần' },
  { id: 'r31', category: 'Nề nếp', title: 'Sử dụng ĐT không đúng quy định', points: -20, unit: 'lần' },
  { id: 'r32', category: 'Nề nếp', title: 'Đổi chỗ ngồi khi chưa xin phép', points: -20, unit: 'lần' },
  { id: 'r33', category: 'Nề nếp', title: 'Tập trung muộn', points: -20, unit: 'lần' },
  { id: 'r34', category: 'Nề nếp', title: 'Không sơ vin', points: -10, unit: 'lần' },

  { id: 'r35', category: 'Ứng xử', title: 'Nói tục chửi bậy', points: -20, unit: 'lần' },
  { id: 'r36', category: 'Ứng xử', title: 'Cãi lại cán sự lớp', points: -20, unit: 'lần' },
  { id: 'r37', category: 'Ứng xử', title: 'Vô lễ với GV', points: -100, unit: 'lần' },
  { id: 'r38', category: 'Ứng xử', title: 'Đánh nhau / Mang hung khí', points: -100, unit: 'lần' },
  { id: 'r39', category: 'Ứng xử', title: 'Hút thuốc lá, thuốc lá điện tử', points: -100, unit: 'lần' },

  { id: 'r40', category: 'Cán bộ lớp', title: 'Không hoàn thành nhiệm vụ', points: -20, unit: 'lần' },
  { id: 'r41', category: 'Cán bộ lớp', title: 'Bao che cho bạn', points: -50, unit: 'lần' },

  { id: 'r42', category: 'Khác', title: 'Lỗi khác', points: -10, unit: 'lần' },
  { id: 'r43', category: 'Khác', title: 'Cô Vân phê bình', points: -10, unit: 'lần' },

  // Điểm Cộng
  { id: 'r44', category: 'Học tập', title: 'Phát biểu đúng', points: 10, unit: 'lần' },
  { id: 'r45', category: 'Học tập', title: 'Chữa bài đúng (xung phong)', points: 20, unit: 'lần' },
  { id: 'r46', category: 'Học tập', title: 'Điểm 9', points: 10, unit: 'cột' },
  { id: 'r47', category: 'Học tập', title: 'Điểm 10', points: 20, unit: 'cột' },
  { id: 'r48', category: 'Học tập', title: 'Đạt giải cấp trường', points: 50, unit: 'lần' },
  { id: 'r49', category: 'Học tập', title: 'Đạt giải cấp thành phố/tỉnh', points: 100, unit: 'lần' },
  { id: 'r50', category: 'Học tập', title: 'Có sản phẩm STEM/KHKT', points: 50, unit: 'lần' },
  { id: 'r51', category: 'Nề nếp', title: 'Tham gia văn nghệ/thể thao', points: 50, unit: 'lần' },
  { id: 'r52', category: 'Ứng xử', title: 'Khắc phục tốt lỗi trước đây', points: 10, unit: 'lần' },
  { id: 'r53', category: 'Khác', title: 'Cô Vân khen', points: 10, unit: 'lần' },

  // Cán bộ lớp
  { id: 'r54', category: 'Cán bộ lớp', title: 'Tổ trưởng', points: 10, unit: 'tuần' },
  { id: 'r55', category: 'Cán bộ lớp', title: 'Giữ SĐB', points: 10, unit: 'tuần' },
  { id: 'r56', category: 'Cán bộ lớp', title: 'Lớp Phó LĐ', points: 15, unit: 'tuần' },
  { id: 'r57', category: 'Cán bộ lớp', title: 'Lớp Phó HT', points: 15, unit: 'tuần' },
  { id: 'r58', category: 'Cán bộ lớp', title: 'Lớp trưởng', points: 15, unit: 'tuần' },
];

// Initial Seating Layout configured with 3 seats per desk option
export const INITIAL_SEATING_LAYOUT: ColumnRow[] = [
  {
    id: 'col-1',
    name: 'Dãy 1 (Bên Trái)',
    desks: [
      { id: 'd1-1', name: 'Bàn 1', capacity: 3, seats: [{ seatIndex: 0, studentId: '12' }, { seatIndex: 1, studentId: '25' }, { seatIndex: 2, studentId: null }] },
      { id: 'd1-2', name: 'Bàn 2', capacity: 3, seats: [{ seatIndex: 0, studentId: '6' }, { seatIndex: 1, studentId: '2' }, { seatIndex: 2, studentId: null }] },
      { id: 'd1-3', name: 'Bàn 3', capacity: 3, seats: [{ seatIndex: 0, studentId: '31' }, { seatIndex: 1, studentId: '33' }, { seatIndex: 2, studentId: null }] },
      { id: 'd1-4', name: 'Bàn 4', capacity: 3, seats: [{ seatIndex: 0, studentId: '27' }, { seatIndex: 1, studentId: '1' }, { seatIndex: 2, studentId: null }] },
      { id: 'd1-5', name: 'Bàn 5', capacity: 3, seats: [{ seatIndex: 0, studentId: '20' }, { seatIndex: 1, studentId: '30' }, { seatIndex: 2, studentId: null }] },
      { id: 'd1-6', name: 'Bàn 6', capacity: 3, seats: [{ seatIndex: 0, studentId: '14' }, { seatIndex: 1, studentId: '5' }, { seatIndex: 2, studentId: null }] }
    ]
  },
  {
    id: 'col-2',
    name: 'Dãy 2 (Giữa)',
    desks: [
      { id: 'd2-1', name: 'Bàn 1', capacity: 3, seats: [{ seatIndex: 0, studentId: '35' }, { seatIndex: 1, studentId: '17' }, { seatIndex: 2, studentId: null }] },
      { id: 'd2-2', name: 'Bàn 2', capacity: 3, seats: [{ seatIndex: 0, studentId: '7' }, { seatIndex: 1, studentId: '11' }, { seatIndex: 2, studentId: null }] },
      { id: 'd2-3', name: 'Bàn 3', capacity: 3, seats: [{ seatIndex: 0, studentId: '32' }, { seatIndex: 1, studentId: '29' }, { seatIndex: 2, studentId: null }] },
      { id: 'd2-4', name: 'Bàn 4', capacity: 3, seats: [{ seatIndex: 0, studentId: '3' }, { seatIndex: 1, studentId: '8' }, { seatIndex: 2, studentId: null }] },
      { id: 'd2-5', name: 'Bàn 5', capacity: 3, seats: [{ seatIndex: 0, studentId: '16' }, { seatIndex: 1, studentId: '13' }, { seatIndex: 2, studentId: null }] },
      { id: 'd2-6', name: 'Bàn 6', capacity: 3, seats: [{ seatIndex: 0, studentId: '28' }, { seatIndex: 1, studentId: '9' }, { seatIndex: 2, studentId: null }] }
    ]
  },
  {
    id: 'col-3',
    name: 'Dãy 3 (Bên Phải)',
    desks: [
      { id: 'd3-1', name: 'Bàn 1', capacity: 3, seats: [{ seatIndex: 0, studentId: '26' }, { seatIndex: 1, studentId: '23' }, { seatIndex: 2, studentId: null }] },
      { id: 'd3-2', name: 'Bàn 2', capacity: 3, seats: [{ seatIndex: 0, studentId: '34' }, { seatIndex: 1, studentId: '10' }, { seatIndex: 2, studentId: null }] },
      { id: 'd3-3', name: 'Bàn 3', capacity: 3, seats: [{ seatIndex: 0, studentId: '18' }, { seatIndex: 1, studentId: '21' }, { seatIndex: 2, studentId: null }] },
      { id: 'd3-4', name: 'Bàn 4', capacity: 3, seats: [{ seatIndex: 0, studentId: '36' }, { seatIndex: 1, studentId: '4' }, { seatIndex: 2, studentId: null }] },
      { id: 'd3-5', name: 'Bàn 5', capacity: 3, seats: [{ seatIndex: 0, studentId: '15' }, { seatIndex: 1, studentId: '19' }, { seatIndex: 2, studentId: null }] },
      { id: 'd3-6', name: 'Bàn 6', capacity: 3, seats: [{ seatIndex: 0, studentId: '24' }, { seatIndex: 1, studentId: '37' }, { seatIndex: 2, studentId: null }] },
      { id: 'd3-7', name: 'Bàn Bổ Sung', capacity: 3, seats: [{ seatIndex: 0, studentId: '22' }, { seatIndex: 1, studentId: '38' }, { seatIndex: 2, studentId: null }] }
    ]
  }
];

export const INITIAL_DUTY_TASKS: DutyTask[] = [
  { id: 't1', name: 'Lau bảng & Giặt giẻ lau', description: 'Chuẩn bị phấn/bút, lau sạch bảng trước các tiết học' },
  { id: 't2', name: 'Quét dọn phòng học', description: 'Quét sạch gầm bàn, lối đi và hành lang trước cửa lớp' },
  { id: 't3', name: 'Đổ rác & Thay túi rác', description: 'Gom rác trong thùng lớp học mang đến nơi quy định' },
  { id: 't4', name: 'Kê bàn ghế & Lau bàn GV', description: 'Kê ngay ngắn các dãy bàn ghế, lau sạch bàn giáo viên' },
  { id: 't5', name: 'Tắt điện & Khóa cửa', description: 'Tắt toàn bộ quạt, đèn và khóa cửa lớp khi ra về' }
];
