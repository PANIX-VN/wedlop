'use client';

import React, { useState } from 'react';
import { Student, RuleItem, EmulationLog } from '../../data/types';
import { Award, PlusCircle, TrendingUp, TrendingDown, Search, History, ShieldAlert, Star, X, Check } from 'lucide-react';

interface EmulationManagerProps {
  students: Student[];
  rules: RuleItem[];
  logs: EmulationLog[];
  onAddLog: (log: Omit<EmulationLog, 'id'>) => void;
  onDeleteLog: (id: string) => void;
}

export const EmulationManager: React.FC<EmulationManagerProps> = ({
  students,
  rules,
  logs,
  onAddLog,
  onDeleteLog,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState<string>('');
  const [selectedRuleId, setSelectedRuleId] = useState<string>('');
  const [customPoints, setCustomPoints] = useState<number>(0);
  const [customTitle, setCustomTitle] = useState<string>('');
  const [logNote, setLogNote] = useState<string>('');
  const [viewHistoryStudent, setViewHistoryStudent] = useState<Student | null>(null);

  // Compute student totals
  const studentScores = React.useMemo(() => {
    const BASE_SCORE = 100;
    const scores = new Map<string, { total: number; merits: number; demerits: number }>();

    students.forEach(s => {
      scores.set(s.id, { total: BASE_SCORE, merits: 0, demerits: 0 });
    });

    logs.forEach(log => {
      const current = scores.get(log.studentId);
      if (current) {
        current.total += log.points;
        if (log.points > 0) current.merits += log.points;
        else current.demerits += Math.abs(log.points);
      }
    });

    return scores;
  }, [students, logs]);

  // Ranked students list
  const rankedStudents = React.useMemo(() => {
    return [...students]
      .map(st => ({
        student: st,
        scoreInfo: studentScores.get(st.id) || { total: 100, merits: 0, demerits: 0 },
      }))
      .sort((a, b) => b.scoreInfo.total - a.scoreInfo.total);
  }, [students, studentScores]);

  const filteredRanked = rankedStudents.filter(r =>
    r.student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRuleSelect = (ruleId: string) => {
    setSelectedRuleId(ruleId);
    if (ruleId === 'custom') return;
    const rule = rules.find(r => r.id === ruleId);
    if (rule) {
      setCustomPoints(rule.points);
      setCustomTitle(rule.title);
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId) return;

    const student = students.find(s => s.id === selectedStudentId);
    if (!student) return;

    onAddLog({
      studentId: student.id,
      studentName: student.name,
      ruleTitle: customTitle || 'Điểm điều chỉnh',
      points: customPoints,
      date: new Date().toISOString().split('T')[0],
      note: logNote,
    });

    setIsAddModalOpen(false);
    setSelectedStudentId('');
    setSelectedRuleId('');
    setCustomPoints(0);
    setCustomTitle('');
    setLogNote('');
  };

  const getConductBadge = (score: number) => {
    if (score >= 110) return { label: 'Xuất sắc', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
    if (score >= 90) return { label: 'Tốt', color: 'bg-blue-100 text-blue-800 border-blue-300' };
    if (score >= 70) return { label: 'Khá', color: 'bg-amber-100 text-amber-800 border-amber-300' };
    return { label: 'Yếu / Nhắc nhở', color: 'bg-rose-100 text-rose-800 border-rose-300' };
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Actions */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-800">Điểm Thi Đua Lớp 11A7</h2>
            <p className="text-xs text-slate-500">Bảng xếp hạng nề nếp, điểm cộng & trừ theo quy định</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm học sinh..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
          >
            <PlusCircle className="w-4 h-4" /> Ghi Điểm Cộng / Trừ
          </button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> Bảng Xếp Hạng Thi Đua ({filteredRanked.length} học sinh)
          </h3>
          <span className="text-[11px] text-slate-400">Điểm khởi điểm ban đầu: 100đ</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold uppercase border-b border-slate-200">
                <th className="py-3 px-4 w-16 text-center">Hạng</th>
                <th className="py-3 px-4">Họ và Tên</th>
                <th className="py-3 px-4 text-center">Tổng Điểm</th>
                <th className="py-3 px-4 text-center">Điểm Cộng (+)</th>
                <th className="py-3 px-4 text-center">Điểm Trừ (-)</th>
                <th className="py-3 px-4 text-center">Đánh Giá Nề Nếp</th>
                <th className="py-3 px-4 text-center">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs font-medium">
              {filteredRanked.map((item, idx) => {
                const badge = getConductBadge(item.scoreInfo.total);

                return (
                  <tr key={item.student.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 text-center font-bold">
                      {idx === 0 ? (
                        <span className="w-6 h-6 rounded-full bg-amber-400 text-amber-950 font-extrabold text-xs inline-flex items-center justify-center shadow-xs">
                          1
                        </span>
                      ) : idx === 1 ? (
                        <span className="w-6 h-6 rounded-full bg-slate-300 text-slate-800 font-extrabold text-xs inline-flex items-center justify-center shadow-xs">
                          2
                        </span>
                      ) : idx === 2 ? (
                        <span className="w-6 h-6 rounded-full bg-amber-700 text-amber-100 font-extrabold text-xs inline-flex items-center justify-center shadow-xs">
                          3
                        </span>
                      ) : (
                        <span className="text-slate-400 font-semibold">{idx + 1}</span>
                      )}
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-800">
                      {item.student.name}
                    </td>
                    <td className="py-3 px-4 text-center font-extrabold text-sm text-slate-900">
                      {item.scoreInfo.total} đ
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-emerald-600">
                      +{item.scoreInfo.merits}
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-rose-600">
                      -{item.scoreInfo.demerits}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${badge.color}`}>
                        {badge.label}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => setViewHistoryStudent(item.student)}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-[11px] font-semibold transition-all inline-flex items-center gap-1"
                      >
                        <History className="w-3.5 h-3.5 text-slate-500" /> Nhật ký
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Score Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="font-bold text-slate-800 text-base">Ghi Nhận Điểm Thi Đua</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              {/* Select Student */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Chọn Học Sinh:</label>
                <select
                  required
                  value={selectedStudentId}
                  onChange={e => setSelectedStudentId(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">-- Chọn học sinh 11A7 --</option>
                  {students.map(s => (
                    <option key={s.id} value={s.id}>
                      #{s.stt} - {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Preset Rule from docx */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Chọn Quy Định (File Lỗi.docx):</label>
                <select
                  value={selectedRuleId}
                  onChange={e => handleRuleSelect(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">-- Tùy chỉnh trực tiếp --</option>
                  {rules.map(r => (
                    <option key={r.id} value={r.id}>
                      [{r.category}] {r.title} ({r.points > 0 ? `+${r.points}` : r.points}đ/{r.unit})
                    </option>
                  ))}
                </select>
              </div>

              {/* Title & Points */}
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tên vi phạm / khen thưởng:</label>
                  <input
                    type="text"
                    required
                    placeholder="VD: Đi muộn, Làm BT tốt..."
                    value={customTitle}
                    onChange={e => setCustomTitle(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Số điểm (+/-):</label>
                  <input
                    type="number"
                    required
                    value={customPoints}
                    onChange={e => setCustomPoints(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Ghi chú chi tiết (nếu có):</label>
                <input
                  type="text"
                  placeholder="Ghi chú thêm về hoàn cảnh..."
                  value={logNote}
                  onChange={e => setLogNote(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="pt-2 flex space-x-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs shadow-md transition-all"
                >
                  Xác Nhận Ghi Điểm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* History Drawer Modal */}
      {viewHistoryStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div>
                <h3 className="font-bold text-slate-800 text-base">Nhật Ký Thi Đua: {viewHistoryStudent.name}</h3>
                <p className="text-xs text-slate-500">Mã STT: #{viewHistoryStudent.stt}</p>
              </div>
              <button
                onClick={() => setViewHistoryStudent(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
              {logs.filter(l => l.studentId === viewHistoryStudent.id).length === 0 ? (
                <div className="p-6 text-center text-slate-400 text-xs font-medium">
                  Chưa có lượt cộng/trừ điểm nào cho học sinh này.
                </div>
              ) : (
                logs
                  .filter(l => l.studentId === viewHistoryStudent.id)
                  .map(log => (
                    <div
                      key={log.id}
                      className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 flex items-center justify-between text-xs"
                    >
                      <div>
                        <p className="font-bold text-slate-800">{log.ruleTitle}</p>
                        <p className="text-[10px] text-slate-400">{log.date} {log.note ? `• ${log.note}` : ''}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span
                          className={`font-extrabold text-xs px-2 py-0.5 rounded-lg ${
                            log.points > 0
                              ? 'bg-emerald-100 text-emerald-700'
                              : 'bg-rose-100 text-rose-700'
                          }`}
                        >
                          {log.points > 0 ? `+${log.points}` : log.points}đ
                        </span>
                        <button
                          onClick={() => onDeleteLog(log.id)}
                          className="text-slate-400 hover:text-red-600"
                          title="Xóa lượt này"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
