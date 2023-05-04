export const SIZE = {
  large: 'w-6 h-6 min-w-[1.5rem] min-h-[1.5rem]',
  medium: 'w-5 h-5 min-w-[1.25rem] min-h-[1.25rem]',
  small: 'w-3 h-3 min-w-[0.75rem] min-h-[0.75rem]',
};

export type Size = keyof typeof SIZE;

const colors = {
  black: '#0F101C',
  white: '#F0F0FF',
  purple: '#4200F5',
  'lighter-purple': '#4806FF',
  'darker-gray': '#292E3A',
  gray: '#4C515E',
};

export type Color = keyof typeof colors;
