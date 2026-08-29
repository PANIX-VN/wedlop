'use client';

import React from 'react';
import { ColumnRow } from '../../data/types';
import { Settings, X, Plus, Trash2, Check, LayoutGrid } from 'lucide-react';

interface DeskConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  layout: ColumnRow[];
  onUpdateLayout: (newLayout: ColumnRow[]) => void;
  onSetGlobalCapacity: (capacity: number) => void;
}

export const DeskConfigModal: React.FC<DeskConfigModalProps> = ({
  isOpen,
  onClose,
  layout,
  onUpdateLayout,
  onSetGlobalCapacity,
}) => {
  if (!isOpen) return null;

  const handleAddDesk = (colId: string) => {
    const updated = layout.map(col => {
      if (col.id === colId) {
        const deskNumber = col.desks.length + 1;
        const newDesk = {
          id: `${colId}-desk-${Date.now()}`,
          name: `Bàn ${deskNumber}`,
          capacity: 3,
          seats: [
            { seatIndex: 0, studentId: null },
            { seatIndex: 1, studentId: null },
            { seatIndex: 2, studentId: null },
          ],
        };
        return { ...col, desks: [...col.desks, newDesk] };
      }
      return col;
    });
    onUpdateLayout(updated);
  };

  const handleRemoveDesk = (colId: string, deskId: string) => {
    const updated = layout.map(col => {
      if (col.id === colId) {
        return { ...col, desks: col.desks.filter(d => d.id !== deskId) };
      }
      return col;
    });
    onUpdateLayout(updated);
  };

  const handleCapacityChange = (colId: string, deskId: string, newCap: number) => {
    if (newCap < 1 || newCap > 5) return;
    const updated = layout.map(col => {
      if (col.id === colId) {
        const newDesks = col.desks.map(desk => {
          if (desk.id === deskId) {
            const seats = [];
            for (let i = 0; i < newCap; i++) {
              seats.push(desk.seats[i] || { seatIndex: i, studentId: null });
            }
            return { ...desk, capacity: newCap, seats };
          }
          return desk;
        });
        return { ...col, desks: newDesks };
      }
      return col;
    });
    onUpdateLayout(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 dark:border-slate-800 my-8 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-4">
          <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
            <Settings className="w-5 h-5" />
            <h3 className="text-lg font-black text-slate-800 dark:text-white">Tùy Chỉnh Cấu Hình Bàn Học (Bàn 3 Chỗ)</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Presets */}
        <div className="bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 rounded-2xl p-4 mb-6">
          <label className="block text-xs font-black uppercase tracking-wider text-blue-700 dark:text-blue-300 mb-2">
            Đổi nhanh số chỗ ngồi toàn bộ lớp:
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onSetGlobalCapacity(3)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
            >
              <LayoutGrid className="w-4 h-4" /> Bàn 3 chỗ (Khuyên dùng)
            </button>
            <button
              onClick={() => onSetGlobalCapacity(2)}
              className="px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold transition-all"
            >
              Bàn 2 chỗ
            </button>
            <button
              onClick={() => onSetGlobalCapacity(4)}
              className="px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-xl text-xs font-semibold transition-all"
            >
              Bàn 4 chỗ
            </button>
          </div>
        </div>

        {/* Column Details */}
        <div className="space-y-4 max-h-[45vh] overflow-y-auto pr-2">
          {layout.map(col => (
            <div key={col.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 bg-slate-50/50 dark:bg-slate-800/40">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-black text-slate-800 dark:text-white text-sm">{col.name}</h4>
                <button
                  onClick={() => handleAddDesk(col.id)}
                  className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-blue-600 text-xs font-bold rounded-xl flex items-center gap-1 shadow-xs transition-all"
                >
                  <Plus className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" /> Thêm Bàn
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {col.desks.map(desk => (
                  <div key={desk.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 shadow-2xs flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200">{desk.name}</p>
                      <p className="text-[11px] text-slate-400">{desk.capacity} chỗ ngồi</p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                        <button
                          onClick={() => handleCapacityChange(col.id, desk.id, desk.capacity - 1)}
                          className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-slate-800 dark:text-white">{desk.capacity}</span>
                        <button
                          onClick={() => handleCapacityChange(col.id, desk.id, desk.capacity + 1)}
                          className="px-2 py-0.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => handleRemoveDesk(col.id, desk.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Xóa bàn này"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-6 border-t border-slate-100 dark:border-slate-800 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black shadow-md transition-all flex items-center gap-1.5"
          >
            <Check className="w-4 h-4" /> Hoàn Tất Cấu Hình
          </button>
        </div>
      </div>
    </div>
  );
};
