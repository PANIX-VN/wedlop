'use client';

import React, { useState } from 'react';
import { Student, DynamicDutyRecord, DutyTask, DayType } from '../../data/types';
import { getVietnamTodayString, getVietnam14DaysList, formatVietnamDateDisplay } from '../../utils/time';
import { Calendar, UserPlus, Trash2, BookOpen, Wrench, Plus, CheckSquare, Search, ShieldAlert, Check, Users, Sparkles, X } from 'lucide-react';

interface DutyScheduleManagerProps {
  students: Student[];
  dutyRecords: DynamicDutyRecord[];
  tasks: DutyTask[];
  onUpdateDutyRecords: (newRecords: DynamicDutyRecord[]) => void;
  canEditDuty: boolean;
}

export const DutyScheduleManager: React.FC<DutyScheduleManagerProps> = ({
  students,
  dutyRecords,
  tasks,
  onUpdateDutyRecords,
  canEditDuty,
}) => {
  const vnTodayStr = getVietnamTodayString();

  const [selectedDate, setSelectedDate] = useState<string>(vnTodayStr);
  const [studentSearch, setStudentSearch] = useState('');
  const [modalGroupFilter, setModalGroupFilter] = useState<number | 'all'>('all');
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

  // Generate 14-day dates array in Vietnam Time
  const fourteenDaysList = React.useMemo(() => {
    return getVietnam14DaysList();
  }, []);

  // Get or initialize record for selected date
  const currentRecord = React.useMemo(() => {
    const existing = dutyRecords.find(r => r.date === selectedDate);
    if (existing) return existing;

    const dateObj = new Date(selectedDate + 'T00:00:00');
    const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayOfWeek = dateObj.getDay();

    const defaultType: DayType = dayOfWeek === 0 ? 'nghi' : dayOfWeek === 4 ? 'hoc_nghe' : 'hoc_chinh';

    return {
      date: selectedDate,
      dayName: dayNames[dayOfWeek],
      type: defaultType,
      assignedStudentIds: [],
      customNote: '',
    };
  }, [dutyRecords, selectedDate]);

  const studentMap = React.useMemo(() => {
    const map = new Map<string, Student>();
    students.forEach(s => map.set(s.id, s));
    return map;
  }, [students]);

  const handleToggleDayType = () => {
    if (!canEditDuty) return;

    const nextType: DayType =
      currentRecord.type === 'hoc_chinh' ? 'hoc_nghe' : currentRecord.type === 'hoc_nghe' ? 'nghi' : 'hoc_chinh';

    const updatedRecord = { ...currentRecord, type: nextType };
    const updatedList = [
      ...dutyRecords.filter(r => r.date !== selectedDate),
      updatedRecord,
    ];
    onUpdateDutyRecords(updatedList);
  };

  const handleAddStudentToDuty = (studentId: string) => {
    if (!canEditDuty) return;
    if (currentRecord.assignedStudentIds.includes(studentId)) return;

    const updatedRecord = {
      ...currentRecord,
      assignedStudentIds: [...currentRecord.assignedStudentIds, studentId],
    };
    const updatedList = [
      ...dutyRecords.filter(r => r.date !== selectedDate),
      updatedRecord,
    ];
    onUpdateDutyRecords(updatedList);
  };

  const handleAddEntireGroup = (groupNum: number) => {
    if (!canEditDuty) return;
    const groupStudents = students.filter(s => s.group === groupNum);
    const newIds = Array.from(new Set([...currentRecord.assignedStudentIds, ...groupStudents.map(s => s.id)]));

    const updatedRecord = {
      ...currentRecord,
      assignedStudentIds: newIds,
    };
    const updatedList = [
      ...dutyRecords.filter(r => r.date !== selectedDate),
      updatedRecord,
    ];
    onUpdateDutyRecords(updatedList);
    setIsAddStudentOpen(false);
  };

  const handleRemoveStudentFromDuty = (studentId: string) => {
    if (!canEditDuty) return;

    const updatedRecord = {
      ...currentRecord,
      assignedStudentIds: currentRecord.assignedStudentIds.filter(id => id !== studentId),
    };
    const updatedList = [
      ...dutyRecords.filter(r => r.date !== selectedDate),
      updatedRecord,
    ];
    onUpdateDutyRecords(updatedList);
  };

  const handleClearAllAssigned = () => {
    if (!canEditDuty) return;
    const updatedRecord = {
      ...currentRecord,
      assignedStudentIds: [],
    };
    const updatedList = [
      ...dutyRecords.filter(r => r.date !== selectedDate),
      updatedRecord,
    ];
    onUpdateDutyRecords(updatedList);
  };

  const handleNoteChange = (note: string) => {
    if (!canEditDuty) return;

    const updatedRecord = { ...currentRecord, customNote: note };
    const updatedList = [
      ...dutyRecords.filter(r => r.date !== selectedDate),
      updatedRecord,
    ];
    onUpdateDutyRecords(updatedList);
  };

  // Filter students in Add modal
  const availableToAdd = students.filter(s => {
    const isNotAssigned = !currentRecord.assignedStudentIds.includes(s.id);
    const matchesSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase());
    const matchesGroup = modalGroupFilter === 'all' || s.group === modalGroupFilter;
    return isNotAssigned && matchesSearch && matchesGroup;
  });

  return (
    <div className="space-y-6">
      {/* Top Header & Intro */}
      <div className="glass-card rounded-3xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-teal-600 to-emerald-600 text-white flex items-center justify-center font-black shadow-md shadow-teal-500/20">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">Lịch Trực Nhật 11A7</h2>
              <span className="bg-teal-100 text-teal-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-teal-300 shadow-2xs">
                Lưu Trữ 14 Ngày
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Phân công trực nhật linh hoạt bằng cách thêm học sinh hoặc thêm cả tổ</p>
          </div>
        </div>

        {/* Status Badge */}
        {!canEditDuty && (
          <span className="text-xs font-bold text-slate-500 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Quyền: Chỉ Xem Lịch
          </span>
        )}
      </div>

      {/* 14-Day Calendar Carousel Picker */}
      <div className="glass-card rounded-3xl p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-black text-slate-700 text-xs uppercase tracking-wider">
            Lịch 14 ngày chuẩn giờ VN (Chạm để chọn ngày):
          </h3>
          <span className="text-xs font-black text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-lg shadow-2xs">
            {currentRecord.dayName} ({formatVietnamDateDisplay(selectedDate)})
          </span>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 pt-1 no-scrollbar scroll-smooth">
          {fourteenDaysList.map(item => {
            const isSelected = item.dateStr === selectedDate;
            const rec = dutyRecords.find(r => r.date === item.dateStr);
            const count = rec ? rec.assignedStudentIds.length : 0;

            return (
              <button
                key={item.dateStr}
                onClick={() => setSelectedDate(item.dateStr)}
                className={`flex-1 min-w-[96px] p-2.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-between active:scale-95 ${
                  isSelected
                    ? 'bg-gradient-to-tr from-blue-600 to-indigo-600 text-white border-blue-600 shadow-md shadow-blue-500/20 ring-2 ring-blue-300'
                    : item.isToday
                    ? 'bg-amber-50/90 dark:bg-amber-950/40 border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-300 font-bold ring-1 ring-amber-300'
                    : 'bg-slate-50/90 dark:bg-slate-800/90 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <span className="text-[10px] uppercase font-black opacity-80">{item.dayName}</span>
                <span className="text-xs font-black my-0.5">{formatVietnamDateDisplay(item.dateStr)}</span>
                <span
                  className={`text-[9px] font-black px-2 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : count > 0
                      ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  {count > 0 ? `${count} HS` : 'Chưa xếp'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Date Duty Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Duty Panel */}
        <div className="lg:col-span-2 glass-card rounded-3xl p-5 sm:p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-black text-slate-800 dark:text-white text-lg">
                  {currentRecord.dayName} ({formatVietnamDateDisplay(selectedDate)})
                </h3>
                {selectedDate === vnTodayStr && (
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase shadow-2xs">
                    Hôm Nay
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                Phân công trực nhật ngày {formatVietnamDateDisplay(selectedDate)}
              </p>
            </div>

            {/* Day Type Toggle */}
            <button
              onClick={handleToggleDayType}
              disabled={!canEditDuty}
              className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-2xs ${
                currentRecord.type === 'hoc_chinh'
                  ? 'bg-blue-100 dark:bg-blue-950/50 text-blue-900 dark:text-blue-300 border border-blue-300 dark:border-blue-800 hover:bg-blue-200 dark:hover:bg-blue-900/60'
                  : currentRecord.type === 'hoc_nghe'
                  ? 'bg-amber-100 dark:bg-amber-950/50 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800 hover:bg-amber-200 dark:hover:bg-amber-900/60'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700'
              } ${!canEditDuty ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {currentRecord.type === 'hoc_chinh' ? (
                <>
                  <BookOpen className="w-4 h-4 text-blue-600 dark:text-blue-400" /> HỌC CHÍNH {canEditDuty && '(Đổi →)'}
                </>
              ) : currentRecord.type === 'hoc_nghe' ? (
                <>
                  <Wrench className="w-4 h-4 text-amber-600 dark:text-amber-400" /> HỌC NGHỀ {canEditDuty && '(Đổi →)'}
                </>
              ) : (
                <>NGHỈ {canEditDuty && '(Đổi →)'}</>
              )}
            </button>
          </div>

          {/* Assigned Students Grid */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-black text-slate-800 dark:text-white text-sm flex items-center gap-1.5">
                Học sinh trực nhật ({currentRecord.assignedStudentIds.length} bạn)
              </h4>

              {canEditDuty && (
                <div className="flex items-center space-x-2">
                  {currentRecord.assignedStudentIds.length > 0 && (
                    <button
                      onClick={handleClearAllAssigned}
                      className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-700 dark:hover:text-rose-300 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold transition-all"
                    >
                      Xóa Hết
                    </button>
                  )}
                  <button
                    onClick={() => setIsAddStudentOpen(true)}
                    className="px-3.5 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white rounded-xl text-xs font-black shadow-md shadow-teal-500/20 active:scale-95 transition-all flex items-center gap-1.5"
                  >
                    <UserPlus className="w-4 h-4" /> + Thêm Học Sinh
                  </button>
                </div>
              )}
            </div>

            {currentRecord.assignedStudentIds.length === 0 ? (
              <div className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl text-center bg-slate-50/50 dark:bg-slate-800/30 space-y-2">
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Chưa có học sinh nào được phân công cho ngày này.</p>
                {canEditDuty && (
                  <button
                    onClick={() => setIsAddStudentOpen(true)}
                    className="px-4 py-2 bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900/50 rounded-xl text-xs font-black border border-teal-200 dark:border-teal-800 transition-all inline-flex items-center gap-1.5 shadow-2xs"
                  >
                    <Plus className="w-3.5 h-3.5" /> Bấm vào đây để chọn nhanh
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentRecord.assignedStudentIds.map(stId => {
                  const st = studentMap.get(stId);
                  if (!st) return null;

                  return (
                    <div
                      key={stId}
                      className="p-3 bg-slate-50/90 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-between shadow-2xs group hover:bg-white dark:hover:bg-slate-800 transition-all"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-7 h-7 rounded-xl bg-teal-100 dark:bg-teal-950/50 text-teal-800 dark:text-teal-300 font-black text-xs flex items-center justify-center">
                          #{st.stt}
                        </span>
                        <div>
                          <p className="text-xs font-black text-slate-800 dark:text-white">{st.name}</p>
                          <span className="text-[10px] text-slate-400 font-semibold">Tổ {st.group}</span>
                        </div>
                      </div>

                      {canEditDuty && (
                        <button
                          onClick={() => handleRemoveStudentFromDuty(stId)}
                          title="Gỡ học sinh"
                          className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Custom Note */}
          <div className="space-y-1.5 pt-2">
            <label className="block text-xs font-black text-slate-700 dark:text-slate-300">Ghi chú phân công ca trực:</label>
            <input
              type="text"
              disabled={!canEditDuty}
              placeholder="VD: Mang khẩu trang, quét lớp sạch sẽ, giặt giẻ lau bảng, đổ rác cuối buổi..."
              value={currentRecord.customNote || ''}
              onChange={e => handleNoteChange(e.target.value)}
              className="w-full p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-teal-500 disabled:opacity-75"
            />
          </div>
        </div>

        {/* Task Reference Panel */}
        <div className="glass-card rounded-3xl p-5 shadow-sm space-y-4">
          <h3 className="font-black text-slate-800 dark:text-white text-sm flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-teal-600 dark:text-teal-400" /> Nhiệm Vụ Trực Nhật Quy Định
          </h3>
          <div className="space-y-2.5">
            {tasks.map(t => (
              <div key={t.id} className="p-3.5 bg-slate-50/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700 rounded-2xl shadow-2xs">
                <p className="text-xs font-black text-slate-800 dark:text-white flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" /> {t.name}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1 leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Student Selection Modal (Supports quick single add or group add) */}
      {isAddStudentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
              <div>
                <h3 className="font-black text-slate-800 dark:text-white text-base">Thêm Học Sinh Trực Nhật</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Ngày: {formatVietnamDateDisplay(selectedDate)}</p>
              </div>
              <button
                onClick={() => setIsAddStudentOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Add by Group/Tổ */}
            <div className="mb-4 p-3 bg-teal-50/70 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 rounded-2xl space-y-2">
              <span className="text-[11px] font-black text-teal-900 dark:text-teal-300 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" /> Thêm nhanh cả Tổ trực nhật:
              </span>
              <div className="grid grid-cols-3 gap-1.5">
                {[1, 2, 3].map(g => (
                  <button
                    key={g}
                    onClick={() => handleAddEntireGroup(g)}
                    className="py-1.5 bg-white dark:bg-slate-800 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-700 rounded-xl text-xs font-black transition-all shadow-2xs text-center"
                  >
                    + Tổ {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên học sinh..."
                value={studentSearch}
                onChange={e => setStudentSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none"
              />
            </div>

            {/* Filter by Tổ in modal */}
            <div className="flex items-center gap-1 mb-3 overflow-x-auto pb-1 no-scrollbar">
              <button
                onClick={() => setModalGroupFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-black ${
                  modalGroupFilter === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}
              >
                Tất cả
              </button>
              {[1, 2, 3].map(g => (
                <button
                  key={g}
                  onClick={() => setModalGroupFilter(g)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-black ${
                    modalGroupFilter === g ? 'bg-teal-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  Tổ {g}
                </button>
              ))}
            </div>

            {/* Student Picker List */}
            <div className="space-y-1.5 max-h-[220px] overflow-y-auto pr-1">
              {availableToAdd.length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-xs font-medium">
                  Tất cả học sinh theo điều kiện lọc đã được thêm.
                </div>
              ) : (
                availableToAdd.map(st => (
                  <div
                    key={st.id}
                    onClick={() => handleAddStudentToDuty(st.id)}
                    className="p-2.5 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl cursor-pointer transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="w-5 h-5 rounded-md bg-teal-100 text-teal-800 font-black text-[10px] flex items-center justify-center">
                        {st.stt}
                      </span>
                      <span className="text-xs font-black text-slate-700 group-hover:text-teal-800">
                        {st.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">Tổ {st.group}</span>
                    </div>
                    <span className="text-[11px] font-black text-teal-600 group-hover:underline">
                      + Thêm
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setIsAddStudentOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-black transition-all"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
