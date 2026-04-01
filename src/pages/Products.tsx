import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Leaf, Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInImage from '../components/ui/FadeInImage';
import ExpandableText from '../components/ui/ExpandableText';
import ProductSlider from '../components/ProductSlider';

import steam1121 from '../../images/rice-1121-steam.jpg';
import raw1121 from '../../images/rice-1121-raw.jpg';
import gold1121 from '../../images/mannat-gold/1401-golden-sella.jpg';
import white1121 from '../../images/tirupati-white/1121-white-sella.jpg';

import steam1401 from '../../images/rice-1401-steam.jpg';
import gold1401 from '../../images/mannat-gold/1401-golden-sella.jpg';
import white1401 from '../../images/tirupati-white/1401-white-sella.jpg';
import raw1401 from '../../images/rice-1121-raw.jpg';

import steam1509 from '../../images/rice-1509-steam.jpg';
import raw1509 from '../../images/rice-1509-raw.jpg';
import gold1509 from '../../images/mannat-gold/1509-basmati-golden-sella-rice.jpg';

import pusaSteam from '../../images/rice-1121-steam.jpg';
import pusaGold from '../../images/mannat-gold/Pusa-basmati-golden-sella.jpg';
import pusaWhite from '../../images/tirupati-white/Pusa-basmati-white-sella.jpg';

import tradRaw from '../../images/rice-traditional-raw.jpg';
import tradWhite from '../../images/tirupati-white/Traditional-basmati-white-sella.jpg';

import sonaMasoori from '../../images/rice-sona-masoori.jpg';

import pr1114Gold from '../../images/mannat-gold/PR-1114-golden-sella.jpg';
import pr1114White from '../../images/tirupati-white/PR1114-white-sella.jpg';

import sugandhaGold from '../../images/mannat-gold/Sugandha-golden-sella.jpg';
import sugandhaWhite from '../../images/tirupati-white/Sugandha-white-sella.jpg';

import sharbatiGold from '../../images/mannat-gold/Sharbati-golden-sella.jpg';
import sharbatiWhite from '../../images/tirupati-white/Sharbati-white-sella-rice.jpg';
import lemon1121 from '../../images/lemon/1121_lemon_sella.jpg';
import lemon1509 from '../../images/lemon/1509_lemon_sella.jpg';
import new1718GoldenSella from '../../images/Mannat new/1718_golden_sella.jpg';
import new1718Steam from '../../images/Mannat new/1718_steam.jpg';
import new1718WhiteSella from '../../images/Mannat new/1718_white_sella.jpg';

const typeColors = {
  golden: { bg: 'bg-gradient-to-br from-amber-50 to-amber-100', border: 'border-amber-200', text: 'text-amber-800', accent: 'text-amber-600', badge: 'bg-gradient-to-r from-amber-500 to-amber-600' },
  white: { bg: 'bg-gradient-to-br from-stone-50 to-stone-100', border: 'border-stone-200', text: 'text-stone-700', accent: 'text-stone-600', badge: 'bg-gradient-to-r from-stone-400 to-stone-500' },
  steam: { bg: 'bg-gradient-to-br from-slate-50 to-blue-50', border: 'border-slate-200', text: 'text-slate-700', accent: 'text-slate-600', badge: 'bg-gradient-to-r from-slate-500 to-slate-600' },
  creamy: { bg: 'bg-gradient-to-br from-orange-50 to-amber-50', border: 'border-orange-200', text: 'text-orange-800', accent: 'text-orange-600', badge: 'bg-gradient-to-r from-orange-500 to-amber-500' },
  raw: { bg: 'bg-gradient-to-br from-neutral-50 to-stone-100', border: 'border-neutral-200', text: 'text-neutral-700', accent: 'text-neutral-600', badge: 'bg-gradient-to-r from-neutral-500 to-stone-500' },
  lemon: { bg: 'bg-gradient-to-br from-yellow-50 to-amber-50', border: 'border-yellow-200', text: 'text-yellow-800', accent: 'text-yellow-600', badge: 'bg-gradient-to-r from-yellow-500 to-amber-500' }
};

