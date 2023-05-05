import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { PortalProps } from './types';

export function PortalComponent({ children }: PortalProps) {
  const container = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
}
