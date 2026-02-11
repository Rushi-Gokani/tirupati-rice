import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChefHat, History, Sparkles, ArrowRight } from 'lucide-react';

const CulinaryInspiration = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Sparkles,
      title: "Authentic Taste",
      description: "Experience the rich, aromatic essence that fills the room, transforming every meal into a royal feast. Our grains are aged to perfection."
    },
    {
      icon: History,
      title: "Rich Heritage",
      description: "Cultivated with centuries of agricultural wisdom, passing down the secret of perfect crops from generation to generation."
    },
    {
      icon: ChefHat,
      title: "Premium Quality",
      description: "Hand-picked pristine grains that strictly adhere to the highest standards of purity, ensuring a flawless texture in every bite."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-rice-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"
          animate={isInView ? { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-stone-200/40 rounded-full blur-3xl"
          animate={isInView ? { scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Storytelling Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
              Culinary Inspiration
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Food is more than just sustenance; it is a language of love, a preserver of tradition, and a reason to gather.
              At Tirupati, we believe that the soul of a great dish lies in its foundation—the grain.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed mb-8">
              We are dedicated to bringing the authentic taste of Indian heritage to your table,
              inspiring you to create masterpieces that are remembered long after the meal is over.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-2 bg-stone-800 text-rice-50 px-8 py-3 rounded-sm hover:bg-gold-600 transition-colors duration-300 font-medium tracking-wide uppercase text-sm"
            >
              Explore Our Flavors
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Highlights Side */}
          <div className="space-y-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.15) }}
                className="flex items-start gap-5 p-6 rounded-lg hover:bg-white/60 transition-colors duration-300 border border-transparent hover:border-stone-100"
              >
                <div className="p-3 bg-white rounded-full shadow-sm text-gold-500 shrink-0">
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-stone-800 mb-2 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinaryInspiration;
