'use client';

import React, { useState } from 'react';
import { Student } from '../../data/types';
import {
  Users, UserPlus, Trash2, Edit3, Save, X, Search,
  CheckCircle2, AlertCircle, Crown, Shield, ChevronDown, ChevronUp
} from 'lucide-react';

interface StudentManagerProps {
  students: Student[];
  onUpdateStudents: (students: Student[]) => void;
  canManageStudents: boolean;
}

export const StudentManager: React.FC<StudentManagerProps> = ({
  students,
  onUpdateStudents,
  canManageStudents,
}) => {
  const [search, setSearch] = useState('');
  const [filterGroup, setFilterGroup] = useState<number | 'all'>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Add form fields
  const [newName, setNewName] = useState('');
  const [newGroup, setNewGroup] = useState<number>(1);

  // Edit form fields
  const [editName, setEditName] = useState('');
  const [editGroup, setEditGroup] = useState<number>(1);
  const [editStt, setEditStt] = useState<number>(0);

  const showSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  const filtered = students.filter(s => {
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || String(s.stt).includes(search);
    const matchGroup = filterGroup === 'all' || s.group === filterGroup;
    return matchSearch && matchGroup;
  });

  const handleAddStudent = () => {
    setAddError(null);
    if (!newName.trim()) { setAddError('Vui lòng nhập họ và tên học sinh!'); return; }

    const nextStt = students.length > 0 ? Math.max(...students.map(s => s.stt)) + 1 : 1;
    const id = `student_${Date.now()}`;
    const newStudent: Student = {
      id,
      stt: nextStt,
      name: newName.trim().toUpperCase(),
      group: newGroup,
    };

    onUpdateStudents([...students, newStudent]);
    setNewName('');
    setNewGroup(1);
    setShowAddForm(false);
    showSuccess(`✓ Đã thêm học sinh: ${newStudent.name} (Tổ ${newGroup}) — STT #${nextStt}`);
  };

  const handleDeleteStudent = (id: string, name: string) => {
    onUpdateStudents(students.filter(s => s.id !== id));
    showSuccess(`✓ Đã xóa học sinh: ${name}`);
  };

  const startEdit = (s: Student) => {
    setEditingId(s.id);
    setEditName(s.name);
    setEditGroup(s.group);
    setEditStt(s.stt);
  };

  const handleSaveEdit = () => {
    if (!editName.trim() || !editingId) return;
    onUpdateStudents(students.map(s =>
      s.id === editingId
        ? { ...s, name: editName.trim().toUpperCase(), group: editGroup, stt: editStt }
        : s
    ));
    setEditingId(null);
    showSuccess('✓ Đã cập nhật thông tin học sinh!');
  };

  const groupCounts = [1, 2, 3].map(g => ({
    group: g,
    count: students.filter(s => s.group === g).length,
  }));

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Header */}
      <div className="glass-card rounded-3xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white tracking-tight">
                  Quản Lý Danh Sách Học Sinh
                </h2>
                <span className="bg-blue-100 dark:bg-blue-950/50 text-blue-800 dark:text-blue-300 text-[10px] font-black px-2.5 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                  {students.length} HS
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Thêm/sửa/xóa học sinh — tự động đồng bộ điểm danh, sơ đồ, trực nhật
              </p>
            </div>
          </div>
          {canManageStudents && (
            <button
              onClick={() => { setShowAddForm(!showAddForm); setAddError(null); }}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all active:scale-95 shadow-sm ${
                showAddForm
                  ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/20'
              }`}
            >
              {showAddForm ? <X className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
              {showAddForm ? 'Đóng Form' : 'Thêm Học Sinh'}
            </button>
          )}
        </div>

        {/* Add Student Form */}
        {canManageStudents && showAddForm && (
          <div className="mt-5 pt-5 border-t border-slate-100 dark:border-slate-800 space-y-3 animate-in fade-in duration-200">
            <h4 className="text-xs font-black text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-blue-600" /> Thêm Học Sinh Mới Vào Lớp 11A7
            </h4>
            {addError && (
              <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {addError}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">Họ và Tên (sẽ tự viết hoa):</label>
                <input
                  type="text"
                  placeholder="VD: Nguyễn Văn A"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleAddStudent()}
                  className="w-full px-3 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">Phân Tổ:</label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[1, 2, 3].map(g => (
                    <button
                      key={g}
                      onClick={() => setNewGroup(g)}
                      className={`py-2.5 rounded-xl text-xs font-black transition-all ${
                        newGroup === g
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950/30'
                      }`}
                    >
                      Tổ {g}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => { setShowAddForm(false); setAddError(null); }}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold transition-all"
              >Hủy</button>
              <button
                onClick={handleAddStudent}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black flex items-center gap-1.5 shadow-sm shadow-blue-500/20 active:scale-95 transition-all"
              >
                <UserPlus className="w-3.5 h-3.5" /> Thêm Vào Lớp
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Success Message */}
      {successMsg && (
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {successMsg}
        </div>
      )}

      {/* Group Stats */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
        {groupCounts.map(({ group, count }) => (
          <div key={group} className="glass-card rounded-2xl p-4 shadow-sm flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shrink-0 shadow-sm">
              {group}
            </div>
            <div>
              <p className="text-xl font-black text-slate-800 dark:text-white leading-none">{count}</p>
              <p className="text-[10px] text-slate-400 font-medium">Tổ {group}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-col sm:flex-row gap-3 items-center">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm tên hoặc số thứ tự..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <div className="flex items-center gap-1.5">
          {(['all', 1, 2, 3] as const).map(g => (
            <button
              key={g}
              onClick={() => setFilterGroup(g)}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-all ${
                filterGroup === g
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {g === 'all' ? 'Tất Cả' : `Tổ ${g}`}
            </button>
          ))}
        </div>
      </div>

      {/* Student List */}
      <div className="glass-card rounded-3xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800">
          <span className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">
            {filtered.length} học sinh {filterGroup !== 'all' ? `(Tổ ${filterGroup})` : ''}
          </span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {filtered.map(student => {
            const isEditing = editingId === student.id;
            return (
              <div key={student.id} className={`transition-all ${isEditing ? 'bg-blue-50/50 dark:bg-blue-950/20' : 'hover:bg-slate-50/70 dark:hover:bg-slate-800/40'}`}>
                {isEditing ? (
                  <div className="p-4 space-y-3 animate-in fade-in duration-150">
                    <p className="text-xs font-black text-blue-700 dark:text-blue-400">Chỉnh sửa thông tin học sinh:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <input
                          type="text" value={editName}
                          onChange={e => setEditName(e.target.value)}
                          className="w-full px-3 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                      <div className="flex gap-1.5">
                        {[1, 2, 3].map(g => (
                          <button key={g} onClick={() => setEditGroup(g)}
                            className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all ${editGroup === g ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
                            Tổ {g}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={handleSaveEdit}
                        className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl text-xs font-black flex items-center gap-1.5 active:scale-95 transition-all shadow-sm">
                        <Save className="w-3.5 h-3.5" /> Lưu
                      </button>
                      <button onClick={() => setEditingId(null)}
                        className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold transition-all">
                        Hủy
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 p-3.5 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-black text-xs shrink-0">
                      #{student.stt}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-slate-800 dark:text-white truncate">{student.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">Tổ {student.group}</p>
                    </div>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded-lg bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 shrink-0">
                      Tổ {student.group}
                    </span>
                    {canManageStudents && (
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => startEdit(student)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all">
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button onClick={() => handleDeleteStudent(student.id, student.name)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-all">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="p-10 text-center text-slate-400">
              <Users className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="text-xs font-bold">Không tìm thấy học sinh nào</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
