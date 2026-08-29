'use client';

import React, { useState } from 'react';
import { CLASS_ACCOUNTS } from '../data/accounts';
import { AuthUser } from '../data/types';
import { LogIn, X, User, Key, ShieldCheck, AlertCircle } from 'lucide-react';

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
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const found = CLASS_ACCOUNTS.find(
      acc =>
        acc.username.toLowerCase() === username.trim().toLowerCase() &&
        acc.password === password.trim()
    );

    if (found) {
      onLoginSuccess({
        stt: found.stt,
        name: found.name,
        role: found.role,
        username: found.username,
      });
      onClose();
      setUsername('');
      setPassword('');
    } else {
      setErrorMsg('Tên đăng nhập hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <LogIn className="w-5 h-5" />
            <h3 className="text-base font-bold text-slate-800">Đăng Nhập Lớp 11A7</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded-xl text-xs font-bold flex items-center gap-2 mb-4">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Tên Đăng Nhập (Username):</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="Nhập tên đăng nhập của bạn..."
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Mật Khẩu (Password):</label>
            <div className="relative">
              <Key className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="Nhập mật khẩu tài khoản..."
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" /> Đăng Nhập Ngay
          </button>
        </form>
      </div>
    </div>
  );
};
