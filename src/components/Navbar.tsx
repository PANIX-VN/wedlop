'use client';

import React from 'react';
import { LayoutGrid, ClipboardCheck, Award, FileSearch, Calendar, Users, LogIn, LogOut, ExternalLink, ShieldCheck } from 'lucide-react';
import { AuthUser } from '../data/types';
import { EMULATION_SHEET_URL } from '../data/accounts';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: AuthUser | null;
  onOpenLogin: () => void;
  onLogout: () => void;
  totalStudents: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenLogin,
  onLogout,
  totalStudents,
}) => {
  const tabs = [
    { id: 'seating', label: 'Sơ Đồ Chỗ Ngồi', icon: LayoutGrid, external: false },
    { id: 'attendance', label: 'Điểm Danh', icon: ClipboardCheck, external: false },
    { id: 'emulation', label: 'Điểm Thi Đua', icon: Award, external: true, url: EMULATION_SHEET_URL },
    { id: 'rules', label: 'Tra Cứu Lỗi', icon: FileSearch, external: false },
    { id: 'duty', label: 'Lịch Trực Nhật', icon: Calendar, external: false },
  ];

  const getRoleBadgeClass = (role?: string) => {
    switch (role) {
      case 'GVCN':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'LỚP TRƯỞNG':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'LỚP PHÓ HỌC TẬP':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'LỚP PHÓ LAO ĐỘNG':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'LỚP PHÓ KỈ LUẬT':
        return 'bg-sky-100 text-sky-800 border-sky-300';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-300';
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-md">
              11A7
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800 leading-tight">
                QUẢN LÝ LỚP 11A7
              </h1>
              <p className="text-xs text-slate-500 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-blue-500" /> Sĩ số: <span className="font-semibold text-slate-700">{totalStudents}</span> học sinh
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex space-x-1">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              if (tab.external) {
                return (
                  <a
                    key={tab.id}
                    href={tab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-amber-700 hover:bg-amber-50 transition-all border border-transparent hover:border-amber-200"
                    title="Mở Google Sheet theo dõi điểm thi đua lớp 11A7"
                  >
                    <Icon className="w-4 h-4 text-amber-600" />
                    <span>{tab.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-500 ml-0.5" />
                  </a>
                );
              }

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold shadow-sm border border-blue-200/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Auth Section */}
          <div className="flex items-center space-x-3">
            {currentUser ? (
              <div className="flex items-center space-x-2.5 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5">
                <div className="text-right">
                  <p className="text-xs font-bold text-slate-800 leading-tight">{currentUser.name}</p>
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded border ${getRoleBadgeClass(currentUser.role)}`}>
                    {currentUser.role}
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  title="Đăng xuất"
                  className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <LogIn className="w-4 h-4" />
                <span>Đăng Nhập</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="md:hidden flex overflow-x-auto py-2 space-x-1 border-t border-slate-100 no-scrollbar">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            if (tab.external) {
              return (
                <a
                  key={tab.id}
                  href={tab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-800 whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label} 🔗</span>
                </a>
              );
            }

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
                  isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
