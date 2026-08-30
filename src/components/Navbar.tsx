'use client';

import React, { useState, useEffect } from 'react';
import { LayoutGrid, ClipboardCheck, Award, FileSearch, Calendar, Users, LogIn, LogOut, ExternalLink, Clock, Sparkles, Moon, Sun, ShieldAlert, UserCog } from 'lucide-react';
import { AuthUser } from '../data/types';
import { EMULATION_SHEET_URL } from '../data/accounts';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: AuthUser | null;
  onOpenLogin: () => void;
  onLogout: () => void;
  totalStudents: number;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  isAdmin?: boolean;
  canManageStudents?: boolean;
  onOpenEmulationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenLogin,
  onLogout,
  totalStudents,
  theme,
  onToggleTheme,
  isAdmin = false,
  canManageStudents = false,
  onOpenEmulationModal,
}) => {
  // Live Vietnam Clock
  const [vnTimeStr, setVnTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('vi-VN', {
          timeZone: 'Asia/Ho_Chi_Minh',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setVnTimeStr(formatter.format(new Date()));
      } catch (e) {
        setVnTimeStr(new Date().toLocaleTimeString());
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const tabs = [
    { id: 'seating', label: 'Sơ Đồ Lớp', icon: LayoutGrid, isEmulation: false, color: null },
    { id: 'attendance', label: 'Điểm Danh', icon: ClipboardCheck, isEmulation: false, color: null },
    { id: 'emulation', label: 'Thi Đua', icon: Award, isEmulation: true, color: 'amber' as const },
    { id: 'duty', label: 'Trực Nhật', icon: Calendar, isEmulation: false, color: null },
    ...(canManageStudents ? [{ id: 'students', label: 'Học Sinh', icon: UserCog, isEmulation: false, color: 'blue' as const }] : []),
    ...(isAdmin ? [{ id: 'admin', label: 'Quản Lý TK', icon: ShieldAlert, isEmulation: false, color: 'red' as const }] : []),
  ];

  const getRoleBadgeStyle = (role?: string) => {
    switch (role) {
      case 'ADMIN':
        return 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-red-200';
      case 'GVCN':
        return 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-purple-200';
      case 'LỚP TRƯỞNG':
        return 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-blue-200';
      case 'LỚP PHÓ HỌC TẬP':
        return 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-200';
      case 'LỚP PHÓ LAO ĐỘNG':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-amber-200';
      case 'LỚP PHÓ KỈ LUẬT':
        return 'bg-gradient-to-r from-sky-500 to-blue-500 text-white shadow-sky-200';
      default:
        return 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200';
    }
  };

  return (
    <>
      {/* Top Header */}
      <header className="glass-nav border-b border-slate-200/80 dark:border-slate-800 sticky top-0 z-40 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo & Class Title */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md shadow-blue-500/20 ring-2 ring-white/60 dark:ring-slate-700">
                11A7
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-base sm:text-lg font-black text-slate-800 dark:text-white tracking-tight leading-tight">
                    QUẢN LÝ LỚP 11A7
                  </h1>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse hidden sm:inline" />
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1 font-medium">
                    <Users className="w-3 h-3 text-blue-500" /> Sĩ số: <strong className="text-slate-700 dark:text-slate-200 font-bold">{totalStudents}</strong>
                  </span>
                  {vnTimeStr && (
                    <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      <Clock className="w-2.5 h-2.5 text-slate-400" /> {vnTimeStr} (VN)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden lg:flex items-center space-x-1.5 bg-slate-100/70 dark:bg-slate-800/70 p-1 rounded-2xl border border-slate-200/60 dark:border-slate-700">
              {tabs.map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id || (tab.id === 'emulation' && activeTab === 'rules');

                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      if (tab.isEmulation) {
                        onOpenEmulationModal();
                      } else {
                        setActiveTab(tab.id);
                      }
                    }}
                    className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      tab.color === 'red'
                        ? isActive
                          ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-sm'
                          : 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 border border-red-200/60 dark:border-red-800/50'
                        : tab.color === 'blue'
                        ? isActive
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm'
                          : 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/50'
                        : tab.color === 'amber'
                        ? isActive
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm'
                          : 'text-amber-700 dark:text-amber-300 hover:bg-amber-100/80 dark:hover:bg-amber-900/30 border border-amber-200/80 dark:border-amber-700/50'
                        : isActive
                        ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 font-extrabold shadow-sm border border-slate-200/80 dark:border-slate-700'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${
                      tab.color === 'red'
                        ? isActive ? 'text-white' : 'text-red-500 dark:text-red-400'
                        : tab.color === 'blue'
                        ? isActive ? 'text-white' : 'text-blue-500 dark:text-blue-400'
                        : tab.color === 'amber'
                        ? isActive ? 'text-white' : 'text-amber-500 dark:text-amber-400'
                        : isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'
                    }`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* User Auth Section & Dark/Light Toggle */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle Button */}
              <button
                onClick={onToggleTheme}
                title={`Chuyển sang giao diện ${theme === 'dark' ? 'Sáng (Light)' : 'Tối (Dark)'}`}
                className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-400 border border-slate-200 dark:border-slate-700 transition-all shadow-2xs active:scale-95"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              {currentUser ? (
                <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-2xl p-1.5 shadow-2xs">
                  <div className="text-right pl-1 hidden sm:block">
                    <p className="text-xs font-black text-slate-800 dark:text-white leading-tight">{currentUser.name}</p>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full inline-block mt-0.5 shadow-2xs ${getRoleBadgeStyle(currentUser.role)}`}>
                      {currentUser.role}
                    </span>
                  </div>
                  <button
                    onClick={onLogout}
                    title="Đăng xuất tài khoản"
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-xl transition-all"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={onOpenLogin}
                  className="px-3.5 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-1.5"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Đăng Nhập</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Sub-header Tabs (Tablet / Phones) */}
        <div className="lg:hidden flex overflow-x-auto py-2 px-3 space-x-1.5 border-t border-slate-100 dark:border-slate-800 no-scrollbar bg-slate-50/60 dark:bg-slate-900/60">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id || (tab.id === 'emulation' && activeTab === 'rules');

            return (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.isEmulation) {
                    onOpenEmulationModal();
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Floating Bottom Nav for Mobile Screens */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl p-1.5 shadow-xl border border-slate-200/90 dark:border-slate-800 flex items-center justify-around">
        {tabs.slice(0, 4).map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => {
                if (tab.isEmulation) {
                  onOpenEmulationModal();
                } else {
                  setActiveTab(tab.id);
                }
              }}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl text-[10px] font-bold transition-all ${
                isActive ? 'text-blue-600 dark:text-blue-400 font-extrabold scale-105' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px]">{tab.label.split(' ')[0]}</span>
            </button>
          );
        })}
        <button
          onClick={() => setActiveTab('duty')}
          className={`flex flex-col items-center justify-center p-1.5 rounded-xl text-[10px] font-bold transition-all ${
            activeTab === 'duty' ? 'text-blue-600 dark:text-blue-400 font-extrabold scale-105' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[9px]">Trực Nhật</span>
        </button>

        {/* Quick Theme Toggle in Mobile Bottom Bar */}
        <button
          onClick={onToggleTheme}
          title="Đổi giao diện Sáng/Tối"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-[10px] font-bold text-amber-500 dark:text-amber-400 transition-all"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          <span className="text-[9px]">{theme === 'dark' ? 'Sáng' : 'Tối'}</span>
        </button>
      </div>
    </>
  );
};
