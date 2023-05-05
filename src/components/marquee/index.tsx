'use client';

import React, { useEffect, useRef } from 'react';

import './marquee.css';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  repeatTimes?: number;
}

export function Marquee(props: MarqueeProps) {
  const { children, speed = 1, direction = 'left', repeatTimes = 3 } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const directionCoefficient = direction === 'left' ? 1 : -1;
  const dataSpeed = String(speed * directionCoefficient);
  const initialTransform = `translateX(${directionCoefficient * 120}vw)`;

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.setAttribute('style', `transform: translateX(-70vh)`);
    }
  }, [directionCoefficient]);

  return (
    <div ref={wrapperRef} className="af-marquee-wrapper" style={{ transform: initialTransform }}>
      <div
        className="flex flex-nowrap gap-4 whitespace-nowrap"
        data-scroll
        data-scroll-speed={dataSpeed}
        data-scroll-direction="horizontal"
      >
        {new Array(repeatTimes).fill(0).map((_, index) => (
          <React.Fragment key={index}>{children}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
