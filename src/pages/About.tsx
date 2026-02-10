import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Leaf, Globe, CheckCircle, Sprout, Factory, Ship, Sun } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const storyInView = useInView(storyRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const timelineEvents = [
    { 
      year: "1985", 
      title: "The First Seed", 
      desc: "In the fertile lands of Punjab, our founder planted the first crop of Basmati. It wasn't just a business; it was a pact with the soil.",
      icon: <Sprout className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1599579088275-6939e6a04803?q=80&w=600&auto=format&fit=crop"
    },
    { 
      year: "1998", 
      title: "Modernizing Tradition", 
      desc: "Inaugurated our first state-of-the-art milling facility with Japanese Sortex technology, ensuring 'Pearl White' purity.",
      icon: <Factory className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=600&auto=format&fit=crop"
    },
    { 
      year: "2005", 
      title: "Crossing Oceans", 
      desc: "Tirupati Rice officially went global. Our first major export consignment docked in London, bringing authentic Basmati to the UK.",
      icon: <Ship className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=600&auto=format&fit=crop"
    },
    { 
      year: "2015", 
      title: "The Organic Pledge", 
      desc: "Transitioned 10,000 acres to 100% organic cultivation, eliminating synthetic pesticides entirely for a healthier future.",
      icon: <Leaf className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=600&auto=format&fit=crop"
    },
    { 
      year: "2025", 
      title: "Feeding the Future", 
      desc: "Now in 25+ countries, innovating with sustainable packaging and climate-resilient crop varieties.",
      icon: <Sun className="w-5 h-5 text-white" />,
      image: "https://images.unsplash.com/photo-1536622308103-68d7452d3a3d?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-gold-500" />,
      title: "Sustainable Farming",
      desc: "Eco-friendly practices that conserve water and enrich the soil."
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: "Uncompromising Purity",
      desc: "Zero tolerance for adulteration. DNA-tested authentic Basmati."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Farmer Prosperity",
      desc: "Direct trade with 10,000+ farmers, ensuring fair compensation."
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 overflow-hidden">
      {/* 1. Cinematic Hero Section */}
      <div ref={heroRef} className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center bg-stone-900">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
           <FadeInImage
             src="https://images.unsplash.com/photo-1536622308103-68d7452d3a3d?q=80&w=2000&auto=format&fit=crop"
             alt="Old hands holding rice"
             className="w-full h-full object-cover opacity-60"
             containerClassName="w-full h-full"
             loading="eager"
           />
        </motion.div>
        
        {/* Animated overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-transparent to-stone-900/60"
          animate={heroInView ? {
            opacity: [0.5, 0.8, 0.5],
          } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-gold-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Story
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Rooted in <br/>
              <motion.span 
                className="italic font-light text-gold-400"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Tradition
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              For four decades, Tirupati has been the bridge between the ancient paddy fields of India and the modern kitchens of the world.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* 2. The Origin Story (Compact) */}
      <section ref={storyRef} className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="md:w-1/2"
            >
              <motion.span
                className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-3 block"
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                Since 1985
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-serif text-stone-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                From a Village Mill to <br/>
                <span className="text-stone-500 italic">Global Tables</span>
              </motion.h2>
              <div className="space-y-4 text-stone-600 text-base leading-relaxed font-light">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  The story of Tirupati began in 1985 in the fertile foothills of the Himalayas. Our founder believed that the world deserved to taste Basmati in its purest form—unadulterated and aged to perfection.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  What started as a modest local mill has blossomed into a premier export house. Yet, our heart remains in the fields. We still walk the paddy lines, ensuring that patience remains our most important ingredient.
                </motion.p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <motion.div 
                className="relative z-10 rounded-lg overflow-hidden shadow-xl h-[300px] md:h-[400px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <FadeInImage 
                  src="https://images.unsplash.com/photo-1591032777853-946cb323af20?q=80&w=1000&auto=format&fit=crop" 
                  alt="Founder or Traditional Farming" 
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              
              {/* Decorative element */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold-500/30 rounded-lg -z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={storyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Compact Grid) */}
      <section ref={valuesRef} className="py-16 bg-stone-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
          animate={valuesInView ? {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 tracking-widest uppercase text-xs font-bold mb-3 block">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-serif">Our Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + idx * 0.15, duration: 0.6 }}
                className="flex flex-col items-center text-center p-4 group"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="mb-4 bg-stone-800 p-4 rounded-full relative"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {item.icon}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-gold-500/30"
                    animate={valuesInView ? {
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  />
                </motion.div>
                <h3 className="text-lg font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-stone-400 font-light text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Compact Molded Timeline Section */}
      <section ref={timelineRef} className="py-16 md:py-24 bg-rice-50 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
             <span className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-2 block">Our Heritage</span>
             <h2 className="text-3xl md:text-4xl font-serif text-stone-900">A Journey in Time</h2>
          </motion.div>

          <div className="relative pl-4 md:pl-8">
            {/* Continuous Vertical Line */}
            <motion.div 
              className="absolute left-[27px] md:left-[43px] top-4 bottom-0 w-0.5 bg-stone-200"
              initial={{ height: 0 }}
              animate={timelineInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />

            <div className="space-y-8 md:space-y-10">
              {timelineEvents.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                  className="relative flex items-start gap-6 md:gap-10 group"
                >
                  {/* Timeline Node */}
                  <motion.div 
                    className="relative z-10 flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gold-500 rounded-full border-4 border-white shadow-md flex items-center justify-center mt-1"
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gold-500"
                      animate={timelineInView ? {
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                    />
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="flex-grow bg-white p-5 md:p-6 rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center group-hover:border-gold-200"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Date & Text */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <motion.span 
                          className="text-gold-600 font-bold text-lg md:text-xl font-serif"
                          initial={{ opacity: 0 }}
                          animate={timelineInView ? { opacity: 1 } : {}}
                          transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
                        >
                          {item.year}
                        </motion.span>
                        <div className="h-px bg-stone-200 w-8"></div>
                        <h3 className="text-lg font-serif text-stone-900 font-bold">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-stone-600 font-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Compact Image Thumbnail */}
                    <motion.div 
                      className="w-full md:w-24 h-32 md:h-24 flex-shrink-0 rounded-md overflow-hidden bg-stone-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FadeInImage 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        containerClassName="w-full h-full"
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Certifications (Compact) */}
      <motion.section 
        className="py-12 bg-white border-t border-stone-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             {[
               { icon: Award, label: 'ISO 22000' },
               { icon: Leaf, label: 'USDA Organic' },
               { icon: Globe, label: 'FDA Approved' },
               { icon: CheckCircle, label: 'Non-GMO' },
             ].map((cert, idx) => (
               <motion.div 
                 key={cert.label}
                 className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 0.5, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.1 }}
                 whileHover={{ scale: 1.05, opacity: 1 }}
               >
                  <cert.icon size={24} className="text-stone-800" />
                  <span className="font-bold text-stone-800 text-sm">{cert.label}</span>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
