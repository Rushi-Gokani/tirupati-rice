import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Utensils, Heart } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';
import ExpandableText from '../components/ui/ExpandableText';

import mannatLogo from '../../images/tran-mannat.png';
import mannatClassic from '../../images/Mannat new/mannat-classic-30kg.png';
import mannatGoldenSella from '../../images/Mannat new/mannat-golden-sella-30kg.png';
import mannatPremium from '../../images/Mannat new/mannat-premium-30kg.png';
import mannatHousehold from '../../images/mannat-household.jpeg';


const mannatProducts = [
  {
    title: "Mannati Rice 1121 30kg (CLASSIC)",
    desc: "Mannat 1121 Classic embodies everyday comfort with dependable quality and a gentle aroma. Its long, soft grains cook into a light and fluffy texture, making it a perfect companion for daily meals. Designed for consistency and ease, it offers a wholesome source of carbohydrates for sustained energy while remaining low in fat and easy to digest. Naturally gluten-free, it supports a balanced diet while bringing warmth and satisfaction to every plate.",
    image: mannatClassic
  },
  {
    title: "Mannati Rice 1121 30kg (GOLDEN SELLA)",
    desc: "Mannat 1121 Golden Sella combines strength, nutrition, and versatility in every grain. Its golden color and firm texture, achieved through careful parboiling, ensure that the rice remains separate and non-sticky after cooking—ideal for biryani and large-scale preparations. This process also helps preserve vital nutrients, supporting better energy levels and digestion. With its robust structure and nourishing qualities, it is a dependable choice for both taste and health.",
    image: mannatGoldenSella
  },
  {
    title: "Mannati Rice 1121 30kg (PREMIUM)",
    desc: "Elevate your dining experience with Mannat 1121 Premium, a refined selection of high-quality basmati known for its superior aroma and graceful grain elongation. Each serving delivers a soft, fluffy texture and a rich, inviting fragrance that enhances every dish. Beyond its indulgent appeal, it is low in cholesterol, easy to digest, and provides lasting energy, making it a perfect blend of luxury and wellness for special occasions and everyday enjoyment alike.",
    image: mannatPremium
  }
];

const MannatBrand = () => {
  const features = [
    { icon: <Utensils className="w-6 h-6" />, title: "Daily Delight", desc: "Versatile rice suitable for all everyday recipes." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Nutrient Rich", desc: "Parboiled process locks in essential vitamins." },
    { icon: <Heart className="w-6 h-6" />, title: "Consistent Quality", desc: "Fluffy and perfect texture in every single cook." },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-28 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-gold-600 tracking-widest uppercase text-sm font-bold mb-4 block"
        >
          Everyday Premium
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6 mt-10"
        >
          <img
            src={mannatLogo}
            alt="Mannat Brand Logo"
            className="w-auto h-32 md:h-44 lg:h-56 object-contain drop-shadow-sm"
          />
        </motion.div>
        <motion.p
          className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Mannat represents our promise of quality for everyday meals. It offers a golden hue and a resilient texture, making it perfect for global cuisines and daily consumption without compromising on the premium experience.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        <motion.div
          className="lg:col-span-7 space-y-10 order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#005e2a] mb-6">Perfection in Every Household</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500 rounded-l-full"></div>
              <p className="text-stone-700 leading-relaxed text-lg text-justify pl-8 py-2 bg-white/50 rounded-r-2xl">
                Crafted from premium quality paddy, Mannat undergoes a specialized parboiling process that retains natural nutrients and drives the flavor deeply into the grain. It stays delightfully firm and separate after cooking, bringing reliable excellence to your everyday dining table.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-gold-600 mb-5 border border-gold-100">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-stone-900 mb-3 text-lg">{feature.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-[#005e2a]/10 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        >
          <FadeInImage
            src={mannatHousehold}
            alt="Mannat Everyday Premium"
            className="w-full h-full object-cover grayscale-[20%]"
            containerClassName="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Product Grid Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24 lg:mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#005e2a] mb-4">Our Mannat Range</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Discover the perfect rice for every type of meal. Consistent quality, delicious taste, and everyday value.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mannatProducts.map((product, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="aspect-square w-full relative overflow-hidden bg-stone-100 shrink-0">
                <FadeInImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-800 mb-2 flex items-center">{product.title}</h3>
                <ExpandableText
                  text={product.desc}
                  maxChars={80}
                  className="text-stone-600 text-sm leading-relaxed"
                />

                <div className="mt-4 pt-4 border-t border-stone-100">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-2 opacity-80">Available Sizes</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['1kg', '5kg', '10kg', '25kg', '30kg'].map(size => (
                      <span key={size} className="text-[10px] bg-white px-3 py-1.5 rounded-lg border border-stone-200 text-stone-800 font-bold shadow-sm">{size}</span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="block w-full py-4 bg-[#005e2a] text-white text-center rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#004d22] transition-all transform hover:-translate-y-1 shadow-md hover:shadow-xl active:scale-95"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default MannatBrand;
