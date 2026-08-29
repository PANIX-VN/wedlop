import { Student, RuleItem, ColumnRow, AttendanceRecord, EmulationLog, DynamicDutyRecord } from '../data/types';
import { INITIAL_STUDENTS, INITIAL_RULES, INITIAL_SEATING_LAYOUT } from '../data/initialData';
import { getVietnamCutoffDateString } from './time';

const STORAGE_KEYS = {
  STUDENTS: '11a7_students',
  RULES: '11a7_rules',
  SEATING: '11a7_seating',
  ATTENDANCE: '11a7_attendance',
  EMULATION_LOGS: '11a7_emulation_logs',
  DUTY_RECORDS: '11a7_duty_records',
  AUTH_USER: '11a7_auth_user',
};

export const loadStudents = (): Student[] => {
  if (typeof window === 'undefined') return INITIAL_STUDENTS;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.STUDENTS);
    if (!data) return INITIAL_STUDENTS;
    const parsed: Student[] = JSON.parse(data);
    // Migrate: Ensure only 3 groups (1, 2, 3)
    return parsed.map(s => {
      const initialMatch = INITIAL_STUDENTS.find(i => i.id === s.id);
      return {
        ...s,
        group: initialMatch ? initialMatch.group : Math.min(s.group, 3),
      };
    });
  } catch (e) {
    console.error('Error loading students', e);
    return INITIAL_STUDENTS;
  }
};

export const saveStudents = (students: Student[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
};

export const loadRules = (): RuleItem[] => {
  if (typeof window === 'undefined') return INITIAL_RULES;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.RULES);
    return data ? JSON.parse(data) : INITIAL_RULES;
  } catch (e) {
    console.error('Error loading rules', e);
    return INITIAL_RULES;
  }
};

export const saveRules = (rules: RuleItem[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.RULES, JSON.stringify(rules));
};

export const loadSeating = (): ColumnRow[] => {
  if (typeof window === 'undefined') return INITIAL_SEATING_LAYOUT;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SEATING);
    return data ? JSON.parse(data) : INITIAL_SEATING_LAYOUT;
  } catch (e) {
    console.error('Error loading seating layout', e);
    return INITIAL_SEATING_LAYOUT;
  }
};

export const saveSeating = (seating: ColumnRow[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.SEATING, JSON.stringify(seating));

  // Sync to Cloud API if available
  try {
    fetch('/api/seating', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seating),
    }).catch(() => {});
  } catch (e) {}
};

export const loadAttendance = (): AttendanceRecord[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.ATTENDANCE);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading attendance', e);
    return [];
  }
};

export const saveAttendance = (attendance: AttendanceRecord[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.ATTENDANCE, JSON.stringify(attendance));

  // Sync the latest record to Cloud API if available
  try {
    const latest = attendance[attendance.length - 1];
    if (latest) {
      fetch('/api/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(latest),
      }).catch(() => {});
    }
  } catch (e) {}
};

export const loadEmulationLogs = (): EmulationLog[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.EMULATION_LOGS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading emulation logs', e);
    return [];
  }
};

export const saveEmulationLogs = (logs: EmulationLog[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.EMULATION_LOGS, JSON.stringify(logs));
};

export const loadDutyRecords = (): DynamicDutyRecord[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.DUTY_RECORDS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error loading duty records', e);
    return [];
  }
};

export const saveDutyRecords = (records: DynamicDutyRecord[]) => {
  if (typeof window === 'undefined') return;
  // Retain records for last 14 days in Vietnam Time
  const cutoffStr = getVietnamCutoffDateString(14);
  const recentRecords = records.filter(r => r.date >= cutoffStr);
  localStorage.setItem(STORAGE_KEYS.DUTY_RECORDS, JSON.stringify(recentRecords));

  // Sync to Cloud API if available
  try {
    const latest = recentRecords[recentRecords.length - 1];
    if (latest) {
      fetch('/api/duty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(latest),
      }).catch(() => {});
    }
  } catch (e) {}
};

export const loadAuthUser = () => {
  if (typeof window === 'undefined') return null;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.AUTH_USER);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
};

export const saveAuthUser = (user: any) => {
  if (typeof window === 'undefined') return;
  if (user) {
    localStorage.setItem(STORAGE_KEYS.AUTH_USER, JSON.stringify(user));
  } else {
    localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
  }
};

export const resetAllData = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.STUDENTS);
  localStorage.removeItem(STORAGE_KEYS.RULES);
  localStorage.removeItem(STORAGE_KEYS.SEATING);
  localStorage.removeItem(STORAGE_KEYS.ATTENDANCE);
  localStorage.removeItem(STORAGE_KEYS.EMULATION_LOGS);
  localStorage.removeItem(STORAGE_KEYS.DUTY_RECORDS);
};
