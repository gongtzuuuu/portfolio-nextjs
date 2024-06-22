'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TextEffectProps {
  children: ReactNode;
  duration: number;
  delay: number;
}

const TextEffect: React.FC<TextEffectProps> = ({
  children,
  duration,
  delay,
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration, ease: [0.17, 0.67, 0.83, 0.91], delay }}
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: 10, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextEffect;
