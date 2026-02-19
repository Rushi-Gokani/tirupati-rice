import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeInImage from './ui/FadeInImage';

const GlobalReach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const countries = [
    { name: 'USA & Canada', delay: 0 },
    { name: 'United Kingdom', delay: 0.1 },
    { name: 'UAE & Saudi Arabia', delay: 0.2 },
    { name: 'Australia', delay: 0.3 },
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-rice-50 relative overflow-hidden"
    >
      {/* Decorative Map Background (Abstract) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl"
        animate={isInView ? {
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-stone-400/5 rounded-full blur-3xl"
        animate={isInView ? {
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        } : {}}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        <motion.div 
          className="md:w-1/2 order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.span 
            className="text-gold-600 tracking-widest uppercase text-xs md:text-sm font-bold mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Global Presence
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-stone-900 mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From Our Fields to the World
          </motion.h2>
          <motion.p 
            className="text-stone-600 text-base md:text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tirupati Rice is a trusted name in international markets. We export premium quality grains to the Middle East, Europe, and North America, adhering to the strictest international food safety standards.
          </motion.p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-8 md:mb-10">
            {countries.map((country, index) => (
              <motion.li 
                key={index}
                className="flex items-center gap-2 text-stone-700 font-medium text-sm md:text-base group cursor-default"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + country.delay }}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-gold-500 rounded-full"
                  whileHover={{ scale: 1.5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                />
                <span className="group-hover:text-gold-600 transition-colors">{country.name}</span>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-stone-900 text-white hover:bg-gold-500 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-medium w-full md:w-auto text-center relative overflow-hidden group"
            >
              <span className="relative z-10">Become a Distributor</span>
              <motion.div
                className="absolute inset-0 bg-gold-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 relative order-1 md:order-2 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className="relative z-10 rounded-lg overflow-hidden shadow-xl md:shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <FadeInImage 
              src="https://images.unsplash.com/photo-1620052087057-bfd8235f5874?q=80&w=1000&auto=format&fit=crop" 
              alt="Rice Export Shipping" 
              className="w-full h-auto object-cover max-h-[400px] md:max-h-none"
              containerClassName="w-full h-auto"
            />
            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Decorative Element */}
          <motion.div 
            className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-full h-full border-2 border-gold-500/30 rounded-lg -z-0 hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          
          {/* Floating badge */}
          <motion.div
            className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg z-20"
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <div className="text-2xl md:text-3xl font-serif font-bold text-stone-900">25+</div>
            <div className="text-xs text-stone-500 uppercase tracking-wider">Countries</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;
