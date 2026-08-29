'use client';

import React, { useState } from 'react';
import { Student, ColumnRow } from '../../data/types';
import { DeskConfigModal } from './DeskConfigModal';
import { LuckyWheelModal } from './LuckyWheelModal';
import { Search, Sparkles, Settings, UserCheck, Users, HelpCircle, ShieldAlert } from 'lucide-react';

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

  const handleDropSeat = (colId: string, deskId: string, seatIndex: number, e: React.DragEvent) => {
    if (!canEditSeating) return;
    e.preventDefault();
    const studentId = e.dataTransfer.getData('text/plain');
    if (!studentId) return;

    // Create deep copy of layout
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

  return (
    <div className="space-y-6">
      {/* Top Toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm tên học sinh trên sơ đồ..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-3 text-xs">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 font-semibold rounded-lg border border-emerald-200">
            <UserCheck className="w-3.5 h-3.5" /> Đã xếp: {assignedStudentIds.size}/{students.length}
          </span>
          {unassignedStudents.length > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 font-semibold rounded-lg border border-amber-200">
              <Users className="w-3.5 h-3.5" /> Chưa xếp: {unassignedStudents.length}
            </span>
          )}
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={() => setIsWheelOpen(true)}
            className="px-3.5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" /> Vòng Quay May Mắn
          </button>
          {canEditSeating ? (
            <button
              onClick={() => setIsConfigOpen(true)}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold border border-slate-200 transition-all flex items-center gap-1.5"
            >
              <Settings className="w-4 h-4 text-slate-500" /> Tùy Chỉnh Bàn 3 Chỗ
            </button>
          ) : (
            <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Quyền: Chỉ Xem Sơ Đồ
            </span>
          )}
        </div>
      </div>

      {/* Main Grid & Unassigned Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Classroom Grid */}
        <div className="lg:col-span-3 bg-slate-100/70 p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-6">
          {/* Chalkboard Banner */}
          <div className="bg-slate-800 text-white text-center py-3 px-6 rounded-xl shadow-md font-bold tracking-widest text-sm uppercase flex items-center justify-center gap-3 border-b-4 border-slate-900">
            <span>BẢNG ĐEN / BÀN GIÁO VIÊN</span>
          </div>

          {/* Seating Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {layout.map(col => (
              <div key={col.id} className="bg-white/80 backdrop-blur-xs rounded-xl p-3.5 border border-slate-200 shadow-2xs space-y-3">
                <div className="bg-slate-200/70 text-slate-700 font-extrabold text-xs text-center py-1.5 rounded-lg tracking-wide uppercase">
                  {col.name}
                </div>

                <div className="space-y-3">
                  {col.desks.map(desk => (
                    <div key={desk.id} className="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5 shadow-2xs">
                      <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 px-1">
                        <span>{desk.name}</span>
                        <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-mono">
                          {desk.capacity} chỗ
                        </span>
                      </div>

                      {/* Desk Seats */}
                      <div className={`grid gap-1.5 ${desk.capacity === 3 ? 'grid-cols-3' : desk.capacity === 4 ? 'grid-cols-4' : 'grid-cols-2'}`}>
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
                              className={`min-h-[56px] p-1.5 rounded-lg border-2 border-dashed transition-all flex flex-col items-center justify-center text-center relative group ${
                                student
                                  ? isHighlighted
                                    ? 'bg-amber-100 border-amber-500 text-amber-900 shadow-md ring-2 ring-amber-400'
                                    : 'bg-white border-blue-200 text-slate-800 shadow-2xs'
                                  : 'bg-slate-100/50 border-slate-300 text-slate-400'
                              }`}
                            >
                              {student ? (
                                <div
                                  draggable={canEditSeating}
                                  onDragStart={e => handleDragStart(e, student.id)}
                                  className={`w-full h-full flex flex-col items-center justify-center ${canEditSeating ? 'cursor-grab active:cursor-grabbing' : ''}`}
                                >
                                  <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1 rounded">
                                    #{student.stt}
                                  </span>
                                  <span className="text-[11px] font-bold leading-tight line-clamp-2 px-0.5 mt-0.5">
                                    {student.name}
                                  </span>

                                  {/* Quick Remove Button on Hover if canEditSeating */}
                                  {canEditSeating && (
                                    <button
                                      onClick={() => handleUnassignSeat(col.id, desk.id, seatIdx)}
                                      title="Gỡ khỏi bàn"
                                      className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center shadow-sm"
                                    >
                                      ×
                                    </button>
                                  )}
                                </div>
                              ) : (
                                <span className="text-[10px] text-slate-400 font-medium">Chỗ trống</span>
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
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-800 text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-600" /> Danh Sách Chờ Xếp Chỗ ({unassignedStudents.length})
            </h3>
          </div>

          <p className="text-[11px] text-slate-500 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            {canEditSeating ? 'Kéo thả tên học sinh vào vị trí ghế trống trên sơ đồ.' : 'Xem danh sách các học sinh chưa phân chỗ.'}
          </p>

          <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1">
            {unassignedStudents.length === 0 ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center text-emerald-800 text-xs font-semibold">
                🎉 Tất cả học sinh 11A7 đã được xếp chỗ ngồi!
              </div>
            ) : (
              unassignedStudents.map(st => (
                <div
                  key={st.id}
                  draggable={canEditSeating}
                  onDragStart={e => handleDragStart(e, st.id)}
                  className={`bg-slate-50 border border-slate-200 rounded-xl p-2.5 transition-all flex items-center justify-between shadow-2xs ${
                    canEditSeating ? 'hover:bg-blue-50 hover:border-blue-300 cursor-grab active:cursor-grabbing' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-5 h-5 rounded-md bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center">
                      {st.stt}
                    </span>
                    <span className="text-xs font-bold text-slate-700">
                      {st.name}
                    </span>
                  </div>
                  {canEditSeating && <span className="text-[10px] text-slate-400 font-medium">Kéo thả →</span>}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

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
      />
    </div>
  );
};
