import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplets, Settings, Award, Shield, Users, CheckCircle2 } from 'lucide-react';

import infrastructureImage from '../Infrastructure/9.jpg';
import img12 from '../Infrastructure/12 (1).jpg';
import img13 from '../Infrastructure/13 (1).jpg';
import img14 from '../Infrastructure/14 (1).jpg';

const InfrastructureCapabilities = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const mantraItems = [
        { icon: <Award className="w-8 h-8" />, title: "Procurement", text: "Procurement of best quality raw material" },
        { icon: <Shield className="w-8 h-8" />, title: "Preservation", text: "Preservation of raw material in most hygienic conditions" },
        { icon: <Settings className="w-8 h-8" />, title: "Processing", text: "Processing of raw material in Hi-tech machines" },
        { icon: <CheckCircle2 className="w-8 h-8" />, title: "Packaging", text: "Packaging of product in high standard packaging material" },
        { icon: <Users className="w-8 h-8" />, title: "People", text: "People working as a team" },
    ];

    return (
        <section ref={containerRef} className="bg-white text-stone-900 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row">

                {/* Left Panel - Sticky Visuals */}
                <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 relative h-[80vh] overflow-hidden">
                    <motion.div style={{ scale: imageScale }} className="absolute inset-0">
                        <img
                            src={infrastructureImage}
                            alt="Infrastructure Main"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#005e2a]/90 via-[#005e2a]/40 to-transparent mix-blend-multiply transition-colors" />
                        <div className="absolute inset-0 bg-stone-900/10" />
                    </motion.div>

                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-xl"
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold tracking-widest uppercase mb-6">
                                World-Class Facilities
                            </span>
                            <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-2">
                                Infrastructure
                            </h2>
                            <h2 className="text-3xl md:text-5xl font-light italic text-white/90">
                                & Capabilities
                            </h2>
                        </motion.div>

                        {/* Interactive Image Strip */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-12 flex gap-4 overflow-x-auto pb-4 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                        >
                            {[img12, img13, img14].map((img, i) => (
                                <div key={i} className="flex-shrink-0 w-32 h-24 md:w-48 md:h-32 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer hover:border-white/60 transition-all">
                                    <img src={img} alt={`Facility ${i}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Right Panel - Content */}
                <div className="lg:w-1/2 bg-white relative z-10">
                    <div className="p-8 pt-0 md:p-20 md:pt-0 lg:pt-0 pb-10 flex flex-col justify-start">

                        {/* Intro Text */}


                        <div className="space-y-24 relative">
                            {/* Line connecting sections */}
                            <div className="absolute left-6 top-8 bottom-8 w-px bg-stone-200 hidden md:block" />

                            {/* Section 1: Parboiling */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                className="relative md:pl-20"
                            >
                                <div className="absolute left-0 top-0 w-12 h-12 bg-[#005e2a] rounded-full hidden md:flex items-center justify-center text-white shadow-xl z-20">
                                    <Droplets size={20} />
                                </div>
                                <h3 className="text-3xl font-serif text-[#005e2a] mb-6 flex items-center gap-4 md:block">
                                    <span className="md:hidden bg-[#005e2a]/10 p-2 rounded-full"><Droplets size={20} className="text-[#005e2a]" /></span>
                                    Parboiling Plant
                                </h3>
                                <div className="text-lg text-stone-600 leading-relaxed text-justify space-y-4">
                                    <p>
                                        Our stainless-steel parboiling plant gives us an edge in production. The process of parboiling uses processed soft water obtained from water treatment plant. The plant has specially designed soaking bins with sensor based sophisticated controllers for water temperature.
                                    </p>
                                    <p>
                                        The process is far superior than the conventional methods in terms of mitigating development of unwanted smells and ensures hygienic processing of the grain, preserving its fragrance and aroma during the processing. The requirements of soft water for parboiling process are met by an integrated water treatment plant.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Section 2: Milling */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                className="relative md:pl-20"
                            >
                                <div className="absolute left-0 top-0 w-12 h-12 bg-[#005e2a] rounded-full hidden md:flex items-center justify-center text-white shadow-xl z-20">
                                    <Settings size={20} />
                                </div>
                                <h3 className="text-3xl font-serif text-[#005e2a] mb-2 flex items-center gap-4 md:block">
                                    <span className="md:hidden bg-[#005e2a]/10 p-2 rounded-full"><Settings size={20} className="text-[#005e2a]" /></span>
                                    Milling Plant
                                </h3>
                                <p className="text-sm font-bold tracking-wider text-stone-400 uppercase mb-6">Buhler (London) + Satake (Japan)</p>

                                <div className="text-lg text-stone-600 leading-relaxed text-justify space-y-4">
                                    <p>
                                        The three state-of-art milling plants of Tirupati use 21st century technology from Buhler, which is considered to be the best available in the world. The online inflow and outflow mechanisms are fully computerized with the help of sensors and P.L.C. System.
                                    </p>
                                    <p>
                                        The plants have production capacity exceeding 100 tons per day, and are equipped with number of Pre cleaners, De-stoners, Precision-sizers, Graders, Paddy separators, De-huskers, Magnets etc. The plant premises are environment friendly and fully protected against contamination by foreign particles.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 5Ps Mantra Section */}
            <div className="bg-white text-stone-900 pt-0 pb-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h4 className="text-3xl md:text-5xl font-serif mb-6 text-[#005e2a]">
                            The 5Ps Mantra
                        </h4>
                        <div className="h-1 w-24 bg-[#005e2a]/30 mx-auto rounded-full" />
                        <p className="mt-4 text-stone-600 max-w-2xl mx-auto">The backbone of our commitment to excellence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {mantraItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-white border border-stone-100 shadow-sm hover:shadow-xl hover:border-[#005e2a]/20 transition-all hover:-translate-y-2"
                            >
                                <div className="mb-6 text-[#005e2a] group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h5 className="text-xl font-bold mb-3 text-stone-800">{item.title}</h5>
                                <p className="text-sm text-stone-600 leading-relaxed group-hover:text-stone-900 transition-colors">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfrastructureCapabilities;
