import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Leaf, Globe, CheckCircle, Sprout, Factory, Ship, Sun } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';
import FloatingGrains from '../components/ui/FloatingGrains';

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
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
    <div className="min-h-screen bg-stone-50 overflow-hidden font-sans">
      {/* 1. Cinematic Hero Section */}
      <div ref={heroRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-stone-900">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <FadeInImage
            src="https://images.unsplash.com/photo-1536622308103-68d7452d3a3d?q=80&w=2000&auto=format&fit=crop"
            alt="Old hands holding rice"
            className="w-full h-full object-cover opacity-50"
            containerClassName="w-full h-full"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-50" />
        </motion.div>

        <FloatingGrains />

        <div className="relative z-10 text-center text-white px-6 max-w-5xl mt-16 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              className="text-gold-400 tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Story
            </motion.span>
            <motion.h1
              className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Rooted in <br />
              <motion.span
                className="italic font-light text-gold-200"
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Tradition
              </motion.span>
            </motion.h1>

            <motion.div
              className="mx-auto mb-8 h-px w-32 bg-gold-500/50"
              initial={{ width: 0 }}
              animate={heroInView ? { width: 128 } : {}}
              transition={{ duration: 1, delay: 0.7 }}
            />

            <motion.p
              className="text-lg md:text-2xl text-stone-100 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              For four decades, Tirupati has been the bridge between the ancient paddy fields of India and the modern kitchens of the world.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* 2. The Origin Story */}
      <section ref={storyRef} className="py-24 relative overflow-hidden">
        {/* Background Grain Animation */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <FloatingGrains />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2"
            >
              <div className="pl-6 border-l-4 border-gold-500 mb-8">
                <motion.span
                  className="text-gold-600 tracking-widest uppercase text-sm font-bold mb-2 block"
                  initial={{ opacity: 0 }}
                  animate={storyInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  Since 1985
                </motion.span>
                <motion.h2
                  className="text-4xl md:text-6xl font-serif text-stone-900 leading-none tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  From a Village Mill to <br />
                  <span className="text-stone-400 italic">Global Tables</span>
                </motion.h2>
              </div>

              <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
                <motion.p
                  className="p-6 bg-white shadow-sm border border-stone-100 rounded-tr-3xl rounded-bl-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                >
                  The story of Tirupati began in 1985 in the fertile foothills of the Himalayas. Our founder believed that the world deserved to taste Basmati in its purest form—unadulterated and aged to perfection.
                </motion.p>
                <motion.p
                  className="p-6 bg-white shadow-sm border border-stone-100 rounded-tl-3xl rounded-br-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={storyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                >
                  What started as a modest local mill has blossomed into a premier export house. Yet, our heart remains in the fields. We still walk the paddy lines, ensuring that patience remains our most important ingredient.
                </motion.p>
              </div>
            </motion.div>

            {/* Visuals */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={storyInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
                <FadeInImage
                  src="https://images.unsplash.com/photo-1591032777853-946cb323af20?q=80&w=1000&auto=format&fit=crop"
                  alt="Founder or Traditional Farming"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                  containerClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold-400 opacity-50 rounded-tl-3xl"
                initial={{ width: 0, height: 0 }}
                animate={storyInView ? { width: 128, height: 128 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gold-400 opacity-50 rounded-br-3xl"
                initial={{ width: 0, height: 0 }}
                animate={storyInView ? { width: 128, height: 128 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section ref={valuesRef} className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-white/90">What We Stand For</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.2, duration: 0.8, ease: "backOut" }}
                className="group relative bg-stone-800/50 p-8 rounded-2xl hover:bg-stone-800 transition-colors duration-300 border border-stone-700 hover:border-gold-500/50"
                whileHover={{ y: -15 }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <motion.div
                    className="bg-stone-900 border border-stone-700 p-4 rounded-full shadow-lg group-hover:border-gold-500 transition-colors"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-serif font-bold mb-4 text-gold-50">{item.title}</h3>
                  <p className="text-stone-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Decoration */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/0 to-transparent group-hover:via-gold-500/50 transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Journey (Timeline) */}
      <section ref={timelineRef} className="py-24 bg-rice-50 relative">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-3 block">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">A Journey in Time</h2>
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-0.5 bg-stone-200 transform md:-translate-x-1/2" />

            {/* Fill Line Animation */}
            <motion.div
              className="absolute left-[20px] md:left-1/2 top-4 bottom-0 w-0.5 bg-gold-400 transform md:-translate-x-1/2 origin-top"
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            <div className="space-y-16">
              {timelineEvents.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                    className={`relative flex items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Content Side */}
                    <div className={`flex-1 pl-12 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <motion.div
                        className="group bg-white p-6 md:p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                      >
                        {/* Rice Watermark */}
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl pointer-events-none" />

                        <span className="text-gold-500 font-bold text-3xl md:text-5xl font-serif opacity-20 absolute top-2 right-4 select-none">
                          {item.year}
                        </span>

                        <h3 className="text-xl md:text-2xl font-serif text-stone-900 font-bold mb-3 relative z-10">
                          {item.title}
                        </h3>
                        <p className="text-stone-600 font-light leading-relaxed relative z-10">
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Node */}
                    <div className="absolute left-[20px] md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <motion.div
                        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full border-4 border-gold-500 shadow-md flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="w-3 h-3 bg-gold-500 rounded-full" />
                      </motion.div>
                    </div>

                    {/* Image Side (or Spacer on Mobile) */}
                    <div className={`flex-1 hidden md:block ${isEven ? 'text-left' : 'text-right'}`}>
                      <div className={`w-3/4 inline-block rounded-lg overflow-hidden h-48 shadow-lg ${isEven ? '' : ''}`}>
                        <FadeInImage
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                          containerClassName="w-full h-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Certifications */}
      <motion.section
        className="py-16 bg-white border-t border-stone-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="flex flex-wrap justify-between items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            whileHover={{ scale: 1.01 }}
          >
            {[
              { icon: Award, label: 'ISO 22000' },
              { icon: Leaf, label: 'USDA Organic' },
              { icon: Globe, label: 'FDA Approved' },
              { icon: CheckCircle, label: 'Non-GMO' },
            ].map((cert, idx) => (
              <motion.div
                key={cert.label}
                className="flex flex-col items-center gap-3 flex-1 min-w-[150px] p-6 rounded-lg hover:bg-stone-50 transition-colors"
                whileHover={{ y: -5 }}
              >
                <cert.icon size={32} className="text-stone-800" />
                <span className="font-bold text-stone-800 text-sm tracking-widest uppercase">{cert.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
