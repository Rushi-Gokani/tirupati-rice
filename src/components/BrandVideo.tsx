import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

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
          poster="https://images.unsplash.com/photo-1536622308103-68d7452d3a3d?q=80&w=2000&auto=format&fit=crop"
        >
          <source 
            src="https://videos.pexels.com/video-files/5428807/5428807-hd_1920_1080_30fps.mp4" 
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
          <motion.div 
            className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10 mx-auto mb-4 md:mb-6 group cursor-pointer hover:bg-gold-500/20 hover:border-gold-500 transition-all duration-300 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white ml-1 group-hover:text-gold-400 group-hover:fill-gold-400 transition-colors" />
            
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/20"
              animate={isInView ? {
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-white/10"
              animate={isInView ? {
                scale: [1, 1.8, 1],
                opacity: [0.3, 0, 0.3],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 0.5,
              }}
            />
          </motion.div>
          
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
