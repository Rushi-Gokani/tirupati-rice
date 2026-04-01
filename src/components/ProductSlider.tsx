import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInImage from './ui/FadeInImage';

import tirupatiPremium from '../../images/tirupati new/6.png';
import lemon1121 from '../../images/tirupati new/4.png';

const products = [
    {
        id: 1,
        title: "Tirupati 1121 Premium Basmati Rice",
        subtitle: "The King of Basmati",
        description: "Extra-long grains with an exquisite aroma that defines luxury dining. Aged to perfection for the ultimate culinary experience.",
        image: tirupatiPremium,
        brand: "Tirupati",
        link: "/products",
        color: "from-emerald-900 to-[#005e2a]"
    },
    {
        id: 2,
        title: "1121 XXXL Golden Sella",
        subtitle: "Golden Parboiled Excellence",
        description: "Distinctive golden hue and superior strength. Ideal for large gatherings and rich culinary preparations.",
        image: lemon1121,
        brand: "Tirupati",
        link: "/products",
        color: "from-yellow-600 to-yellow-800"
    },
     {
        id: 3,
        title: "Mannati Rice 1121 30kg (PREMIUM)",
        description: "A breakthrough variety combining traditional aroma with enhanced grain resilience and productivity.",
        image: "/images/Mannat new/Mannati Rice 1121 30kg (PREMIUM).png",
        brand: "Mannat",
        link: "/products",
        color: "from-stone-700 to-stone-900"
    }
];

const ProductSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % products.length);
    }, []);

    const slidePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(slideNext, 5000); // 5 seconds auto-play
        return () => clearInterval(timer);
    }, [slideNext]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const product = products[currentIndex];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-end justify-between mb-12 border-b-2 border-[#005e2a] pb-6">
                    <div>
                        <span className="text-gold-600 tracking-widest uppercase text-sm font-bold mb-2 block">Our Masterpieces</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-stone-900">Featured Collections</h2>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={slidePrev}
                            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all shadow-sm"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={slideNext}
                            className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all shadow-sm"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="relative h-[600px] md:h-[480px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4 md:gap-0 bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-stone-100">
                                {/* Text Content */}
                                <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br ${product.color} text-white relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 p-10 opacity-10">
                                        <Star size={200} className="transform rotate-12" />
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative z-10"
                                    >
                                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 border border-white/30">
                                            {product.brand} Brand
                                        </span>
                                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold mb-2 md:mb-3">{product.title}</h3>
                                        {product.subtitle && <p className="text-gold-200 text-base md:text-lg font-medium mb-3 md:mb-4">{product.subtitle}</p>}
                                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8 max-w-md italic">
                                            "{product.description}"
                                        </p>

                                        <Link
                                            to={product.link}
                                            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-stone-900 rounded-xl font-bold uppercase tracking-widest text-xs md:text-sm hover:bg-gold-500 hover:text-white transition-all group shadow-xl"
                                        >
                                            Explore Collection
                                            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Image Section */}
                                <div className="relative h-full w-full flex items-center justify-center p-6 md:p-12 bg-white">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                                        className="relative w-full h-full max-w-sm"
                                    >
                                        <div className="absolute inset-0 bg-stone-100 rounded-full blur-3xl opacity-50 scale-100" />
                                        <FadeInImage
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                                            containerClassName="w-full h-full flex items-center justify-center"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-12 gap-3">
                    {products.map((_, idx) => (
                        <button
                            key={idx.toString()}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`h-1.5 transition-all rounded-full ${currentIndex === idx ? 'w-12 bg-gold-600' : 'w-3 bg-stone-300'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;
