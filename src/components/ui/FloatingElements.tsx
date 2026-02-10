import React from 'react';
import { motion } from 'framer-motion';

interface FloatingGrainProps {
  count?: number;
  className?: string;
}

export const FloatingGrains: React.FC<FloatingGrainProps> = ({
  count = 15,
  className = '',
}) => {
  const grains = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {grains.map((grain) => (
        <motion.div
          key={grain.id}
          className="absolute rounded-full bg-gold-400/30"
          style={{
            width: grain.size,
            height: grain.size,
            left: grain.left,
            opacity: grain.opacity,
          }}
          initial={{ y: '100vh' }}
          animate={{
            y: '-10vh',
            x: [0, Math.random() * 30 - 15, 0],
          }}
          transition={{
            y: {
              duration: grain.duration,
              repeat: Infinity,
              delay: grain.delay,
              ease: 'linear',
            },
            x: {
              duration: grain.duration / 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  );
};

export const FloatingShape: React.FC<{
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
}> = ({
  children,
  className = '',
  duration = 4,
  delay = 0,
  yOffset = 10,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export const PulseRing: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className = '', children }) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-full bg-gold-500/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-gold-500/10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 0.5,
        }}
      />
      {children}
    </div>
  );
};
