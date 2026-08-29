'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldAlert, User, Key, RefreshCw, CheckCircle2,
  Search, Eye, EyeOff, X, AlertCircle, Loader2,
  Lock, Unlock, ChevronDown, ChevronUp, Crown,
  Activity, Clock, Calendar, Trash2, ShieldCheck, FileText, UserCheck, UserX, UserPlus, Edit3
} from 'lucide-react';
import { CLASS_ACCOUNTS, UserRole } from '../../data/accounts';
import { loadCustomPasswords, saveCustomPassword, loadAuditLogs, clearAuditLogs, recordAuditLog } from '../../utils/storage';
import { AuditLog, AuditActionType } from '../../data/types';

interface AdminPanelProps {
  currentAdminUser: { username: string; name: string };
}

interface AccountStatus {
  username: string;
  name: string;
  role: UserRole;
  stt: number;
  currentPassword: string;
  hasCustomPwd: boolean;
  isDefault: boolean;
}

const ROLE_BADGE: Record<string, { label: string; color: string }> = {
  ADMIN:            { label: 'ADMIN',           color: 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400' },
  GVCN:             { label: 'GVCN',            color: 'bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400' },
  'LỚP TRƯỜNG':     { label: 'Lớp Trưởng',      color: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400' },
  'LỚP PHÓ HỌC TẬP': { label: 'LP Học Tập',   color: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-400' },
  'LỚP PHÓ LAO ĐỘNG': { label: 'LP Lao Động',  color: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400' },
  'LỚP PHÓ KỈ LUẬT': { label: 'LP Kỉ Luật',   color: 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400' },
  'HỌC SINH':       { label: 'Học Sinh',        color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' },
};

const ACTION_CONFIG: Record<AuditActionType, { label: string; color: string; icon: any }> = {
  LOGIN:            { label: 'Đăng Nhập',          color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-300', icon: UserCheck },
  LOGOUT:           { label: 'Đăng Xuất',         color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300', icon: UserX },
  PASSWORD_CHANGE:  { label: 'Đổi Mật Khẩu',      color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border-amber-300', icon: Key },
  STUDENT_ADD:      { label: 'Thêm Học Sinh',     color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300 border-blue-300', icon: UserPlus },
  STUDENT_EDIT:     { label: 'Sửa Học Sinh',      color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-300', icon: Edit3 },
  STUDENT_DELETE:   { label: 'Xóa Học Sinh',      color: 'bg-rose-100 text-rose-800 dark:bg-rose-950/50 dark:text-rose-300 border-rose-300', icon: Trash2 },
  ATTENDANCE_SAVE:  { label: 'Điểm Danh',         color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/50 dark:text-cyan-300 border-cyan-300', icon: CheckCircle2 },
  DUTY_UPDATE:      { label: 'Trực Nhật',         color: 'bg-teal-100 text-teal-800 dark:bg-teal-950/50 dark:text-teal-300 border-teal-300', icon: Calendar },
  SEATING_UPDATE:   { label: 'Sơ Đồ Chỗ Ngồi',    color: 'bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300 border-purple-300', icon: ShieldCheck },
  RULE_UPDATE:      { label: 'Quy Định Lớp',      color: 'bg-violet-100 text-violet-800 dark:bg-violet-950/50 dark:text-violet-300 border-violet-300', icon: FileText },
};

export const AdminPanel: React.FC<AdminPanelProps> = ({ currentAdminUser }) => {
  const [adminTab, setAdminTab] = useState<'accounts' | 'audit'>('accounts');

  // Account management state
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

  // Audit log state
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [auditSearch, setAuditSearch] = useState('');
  const [auditActionFilter, setAuditActionFilter] = useState<string>('all');
  const [loadingCloudLogs, setLoadingCloudLogs] = useState(false);

  // Load accounts
  const refreshAccounts = () => {
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

  // Load audit logs
  const refreshAuditLogs = async () => {
    const local = loadAuditLogs();
    setAuditLogs(local);

    try {
      setLoadingCloudLogs(true);
      const res = await fetch('/api/audit');
      const json = await res.json();
      if (json.success && Array.isArray(json.data) && json.data.length > 0) {
        setAuditLogs(json.data);
      }
    } catch {} finally {
      setLoadingCloudLogs(false);
    }
  };

  useEffect(() => {
    refreshAccounts();
    refreshAuditLogs();
  }, []);

  const filteredAccounts = accounts.filter(acc => {
    const matchSearch =
      acc.name.toLowerCase().includes(search.toLowerCase()) ||
      acc.username.toLowerCase().includes(search.toLowerCase());
    const matchRole = filterRole === 'all' || acc.role === filterRole;
    return matchSearch && matchRole;
  });

  const filteredLogs = auditLogs.filter(log => {
    const matchSearch =
      log.userName.toLowerCase().includes(auditSearch.toLowerCase()) ||
      log.username.toLowerCase().includes(auditSearch.toLowerCase()) ||
      log.details.toLowerCase().includes(auditSearch.toLowerCase()) ||
      log.displayTime.toLowerCase().includes(auditSearch.toLowerCase());
    const matchAction = auditActionFilter === 'all' || log.action === auditActionFilter;
    return matchSearch && matchAction;
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
      recordAuditLog(
        { stt: -1, name: currentAdminUser.name, role: 'ADMIN', username: currentAdminUser.username },
        'PASSWORD_CHANGE',
        `Admin đã đổi mật khẩu cho tài khoản "${username}"`
      );
      setSuccessMsg(`✓ Đã đổi mật khẩu cho tài khoản "${username}" thành công!`);
      setEditingUsername(null);
      refreshAccounts();
      refreshAuditLogs();
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

    fetch('/api/password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: acc.username, newPassword: original.password }),
    }).catch(() => {});

    recordAuditLog(
      { stt: -1, name: currentAdminUser.name, role: 'ADMIN', username: currentAdminUser.username },
      'PASSWORD_CHANGE',
      `Admin đã khôi phục mật khẩu mặc định cho tài khoản "${acc.username}"`
    );

    setSuccessMsg(`✓ Đã khôi phục mật khẩu mặc định cho "${acc.username}"!`);
    refreshAccounts();
    refreshAuditLogs();
    setTimeout(() => setSuccessMsg(null), 4000);
  };

  const handleClearLogs = () => {
    if (window.confirm('Bạn có chắc muốn xóa lịch sử nhật ký hoạt động không?')) {
      clearAuditLogs();
      refreshAuditLogs();
    }
  };

  const toggleRow = (username: string) => {
    setExpandedRows(prev => ({ ...prev, [username]: !prev[username] }));
  };

  const roleOptions: Array<{ value: string; label: string }> = [
    { value: 'all', label: 'Tất cả vai trò' },
    { value: 'ADMIN', label: 'ADMIN' },
    { value: 'GVCN', label: 'GVCN' },
    { value: 'LỚP TRƯỜNG', label: 'Lớp Trưởng' },
    { value: 'LỚP PHÓ HỌC TẬP', label: 'LP Học Tập' },
    { value: 'LỚP PHÓ LAO ĐỘNG', label: 'LP Lao Động' },
    { value: 'LỚP PHÓ KỈ LUẬT', label: 'LP Kỉ Luật' },
    { value: 'HỌC SINH', label: 'Học Sinh' },
  ];

  return (
    <div className="space-y-5 animate-in fade-in duration-200">
      {/* Header Bar */}
      <div className="glass-card rounded-3xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-500" />
              Bảng Quản Trị Hệ Thống ADMIN
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Tài khoản Admin: <span className="font-black text-red-600 dark:text-red-400">{currentAdminUser.name}</span>
            </p>
          </div>
        </div>

        {/* Sub-Tabs Switcher */}
        <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 w-full sm:w-auto">
          <button
            onClick={() => setAdminTab('accounts')}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
              adminTab === 'accounts'
                ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Tài Khoản ({accounts.length})</span>
          </button>
          <button
            onClick={() => { setAdminTab('audit'); refreshAuditLogs(); }}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-2 ${
              adminTab === 'audit'
                ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Nhật Ký System ({auditLogs.length})</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: ACCOUNTS & PASSWORDS ================= */}
      {adminTab === 'accounts' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Success / Error Banners */}
          {successMsg && (
            <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> {successMsg}
            </div>
          )}
          {errorMsg && (
            <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" /> {errorMsg}
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
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>
            <select
              value={filterRole}
              onChange={e => setFilterRole(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-red-500 transition-all cursor-pointer"
            >
              {roleOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          {/* Accounts List */}
          <div className="glass-card rounded-3xl shadow-sm overflow-hidden divide-y divide-slate-100 dark:divide-slate-800">
            {filteredAccounts.map(acc => {
              const badge = ROLE_BADGE[acc.role] || { label: acc.role, color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' };
              const isExpanded = expandedRows[acc.username];
              const isEditing = editingUsername === acc.username;
              const showPwdForRow = showCurrentPwd[acc.username];

              return (
                <div key={acc.username} className="transition-all">
                  <button
                    onClick={() => toggleRow(acc.username)}
                    className="w-full flex items-center gap-3 p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all text-left"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 font-black text-xs shrink-0">
                      {acc.role === 'ADMIN' ? <Crown className="w-4 h-4 text-amber-500" /> : `#${acc.stt}`}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-xs font-black text-slate-800 dark:text-white truncate">{acc.name}</p>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${badge.color}`}>{badge.label}</span>
                        {acc.hasCustomPwd ? (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">✓ Đã đổi</span>
                        ) : (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">Mặc định</span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-mono">@{acc.username}</p>
                    </div>
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-4 bg-slate-50/70 dark:bg-slate-800/30 space-y-3 border-t border-slate-100 dark:border-slate-800 animate-in fade-in duration-150">
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
                              className="flex-1 py-2.5 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                            >
                              <Key className="w-3.5 h-3.5" /> Đổi Mật Khẩu
                            </button>
                            {acc.hasCustomPwd && acc.role !== 'ADMIN' && (
                              <button
                                onClick={() => handleResetToDefault(acc)}
                                className="px-3 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-amber-950/40 text-slate-600 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-400 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
                              >
                                <RefreshCw className="w-3.5 h-3.5" /> Reset Default
                              </button>
                            )}
                          </div>
                        </div>
                      )}

                      {isEditing && (
                        <div className="pt-3 space-y-3">
                          <p className="text-xs font-black text-slate-700 dark:text-slate-300">
                            Đặt mật khẩu mới cho <span className="text-red-600 dark:text-red-400">@{acc.username}</span>:
                          </p>
                          {errorMsg && (
                            <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errorMsg}
                            </div>
                          )}
                          <div className="relative">
                            <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                            <input
                              type={showPwd ? 'text' : 'password'}
                              placeholder="Mật khẩu mới..."
                              value={newPwd}
                              onChange={e => { setNewPwd(e.target.value); setErrorMsg(null); }}
                              className="w-full pl-9 pr-10 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:border-red-500 transition-all"
                            />
                            <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
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
                              className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-mono text-slate-800 dark:text-white focus:outline-none focus:border-red-500 transition-all"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleSave(acc.username)}
                              disabled={saving || !newPwd || newPwd !== confirmPwd}
                              className="flex-1 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 disabled:opacity-50 text-white rounded-xl text-xs font-black flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                            >
                              {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                              Lưu Mật Khẩu
                            </button>
                            <button onClick={cancelEdit} className="px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold">
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
          </div>
        </div>
      )}

      {/* ================= TAB 2: AUDIT LOGS & SYSTEM HISTORY ================= */}
      {adminTab === 'audit' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          {/* Control & Search Bar */}
          <div className="glass-card rounded-3xl p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm người thực hiện, thời gian hoặc chi tiết hành động..."
                value={auditSearch}
                onChange={e => setAuditSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
              />
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <select
                value={auditActionFilter}
                onChange={e => setAuditActionFilter(e.target.value)}
                className="flex-1 md:flex-none px-3.5 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:border-red-500 transition-all cursor-pointer"
              >
                <option value="all">Tất cả hành động</option>
                {Object.entries(ACTION_CONFIG).map(([actKey, actCfg]) => (
                  <option key={actKey} value={actKey}>{actCfg.label}</option>
                ))}
              </select>

              <button
                onClick={refreshAuditLogs}
                disabled={loadingCloudLogs}
                className="p-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl text-xs font-bold transition-all"
                title="Làm mới nhật ký"
              >
                <RefreshCw className={`w-4 h-4 ${loadingCloudLogs ? 'animate-spin' : ''}`} />
              </button>

              <button
                onClick={handleClearLogs}
                className="p-2.5 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 rounded-2xl text-xs font-bold transition-all"
                title="Xóa lịch sử nhật ký"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Audit Logs List */}
          <div className="glass-card rounded-3xl shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider flex items-center gap-2">
                <Activity className="w-4 h-4 text-red-500" />
                Nhật Ký Hoạt Động ({filteredLogs.length})
              </span>
              <span className="text-[11px] text-slate-400">Giờ Việt Nam (Asia/Ho_Chi_Minh GMT+7)</span>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredLogs.map(log => {
                const actConfig = ACTION_CONFIG[log.action] || {
                  label: log.action,
                  color: 'bg-slate-100 text-slate-700 border-slate-300',
                  icon: Activity,
                };
                const ActIcon = actConfig.icon;

                return (
                  <div key={log.id} className="p-4 hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                        <ActIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-lg border ${actConfig.color}`}>
                            {actConfig.label}
                          </span>
                          <span className="text-xs font-black text-slate-800 dark:text-white">
                            {log.userName}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            (@{log.username})
                          </span>
                        </div>
                        <p className="text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed">
                          {log.details}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 dark:text-slate-500 shrink-0 self-end sm:self-center bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{log.displayTime}</span>
                    </div>
                  </div>
                );
              })}

              {filteredLogs.length === 0 && (
                <div className="p-12 text-center text-slate-400">
                  <Activity className="w-10 h-10 mx-auto mb-2 opacity-30 animate-pulse" />
                  <p className="text-xs font-bold">Chưa có nhật ký hoạt động nào phù hợp</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
