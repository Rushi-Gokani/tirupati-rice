import React from 'react';
import { Globe, Users, Award, Leaf } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayValue, setDisplayValue] = useState('0');
  
  // Parse numeric value and suffix
  const numericMatch = value.match(/^([0-9]+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = value.replace(/^[0-9]+/, '');

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOut * numericValue);
        
        setDisplayValue(current + suffix);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(value);
        }
      };
      
      const timer = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, numericValue, suffix, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center space-y-2 md:space-y-4 group"
    >
      <motion.div 
        className="bg-stone-800 p-3 md:p-4 rounded-full mb-2 relative"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.2, type: 'spring', stiffness: 200 }}
        >
          {icon}
        </motion.div>
        {/* Pulse ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold-500/30"
          animate={isInView ? {
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: delay + 0.5,
          }}
        />
      </motion.div>
      <motion.div 
        className="text-3xl md:text-5xl font-serif font-bold text-white"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.1, type: 'spring', stiffness: 200 }}
      >
        {displayValue}
      </motion.div>
      <motion.div 
        className="text-stone-400 uppercase tracking-widest text-[10px] md:text-xs font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

const stats = [
  {
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8 text-gold-500" />,
    value: "25+",
    label: "Countries Served"
  },
  {
    icon: <Award className="w-6 h-6 md:w-8 md:h-8 text-gold-500" />,
    value: "40",
    label: "Years of Legacy"
  },
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-gold-500" />,
    value: "10k+",
    label: "Partner Farmers"
  },
  {
    icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-gold-500" />,
    value: "100%",
    label: "Organic Certified"
  }
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-20 bg-stone-900 text-white border-y border-stone-800 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-500/5 via-transparent to-gold-500/5"
        animate={isInView ? {
          x: ['-100%', '100%'],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
