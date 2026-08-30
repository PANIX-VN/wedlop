'use client';

import React, { useState } from 'react';
import { Student, ColumnRow } from '../../data/types';
import { DeskConfigModal } from './DeskConfigModal';
import { LuckyWheelModal } from './LuckyWheelModal';
import { Search, Sparkles, Settings, UserCheck, Users, HelpCircle, ShieldAlert, UserPlus, X, ArrowLeftRight, Check, Eye } from 'lucide-react';

interface SeatingChartProps {
  students: Student[];
  layout: ColumnRow[];
  onUpdateLayout: (newLayout: ColumnRow[]) => void;
  canEditSeating: boolean;
}

export const SeatingChart: React.FC<SeatingChartProps> = ({
  students,
  layout,
  onUpdateLayout,
  canEditSeating,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const [draggedStudentId, setDraggedStudentId] = useState<string | null>(null);

  // Column view filter on mobile/tablet ('all' | columnId)
  const [selectedColumnFilter, setSelectedColumnFilter] = useState<string>('all');

  // Mobile Tap-to-assign modal state
  const [tapSeatTarget, setTapSeatTarget] = useState<{ colId: string; deskId: string; seatIndex: number; currentStudentId: string | null } | null>(null);
  const [pickerSearch, setPickerSearch] = useState('');

  // Helper map student ID -> Student object
  const studentMap = React.useMemo(() => {
    const map = new Map<string, Student>();
    students.forEach(s => map.set(s.id, s));
    return map;
  }, [students]);

  // Assigned student IDs
  const assignedStudentIds = React.useMemo(() => {
    const set = new Set<string>();
    layout.forEach(col => {
      col.desks.forEach(desk => {
        desk.seats.forEach(seat => {
          if (seat.studentId) set.add(seat.studentId);
        });
      });
    });
    return set;
  }, [layout]);

  // Total seats capacity
  const totalSeatsCapacity = React.useMemo(() => {
    let count = 0;
    layout.forEach(col => {
      col.desks.forEach(d => {
        count += d.capacity;
      });
    });
    return count;
  }, [layout]);

  // Unassigned students list
  const unassignedStudents = React.useMemo(() => {
    return students.filter(s => !assignedStudentIds.has(s.id));
  }, [students, assignedStudentIds]);

  // Drag handlers
  const handleDragStart = (e: React.DragEvent, studentId: string) => {
    if (!canEditSeating) return;
    e.dataTransfer.setData('text/plain', studentId);
    setDraggedStudentId(studentId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    if (!canEditSeating) return;
    e.preventDefault();
  };

  const assignStudentToSeat = (colId: string, deskId: string, seatIndex: number, studentId: string) => {
    const newLayout = layout.map(col => ({
      ...col,
      desks: col.desks.map(desk => ({
        ...desk,
        seats: desk.seats.map(seat => ({ ...seat })),
      })),
    }));

    // Find and remove student from old seat if assigned
    newLayout.forEach(col => {
      col.desks.forEach(desk => {
        desk.seats.forEach(seat => {
          if (seat.studentId === studentId) {
            seat.studentId = null;
          }
        });
      });
    });

    // Assign to new seat
    const targetCol = newLayout.find(c => c.id === colId);
    if (targetCol) {
      const targetDesk = targetCol.desks.find(d => d.id === deskId);
      if (targetDesk && targetDesk.seats[seatIndex]) {
        targetDesk.seats[seatIndex].studentId = studentId;
      }
    }

    onUpdateLayout(newLayout);
  };

  const handleDropSeat = (colId: string, deskId: string, seatIndex: number, e: React.DragEvent) => {
    if (!canEditSeating) return;
    e.preventDefault();
    const studentId = e.dataTransfer.getData('text/plain');
    if (!studentId) return;

    assignStudentToSeat(colId, deskId, seatIndex, studentId);
    setDraggedStudentId(null);
  };

  const handleUnassignSeat = (colId: string, deskId: string, seatIndex: number) => {
    if (!canEditSeating) return;
    const newLayout = layout.map(col => {
      if (col.id === colId) {
        const desks = col.desks.map(desk => {
          if (desk.id === deskId) {
            const seats = desk.seats.map(seat => {
              if (seat.seatIndex === seatIndex) {
                return { ...seat, studentId: null };
              }
              return seat;
            });
            return { ...desk, seats };
          }
          return desk;
        });
        return { ...col, desks };
      }
      return col;
    });
    onUpdateLayout(newLayout);
    setTapSeatTarget(null);
  };

  const handleSetGlobalCapacity = (capacity: number) => {
    if (!canEditSeating) return;
    const newLayout = layout.map(col => ({
      ...col,
      desks: col.desks.map(desk => {
        const seats = [];
        for (let i = 0; i < capacity; i++) {
          seats.push(desk.seats[i] || { seatIndex: i, studentId: null });
        }
        return { ...desk, capacity, seats };
      }),
    }));
    onUpdateLayout(newLayout);
  };

  // Filter columns to display
  const displayedColumns = selectedColumnFilter === 'all'
    ? layout
    : layout.filter(c => c.id === selectedColumnFilter);

  // Available students to assign via tap modal
  const availableInPicker = students.filter(s =>
    s.name.toLowerCase().includes(pickerSearch.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Toolbar */}
      <div className="glass-card rounded-2xl p-4 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm tên học sinh trên sơ đồ..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Status badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold rounded-xl border border-emerald-200 dark:border-emerald-800 shadow-2xs">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Đã xếp: {assignedStudentIds.size}/{students.length}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 font-bold rounded-xl border border-blue-200 dark:border-blue-800 shadow-2xs">
            Tổng số chỗ: {totalSeatsCapacity}
          </span>
          {unassignedStudents.length > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-bold rounded-xl border border-amber-200 dark:border-amber-800 shadow-2xs animate-pulse">
              <Users className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" /> Chưa xếp: {unassignedStudents.length}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={() => setIsWheelOpen(true)}
            className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 active:scale-95 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow" /> Vòng Quay May Mắn
          </button>
          {canEditSeating ? (
            <button
              onClick={() => setIsConfigOpen(true)}
              className="px-3.5 py-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold border border-slate-300 dark:border-slate-700 shadow-2xs transition-all flex items-center gap-1.5"
            >
              <Settings className="w-4 h-4 text-slate-500 dark:text-slate-400" /> Tùy Chỉnh Bàn 3 Chỗ
            </button>
          ) : (
            <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-xl flex items-center gap-1 font-semibold">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Quyền: Chỉ Xem
            </span>
          )}
        </div>
      </div>

      {/* Column Filter Pills (For Mobile & Small Laptops) */}
      <div className="flex items-center justify-between overflow-x-auto pb-1 gap-2 no-scrollbar">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden sm:inline mr-1">Xem dãy:</span>
          <button
            onClick={() => setSelectedColumnFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedColumnFilter === 'all'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
            }`}
          >
            Toàn Lớp (3 Dãy)
          </button>
          {layout.map(col => (
            <button
              key={col.id}
              onClick={() => setSelectedColumnFilter(col.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedColumnFilter === col.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {col.name.split(' ')[0]} {col.name.split(' ')[1] || ''}
            </button>
          ))}
        </div>

        <p className="text-[11px] text-slate-400 hidden md:block">
          💡 <span className="font-semibold text-slate-600">Mẹo:</span> Trên điện thoại, bạn có thể chạm trực tiếp vào ghế để đổi hoặc xếp học sinh.
        </p>
      </div>

      {/* Main Classroom Grid & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Classroom Grid */}
        <div className="lg:col-span-3 bg-slate-100/90 dark:bg-slate-900/90 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          {/* 3D Chalkboard Banner */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white text-center py-3.5 px-6 rounded-2xl shadow-lg font-black tracking-widest text-xs sm:text-sm uppercase flex items-center justify-center gap-3 border-b-4 border-slate-950">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>BẢNG ĐEN / BÀN GIÁO VIÊN</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          </div>

          {/* Seating Columns */}
          <div className={`grid gap-4 sm:gap-5 items-start ${
            displayedColumns.length === 1
              ? 'grid-cols-1 max-w-md mx-auto'
              : displayedColumns.length === 2
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {displayedColumns.map(col => (
              <div key={col.id} className="bg-white dark:bg-slate-900 rounded-2xl p-3.5 sm:p-4 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3.5">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/60 dark:to-indigo-950/60 text-blue-900 dark:text-blue-300 font-black text-xs text-center py-2 rounded-xl border border-blue-100 dark:border-blue-900/60 tracking-wide uppercase shadow-2xs">
                  {col.name}
                </div>

                <div className="space-y-3">
                  {col.desks.map(desk => (
                    <div key={desk.id} className="bg-slate-50/80 dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200/90 dark:border-slate-700 rounded-2xl p-3 space-y-2 shadow-2xs transition-all">
                      <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400 px-1">
                        <span className="text-slate-700 dark:text-slate-200">{desk.name}</span>
                        <span className="text-[10px] bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-extrabold px-2 py-0.5 rounded-full">
                          {desk.capacity} chỗ
                        </span>
                      </div>

                      {/* Desk Seats Grid */}
                      <div className={`grid gap-2 ${
                        desk.capacity === 3
                          ? 'grid-cols-3'
                          : desk.capacity === 4
                          ? 'grid-cols-4'
                          : 'grid-cols-2'
                      }`}>
                        {desk.seats.map((seat, seatIdx) => {
                          const student = seat.studentId ? studentMap.get(seat.studentId) : null;
                          const isHighlighted =
                            searchTerm.trim() !== '' &&
                            student &&
                            student.name.toLowerCase().includes(searchTerm.toLowerCase());

                          return (
                            <div
                              key={seatIdx}
                              onDragOver={handleDragOver}
                              onDrop={e => handleDropSeat(col.id, desk.id, seatIdx, e)}
                              onClick={() => {
                                if (canEditSeating) {
                                  setTapSeatTarget({
                                    colId: col.id,
                                    deskId: desk.id,
                                    seatIndex: seatIdx,
                                    currentStudentId: seat.studentId,
                                  });
                                }
                              }}
                              className={`min-h-[64px] p-2 rounded-xl border-2 transition-all flex flex-col items-center justify-center text-center relative group ${
                                canEditSeating ? 'cursor-pointer active:scale-95' : ''
                              } ${
                                student
                                  ? isHighlighted
                                    ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-500 text-amber-950 dark:text-amber-200 shadow-md ring-4 ring-amber-400/40 animate-pulse'
                                    : 'bg-white dark:bg-slate-800 border-blue-200 dark:border-blue-900/60 text-slate-800 dark:text-slate-100 shadow-xs hover:border-blue-400 hover:shadow-md'
                                  : 'bg-slate-100/70 dark:bg-slate-900/70 border-dashed border-slate-300 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/30'
                              }`}
                            >
                              {student ? (
                                <div
                                  draggable={canEditSeating}
                                  onDragStart={e => handleDragStart(e, student.id)}
                                  className="w-full h-full flex flex-col items-center justify-center select-none"
                                >
                                  <span className="text-[9px] font-black text-blue-700 dark:text-blue-300 bg-blue-100/80 dark:bg-blue-950/60 px-1.5 py-0.2 rounded-md">
                                    #{student.stt}
                                  </span>
                                  <span className="text-[11px] font-extrabold leading-tight line-clamp-2 px-0.5 mt-1">
                                    {student.name}
                                  </span>

                                  {/* Quick Remove on hover (Desktop) */}
                                  {canEditSeating && (
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleUnassignSeat(col.id, desk.id, seatIdx);
                                      }}
                                      title="Gỡ khỏi bàn"
                                      className="absolute -top-1.5 -right-1.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full w-4 h-4 text-[10px] font-black opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-md"
                                    >
                                      ×
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-0.5">
                                  + Trống
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unassigned Students Sidebar */}
        <div className="glass-card rounded-3xl p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-black text-slate-800 dark:text-white text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Chưa Xếp Chỗ ({unassignedStudents.length})
            </h3>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 leading-snug">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            {canEditSeating ? 'Kéo thả tên vào ghế hoặc chạm vào ô ghế trống để chọn nhanh.' : 'Danh sách các bạn học sinh chưa được xếp chỗ.'}
          </p>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {unassignedStudents.length === 0 ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5 text-center text-emerald-800 dark:text-emerald-300 text-xs font-bold space-y-1">
                <p className="text-xl">🎉</p>
                <p>Tất cả 38 học sinh 11A7 đã được xếp chỗ ngồi đầy đủ!</p>
              </div>
            ) : (
              unassignedStudents.map(st => (
                <div
                  key={st.id}
                  draggable={canEditSeating}
                  onDragStart={e => handleDragStart(e, st.id)}
                  className={`bg-slate-50 dark:bg-slate-800/80 border border-slate-200/90 dark:border-slate-700 rounded-2xl p-3 transition-all flex items-center justify-between shadow-2xs ${
                    canEditSeating ? 'hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:border-blue-300 dark:hover:border-blue-700 cursor-grab active:cursor-grabbing' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="w-6 h-6 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-black text-[10px] flex items-center justify-center">
                      {st.stt}
                    </span>
                    <span className="text-xs font-black text-slate-800 dark:text-white">
                      {st.name}
                    </span>
                  </div>
                  {canEditSeating && <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold">Kéo →</span>}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Touch Tap Seat Modal (Assign or Swap Student on Mobile/Touch) */}
      {tapSeatTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-200 animate-scale-in">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-4">
              <div>
                <h3 className="font-black text-slate-800 dark:text-white text-base">Xếp Chỗ Ngồi Học Sinh</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {tapSeatTarget.currentStudentId
                    ? `Ghế hiện tại: ${studentMap.get(tapSeatTarget.currentStudentId)?.name}`
                    : 'Ghế đang trống. Chọn học sinh để xếp:'}
                </p>
              </div>
              <button
                onClick={() => setTapSeatTarget(null)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions if seat occupied */}
            {tapSeatTarget.currentStudentId && (
              <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Học sinh đang ngồi: {studentMap.get(tapSeatTarget.currentStudentId)?.name}</span>
                <button
                  onClick={() => handleUnassignSeat(tapSeatTarget.colId, tapSeatTarget.deskId, tapSeatTarget.seatIndex)}
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  Gỡ Ra
                </button>
              </div>
            )}

            {/* Search Student in picker */}
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên học sinh muốn xếp vào đây..."
                value={pickerSearch}
                onChange={e => setPickerSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none"
              />
            </div>

            {/* Student List to select */}
            <div className="space-y-1.5 max-h-[260px] overflow-y-auto pr-1">
              {availableInPicker.map(st => {
                const isCurrent = st.id === tapSeatTarget.currentStudentId;
                const isAssignedElse = assignedStudentIds.has(st.id) && !isCurrent;

                return (
                  <button
                    key={st.id}
                    onClick={() => {
                      assignStudentToSeat(tapSeatTarget.colId, tapSeatTarget.deskId, tapSeatTarget.seatIndex, st.id);
                      setTapSeatTarget(null);
                    }}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                      isCurrent
                        ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-300 dark:border-blue-800 text-blue-900 dark:text-blue-300 font-bold'
                        : 'bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-md bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-bold text-[10px] flex items-center justify-center">
                        {st.stt}
                      </span>
                      <span className="text-xs font-bold">{st.name}</span>
                    </div>

                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                      {isCurrent ? 'Đang ngồi đây' : isAssignedElse ? 'Đổi sang đây' : '+ Xếp vào'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      {canEditSeating && (
        <DeskConfigModal
          isOpen={isConfigOpen}
          onClose={() => setIsConfigOpen(false)}
          layout={layout}
          onUpdateLayout={onUpdateLayout}
          onSetGlobalCapacity={handleSetGlobalCapacity}
        />
      )}

      <LuckyWheelModal
        isOpen={isWheelOpen}
        onClose={() => setIsWheelOpen(false)}
        students={students}
        layout={layout}
        onUpdateLayout={onUpdateLayout}
      />
    </div>
  );
};
