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
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div className="flex items-center space-x-2 text-indigo-600">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <h3 className="text-lg font-bold text-slate-800">Vòng Quay Ngẫu Nhiên Lớp 11A7</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Display Area */}
        <div className="my-6 text-center">
          <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-xl flex items-center justify-center mb-4">
            <div className="w-full h-full bg-white rounded-full flex flex-col items-center justify-center p-3 text-center">
              {selectedStudent ? (
                <>
                  <Award className="w-8 h-8 text-amber-500 mb-1 animate-bounce" />
                  <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">STT: {selectedStudent.stt}</p>
                  <p className="text-sm font-extrabold text-slate-800 line-clamp-2 leading-tight">
                    {selectedStudent.name}
                  </p>
                </>
              ) : (
                <>
                  <Dices className="w-10 h-10 text-indigo-400 mb-1" />
                  <p className="text-xs text-slate-400">Bấm quay để chọn học sinh</p>
                </>
              )}
            </div>
          </div>

          {selectedStudent && !isSpinning && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-amber-800 text-sm font-semibold animate-pulse">
              🎉 Chúc mừng <span className="font-bold underline">{selectedStudent.name}</span> đã được chọn!
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={handleSpin}
            disabled={isSpinning || students.length === 0}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
              isSpinning
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 active:scale-98 shadow-indigo-200'
            }`}
          >
            <Dices className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'Đang quay...' : 'Quay Ngẫu Nhiên'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
