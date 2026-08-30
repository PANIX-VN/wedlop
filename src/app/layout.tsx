import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Website Quản Lý Lớp 11A7',
  description: 'Hệ thống sơ đồ chỗ ngồi, điểm danh, thi đua, tra cứu lỗi và lịch trực nhật lớp 11A7',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-slate-100 min-h-screen text-slate-900 antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
