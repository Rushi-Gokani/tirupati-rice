import { motion } from 'framer-motion';
import { ShieldCheck, Utensils, Heart } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';

import gold1121 from '../../images/mannat-gold/1121-golden-sella.jpg';
import gold1401 from '../../images/mannat-gold/1401-golden-sella.jpg';
import gold1509 from '../../images/mannat-gold/1509-basmati-golden-sella-rice.jpg';
import gold1718 from '../../images/mannat-gold/1718-golden-sella.jpg';
import goldPR1114 from '../../images/mannat-gold/PR-1114-golden-sella.jpg';
import goldPusa from '../../images/mannat-gold/Pusa-basmati-golden-sella.jpg';
import goldSharbati from '../../images/mannat-gold/Sharbati-golden-sella.jpg';
import goldSugandha from '../../images/mannat-gold/Sugandha-golden-sella.jpg';

const mannatProducts = [
  {
    title: "1121 golden sella",
    desc: "Everyday perfect long-grain rice with beautiful aroma.",
    image: gold1121
  },
  {
    title: "1401 golden sella",
    desc: "Aromatic and fluffy for your daily meals.",
    image: gold1401
  },
  {
    title: "1509 basmati golden sella rice",
    desc: "Short-grain perfection for quick dishes and snacks.",
    image: gold1509
  },
  {
    title: "1718 golden sella",
    desc: "Parboiled for extra nutrition and great taste.",
    image: gold1718
  },
  {
    title: "PR 1114 golden sella",
    desc: "Rich in fiber and low in glycemic index.",
    image: goldPR1114
  },
  {
    title: "Pusa basmati golden sella",
    desc: "Budget-friendly aromatic rice for every kitchen.",
    image: goldPusa
  },
  {
    title: "Sharbati golden sella",
    desc: "Ideal for daily consumption with delicious taste.",
    image: goldSharbati
  },
  {
    title: "Sugandha golden sella",
    desc: "Excellent grain length and enticing aroma.",
    image: goldSugandha
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
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-stone-900 mb-6 mt-14"
        >
          Mannat
        </motion.h1>
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
            src="data:image/jpeg;base64,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"
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
                <h3 className="text-xl font-bold text-stone-800 mb-2">{product.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed flex-grow">{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default MannatBrand;
