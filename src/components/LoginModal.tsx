'use client';

import React, { useState } from 'react';
import { CLASS_ACCOUNTS } from '../data/accounts';
import { AuthUser } from '../data/types';
import { loadCustomPasswords, hasChangedPassword, loadUserRoles } from '../utils/storage';
import { LogIn, X, User, Key, ShieldCheck, AlertCircle, Eye, EyeOff, Loader2 } from 'lucide-react';
import { ChangePasswordModal } from './ChangePasswordModal';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: AuthUser) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // After login passes: show change-password modal for first-time users
  const [pendingUser, setPendingUser] = useState<AuthUser | null>(null);
  const [showChangePwd, setShowChangePwd] = useState(false);

  if (!isOpen && !showChangePwd) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const trimUser = username.trim().toLowerCase();
    const trimPass = password.trim();

    // Find account by username
    const found = CLASS_ACCOUNTS.find(
      acc => acc.username.toLowerCase() === trimUser
    );

    if (!found) {
      setErrorMsg('Tên đăng nhập không tồn tại!');
      setLoading(false);
      return;
    }

    // Determine effective password: custom (from localStorage or DB) > default
    let effectivePassword = found.password;

    // 1. Check localStorage cache
    const customPwds = loadCustomPasswords();
    if (customPwds[found.username]) {
      effectivePassword = customPwds[found.username];
    } else {
      // 2. Try Cloud DB for custom password
      try {
        const res = await fetch(`/api/password?username=${encodeURIComponent(found.username)}`);
        const json = await res.json();
        if (json.success && json.data?.password) {
          effectivePassword = json.data.password;
          // Cache locally
          const existing = loadCustomPasswords();
          existing[found.username] = json.data.password;
          localStorage.setItem('11a7_custom_passwords', JSON.stringify(existing));
        }
      } catch {
        // No internet / no DB — use local/default
      }
    }

    if (trimPass !== effectivePassword) {
      setErrorMsg('Mật khẩu không chính xác!');
      setLoading(false);
      return;
    }

    setLoading(false);

    const customUserRoles = loadUserRoles();
    const effectiveRole = customUserRoles[found.username] || found.role;

    const user: AuthUser = {
      stt: found.stt,
      name: found.name,
      role: effectiveRole,
      username: found.username,
    };

    // Check if this is first login (never changed password)
    const alreadyChangedPwd = hasChangedPassword(found.username) || !!customPwds[found.username];

    // GVCN is exempt from forced change
    if (!alreadyChangedPwd && found.role !== 'GVCN') {
      setPendingUser(user);
      setShowChangePwd(true);
    } else {
      // Normal login
      onLoginSuccess(user);
      onClose();
      setUsername('');
      setPassword('');
    }
  };

  const handlePasswordChanged = () => {
    setShowChangePwd(false);
    if (pendingUser) {
      onLoginSuccess(pendingUser);
      onClose();
      setUsername('');
      setPassword('');
      setPendingUser(null);
    }
  };

  return (
    <>
      {/* Change Password Modal (z-[60] so it sits above login) */}
      {showChangePwd && pendingUser && (
        <ChangePasswordModal
          isOpen={showChangePwd}
          username={pendingUser.username}
          name={pendingUser.name}
          isFirstLogin={true}
          onSuccess={handlePasswordChanged}
        />
      )}

      {/* Login Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <LogIn className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-800 dark:text-white tracking-tight">Đăng Nhập Lớp 11A7</h3>
                  <p className="text-xs text-slate-400">Nhập tài khoản được phân quyền</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {errorMsg && (
              <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-3.5 rounded-2xl text-xs font-bold flex items-center gap-2 mb-4 animate-in fade-in">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Tên Đăng Nhập (Username):</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="VD: vi.da, minh.pq, van.tt..."
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Mật Khẩu (Password):</label>
                <div className="relative">
                  <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Nhập mật khẩu..."
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-70 text-white rounded-2xl text-xs font-black shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Đang kiểm tra...</>
                ) : (
                  <><ShieldCheck className="w-4 h-4" /> Đăng Nhập Ngay</>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
