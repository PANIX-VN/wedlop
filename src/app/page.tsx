'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { SeatingChart } from '../components/SeatingChart/SeatingChart';
import { AttendanceManager } from '../components/Attendance/AttendanceManager';
import { RuleLookup } from '../components/RuleLookup/RuleLookup';
import { DutyScheduleManager } from '../components/DutySchedule/DutyScheduleManager';
import { LoginModal } from '../components/LoginModal';
import { AdminPanel } from '../components/Admin/AdminPanel';
import { StudentManager } from '../components/Admin/StudentManager';

import { Student, RuleItem, ColumnRow, AttendanceRecord, DynamicDutyRecord, AuthUser } from '../data/types';
import { INITIAL_STUDENTS, INITIAL_RULES, INITIAL_SEATING_LAYOUT, INITIAL_DUTY_TASKS } from '../data/initialData';
import { getRolePermissions } from '../data/accounts';
import { useScreenLayout } from '../hooks/useScreenLayout';
import {
  loadStudents, saveStudents,
  loadRules, saveRules,
  loadSeating, saveSeating,
  loadAttendance, saveAttendance,
  loadDutyRecords, saveDutyRecords,
  loadAuthUser, saveAuthUser,
  recordAuditLog,
} from '../utils/storage';

export default function Home() {
  const [activeTab, setActiveTab] = useState('seating');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Core App States
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [rules, setRules] = useState<RuleItem[]>(INITIAL_RULES);
  const [seatingLayout, setSeatingLayout] = useState<ColumnRow[]>(INITIAL_SEATING_LAYOUT);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [dutyRecords, setDutyRecords] = useState<DynamicDutyRecord[]>([]);

  // Hydrate from LocalStorage & Theme
  useEffect(() => {
    setStudents(loadStudents());
    setRules(loadRules());
    setSeatingLayout(loadSeating());
    setAttendanceRecords(loadAttendance());
    setDutyRecords(loadDutyRecords());
    setCurrentUser(loadAuthUser());

    // Load Theme preference
    const savedTheme = localStorage.getItem('11a7_theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    }

    // Background sync from Cloud API if available
    try {
      fetch('/api/seating')
        .then(res => res.json())
        .then(json => {
          if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
            setSeatingLayout(json.data);
            saveSeating(json.data);
          }
        })
        .catch(() => {});

      fetch('/api/attendance')
        .then(res => res.json())
        .then(json => {
          if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
            setAttendanceRecords(json.data);
            saveAttendance(json.data);
          }
        })
        .catch(() => {});

      fetch('/api/duty')
        .then(res => res.json())
        .then(json => {
          if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
            setDutyRecords(json.data);
            saveDutyRecords(json.data);
          }
        })
        .catch(() => {});
    } catch (e) {}

    setIsLoaded(true);
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('11a7_theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  // Auto screen layout detection
  const screenLayout = useScreenLayout();

  // Compute permissions based on logged in user's role
  const permissions = getRolePermissions(currentUser?.role);

  // Sync state changes to storage & audit trail
  const handleUpdateSeating = (newLayout: ColumnRow[]) => {
    setSeatingLayout(newLayout);
    saveSeating(newLayout);
    recordAuditLog(currentUser, 'SEATING_UPDATE', 'Cập nhật sơ đồ chỗ ngồi của lớp');
  };

  const handleSaveAttendance = (newRecord: AttendanceRecord) => {
    const updated = [
      ...attendanceRecords.filter(r => !(r.date === newRecord.date && (r.sessionType === newRecord.sessionType || (!r.sessionType && newRecord.sessionType === 'hoc_chinh')))),
      newRecord,
    ];
    setAttendanceRecords(updated);
    saveAttendance(updated);
    recordAuditLog(
      currentUser,
      'ATTENDANCE_SAVE',
      `Lưu điểm danh ngày ${newRecord.date} (${newRecord.sessionType === 'hoc_nghe' ? 'Học Nghề' : 'Học Chính'})`
    );
  };

  const handleUpdateRules = (newRules: RuleItem[]) => {
    setRules(newRules);
    saveRules(newRules);
    recordAuditLog(currentUser, 'RULE_UPDATE', `Cập nhật danh sách quy định (${newRules.length} mục)`);
  };

  const handleUpdateDutyRecords = (newRecords: DynamicDutyRecord[]) => {
    setDutyRecords(newRecords);
    saveDutyRecords(newRecords);
    recordAuditLog(currentUser, 'DUTY_UPDATE', 'Cập nhật phân công lịch trực nhật');
  };

  const handleUpdateStudents = (newStudents: Student[]) => {
    setStudents(newStudents);
    saveStudents(newStudents);
    recordAuditLog(currentUser, 'STUDENT_EDIT', `Cập nhật danh sách học sinh (Tổng: ${newStudents.length} HS)`);
  };

  const handleLoginSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    saveAuthUser(user);
    recordAuditLog(user, 'LOGIN', `Đăng nhập thành công với vai trò ${user.role}`);
  };

  const handleLogout = () => {
    if (currentUser) {
      recordAuditLog(currentUser, 'LOGOUT', `Đăng xuất khỏi hệ thống`);
    }
    setCurrentUser(null);
    saveAuthUser(null);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center space-y-4 animate-pulse">
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto shadow-lg shadow-blue-500/30"></div>
          <p className="text-sm font-black text-white tracking-wider uppercase">Đang tải dữ liệu Lớp 11A7...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar with Dark/Light Toggle */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        totalStudents={students.length}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        isAdmin={permissions.isAdmin}
        canManageStudents={permissions.canManageStudents}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-7 pb-24 sm:pb-10">
        {activeTab === 'seating' && (
          <div className="animate-in fade-in duration-300">
            <SeatingChart
              students={students}
              layout={seatingLayout}
              onUpdateLayout={handleUpdateSeating}
              canEditSeating={permissions.canEditSeating}
            />
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="animate-in fade-in duration-300">
            <AttendanceManager
              students={students}
              attendanceRecords={attendanceRecords}
              onSaveRecord={handleSaveAttendance}
              canTakeAttendance={permissions.canTakeAttendance}
            />
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="animate-in fade-in duration-300">
            <RuleLookup
              rules={rules}
              onUpdateRules={handleUpdateRules}
              canUploadRules={permissions.canUploadRules}
            />
          </div>
        )}

        {activeTab === 'duty' && (
          <div className="animate-in fade-in duration-300">
            <DutyScheduleManager
              students={students}
              dutyRecords={dutyRecords}
              tasks={INITIAL_DUTY_TASKS}
              onUpdateDutyRecords={handleUpdateDutyRecords}
              canEditDuty={permissions.canEditDuty}
            />
          </div>
        )}

        {activeTab === 'admin' && permissions.isAdmin && currentUser && (
          <div className="animate-in fade-in duration-300 space-y-6">
            <AdminPanel
              currentAdminUser={{ username: currentUser.username, name: currentUser.name }}
            />
          </div>
        )}

        {/* Student Management tab for GVCN / ADMIN */}
        {activeTab === 'students' && permissions.canManageStudents && (
          <div className="animate-in fade-in duration-300">
            <StudentManager
              students={students}
              onUpdateStudents={handleUpdateStudents}
              canManageStudents={permissions.canManageStudents}
            />
          </div>
        )}

        {/* Unauthorized guard */}
        {(activeTab === 'admin' && !permissions.isAdmin) ||
         (activeTab === 'students' && !permissions.canManageStudents) ? (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-base font-black text-slate-800 dark:text-white">Không Có Quyền Truy Cập</h3>
            <p className="text-xs text-slate-400">Bạn không có quyền xem trang này.</p>
          </div>
        ) : null}
      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Footer */}
      <footer className="hidden sm:block glass-nav border-t border-slate-200/80 dark:border-slate-800 py-5 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-bold text-slate-700 dark:text-slate-300">
            ✨ Hệ Thống Quản Lý Lớp Học Thông Minh 11A7
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            Chế độ: <strong className="text-blue-600 dark:text-blue-400">{theme === 'dark' ? '🌙 Giao diện Tối (Dark Mode)' : '☀️ Giao diện Sáng (Light Mode)'}</strong> • Tương thích mọi thiết bị
          </p>
        </div>
      </footer>
    </div>
  );
}
