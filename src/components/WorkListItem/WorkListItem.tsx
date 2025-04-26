'use client';
import { motion } from 'framer-motion';

type WorkListItemProps = {
  label: string;
  date: string;
  type: string;
  onHoverStart: () => void;
  onClick: () => void;
};

export const WorkListItem: React.FC<WorkListItemProps> = ({
  label,
  date,
  type,
  onHoverStart,
  onClick,
}) => {
  return (
    <div className="[&:not(:last-child)]:border-b pb-4 flex flex-col gap-3">
      <motion.h3
        initial={{ scaleX: 1, transformOrigin: 'left center' }}
        whileHover={{ scaleX: 1.2, transformOrigin: 'left center' }}
        transition={{ duration: 0.1, ease: 'easeInOut' }}
        onHoverStart={onHoverStart}
        onClick={onClick}
        className="w-fit text-3xl font-bold cursor-pointer"
      >
        {label}
      </motion.h3>
      <p className="text-xs font-light mr-2">{`${date} / ${type}`}</p>
    </div>
  );
};
