import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const recipes = [
  {
    title: "The Royal Biryani",
    description: "Our long-grain Basmati is the soul of this aromatic dish. Each grain remains distinct, absorbing the essence of saffron and spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Classic Steamed Rice",
    description: "Simple, fluffy, and pristine white. The perfect accompaniment to curries, dals, and stews.",
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Creamy Rice Pudding",
    description: "The starch content in our Gold variety creates a naturally creamy texture for desserts like Kheer and Risotto.",
    image: "https://images.unsplash.com/photo-1595257841889-eca2678454e2?q=80&w=1000&auto=format&fit=crop"
  }
];

const CulinaryInspiration = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
        animate={isInView ? {
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-gold-600 tracking-widest uppercase text-sm font-bold mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Culinary Masterpieces
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-stone-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Created with Tirupati
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg mb-6 relative h-80">
                <motion.div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url("${item.image}")` }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <motion.div 
                  className="absolute inset-0 bg-black/10"
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover overlay with icon */}
                <motion.div
                  className="absolute inset-0 bg-stone-900/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="text-white text-sm uppercase tracking-widest border border-white/50 px-6 py-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    View Recipe
                  </motion.span>
                </motion.div>
              </div>
              
              <motion.h3 
                className="text-2xl font-serif font-bold text-stone-900 mb-3 group-hover:text-gold-600 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className="text-stone-600 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulinaryInspiration;
