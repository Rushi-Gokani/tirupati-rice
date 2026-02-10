import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-stone-50 z-50">
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-16 h-16 border-4 border-stone-200 border-t-gold-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-4 text-gold-600 font-serif tracking-widest text-sm uppercase"
        >
          Loading Tirupati
        </motion.span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
