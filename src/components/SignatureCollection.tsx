import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import FadeInImage from './ui/FadeInImage';

const SignatureCollection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-rice-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-gold-600 tracking-widest uppercase text-xs md:text-sm font-bold mb-3 block"
        >
          Excellence in Every Grain
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-6xl font-serif text-stone-900 mb-4 md:mb-6"
        >
          Our Two Worlds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light"
        >
          Tirupati specializes in two distinct premium varieties, each cultivated to perfection for specific culinary experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Brand 1: Royal Selection */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative group h-[500px] md:h-[80vh] overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <FadeInImage
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop"
              alt="Tirupati Royal Basmati Rice"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
          </motion.div>
          <div className="absolute inset-0 bg-stone-900/50 md:bg-stone-900/40 md:group-hover:bg-stone-900/30 transition-colors duration-500" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 text-white z-10">
            <motion.div
              className="border border-white/30 p-6 md:p-16 backdrop-blur-sm bg-black/20 md:bg-black/10 transition-all duration-500 md:group-hover:bg-black/30 md:group-hover:border-white/50 max-w-lg transform w-full md:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <motion.span
                className="text-gold-400 tracking-widest uppercase text-xs font-bold mb-2 md:mb-4 block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Premium Selection
              </motion.span>
              <motion.h3
                className="text-3xl md:text-6xl font-serif mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Tirupati
              </motion.h3>
              <motion.p
                className="text-stone-200 mb-6 md:mb-10 text-base md:text-lg font-light leading-relaxed line-clamp-3 md:line-clamp-none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                The finest aged Basmati. Extra-long grains that elongate upon cooking, offering an aromatic scent that defines luxury dining.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/brand/tirupati"
                  className="inline-block px-6 py-3 md:px-8 md:py-3 bg-white text-stone-900 hover:bg-gold-500 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-medium relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">View Details</span>
                  <motion.div
                    className="absolute inset-0 bg-gold-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Brand 2: Gold Selection */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative group h-[500px] md:h-[80vh] overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <FadeInImage
              src="https://img.freepik.com/premium-photo/rice-paddy-golden-yellow-sack-white_926199-2118977.jpg" alt="Tirupati Gold Premium Rice"
              className="w-full h-full object-cover"
              containerClassName="w-full h-full"
            />
          </motion.div>
          <div className="absolute inset-0 bg-stone-900/50 md:bg-stone-900/40 md:group-hover:bg-stone-900/30 transition-colors duration-500" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12 text-white z-10">
            <motion.div
              className="border border-white/30 p-6 md:p-16 backdrop-blur-sm bg-black/20 md:bg-black/10 transition-all duration-500 md:group-hover:bg-black/30 md:group-hover:border-white/50 max-w-lg transform w-full md:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <motion.span
                className="text-gold-400 tracking-widest uppercase text-xs font-bold mb-2 md:mb-4 block"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Everyday Premium
              </motion.span>
              <motion.h3
                className="text-3xl md:text-6xl font-serif mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Mannat
              </motion.h3>
              <motion.p
                className="text-stone-200 mb-6 md:mb-10 text-base md:text-lg font-light leading-relaxed line-clamp-3 md:line-clamp-none"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Premium parboiled rice. Golden hues, rich nutritional value, and versatile texture perfect for daily global cuisine.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/brand/mannat"
                  className="inline-block px-6 py-3 md:px-8 md:py-3 bg-white text-stone-900 hover:bg-gold-500 hover:text-white transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-medium relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">View Details</span>
                  <motion.div
                    className="absolute inset-0 bg-gold-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureCollection;
