import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInImage from './ui/FadeInImage';
import goldenSella1401 from '../../images/mannat-gold/1401-golden-sella.jpg';
import goldenSella1509 from '../../images/rice-1509-steam.jpg';
import steam1121 from '../../images/rice-1121-steam.jpg';
import traditionalBasmati from '../../images/tirupati-white/Traditional-basmati-white-sella.jpg';
import sharbatiRice from '../../images/tirupati-white/Sharbati-white-sella-rice.jpg';
import sugandhaRice from '../../images/tirupati-white/Sugandha-white-sella.jpg';
import sonaMasoori from '../../images/rice-sona-masoori.jpg';
import pr1114 from '../../images/tirupati-white/PR1114-white-sella.jpg';

// Reusing the same image data for consistency
const goldRiceImage = pr1114;
// Product Data (Consolidated)
const PRODUCTS = [
    {
        id: '1121-steam',
        title: '1121 steam rice',
        description: 'World’s longest grain (8.35mm). Fluffy, separate grains.',
        image: goldenSella1401,
        type: 'Basmati'
    },
    {
        id: '1509-basmati',
        title: '1509 basmati golden sella rice',
        description: 'Premium slender grains with excellent aroma.',
        image: goldenSella1509,
        type: 'Basmati'
    },
    {
        id: '1401-basmati',
        title: '1401 golden sella',
        description: 'Early-maturing aromatic variety with soft texture.',
        image: goldenSella1401,
        type: 'Basmati'
    },
    {
        id: 'traditional-basmati',
        title: 'Traditional basmati white sella',
        description: 'Authentic heritage grain. Richest aroma and sweet taste.',
        image: traditionalBasmati,
        type: 'Basmati'
    },
    {
        id: 'pr-11-14',
        title: 'PR 11 / PR 14 Rice',
        description: 'Non-sticky and fluffy. Ideal for daily Indian meals.',
        image: goldRiceImage,
        type: 'Non-Basmati'
    },
    {
        id: 'sharbati',
        title: 'Sharbati white sella rice',
        description: 'Pocket-friendly aromatic rice. Great daily alternative.',
        image: sharbatiRice,
        type: 'Non-Basmati'
    },
    {
        id: 'sugandha',
        title: 'Sugandha white sella',
        description: 'Meaning "Fragrant". Distinct aroma at a great price.',
        image: sugandhaRice,
        type: 'Non-Basmati'
    },
    {
        id: 'sona-masoori',
        title: 'Sona masoori rice',
        description: 'Lightweight, medium-grain. Easy to digest.',
        image: sonaMasoori,
        type: 'Non-Basmati'
    }
];

const ProductCategories = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = direction === 'left' ? -320 : 320;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            // Update buttons state after scroll
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="mb-6 md:mb-0 w-full md:w-auto"
                    >
                        <span className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-3 block">
                            Our Product Range
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                            Explore Our Varieties
                        </h2>
                    </motion.div>

                    <motion.div
                        className="flex items-center justify-between w-full md:w-auto gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Scroll Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                className={`p-3 rounded-full border border-stone-200 transition-all duration-300 ${!canScrollLeft ? 'text-stone-300 opacity-50 cursor-not-allowed' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900 hover:border-stone-300'}`}
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                className={`p-3 rounded-full border border-stone-200 transition-all duration-300 ${!canScrollRight ? 'text-stone-300 opacity-50 cursor-not-allowed' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900 hover:border-stone-300'}`}
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>

                        <Link
                            to="/products"
                            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-medium tracking-wide uppercase text-sm hover:bg-gold-500 transition-colors duration-300 rounded-sm ml-4"
                        >
                            View All Products
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                {/* Scrolling Container */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {PRODUCTS.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-[280px] md:min-w-[320px] snap-center md:snap-start bg-white rounded-lg border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
                            >
                                <Link to="/products" className="block relative h-56 overflow-hidden bg-stone-100">
                                    <FadeInImage
                                        src={product.image}
                                        alt={product.title}
                                        className={`w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110 ${product.type === 'Non-Basmati' ? 'grayscale-[20%] group-hover:grayscale-0' : ''}`}
                                        containerClassName="w-full h-full bg-stone-100"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-800 rounded-sm shadow-sm z-10">
                                        {product.type}
                                    </div>
                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
                                </Link>

                                <div className="p-6 flex flex-col flex-grow">
                                    <Link to="/products">
                                        <h3 className="text-lg font-serif font-bold text-stone-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-1">
                                            {product.title}
                                        </h3>
                                    </Link>
                                    <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                                        {product.description}
                                    </p>
                                    <Link
                                        to="/products"
                                        className="inline-flex items-center gap-2 text-stone-900 font-medium text-sm w-fit group/link"
                                    >
                                        <span className="border-b border-transparent group-hover/link:border-gold-600 group-hover/link:text-gold-600 transition-all">View Details</span>
                                        <ArrowRight size={14} className="group-hover/link:text-gold-600 group-hover/link:translate-x-1 transition-all" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white font-medium tracking-wide uppercase text-sm hover:bg-gold-500 transition-colors duration-300 rounded-sm w-full justify-center"
                    >
                        View All Products
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