interface SubVariety {
  name: string;
  type: 'golden' | 'white' | 'steam' | 'creamy' | 'raw' | 'lemon';
  description: string;
  image: string;
  brands: string[];
}

interface Variety {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  subVarieties: SubVariety[];
}

const basmatiVarieties: Variety[] = [
  {
    id: '1121-basmati',
    title: '1121 Basmati Rice',
    subtitle: "World's Longest Grain",
    description: 'Premium extra-long grain Basmati reaching 8.35mm. Known for exceptional elongation and fluffy texture. Perfect for biryani and special occasions.',
    image: gold1121,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: 'Parboiled golden variety with enhanced nutritional retention. The golden hue indicates the parboiling process that locks in vitamins and minerals.', image: gold1121, brands: ['Mannat'] },
      { name: 'White Sella', type: 'white', description: 'Premium white parboiled rice with a clean appearance. Perfect for those who prefer traditional white rice with the benefits of parboiling.', image: white1121, brands: ['Tirupati'] },
      { name: 'Steam Rice', type: 'steam', description: 'Steam-treated for perfect texture and extended shelf life. The steaming process ensures consistent cooking results with minimal breakage.', image: steam1121, brands: ['Tirupati', 'Mannat'] },
      { name: 'Raw Rice', type: 'raw', description: 'Pure raw Basmati in its natural form. Untouched by processing, it offers the authentic Basmati experience with maximum aroma and natural taste.', image: raw1121, brands: ['Tirupati', 'Mannat'] }
    ]
  },
  {
    id: '1509-basmati',
    title: '1509 Basmati Rice',
    subtitle: 'Long Grain Perfection',
    description: 'Long slender grains with excellent aroma and faster cooking time. Great value without compromising on quality.',
    image: gold1509,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: 'Golden parboiled variety with rich taste and enhanced nutrition. Perfect for those who want premium quality at excellent value.', image: gold1509, brands: ['Mannat'] },
      { name: 'Steam Rice', type: 'steam', description: 'Steam-processed long grain rice for consistent cooking results. Quick to prepare with reliable texture every time.', image: steam1509, brands: ['Tirupati', 'Mannat'] },
      { name: 'Raw Rice', type: 'raw', description: 'Pure 1509 Basmati in its natural state. Offers authentic taste and maximum aroma for traditional cooking.', image: raw1509, brands: ['Tirupati', 'Mannat'] }
    ]
  },
  {
    id: '1401-basmati',
    title: '1401 Basmati Rice',
    subtitle: 'Aromatic & Early Maturing',
    description: 'Early-maturing aromatic variety with soft texture and superior taste. Ideal for everyday premium meals with shorter cooking time.',
    image: steam1401,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: 'Golden parboiled rice with excellent nutritional value. The parboiling process enhances the vitamin content while maintaining aromatic properties.', image: gold1401, brands: ['Mannat'] },
      { name: 'White Sella', type: 'white', description: 'Clean white parboiled rice with superior cooking properties. Perfect for households seeking quality rice for everyday consumption.', image: white1401, brands: ['Tirupati'] },
      { name: 'Steam Rice', type: 'steam', description: 'Steam-processed for consistent quality and extended freshness. Delivers reliable results every time with minimal effort.', image: steam1401, brands: ['Tirupati', 'Mannat'] },
      { name: 'Raw Rice', type: 'raw', description: 'Pure 1401 Basmati in its natural state. Offers authentic taste and maximum aroma for traditional cooking.', image: raw1401, brands: ['Tirupati', 'Mannat'] }
    ]
  },
  {
    id: 'pusa-basmati',
    title: 'Pusa Basmati Rice',
    subtitle: 'Aromatic & Flavorful',
    description: 'A classic Basmati variety recognized for its appealing aroma and great taste. Known for reliable cooking and grain separation.',
    image: pusaSteam,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: 'Golden parboiled Pusa rice, parboiled to retain nutrients while offering typical Basmati flavor.', image: pusaGold, brands: ['Mannat'] },
      { name: 'White Sella', type: 'white', description: 'Clean white parboiled Pusa rice, offering fluffy separation and ease of use in diverse recipes.', image: pusaWhite, brands: ['Tirupati'] },
      { name: 'Steam Rice', type: 'steam', description: 'Steam-processed Pusa variety for excellent cooking properties and durability.', image: pusaSteam, brands: ['Tirupati', 'Mannat'] }
    ]
  },
  {
    id: 'traditional-basmati',
    title: 'Traditional Basmati Rice',
    subtitle: 'The Original Heritage',
    description: 'The ancient and original form of Basmati rice, prized for its unparalleled natural scent and exquisite flavor.',
    image: tradRaw,
    subVarieties: [
      { name: 'White Sella', type: 'white', description: 'Parboiled traditional Basmati, bridging heritage aroma with practical, non-sticky cooking.', image: tradWhite, brands: ['Tirupati'] },
      { name: 'Raw Rice', type: 'raw', description: 'Pure, unprocessed traditional Basmati. The truest expression of indigenous Basmati heritage.', image: tradRaw, brands: ['Tirupati', 'Mannat'] }
    ]
  },
  {
    id: '1121-lemon-sella',
    title: '1121 Lemon Sella Rice',
    subtitle: 'Golden Parboiled Excellence',
    description: '1121 Lemon Sella Rice is a premium long-grain variety known for its distinct golden hue and exceptional nutritional value. The specialized parboiling process ensures that each grain remains separate, fluffy, and firm after cooking, making it an ideal choice for biryani, pulao, and various exotic dishes. Its unique color combined with the world-famous 1121 grain length brings a royal touch to every meal.',
    image: lemon1121,
    subVarieties: []
  },
  {
    id: '1509-lemon-sella',
    title: '1509 Lemon Sella Rice',
    subtitle: 'Fragrant & Nutritious',
    description: '1509 Lemon Sella Rice offers a perfect balance of aroma, taste, and texture. This variety undergoes a careful steaming and parboiling process that preserves natural vitamins while imparting a beautiful yellow tint to the grains. Renowned for its faster cooking time and impressive elongation, it provides a cost-effective yet premium experience for both household dining and commercial catering.',
    image: lemon1509,
    subVarieties: []
  },
];

