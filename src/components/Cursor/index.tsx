'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useFollowCursor } from '@/hook/use-follow-cursor';

interface CursorProps {}

const Cursor: React.FC<CursorProps> = ({}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowCursor(cursorRef);

  const onMouseMove = (event: MouseEvent) => {
    let x = event.clientX;
    let y = event.clientY;

    setMousePosition({ x, y });
  };

  const onMouseDown = () => {
    if (cursorRef.current) {
      cursorRef.current.classList.add('cursor__outer__clicked');
    }
  };

  const onMouseUp = () => {
    if (cursorRef.current) {
      cursorRef.current.classList.remove('cursor__outer__clicked');
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useEffect(() => {
    window.addEventListener('mousedown', onMouseDown);
    return () => window.removeEventListener('mousedown', onMouseDown);
  }, []);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    return () => window.removeEventListener('mouseup', onMouseUp);
  }, []);

  return (
    <>
      <motion.div className="cursor__outer" ref={cursorRef} style={{ x, y }} />
      <motion.div
        className="cursor__inner"
        ref={cursorInnerRef}
        style={{ x: mousePosition.x, y: mousePosition.y }}
      />
    </>
  );
};

export default Cursor;
