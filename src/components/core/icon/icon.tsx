'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import './icons.css';
import { Color, SIZE, Size } from './lib';
import { IconName } from './types';

interface IconProps {
  name: IconName;
  size: Size;
  color: Color;
  darkName?: IconName;
}

export function Icon({ name, size = 'large', darkName, color }: IconProps) {
  const { resolvedTheme: theme } = useTheme();
  const [iconName, setIconName] = useState(name);

  useEffect(() => {
    setIconName(theme === 'dark' ? darkName ?? name : name);
  }, [darkName, name, theme]);

  return (
    <span
      style={{ backgroundColor: color ? `var(--themed-color-${color})` : 'currentColor' }}
      className={cn('icon inline-block', `i-${iconName}`, SIZE[size])}
      data-theme
    />
  );
}
