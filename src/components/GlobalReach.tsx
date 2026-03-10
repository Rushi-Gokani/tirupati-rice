import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Factory, Beaker, Megaphone, Trophy } from 'lucide-react';
import img12 from '../../images/infra-machinery.jpg';
import img13 from '../../images/infra-logistics.jpg';
import img14 from '../../images/infra-rice-mill.png';
import WorldMap from './WorldMap';

const GlobalReach = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section
      ref={sectionRef}
      className="bg-rice-50 text-stone-900 relative overflow-hidden"
    >
      <div className="flex flex-col xl:flex-row xl:min-h-screen">

        {/* WORLD MAP - Shows FIRST on mobile/tablet, RIGHT on desktop */}
        <div className="order-1 xl:order-2 xl:w-1/2 relative h-[40vh] sm:h-[45vh] md:h-[55vh] xl:h-screen xl:sticky xl:top-0 overflow-hidden">
          <WorldMap />
          {/* Floating badge */}
          <motion.div
            className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-lg z-30"
            initial={{ opacity: 0, scale: 0, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-stone-900">25+</div>
            <div className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-wider">Countries</div>
          </motion.div>
        </div>

        {/* CONTENT - Shows SECOND on mobile/tablet, LEFT on desktop */}
        <div className="order-2 xl:order-1 xl:w-1/2 bg-rice-50 relative z-20">
          <div className="px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-16 lg:py-14 xl:p-16 2xl:p-20">

            {/* Export Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-10 xl:mb-12"
            >
              <motion.span
                className="text-gold-600 tracking-widest uppercase text-[10px] sm:text-xs md:text-sm font-bold mb-2 sm:mb-3 block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Global Presence
              </motion.span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-serif text-[#005e2a] leading-none mb-1 sm:mb-2">
                Export
              </h2>
              <span className="text-base sm:text-lg md:text-xl xl:text-2xl text-gold-500 italic block font-light tracking-wide mb-4 sm:mb-6 md:mb-8">
                Reaching a million
              </span>

              {/* On tablet, show content beside images for better use of width */}
              <div className="md:flex md:gap-8 xl:block">
                <p className="text-stone-600 leading-relaxed text-sm sm:text-base text-justify mb-6 sm:mb-8 md:flex-1">
                  Committed to spreading the fragrance of Basmati across the world, we export our Basmati rice to various parts of the world. Countries like Iran, Dubai, Saudi Arabia, Middle East, Bahrain, Yemen, UAE and Europe being in the top of the list. Some of the international brands like Mojdeh, Afrah, Khatereh, Dolphin, Royal-Kamal, Al-Khaya and many more are directly packed by us and exported in world market. Over the years, with more and more people developing the taste for Basmati and the market growing internationally, we look forward to future where every kitchen on earth will make rice a part of their diet.
                </p>

                {/* Images */}
                <div className="grid grid-cols-3 md:grid-cols-1 md:w-48 lg:w-56 xl:w-auto xl:grid-cols-3 gap-2 sm:gap-3 mb-8 md:mb-0 xl:mb-12 md:shrink-0">
                  {[img12, img13, img14].map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden rounded-md sm:rounded-lg shadow-md aspect-[4/3]"
                    >
                      <img src={img} alt={`Export Process ${i + 1}`} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Process Flow - Part of Global Presence */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="relative">
          {/* Horizontal connecting line through all icons (desktop only) */}
          <div className="absolute top-[18px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent hidden md:block z-0" />

          {/* Vertical connecting line (mobile only) */}
          <div className="absolute left-[17px] top-[38px] bottom-[38px] w-px bg-gradient-to-b from-gold-500/40 via-[#005e2a]/20 to-gold-500/40 md:hidden z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <ContentBlock
              title="Facility"
              icon={<Factory className="w-4 h-4 sm:w-5 sm:h-5" />}
              content="We at Tirupati emphasize on excellence in all aspects of production, optimization, storage and distribution. The state-of-the-art processing plants for rice production have fully mechanized sophisticated processing procedures for different stages like de-moisturizing, temperature controlled drying, cleaning, de-husking, de-stoning, polishing, sorting and grading."
              delay={0}
            />
            <ContentBlock
              title="Testing Lab"
              icon={<Beaker className="w-4 h-4 sm:w-5 sm:h-5" />}
              content={`The plant consists of well equipment laboratory to ensure procurement of quality paddy from "mandi". In-process laboratory ensures quality of each grain during the processing in state-of-the-art plant.`}
              delay={0.1}
            />
            <ContentBlock
              title="Marketing Policy"
              icon={<Megaphone className="w-4 h-4 sm:w-5 sm:h-5" />}
              content="We follow the four Ps – Product, Price, Place and Promotion strictly, and make it a point that our consumers never compromise when it comes to getting the best."
              delay={0.2}
            />
            <ContentBlock
              title="Why Tirupati?"
              icon={<Trophy className="w-4 h-4 sm:w-5 sm:h-5" />}
              content="Tirupati is the name to go for when it comes to Basmati rice. A favourite among millions, Tirupati is the most premium quality of Basmati Rice since three decades. Timely delivery, competitive pricing and careful customization make us the best in what we do."
              delay={0.3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Process block — adapts between mobile (icon left) and tablet/desktop (icon top centered)
const ContentBlock = ({ title, icon, content, delay = 0 }: { title: string; icon: React.ReactNode; content: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{ duration: 0.5, delay }}
    className="relative group"
  >
    {/* Mobile: horizontal layout with icon on left */}
    <div className="flex items-start gap-4 md:hidden">
      <div className="w-[36px] h-[36px] bg-[#005e2a] rounded-full flex items-center justify-center text-white shadow-sm shrink-0 group-hover:shadow-lg group-hover:scale-110 transition-all z-10 relative">
        {icon}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="text-base sm:text-lg font-serif text-[#005e2a] font-semibold mb-2 underline decoration-gold-500 decoration-2 underline-offset-4">{title}</h3>
        <p className="text-stone-600 leading-relaxed text-xs sm:text-sm group-hover:text-stone-900 transition-colors">
          {content}
        </p>
      </div>
    </div>

    {/* Tablet & Desktop: vertical card with icon centered on top */}
    <div className="hidden md:flex flex-col items-center text-center">
      <div className="w-[36px] h-[36px] lg:w-[38px] lg:h-[38px] bg-[#005e2a] rounded-full flex items-center justify-center text-white shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all z-10 mb-4 lg:mb-5 relative">
        {icon}
      </div>
      <h3 className="text-sm lg:text-lg font-serif text-[#005e2a] font-semibold mb-2 lg:mb-3 underline decoration-gold-500 decoration-2 underline-offset-4">{title}</h3>
      <p className="text-stone-600 leading-relaxed text-xs lg:text-sm group-hover:text-stone-900 transition-colors">
        {content}
      </p>
    </div>
  </motion.div>
);

export default GlobalReach;
