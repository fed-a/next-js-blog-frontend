'use client';

import * as SelectRadix from '@radix-ui/react-select';
import React from 'react';

import { cn } from '@/lib/utils';

import { Icon } from '../../icon';

interface SelectItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export const SelectItem = React.forwardRef<any, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectRadix.Item className={cn('select__item', className)} {...props} ref={forwardedRef}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
        <SelectRadix.ItemIndicator className="select__item-indicator">
          <Icon name="arrow-down-mini" size="small" color="primary" />
        </SelectRadix.ItemIndicator>
      </SelectRadix.Item>
    );
  },
);

SelectItem.displayName = 'SelectItem';
