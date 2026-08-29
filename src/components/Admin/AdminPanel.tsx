'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldAlert, User, Key, RefreshCw, CheckCircle2,
  Search, Eye, EyeOff, X, AlertCircle, Loader2,
  Lock, Unlock, ChevronDown, ChevronUp, Crown
} from 'lucide-react';
import { CLASS_ACCOUNTS, UserAccount, UserRole } from '../../data/accounts';
import { loadCustomPasswords, saveCustomPassword } from '../../utils/storage';

interface AdminPanelProps {
  currentAdminUser: { username: string; name: string };
}

interface AccountStatus {
  username: string;
  name: string;
  role: UserRole;
  stt: number;
  currentPassword: string;   // effective (custom or default)
  hasCustomPwd: boolean;
  isDefault: boolean;
}

const ROLE_BADGE: Record<UserRole, { label: string; color: string }> = {
  ADMIN:            { label: 'ADMIN',           color: 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400' },
  GVCN:             { label: 'GVCN',            color: 'bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400' },
  'LỚP TRƯỞNG':    { label: 'Lớp Trưởng',      color: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400' },
  'LỚP PHÓ HỌC TẬP': { label: 'LP Học Tập',   color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-400' },
  'LỚP PHÓ LAO ĐỘNG': { label: 'LP Lao Động',  color: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400' },
  'LỚP PHÓ KỈ LUẬT': { label: 'LP Kỉ Luật',   color: 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400' },
  'HỌC SINH':       { label: 'Học Sinh',        color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' },
};

export const AdminPanel: React.FC<AdminPanelProps> = ({ currentAdminUser }) => {
  const [accounts, setAccounts] = useState<AccountStatus[]>([]);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState<string>('all');
  const [editingUsername, setEditingUsername] = useState<string | null>(null);
  const [newPwd, setNewPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [showCurrentPwd, setShowCurrentPwd] = useState<Record<string, boolean>>({});
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  // Load all accounts with effective passwords
  const refresh = () => {
    const customPwds = loadCustomPasswords();
    const statuses: AccountStatus[] = CLASS_ACCOUNTS.map(acc => ({
      username: acc.username,
      name: acc.name,
      role: acc.role,
      stt: acc.stt,
      currentPassword: customPwds[acc.username] ?? acc.password,
      hasCustomPwd: !!customPwds[acc.username],
      isDefault: !customPwds[acc.username],
    }));
    setAccounts(statuses);
  };

  useEffect(() => { refresh(); }, []);

  const filtered = accounts.filter(acc => {
    const matchSearch =
      acc.name.toLowerCase().includes(search.toLowerCase()) ||
      acc.username.toLowerCase().includes(search.toLowerCase());
    const matchRole = filterRole === 'all' || acc.role === filterRole;
    return matchSearch && matchRole;
  });

  const startEdit = (username: string) => {
    setEditingUsername(username);
    setNewPwd('');
    setConfirmPwd('');
    setShowPwd(false);
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const cancelEdit = () => {
    setEditingUsername(null);
    setNewPwd('');
    setConfirmPwd('');
    setErrorMsg(null);
  };

  const handleSave = async (username: string) => {
    if (newPwd.length < 6) {
      setErrorMsg('Mật khẩu phải có ít nhất 6 ký tự!');
      return;
    }
    if (newPwd !== confirmPwd) {
      setErrorMsg('Hai mật khẩu không khớp!');
      return;
    }

    setSaving(true);
    setErrorMsg(null);
    try {
      saveCustomPassword(username, newPwd);
      setSuccessMsg(`✓ Đã đổi mật khẩu cho tài khoản "${username}" thành công!`);
      setEditingUsername(null);
      refresh();
      setTimeout(() => setSuccessMsg(null), 4000);
    } catch {
      setErrorMsg('Có lỗi khi lưu mật khẩu, vui lòng thử lại!');
    } finally {
      setSaving(false);
    }
  };

  const handleResetToDefault = (acc: AccountStatus) => {
    const original = CLASS_ACCOUNTS.find(a => a.username === acc.username);
    if (!original) return;
    const pwds = loadCustomPasswords();
    delete pwds[acc.username];
    localStorage.setItem('11a7_custom_passwords', JSON.stringify(pwds));
    // Also reset in Cloud DB by setting to default
    fetch('/api/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: acc.username, newPassword: original.password }),
    }).catch(() => {});
    setSuccessMsg(`✓ Đã khôi phục mật khẩu mặc định cho "${acc.username}"!`);
    refresh();
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  const toggleRow = (username: string) => {
    setExpandedRows(prev => ({ ...prev, [username]: !prev[username] }));
  };

  const roleOptions: Array<{ value: string; label: string }> = [
    { value: 'all', label: 'Tất cả vai trò' },
    { value: 'ADMIN', label: 'ADMIN' },
    { value: 'GVCN', label: 'GVCN' },
    { value: 'LỚP TRƯỞNG', label: 'Lớp Trưởng' },
    { value: 'LỚP PHÓ HỌC TẬP', label: 'LP Học Tập' },
    { value: 'LỚP PHÓ LAO ĐỘNG', label: 'LP Lao Động' },
    { value: 'LỚP PHÓ KỈ LUẬT', label: 'LP Kỉ Luật' },
    { value: 'HỌC SINH', label: 'Học Sinh' },
  ];

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Header */}
      <div className="glass-card rounded-3xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/20">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-500" />
              Quản Lý Tài Khoản &amp; Mật Khẩu
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Đang đăng nhập với quyền: <span className="font-black text-red-600 dark:text-red-400">{currentAdminUser.name} (ADMIN)</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-3 py-1.5 rounded-xl">
            {accounts.length} tài khoản
          </span>
          <button
            onClick={refresh}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all"
            title="Làm mới"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Success / Error Banners */}
      {successMsg && (
        <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          {errorMsg}
        </div>
      )}

      {/* Search & Filter */}
      <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo tên hoặc username..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>
        <select
          value={filterRole}
          onChange={e => setFilterRole(e.target.value)}
          className="w-full sm:w-auto px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 transition-all cursor-pointer"
        >
          {roleOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Account Table */}
      <div className="glass-card rounded-3xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">
            Danh sách tài khoản ({filtered.length})
          </span>
          <span className="text-[11px] text-slate-400">Nhấn vào dòng để mở chi tiết &amp; chỉnh sửa</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {filtered.map(acc => {
            const badge = ROLE_BADGE[acc.role];
            const isExpanded = expandedRows[acc.username];
            const isEditing = editingUsername === acc.username;
            const showPwdForRow = showCurrentPwd[acc.username];

            return (
              <div key={acc.username} className="transition-all">
                {/* Row Header */}
                <button
                  onClick={() => toggleRow(acc.username)}
                  className="w-full flex items-center gap-3 p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-left"
                >
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 font-black text-xs shrink-0">
                    {acc.role === 'ADMIN' ? <Crown className="w-4 h-4 text-amber-500" /> : `#${acc.stt}`}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-xs font-black text-slate-800 dark:text-white truncate">{acc.name}</p>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${badge.color}`}>
                        {badge.label}
                      </span>
                      {acc.hasCustomPwd ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                          ✓ Đã đổi
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
                          Mặc định
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-mono">@{acc.username}</p>
                  </div>

                  {isExpanded
                    ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  }
                </button>

                {/* Expanded Panel */}
                {isExpanded && (
                  <div className="px-4 pb-4 bg-slate-50/70 dark:bg-slate-800/30 space-y-3 border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-150">

                    {/* Current password display */}
                    {!isEditing && (
                      <div className="pt-3 space-y-3">
                        <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700">
                          <p className="text-[11px] font-bold text-slate-500 mb-1.5">Mật khẩu hiện tại:</p>
                          <div className="flex items-center gap-2">
                            <code className="flex-1 text-xs font-mono text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 select-all overflow-x-auto">
                              {showPwdForRow ? acc.currentPassword : '•'.repeat(Math.min(acc.currentPassword.length, 16))}
                            </code>
                            <button
                              onClick={() => setShowCurrentPwd(prev => ({ ...prev, [acc.username]: !prev[acc.username] }))}
                              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all"
                            >
                              {showPwdForRow ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => startEdit(acc.username)}
                            className="flex-1 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/20 active:scale-95 transition-all"
                          >
                            <Key className="w-3.5 h-3.5" /> Đổi Mật Khẩu
                          </button>
                          {acc.hasCustomPwd && acc.role !== 'ADMIN' && (
                            <button
                              onClick={() => handleResetToDefault(acc)}
                              className="px-3 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
                              title="Khôi phục mật khẩu mặc định"
                            >
                              <RefreshCw className="w-3.5 h-3.5" /> Reset
                            </button>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Edit Form */}
                    {isEditing && (
                      <div className="pt-3 space-y-3">
                        <p className="text-xs font-black text-slate-700 dark:text-slate-300">
                          Đặt mật khẩu mới cho <span className="text-blue-600 dark:text-blue-400">@{acc.username}</span>:
                        </p>

                        {errorMsg && (
                          <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            {errorMsg}
                          </div>
                        )}

                        <div className="relative">
                          <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type={showPwd ? 'text' : 'password'}
                            placeholder="Mật khẩu mới..."
                            value={newPwd}
                            onChange={e => { setNewPwd(e.target.value); setErrorMsg(null); }}
                            className="w-full pl-9 pr-10 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPwd(!showPwd)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                          >
                            {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>

                        <div className="relative">
                          <Unlock className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type={showPwd ? 'text' : 'password'}
                            placeholder="Xác nhận mật khẩu..."
                            value={confirmPwd}
                            onChange={e => { setConfirmPwd(e.target.value); setErrorMsg(null); }}
                            className={`w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-900 border rounded-xl text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:ring-2 transition-all ${
                              confirmPwd && confirmPwd !== newPwd
                                ? 'border-rose-400 focus:ring-rose-400/20'
                                : confirmPwd && confirmPwd === newPwd
                                ? 'border-emerald-400 focus:ring-emerald-400/20'
                                : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500/20 focus:border-blue-500'
                            }`}
                          />
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSave(acc.username)}
                            disabled={saving || !newPwd || newPwd !== confirmPwd}
                            className="flex-1 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                          >
                            {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                            {saving ? 'Đang lưu...' : 'Lưu Mật Khẩu'}
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold transition-all"
                          >
                            Hủy
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="p-10 text-center text-slate-400">
              <User className="w-10 h-10 mx-auto mb-2 opacity-30" />
              <p className="text-xs font-bold">Không tìm thấy tài khoản nào</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
