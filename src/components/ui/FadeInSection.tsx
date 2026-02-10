import React from 'react';
import { motion, Variants } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 };
      case 'down':
        return { y: -40, x: 0 };
      case 'left':
        return { x: 40, y: 0 };
      case 'right':
        return { x: -40, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
      default:
        return { y: 40, x: 0 };
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