const variety1718: Variety[] = [
  {
    id: '1718-basmati',
    title: '1718 Basmati Rice',
    subtitle: 'The 1718 Variety',
    description: '1718 Basmati Rice is a breakthrough variety that combines the best properties of traditional Basmati with enhanced grain resilience and productivity. It is known for its remarkable elongation after cooking, fluffy non-sticky texture, and a rich aroma that rivals premium Basmati selections. Perfectly suited for biryani and exotic preparations.',
    image: new1718GoldenSella,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: '', image: new1718GoldenSella, brands: ['Mannat'] },
      { name: 'Steam Rice', type: 'steam', description: '', image: new1718Steam, brands: ['Mannat'] },
      { name: 'White Sella', type: 'white', description: '', image: new1718WhiteSella, brands: ['Mannat'] }
    ]
  }
];

const nonBasmatiVarieties: Variety[] = [
  {
    id: 'sona-masoori',
    title: 'Sona Masoori Rice',
    subtitle: 'Light & Nutrient-Rich',
    description: 'A lightweight, medium-grain rice. Low in starch and popular in South Indian cuisine for its ease of digestion. Perfect for daily meals.',
    image: sonaMasoori,
    subVarieties: [
      { name: 'Raw Rice', type: 'raw', description: 'Pure Sona Masoori in its natural form. Light and easy to digest.', image: sonaMasoori, brands: ['Tirupati'] },
      { name: 'Steam Rice', type: 'steam', description: 'Steam-processed for better texture and longer shelf life.', image: sonaMasoori, brands: ['Tirupati'] }
    ]
  },
  {
    id: 'pr-1114',
    title: 'PR 11/14 Rice',
    subtitle: 'Versatile Long Grain',
    description: 'A popular high-yielding non-Basmati variety known for its long grains and excellent cooking properties.',
    image: pr1114White,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: 'Parboiled golden PR 11/14 variety holding good nutritional value and firm texture.', image: pr1114Gold, brands: ['Mannat'] },
      { name: 'White Sella', type: 'white', description: 'Parboiled white PR 11/14 variety, providing clean grains that cook beautifully.', image: pr1114White, brands: ['Tirupati'] }
    ]
  },
  {
    id: 'sugandha',
    title: 'Sugandha Rice',
    subtitle: 'Distinctive Aroma',
    description: 'Living up to its name "Fragrant", this variety offers distinct aroma and long grains at a very affordable price.',
    image: sugandhaWhite,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: 'Golden parboiled Sugandha rice combining affordability, nutrition, and pleasant aroma.', image: sugandhaGold, brands: ['Mannat'] },
      { name: 'White Sella', type: 'white', description: 'White parboiled Sugandha rice for an elegant aesthetic and straightforward cooking.', image: sugandhaWhite, brands: ['Tirupati'] }
    ]
  },
  {
    id: 'sharbati',
    title: 'Sharbati Rice',
    subtitle: 'Sweet & Aromatic',
    description: 'A pocket-friendly aromatic rice with good grain length and slight sweetness. Excellent alternative to premium Basmati.',
    image: sharbatiWhite,
    subVarieties: [
      { name: 'Golden Sella', type: 'golden', description: 'Parboiled golden Sharbati offering a cost-effective, nutritious option with good grain separation.', image: sharbatiGold, brands: ['Mannat'] },
      { name: 'White Sella', type: 'white', description: 'Parboiled white Sharbati rice. Visually appealing with a mild, delightful aroma.', image: sharbatiWhite, brands: ['Tirupati'] }
    ]
  }
];

