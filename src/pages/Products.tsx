import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';

const Products = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const royalRef = useRef<HTMLElement>(null);
  const goldRef = useRef<HTMLElement>(null);
  
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const royalInView = useInView(royalRef, { once: true, margin: '-100px' });
  const goldInView = useInView(goldRef, { once: true, margin: '-100px' });

  const royalFeatures = [
    { title: 'Extra Long Grain', desc: 'Average length of 8.3mm before cooking.' },
    { title: 'Aged to Perfection', desc: 'Naturally aged for 24 months for enhanced aroma.' },
    { title: 'Pristine White', desc: 'Pearl white finish with zero impurities.' },
  ];

  const goldFeatures = [
    { title: 'High Nutritional Value', desc: 'Retains natural bran layer for fiber and minerals.' },
    { title: 'Versatile Cooking', desc: 'Ideal for fried rice, steam rice, and daily meals.' },
    { title: 'Economical Luxury', desc: 'Premium quality at a price point for daily use.' },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div ref={headerRef} className="pt-24 md:pt-32 pb-12 md:pb-16 text-center px-6">
        <motion.span
          className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-3 block"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Premium Selection
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-7xl font-serif text-stone-900 mb-4 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Our Brands
        </motion.h1>
        <motion.p 
          className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We focus on quality over quantity. Two distinct brands, one uncompromising standard of excellence.
        </motion.p>
      </div>

      {/* Brand 1: Tirupati Royal */}
      <section ref={royalRef} className="py-12 md:py-20 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={royalInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="order-2 lg:order-1"
            >
              <motion.div 
                className="flex items-center gap-2 mb-3 md:mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={royalInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Star className="text-gold-500 fill-gold-500" size={18} />
                <span className="text-gold-600 font-bold tracking-widest uppercase text-xs md:text-sm">The Flagship</span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-6xl font-serif text-stone-900 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={royalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Tirupati Royal
              </motion.h2>
              
              <motion.p 
                className="text-stone-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={royalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Our flagship Basmati rice, aged for a minimum of 2 years to ensure the perfect non-sticky texture. Known for its extra-long grains that elongate up to three times upon cooking, Tirupati Royal is the choice of chefs for Biryanis and Pilafs.
              </motion.p>
              
              <div className="space-y-4 mb-8 md:mb-10">
                {royalFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={royalInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="mt-1 bg-stone-900 rounded-full p-1 text-white flex-shrink-0 group-hover:bg-gold-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Check size={10} />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm md:text-base">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-stone-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="bg-white p-4 md:p-6 border-l-4 border-gold-500 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={royalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <p className="italic text-stone-700 font-serif text-sm md:text-base">"The aroma of Tirupati Royal fills the room before the plate even arrives at the table."</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={royalInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 relative h-[300px] md:h-[600px] bg-stone-200 overflow-hidden rounded-lg shadow-xl group"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <FadeInImage 
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Tirupati Royal Rice" 
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </motion.div>
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute bottom-4 left-4 md:bottom-8 md:left-8 bg-white/90 backdrop-blur p-4 md:p-6 max-w-[200px] md:max-w-xs shadow-lg rounded-sm z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={royalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500 mb-1">Available In</p>
                <p className="font-serif text-base md:text-xl text-stone-900">1kg, 5kg, 20kg Bags</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand 2: Tirupati Gold */}
      <section ref={goldRef} className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={goldInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] md:h-[600px] bg-stone-200 overflow-hidden rounded-lg shadow-xl group"
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <FadeInImage 
                  src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop" 
                  alt="Tirupati Gold Rice" 
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </motion.div>
              
              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-white/90 backdrop-blur p-4 md:p-6 max-w-[200px] md:max-w-xs shadow-lg text-right rounded-sm z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={goldInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-[10px] md:text-xs uppercase tracking-widest text-stone-500 mb-1">Available In</p>
                <p className="font-serif text-base md:text-xl text-stone-900">5kg, 10kg, 25kg Bags</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={goldInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div 
                className="flex items-center gap-2 mb-3 md:mb-4"
                initial={{ opacity: 0, x: 20 }}
                animate={goldInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Star className="text-gold-500 fill-gold-500" size={18} />
                <span className="text-gold-600 font-bold tracking-widest uppercase text-xs md:text-sm">Everyday Premium</span>
              </motion.div>
              
              <motion.h2 
                className="text-3xl md:text-6xl font-serif text-stone-900 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={goldInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Tirupati Gold
              </motion.h2>
              
              <motion.p 
                className="text-stone-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={goldInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A versatile, nutrient-rich grain designed for the modern family. Tirupati Gold balances health with taste, offering a slightly nuttier flavor profile and retaining more natural fiber. Perfect for daily consumption.
              </motion.p>
              
              <div className="space-y-4 mb-8 md:mb-10">
                {goldFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={goldInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className="mt-1 bg-stone-900 rounded-full p-1 text-white flex-shrink-0 group-hover:bg-gold-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <Check size={10} />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm md:text-base">{feature.title}</h4>
                      <p className="text-xs md:text-sm text-stone-500">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="bg-rice-50 p-4 md:p-6 border-l-4 border-gold-500 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={goldInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
              >
                <p className="italic text-stone-700 font-serif text-sm md:text-base">"Health meets heritage in every grain of Tirupati Gold."</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 md:py-24 bg-stone-900 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Experience Excellence?
          </motion.h2>
          <motion.p 
            className="text-stone-400 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us for bulk orders, export inquiries, or partnership opportunities.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-white font-medium tracking-widest uppercase hover:bg-gold-600 transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;
