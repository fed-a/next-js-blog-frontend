'use client';

import * as RadixSelect from '@radix-ui/react-select';
import { useCallback, useState } from 'react';

import { Locale } from '@/lib/i18n';

import { Icon } from '../../icon';
import { getDefaultPlaceholder } from '../lib';
import { OptionModel } from '../types';

import { SelectItem } from './select-item';
import './select.css';

interface SelectProps {
  locale: Locale;
  name: string;
  options: OptionModel[];
  defaultValue?: string;
  value?: string;
  onChange?: (_value: string) => void;
  defaultOpen?: boolean;
  dir?: 'rtl' | 'ltr';
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  'aria-label'?: string;
}

export function Select(props: SelectProps) {
  const {
    name,
    defaultValue,
    value,
    options,
    onChange,
    defaultOpen,
    dir = 'ltr',
    disabled,
    required,
    placeholder = getDefaultPlaceholder(props.locale),
    'aria-label': ariaLabel,
  } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen ?? false);

  const handleOpen = useCallback((opened: boolean) => {
    setIsOpen(opened);
  }, []);

  return (
    <RadixSelect.Root
      value={value}
      name={name}
      disabled={disabled}
      defaultOpen={defaultOpen}
      required={required}
      open={isOpen}
      onValueChange={onChange}
      onOpenChange={handleOpen}
      defaultValue={defaultValue}
      dir={dir}
    >
      <RadixSelect.Trigger className="af-select__trigger" aria-label={ariaLabel ?? name}>
        <RadixSelect.Value placeholder={placeholder} asChild>
          <div>{options.find((o) => o.value === value)?.label || placeholder}</div>
        </RadixSelect.Value>
        <RadixSelect.Icon className="af-select__trigger-icon">
          <Icon name="arrow-down-mini" size="medium" color="primary" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content className="af-select__content">
          <RadixSelect.ScrollUpButton className="af-select__scroll-button">
            <Icon name="arrow-down-mini" size="small" color="primary" />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className="af-select__viewport">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="af-select__scroll-button">
            <Icon name="arrow-down" size="small" color="primary" />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
