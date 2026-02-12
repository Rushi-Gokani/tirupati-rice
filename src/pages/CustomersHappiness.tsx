import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartHandshake, BadgeCheck, Gem, HandHeart, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInImage from '../components/ui/FadeInImage';

type Testimonial = {
  name: string;
  location: string;
  quote: string;
  rating: number; // 1..5
};

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    location: 'Delhi, India',
    quote:
      'The aroma is exactly what my family expects for weekends. Every bag feels consistent—clean grains and beautiful elongation.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    location: 'Mumbai, India',
    quote:
      'We switched for daily meals and stayed for the quality. It cooks evenly and the taste feels authentic—like home.',
    rating: 5,
  },
  {
    name: 'Fatima Khan',
    location: 'Hyderabad, India',
    quote:
      'For biryani, I need trust more than anything. Tirupati has been reliable—no surprises, only compliments at the table.',
    rating: 5,
  },
  {
    name: 'Rohan Mehta',
    location: 'Ahmedabad, India',
    quote:
      'Packaging is neat and the rice is fresh. The experience feels premium yet traditional—exactly what we want.',
    rating: 4,
  },
  {
    name: 'Neha Iyer',
    location: 'Bengaluru, India',
    quote:
      'Light, fragrant, and easy to cook. It fits our everyday meals and special occasions without changing our process.',
    rating: 5,
  },
  {
    name: 'Sanjay Patel',
    location: 'Surat, India',
    quote:
      'Good value with dependable results. The grains stay separate and look elegant on the plate.',
    rating: 4,
  },
];

const values = [
  {
    icon: <HeartHandshake className="w-7 h-7 text-gold-500" />,
    title: 'Trust',
    desc: 'A relationship built over time—families choose us because consistency is never compromised.',
  },
  {
    icon: <BadgeCheck className="w-7 h-7 text-gold-500" />,
    title: 'Quality',
    desc: 'Careful sourcing, clean processing, and rigorous standards—so every grain earns your confidence.',
  },
  {
    icon: <Gem className="w-7 h-7 text-gold-500" />,
    title: 'Tradition',
    desc: 'Rooted in heritage and handled with patience—preserving taste, aroma, and authenticity.',
  },
  {
    icon: <HandHeart className="w-7 h-7 text-gold-500" />,
    title: 'Service',
    desc: 'From households to partners, we listen and support—because satisfaction is a shared responsibility.',
  },
];

const CustomersHappiness = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true });
  const introInView = useInView(introRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-stone-50 overflow-hidden">
      {/* 1. Hero */}
      <div
        ref={heroRef}
        className="relative h-[45vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center bg-stone-50"
      >
        <div className="absolute inset-0 w-full h-full">
          <FadeInImage
            src="https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=2000&auto=format&fit=crop"
            alt="Steamed rice bowl"
            className="w-full h-full object-cover opacity-20"
            containerClassName="w-full h-full"
            loading="eager"
          />
        </div>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-white/90"
          animate={heroInView ? { opacity: [0.55, 0.8, 0.55] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 text-center text-stone-900 px-6 max-w-4xl mt-14 md:mt-0">
          <motion.span
            className="text-gold-500 tracking-[0.3em] uppercase text-xs md:text-sm font-bold mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            A Promise Kept
          </motion.span>
          <motion.h1
            className="text-4xl md:text-7xl font-serif font-bold mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Customers Happiness
          </motion.h1>
          <div className="mx-auto mb-5 h-px w-44 bg-gradient-to-r from-red-600 via-[#005e2a] to-blue-600 opacity-70" />
          <motion.p
            className="text-base md:text-xl text-stone-700 font-light max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From everyday meals to festive feasts, we are honored to be a trusted part of your kitchen—
            where satisfaction is felt in every fragrance, grain, and serving.
          </motion.p>
        </div>
      </div>

      {/* 2. Intro */}
      <section ref={introRef} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={introInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-3 block">
                Trust & Satisfaction
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6">
                Built on honesty, served with care
              </h2>
              <div className="space-y-4 text-stone-600 text-base leading-relaxed font-light">
                <p>
                  Customer happiness is not a slogan for us—it is a daily discipline. We focus on purity,
                  careful processing, and reliable cooking results so that your meals feel confident and
                  complete.
                </p>
                <p>
                  Whether you prepare simple steamed rice or a celebratory biryani, our aim remains the
                  same: a grain that respects tradition, meets expectations, and earns trust with every
                  purchase.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={introInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden">
                <div className="p-6 md:p-8">
                  <p className="text-stone-900 font-serif text-lg md:text-xl leading-relaxed">
                    “Satisfaction is when quality remains the same—today, tomorrow, and every time you
                    open the bag.”
                  </p>
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-red-600/20 via-[#005e2a]/20 to-blue-600/20" />
                  <p className="mt-4 text-xs uppercase tracking-widest text-stone-500 font-bold">
                    Tirupati Customer Promise
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Values */}
      <section ref={valuesRef} className="py-16 md:py-24 bg-rice-50 border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-2 block">
              What Customers Feel
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                className="bg-white rounded-lg border border-stone-100 shadow-sm p-6 md:p-7 text-center"
                initial={{ opacity: 0, y: 25 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-lg font-serif text-stone-900 font-bold mb-2">{v.title}</h3>
                <p className="text-stone-600 font-light text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section ref={testimonialsRef} className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-600 tracking-widest uppercase text-xs font-bold mb-2 block">
              Words from Homes
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
              Customer Satisfaction
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-base md:text-lg font-light">
              A few kind notes from customers who value purity, tradition, and dependable taste.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={`${t.name}-${t.location}`}
                className="rounded-lg border border-stone-100 shadow-sm bg-stone-50 p-6 md:p-7"
                initial={{ opacity: 0, y: 25 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 + idx * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-stone-900 font-bold">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-stone-500 font-bold mt-1">
                      {t.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < t.rating ? 'text-gold-500 fill-gold-500' : 'text-stone-300'}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-red-600/15 via-[#005e2a]/15 to-blue-600/15" />
                <p className="mt-4 text-stone-700 font-light leading-relaxed italic">“{t.quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section ref={ctaRef} className="py-16 md:py-24 bg-stone-50 text-stone-900 text-center border-t border-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-5xl font-serif mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            Share your experience with Tirupati
          </motion.h2>
          <motion.p
            className="text-stone-600 mb-8 text-base md:text-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Your feedback helps us preserve the tradition of quality. Reach out for support, bulk orders, or
            partnership opportunities.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-white font-medium tracking-widest uppercase hover:bg-gold-600 transition-colors duration-300"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-stone-900/20 hover:bg-stone-900 hover:text-white transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Explore Brands
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CustomersHappiness;
