import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplets, Settings, Award, Shield, Users, CheckCircle2, Factory, Cpu } from 'lucide-react';

import infrastructureImage from "../../images/infra-1.jpg";
import img12 from "../../images/infra-2.jpg";
import img13 from "../../images/infra-logistics.jpg";
import img14 from '../../images/Laboratory.png';

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
            {/* Company Profile Section (Moved Above Infrastructure) */}
            <div className="bg-stone-50 py-16 md:py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                        {/* Left Side Section Title */}
                        <div className="lg:w-1/4 pt-4">
                            <div className="static lg:sticky lg:top-24">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#005e2a]/20 font-bold leading-none select-none">
                                    Company <br />
                                    <span className="text-[#005e2a] opacity-100">Profile</span>
                                </h2>
                                <div className="h-2 w-20 bg-[#005e2a] mt-4 mb-8 lg:mt-6 lg:mb-6" />
                            </div>
                        </div>

                        {/* Right Side Content */}
                        <div className="lg:w-3/4 space-y-8 md:space-y-12">
                            {/* Header */}
                            <div className="border-b border-[#005e2a]/20 pb-6 md:pb-8">
                                <h3 className="text-2xl md:text-3xl lg:text-5xl font-serif text-[#005e2a] mb-2 leading-tight">
                                    Tirupati Basmati Exports Pvt. Ltd.
                                </h3>
                                <p className="text-lg md:text-xl lg:text-2xl font-light text-[#005e2a]/80 italic">
                                    Small beginnings to Global Presence
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 text-base md:text-lg text-stone-700 leading-relaxed text-justify">
                                <div className="space-y-4 md:space-y-6">
                                    <p>
                                        Formerly <span className="font-semibold text-[#005e2a]">'Tejinder Kumar & Brother's Rice Mills (Quality Maker)</span> become "Tirupati Basmati Exports Pvt. Ltd" under the initiative of its founder Chairman, <span className="font-semibold text-[#005e2a]">Sh. Nathi Ram Gupta</span>. Making his foray into the business in 1985, there was no looking back for him. He knew what it takes best to churn out the most of benefit from the production & export of Basmati rice cultivated in the foothills of Himalaya.
                                    </p>
                                    <p>
                                        It is his knowledge and expertise about the geography and quality of the Basmati of Himalayan region, that Tirupati Basmati Exports Pvt. Ltd. has emerged as one of the leading rice exporters of the world. We are committed to provide the best quality through hygienic processing of the paddy to make rice, thus to make way for the fragrance of the field to the kitchens of millions.
                                    </p>
                                </div>
                                <div className="space-y-4 md:space-y-6">
                                    <p>
                                        Our motto is to upgrade our processing unit to offer our customers quality rice. Our continuous efforts to achieve highest standard of quality has helped us to attain <span className="font-semibold text-[#005e2a]">ISO 9001 and HACCP Certification</span>. We are also proud of our collaboration with <span className="font-semibold text-[#005e2a]">HAFED (Haryana State Cooperative Supply and Marketing Federation Limited)</span>, ensuring widespread reach and quality assurance.
                                    </p>
                                    <p>
                                        We supply and export our products under the brand name <span className="font-semibold text-[#005e2a]">Tirupati, Pappu, Mannat and T-One</span>. We are currently dealing with prominent internaltional brands including <span className="font-semibold text-[#005e2a]">ABU KASS, CAMEL, AL RABEH, RASCH, GLOBAL GOLD, AMS, ZAIQA MANDI, QATFAH, and HAFALAT</span>. Many of these international brands are directly packed by us and exported in world market.
                                    </p>
                                </div>
                            </div>

                            {/* Visual Strip */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                                <div className="aspect-square rounded-lg overflow-hidden relative group shadow-md hover:shadow-xl transition-all">
                                    <img src={infrastructureImage} alt="Rice Field" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#005e2a]/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="aspect-square rounded-lg overflow-hidden relative group shadow-md hover:shadow-xl transition-all">
                                    <img src={img12} alt="Farming" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#005e2a]/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="aspect-square rounded-lg overflow-hidden relative group shadow-md hover:shadow-xl transition-all">
                                    <img src={img13} alt="Silos" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#005e2a]/10 group-hover:bg-transparent transition-colors" />
                                </div>
                                <div className="aspect-square rounded-lg overflow-hidden relative group shadow-md hover:shadow-xl transition-all">
                                    <img src={img14} alt="Quality Rice" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-[#005e2a]/10 group-hover:bg-transparent transition-colors" />
                                </div>
                            </div>

                            {/* Brand Come-Up Section */}
                            <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-stone-100">
                                <h4 className="text-2xl md:text-3xl font-serif text-[#005e2a] mb-4 md:mb-6 border-l-4 border-[#005e2a] pl-4">
                                    Come-up of Brand TIRUPATI
                                </h4>
                                <div className="text-base md:text-lg text-stone-700 leading-relaxed text-justify space-y-4">
                                    <p>
                                        The introduction of Tirupati in 1995 revolutionized the market of rice. Its supreme quality and taste took over the competition and created a place for itself which every other competitor had been craving for.
                                    </p>
                                    <p>
                                        Within five years, in 2000 the company experienced a meteoric rise in its sales. The diverse range starting from brown rice, white rice, steamed rice to Parboiled white & golden rice started getting exported to Saudi-Arabia, Bahrain, U.A.E., Iran, Yemen, Dubai & Middle East companies.
                                    </p>
                                    <div className="mt-6 md:mt-8 pt-6 border-t border-stone-100 text-sm md:text-base">
                                        <p className="font-semibold text-[#005e2a]">
                                            Production Capacity: <span className="text-stone-600 font-normal">3 Milling Plants (Paddy to Rice) | 2 Sortex Plants (Rice to Rice) | 500 Tons per day | 25 Tons per hour</span>
                                        </p>
                                        <p className="font-semibold text-[#005e2a] mt-2">
                                            Technology: <span className="text-stone-600 font-normal">Buhler Technology & Computerized PLC System used for optimization.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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


                        <div className="space-y-24 relative lg:pt-20">
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
                                    Milling Plant & Automation
                                </h3>
                                <p className="text-sm font-bold tracking-wider text-stone-400 uppercase mb-6">Buhler (London) + Satake (Japan)</p>

                                <div className="text-lg text-stone-600 leading-relaxed text-justify space-y-4">
                                    <p>
                                        The plant is constructed entirely of high-grade stainless steel, ensuring corrosion resistance, fire and heat resistance, impact strength, and hygienic food-grade processing standards. It operates with a high degree of automation through a centralized PLC (Programmable Logic Controller) system.
                                    </p>
                                    <p>
                                        The complete process is digitally monitored and controlled via a central interface, with automatic alarms triggered in case of irregularities. Whiteness is monitored online and continuously reported to the PLC. All material movements are electronically recorded, enabling real-time yield reports and management reporting.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Section 3: Power Plant */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                className="relative md:pl-20"
                            >
                                <div className="absolute left-0 top-0 w-12 h-12 bg-[#005e2a] rounded-full hidden md:flex items-center justify-center text-white shadow-xl z-20">
                                    <Cpu size={20} />
                                </div>
                                <h3 className="text-3xl font-serif text-[#005e2a] mb-6 flex items-center gap-4 md:block">
                                    <span className="md:hidden bg-[#005e2a]/10 p-2 rounded-full"><Cpu size={20} className="text-[#005e2a]" /></span>
                                   1.2 KW Husk Plant
                                </h3>
                                <div className="text-lg text-stone-600 leading-relaxed text-justify space-y-4">
                                    <p>
                                        Our facility includes a 1.2 KW Rice Husk Power Plant that ensures uninterrupted production. Rice husk, an agricultural by-product, is converted into fuel gas, which generates high-pressure steam in boilers.
                                    </p>
                                    <p>
                                        This steam drives a turbine generator to produce electricity for our rice plant, enabling continuous operations 24 hours a day, 365 days a year without power interruptions. The resulting paddy ash is supplied to local farmers as natural manure to enhance soil fertility.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>



            {/* 5Ps Mantra Section */}
            <div className="bg-white text-stone-900 pt-16 md:pt-24 pb-24 relative overflow-hidden">
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
