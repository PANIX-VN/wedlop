'use client';

import React, { useState, useEffect } from 'react';
import { Student, AttendanceStatus, AttendanceRecord, SessionType } from '../../data/types';
import { Calendar, CheckCircle2, XCircle, Clock, AlertTriangle, Save, CheckCheck, ShieldAlert, BarChart3, ListFilter, BookOpen, Wrench } from 'lucide-react';

interface AttendanceManagerProps {
  students: Student[];
  attendanceRecords: AttendanceRecord[];
  onSaveRecord: (record: AttendanceRecord) => void;
  canTakeAttendance: boolean;
}

export function getVietnamTodayString(): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
    return formatter.format(new Date()); // YYYY-MM-DD
  } catch (e) {
    const now = new Date();
    return now.toISOString().split('T')[0];
  }
}

export const AttendanceManager: React.FC<AttendanceManagerProps> = ({
  students,
  attendanceRecords,
  onSaveRecord,
  canTakeAttendance,
}) => {
  const vnToday = getVietnamTodayString();

  // Mode: 'daily' | 'weekly' | 'monthly'
  const [viewMode, setViewMode] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  // Active Session: 'hoc_chinh' | 'hoc_nghe'
  const [activeSession, setActiveSession] = useState<SessionType>('hoc_chinh');

  // Selected date & month
  const [selectedDate, setSelectedDate] = useState<string>(vnToday);
  const [selectedMonth, setSelectedMonth] = useState<string>(vnToday.substring(0, 7)); // YYYY-MM
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
    const newMap: Record<string, AttendanceStatus> = {};
    students.forEach(s => {
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

    return { present, excused, unexcused, late };
  }, [currentMap]);

  // Compute week range from selectedDate (Mon to Sat)
  const weekDays = React.useMemo(() => {
    const curr = new Date(selectedDate);
    const day = curr.getDay();
    const diffToMon = curr.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(curr.setDate(diffToMon));

    const days: { dateStr: string; label: string }[] = [];
    const labels = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

    for (let i = 0; i < 6; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      days.push({
        dateStr: d.toISOString().split('T')[0],
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

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const getStatusBadge = (st?: AttendanceStatus) => {
    switch (st) {
      case 'present':
        return <span className="text-emerald-700 font-extrabold" title="Có mặt">🟢</span>;
      case 'late':
        return <span className="text-amber-700 font-extrabold" title="Đi muộn">🟠</span>;
      case 'excused':
        return <span className="text-sky-700 font-extrabold" title="Nghỉ có phép">🔵</span>;
      case 'unexcused':
        return <span className="text-rose-700 font-extrabold" title="Nghỉ không phép">🔴</span>;
      default:
        return <span className="text-slate-300 font-medium">-</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Header & View Modes */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-base font-bold text-slate-800">Điểm Danh Lớp 11A7</h2>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-300">
                Giờ VN: {vnToday}
              </span>
            </div>
            <p className="text-xs text-slate-500">Phân chia 2 mục điểm danh riêng biệt: Học Chính và Học Nghề</p>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewMode('daily')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'daily'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" /> Theo Ngày
          </button>
          <button
            onClick={() => setViewMode('weekly')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'weekly'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ListFilter className="w-3.5 h-3.5" /> Theo Tuần
          </button>
          <button
            onClick={() => setViewMode('monthly')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'monthly'
                ? 'bg-white text-blue-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" /> Theo Tháng
          </button>
        </div>
      </div>

      {/* SESSION SELECTOR (HỌC CHÍNH VS HỌC NGHỀ) */}
      <div className="bg-white rounded-2xl p-3 shadow-sm border border-slate-200 flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveSession('hoc_chinh')}
          className={`flex-1 max-w-xs py-2.5 px-4 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 ${
            activeSession === 'hoc_chinh'
              ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300'
              : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-700'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>📘 Điểm Danh HỌC CHÍNH</span>
        </button>

        <button
          onClick={() => setActiveSession('hoc_nghe')}
          className={`flex-1 max-w-xs py-2.5 px-4 rounded-xl font-extrabold text-xs transition-all flex items-center justify-center gap-2 ${
            activeSession === 'hoc_nghe'
              ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-300'
              : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>🛠️ Điểm Danh HỌC NGHỀ</span>
        </button>
      </div>

      {/* ----------------- MODE 1: DAILY ATTENDANCE ----------------- */}
      {viewMode === 'daily' && (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                <span className="text-xs font-semibold text-slate-600">Ngày điểm danh:</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer"
                />
              </div>
              <button
                onClick={() => setSelectedDate(vnToday)}
                className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-bold border border-blue-200 transition-all"
              >
                Hôm Nay ({vnToday})
              </button>
            </div>

            <div className="flex items-center space-x-2">
              {canTakeAttendance ? (
                <>
                  <button
                    onClick={handleAllPresent}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border border-slate-200"
                  >
                    <CheckCheck className="w-4 h-4 text-emerald-600" /> Tất Cả Có Mặt
                  </button>

                  <button
                    onClick={handleSave}
                    className={`px-4 py-2 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5 ${
                      activeSession === 'hoc_chinh'
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-amber-600 hover:bg-amber-700'
                    }`}
                  >
                    <Save className="w-4 h-4" /> Lưu Điểm Danh ({activeSession === 'hoc_chinh' ? 'Học Chính' : 'Học Nghề'})
                  </button>
                </>
              ) : (
                <span className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Chế độ: Xem Điểm Danh
                </span>
              )}
            </div>
          </div>

          {/* Toast Notification */}
          {isSavedNotice && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Đã lưu thông tin điểm danh [{activeSession === 'hoc_chinh' ? 'Học Chính' : 'Học Nghề'}] ngày {selectedDate} thành công!
            </div>
          )}

          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-emerald-700">Có mặt</p>
                <p className="text-2xl font-extrabold text-emerald-800 mt-1">{dailyStats.present}</p>
              </div>
              <CheckCircle2 className="w-8 h-8 text-emerald-500 opacity-80" />
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-amber-700">Đi muộn</p>
                <p className="text-2xl font-extrabold text-amber-800 mt-1">{dailyStats.late}</p>
              </div>
              <Clock className="w-8 h-8 text-amber-500 opacity-80" />
            </div>

            <div className="bg-sky-50/70 border border-sky-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-sky-700">Nghỉ có phép</p>
                <p className="text-2xl font-extrabold text-sky-800 mt-1">{dailyStats.excused}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-sky-500 opacity-80" />
            </div>

            <div className="bg-rose-50/70 border border-rose-200 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-rose-700">Nghỉ không phép</p>
                <p className="text-2xl font-extrabold text-rose-800 mt-1">{dailyStats.unexcused}</p>
              </div>
              <XCircle className="w-8 h-8 text-rose-500 opacity-80" />
            </div>
          </div>

          {/* Student List Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <span>Danh Sách Điểm Danh - {activeSession === 'hoc_chinh' ? '📘 HỌC CHÍNH' : '🛠️ HỌC NGHỀ'}</span>
                <span className="text-xs text-slate-400 font-normal">({filteredStudents.length} học sinh)</span>
              </h3>

              <div className="w-48 sm:w-64">
                <input
                  type="text"
                  placeholder="Lọc tên học sinh..."
                  value={searchFilter}
                  onChange={e => setSearchFilter(e.target.value)}
                  className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200">
                    <th className="py-3 px-4 w-12 text-center">STT</th>
                    <th className="py-3 px-4">Họ và Tên</th>
                    <th className="py-3 px-4 text-center">Trạng Thái Điểm Danh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {filteredStudents.map(student => {
                    const status = currentMap[student.id] || 'present';

                    return (
                      <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 text-center font-bold text-slate-500">{student.stt}</td>
                        <td className="py-3 px-4 font-bold text-slate-800">{student.name}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => handleStatusChange(student.id, 'present')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${
                                status === 'present'
                                  ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300'
                                  : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'
                              } ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5" /> Có mặt
                            </button>

                            <button
                              onClick={() => handleStatusChange(student.id, 'late')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${
                                status === 'late'
                                  ? 'bg-amber-500 text-white shadow-sm ring-2 ring-amber-300'
                                  : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-700'
                              } ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`}
                            >
                              <Clock className="w-3.5 h-3.5" /> Đi muộn
                            </button>

                            <button
                              onClick={() => handleStatusChange(student.id, 'excused')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${
                                status === 'excused'
                                  ? 'bg-sky-600 text-white shadow-sm ring-2 ring-sky-300'
                                  : 'bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-sky-700'
                              } ${!canTakeAttendance ? 'cursor-default opacity-85' : ''}`}
                            >
                              <AlertTriangle className="w-3.5 h-3.5" /> Có phép
                            </button>

                            <button
                              onClick={() => handleStatusChange(student.id, 'unexcused')}
                              disabled={!canTakeAttendance}
                              className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all flex items-center gap-1 ${
                                status === 'unexcused'
                                  ? 'bg-rose-600 text-white shadow-sm ring-2 ring-rose-300'
                                  : 'bg-slate-100 text-slate-600 hover:bg-rose-50 hover:text-rose-700'
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
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700">Tuần ({activeSession === 'hoc_chinh' ? 'Học Chính' : 'Học Nghề'}):</span>
              <span className="text-xs font-extrabold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-xl">
                {weekDays[0].dateStr} → {weekDays[5].dateStr}
              </span>
            </div>

            <div className="flex items-center space-x-3 text-xs font-semibold">
              <span className="flex items-center gap-1">🟢 Có mặt</span>
              <span className="flex items-center gap-1">🟠 Đi muộn</span>
              <span className="flex items-center gap-1">🔵 Có phép</span>
              <span className="flex items-center gap-1">🔴 Không phép</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200">
                    <th className="py-3 px-4 w-12 text-center">STT</th>
                    <th className="py-3 px-4">Họ và Tên</th>
                    {weekDays.map(w => (
                      <th key={w.dateStr} className="py-3 px-3 text-center">
                        <div>{w.label}</div>
                        <div className="text-[9px] font-mono text-slate-400">{w.dateStr.split('-').slice(1).join('/')}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {filteredStudents.map(student => (
                    <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 text-center font-bold text-slate-500">{student.stt}</td>
                      <td className="py-3 px-4 font-bold text-slate-800">{student.name}</td>
                      {weekDays.map(w => {
                        const rec = attendanceRecords.find(
                          r => r.date === w.dateStr && (r.sessionType === activeSession || (!r.sessionType && activeSession === 'hoc_chinh'))
                        );
                        const status = rec ? rec.records[student.id] : undefined;
                        return (
                          <td key={w.dateStr} className="py-3 px-3 text-center text-base">
                            {getStatusBadge(status)}
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
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-700">Chọn Tháng Xem Thống Kê:</span>
              <input
                type="month"
                value={selectedMonth}
                onChange={e => setSelectedMonth(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none"
              />
            </div>

            <div className="text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl">
              Tổng số ngày điểm danh ({activeSession === 'hoc_chinh' ? 'Học Chính' : 'Học Nghề'}) tháng {selectedMonth}: <span className="font-extrabold text-blue-700">{monthlyStats.totalDaysRecorded} buổi</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200">
                    <th className="py-3 px-4 w-12 text-center">STT</th>
                    <th className="py-3 px-4">Họ và Tên</th>
                    <th className="py-3 px-3 text-center text-emerald-700">Có Mặt</th>
                    <th className="py-3 px-3 text-center text-amber-700">Đi Muộn</th>
                    <th className="py-3 px-3 text-center text-sky-700">Có Phép</th>
                    <th className="py-3 px-3 text-center text-rose-700">Không Phép</th>
                    <th className="py-3 px-4 text-center">Tỷ Lệ Chuyên Cần (%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium">
                  {filteredStudents.map(student => {
                    const st = monthlyStats.statsMap.get(student.id) || { present: 0, late: 0, excused: 0, unexcused: 0, rate: 100 };

                    return (
                      <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="py-3 px-4 text-center font-bold text-slate-500">{student.stt}</td>
                        <td className="py-3 px-4 font-bold text-slate-800">{student.name}</td>
                        <td className="py-3 px-3 text-center font-bold text-emerald-700">{st.present}</td>
                        <td className="py-3 px-3 text-center font-bold text-amber-700">{st.late}</td>
                        <td className="py-3 px-3 text-center font-bold text-sky-700">{st.excused}</td>
                        <td className="py-3 px-3 text-center font-bold text-rose-700">{st.unexcused}</td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <div className="w-20 bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200">
                              <div
                                className={`h-full rounded-full ${
                                  st.rate >= 90 ? 'bg-emerald-500' : st.rate >= 75 ? 'bg-amber-500' : 'bg-rose-500'
                                }`}
                                style={{ width: `${st.rate}%` }}
                              ></div>
                            </div>
                            <span className="font-extrabold text-xs text-slate-800">{st.rate}%</span>
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
