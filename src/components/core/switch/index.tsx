'use client';

import * as RadixSwitch from '@radix-ui/react-switch';
import React from 'react';

import './switch.css';

export function Switch() {
  return (
    <RadixSwitch.Root className="af-switch">
      <RadixSwitch.Thumb className="af-switch__thumb" />
    </RadixSwitch.Root>
  );
}
