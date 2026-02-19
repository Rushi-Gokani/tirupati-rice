import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

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
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-rice-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

      {/* Blur Effects for depth - Warmer tones for light theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-stone-200/50 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-500/50"></div>
            <span className="text-gold-600 tracking-[0.25em] uppercase text-xs font-bold">Client Success Stories</span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-500/50"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6"
          >
            Trusted by Culinary <span className="text-gold-600 italic">Masters</span>
          </motion.h2>
        </div>

        {/* Main Slider Area */}
        <div className="relative max-w-5xl mx-auto">

          {/* Desktop Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-24 z-20 items-center justify-center w-14 h-14 rounded-full border border-stone-200 text-stone-400 hover:bg-gold-500 hover:text-white hover:border-gold-500 hover:scale-110 transition-all duration-300 group bg-white/50 backdrop-blur-sm shadow-sm"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={28} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={handleNext}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-24 z-20 items-center justify-center w-14 h-14 rounded-full border border-stone-200 text-stone-400 hover:bg-gold-500 hover:text-white hover:border-gold-500 hover:scale-110 transition-all duration-300 group bg-white/50 backdrop-blur-sm shadow-sm"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={28} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Card Container - White with shadow for light mode */}
          <div className="bg-white rounded-3xl border border-stone-100 p-8 md:p-16 relative shadow-xl shadow-stone-200/50 overflow-hidden">

            {/* Decorative Quote Mark */}
            <div className="absolute top-8 left-8 text-gold-500/10 pointer-events-none select-none">
              <Quote size={180} />
            </div>

            <div className="relative z-10 min-h-[350px] md:min-h-[300px] flex flex-col justify-center items-center">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center text-center max-w-3xl"
                >
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1.5 mb-8">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                      >
                        <Star size={20} className="fill-gold-500 text-gold-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* The Quote */}
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-snug text-stone-800 mb-10">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-gold-500 rounded-full mb-8 opacity-30"></div>

                  {/* Author Details */}
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gold-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].author}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-md relative z-10 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold text-stone-900 mb-1 tracking-wide">{testimonials[activeIndex].author}</h4>
                      <p className="text-gold-600 font-medium text-sm mb-0.5">{testimonials[activeIndex].role}</p>
                      <p className="text-stone-400 text-xs uppercase tracking-wider">{testimonials[activeIndex].company}</p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="mt-10 flex flex-col items-center justify-center gap-8">
            <div className="flex gap-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 transition-all duration-500 rounded-full ${idx === activeIndex ? 'w-10 bg-gold-500' : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile Arrow Controls */}
            <div className="flex lg:hidden gap-6">
              <button onClick={handlePrev} className="p-4 rounded-full border border-stone-200 active:bg-gold-500 active:text-white transition-colors bg-white shadow-sm text-stone-600">
                <ChevronLeft size={20} />
              </button>
              <button onClick={handleNext} className="p-4 rounded-full border border-stone-200 active:bg-gold-500 active:text-white transition-colors bg-white shadow-sm text-stone-600">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
