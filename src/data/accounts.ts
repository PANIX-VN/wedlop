export type UserRole =
  | 'ADMIN'
  | 'GVCN'
  | 'LỚP PHÓ HỌC TẬP'
  | 'LỚP TRƯỞNG'
  | 'LỚP PHÓ LAO ĐỘNG'
  | 'LỚP PHÓ KỈ LUẬT'
  | 'HỌC SINH';

export interface UserAccount {
  stt: number;
  name: string;
  role: UserRole;
  username: string;
  password: string;
}

export const CLASS_ACCOUNTS: UserAccount[] = [
  // === ADMIN (Toàn quyền hệ thống) ===
  { stt: -1, name: 'Admin Minh', role: 'ADMIN', username: 'Minh', password: 'HaAnh31072010@' },

  // === GVCN ===
  { stt: 0, name: 'Tạ Thị Vân', role: 'GVCN', username: 'van.tt', password: 'gvcn@2026#Van' },

  // === Cán bộ lớp ===
  { stt: 30, name: 'Đoàn Ánh Vi', role: 'LỚP TRƯỞNG', username: 'vi.da', password: 'Vi@2026#30' },
  { stt: 32, name: 'Lý Triệu Vũ', role: 'LỚP PHÓ LAO ĐỘNG', username: 'vu.lt', password: 'Vu@2026#32' },
  { stt: 34, name: 'Phạm Hoàng Linh', role: 'LỚP PHÓ KỈ LUẬT', username: 'linh.ph', password: 'Linh@2026#34' },
  { stt: 36, name: 'Phạm Quang Minh', role: 'LỚP PHÓ HỌC TẬP', username: 'minh.pq', password: 'Minh@2026#36' },

  // === Học sinh ===
  { stt: 1, name: 'Phạm Trường An', role: 'HỌC SINH', username: 'an.pt', password: 'An@2026#01' },
  { stt: 2, name: 'Chu Bùi An', role: 'HỌC SINH', username: 'an.cb', password: 'An@2026#02' },
  { stt: 3, name: 'Lê Tuấn Anh', role: 'HỌC SINH', username: 'anh.lt', password: 'Anh@2026#03' },
  { stt: 4, name: 'Đinh Mạnh Đạt', role: 'HỌC SINH', username: 'dat.dm', password: 'Dat@2026#04' },
  { stt: 5, name: 'Bùi Anh Đức', role: 'HỌC SINH', username: 'duc.ba', password: 'Duc@2026#05' },
  { stt: 6, name: 'Nguyễn Ánh Dương', role: 'HỌC SINH', username: 'duong.na', password: 'Duong@2026#06' },
  { stt: 7, name: 'Lục Đinh Đức Duy', role: 'HỌC SINH', username: 'duy.ldd', password: 'Duy@2026#07' },
  { stt: 8, name: 'Nguyễn Trung Hải', role: 'HỌC SINH', username: 'hai.nt', password: 'Hai@2026#08' },
  { stt: 9, name: 'Nguyễn Mạnh Hùng', role: 'HỌC SINH', username: 'hung.nm', password: 'Hung@2026#09' },
  { stt: 10, name: 'Lê Khánh Hưng', role: 'HỌC SINH', username: 'hung.lk', password: 'Hung@2026#10' },
  { stt: 11, name: 'Đỗ Đức Huy', role: 'HỌC SINH', username: 'huy.dd', password: 'Huy@2026#11' },
  { stt: 12, name: 'Nguyễn Quang Huy', role: 'HỌC SINH', username: 'huy.nq', password: 'Huy@2026#12' },
  { stt: 13, name: 'Nguyễn Trung Kiên', role: 'HỌC SINH', username: 'kien.nt', password: 'Kien@2026#13' },
  { stt: 14, name: 'Vi Thanh Lộc', role: 'HỌC SINH', username: 'loc.vt', password: 'Loc@2026#14' },
  { stt: 15, name: 'Trần Đức Long', role: 'HỌC SINH', username: 'long.td', password: 'Long@2026#15' },
  { stt: 16, name: 'Vũ Minh Lượng', role: 'HỌC SINH', username: 'luong.vm', password: 'Luong@2026#16' },
  { stt: 17, name: 'Vũ Hải Nam', role: 'HỌC SINH', username: 'nam.vh', password: 'Nam@2026#17' },
  { stt: 18, name: 'Đặng Hào Nam', role: 'HỌC SINH', username: 'nam.dh', password: 'Nam@2026#18' },
  { stt: 19, name: 'Vũ Bích Ngọc', role: 'HỌC SINH', username: 'ngoc.vb', password: 'Ngoc@2026#19' },
  { stt: 20, name: 'Trần Minh Nguyệt', role: 'HỌC SINH', username: 'nguyet.tm', password: 'Nguyet@2026#20' },
  { stt: 21, name: 'Phạm Gia Phong', role: 'HỌC SINH', username: 'phong.pg', password: 'Phong@2026#21' },
  { stt: 22, name: 'Vũ Đan Phong', role: 'HỌC SINH', username: 'phong.vd', password: 'Phong@2026#22' },
  { stt: 23, name: 'Nguyễn Tiến Sơn', role: 'HỌC SINH', username: 'son.nt', password: 'Son@2026#23' },
  { stt: 24, name: 'Dương Mạnh Tâm', role: 'HỌC SINH', username: 'tam.dm', password: 'Tam@2026#24' },
  { stt: 25, name: 'Đinh Quyết Tiến', role: 'HỌC SINH', username: 'tien.dq', password: 'Tien@2026#25' },
  { stt: 26, name: 'Phạm Thùy Trang', role: 'HỌC SINH', username: 'trang.pt', password: 'Trang@2026#26' },
  { stt: 27, name: 'Trần Thành Trung', role: 'HỌC SINH', username: 'trung.tt', password: 'Trung@2026#27' },
  { stt: 28, name: 'Nguyễn Minh Tuệ', role: 'HỌC SINH', username: 'tue.nm', password: 'Tue@2026#28' },
  { stt: 29, name: 'Nguyễn Văn Tuyên', role: 'HỌC SINH', username: 'tuyen.nv', password: 'Tuyen@2026#29' },
  { stt: 31, name: 'Bùi Thế Vinh', role: 'HỌC SINH', username: 'vinh.bt', password: 'Vinh@2026#31' },
  { stt: 33, name: 'Vũ Phạm Hà Châu', role: 'HỌC SINH', username: 'chau.vph', password: 'Chau@2026#33' },
  { stt: 35, name: 'Vũ Trà My', role: 'HỌC SINH', username: 'my.vt', password: 'My@2026#35' },
  { stt: 37, name: 'Đinh Thanh Trà', role: 'HỌC SINH', username: 'tra.dt', password: 'tra@2026#37' },
  { stt: 38, name: 'Bảo Nam', role: 'HỌC SINH', username: 'nam.b', password: 'NAM@2026#38' },
];

