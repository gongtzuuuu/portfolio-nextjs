import { RefObject, useEffect } from 'react';
import { useMotionValue, useSpring, frame } from 'framer-motion';

const spring = { damping: 5, stiffness: 50, restDelta: 0.001 };

export const useFollowCursor = (ref: RefObject<HTMLElement>) => {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);

  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      frame.read(() => {
        xPoint.set(clientX - element.offsetLeft - 8);
        yPoint.set(clientY - element.offsetTop - 8);
      });
    };

    window.addEventListener('pointermove', handleMouseMove);

    return () => window.removeEventListener('pointermove', handleMouseMove);
  }, []);

  return { x, y };
};
