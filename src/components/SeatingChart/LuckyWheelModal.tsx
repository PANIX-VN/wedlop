'use client';

import React, { useState } from 'react';
import { Student } from '../../data/types';
import { Sparkles, X, Dices, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface LuckyWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
  students: Student[];
}

export const LuckyWheelModal: React.FC<LuckyWheelModalProps> = ({
  isOpen,
  onClose,
  students,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  if (!isOpen) return null;

  const handleSpin = () => {
    if (students.length === 0 || isSpinning) return;
    setIsSpinning(true);
    setSelectedStudent(null);

    let counter = 0;
    const maxTicks = 30;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * students.length);
      setSelectedStudent(students[randomIndex]);
      counter++;

      if (counter >= maxTicks) {
        clearInterval(interval);
        setIsSpinning(false);
        // Trigger confetti
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
          <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <h3 className="text-base font-black text-slate-800 dark:text-white">Vòng Quay Ngẫu Nhiên 11A7</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lucky Box Presentation */}
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
              {isSpinning
                ? 'Đang quay chọn...'
                : selectedStudent
                ? `Chúc mừng bạn: ${selectedStudent.name}`
                : 'Sẵn sàng chọn học sinh!'}
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Quay số ngẫu nhiên gọi trả lời bài, làm cán sự hoặc thử thách
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold transition-all"
          >
            Đóng
          </button>
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="flex-1 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black shadow-md shadow-purple-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSpinning ? 'Đang quay...' : 'Bắt Đầu Quay Ngay'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
