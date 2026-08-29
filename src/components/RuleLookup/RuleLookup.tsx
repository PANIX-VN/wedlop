'use client';

import React, { useState } from 'react';
import { RuleItem } from '../../data/types';
import { parseDocxRules } from '../../utils/docxParser';
import { FileSearch, Upload, Search, ShieldAlert, Award, CheckCircle2, X } from 'lucide-react';

interface RuleLookupProps {
  rules: RuleItem[];
  onUpdateRules: (newRules: RuleItem[]) => void;
  canUploadRules: boolean;
}

export const RuleLookup: React.FC<RuleLookupProps> = ({
  rules,
  onUpdateRules,
  canUploadRules,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const categories = ['all', 'Chuyên cần', 'Học tập', 'Nề nếp', 'Ứng xử', 'Cán bộ lớp', 'Khác'];

  const filteredRules = rules.filter(rule => {
    const matchesSearch = rule.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || rule.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!canUploadRules) return;
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadMessage(null);

    try {
      const parsedRules = await parseDocxRules(file);
      if (parsedRules.length > 0) {
        onUpdateRules(parsedRules);
        setUploadMessage(`Đã cập nhật thành công ${parsedRules.length} quy định từ file ${file.name}!`);
      } else {
        setUploadMessage('Không tìm thấy cấu trúc quy định hợp lệ trong file docx.');
      }
    } catch (err) {
      console.error(err);
      setUploadMessage('Lỗi khi đọc file docx. Vui lòng kiểm tra định dạng.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Upload Box */}
      <div className="glass-card rounded-3xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-md shadow-purple-500/20">
            <FileSearch className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-tight">Tra Cứu Lỗi & Quy Định 11A7</h2>
              <span className="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-purple-300 shadow-2xs">
                {rules.length} Mục Quy Định
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Tra cứu nhanh khung điểm trừ, điểm cộng nề nếp từ file nội quy lớp học</p>
          </div>
        </div>

        {/* Upload Docx File Button (Only if authorized) */}
        {canUploadRules ? (
          <div className="flex items-center space-x-3">
            <label className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl text-xs font-black shadow-md shadow-purple-500/20 cursor-pointer active:scale-95 transition-all flex items-center gap-2">
              <Upload className="w-4 h-4" />
              <span>{isUploading ? 'Đang đọc docx...' : 'Tải lên File lỗi.docx mới'}</span>
              <input
                type="file"
                accept=".docx"
                onChange={handleFileUpload}
                className="hidden"
                disabled={isUploading}
              />
            </label>
          </div>
        ) : (
          <span className="text-xs font-bold text-slate-500 bg-slate-100 border border-slate-200 px-3.5 py-2 rounded-xl flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Quyền: Tra Cứu Quy Định
          </span>
        )}
      </div>

      {/* Upload Notification */}
      {uploadMessage && (
        <div className="bg-purple-50 border border-purple-200 text-purple-800 p-3.5 rounded-2xl text-xs font-black flex items-center gap-2 animate-in fade-in shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
          <span>{uploadMessage}</span>
        </div>
      )}

      {/* Search & Category Filter Bar */}
      <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Nhập tên lỗi hoặc số điểm (VD: đi muộn, -50)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-purple-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex overflow-x-auto w-full md:w-auto space-x-1.5 pb-1 md:pb-0 no-scrollbar">
          {categories.map(cat => {
            const count = cat === 'all'
              ? rules.length
              : rules.filter(r => r.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{cat === 'all' ? 'Tất Cả' : cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rules Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRules.length === 0 ? (
          <div className="col-span-full glass-card rounded-3xl p-10 border border-slate-200 text-center text-slate-400 text-xs font-medium">
            Không tìm thấy quy định phù hợp với từ khóa tra cứu.
          </div>
        ) : (
          filteredRules.map(rule => {
            const isMerit = rule.points > 0;

            return (
              <div
                key={rule.id}
                className={`glass-card rounded-3xl p-5 border shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                  isMerit ? 'border-emerald-200/90 hover:border-emerald-400' : 'border-rose-200/90 hover:border-rose-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] font-black px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 uppercase tracking-wider">
                      {rule.category}
                    </span>
                    <span
                      className={`text-xs font-black px-2.5 py-1 rounded-xl shadow-2xs ${
                        isMerit
                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                          : 'bg-rose-100 text-rose-900 border border-rose-300'
                      }`}
                    >
                      {isMerit ? `+${rule.points}` : rule.points} đ/{rule.unit}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-800 text-sm leading-snug">
                    {rule.title}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 font-bold">
                    {isMerit ? <Award className="w-3.5 h-3.5 text-emerald-500" /> : <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />}
                    <span className={isMerit ? 'text-emerald-700' : 'text-rose-700'}>
                      {isMerit ? 'Khung Điểm Cộng' : 'Khung Điểm Trừ'}
                    </span>
                  </span>
                  <span className="font-medium text-slate-500">11A7</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
