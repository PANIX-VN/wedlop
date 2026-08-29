'use client';

import { useState, useEffect } from 'react';

export type ScreenType = 'mobile-portrait' | 'mobile-landscape' | 'tablet' | 'desktop' | 'ultrawide';

export interface ScreenLayoutInfo {
  width: number;
  height: number;
  isPortrait: boolean;
  isLandscape: boolean;
  screenType: ScreenType;
  gridCols: number; // recommended grid columns for responsive lists
  isCompactMobile: boolean;
}

export function useScreenLayout(): ScreenLayoutInfo {
  const [layoutInfo, setLayoutInfo] = useState<ScreenLayoutInfo>({
    width: 1200,
    height: 800,
    isPortrait: false,
    isLandscape: true,
    screenType: 'desktop',
    gridCols: 3,
    isCompactMobile: false,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isPortrait = height > width;
      const isLandscape = width >= height;

      let screenType: ScreenType = 'desktop';
      let gridCols = 3;
      let isCompactMobile = false;

      if (width < 640) {
        screenType = isPortrait ? 'mobile-portrait' : 'mobile-landscape';
        gridCols = isPortrait ? 1 : 2;
        isCompactMobile = true;
      } else if (width < 1024) {
        screenType = 'tablet';
        gridCols = 2;
      } else if (width < 1536) {
        screenType = 'desktop';
        gridCols = 3;
      } else {
        screenType = 'ultrawide';
        gridCols = 4;
      }

      setLayoutInfo({
        width,
        height,
        isPortrait,
        isLandscape,
        screenType,
        gridCols,
        isCompactMobile,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return layoutInfo;
}
