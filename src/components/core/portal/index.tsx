'use client';

import dynamic from 'next/dynamic';

import { PortalProps } from './types';

const PortalComponent = dynamic(() => import('./portal').then((mod) => mod.PortalComponent), {
  ssr: false,
});

export function Portal({ children }: PortalProps) {
  // TODO: сломались типы при апдейте
  // @ts-ignore
  return <PortalComponent>{children}</PortalComponent>;
}
