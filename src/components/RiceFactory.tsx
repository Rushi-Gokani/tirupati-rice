import React from 'react';
import { motion } from 'framer-motion';
import {
    Factory,
    Warehouse,
    Zap,
    Settings,
    Scan,
    Thermometer,
    Package,
    ShoppingBag,
    Layers,
    CheckCircle,
    Database
} from 'lucide-react';

const RiceFactory = () => {

    const features = [
        {
            icon: <Layers className="w-6 h-6" />,
            title: "Sprawling Campus",
            text: "Spread across the area of 10 hectares",
        },
        {
            icon: <Warehouse className="w-6 h-6" />,
            title: "Massive Storage",
            text: "Large storage capacities of paddy & rice",
        },
        {
            icon: <Factory className="w-6 h-6" />,
            title: "High Production",
            text: "Production capacity 140 metric ton per day",
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Advanced Milling",
            text: "3 milling lines with milling capacity of 14 ton per hour",
        },
        {
            icon: <Scan className="w-6 h-6" />,
            title: "Precision Sorting",
            text: "3 color sorter machines of Buhler & Satake",
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "State-of-the-Art Tech",
            text: "State of art 'Z' series sorting machines of Buhler",
        },
        {
            icon: <Thermometer className="w-6 h-6" />,
            title: "Mechanical Drying",
            text: "Mechanical Dryers with paddy drying capacity of 500 metric ton per day",
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Safe Silo Storage",
            text: "Silos attached with dryers for safe storage (8 silos with 300 MT & 3 with 500 MT)",
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Parboiling Capacity",
            text: "Parboiling capacity of 500 metric ton per day",
        },
        {
            icon: <Package className="w-6 h-6" />,
            title: "Automated Packing",
            text: "Semi-automated packing plant with imported metal detectors and check weigher systems",
        },
        {
            icon: <ShoppingBag className="w-6 h-6" />,
            title: "Versatile Packaging",
            text: "From Jute & Cotton Bags to Laminate Pouches, Pet Jars, Non-Woven Fabric Bags",
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 skew-x-12 translate-x-1/4 z-0" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#005e2a]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-16 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-[#005e2a] mb-4">
                            Know Our Rice Factory
                        </h2>
                        <div className="h-1.5 w-24 bg-[#005e2a] rounded-full mx-auto md:mx-0" />
                        <p className="mt-4 text-stone-600 max-w-2xl text-lg">
                            A glimpse into our world-class infrastructure and technological capabilities.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group relative bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-[#005e2a]/30 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#005e2a]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4 inline-flex p-3 rounded-xl bg-[#005e2a]/5 text-[#005e2a] group-hover:bg-[#005e2a] group-hover:text-white transition-colors duration-300 w-fit">
                                    {feature.icon}
                                </div>

                                <h4 className="text-xl font-bold text-stone-800 mb-3 group-hover:text-[#005e2a] transition-colors">
                                    {feature.title}
                                </h4>

                                <p className="text-stone-600 text-sm leading-relaxed flex-grow">
                                    {feature.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Image Card as the last item to fill the grid nicely if needed, or just let them flow */}
                    {/* Since there are 11 items, the 12th slot in a 4-col grid is empty. We can add a "Contact Us" or "Learn More" card or an image card. */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg min-h-[200px] bg-[#005e2a] flex items-center justify-center p-6 text-center group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h4 className="text-2xl font-serif text-white mb-2">Experience Excellence</h4>
                            <p className="text-white/90 text-sm mb-4">Visit our facility to see these in action.</p>
                            <span className="inline-block px-4 py-2 bg-white text-[#005e2a] font-bold rounded-full text-sm group-hover:bg-[#005e2a] group-hover:text-white border border-white transition-all">
                                Contact Us
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RiceFactory;
