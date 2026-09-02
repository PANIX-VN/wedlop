'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Student, ColumnRow } from '../../data/types';
import {
  Sparkles, X, Dices, Shuffle, CheckCircle2, RotateCw,
  Play, RefreshCw, History, Trash2, RotateCcw, Zap, Clock,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LuckyWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
  students: Student[];
  layout: ColumnRow[];
  onUpdateLayout: (newLayout: ColumnRow[]) => void;
  canEditSeating: boolean;
}

interface SeatingSnapshot {
  id: string;
  label: string;
  timestamp: number;
  layout: ColumnRow[];
}

const CANVAS_COLORS = [
  '#f39c12', '#e67e22', '#e74c3c', '#3498db',
  '#2ecc71', '#9b59b6', '#1abc9c', '#34495e',
];

const HISTORY_STORAGE_KEY = 'seating_history_11a7';
const MAX_HISTORY = 10;

// ─────────────────────────────────────────────
// Helper: deep-clone layout (strip non-serializable refs)
// ─────────────────────────────────────────────
function cloneLayout(layout: ColumnRow[]): ColumnRow[] {
  return layout.map(col => ({
    ...col,
    desks: col.desks.map(desk => ({
      ...desk,
      seats: desk.seats.map(seat => ({ ...seat })),
    })),
  }));
}

// ─────────────────────────────────────────────
// Helper: Smart random seating algorithm
//   - 3 bàn đầu tiên (front desks) ưu tiên 3 người/bàn
//   - Phần còn lại fill bình thường
// ─────────────────────────────────────────────
function buildSmartLayout(layout: ColumnRow[], students: Student[]): ColumnRow[] {
  // Collect all seats in order: column 0→n, desk 0→n (front first)
  const allSeats: Array<{ colId: string; deskId: string; seatIndex: number }> = [];

  // First pass: 3 front desks (first desk of each of the first 3 columns, OR just first 3 desks flat)
  // Strategy: first desk of every column row (sorted by column index), up to 3
  const frontDesks: Array<{ colId: string; deskId: string; capacity: number }> = [];
  let frontCount = 0;
  for (const col of layout) {
    if (frontCount >= 3) break;
    if (col.desks.length > 0) {
      frontDesks.push({ colId: col.id, deskId: col.desks[0].id, capacity: 3 });
      frontCount++;
    }
  }

  // Build seat list: front desks first (3 seats each), then rest
  const newLayout = cloneLayout(layout);

  // Ensure front desks have 3 seats
  for (const fd of frontDesks) {
    const col = newLayout.find(c => c.id === fd.colId);
    if (!col) continue;
    const desk = col.desks.find(d => d.id === fd.deskId);
    if (!desk) continue;
    // Ensure exactly 3 seats
    while (desk.seats.length < 3) {
      desk.seats.push({ seatIndex: desk.seats.length, studentId: null });
    }
    desk.capacity = 3;
  }

  // Collect all seats order: front desks first, then rest
  const frontSet = new Set(frontDesks.map(fd => `${fd.colId}-${fd.deskId}`));
  // Front seats
  for (const col of newLayout) {
    for (const desk of col.desks) {
      const key = `${col.id}-${desk.id}`;
      if (frontSet.has(key)) {
        for (let i = 0; i < desk.seats.length; i++) {
          allSeats.push({ colId: col.id, deskId: desk.id, seatIndex: i });
        }
      }
    }
  }
  // Remaining seats
  for (const col of newLayout) {
    for (const desk of col.desks) {
      const key = `${col.id}-${desk.id}`;
      if (!frontSet.has(key)) {
        for (let i = 0; i < desk.seats.length; i++) {
          allSeats.push({ colId: col.id, deskId: desk.id, seatIndex: i });
        }
      }
    }
  }

  // Clear all seats
  for (const col of newLayout) {
    for (const desk of col.desks) {
      for (const seat of desk.seats) {
        seat.studentId = null;
      }
    }
  }

  // Shuffle students
  const shuffled = [...students].sort(() => Math.random() - 0.5);

  // Assign students to seats
  shuffled.forEach((student, idx) => {
    if (idx >= allSeats.length) return;
    const target = allSeats[idx];
    const col = newLayout.find(c => c.id === target.colId);
    if (!col) return;
    const desk = col.desks.find(d => d.id === target.deskId);
    if (!desk || !desk.seats[target.seatIndex]) return;
    desk.seats[target.seatIndex].studentId = student.id;
  });

  return newLayout;
}

