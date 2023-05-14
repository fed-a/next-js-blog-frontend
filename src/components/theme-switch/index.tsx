'use client';

import { useTheme } from 'next-themes';
import React, { memo, useCallback } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { useSsr } from '@/lib/hooks';

import { Icon } from '../core/icon';
import { Skeleton } from '../core/skeleton';

import './switch.css';

function ThemeSwitchComponent() {
  const { isMounted } = useSsr();
  const { theme, setTheme } = useTheme();

  const handleChange = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [setTheme, theme]);

  // TODO: определение темы при загрузке
  if (!isMounted) {
    return (
      <div className="h-6 w-6">
        <SkeletonTheme
          baseColor="rgba(15, 16, 28, 0.1)"
          highlightColor="rgba(240, 240, 255, 0.2)"
          borderRadius={12}
          height={24}
          duration={1}
        >
          <Skeleton />
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <button
      onClick={handleChange}
      className="block h-6 w-6"
      type="button"
      aria-label="Toggle theme"
    >
      <Icon name="sun" darkName="moon-stars" size="large" color="purple" />
    </button>
  );
}

export const ThemeSwitch = memo(ThemeSwitchComponent);
