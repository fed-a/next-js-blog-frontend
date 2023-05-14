import React from 'react';

import { Children } from '../types';

export default function BlogLayout({ children }: Children) {
  return <div className="container">{children}</div>;
}
