'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Student, ColumnRow } from '../../data/types';
import { Sparkles, X, Dices, Shuffle, CheckCircle2, RotateCw, Play, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LuckyWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
  students: Student[];
  layout: ColumnRow[];
  onUpdateLayout: (newLayout: ColumnRow[]) => void;
}

const CANVAS_COLORS = [
  '#f39c12', '#e67e22', '#e74c3c', '#3498db',
  '#2ecc71', '#9b59b6', '#1abc9c', '#34495e',
];

export const LuckyWheelModal: React.FC<LuckyWheelModalProps> = ({
  isOpen,
  onClose,
  students,
  layout,
  onUpdateLayout,
}) => {
  const [activeTab, setActiveTab] = useState<'single' | 'seating'>('seating');

  // Single Spin State
  const [isSingleSpinning, setIsSingleSpinning] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  // Wheel Canvas State & Animation
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [wheelNames, setWheelNames] = useState<string[]>([]);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isWheelSpinning, setIsWheelSpinning] = useState(false);
  const [resultText, setResultText] = useState('Ấn "QUAY NGAY" để bắt đầu xếp chỗ ngẫu nhiên');
  const [scanningSeatId, setScanningSeatId] = useState<string | null>(null);
  const [justAddedSeatId, setJustAddedSeatId] = useState<string | null>(null);

  // Synchronize initial student names for wheel
  useEffect(() => {
    if (students.length > 0) {
      setWheelNames(students.map(s => s.name));
    }
  }, [students]);

  // Draw Canvas Wheel
  const drawWheel = (angle: number, names: string[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const radius = canvas.width / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const numSegments = names.length;
    if (numSegments === 0) {
      ctx.fillStyle = '#64748b';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Đã xếp xong tất cả!', radius, radius);
      return;
    }

    const arcSize = (2 * Math.PI) / numSegments;

    for (let i = 0; i < numSegments; i++) {
      const segAngle = angle + i * arcSize;
      ctx.beginPath();
      ctx.fillStyle = CANVAS_COLORS[i % CANVAS_COLORS.length];
      ctx.moveTo(radius, radius);
      ctx.arc(radius, radius, radius, segAngle, segAngle + arcSize);
      ctx.lineTo(radius, radius);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.save();
      ctx.translate(radius, radius);
      ctx.rotate(segAngle + arcSize / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = numSegments > 25 ? 'bold 8px sans-serif' : 'bold 11px sans-serif';
      const displayName = names[i].length > 15 ? names[i].substring(0, 14) + '…' : names[i];
      ctx.fillText(displayName, radius - 12, 4);
      ctx.restore();
    }
  };

  useEffect(() => {
    if (isOpen && activeTab === 'seating') {
      drawWheel(currentAngle, wheelNames);
    }
  }, [isOpen, activeTab, currentAngle, wheelNames]);

  if (!isOpen) return null;

  // Single Callout Spin
  const handleSingleSpin = () => {
    if (students.length === 0 || isSingleSpinning) return;
    setIsSingleSpinning(true);
    setSelectedStudent(null);

    let counter = 0;
    const maxTicks = 30;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * students.length);
      setSelectedStudent(students[randomIndex]);
      counter++;

      if (counter >= maxTicks) {
        clearInterval(interval);
        setIsSingleSpinning(false);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    }, 100);
  };

  // Get all seat targets from current layout
  const getAllSeats = () => {
    const seatsList: Array<{ colId: string; deskId: string; seatIndex: number; idStr: string }> = [];
    layout.forEach(col => {
      col.desks.forEach(desk => {
        desk.seats.forEach((seat, idx) => {
          seatsList.push({
            colId: col.id,
            deskId: desk.id,
            seatIndex: idx,
            idStr: `${col.id}-${desk.id}-${idx}`,
          });
        });
      });
    });
    return seatsList;
  };

  // Instant Shuffle All Students in Layout
  const handleShuffleAllSeating = () => {
    if (students.length === 0) return;

    const allSeats = getAllSeats();
    const shuffledStudents = [...students].sort(() => Math.random() - 0.5);

    const newLayout: ColumnRow[] = layout.map(col => ({
      ...col,
      desks: col.desks.map(desk => ({
        ...desk,
        seats: desk.seats.map(seat => ({ ...seat, studentId: null })),
      })),
    }));

    // Distribute shuffled students into seats
    shuffledStudents.forEach((st, idx) => {
      if (idx < allSeats.length) {
        const target = allSeats[idx];
        const col = newLayout.find(c => c.id === target.colId);
        if (col) {
          const desk = col.desks.find(d => d.id === target.deskId);
          if (desk && desk.seats[target.seatIndex]) {
            desk.seats[target.seatIndex].studentId = st.id;
          }
        }
      }
    });

    onUpdateLayout(newLayout);
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
    setResultText('🎉 Đã xới ngẫu nhiên toàn bộ chỗ ngồi của lớp thành công!');
  };

  // Spin Wheel 1 Student & Assign to Available Seat with Scanning Animation
  const handleSpinAndAssignNext = () => {
    if (isWheelSpinning || wheelNames.length === 0) return;

    const allSeats = getAllSeats();
    // Empty seats
    const emptySeats = allSeats.filter(target => {
      const col = layout.find(c => c.id === target.colId);
      const desk = col?.desks.find(d => d.id === target.deskId);
      return desk ? !desk.seats[target.seatIndex]?.studentId : false;
    });

    if (emptySeats.length === 0) {
      setResultText('⚠️ Đã lấp đầy toàn bộ chỗ ngồi trên sơ đồ!');
      return;
    }

    setIsWheelSpinning(true);
    setResultText('🌀 Đang quay vòng may mắn chọn học sinh...');

    const spinAngle = Math.PI * 2 * 5 + Math.random() * Math.PI * 2;
    const duration = 2500;
    const start = performance.now();
    const startAngle = currentAngle;

    const animateWheel = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const nextAngle = startAngle + easeOut * spinAngle;

      setCurrentAngle(nextAngle);
      drawWheel(nextAngle, wheelNames);

      if (progress < 1) {
        requestAnimationFrame(animateWheel);
      } else {
        const numSegments = wheelNames.length;
        const arcSize = (2 * Math.PI) / numSegments;
        const pointerAngle = (3 * Math.PI / 2) % (2 * Math.PI);
        const winningIndex = Math.floor(
          ((pointerAngle - (nextAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) / arcSize
        );

        const winnerName = wheelNames[winningIndex] || wheelNames[0];
        const winnerObj = students.find(s => s.name === winnerName);

        setResultText(`⚡ Đã chọn: ${winnerName}! Đang dò tìm vị trí bàn...`);

        // Scanning Animation
        let step = 0;
        const totalSteps = 12;
        const interval = setInterval(() => {
          const randomSeat = emptySeats[Math.floor(Math.random() * emptySeats.length)];
          setScanningSeatId(randomSeat.idStr);
          step++;

          if (step >= totalSteps) {
            clearInterval(interval);
            setScanningSeatId(null);

            // Assign winner to random empty seat
            const chosenTarget = emptySeats[Math.floor(Math.random() * emptySeats.length)];

            if (winnerObj) {
              const newLayout: ColumnRow[] = layout.map(col => ({
                ...col,
                desks: col.desks.map(desk => ({
                  ...desk,
                  seats: desk.seats.map(seat => {
                    if (
                      col.id === chosenTarget.colId &&
                      desk.id === chosenTarget.deskId &&
                      seat.seatIndex === chosenTarget.seatIndex
                    ) {
                      return { ...seat, studentId: winnerObj.id };
                    }
                    return seat;
                  }),
                })),
              }));

              onUpdateLayout(newLayout);
            }

            // Remove winner from wheel
            const updatedWheelNames = wheelNames.filter((_, idx) => idx !== winningIndex);
            setWheelNames(updatedWheelNames);
            setJustAddedSeatId(chosenTarget.idStr);
            setTimeout(() => setJustAddedSeatId(null), 1200);

            setIsWheelSpinning(false);
            setResultText(`🎉 ${winnerName} đã được xếp vào sơ đồ lớp!`);
            confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
          }
        }, 80);
      }
    };

    requestAnimationFrame(animateWheel);
  };

  // Reset Wheel Names to all students
  const handleResetWheel = () => {
    setWheelNames(students.map(s => s.name));
    setResultText('Đã khôi phục danh sách học sinh trên vòng quay.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full p-5 sm:p-7 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-5 max-h-[92vh] overflow-y-auto animate-scale-in">
        
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 gap-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-800 dark:text-white">Vòng Quay May Mắn & Đổi Chỗ Sơ Đồ</h3>
              <p className="text-xs text-slate-400">Tự động xếp chỗ & đồng bộ trực tiếp vào sơ đồ chính của lớp 11A7</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Mode Switch Tabs */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setActiveTab('seating')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  activeTab === 'seating'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-purple-600'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" /> Đổi Chỗ Sơ Đồ
              </button>
              <button
                onClick={() => setActiveTab('single')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  activeTab === 'single'
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-purple-600'
                }`}
              >
                <Dices className="w-3.5 h-3.5" /> Callout 1 Học Sinh
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ----------------- TAB 1: RANDOM SEATING GENERATOR & SYNC ----------------- */}
        {activeTab === 'seating' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Wheel Canvas & Spin Controls */}
            <div className="lg:col-span-5 glass-card rounded-3xl p-5 border border-slate-200/90 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-4">
              <div className="relative flex justify-center w-full">
                {/* Wheel Pointer */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[22px] border-t-rose-600 drop-shadow-md"></div>
                <canvas
                  ref={canvasRef}
                  width={300}
                  height={300}
                  className="rounded-full shadow-lg border-4 border-white dark:border-slate-800 max-w-full"
                />
              </div>

              {/* Action Buttons */}
              <div className="w-full space-y-2.5">
                <button
                  onClick={handleSpinAndAssignNext}
                  disabled={isWheelSpinning || wheelNames.length === 0}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 text-white rounded-2xl text-xs font-black shadow-md shadow-purple-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{isWheelSpinning ? 'Đang quay...' : 'QUAY NGAY & XẾP CHỖ (1 HS)'}</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleShuffleAllSeating}
                    disabled={isWheelSpinning}
                    className="py-2.5 bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Shuffle className="w-3.5 h-3.5" /> Xới Đội Hình Cả Lớp
                  </button>

                  <button
                    onClick={handleResetWheel}
                    disabled={isWheelSpinning}
                    className="py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Re-fill Vòng Quay
                  </button>
                </div>
              </div>

              {/* Output status box */}
              <div className="w-full p-3 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 min-h-[48px] flex items-center justify-center text-center">
                {resultText}
              </div>

              <div className="text-[11px] font-semibold text-slate-400">
                Vòng quay: còn {wheelNames.length}/{students.length} học sinh chưa xếp
              </div>
            </div>

            {/* Right Column: Live Classroom Preview Grid (Synced) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/90 p-3 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-wider">
                    Sơ đồ xem trước (Đồng bộ thời gian thực)
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Đã lưu vào máy
                </span>
              </div>

              {/* Classroom Layout View */}
              <div className="glass-card rounded-3xl p-4 border border-slate-200 dark:border-slate-800 max-h-[420px] overflow-y-auto space-y-4">
                <div className="bg-slate-800 text-white text-center py-2 rounded-xl text-xs font-black uppercase tracking-widest">
                  BẢNG ĐEN / BÀN GIÁO VIÊN
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {layout.map((col, cIdx) => (
                    <div key={col.id} className="space-y-2">
                      <div className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-black text-center py-1 rounded-lg">
                        DÃY {cIdx + 1}
                      </div>

                      <div className="space-y-2">
                        {col.desks.map((desk, dIdx) => (
                          <div
                            key={desk.id}
                            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2 relative space-y-1.5"
                          >
                            <span className="text-[9px] font-extrabold text-slate-400 absolute top-1 left-2">
                              Bàn {dIdx + 1}
                            </span>
                            <div className="grid grid-cols-2 gap-1 pt-3">
                              {desk.seats.map((seat, sIdx) => {
                                const idStr = `${col.id}-${desk.id}-${sIdx}`;
                                const isScanning = scanningSeatId === idStr;
                                const isJustAdded = justAddedSeatId === idStr;
                                const student = students.find(s => s.id === seat.studentId);

                                return (
                                  <div
                                    key={sIdx}
                                    className={`min-h-[32px] p-1 rounded-lg text-center text-[10px] font-bold flex items-center justify-center transition-all ${
                                      isScanning
                                        ? 'bg-amber-300 dark:bg-amber-600 text-amber-950 font-black border-2 border-amber-500 scale-105 shadow-md animate-bounce'
                                        : isJustAdded
                                        ? 'bg-emerald-300 dark:bg-emerald-700 text-emerald-950 font-black border-2 border-emerald-500 scale-105'
                                        : student
                                        ? 'bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300'
                                        : 'bg-slate-100 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 text-slate-400'
                                    }`}
                                  >
                                    {student ? student.name.split(' ').pop() : '---'}
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
            </div>
          </div>
        )}

        {/* ----------------- TAB 2: CALLOUT SINGLE STUDENT ----------------- */}
        {activeTab === 'single' && (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 p-1 shadow-xl shadow-indigo-500/20 flex items-center justify-center animate-pulse">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[22px] flex flex-col items-center justify-center p-3">
                {selectedStudent ? (
                  <>
                    <span className="text-xs font-black text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/40 px-2 py-0.5 rounded-md">
                      #{selectedStudent.stt}
                    </span>
                    <p className="text-sm font-black text-slate-800 dark:text-white mt-1 leading-tight line-clamp-2">
                      {selectedStudent.name}
                    </p>
                  </>
                ) : (
                  <Dices className="w-12 h-12 text-indigo-500 animate-bounce" />
                )}
              </div>
            </div>

            <div>
              <h4 className="font-black text-slate-800 dark:text-white text-lg">
                {isSingleSpinning
                  ? 'Đang quay chọn...'
                  : selectedStudent
                  ? `Chúc mừng bạn: ${selectedStudent.name}`
                  : 'Sẵn sàng chọn ngẫu nhiên học sinh!'}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Quay ngẫu nhiên 1 bạn kiểm tra bài cũ, trả lời câu hỏi hoặc giao nhiệm vụ
              </p>
            </div>

            <button
              onClick={handleSingleSpin}
              disabled={isSingleSpinning}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl text-xs font-black shadow-md shadow-purple-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isSingleSpinning ? 'Đang quay...' : 'Bắt Đầu Quay Ngay'}</span>
            </button>
          </div>
        )}

        {/* Footer Actions */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-all"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
