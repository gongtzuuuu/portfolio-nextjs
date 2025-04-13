import { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type AnimationWrapperProps = PropsWithChildren<{
  id: string;
}>;

const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const AnimationWrapper: FC<AnimationWrapperProps> = ({
  id,
  children,
}) => (
  <motion.div
    id={id}
    variants={menuItemVariants}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.div>
);
