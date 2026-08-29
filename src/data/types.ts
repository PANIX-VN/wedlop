import { UserRole } from './accounts';

export interface Student {
  id: string;
  stt: number;
  name: string;
  group: number; // 1 to 4
  avatar?: string;
}

export type AttendanceStatus = 'present' | 'excused' | 'unexcused' | 'late';
export type SessionType = 'hoc_chinh' | 'hoc_nghe';

export interface AttendanceRecord {
  date: string; // YYYY-MM-DD
  sessionType: SessionType; // 'hoc_chinh' | 'hoc_nghe'
  records: Record<string, AttendanceStatus>; // studentId -> status
  note?: string;
}

export interface RuleItem {
  id: string;
  category: string;
  title: string;
  points: number;
  unit: string;
}

export interface EmulationLog {
  id: string;
  studentId: string;
  studentName: string;
  ruleTitle: string;
  points: number;
  date: string;
  note?: string;
}

export interface DeskSeat {
  seatIndex: number;
  studentId: string | null;
}

export interface Desk {
  id: string;
  name: string;
  capacity: number;
  seats: DeskSeat[];
}

export interface ColumnRow {
  id: string;
  name: string;
  desks: Desk[];
}

export type DayType = 'hoc_chinh' | 'hoc_nghe' | 'nghi';

export interface DynamicDutyRecord {
  date: string; // YYYY-MM-DD
  dayName: string;
  type: DayType;
  assignedStudentIds: string[];
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

export type AuditActionType =
  | 'LOGIN'
  | 'LOGOUT'
  | 'PASSWORD_CHANGE'
  | 'STUDENT_ADD'
  | 'STUDENT_EDIT'
  | 'STUDENT_DELETE'
  | 'ATTENDANCE_SAVE'
  | 'DUTY_UPDATE'
  | 'SEATING_UPDATE'
  | 'RULE_UPDATE';

export interface AuditLog {
  id: string;
  timestamp: string; // ISO string
  displayTime: string; // HH:mm:ss DD/MM/YYYY Vietnam time
  username: string;
  userRole: string;
  userName: string;
  action: AuditActionType;
  details: string;
}

