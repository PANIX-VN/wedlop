'use client';

import React, { useState, useEffect } from 'react';
import { Student, AttendanceStatus, AttendanceRecord, SessionType } from '../../data/types';
import { getVietnamTodayString, formatVietnamDateDisplay } from '../../utils/time';
import { Calendar, CheckCircle2, XCircle, Clock, AlertTriangle, Save, CheckCheck, ShieldAlert, BarChart3, ListFilter, BookOpen, Wrench, Users, Filter, X } from 'lucide-react';

interface AttendanceManagerProps {
  students: Student[];
  attendanceRecords: AttendanceRecord[];
  onSaveRecord: (record: AttendanceRecord) => void;
  canTakeAttendance: boolean;
}

export const AttendanceManager: React.FC<AttendanceManagerProps> = ({
  students,
  attendanceRecords,
  onSaveRecord,
  canTakeAttendance,
}) => {
  const vnToday = getVietnamTodayString();

  // View Mode: 'daily' | 'weekly' | 'monthly'
  const [viewMode, setViewMode] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  // Active Session: 'hoc_chinh' | 'hoc_nghe'
  const [activeSession, setActiveSession] = useState<SessionType>('hoc_chinh');

  // Selected states
  const [selectedDate, setSelectedDate] = useState<string>(vnToday);
  const [selectedMonth, setSelectedMonth] = useState<string>(vnToday.substring(0, 7)); // YYYY-MM
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<number | 'all'>('all');
  const [currentMap, setCurrentMap] = useState<Record<string, AttendanceStatus>>({});
  const [isSavedNotice, setIsSavedNotice] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  // Load existing record for selectedDate & activeSession or default to 'present'
  useEffect(() => {
    const existing = attendanceRecords.find(
      r => r.date === selectedDate && (r.sessionType === activeSession || (!r.sessionType && activeSession === 'hoc_chinh'))
    );

    if (existing) {
      setCurrentMap(existing.records);
    } else {
      const initialMap: Record<string, AttendanceStatus> = {};
      students.forEach(s => {
        initialMap[s.id] = 'present';
      });
      setCurrentMap(initialMap);
    }
  }, [selectedDate, activeSession, attendanceRecords, students]);

  const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
    if (!canTakeAttendance) return;
    setCurrentMap(prev => ({
      ...prev,
      [studentId]: status,
    }));
  };

  const handleAllPresent = () => {
    if (!canTakeAttendance) return;
    const newMap: Record<string, AttendanceStatus> = { ...currentMap };
    // If filtered by group, only set that group to present
    const targetStudents = selectedGroupFilter === 'all'
      ? students
      : students.filter(s => s.group === selectedGroupFilter);

    targetStudents.forEach(s => {
      newMap[s.id] = 'present';
    });
    setCurrentMap(newMap);
  };

  const handleSave = () => {
    if (!canTakeAttendance) return;
    onSaveRecord({
      date: selectedDate,
      sessionType: activeSession,
      records: currentMap,
    });
    setIsSavedNotice(true);
    setTimeout(() => setIsSavedNotice(false), 3000);
  };

  // Compute daily stats for active session
  const dailyStats = React.useMemo(() => {
    let present = 0;
    let excused = 0;
    let unexcused = 0;
    let late = 0;

    Object.values(currentMap).forEach(st => {
      if (st === 'present') present++;
      else if (st === 'excused') excused++;
      else if (st === 'unexcused') unexcused++;
      else if (st === 'late') late++;
    });

    const totalStudents = students.length;
    const attendancePercentage = totalStudents > 0 ? Math.round(((present + late) / totalStudents) * 100) : 100;

    return { present, excused, unexcused, late, attendancePercentage };
  }, [currentMap, students]);

  // Compute week range from selectedDate (Mon to Sat) in Vietnam Time
  const weekDays = React.useMemo(() => {
    const curr = new Date(selectedDate + 'T00:00:00');
    const day = curr.getDay();
    const diffToMon = curr.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(curr.setDate(diffToMon));

    const days: { dateStr: string; label: string }[] = [];
    const labels = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

    for (let i = 0; i < 6; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      const year = d.getFullYear();
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const dateNum = String(d.getDate()).padStart(2, '0');

      days.push({
        dateStr: `${year}-${month}-${dateNum}`,
        label: labels[i],
      });
    }

    return days;
  }, [selectedDate]);

  // Compute monthly stats for selected session
  const monthlyStats = React.useMemo(() => {
    const recordsInMonth = attendanceRecords.filter(
      r => r.date.startsWith(selectedMonth) && (r.sessionType === activeSession || (!r.sessionType && activeSession === 'hoc_chinh'))
    );
    const totalDaysRecorded = recordsInMonth.length;

    const statsMap = new Map<
      string,
      { present: number; late: number; excused: number; unexcused: number; rate: number }
    >();

    students.forEach(s => {
      let present = 0;
      let late = 0;
      let excused = 0;
      let unexcused = 0;

      recordsInMonth.forEach(r => {
        const st = r.records[s.id];
        if (st === 'present') present++;
        else if (st === 'late') late++;
        else if (st === 'excused') excused++;
        else if (st === 'unexcused') unexcused++;
      });

      const attended = present + late;
      const rate = totalDaysRecorded > 0 ? Math.round((attended / totalDaysRecorded) * 100) : 100;

      statsMap.set(s.id, { present, late, excused, unexcused, rate });
    });

    return { totalDaysRecorded, statsMap };
  }, [attendanceRecords, selectedMonth, activeSession, students]);

  // Filtered students by search & group
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesGroup = selectedGroupFilter === 'all' || s.group === selectedGroupFilter;
    return matchesSearch && matchesGroup;
  });

  const getStatusIcon = (st?: AttendanceStatus) => {
    switch (st) {
      case 'present':
        return <span className="inline-block text-emerald-600 font-bold" title="Có mặt">🟢</span>;
      case 'late':
        return <span className="inline-block text-amber-500 font-bold" title="Đi muộn">🟠</span>;
      case 'excused':
        return <span className="inline-block text-sky-600 font-bold" title="Nghỉ có phép">🔵</span>;
      case 'unexcused':
        return <span className="inline-block text-rose-600 font-bold" title="Nghỉ không phép">🔴</span>;
      default:
        return <span className="text-slate-300 font-medium">-</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & View Modes */}
      <div className="glass-card rounded-3xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-500/20">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">Điểm Danh Lớp 11A7</h2>
              <span className="bg-emerald-100/90 text-emerald-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-emerald-300 shadow-2xs">
                Giờ VN: {formatVietnamDateDisplay(vnToday)}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Lưu trữ vĩnh viễn • Phân chia Học Chính & Học Nghề</p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80 w-full sm:w-auto justify-center">
          <button
            onClick={() => setViewMode('daily')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
              viewMode === 'daily'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> Theo Ngày
          </button>
          <button
            onClick={() => setViewMode('weekly')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
              viewMode === 'weekly'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" /> Theo Tuần
          </button>
          <button
            onClick={() => setViewMode('monthly')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
              viewMode === 'monthly'
                ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Theo Tháng
          </button>
        </div>
      </div>

      {/* SESSION SELECTOR (HỌC CHÍNH VS HỌC NGHỀ) */}
      <div className="glass-card rounded-2xl p-2.5 shadow-2xs flex items-center justify-center gap-2 sm:gap-4">
        <button
          onClick={() => setActiveSession('hoc_chinh')}
          className={`flex-1 max-w-sm py-2.5 px-4 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
            activeSession === 'hoc_chinh'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-400'
              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>📘 Điểm Danh HỌC CHÍNH</span>
        </button>

        <button
          onClick={() => setActiveSession('hoc_nghe')}
          className={`flex-1 max-w-sm py-2.5 px-4 rounded-xl font-black text-xs transition-all flex items-center justify-center gap-2 ${
            activeSession === 'hoc_nghe'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-amber-500/20 ring-2 ring-amber-400'
              : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 hover:text-amber-700 dark:hover:text-amber-400 border border-slate-200 dark:border-slate-700'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>🛠️ Điểm Danh HỌC NGHỀ</span>
        </button>
      </div>

      {/* ----------------- MODE 1: DAILY ATTENDANCE ----------------- */}
      {viewMode === 'daily' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          {/* Controls & Date Bar */}
          <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-3 py-2">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Ngày:</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="bg-transparent text-xs font-black text-slate-800 dark:text-white focus:outline-none cursor-pointer"
                />
              </div>
              <button
                onClick={() => setSelectedDate(vnToday)}
                className="px-3 py-2 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-xl text-xs font-bold border border-blue-200 dark:border-blue-800 transition-all"
              >
                Hôm Nay ({formatVietnamDateDisplay(vnToday)})
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {canTakeAttendance ? (
                <>
                  <button
                    onClick={handleAllPresent}
                    className="px-3.5 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    <CheckCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Tất Cả Có Mặt
                  </button>

                  <button
                    onClick={handleSave}
                    className={`px-4 py-2 text-white rounded-xl text-xs font-black shadow-md active:scale-95 transition-all flex items-center gap-1.5 ${
                      activeSession === 'hoc_chinh'
                        ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
                        : 'bg-amber-600 hover:bg-amber-700 shadow-amber-500/20'
                    }`}
                  >
                    <Save className="w-4 h-4" /> Lưu Điểm Danh
                  </button>
                </>
              ) : (
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Chế độ: Chỉ Xem
                </span>
              )}
            </div>
          </div>

          {/* Toast Notification */}
          {isSavedNotice && (
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 p-3.5 rounded-2xl text-xs font-black flex items-center gap-2 animate-in fade-in slide-in-from-top-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Đã lưu thành công dữ liệu điểm danh [{activeSession === 'hoc_chinh' ? 'Học Chính' : 'Học Nghề'}] ngày {formatVietnamDateDisplay(selectedDate)}!</span>
            </div>
          )}

          {/* Real-time Summary Cards & Progress */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="glass-card bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-200/90 dark:border-emerald-900/50 rounded-2xl p-4 flex items-center justify-between shadow-2xs">
              <div>
                <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">Có mặt</p>
                <p className="text-2xl font-black text-emerald-900 dark:text-emerald-200 mt-1">{dailyStats.present}</p>
                <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold mt-0.5">{dailyStats.attendancePercentage}% chuyên cần</p>
              </div>
              <CheckCircle2 className="w-9 h-9 text-emerald-500 opacity-80" />
            </div>

            <div className="glass-card bg-amber-50/60 dark:bg-amber-950/30 border-amber-200/90 dark:border-amber-900/50 rounded-2xl p-4 flex items-center justify-between shadow-2xs">
              <div>
                <p className="text-xs font-bold text-amber-800 dark:text-amber-300">Đi muộn</p>
                <p className="text-2xl font-black text-amber-900 dark:text-amber-200 mt-1">{dailyStats.late}</p>
                <p className="text-[10px] text-amber-700 dark:text-amber-400 font-bold mt-0.5">Cần nhắc nhở</p>
              </div>
              <Clock className="w-9 h-9 text-amber-500 opacity-80" />
            </div>

            <div className="glass-card bg-sky-50/60 dark:bg-sky-950/30 border-sky-200/90 dark:border-sky-900/50 rounded-2xl p-4 flex items-center justify-between shadow-2xs">
              <div>
                <p className="text-xs font-bold text-sky-800 dark:text-sky-300">Có phép</p>
                <p className="text-2xl font-black text-sky-900 dark:text-sky-200 mt-1">{dailyStats.excused}</p>
                <p className="text-[10px] text-sky-700 dark:text-sky-400 font-bold mt-0.5">Có gửi đơn/Zalo</p>
              </div>
              <AlertTriangle className="w-9 h-9 text-sky-500 opacity-80" />
            </div>

            <div className="glass-card bg-rose-50/60 dark:bg-rose-950/30 border-rose-200/90 dark:border-rose-900/50 rounded-2xl p-4 flex items-center justify-between shadow-2xs">
              <div>
                <p className="text-xs font-bold text-rose-800 dark:text-rose-300">Không phép</p>
                <p className="text-2xl font-black text-rose-900 dark:text-rose-200 mt-1">{dailyStats.unexcused}</p>
                <p className="text-[10px] text-rose-700 dark:text-rose-400 font-bold mt-0.5">Trừ điểm thi đua</p>
              </div>
              <XCircle className="w-9 h-9 text-rose-500 opacity-80" />
            </div>
          </div>

          {/* Group Filter & Search Bar */}
          <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Group Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto no-scrollbar">
              <span className="text-xs font-bold text-slate-500 uppercase mr-1 hidden sm:inline">Lọc theo:</span>
              <button
                onClick={() => setSelectedGroupFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedGroupFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                Tất Cả ({students.length})
              </button>
              {[1, 2, 3].map(g => (
                <button
                  key={g}
                  onClick={() => setSelectedGroupFilter(g)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedGroupFilter === g
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  Tổ {g}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <Filter className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Lọc tên học sinh..."
                value={searchFilter}
                onChange={e => setSearchFilter(e.target.value)}
                className="w-full pl-8 pr-7 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-blue-500"
              />
              {searchFilter && (
                <button
                  onClick={() => setSearchFilter('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Student List Table & Mobile Cards */}
          <div className="glass-card rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="font-black text-slate-800 dark:text-white text-sm flex items-center gap-2">
                <span>Danh Sách Học Sinh - {activeSession === 'hoc_chinh' ? '📘 HỌC CHÍNH' : '🛠️ HỌC NGHỀ'}</span>
                <span className="text-xs text-slate-400 font-normal">({filteredStudents.length} học sinh)</span>
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 text-[11px] font-black uppercase border-b border-slate-200 dark:border-slate-700">
                    <th className="py-3.5 px-4 w-12 text-center">STT</th>
                    <th className="py-3.5 px-4">Họ và Tên</th>
                    <th className="py-3.5 px-4 text-center">Tổ</th>
                    <th className="py-3.5 px-4 text-center">Trạng Thái Điểm Danh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs font-medium">
                  {filteredStudents.map(student => {
                    const status = currentMap[student.id] || 'present';

                    return (
                      <tr key={student.id} className="hover:bg-slate-50/90 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-4 text-center font-black text-slate-400">{student.stt}</td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">{student.name}</span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                            Tổ {student.group}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                            <button
                              onClick={() => handleStatusChange(student.id, 'present')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1 ${
                                status === 'present'
                                  ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300 scale-102'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-700 dark:hover:text-emerald-300'
                              } ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" /> Có mặt
                            </button>

                            <button
                              onClick={() => handleStatusChange(student.id, 'late')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1 ${
                                status === 'late'
                                  ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300 scale-102'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-700 dark:hover:text-amber-300'
                              } ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`}
                            >
                              <Clock className="w-3.5 h-3.5" /> Đi muộn
                            </button>

                            <button
                              onClick={() => handleStatusChange(student.id, 'excused')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1 ${
                                status === 'excused'
                                  ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-300 scale-102'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:text-sky-700 dark:hover:text-sky-300'
                              } ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`}
                            >
                              <AlertTriangle className="w-3.5 h-3.5" /> Có phép
                            </button>

                            <button
                              onClick={() => handleStatusChange(student.id, 'unexcused')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1 ${
                                status === 'unexcused'
                                  ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-300 scale-102'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-700 dark:hover:text-rose-300'
                              } ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`}
                            >
                              <XCircle className="w-3.5 h-3.5" /> Không phép
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MODE 2: WEEKLY OVERVIEW ----------------- */}
      {viewMode === 'weekly' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Tuần ({activeSession === 'hoc_chinh' ? 'Học Chính' : 'Học Nghề'}):</span>
              <span className="text-xs font-black text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 px-3 py-1 rounded-xl">
                {formatVietnamDateDisplay(weekDays[0].dateStr)} → {formatVietnamDateDisplay(weekDays[5].dateStr)}
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs font-bold text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1">🟢 Có mặt</span>
              <span className="flex items-center gap-1">🟠 Đi muộn</span>
              <span className="flex items-center gap-1">🔵 Có phép</span>
              <span className="flex items-center gap-1">🔴 Không phép</span>
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[11px] font-black uppercase border-b border-slate-200 dark:border-slate-800">
                    <th className="py-3.5 px-4 w-12 text-center sticky-col-header">STT</th>
                    <th className="py-3.5 px-4 sticky-col-header min-w-[150px]">Họ và Tên</th>
                    {weekDays.map(w => (
                      <th key={w.dateStr} className="py-3.5 px-3 text-center min-w-[90px]">
                        <div>{w.label}</div>
                        <div className="text-[9px] font-mono text-slate-400 dark:text-slate-500 font-semibold">{formatVietnamDateDisplay(w.dateStr)}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs font-medium">
                  {filteredStudents.map(student => (
                    <tr key={student.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="py-3 px-4 text-center font-black text-slate-400 dark:text-slate-500 sticky-col-first">{student.stt}</td>
                      <td className="py-3 px-4 font-bold text-slate-800 dark:text-white sticky-col-first">{student.name}</td>
                      {weekDays.map(w => {
                        const rec = attendanceRecords.find(
                          r => r.date === w.dateStr && (r.sessionType === activeSession || (!r.sessionType && activeSession === 'hoc_chinh'))
                        );
                        const status = rec ? rec.records[student.id] : undefined;
                        return (
                          <td key={w.dateStr} className="py-3 px-3 text-center text-base">
                            {getStatusIcon(status)}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- MODE 3: MONTHLY STATS ----------------- */}
      {viewMode === 'monthly' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Chọn Tháng Thống Kê:</span>
              <input
                type="month"
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-1.5 text-xs font-black text-slate-800 dark:text-white focus:outline-none"
              />
            </div>

            <div className="text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl">
              Tổng số buổi điểm danh ({activeSession === 'hoc_chinh' ? 'Học Chính' : 'Học Nghề'}) tháng {selectedMonth}: <strong className="text-blue-700 dark:text-blue-400 font-black">{monthlyStats.totalDaysRecorded} buổi</strong>
            </div>
          </div>

          <div className="glass-card rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-[11px] font-black uppercase border-b border-slate-200 dark:border-slate-800">
                    <th className="py-3.5 px-4 w-12 text-center sticky-col-header">STT</th>
                    <th className="py-3.5 px-4 sticky-col-header min-w-[150px]">Họ và Tên</th>
                    <th className="py-3.5 px-3 text-center text-emerald-700 dark:text-emerald-400">Có Mặt</th>
                    <th className="py-3.5 px-3 text-center text-amber-700 dark:text-amber-400">Đi Muộn</th>
                    <th className="py-3.5 px-3 text-center text-sky-700 dark:text-sky-400">Có Phép</th>
                    <th className="py-3.5 px-3 text-center text-rose-700 dark:text-rose-400">Không Phép</th>
                    <th className="py-3.5 px-4 text-center min-w-[130px]">Tỷ Lệ Chuyên Cần</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-xs font-medium">
                  {filteredStudents.map(student => {
                    const st = monthlyStats.statsMap.get(student.id) || { present: 0, late: 0, excused: 0, unexcused: 0, rate: 100 };

                    return (
                      <tr key={student.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-4 text-center font-black text-slate-400 dark:text-slate-500 sticky-col-first">{student.stt}</td>
                        <td className="py-3 px-4 font-bold text-slate-800 dark:text-white sticky-col-first">{student.name}</td>
                        <td className="py-3 px-3 text-center font-black text-emerald-700 dark:text-emerald-400">{st.present}</td>
                        <td className="py-3 px-3 text-center font-black text-amber-700 dark:text-amber-400">{st.late}</td>
                        <td className="py-3 px-3 text-center font-black text-sky-700 dark:text-sky-400">{st.excused}</td>
                        <td className="py-3 px-3 text-center font-black text-rose-700 dark:text-rose-400">{st.unexcused}</td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-16 sm:w-20 bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-200 dark:border-slate-700">
                              <div
                                className={`h-full rounded-full transition-all ${
                                  st.rate >= 90 ? 'bg-emerald-500' : st.rate >= 75 ? 'bg-amber-500' : 'bg-rose-500'
                                }`}
                                style={{ width: `${st.rate}%` }}
                              ></div>
                            </div>
                            <span className="font-black text-xs text-slate-800 dark:text-white">{st.rate}%</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
