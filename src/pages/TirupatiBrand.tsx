import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Package } from 'lucide-react';
import FadeInImage from '../components/ui/FadeInImage';

import whiteSella1121 from '../../images/tirupati-white/1121-white-sella.jpg';
import whiteSella1401 from '../../images/tirupati-white/1401-white-sella.jpg';
import whiteSellaPR1114 from '../../images/tirupati-white/PR1114-white-sella.jpg';
import whiteSellaPusa from '../../images/tirupati-white/Pusa-basmati-white-sella.jpg';
import whiteSellaSharbati from '../../images/tirupati-white/Sharbati-white-sella-rice.jpg';
import whiteSellaSugandha from '../../images/tirupati-white/Sugandha-white-sella.jpg';
import whiteSellaTraditional from '../../images/tirupati-white/Traditional-basmati-white-sella.jpg';
import tirupatiLogo from '../../images/2.png';
import newTirupati1121Premium from '../../images/tirupati new/TIRUPATI 1121 PREMIUM BASMATI RICE - file-2.png';
import newTirupati1121Raw from '../../images/tirupati new/TIRUPATI 1121 RAW CLASSIC RICE.png';
import newTirupati1121GoldenSella from '../../images/tirupati new/TIRUPATI 1121 XXXL GOLDEN SELLA- file.png';
import newTirupatiBiryaniSpecial from '../../images/tirupati new/TIRUPATI PREMIUM BIRYANI SPECIAL RICE- file.png';

const tirupatiProducts = [
  {
    title: "TIRUPATI 1121 PREMIUM BASMATI RICE",
    desc: "Indulge in the true essence of premium basmati with Tirupati 1121 Premium, where every grain reflects purity, length, and natural aroma. Carefully aged and processed, this exquisite rice transforms into long, fluffy, non-sticky grains that elevate everyday meals into a fine dining experience. Its rich fragrance and delicate texture make it ideal for a variety of dishes, from simple home-cooked meals to special preparations. Naturally low in fat, cholesterol-free, and easy to digest, it provides sustained energy while being gentle on the stomach—making it a wholesome choice for daily nourishment.",
    image: newTirupati1121Premium
  },
  {
    title: "TIRUPATI 1121 RAW CLASSIC RICE",
    desc: "Rooted in tradition and authenticity, Tirupati 1121 Raw Classic Rice offers a natural taste and firm texture that complements everyday cooking. Its subtly aromatic grains cook evenly, remaining separate and light, perfect for those who appreciate simplicity with quality. This rice serves as a reliable source of energy through its rich carbohydrate content, while its low sodium levels and easy digestibility make it suitable for regular consumption. A true staple that brings comfort, purity, and balance to every meal.",
    image: newTirupati1121Raw
  },
  {
    title: "TIRUPATI 1121 XXXL GOLDEN SELLA",
    desc: "Tirupati 1121 XXXL Golden Sella stands out with its distinctive golden hue and superior strength, achieved through a meticulous parboiling process. This technique not only enhances the grain’s firmness and non-sticky texture but also helps retain essential nutrients. Ideal for large gatherings and rich culinary preparations, it delivers consistent quality and exceptional taste. With improved nutrient retention, a relatively lower glycemic impact, and long-lasting energy release, it supports both flavor and well-being in every serving.",
    image: newTirupati1121GoldenSella
  },
  {
    title: "TIRUPATI PREMIUM BIRYANI SPECIAL RICE",
    desc: "Crafted for culinary excellence, Tirupati Premium Biryani Special Rice is designed to bring out the finest flavors in every festive dish. With its extra-long grains, remarkable elongation, and captivating aroma, it ensures that every serving of biryani or pulao is a masterpiece. The grains remain perfectly separate and fluffy, enhancing both presentation and taste. Alongside its indulgent appeal, it is naturally gluten-free, low in saturated fat, and easy to digest, offering a delightful combination of taste and nourishment.",
    image: newTirupatiBiryaniSpecial
  },
  {
    title: "1121 white sella",
    desc: "Everyday perfect long-grain rice with beautiful aroma.",
    image: whiteSella1121
  },
  {
    title: "1401 white sella",
    desc: "Aromatic and fluffy for your daily meals.",
    image: whiteSella1401
  },
  {
    title: "PR1114 white sella",
    desc: "Short-grain perfection for quick dishes and snacks.",
    image: whiteSellaPR1114
  },
  {
    title: "Pusa basmati white sella",
    desc: "Parboiled for extra nutrition and great taste.",
    image: whiteSellaPusa
  },
  {
    title: "Sharbati white sella rice",
    desc: "Consistent quality you can trust for every occasion.",
    image: whiteSellaSharbati
  },
  {
    title: "Sugandha white sella",
    desc: "Specially formulated for those special family dinners.",
    image: whiteSellaSugandha
  },
  {
    title: "Traditional basmati white sella",
    desc: "Extra long grains for a royal touch to your biryani.",
    image: whiteSellaTraditional
  }
];

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
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-6 mt-10"
        >
          <img
            src={tirupatiLogo}
            alt="Tirupati Brand Logo"
            className="w-auto h-24 md:h-32 lg:h-40 object-contain drop-shadow-sm"
          />
        </motion.div>
        <motion.p
          className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tirupati is our flagship brand, offering the highest quality Basmati rice. Known for its extra-long grains, incredible aroma, and exquisite taste. This is the ultimate choice for luxury dining and special occasions.
        </motion.p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-5 h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-[#005e2a]/10"
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
        >
          <FadeInImage
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop"
            alt="Tirupati Basmati Rice"
            className="w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </motion.div>

        <motion.div
          className="lg:col-span-7 space-y-10"
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#005e2a] mb-6">The Crown Jewel of Basmati</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-500 rounded-l-full"></div>
              <p className="text-stone-700 leading-relaxed text-lg text-justify pl-8 py-2 bg-white/50 rounded-r-2xl">
                Tirupati brings you the authentic taste of tradition. Our grains undergo rigorous sorting and an aging process that guarantees non-sticky, fluffy rice with an irresistible fragrance. Whether crafting a royal Biryani or an elegant pilaf, Tirupati elevates your culinary creation to a masterpiece.
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
      </div>

      {/* Product Grid Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24 lg:mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#005e2a] mb-4">Our Tirupati Range</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">Discover the perfect rice for every type of meal. Consistent quality, delicious taste, and everyday value.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tirupatiProducts.map((product, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 flex flex-col h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="aspect-square w-full relative overflow-hidden bg-white shrink-0 p-4 rounded-t-2xl">
                <FadeInImage
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  containerClassName="w-full h-full bg-white"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-stone-800 mb-2 flex items-center">{product.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed flex-grow">{product.desc}</p>

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
    </div>
  );
};

export default TirupatiBrand;
