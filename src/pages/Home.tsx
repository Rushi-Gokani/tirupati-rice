import React, { Suspense, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import SignatureCollection from '../components/SignatureCollection';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import FadeInImage from '../components/ui/FadeInImage';
import FloatingGrains from '../components/ui/FloatingGrains';

// Lazy load heavy components to improve initial page load speed
const BrandVideo = React.lazy(() => import('../components/BrandVideo'));
const GlobalReach = React.lazy(() => import('../components/GlobalReach'));

// Visual Break Section Component
const VisualBreakSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 bg-stone-900 text-white overflow-hidden flex items-center justify-center min-h-[60vh]"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y }}
      >
        <FadeInImage
          src="" // Intentionally empty as per original, keeping logic but styling wrapper
          alt="Rice Paddy Field Background" // Placeholder for structure
          className="w-full h-full object-cover opacity-30 scale-105"
          containerClassName="w-full h-full absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504193988-d6215ebdf83e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" // Fallback/bg image
        />
        <div className="absolute inset-0 bg-stone-900/60" />
      </motion.div>

      {/* Floating Grains Layer */}
      <FloatingGrains />

      <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-16 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold-500/50 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold-500/50 rounded-br-2xl" />

          <motion.span
            className="text-gold-400 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Philosophy
          </motion.span>

          <motion.h2
            className="text-3xl md:text-6xl font-serif italic mb-10 leading-tight text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            "Purity is not just a promise. It is our heritage, cultivated in every grain we grow."
          </motion.h2>

          <motion.div
            className="mx-auto mb-12 h-px w-32 bg-gold-500/50"
            initial={{ width: 0 }}
            animate={isInView ? { width: 128 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/about"
              className="inline-block px-10 py-4 bg-transparent border border-gold-500/30 text-gold-100 hover:bg-gold-500 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm font-medium rounded-sm group relative overflow-hidden"
            >
              <span className="relative z-10">Read Our Story</span>
              <motion.div
                className="absolute inset-0 bg-gold-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-stone-50 overflow-hidden">
      {/* Global Background Particles for subtle texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <FloatingGrains />
      </div>

      <div className="relative z-10">
        <Hero />

        <SectionWrapper>
          <Stats />
        </SectionWrapper>

        <SectionWrapper>
          <SignatureCollection />
        </SectionWrapper>

        <Suspense fallback={
          <div className="h-[60vh] bg-stone-900 flex items-center justify-center">
            <motion.div
              className="w-12 h-12 border-2 border-gold-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        }>
          <SectionWrapper>
            <BrandVideo />
          </SectionWrapper>
        </Suspense>

        <SectionWrapper>
          <Features />
        </SectionWrapper>

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
          <SectionWrapper>
            <GlobalReach />
          </SectionWrapper>
        </Suspense>

        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Home;