const Products = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const basmatiRef = useRef<HTMLElement>(null);
  const nonBasmatiRef = useRef<HTMLElement>(null);

  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });
  const basmatiInView = useInView(basmatiRef, { once: true, margin: '-100px' });
  const nonBasmatiInView = useInView(nonBasmatiRef, { once: true, margin: '-100px' });

  const renderVarietySection = (variety: Variety) => {
    return (
      <motion.div
        key={variety.id}
        className="mb-20 last:mb-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mb-10 items-center">
          <div className="md:w-2/5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <FadeInImage
                src={variety.image}
                alt={variety.title}
                className="w-full h-64 md:h-80 object-contain"
                containerClassName="w-full h-64 md:h-80"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-1 block">{variety.subtitle}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-900">{variety.title}</h3>
              </div>
            </div>
          </div>
          <div className="md:w-3/5 w-full flex flex-col justify-center">
            <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-6">{variety.description}</p>
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100 shadow-sm inline-flex flex-col items-start">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3">Standard Packaging</span>
              <div className="flex flex-wrap gap-2 mb-6">
                {['1kg', '5kg', '10kg', '25kg', '30kg'].map(size => (
                  <span key={size} className="bg-white px-3 py-1.5 rounded-lg border border-stone-200 text-stone-700 font-bold text-sm shadow-sm">{size}</span>
                ))}
              </div>
              <Link
                to="/contact"
                className="px-8 py-3 bg-[#005e2a] text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#004d22] transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl active:scale-95"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>

        {variety.subVarieties.length > 0 && (
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-lg border border-stone-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {variety.subVarieties.map((item, subIdx) => {
                const colors = typeColors[item.type];
                return (
                  <Link
                    to="/contact"
                    key={subIdx}
                    className={`flex flex-col h-full group ${colors.bg} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 ${colors.border} hover:border-[#005e2a]/30`}
                  >
                    <div className="relative h-40 overflow-hidden bg-white">
                      <FadeInImage
                        src={item.image}
                        alt={`${variety.title} - ${item.name}`}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                        containerClassName="w-full h-full"
                      />
                      <div className={`absolute top-3 left-3 ${colors.badge} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-md`}>
                        {item.type}
                      </div>
                    </div>
                    <div className="p-4 flex flex-col h-full items-start">
                      <h5 className={`text-base font-serif font-bold ${colors.text} mb-2 group-hover:${colors.accent} transition-colors`}>
                        {item.name}
                      </h5>
                      <ExpandableText
                        text={item.description}
                        maxChars={60}
                        className="text-stone-600 text-[11px] leading-relaxed text-left"
                      />

                      <div className="mb-4 text-left w-full">
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 opacity-80">Available Sizes</p>
                        <div className="flex flex-wrap gap-1.5">
                          {['1kg', '5kg', '10kg', '25kg', '30kg'].map(size => (
                            <span key={size} className="text-[10px] bg-white px-2 py-1 rounded-md border border-stone-200 text-stone-800 font-bold shadow-sm">{size}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6 items-center">
                        {item.brands.map((brand, brandIdx) => (
                          <span
                            key={brandIdx}
                            className="text-[11px] font-bold bg-white/90 px-2.5 py-1 rounded-md text-stone-600 border border-stone-100 shadow-sm"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>

                      <div className={`mt-auto w-full py-3.5 flex items-center justify-center rounded-xl font-bold text-[10px] uppercase tracking-widest text-white shadow-md transition-all group-hover:shadow-xl group-hover:-translate-y-0.5 ${colors.badge}`}>
                        Enquire Now
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 via-white to-stone-50">
      <div ref={headerRef} className="pt-36 md:pt-44 pb-16 text-center px-6 bg-[#005e2a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-gold-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-gold-400 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.span
            className="text-gold-400 tracking-widest uppercase text-xs font-bold mb-3 block"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Excellence in Every Grain
          </motion.span>
          <motion.h1
            className="text-4xl md:text-7xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Product Collection
          </motion.h1>
          <motion.p
            className="text-stone-200 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our comprehensive range of premium Basmati and Non-Basmati varieties with all sub-products visible
          </motion.p>
        </div>
      </div>

      <div className="bg-[#005e2a] text-white py-5 px-6 text-center shadow-lg">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <span className="flex items-center gap-2">
            <Star className="text-gold-400 w-4 h-4" /> 10+ Varieties
          </span>
          <span className="flex items-center gap-2">
            <Leaf className="text-gold-400 w-4 h-4" /> 25+ Sub-Products
          </span>
          <span className="flex items-center gap-2">
            <ChevronDown className="text-gold-400 w-4 h-4" /> Raw, Steam, White & Golden Sella
          </span>
        </div>
      </div>

      <ProductSlider />

      <section ref={basmatiRef} className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <motion.div
          className="flex items-end justify-between mb-12 border-b-2 border-[#005e2a] pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={basmatiInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-2">Basmati Rice Varieties</h2>
            <p className="text-stone-500">Premium aromatic long-grain rice</p>
          </div>
          <Star className="hidden md:block text-gold-500 w-8 h-8" />
        </motion.div>

        <div>
          {basmatiVarieties.slice(0, 2).map((variety) => renderVarietySection(variety))}
          {variety1718.map((variety) => renderVarietySection(variety))}
          {basmatiVarieties.slice(2).map((variety) => renderVarietySection(variety))}
        </div>
      </section>

      <section ref={nonBasmatiRef} className="py-16 md:py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex items-end justify-between mb-12 border-b-2 border-[#005e2a] pb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={nonBasmatiInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-2">Non-Basmati Rice Varieties</h2>
              <p className="text-stone-500">Everyday premium essentials</p>
            </div>
          </motion.div>

          <div>
            {nonBasmatiVarieties.map((variety) => renderVarietySection(variety))}
          </div>
        </div>
      </section>



      <motion.section
        className="py-20 bg-white border-t border-stone-200 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <Leaf className="w-10 h-10 text-gold-500 mx-auto mb-6" />
          <motion.h2
            className="text-3xl md:text-5xl font-serif text-stone-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Order?
          </motion.h2>
          <motion.p
            className="text-stone-600 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us for specifications, bulk pricing, and export inquiries.
          </motion.p>
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-stone-900 font-bold tracking-widest uppercase hover:bg-gold-400 transition-colors duration-300 rounded-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote
            <ArrowRight size={18} />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};

export default Products;
