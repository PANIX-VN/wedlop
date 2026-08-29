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
      ...attendanceRecords.filter(r => r.date !== newRecord.date),
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
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs font-bold text-slate-600">Đang tải dữ liệu Lớp 11A7...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-100/80">
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
        totalStudents={students.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'seating' && (
          <SeatingChart
            students={students}
            layout={seatingLayout}
            onUpdateLayout={handleUpdateSeating}
            canEditSeating={permissions.canEditSeating}
          />
        )}

        {activeTab === 'attendance' && (
          <AttendanceManager
            students={students}
            attendanceRecords={attendanceRecords}
            onSaveRecord={handleSaveAttendance}
            canTakeAttendance={permissions.canTakeAttendance}
          />
        )}

        {activeTab === 'rules' && (
          <RuleLookup
            rules={rules}
            onUpdateRules={handleUpdateRules}
            canUploadRules={permissions.canUploadRules}
          />
        )}

        {activeTab === 'duty' && (
          <DutyScheduleManager
            students={students}
            dutyRecords={dutyRecords}
            tasks={INITIAL_DUTY_TASKS}
            onUpdateDutyRecords={handleUpdateDutyRecords}
            canEditDuty={permissions.canEditDuty}
          />
        )}
      </main>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-semibold">Bản quyền © 2026 - Lớp 11A7 • Hệ Thống Quản Lý Lớp Học Thông Minh</p>
        </div>
      </footer>
    </div>
  );
}
