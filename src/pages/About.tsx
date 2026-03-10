import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Leaf, CheckCircle, Sprout, Factory, Ship, Sun, FileText, ExternalLink } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';
import FloatingGrains from '../components/ui/FloatingGrains';

import certPhoto from '../../images/Certificate/WhatsApp-Image-2026-03-09-at-18.52.09.jpeg';
import factoryPdf from '../../images/Certificate/FACTORY-LICENSE-2025-TIRUPATI.pdf';
import fssaiPdf from '../../images/Certificate/FASSAI-CERTIFICATE-AS-ONN-30.11.2025-TO-29.11.2030.pdf';
import haccpPdf from '../../images/Certificate/HACCP-10.01.2025.pdf';
import iso22000Pdf from '../../images/Certificate/ISO_22000_Certificate-10.01.2025.pdf';
import iso9001Pdf from '../../images/Certificate/ISO_9001_Certificate-10.01.2025.pdf';

import histBeginning from '../../images/history-beginning.jpg';
import histModernizing from '../../images/history-modernizing.jpg';
import rice1718 from '../../images/rice-1718-steam.jpg';
import ricePusa from '../../images/rice-pusa-steam.jpg';

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
      title: "The Beginning",
      desc: "A small rice business was established in Taraori (Karnal), Haryana, India, under the guidance of Late Shri Nathi Ram Gupta. The foundation was built with a clear vision to provide the finest quality rice to end consumers while maintaining strong ethical values and commitment to excellence.",
      icon: <Sprout className="w-5 h-5 text-white" />,
      image: histBeginning
    },
    {
      year: "1998",
      title: "Modernizing Tradition",
      desc: "We inaugurated our first state-of-the-art milling facility equipped with advanced Japanese Sortex technology. This marked a major step forward in quality enhancement, ensuring \"Pearl White\" purity and setting new benchmarks in rice processing standards.",
      icon: <Factory className="w-5 h-5 text-white" />,
      image: histModernizing
    },
    {
      year: "2005",
      title: "Crossing Oceans",
      desc: "Tirupati Rice expanded into international markets and officially began its global journey. Our products gained appreciation across multiple countries, strengthening our presence and reputation worldwide.",
      icon: <Ship className="w-5 h-5 text-white" />,
      image: rice1718
    },
    {
      year: "2025",
      title: "Global Excellence & Advanced Automation",
      desc: "Today, we proudly serve 40+ countries and continue to expand our global footprint. With a complete stainless-steel processing plant integrated with a PLC-based system and a high level of automation, we ensure superior purity, hygiene, and operational efficiency. Our focus remains on sustainable growth, customer trust, and continuous technological advancement.",
      icon: <Sun className="w-5 h-5 text-white" />,
      image: ricePusa
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
      title: "Trust and Long-Term Relationships",
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
                  src="images/Plant and machinery .JPG.jpeg"
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

      {/* 2.5 Leadership Profile */}
      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Our Pillars</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-stone-900">Leadership Profile</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mr. Ravinder Kumar */}
            <motion.div
              className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all duration-300 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-24 h-24 bg-stone-200 rounded-full mb-6 flex items-center justify-center border-4 border-white shadow-md overflow-hidden group-hover:border-gold-300 transition-colors">
                {/* Placeholder for actual image */}
                <Users className="text-stone-400 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 font-bold mb-2">Mr. Ravinder Kumar</h3>
              <p className="text-sm text-gold-600 font-bold uppercase tracking-wider mb-4">Managing Director</p>
              <p className="text-stone-600 leading-relaxed font-light text-sm">
                Oversees paddy procurement and quality control, along with business development initiatives. He plays a key role in sourcing high-quality raw materials and strengthening supplier relationships while driving strategic growth opportunities for the company.
              </p>
            </motion.div>

            {/* Mr. Vijender Kumar */}
            <motion.div
              className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all duration-300 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-24 h-24 bg-stone-200 rounded-full mb-6 flex items-center justify-center border-4 border-white shadow-md overflow-hidden group-hover:border-gold-300 transition-colors">
                <Users className="text-stone-400 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 font-bold mb-2">Mr. Vijender Kumar</h3>
              <p className="text-sm text-gold-600 font-bold uppercase tracking-wider mb-4">Managing Director</p>
              <p className="text-stone-600 leading-relaxed font-light text-sm">
                Responsible for finance and overall management of the organization. He also manages public relations and ensures strong stakeholder engagement, financial discipline, and sustainable operational governance.
              </p>
            </motion.div>

            {/* Mr. Lalit Kumar */}
            <motion.div
              className="bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all duration-300 flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-24 h-24 bg-stone-200 rounded-full mb-6 flex items-center justify-center border-4 border-white shadow-md overflow-hidden group-hover:border-gold-300 transition-colors">
                <Users className="text-stone-400 w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif text-stone-900 font-bold mb-2">Mr. Lalit Kumar</h3>
              <p className="text-sm text-gold-600 font-bold uppercase tracking-wider mb-4">Managing Director</p>
              <p className="text-stone-600 leading-relaxed font-light text-sm">
                Heads overall production operations, machinery management, and export sales. He ensures smooth plant functioning, production efficiency, quality standards, and expansion of international market presence.
              </p>
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

      {/* 5. Accreditations & Certifications */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 tracking-[0.3em] uppercase text-xs font-bold mb-4 block">Quality Assured</span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-stone-900">Accreditations & Certifications</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
            <p className="max-w-2xl mx-auto mt-6 text-stone-600 leading-relaxed font-light">
              We adhere to the highest global standards for food safety and quality management. Our state-of-the-art facilities and processes are certified by leading international organizations.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* PDF Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {[
                { name: "ISO 9001:2015", desc: "Quality Management System", file: iso9001Pdf },
                { name: "ISO 22000:2018", desc: "Food Safety Management", file: iso22000Pdf },
                { name: "HACCP", desc: "Hazard Analysis Critical Control Point", file: haccpPdf },
                { name: "FSSAI", desc: "Food Safety & Standards", file: fssaiPdf },
                { name: "Factory License", desc: "Government Approved", file: factoryPdf },
                { name: "Registration Certificate", desc: "Official Compliance", file: certPhoto },
              ].map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-2xl hover:bg-white hover:border-gold-300 transition-all duration-300"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gold-50 text-gold-600 rounded-2xl flex items-center justify-center group-hover:bg-gold-600 group-hover:text-white transition-all duration-500 border border-gold-100 group-hover:border-gold-600 rotate-3 group-hover:rotate-0">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div className="w-10 h-10 bg-stone-100 text-stone-400 rounded-full flex items-center justify-center group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-stone-900 mb-3 group-hover:text-gold-600 transition-colors">{cert.name}</h3>
                  <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed font-light">{cert.desc}</p>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
