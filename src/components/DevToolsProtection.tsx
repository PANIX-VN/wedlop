'use client';

import React, { useEffect } from 'react';

export const DevToolsProtection: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Console Anti-Tampering Security Banner
    const printSecurityBanner = () => {
      try {
        console.clear();
        console.log(
          '%c⚠️ CẢNH BÁO BẢO MẬT HỆ THỐNG!',
          'color: red; font-size: 24px; font-weight: bold; background: #000; padding: 10px 20px; border-radius: 8px;'
        );
        console.log(
          '%cHành vi can thiệp, chỉnh sửa mã nguồn hoặc F12 Console trên website Lớp 11A7 đã bị vô hiệu hóa và ghi lại nhật ký an ninh.',
          'color: #ffaa00; font-size: 13px; font-weight: bold;'
        );
      } catch (e) {}
    };

    printSecurityBanner();

    // 2. Intercept DevTools Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        printSecurityBanner();
        return false;
      }

      // Ctrl + Shift + I (Inspect)
      // Ctrl + Shift + J (Console)
      // Ctrl + Shift + C (Element selector)
      // Ctrl + Shift + K (Firefox Console)
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        ['I', 'i', 'J', 'j', 'C', 'c', 'K', 'k', 'I'].includes(e.key)
      ) {
        e.preventDefault();
        e.stopPropagation();
        printSecurityBanner();
        return false;
      }

      // Ctrl + U (View Page Source)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl + S (Save Page)
      if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // 3. Prevent Right Click Context Menu (Inspect Element)
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click only if user holds Shift key (for accessibility) otherwise block inspect
      if (!e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    window.addEventListener('contextmenu', handleContextMenu, true);

    return () => {
      window.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('contextmenu', handleContextMenu, true);
    };
  }, []);

  return null;
};
