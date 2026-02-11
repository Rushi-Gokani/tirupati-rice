import React from 'react';
import { motion } from 'framer-motion';

const FloatingGrains = () => {
    const grains = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {grains.map((grain) => (
                <motion.div
                    key={grain.id}
                    className="absolute bg-white/20 rounded-full blur-[1px]"
                    style={{
                        width: grain.size,
                        height: grain.size * 2, // Elongated grain shape
                        left: grain.left,
                        top: grain.top,
                    }}
                    animate={{
                        y: [0, 100, 0],
                        rotate: [0, 360],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: grain.duration,
                        repeat: Infinity,
                        delay: grain.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingGrains;
