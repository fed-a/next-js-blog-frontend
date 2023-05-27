import React from 'react';

import { Children } from '../types';

import './locomotive-scroll.css';

export default function AboutLayout({ children }: Children) {
  return <div className="container">{children}</div>;
}
