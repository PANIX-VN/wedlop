'use client';

import React, { useState } from 'react';
import { RuleItem } from '../../data/types';
import { parseDocxRules } from '../../utils/docxParser';
import {
  FileSearch, Upload, Search, ShieldAlert, Award, CheckCircle2, X,
  Plus, Trash2, Edit3, ChevronDown, ChevronUp, Save, TrendingUp, TrendingDown
} from 'lucide-react';

interface RuleLookupProps {
  rules: RuleItem[];
  onUpdateRules: (newRules: RuleItem[]) => void;
  canUploadRules: boolean;
}

const CATEGORIES = ['Chuyên cần', 'Học tập', 'Nề nếp', 'Ứng xử', 'Cán bộ lớp', 'Khác'];

export const RuleLookup: React.FC<RuleLookupProps> = ({
  rules,
  onUpdateRules,
  canUploadRules,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  // Add rule form state
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState(CATEGORIES[0]);
  const [newPoints, setNewPoints] = useState('');
  const [newUnit, setNewUnit] = useState('lần');
  const [addError, setAddError] = useState<string | null>(null);

  // Edit rule state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editPoints, setEditPoints] = useState('');
  const [editUnit, setEditUnit] = useState('');

  const allCategories = ['all', ...CATEGORIES];

  const filteredRules = rules.filter(rule => {
    const matchesSearch =
      rule.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(rule.points).includes(searchTerm);
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
        setUploadMessage(`✓ Đã cập nhật ${parsedRules.length} quy định từ file ${file.name}!`);
      } else {
        setUploadMessage('Không tìm thấy cấu trúc quy định hợp lệ trong file docx.');
      }
    } catch (err) {
      setUploadMessage('Lỗi khi đọc file docx. Vui lòng kiểm tra định dạng.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddRule = () => {
    setAddError(null);
    if (!newTitle.trim()) { setAddError('Vui lòng nhập tên quy định!'); return; }
    const pts = parseInt(newPoints);
    if (isNaN(pts) || pts === 0) { setAddError('Điểm phải là số khác 0 (âm = trừ, dương = cộng)!'); return; }

    const id = `r_custom_${Date.now()}`;
    const newRule: RuleItem = {
      id, category: newCategory, title: newTitle.trim(), points: pts, unit: newUnit.trim() || 'lần',
    };
    onUpdateRules([...rules, newRule]);
    setNewTitle(''); setNewPoints(''); setNewUnit('lần');
    setShowAddForm(false);
    setUploadMessage(`✓ Đã thêm quy định: "${newRule.title}" (${pts > 0 ? '+' : ''}${pts} đ/${newRule.unit})`);
    setTimeout(() => setUploadMessage(null), 4000);
  };

  const handleDeleteRule = (id: string) => {
    onUpdateRules(rules.filter(r => r.id !== id));
  };

  const startEdit = (rule: RuleItem) => {
    setEditingId(rule.id);
    setEditTitle(rule.title);
    setEditPoints(String(rule.points));
    setEditUnit(rule.unit);
  };

  const handleSaveEdit = (rule: RuleItem) => {
    const pts = parseInt(editPoints);
    if (isNaN(pts) || pts === 0 || !editTitle.trim()) return;
    onUpdateRules(rules.map(r =>
      r.id === rule.id ? { ...r, title: editTitle.trim(), points: pts, unit: editUnit.trim() || 'lần' } : r
    ));
    setEditingId(null);
  };

  const demerits = filteredRules.filter(r => r.points < 0);
  const merits = filteredRules.filter(r => r.points > 0);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="glass-card rounded-3xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-purple-500/20">
              <FileSearch className="w-6 h-6" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white tracking-tight">
                  Tra Cứu Lỗi &amp; Quy Định 11A7
                </h2>
                <span className="bg-purple-100 dark:bg-purple-950/50 text-purple-800 dark:text-purple-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-purple-200 dark:border-purple-800">
                  {rules.length} Mục
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                Tra cứu khung điểm trừ / cộng nề nếp lớp 11A7
              </p>
            </div>
          </div>

          {canUploadRules && (
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => { setShowAddForm(!showAddForm); setAddError(null); }}
                className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all active:scale-95 shadow-sm ${
                  showAddForm
                    ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-emerald-500/20'
                }`}
              >
                {showAddForm ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                {showAddForm ? 'Đóng Form' : 'Thêm Quy Định'}
              </button>
              <label className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl text-xs font-black shadow-md shadow-purple-500/20 cursor-pointer active:scale-95 transition-all flex items-center gap-2">
                <Upload className="w-4 h-4" />
                <span>{isUploading ? 'Đang đọc...' : 'Tải .docx'}</span>
                <input type="file" accept=".docx" onChange={handleFileUpload} className="hidden" disabled={isUploading} />
              </label>
            </div>
          )}
        </div>

        {/* Inline Add Form */}
        {canUploadRules && showAddForm && (
          <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-in fade-in duration-200">
            <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Plus className="w-4 h-4 text-emerald-600" /> Thêm Quy Định Mới
            </h4>
            {addError && (
              <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" /> {addError}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">Tên quy định / lỗi:</label>
                <input
                  type="text" placeholder="VD: Không đeo khẩu trang..."
                  value={newTitle} onChange={e => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">Danh mục:</label>
                <select
                  value={newCategory} onChange={e => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all cursor-pointer"
                >
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">Điểm (±):</label>
                  <input
                    type="number" placeholder="-10 / +20"
                    value={newPoints} onChange={e => setNewPoints(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">Đơn vị:</label>
                  <input
                    type="text" placeholder="lần / bài"
                    value={newUnit} onChange={e => setNewUnit(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => { setShowAddForm(false); setAddError(null); }}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold transition-all"
              >Hủy</button>
              <button
                onClick={handleAddRule}
                className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm shadow-emerald-500/20 active:scale-95 transition-all"
              >
                <Save className="w-3.5 h-3.5" /> Lưu Quy Định
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Success/Upload Message */}
      {uploadMessage && (
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 p-3.5 rounded-2xl text-xs font-black flex items-center gap-2 animate-in fade-in shadow-2xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          {uploadMessage}
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm tên lỗi hoặc điểm (VD: đi muộn, -50)..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex overflow-x-auto w-full md:w-auto space-x-1.5 pb-1 md:pb-0 no-scrollbar">
          {allCategories.map(cat => {
            const count = cat === 'all' ? rules.length : rules.filter(r => r.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all flex items-center gap-1 ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'all' ? 'Tất Cả' : cat}
                <span className={`text-[10px] px-1.5 rounded-full ${selectedCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stats Summary Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Tổng quy định', value: filteredRules.length, color: 'from-slate-600 to-slate-700', icon: FileSearch },
          { label: 'Điểm trừ', value: demerits.length, color: 'from-rose-500 to-red-600', icon: TrendingDown },
          { label: 'Điểm cộng', value: merits.length, color: 'from-emerald-500 to-teal-600', icon: TrendingUp },
          { label: 'Danh mục', value: new Set(filteredRules.map(r => r.category)).size, color: 'from-purple-500 to-indigo-600', icon: Award },
        ].map(stat => (
          <div key={stat.label} className="glass-card rounded-2xl p-4 shadow-sm flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-sm shrink-0`}>
              <stat.icon className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-lg font-black text-slate-800 dark:text-white leading-none">{stat.value}</p>
              <p className="text-[10px] text-slate-400 font-medium mt-0.5">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRules.length === 0 ? (
          <div className="col-span-full glass-card rounded-3xl p-12 text-center text-slate-400 dark:text-slate-500">
            <FileSearch className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-xs font-bold">Không tìm thấy quy định phù hợp</p>
          </div>
        ) : (
          filteredRules.map(rule => {
            const isMerit = rule.points > 0;
            const isEditing = editingId === rule.id;

            return (
              <div
                key={rule.id}
                className={`glass-card rounded-3xl p-4 border shadow-2xs hover:shadow-lg transition-all group ${
                  isMerit
                    ? 'border-emerald-200/80 dark:border-emerald-900/50 hover:border-emerald-400 dark:hover:border-emerald-700'
                    : 'border-rose-200/80 dark:border-rose-900/50 hover:border-rose-400 dark:hover:border-rose-700'
                }`}
              >
                {isEditing ? (
                  /* Edit mode */
                  <div className="space-y-2">
                    <input
                      type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-purple-500 transition-all"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number" value={editPoints} onChange={e => setEditPoints(e.target.value)}
                        className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-purple-500"
                        placeholder="Điểm"
                      />
                      <input
                        type="text" value={editUnit} onChange={e => setEditUnit(e.target.value)}
                        className="px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-purple-500"
                        placeholder="Đơn vị"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleSaveEdit(rule)}
                        className="flex-1 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 active:scale-95 transition-all">
                        <Save className="w-3.5 h-3.5" /> Lưu
                      </button>
                      <button onClick={() => setEditingId(null)}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold active:scale-95 transition-all">
                        Hủy
                      </button>
                    </div>
                  </div>
                ) : (
                  /* View mode */
                  <>
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {rule.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className={`text-xs font-black px-2.5 py-1 rounded-xl shadow-2xs ${
                          isMerit
                            ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                            : 'bg-rose-100 dark:bg-rose-950/50 text-rose-900 dark:text-rose-300 border border-rose-200 dark:border-rose-800'
                        }`}>
                          {isMerit ? `+${rule.points}` : rule.points} đ/{rule.unit}
                        </span>
                        {canUploadRules && (
                          <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => startEdit(rule)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all">
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => handleDeleteRule(rule.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    <h4 className="font-bold text-slate-800 dark:text-white text-sm leading-snug">
                      {rule.title}
                    </h4>

                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px]">
                      {isMerit
                        ? <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                        : <TrendingDown className="w-3.5 h-3.5 text-rose-500" />
                      }
                      <span className={`font-bold ${isMerit ? 'text-emerald-700 dark:text-emerald-400' : 'text-rose-700 dark:text-rose-400'}`}>
                        {isMerit ? 'Khung Điểm Cộng' : 'Khung Điểm Trừ'}
                      </span>
                    </div>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
