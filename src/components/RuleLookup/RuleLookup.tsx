'use client';

import React, { useState } from 'react';
import { RuleItem } from '../../data/types';
import { parseDocxRules } from '../../utils/docxParser';
import { FileSearch, Upload, Search, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';

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
        setUploadMessage(`Đã cập nhật ${parsedRules.length} quy định từ file ${file.name}!`);
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
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold">
            <FileSearch className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-800">Tra Cứu Lỗi & Quy Định 11A7</h2>
            <p className="text-xs text-slate-500">Tra cứu nhanh khung điểm trừ, điểm cộng nề nếp từ file `lỗi.docx`</p>
          </div>
        </div>

        {/* Upload Docx File Button (Only if authorized) */}
        {canUploadRules ? (
          <div className="flex items-center space-x-3">
            <label className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all flex items-center gap-2">
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
          <span className="text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-500" /> Chế độ: Tra Cứu
          </span>
        )}
      </div>

      {/* Upload Notification */}
      {uploadMessage && (
        <div className="bg-purple-50 border border-purple-200 text-purple-800 p-3 rounded-xl text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-purple-600" /> {uploadMessage}
        </div>
      )}

      {/* Search & Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Nhập tên lỗi hoặc điểm (VD: đi muộn, -50)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-purple-500"
          />
        </div>

        <div className="flex overflow-x-auto w-full sm:w-auto space-x-1.5 pb-1 sm:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? 'Tất Cả Danh Mục' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Rules Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRules.length === 0 ? (
          <div className="col-span-full bg-white rounded-2xl p-8 border border-slate-200 text-center text-slate-400 text-xs font-medium">
            Không tìm thấy quy định phù hợp với từ khóa tra cứu.
          </div>
        ) : (
          filteredRules.map(rule => {
            const isMerit = rule.points > 0;

            return (
              <div
                key={rule.id}
                className={`bg-white rounded-2xl p-4 border shadow-2xs hover:shadow-md transition-all flex flex-col justify-between ${
                  isMerit ? 'border-emerald-200 hover:border-emerald-300' : 'border-rose-200 hover:border-rose-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 uppercase tracking-wider">
                      {rule.category}
                    </span>
                    <span
                      className={`text-xs font-extrabold px-2.5 py-1 rounded-lg ${
                        isMerit
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : 'bg-rose-100 text-rose-800 border border-rose-300'
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
                  <span className="flex items-center gap-1">
                    {isMerit ? <Award className="w-3.5 h-3.5 text-emerald-500" /> : <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />}
                    {isMerit ? 'Khung Điểm Cộng' : 'Khung Điểm Trừ'}
                  </span>
                  <span className="font-medium text-slate-500">Quy định lớp 11A7</span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
