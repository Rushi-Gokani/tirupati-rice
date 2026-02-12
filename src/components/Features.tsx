import React from 'react';
import { Sprout, Award, Sun, Droplets } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: <Sprout className="w-8 h-8" />,
    title: "100% Organic",
    description: "Grown without synthetic pesticides or fertilizers, ensuring pure, natural goodness in every grain."
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Grade",
    description: "Hand-selected grains that meet the highest standards of length, color, and aroma."
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Sustainably Farmed",
    description: "We use eco-friendly farming practices that conserve water and protect soil health."
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Hygienically Processed",
    description: "Processed in state-of-the-art facilities to maintain nutritional value and ensure safety."
  }
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#005e2a] relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"
        animate={isInView ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-stone-400/5 rounded-full blur-3xl"
        animate={isInView ? {
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-gold-500 tracking-widest uppercase text-xs font-bold mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Promise
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-serif text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose Tirupati
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gold-500 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center text-center group p-4 md:p-0"
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-[#005e2a] transition-colors duration-300 shadow-sm border border-white/20 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {feature.icon}

                {/* Pulse ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-gold-500/0 group-hover:border-gold-500/30"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>

              <motion.h3
                className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-white/80 leading-relaxed text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
