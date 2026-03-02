import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroVideo from './Premium Rice Hero Section.mp4'

// Floating grain particles component
const FloatingGrains = () => {
  const grains = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 15,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {grains.map((grain) => (
        <motion.div
          key={grain.id}
          className="absolute rounded-full bg-gold-300/40"
          style={{
            width: grain.size,
            height: grain.size,
            left: grain.left,
            opacity: grain.opacity,
          }}
          initial={{ y: '110vh' }}
          animate={{
            y: '-10vh',
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            y: {
              duration: grain.duration,
              repeat: Infinity,
              delay: grain.delay,
              ease: 'linear',
            },
            x: {
              duration: grain.duration / 3,
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

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Floating grain particles */}
      <FloatingGrains />

      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
          poster="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-transparent to-stone-900/50" />
      </motion.div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6 max-w-5xl mx-auto text-white z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
        >
          <motion.div
            className="h-[1px] w-8 md:w-12 bg-gold-500"
            initial={{ width: 0 }}
            animate={{ width: '3rem' }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <span className="text-gold-500 tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm font-bold uppercase whitespace-nowrap">
            Est. 1985 • Premium Exports
          </span>
          <motion.div
            className="h-[1px] w-8 md:w-12 bg-gold-500"
            initial={{ width: 0 }}
            animate={{ width: '3rem' }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold mb-6 md:mb-8 leading-tight md:leading-none tracking-tight drop-shadow-xl text-rice-50"
        >
          {'TIRUPATI'.split('').map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.05,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-2xl text-rice-100 max-w-xs md:max-w-3xl mb-8 md:mb-12 font-light leading-relaxed font-serif italic drop-shadow-md"
        >
          "The soul of the harvest, delivered to the world."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto px-6 md:px-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/products"
              className="block px-8 py-4 bg-white text-stone-900 w-full md:w-auto min-w-[200px] font-medium tracking-widest uppercase hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-gold-500/20 text-sm md:text-base border border-transparent relative overflow-hidden group"
            >
              <span className="relative z-10">Discover Brands</span>
              <motion.div
                className="absolute inset-0 bg-gold-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="block px-8 py-4 border border-white text-white w-full md:w-auto min-w-[200px] font-medium tracking-widest uppercase hover:bg-white hover:text-stone-900 transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
            >
              Export Inquiry
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-white/70 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={28} className="md:w-8 md:h-8" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent z-0" />
    </div>
  );
};

export default Hero;
