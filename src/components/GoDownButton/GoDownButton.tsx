'use client';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const GoDownButton = () => {
  return (
    <motion.div
      animate={['initial']}
      whileHover={['grow']}
      variants={{
        rotate: {
          rotate: [null, -5, 5, 0],
          transition: {
            duration: 10,
          },
        },
        initial: {
          y: [10, 20],
          rotate: 0,
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          },
        },
      }}
      className="absolute flex w-12 h-12 bg-[#F5F6F4]/70 right-1 bottom-5 rounded-full border"
    >
      <ChevronDown size={24} className="text-[#1F1F1F] m-auto" />
    </motion.div>
  );
};
