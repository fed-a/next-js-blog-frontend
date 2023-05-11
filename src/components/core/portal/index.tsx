'use client';

import dynamic from 'next/dynamic';

import { PortalProps } from './types';

const PortalComponent = dynamic(() => import('./portal').then((mod) => mod.PortalComponent), {
  ssr: false,
}) as any; // TODO: something's wrong with ReactNode

export function Portal({ children }: PortalProps) {
  return <PortalComponent>{children}</PortalComponent>;
}
