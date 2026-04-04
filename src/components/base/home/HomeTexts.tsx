import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren;

const Title = ({ children }: TitleProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="text-3xl md:text-4xl font-bold text-center"
    >
      {children}
    </motion.div>
  );
};

type DescriptionProps = PropsWithChildren & { delay: number };

const Description = ({ children, delay }: DescriptionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.91], delay }}
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: 10, opacity: 0 },
    }}
    className="text-center"
  >
    {children}
  </motion.div>
);

type LinkProps = PropsWithChildren & { delay: number };

const Link = ({ children, delay }: LinkProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.17, 0.67, 0.83, 0.91], delay }}
    variants={{
      visible: { y: 0, opacity: 1 },
      hidden: { y: 10, opacity: 0 },
    }}
  >
    {children}
  </motion.div>
);

export const HomeTexts = {
  Title,
  Description,
  Link,
};
