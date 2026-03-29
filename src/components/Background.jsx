import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        setIsMobile(mq.matches);
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const particleCount = isMobile ? 6 : 20;

    const particles = useMemo(() => {
        return [...Array(particleCount)].map((_, i) => ({
            id: i,
            y: Math.random() * 100 + "%",
            x: Math.random() * 100 + "%",
            duration: Math.random() * 10 + 10,
        }));
    }, [particleCount]);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
            {/* Grid Pattern */}
            <div className="absolute inset-0 tech-grid opacity-20"></div>

            {/* Glowing Orbs — reduced blur on mobile */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: 'transform' }}
                className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full ${isMobile ? 'blur-[60px]' : 'blur-[120px]'}`}
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.5, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{ willChange: 'transform' }}
                className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/10 rounded-full ${isMobile ? 'blur-[80px]' : 'blur-[150px]'}`}
            />

            {/* Particles — fewer on mobile, memoized positions */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ opacity: 0.1, y: p.y, x: p.x }}
                    animate={{
                        opacity: [0.1, 0.5, 0.1],
                        y: "-10%",
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{ willChange: 'transform' }}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                />
            ))}
        </div>
    );
};

export default Background;
