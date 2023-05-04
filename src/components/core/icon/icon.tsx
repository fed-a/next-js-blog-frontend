import classNames from 'classnames';

import { Color, SIZE, Size } from './lib';

interface IconProps {
  name: string;
  size: Size;
  color: Color;
}

export function Icon({ name, size = 'large', color }: IconProps) {
  return (
    <span
      style={{ backgroundColor: color ? `var(--${color})` : 'currentColor' }}
      className={classNames('inline-block', name, SIZE[size])}
    />
  );
}
