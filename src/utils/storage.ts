import { Student, RuleItem, ColumnRow, AttendanceRecord, EmulationLog, DynamicDutyRecord, AuditLog, AuditActionType, AuthUser, CustomRoleDefinition } from '../data/types';
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
  CUSTOM_PASSWORDS: '11a7_custom_passwords',
  AUDIT_LOGS: '11a7_audit_logs',
  USER_ROLES: '11a7_user_roles',
  CUSTOM_ROLES: '11a7_custom_roles',
};

// === Audit Log Helpers ===
export const loadAuditLogs = (): AuditLog[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

export const recordAuditLog = (
  user: AuthUser | null,
  action: AuditActionType,
  details: string
) => {
  if (typeof window === 'undefined') return;

  const now = new Date();
  const vnTimeFormatter = new Intl.DateTimeFormat('vi-VN', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour12: false,
  });

  const newLog: AuditLog = {
    id: `log_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    timestamp: now.toISOString(),
    displayTime: vnTimeFormatter.format(now),
    username: user ? user.username : 'khach',
    userRole: user ? user.role : 'KHÁCH',
    userName: user ? user.name : 'Khách truy cập',
    action,
    details,
  };

  const existing = loadAuditLogs();
  // Keep last 300 logs in LocalStorage
  const updated = [newLog, ...existing].slice(0, 300);
  localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify(updated));

  // Sync to Cloud DB
  fetch('/api/audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newLog),
  }).catch(() => {});
};

export const clearAuditLogs = () => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.AUDIT_LOGS, JSON.stringify([]));
};

// Map of username -> custom password (overrides default)
export const loadCustomPasswords = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_PASSWORDS);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const saveCustomPassword = (username: string, newPassword: string) => {
  if (typeof window === 'undefined') return;
  const existing = loadCustomPasswords();
  existing[username] = newPassword;
  localStorage.setItem(STORAGE_KEYS.CUSTOM_PASSWORDS, JSON.stringify(existing));

  // Sync to Cloud DB
  fetch('/api/password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, newPassword }),
  }).catch(() => {});
};

export const getEffectivePassword = async (username: string, defaultPassword: string): Promise<string> => {
  // 1. Check localStorage first (fastest)
  const customPwds = loadCustomPasswords();
  if (customPwds[username]) return customPwds[username];

  // 2. Try Cloud DB
  try {
    const res = await fetch(`/api/password?username=${encodeURIComponent(username)}`);
    const json = await res.json();
    if (json.success && json.data?.password) {
      // Cache in localStorage for next time
      const existing = loadCustomPasswords();
      existing[username] = json.data.password;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_PASSWORDS, JSON.stringify(existing));
      return json.data.password;
    }
  } catch {}

  // 3. Fall back to default from accounts.ts
  return defaultPassword;
};

export const hasChangedPassword = (username: string): boolean => {
  const customPwds = loadCustomPasswords();
  return !!customPwds[username];
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

// === Custom Roles & User Role Assignments Helpers ===
export const loadUserRoles = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_ROLES);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
};

export const saveUserRole = (username: string, newRole: string) => {
  if (typeof window === 'undefined') return;
  const existing = loadUserRoles();
  existing[username] = newRole;
  localStorage.setItem(STORAGE_KEYS.USER_ROLES, JSON.stringify(existing));

  // Sync to Cloud API
  const customRoles = loadCustomRoles();
  fetch('/api/roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userRoles: existing, customRoles }),
  }).catch(() => {});
};

export const loadCustomRoles = (): CustomRoleDefinition[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_ROLES);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveCustomRole = (newRole: CustomRoleDefinition) => {
  if (typeof window === 'undefined') return;
  const existing = loadCustomRoles();
  const filtered = existing.filter(r => r.id !== newRole.id && r.name !== newRole.name);
  const updated = [...filtered, newRole];
  localStorage.setItem(STORAGE_KEYS.CUSTOM_ROLES, JSON.stringify(updated));

  // Sync to Cloud API
  const userRoles = loadUserRoles();
  fetch('/api/roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userRoles, customRoles: updated }),
  }).catch(() => {});
};

export const saveStudents = (students: Student[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));

  // Sync to Cloud API
  try {
    fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(students),
    }).catch(() => {});
  } catch (e) {}
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

  // Sync to Cloud API
  try {
    fetch('/api/rules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(rules),
    }).catch(() => {});
  } catch (e) {}
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
