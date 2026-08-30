'use client';

import React, { useState } from 'react';
import { KeyRound, Eye, EyeOff, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';
import { saveCustomPassword } from '../../utils/storage';

interface ChangePasswordModalProps {
  isOpen: boolean;
  username: string;
  name: string;
  isFirstLogin: boolean;
  onSuccess: () => void;
}

export const ChangePasswordModal: React.FC<ChangePasswordModalProps> = ({
  isOpen,
  username,
  name,
  isFirstLogin,
  onSuccess,
}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  // Password strength checks
  const hasMinLength = newPassword.length >= 8;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasLower = /[a-z]/.test(newPassword);
  const hasNumber = /[0-9]/.test(newPassword);
  const isStrong = hasMinLength && hasUpper && hasLower && hasNumber;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isStrong) {
      setError('Mật khẩu chưa đủ mạnh! Vui lòng xem yêu cầu bên dưới.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp!');
      return;
    }

    setSaving(true);
    try {
      saveCustomPassword(username, newPassword);
      setDone(true);
      setTimeout(() => {
        onSuccess();
      }, 1800);
    } catch {
      setError('Có lỗi khi lưu mật khẩu, vui lòng thử lại.');
    } finally {
      setSaving(false);
    }
  };

  const StrengthRow = ({ ok, label }: { ok: boolean; label: string }) => (
    <div className={`flex items-center gap-1.5 text-[11px] font-semibold ${ok ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
      <span>{ok ? '✓' : '○'}</span>
      <span>{label}</span>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/70 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-200">

        {done ? (
          <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-800 dark:text-white">Đổi Mật Khẩu Thành Công!</h3>
              <p className="text-xs text-slate-400 mt-1">Mật khẩu mới của bạn đã được lưu an toàn. Đang vào lớp...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-start gap-3 border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-black text-slate-800 dark:text-white">
                  {isFirstLogin ? '🔑 Bắt Buộc Đổi Mật Khẩu' : '🔑 Đổi Mật Khẩu'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Xin chào <span className="font-bold text-slate-600 dark:text-slate-300">{name}</span>!
                  {isFirstLogin
                    ? ' Đây là lần đăng nhập đầu tiên. Vui lòng đổi mật khẩu mặc định để bảo mật tài khoản.'
                    : ' Nhập mật khẩu mới cho tài khoản của bạn.'}
                </p>
              </div>
            </div>

            {isFirstLogin && (
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-3 mb-4 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold text-amber-800 dark:text-amber-300">
                  Mật khẩu mặc định sẽ không còn hiệu lực sau khi bạn đổi. Mật khẩu mới sẽ được lưu vĩnh viễn.
                </p>
              </div>
            )}

            {error && (
              <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-300 p-3 rounded-2xl text-xs font-bold flex items-center gap-2 mb-4">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* New Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Mật Khẩu Mới:</label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showNew ? 'text' : 'password'}
                    required
                    placeholder="Nhập mật khẩu mới..."
                    value={newPassword}
                    onChange={e => { setNewPassword(e.target.value); setError(null); }}
                    className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {/* Strength indicators */}
                {newPassword.length > 0 && (
                  <div className="grid grid-cols-2 gap-1 mt-2 px-1">
                    <StrengthRow ok={hasMinLength} label="Ít nhất 8 ký tự" />
                    <StrengthRow ok={hasUpper} label="Chữ hoa (A-Z)" />
                    <StrengthRow ok={hasLower} label="Chữ thường (a-z)" />
                    <StrengthRow ok={hasNumber} label="Số (0-9)" />
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Xác Nhận Mật Khẩu Mới:</label>
                <div className="relative">
                  <ShieldCheck className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    required
                    placeholder="Nhập lại mật khẩu mới..."
                    value={confirmPassword}
                    onChange={e => { setConfirmPassword(e.target.value); setError(null); }}
                    className={`w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-slate-800 border rounded-2xl text-xs font-medium text-slate-800 dark:text-white focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 transition-all ${
                      confirmPassword.length > 0 && confirmPassword !== newPassword
                        ? 'border-rose-400 focus:ring-rose-400/30 focus:border-rose-500'
                        : confirmPassword.length > 0 && confirmPassword === newPassword
                        ? 'border-emerald-400 focus:ring-emerald-400/30 focus:border-emerald-500'
                        : 'border-slate-200 dark:border-slate-700 focus:ring-amber-400/30 focus:border-amber-500'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {confirmPassword.length > 0 && confirmPassword === newPassword && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1.5 px-1">✓ Mật khẩu khớp!</p>
                )}
              </div>

              <button
                type="submit"
                disabled={saving || !isStrong || newPassword !== confirmPassword}
                className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-2xl text-xs font-black shadow-md shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                {saving ? 'Đang Lưu...' : 'Xác Nhận Đổi Mật Khẩu'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
