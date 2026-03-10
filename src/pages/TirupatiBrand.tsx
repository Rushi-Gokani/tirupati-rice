import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle, Package } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';

const TirupatiBrand = () => {
  const features = [
    { icon: <Sparkles className="w-6 h-6" />, title: "Premium Selection", desc: "Sourced from the finest foothills of the Himalayas." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Extra-Long Grain", desc: "Grains that elongate up to twice their original length." },
    { icon: <Package className="w-6 h-6" />, title: "Aged to Perfection", desc: "Aged for months to enhance aroma and texture." },
  ];

  return (
    <div className="min-h-screen bg-stone-50 pt-28 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-gold-600 tracking-widest uppercase text-sm font-bold mb-4 block"
        >
          Premium Selection
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-stone-900 mb-6"
        >
          Tirupati
        </motion.h1>
        <motion.p 
          className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tirupati is our flagship brand, offering the highest quality Basmati rice. Known for its extra-long grains, incredible aroma, and exquisite taste. This is the ultimate choice for luxury dining and special occasions.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        >
          <FadeInImage
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop"
            alt="Tirupati Basmati Rice"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl font-serif text-[#005e2a] mb-4">The Crown Jewel of Basmati</h2>
            <p className="text-stone-700 leading-relaxed text-lg text-justify border-l-4 border-gold-500 pl-4 bg-white p-6 rounded-r-lg shadow-sm">
              Tirupati brings you the authentic taste of tradition. Our grains undergo rigorous sorting and an aging process that guarantees non-sticky, fluffy rice with an irresistible fragrance. Whether crafting a royal Biryani or an elegant pilaf, Tirupati elevates your culinary creation to a masterpiece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center text-gold-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-stone-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TirupatiBrand;
