import anime, { AnimeInstance } from 'animejs';
import { useEffect, useRef } from 'react';

export function useAnimation() {
  const animation = useRef<AnimeInstance | null>(null);
  const targets = useRef(null);

  useEffect(() => {
    animation.current = anime({});
  }, []);

  return {
    animation,
    targets,
  };
}
