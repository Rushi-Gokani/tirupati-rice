import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BrandVideo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-stone-900">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source
            src="https://video.gumlet.io/67489ec0dad6bb7514b3bf09/69b93a85c8f901eb7545421f/download.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-stone-900/40" />
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={isInView ? {
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            } : {}}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.span
            className="text-gold-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm font-bold block mb-2 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The Process
          </motion.span>

          <motion.h2
            className="text-3xl md:text-6xl font-serif text-white mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Cultivating Excellence
          </motion.h2>

          <motion.p
            className="text-rice-100 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Witness the journey of our grains, from the pristine foothills of the Himalayas to your plate.
            A legacy of patience, purity, and passion.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandVideo;
