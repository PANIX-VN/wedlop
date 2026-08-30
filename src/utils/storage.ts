import { Student, RuleItem, ColumnRow, AttendanceRecord, EmulationLog, DynamicDutyRecord, AuditLog, AuditActionType, AuthUser, CustomRoleDefinition } from '../data/types';
import { INITIAL_STUDENTS, INITIAL_RULES, INITIAL_SEATING_LAYOUT } from '../data/initialData';
import { getVietnamCutoffDateString } from './time';
import { setEncrypted, getEncrypted, xorObfuscate, xorDeobfuscate } from './crypto';

const STORAGE_KEYS = {
  STUDENTS:         '11a7_students',
  RULES:            '11a7_rules',
  SEATING:          '11a7_seating',
  ATTENDANCE:       '11a7_attendance',
  EMULATION_LOGS:   '11a7_emulation_logs',
  DUTY_RECORDS:     '11a7_duty_records',
  AUTH_USER:        '11a7_auth_user',       // AES-256-GCM encrypted
  CUSTOM_PASSWORDS: '11a7_custom_passwords', // AES-256-GCM encrypted
  AUDIT_LOGS:       '11a7_audit_logs',       // AES-256-GCM encrypted
  USER_ROLES:       '11a7_user_roles',       // AES-256-GCM encrypted
  CUSTOM_ROLES:     '11a7_custom_roles',     // AES-256-GCM encrypted
};

// --- Lightweight XOR helper: for structural (non-auth) data ---
function xorSave(key: string, value: unknown) {
  if (typeof window === 'undefined') return;
  try {
    const json = JSON.stringify(value);
    localStorage.setItem(key, xorObfuscate(json));
  } catch {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

function xorLoad<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return null;
    // Try XOR-deobfuscated first
    try {
      const decoded = xorDeobfuscate(stored);
      return JSON.parse(decoded) as T;
    } catch {}
    // Fallback: plain JSON (legacy)
    return JSON.parse(stored) as T;
  } catch {
    return null;
  }
}


// ========================
// === Audit Log Helpers ===
// ========================

export const loadAuditLogs = async (): Promise<AuditLog[]> => {
  const result = await getEncrypted<AuditLog[]>(STORAGE_KEYS.AUDIT_LOGS);
  return result ?? [];
};

export const recordAuditLog = async (
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

  const existing = await loadAuditLogs();
  // Keep last 300 logs in LocalStorage
  const updated = [newLog, ...existing].slice(0, 300);
  await setEncrypted(STORAGE_KEYS.AUDIT_LOGS, updated);

  // Sync to Cloud DB
  fetch('/api/audit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newLog),
  }).catch(() => {});
};

export const clearAuditLogs = async () => {
  if (typeof window === 'undefined') return;
  await setEncrypted(STORAGE_KEYS.AUDIT_LOGS, []);
};


// ======================================
// === Custom Passwords (AES-256-GCM) ===
// ======================================

export const loadCustomPasswords = async (): Promise<Record<string, string>> => {
  const result = await getEncrypted<Record<string, string>>(STORAGE_KEYS.CUSTOM_PASSWORDS);
  return result ?? {};
};

// Synchronous variant used in LoginModal (blocks on awaiting in React event handlers)
export const loadCustomPasswordsSync = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CUSTOM_PASSWORDS);
    if (!stored) return {};
    const { xorDeobfuscate: xorD } = require('./crypto');
    try { return JSON.parse(xorD(stored)); } catch {}
    return JSON.parse(stored);
  } catch {
    return {};
  }
};

export const saveCustomPassword = async (username: string, newPassword: string) => {
  if (typeof window === 'undefined') return;
  const existing = await loadCustomPasswords();
  existing[username] = newPassword;
  await setEncrypted(STORAGE_KEYS.CUSTOM_PASSWORDS, existing);

  // Sync to Cloud DB
  fetch('/api/password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, newPassword }),
  }).catch(() => {});
};

export const getEffectivePassword = async (username: string, defaultPassword: string): Promise<string> => {
  const customPwds = await loadCustomPasswords();
  if (customPwds[username]) return customPwds[username];

  try {
    const res = await fetch(`/api/password?username=${encodeURIComponent(username)}`);
    const json = await res.json();
    if (json.success && json.data?.password) {
      const existing = await loadCustomPasswords();
      existing[username] = json.data.password;
      await setEncrypted(STORAGE_KEYS.CUSTOM_PASSWORDS, existing);
      return json.data.password;
    }
  } catch {}

  return defaultPassword;
};

export const hasChangedPassword = async (username: string): Promise<boolean> => {
  const customPwds = await loadCustomPasswords();
  return !!customPwds[username];
};


// ===================================
// === Auth User (AES-256-GCM) ===
// ===================================

export const loadAuthUser = async (): Promise<AuthUser | null> => {
  return await getEncrypted<AuthUser>(STORAGE_KEYS.AUTH_USER) ?? null;
};

