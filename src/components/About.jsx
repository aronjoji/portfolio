import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, User } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-12 h-[2px] bg-primary"></div>
                        <span className="text-primary font-semibold tracking-widest uppercase">About Me</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-8">Passionate Developer from Kerala, India</h2>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>
                            I am a dedicated Full Stack Developer with over 5 years of experience in building modern web applications and scalable automation systems. My passion lies in creating efficient, user-centric solutions that merge high-end aesthetics with powerful functionality.
                        </p>
                        <p>
                            My expertise spans across the MERN stack, Python automation, and complex system architectures. I thrive on solving challenging problems and am constantly exploring new technologies to stay at the forefront of the industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                        <div className="glass-card p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Education</p>
                                <p className="font-semibold">MCA, BCA</p>
                            </div>
                        </div>
                        <div className="glass-card p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="font-semibold">Kerala, India</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex-1 w-full max-w-md"
                >
                    <div className="relative group p-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative glass-card aspect-square overflow-hidden flex items-center justify-center">
                            <img
                                src="/projects/pic.jpg"
                                alt="Aron Joji"
                                className="w-full h-full object-cover object-[center_15%] opacity-100 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80"></div>
                            <div className="absolute inset-0 border-2 border-primary/20 rounded-xl group-hover:border-primary/50 transition-colors duration-500"></div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-2xl font-bold">Aron Joji</p>
                                <p className="text-primary">@aronjoji</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
