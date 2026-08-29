import { UserRole } from './accounts';

export interface Student {
  id: string;
  stt: number;
  name: string;
  group: number; // 1 to 4
  avatar?: string;
}

export type AttendanceStatus = 'present' | 'excused' | 'unexcused' | 'late';

export interface AttendanceRecord {
  date: string; // YYYY-MM-DD
  records: Record<string, AttendanceStatus>; // studentId -> status
  note?: string;
}

export interface RuleItem {
  id: string;
  category: string; // 'Chuyên cần' | 'Học tập' | 'Nề nếp' | 'Ứng xử' | 'Cán bộ lớp' | 'Khác'
  title: string;
  points: number; // positive for merit, negative for demerit
  unit: string; // 'lần', 'bài', 'tuần'
}

export interface EmulationLog {
  id: string;
  studentId: string;
  studentName: string;
  ruleTitle: string;
  points: number;
  date: string; // YYYY-MM-DD
  note?: string;
}

export interface DeskSeat {
  seatIndex: number; // 0, 1, 2 (for 3-seater)
  studentId: string | null;
}

export interface Desk {
  id: string;
  name: string;
  capacity: number; // 2 or 3 or 4
  seats: DeskSeat[];
}

export interface ColumnRow {
  id: string;
  name: string; // e.g. 'Dãy 1', 'Dãy 2', 'Dãy 3'
  desks: Desk[];
}

export type DayType = 'hoc_chinh' | 'hoc_nghe' | 'nghi';

// Dynamic Duty assignment for a specific date (up to 14 days)
export interface DynamicDutyRecord {
  date: string; // YYYY-MM-DD
  dayName: string; // e.g. 'Thứ Hai'
  type: DayType; // 'hoc_chinh' | 'hoc_nghe' | 'nghi'
  assignedStudentIds: string[]; // Dynamically selected student IDs for duty
  customNote?: string;
}

export interface DutyTask {
  id: string;
  name: string;
  description: string;
}

export interface AuthUser {
  stt: number;
  name: string;
  role: UserRole;
  username: string;
}