export const saveAuthUser = async (user: AuthUser | null) => {
  if (typeof window === 'undefined') return;
  if (user) {
    await setEncrypted(STORAGE_KEYS.AUTH_USER, user);
  } else {
    localStorage.removeItem(STORAGE_KEYS.AUTH_USER);
  }
};


// ===========================================
// === User Roles & Custom Roles (AES-256-GCM) ===
// ===========================================

export const loadUserRoles = async (): Promise<Record<string, string>> => {
  const result = await getEncrypted<Record<string, string>>(STORAGE_KEYS.USER_ROLES);
  return result ?? {};
};

export const saveUserRole = async (username: string, newRole: string) => {
  if (typeof window === 'undefined') return;
  const existing = await loadUserRoles();
  existing[username] = newRole;
  await setEncrypted(STORAGE_KEYS.USER_ROLES, existing);

  const customRoles = await loadCustomRoles();
  fetch('/api/roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userRoles: existing, customRoles }),
  }).catch(() => {});
};

export const loadCustomRoles = async (): Promise<CustomRoleDefinition[]> => {
  const result = await getEncrypted<CustomRoleDefinition[]>(STORAGE_KEYS.CUSTOM_ROLES);
  return result ?? [];
};

export const saveCustomRole = async (newRole: CustomRoleDefinition) => {
  if (typeof window === 'undefined') return;
  const existing = await loadCustomRoles();
  const filtered = existing.filter(r => r.id !== newRole.id && r.name !== newRole.name);
  const updated = [...filtered, newRole];
  await setEncrypted(STORAGE_KEYS.CUSTOM_ROLES, updated);

  const userRoles = await loadUserRoles();
  fetch('/api/roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userRoles, customRoles: updated }),
  }).catch(() => {});
};


// ===================================================
// === Students, Rules, Seating (XOR obfuscated) ===
// ===================================================

export const loadStudents = (): Student[] => {
  const data = xorLoad<Student[]>(STORAGE_KEYS.STUDENTS);
  if (!data) return INITIAL_STUDENTS;
  return data.map(s => {
    const initialMatch = INITIAL_STUDENTS.find(i => i.id === s.id);
    return {
      ...s,
      group: initialMatch ? initialMatch.group : Math.min(s.group, 3),
    };
  });
};

export const saveStudents = (students: Student[]) => {
  xorSave(STORAGE_KEYS.STUDENTS, students);
  fetch('/api/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(students),
  }).catch(() => {});
};

export const loadRules = (): RuleItem[] => {
  return xorLoad<RuleItem[]>(STORAGE_KEYS.RULES) ?? INITIAL_RULES;
};

export const saveRules = (rules: RuleItem[]) => {
  xorSave(STORAGE_KEYS.RULES, rules);
  fetch('/api/rules', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rules),
  }).catch(() => {});
};

export const loadSeating = (): ColumnRow[] => {
  return xorLoad<ColumnRow[]>(STORAGE_KEYS.SEATING) ?? INITIAL_SEATING_LAYOUT;
};

export const saveSeating = (seating: ColumnRow[]) => {
  xorSave(STORAGE_KEYS.SEATING, seating);
  fetch('/api/seating', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(seating),
  }).catch(() => {});
};

export const loadAttendance = (): AttendanceRecord[] => {
  return xorLoad<AttendanceRecord[]>(STORAGE_KEYS.ATTENDANCE) ?? [];
};

export const saveAttendance = (attendance: AttendanceRecord[]) => {
  xorSave(STORAGE_KEYS.ATTENDANCE, attendance);
  const latest = attendance[attendance.length - 1];
  if (latest) {
    fetch('/api/attendance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(latest),
    }).catch(() => {});
  }
};

export const loadEmulationLogs = (): EmulationLog[] => {
  return xorLoad<EmulationLog[]>(STORAGE_KEYS.EMULATION_LOGS) ?? [];
};

export const saveEmulationLogs = (logs: EmulationLog[]) => {
  xorSave(STORAGE_KEYS.EMULATION_LOGS, logs);
};

export const loadDutyRecords = (): DynamicDutyRecord[] => {
  return xorLoad<DynamicDutyRecord[]>(STORAGE_KEYS.DUTY_RECORDS) ?? [];
};

export const saveDutyRecords = (records: DynamicDutyRecord[]) => {
  const cutoffStr = getVietnamCutoffDateString(14);
  const recentRecords = records.filter(r => r.date >= cutoffStr);
  xorSave(STORAGE_KEYS.DUTY_RECORDS, recentRecords);

  const latest = recentRecords[recentRecords.length - 1];
  if (latest) {
    fetch('/api/duty', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(latest),
    }).catch(() => {});
  }
};


// ==============================
// === Reset All Local Data ===
// ==============================

export const resetAllData = () => {
  if (typeof window === 'undefined') return;
  Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
};
