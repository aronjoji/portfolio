import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiProxmox } from 'react-icons/si';

const TechStack = () => {
    const categories = [
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: <FaReact />, color: "#61DAFB" },
                { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
                { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
                { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
                { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
                { name: "Express", icon: <SiExpress />, color: "#ffffff" },
                { name: "Python", icon: <FaPython />, color: "#3776AB" },
            ]
        },
        {
            title: "Database",
            skills: [
                { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
                { name: "SQL", icon: <SiPostgresql />, color: "#336791" },
            ]
        },
        {
            title: "Automation & Tools",
            skills: [
                { name: "REST APIs", icon: <FaDatabase />, color: "#FF6C37" },
                { name: "Web Automation", icon: <SiProxmox />, color: "#8B5CF6" },
                { name: "Proxy Handling", icon: <SiProxmox />, color: "#10B981" },
                { name: "MERN Stack", icon: <FaReact />, color: "#61DAFB" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
                <p className="text-gray-400">The tools and technologies I use to bring ideas to life.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card p-6 border-white/5 hover:border-primary/20 transition-all group"
                    >
                        <h3 className="text-xl font-bold mb-6 text-gray-300 group-hover:text-primary transition-colors">
                            {cat.title}
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {cat.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="flex flex-col items-center gap-2 group/skill"
                                >
                                    <div
                                        className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-2xl transition-all border-white/5 group-hover/skill:border-primary/50"
                                        style={{ color: skill.color }}
                                    >
                                        {skill.icon}
                                    </div>
                                    <span className="text-[10px] text-gray-400 uppercase tracking-tighter">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
