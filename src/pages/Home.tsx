import React, { Suspense } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Hero from '../components/Hero';
import SignatureCollection from '../components/SignatureCollection';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import FadeInImage from '../components/ui/FadeInImage';

// Lazy load heavy components to improve initial page load speed
const BrandVideo = React.lazy(() => import('../components/BrandVideo'));
const GlobalReach = React.lazy(() => import('../components/GlobalReach'));

// Visual Break Section Component
const VisualBreakSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-stone-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
         <FadeInImage
            src="https://images.unsplash.com/photo-1533241242329-656d7d5eb5e2?q=80&w=1000&auto=format&fit=crop"
            alt="Rice Paddy Field"
            className="w-full h-full object-cover opacity-40"
            containerClassName="w-full h-full"
         />
      </div>
      
      {/* Animated overlay gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-transparent to-stone-900/80"
        animate={isInView ? {
          opacity: [0.5, 0.8, 0.5],
        } : {}}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-gold-400 tracking-widest uppercase text-xs font-bold mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Philosophy
          </motion.span>
          
          <motion.h2 
            className="text-2xl md:text-5xl font-serif italic mb-8 leading-snug"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            "Purity is not just a promise. It is our heritage, cultivated in every grain we grow."
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link 
                to="/about" 
                className="inline-block border border-white/30 px-10 py-3 hover:bg-white hover:text-stone-900 transition-all duration-300 uppercase tracking-widest text-sm relative overflow-hidden group"
              >
                <span className="relative z-10">Read Our Story</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <SignatureCollection />
      
      <Suspense fallback={
        <div className="h-[60vh] bg-stone-900 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 border-2 border-gold-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      }>
        <BrandVideo />
      </Suspense>

      <Features />
      
      <VisualBreakSection />

      <Suspense fallback={
        <div className="h-96 bg-rice-50 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-stone-300 border-t-gold-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      }>
        <GlobalReach />
      </Suspense>
      
      <Testimonials />
    </div>
  );
};

export default Home;
