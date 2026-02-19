import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInImage from './ui/FadeInImage';

// Reusing the same image data for consistency
const goldRiceImage = "data:image/jpeg;base64,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";

// Product Data (Consolidated)
const PRODUCTS = [
    {
        id: '1121-steam',
        title: '1121 Steam Basmati',
        description: 'World’s longest grain (8.35mm). Fluffy, separate grains.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop&crop=focalpoint&fp-y=0.4',
        type: 'Basmati'
    },
    {
        id: '1509-basmati',
        title: '1509 Basmati Rice',
        description: 'Premium slender grains with excellent aroma.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop&crop=focalpoint&fp-y=0.5',
        type: 'Basmati'
    },
    {
        id: '1401-basmati',
        title: '1401 Basmati Rice',
        description: 'Early-maturing aromatic variety with soft texture.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop&crop=focalpoint&fp-y=0.6',
        type: 'Basmati'
    },
    {
        id: 'traditional-basmati',
        title: 'Traditional Basmati',
        description: 'Authentic heritage grain. Richest aroma and sweet taste.',
        image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop&crop=focalpoint&fp-y=0.7',
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
        title: 'Sharbati Rice',
        description: 'Pocket-friendly aromatic rice. Great daily alternative.',
        image: goldRiceImage,
        type: 'Non-Basmati'
    },
    {
        id: 'sugandha',
        title: 'Sugandha Rice',
        description: 'Meaning "Fragrant". Distinct aroma at a great price.',
        image: goldRiceImage,
        type: 'Non-Basmati'
    },
    {
        id: 'sona-masoori',
        title: 'Sona Masoori',
        description: 'Lightweight, medium-grain. Easy to digest.',
        image: goldRiceImage,
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
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${product.type === 'Non-Basmati' ? 'grayscale-[20%] group-hover:grayscale-0' : ''}`}
                                        containerClassName="w-full h-full"
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
