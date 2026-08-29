'use client';

import React, { useState } from 'react';
import { Student, DynamicDutyRecord, DutyTask, DayType } from '../../data/types';
import { Calendar, UserPlus, Trash2, BookOpen, Wrench, Plus, CheckSquare, Search, ShieldAlert, Check, ChevronLeft, ChevronRight } from 'lucide-react';

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
  const getTodayStr = () => new Date().toISOString().split('T')[0];

  const [selectedDate, setSelectedDate] = useState<string>(getTodayStr());
  const [studentSearch, setStudentSearch] = useState('');
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);

  // Generate 14-day dates array (7 days past + Today + 6 days future)
  const fourteenDaysList = React.useMemo(() => {
    const list: { dateStr: string; dayName: string; isToday: boolean }[] = [];
    const today = new Date();

    const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

    for (let i = -7; i <= 6; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      const dayName = dayNames[d.getDay()];
      list.push({
        dateStr,
        dayName,
        isToday: dateStr === getTodayStr(),
      });
    }

    return list;
  }, []);

  // Get or initialize record for selected date
  const currentRecord = React.useMemo(() => {
    const existing = dutyRecords.find(r => r.date === selectedDate);
    if (existing) return existing;

    const dateObj = new Date(selectedDate);
    const dayNames = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayOfWeek = dateObj.getDay();

    // Default Thursday (4) to 'hoc_nghe', Sunday (0) to 'nghi', others to 'hoc_chinh'
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

  const handleNoteChange = (note: string) => {
    if (!canEditDuty) return;

    const updatedRecord = { ...currentRecord, customNote: note };
    const updatedList = [
      ...dutyRecords.filter(r => r.date !== selectedDate),
      updatedRecord,
    ];
    onUpdateDutyRecords(updatedList);
  };

  // Filter students available to be added
  const availableToAdd = students.filter(
    s =>
      !currentRecord.assignedStudentIds.includes(s.id) &&
      s.name.toLowerCase().includes(studentSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Header & Intro */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-800">Lịch Trực Nhật 11A7 (Lưu trữ 14 ngày)</h2>
            <p className="text-xs text-slate-500">Phân công trực nhật linh hoạt bằng cách thêm học sinh theo ngày</p>
          </div>
        </div>

        {/* Status Badge */}
        {!canEditDuty && (
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Quyền truy cập: Chỉ Xem
          </span>
        )}
      </div>

      {/* 14-Day Calendar Carousel Picker */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-800 text-xs uppercase tracking-wider">
            Lịch 14 ngày gần đây (Bấm chọn ngày để xem/phân công):
          </h3>
          <span className="text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md">
            Đang chọn: {currentRecord.dayName} ({selectedDate})
          </span>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 pt-1 no-scrollbar">
          {fourteenDaysList.map(item => {
            const isSelected = item.dateStr === selectedDate;
            const rec = dutyRecords.find(r => r.date === item.dateStr);
            const count = rec ? rec.assignedStudentIds.length : 0;

            return (
              <button
                key={item.dateStr}
                onClick={() => setSelectedDate(item.dateStr)}
                className={`flex-1 min-w-[95px] p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-between ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-300'
                    : item.isToday
                    ? 'bg-amber-50 border-amber-300 text-amber-900 font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span className="text-[10px] uppercase font-bold opacity-80">{item.dayName}</span>
                <span className="text-xs font-extrabold my-0.5">{item.dateStr.split('-').slice(1).join('/')}</span>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : count > 0
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {count > 0 ? `${count} HS` : 'Chưa xếp'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Date Duty Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Duty Panel */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-extrabold text-slate-800 text-lg">
                  {currentRecord.dayName} ({selectedDate})
                </h3>
                {selectedDate === getTodayStr() && (
                  <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Hôm Nay
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Phân công trực nhật cho ngày {selectedDate}
              </p>
            </div>

            {/* Day Type Toggle */}
            <button
              onClick={handleToggleDayType}
              disabled={!canEditDuty}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs ${
                currentRecord.type === 'hoc_chinh'
                  ? 'bg-blue-100 text-blue-800 border border-blue-300 hover:bg-blue-200'
                  : currentRecord.type === 'hoc_nghe'
                  ? 'bg-amber-100 text-amber-800 border border-amber-300 hover:bg-amber-200'
                  : 'bg-slate-100 text-slate-600 border border-slate-300 hover:bg-slate-200'
              } ${!canEditDuty ? 'opacity-80 cursor-not-allowed' : ''}`}
            >
              {currentRecord.type === 'hoc_chinh' ? (
                <>
                  <BookOpen className="w-4 h-4 text-blue-600" /> HỌC CHÍNH {canEditDuty && '(Đổi →)'}
                </>
              ) : currentRecord.type === 'hoc_nghe' ? (
                <>
                  <Wrench className="w-4 h-4 text-amber-600" /> HỌC NGHỀ {canEditDuty && '(Đổi →)'}
                </>
              ) : (
                <>NGHỈ {canEditDuty && '(Đổi →)'}</>
              )}
            </button>
          </div>

          {/* Assigned Students Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
                Học sinh trực nhật trong ngày ({currentRecord.assignedStudentIds.length} học sinh)
              </h4>

              {canEditDuty && (
                <button
                  onClick={() => setIsAddStudentOpen(true)}
                  className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1"
                >
                  <UserPlus className="w-4 h-4" /> Thêm Học Sinh Trực
                </button>
              )}
            </div>

            {currentRecord.assignedStudentIds.length === 0 ? (
              <div className="p-8 border border-dashed border-slate-300 rounded-2xl text-center bg-slate-50/50 space-y-2">
                <p className="text-xs font-semibold text-slate-500">Chưa có học sinh nào được phân công cho ngày này.</p>
                {canEditDuty && (
                  <button
                    onClick={() => setIsAddStudentOpen(true)}
                    className="text-xs font-bold text-teal-600 hover:underline inline-flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" /> Bấm vào đây để chọn học sinh
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
                      className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between shadow-2xs group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="w-7 h-7 rounded-lg bg-teal-100 text-teal-800 font-extrabold text-xs flex items-center justify-center">
                          #{st.stt}
                        </span>
                        <span className="text-xs font-bold text-slate-800">{st.name}</span>
                      </div>

                      {canEditDuty && (
                        <button
                          onClick={() => handleRemoveStudentFromDuty(stId)}
                          title="Gỡ học sinh"
                          className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
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
            <label className="block text-xs font-bold text-slate-700">Ghi chú phân công ca trực:</label>
            <input
              type="text"
              disabled={!canEditDuty}
              placeholder="VD: Mang khẩu trang, làm sạch gầm bàn, đổ rác cuối buổi..."
              value={currentRecord.customNote || ''}
              onChange={e => handleNoteChange(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-teal-500 disabled:opacity-75"
            />
          </div>
        </div>

        {/* Task Reference Panel */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
            <CheckSquare className="w-4 h-4 text-teal-600" /> Nhiệm Vụ Trực Nhật Quy Định
          </h3>
          <div className="space-y-2.5">
            {tasks.map(t => (
              <div key={t.id} className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                <p className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-teal-600" /> {t.name}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add Student Selection Modal */}
      {isAddStudentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="font-bold text-slate-800 text-base">Thêm Học Sinh Trực Nhật ({selectedDate})</h3>
              <button
                onClick={() => setIsAddStudentOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                ✕
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-4">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên học sinh..."
                value={studentSearch}
                onChange={e => setStudentSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none"
              />
            </div>

            {/* Student Picker List */}
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
              {availableToAdd.length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-xs font-medium">
                  Tất cả học sinh tìm kiếm đã được thêm vào trực nhật.
                </div>
              ) : (
                availableToAdd.map(st => (
                  <div
                    key={st.id}
                    onClick={() => handleAddStudentToDuty(st.id)}
                    className="p-2.5 bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-xl cursor-pointer transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-md bg-teal-100 text-teal-800 font-bold text-[10px] flex items-center justify-center">
                        {st.stt}
                      </span>
                      <span className="text-xs font-bold text-slate-700 group-hover:text-teal-800">
                        {st.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-teal-600 group-hover:underline">
                      + Thêm
                    </span>
                  </div>
                ))
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setIsAddStudentOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
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
