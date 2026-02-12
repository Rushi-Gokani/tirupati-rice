import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SignatureCollection from '../components/SignatureCollection';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FloatingGrains from '../components/ui/FloatingGrains';

// Lazy load heavy components to improve initial page load speed
const BrandVideo = React.lazy(() => import('../components/BrandVideo'));
const GlobalReach = React.lazy(() => import('../components/GlobalReach'));

import InfrastructureCapabilities from '../components/InfrastructureCapabilities';



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
          <SignatureCollection />
        </SectionWrapper>

        <SectionWrapper>
          <InfrastructureCapabilities />
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

        <SectionWrapper>
          <Stats />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Home;
