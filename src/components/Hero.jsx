import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';

const Hero = () => {
    const [index, setIndex] = React.useState(0);
    const titles = [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Automation Developer",
        "Problem Solver"
    ];

    React.useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [titles.length]);

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="px-4 py-1 rounded-full glass-card text-primary text-sm font-semibold inline-block mb-6 border border-primary/20"
                    >
                        Available for Opportunities
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-bold font-outfit leading-tight mb-6">
                        Hi, I'm <br />
                        <span className="neon-text">Aron Joji</span>
                    </h1>

                    <div className="h-12 overflow-hidden mb-8 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex items-center"
                            >
                                <span className="text-2xl md:text-3xl text-gray-400 font-medium">
                                    {titles[index]}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <p className="text-gray-400 text-lg max-w-lg mb-10 leading-relaxed">
                        Crafting premium web experiences and scalable automation systems with a focus on modern aesthetic and efficient functionality.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="neon-button flex items-center gap-2">
                            View Projects <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#contact" className="px-6 py-3 rounded-full glass-card border-white/10 hover:border-white/25 transition-all">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract 3D/Tech Visualization */}
                    <div className="w-[500px] h-[500px] relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 rounded-full border-2 border-primary/10 shadow-[0_0_50px_rgba(0,210,255,0.1)]"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-64 h-64 glass-card flex items-center justify-center shadow-[0_0_100px_rgba(157,80,187,0.2)]"
                            >
                                <div className="text-center p-8">
                                    <span className="text-6xl font-bold neon-text">5+</span>
                                    <p className="text-gray-400 mt-2">Years of Experience</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
