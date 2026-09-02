'use client';

import React from 'react';
import { Award, FileSearch, ExternalLink, X, ArrowRight, ClipboardList } from 'lucide-react';
import { EMULATION_SHEET_URL, ACTIVITY_ASSIGNMENT_SHEET_URL } from '../../data/accounts';

interface EmulationChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLookup: () => void;
}

export const EmulationChoiceModal: React.FC<EmulationChoiceModalProps> = ({
  isOpen,
  onClose,
  onSelectLookup,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-5 animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white dark:bg-slate-800 p-0.5 shadow-md shadow-amber-500/10 border border-slate-100 dark:border-slate-700 overflow-hidden flex items-center justify-center shrink-0">
              <img src="/logo.png" alt="Logo Lớp 11A7" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-black text-slate-800 dark:text-white text-base">Thi Đua & Tra Cứu Lớp 11A7</h3>
              <p className="text-xs text-slate-400">Vui lòng chọn chức năng bạn muốn truy cập</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3 Choice Options */}
        <div className="grid grid-cols-1 gap-3.5">
          {/* Option 1: Tra Cứu Nội Quy & Mức Trừ */}
          <button
            onClick={() => {
              onSelectLookup();
              onClose();
            }}
            className="group relative p-4 sm:p-5 bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/40 dark:to-indigo-950/40 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/50 dark:hover:to-indigo-900/50 border border-blue-200/80 dark:border-blue-800/60 rounded-2xl text-left transition-all shadow-xs hover:shadow-md active:scale-[0.99] flex items-start gap-4"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-all">
              <FileSearch className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                  Lựa Chọn 1
                </span>
                <span className="text-[10px] font-bold bg-blue-200/70 dark:bg-blue-900/80 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  Nội bộ Web <ArrowRight className="w-3 h-3" />
                </span>
              </div>
              <h4 className="font-black text-slate-800 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                1. Tra Cứu Nội Quy & Thi Đua Lớp
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Tra cứu danh sách quy định, điểm cộng/trừ thi đua và khung xử phạt vi phạm của lớp 11A7.
              </p>
            </div>
          </button>

          {/* Option 2: Bảng Thi Đua Google Sheets */}
          <a
            href={EMULATION_SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group relative p-4 sm:p-5 bg-gradient-to-br from-amber-50 to-orange-50/60 dark:from-amber-950/40 dark:to-orange-950/40 hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/50 dark:hover:to-orange-900/50 border border-amber-200/80 dark:border-amber-800/60 rounded-2xl text-left transition-all shadow-xs hover:shadow-md active:scale-[0.99] flex items-start gap-4"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20 group-hover:scale-110 transition-all">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                  Lựa Chọn 2
                </span>
                <span className="text-[10px] font-bold bg-amber-200/70 dark:bg-amber-900/80 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  Mở Trực Tiếp <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <h4 className="font-black text-slate-800 dark:text-white text-sm group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                2. Bảng Theo Dõi Thi Đua (Google Sheets)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Mở trang tính Google Sheets theo dõi bảng tổng hợp điểm thi đua hàng tuần của lớp 11A7.
              </p>
            </div>
          </a>

          {/* Option 3: Phân Công Hoạt Động Google Sheets */}
          <a
            href={ACTIVITY_ASSIGNMENT_SHEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group relative p-4 sm:p-5 bg-gradient-to-br from-emerald-50 to-teal-50/60 dark:from-emerald-950/40 dark:to-teal-950/40 hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/50 dark:hover:to-teal-900/50 border border-emerald-200/80 dark:border-emerald-800/60 rounded-2xl text-left transition-all shadow-xs hover:shadow-md active:scale-[0.99] flex items-start gap-4"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-all">
              <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1 min-w-0 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-wider">
                  Lựa Chọn 3
                </span>
                <span className="text-[10px] font-bold bg-emerald-200/70 dark:bg-emerald-900/80 text-emerald-800 dark:text-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  Mở Trực Tiếp <ExternalLink className="w-3 h-3" />
                </span>
              </div>
              <h4 className="font-black text-slate-800 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                3. Phân Công Hoạt Động Lớp (Google Sheets)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Mở danh sách phân công công việc, hoạt động tập thể và sự kiện của lớp 11A7.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
