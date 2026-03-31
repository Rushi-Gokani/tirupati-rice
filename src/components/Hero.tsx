import { motion, useScroll, useTransform } from 'framer-motion';
// Unused imports removed

const heroVideo = "https://video.gumlet.io/69cb96c9b92f8b65888a40fe/69cb98f8b92f8b65888a8e7d/main.mp4";

// Floating grain particles component
const FloatingGrains = () => {
  const grains = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 15,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {grains.map((grain) => (
        <motion.div
          key={grain.id}
          className="absolute rounded-full bg-gold-300/40"
          style={{
            width: grain.size,
            height: grain.size,
            left: grain.left,
            opacity: grain.opacity,
          }}
          initial={{ y: '110vh' }}
          animate={{
            y: '-10vh',
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            y: {
              duration: grain.duration,
              repeat: Infinity,
              delay: grain.delay,
              ease: 'linear',
            },
            x: {
              duration: grain.duration / 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Floating grain particles */}
      <FloatingGrains />

      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

      </motion.div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-transparent to-gold-500/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6 max-w-5xl mx-auto text-white z-10"
      >
      </motion.div>

      {/* Hero Features / Key Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-b from-[#005e2a]/0 via-[#005e2a]/70 to-[#005e2a] pb-10 pt-16 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
          {[
            {
              title: "Premium Quality",
              subtitle: "Basmati Rice",
              img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=300&auto=format&fit=crop"
            },
            {
              title: "Largest Exporters",
              subtitle: "from India",
              img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=300&auto=format&fit=crop"
            },
            {
              title: "State of Art",
              subtitle: "Infrastructure",
              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&auto=format&fit=crop"
            }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-5 w-full md:w-auto">
              {/* Animated Circle Container */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                {/* Rotating Dashed Border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-white/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Image */}
                <div className="absolute inset-1.5 rounded-full overflow-hidden border border-white/10 bg-stone-800">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-white font-serif text-lg md:text-xl leading-tight tracking-wide">{item.title}</h3>
                <p className="text-white/60 text-sm md:text-base font-light tracking-wider">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
