export const SIZE = {
  large: 'w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]',
  medium: 'w-5 h-5 min-w-[1.25rem] min-h-[1.25rem]',
  small: 'w-3 h-3 min-w-[0.75rem] min-h-[0.75rem]',
};

export type Size = keyof typeof SIZE;

export type Color = 'primary' | 'secondary' | 'accent';
