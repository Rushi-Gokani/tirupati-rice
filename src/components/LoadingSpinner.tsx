import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-rice-50/95 backdrop-blur-sm">
      <div className="relative flex flex-col items-center">

        {/* Rice Bowl Animation Container */}
        <div className="relative h-32 w-32">

          {/* Falling Grains */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-0 h-3 w-1 -translate-x-1/2 rounded-full bg-white shadow-sm"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: [0, 60],
                opacity: [0, 1, 0],
                x: [(i % 2 === 0 ? -5 : 5) * Math.random(), 0] // Slight scatter
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeIn'
              }}
            />
          ))}

          {/* Bowl Shape */}
          <div className="absolute bottom-4 left-1/2 h-16 w-24 -translate-x-1/2 overflow-hidden rounded-b-full border-b-4 border-l-4 border-r-4 border-stone-400 bg-white/50">
            {/* Filling Effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-rice-200"
              initial={{ height: '0%' }}
              animate={{ height: ['0%', '100%', '0%'] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.8, 1]
              }}
            >
              {/* Texture inside the rice pile */}
              <div className="h-full w-full opacity-30"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2.5px)', backgroundSize: '8px 8px' }}
              />
            </motion.div>
          </div>

          {/* Steam / Aroma */}
          <motion.div
            className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <div className="h-4 w-1 rounded-full bg-stone-300 blur-sm" />
            <div className="mt-2 h-3 w-1 rounded-full bg-stone-300 blur-sm" />
          </motion.div>

        </div>

        {/* Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-2 flex flex-col items-center gap-2"
        >
          <motion.h3
            className="font-serif text-lg tracking-widest text-stone-700"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            TIRUPATI
          </motion.h3>
          <p className="font-sans text-[10px] tracking-[0.2em] text-stone-400 uppercase">
            Cultivating Tradition
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