export const EMULATION_SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1IHfludq-G0NRLq4g8VDfYBQpODmBcz5c/edit?usp=sharing&ouid=116788871998135363079&rtpof=true&sd=true';

export function getRolePermissions(role?: UserRole) {
  if (!role) {
    return {
      isAdmin: false,
      canFullControl: false,
      canTakeAttendance: false,
      canEditDuty: false,
      canEditSeating: false,
      canUploadRules: false,
      canManageStudents: false,
    };
  }

  switch (role) {
    case 'ADMIN':
      return {
        isAdmin: true,
        canFullControl: true,
        canTakeAttendance: true,
        canEditDuty: true,
        canEditSeating: true,
        canUploadRules: true,
        canManageStudents: true,
      };

    case 'GVCN':
    case 'LỚP PHÓ HỌC TẬP':
      return {
        isAdmin: false,
        canFullControl: true,
        canTakeAttendance: true,
        canEditDuty: true,
        canEditSeating: true,
        canUploadRules: true,
        canManageStudents: true,
      };

    case 'LỚP TRƯỞNG':
      return {
        isAdmin: false,
        canFullControl: false,
        canTakeAttendance: true,
        canEditDuty: false,
        canEditSeating: false,
        canUploadRules: false,
        canManageStudents: false,
      };

    case 'LỚP PHÓ LAO ĐỘNG':
      return {
        isAdmin: false,
        canFullControl: false,
        canTakeAttendance: false,
        canEditDuty: true,
        canEditSeating: false,
        canUploadRules: false,
        canManageStudents: false,
      };

    case 'LỚP PHÓ KỈ LUẬT':
    case 'HỌC SINH':
    default:
      return {
        isAdmin: false,
        canFullControl: false,
        canTakeAttendance: false,
        canEditDuty: false,
        canEditSeating: false,
        canUploadRules: false,
        canManageStudents: false,
      };
  }
}