// ─────────────────────────────────────────────
// Format time for snapshot label
// ─────────────────────────────────────────────
function formatTimestamp(ts: number): string {
  const d = new Date(ts);
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(d.getHours())}:${pad(d.getMinutes())} ${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export const LuckyWheelModal: React.FC<LuckyWheelModalProps> = ({
  isOpen,
  onClose,
  students,
  layout,
  onUpdateLayout,
  canEditSeating,
}) => {
  const [activeTab, setActiveTab] = useState<'single' | 'seating'>(canEditSeating ? 'seating' : 'single');

  useEffect(() => {
    if (isOpen) {
      setActiveTab(canEditSeating ? 'seating' : 'single');
    }
  }, [isOpen, canEditSeating]);

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

  // History state
  const [seatingHistory, setSeatingHistory] = useState<SeatingSnapshot[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [restoredId, setRestoredId] = useState<string | null>(null);

  // Load history from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
        if (raw) setSeatingHistory(JSON.parse(raw));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Save history to localStorage
  const saveHistory = useCallback((snapshots: SeatingSnapshot[]) => {
    setSeatingHistory(snapshots);
    try {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(snapshots));
    } catch { /* ignore quota errors */ }
  }, []);

  // Push a new snapshot BEFORE overwriting
  const pushSnapshot = useCallback((label: string, currentLayout: ColumnRow[]) => {
    const snapshot: SeatingSnapshot = {
      id: `snap-${Date.now()}`,
      label,
      timestamp: Date.now(),
      layout: cloneLayout(currentLayout),
    };
    setSeatingHistory(prev => {
      const next = [snapshot, ...prev].slice(0, MAX_HISTORY);
      try { localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

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

  // ── SMART RANDOM SEATING ─────────────────────────────────────────
  const handleSmartRandomSeating = () => {
    if (students.length === 0) return;

    // Save current layout to history first
    pushSnapshot(`Sơ đồ cũ — ${formatTimestamp(Date.now())}`, layout);

    const newLayout = buildSmartLayout(layout, students);
    onUpdateLayout(newLayout);

    confetti({ particleCount: 200, spread: 100, origin: { y: 0.4 } });
    setResultText('🎲 Đã sắp xếp ngẫu nhiên thông minh! 3 bàn đầu có 3 người/bàn.');
  };

  // ── OLD INSTANT SHUFFLE (keep for compat) ────────────────────────
  const handleShuffleAllSeating = () => {
    if (students.length === 0) return;

    pushSnapshot(`Sơ đồ cũ — ${formatTimestamp(Date.now())}`, layout);

    const allSeats = getAllSeats();
    const shuffledStudents = [...students].sort(() => Math.random() - 0.5);

    const newLayout: ColumnRow[] = layout.map(col => ({
      ...col,
      desks: col.desks.map(desk => ({
        ...desk,
        seats: desk.seats.map(seat => ({ ...seat, studentId: null })),
      })),
    }));

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

  // ── RESTORE FROM HISTORY ─────────────────────────────────────────
  const handleRestoreHistory = (snapshot: SeatingSnapshot) => {
    pushSnapshot(`Sơ đồ trước khi khôi phục — ${formatTimestamp(Date.now())}`, layout);
    onUpdateLayout(cloneLayout(snapshot.layout));
    setRestoredId(snapshot.id);
    setTimeout(() => setRestoredId(null), 2000);
    setResultText(`⏪ Đã khôi phục sơ đồ từ lúc ${formatTimestamp(snapshot.timestamp)}`);
    confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
  };

  // ── DELETE HISTORY ENTRY ─────────────────────────────────────────
  const handleDeleteSnapshot = (id: string) => {
    const next = seatingHistory.filter(s => s.id !== id);
    saveHistory(next);
  };

  // ── CLEAR ALL HISTORY ────────────────────────────────────────────
  const handleClearAllHistory = () => {
    saveHistory([]);
  };

  // Spin Wheel 1 Student & Assign to Available Seat with Scanning Animation
  const handleSpinAndAssignNext = () => {
    if (isWheelSpinning || wheelNames.length === 0) return;

    const allSeats = getAllSeats();
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

        let step = 0;
        const totalSteps = 12;
        const interval = setInterval(() => {
          const randomSeat = emptySeats[Math.floor(Math.random() * emptySeats.length)];
          setScanningSeatId(randomSeat.idStr);
          step++;

          if (step >= totalSteps) {
            clearInterval(interval);
            setScanningSeatId(null);

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
              {canEditSeating && (
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
              )}
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
          <div className="space-y-4">
            {/* Smart Random Button — top-level prominent CTA */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-[1.5px] shadow-lg shadow-emerald-500/20">
              <button
                onClick={handleSmartRandomSeating}
                disabled={isWheelSpinning}
                className="w-full flex items-center justify-between gap-3 px-5 py-4 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950/60 dark:to-cyan-950/60 rounded-2xl hover:from-emerald-100 hover:to-cyan-100 dark:hover:from-emerald-900/70 dark:hover:to-cyan-900/70 transition-all disabled:opacity-50 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-black text-emerald-900 dark:text-emerald-100">Sắp Xếp Ngẫu Nhiên Thông Minh</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400">3 bàn đầu ưu tiên 3 người · Lưu lịch sử tự động · Có thể khôi phục</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {seatingHistory.length > 0 && (
                    <span className="text-[10px] font-bold bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded-full">
                      {seatingHistory.length} lịch sử
                    </span>
                  )}
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Shuffle className="w-4 h-4" />
                  </div>
                </div>
              </button>
            </div>

            {/* History Panel */}
            {seatingHistory.length > 0 && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <button
                  onClick={() => setShowHistory(prev => !prev)}
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-black text-slate-700 dark:text-slate-200">
                    <History className="w-4 h-4 text-purple-500" />
                    Lịch Sử Sắp Xếp ({seatingHistory.length}/{MAX_HISTORY})
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={e => { e.stopPropagation(); handleClearAllHistory(); }}
                      className="text-[10px] font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1 px-2 py-0.5 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                    >
                      <Trash2 className="w-3 h-3" /> Xóa tất cả
                    </button>
                    <RotateCw className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${showHistory ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {showHistory && (
                  <div className="divide-y divide-slate-100 dark:divide-slate-800 max-h-[220px] overflow-y-auto">
                    {seatingHistory.map(snap => (
                      <div
                        key={snap.id}
                        className={`flex items-center justify-between px-4 py-2.5 transition-colors ${
                          restoredId === snap.id
                            ? 'bg-emerald-50 dark:bg-emerald-950/40'
                            : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold line-clamp-1">{snap.label}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 ml-2">
                          <button
                            onClick={() => handleRestoreHistory(snap)}
                            className="flex items-center gap-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-2 py-1 rounded-lg transition-colors"
                          >
                            <RotateCcw className="w-3 h-3" /> Khôi phục
                          </button>
                          <button
                            onClick={() => handleDeleteSnapshot(snap.id)}
                            className="p-1 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Wheel & Grid */}
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
                      <Shuffle className="w-3.5 h-3.5" /> Xới Đội Hình
                    </button>

                    <button
                      onClick={handleResetWheel}
                      disabled={isWheelSpinning}
                      className="py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Re-fill Vòng
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
                              className={`bg-white dark:bg-slate-900 border rounded-xl p-2 relative space-y-1.5 ${
                                dIdx === 0
                                  ? 'border-emerald-300 dark:border-emerald-700 ring-1 ring-emerald-200 dark:ring-emerald-800'
                                  : 'border-slate-200 dark:border-slate-800'
                              }`}
                            >
                              <span className={`text-[9px] font-extrabold absolute top-1 left-2 ${
                                dIdx === 0 ? 'text-emerald-500' : 'text-slate-400'
                              }`}>
                                Bàn {dIdx + 1}{dIdx === 0 ? ' ⭐' : ''}
                              </span>
                              <div className={`grid gap-1 pt-3 ${desk.seats.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
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
