import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = '',
  delay = 0,
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-50px' });

  return (
    <span ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        className="inline-block"
        initial={{ y: '100%' }}
        animate={isInView ? { y: 0 } : { y: '100%' }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const WordReveal: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};

export default TextReveal;
