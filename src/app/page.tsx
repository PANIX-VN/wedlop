'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { SeatingChart } from '../components/SeatingChart/SeatingChart';
import { AttendanceManager } from '../components/Attendance/AttendanceManager';
import { RuleLookup } from '../components/RuleLookup/RuleLookup';
import { DutyScheduleManager } from '../components/DutySchedule/DutyScheduleManager';
import { LoginModal } from '../components/LoginModal';

import { Student, RuleItem, ColumnRow, AttendanceRecord, DynamicDutyRecord, AuthUser } from '../data/types';
import { INITIAL_STUDENTS, INITIAL_RULES, INITIAL_SEATING_LAYOUT, INITIAL_DUTY_TASKS } from '../data/initialData';
import { getRolePermissions } from '../data/accounts';
import {
  loadStudents,
  loadRules, saveRules,
  loadSeating, saveSeating,
  loadAttendance, saveAttendance,
  loadDutyRecords, saveDutyRecords,
  loadAuthUser, saveAuthUser,
} from '../utils/storage';

export default function Home() {
  const [activeTab, setActiveTab] = useState('seating');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

  // Core App States
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [rules, setRules] = useState<RuleItem[]>(INITIAL_RULES);
  const [seatingLayout, setSeatingLayout] = useState<ColumnRow[]>(INITIAL_SEATING_LAYOUT);
  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([]);
  const [dutyRecords, setDutyRecords] = useState<DynamicDutyRecord[]>([]);

  // Hydrate from LocalStorage
  useEffect(() => {
    setStudents(loadStudents());
    setRules(loadRules());
    setSeatingLayout(loadSeating());
    setAttendanceRecords(loadAttendance());
    setDutyRecords(loadDutyRecords());
    setCurrentUser(loadAuthUser());
    setIsLoaded(true);
  }, []);

  // Compute permissions based on logged in user's role
  const permissions = getRolePermissions(currentUser?.role);

  // Sync state changes to storage
  const handleUpdateSeating = (newLayout: ColumnRow[]) => {
    setSeatingLayout(newLayout);
    saveSeating(newLayout);
  };

  const handleSaveAttendance = (newRecord: AttendanceRecord) => {
    const updated = [
      ...attendanceRecords.filter(r => !(r.date === newRecord.date && (r.sessionType === newRecord.sessionType || (!r.sessionType && newRecord.sessionType === 'hoc_chinh')))),
      newRecord,
    ];
    setAttendanceRecords(updated);
    saveAttendance(updated);
  };

  const handleUpdateRules = (newRules: RuleItem[]) => {
    setRules(newRules);
    saveRules(newRules);
  };

  const handleUpdateDutyRecords = (newRecords: DynamicDutyRecord[]) => {
    setDutyRecords(newRecords);
    saveDutyRecords(newRecords);
  };

  const handleLoginSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    saveAuthUser(user);
  };

  const handleLogout = () => {
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
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        totalStudents={students.length}
      />

      {/* Main Content Area (Extra bottom padding on mobile for floating bottom nav) */}
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
      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Footer (Hidden on mobile to save viewport space with bottom bar) */}
      <footer className="hidden sm:block glass-nav border-t border-slate-200/80 py-5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-bold text-slate-700">
            ✨ Hệ Thống Quản Lý Lớp Học Thông Minh 11A7
          </p>
          <p className="text-[11px] text-slate-400">
            Tương thích hoàn hảo trên Máy tính, iPad/Tablet & Điện thoại (iOS/Android)
          </p>
        </div>
      </footer>
    </div>
  );
}
