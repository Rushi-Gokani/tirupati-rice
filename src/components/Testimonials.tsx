import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Tirupati's Royal Basmati has been the signature grain for our hotel chain across the Middle East. The consistency in grain length and aroma is unmatched in the market.",
    author: "Ahmed Al-Fayed",
    role: "Procurement Director",
    company: "Luxury Hotels Group, Dubai",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote: "We have been importing Tirupati Gold for over a decade. Their commitment to quality and timely logistics makes them our most trusted partner in South Asia.",
    author: "Sarah Jenkins",
    role: "Senior Buyer",
    company: "Global Foods Ltd, UK",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    quote: "As a chef, the texture of rice defines the dish. Tirupati grains cook perfectly every time—fluffy, separate, and fragrant. It elevates our Biryani to an art form.",
    author: "Vikram Oberoi",
    role: "Executive Chef",
    company: "The Royal Spice, London",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  }
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
        animate={isInView ? {
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        } : {}}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-gold-600 tracking-widest uppercase text-xs md:text-sm font-bold mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trusted Globally
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-stone-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Partners in Quality
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 md:p-10 rounded-lg shadow-sm border-t-4 border-gold-500 relative group"
            >
              {/* Quote icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15, type: 'spring', stiffness: 200 }}
              >
                <Quote className="absolute top-6 left-6 md:top-8 md:left-8 text-stone-200 w-8 h-8 md:w-12 md:h-12 -z-0 group-hover:text-gold-200 transition-colors duration-300" />
              </motion.div>
              
              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.15 + i * 0.05 }}
                  >
                    <Star size={14} className="text-gold-500 fill-gold-500" />
                  </motion.div>
                ))}
              </div>
              
              <div className="relative z-10">
                <motion.p 
                  className="text-stone-600 italic leading-relaxed mb-6 md:mb-8 text-base md:text-lg font-serif"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                >
                  "{item.quote}"
                </motion.p>
                
                <motion.div 
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.author} 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-stone-200 group-hover:border-gold-500 transition-colors duration-300"
                    />
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm uppercase tracking-wide">{item.author}</h4>
                    <p className="text-xs text-gold-600 font-medium">{item.role}</p>
                    <p className="text-xs text-stone-400">{item.company}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
