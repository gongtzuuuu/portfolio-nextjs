import { DEFAULT_BLACK, DEFAULT_YELLOW } from '@/const/color';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const WorkListIndicator = () => {
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
      className={`absolute flex size-12 bg-[#F5F6F4]/70 right-1 bottom-5 rounded-full border border-[${DEFAULT_YELLOW}]`}
    >
      <ChevronDown size={24} className={`text-[${DEFAULT_BLACK}] m-auto`} />
    </motion.div>
  );
};
