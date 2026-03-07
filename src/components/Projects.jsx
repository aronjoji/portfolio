import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, MessageSquare, Music, Bot, School } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Spotify Clone",
            category: "MERN Stack",
            description: "A full-featured music streaming platform with real-time messaging, online status, and an admin panel for content management.",
            image: "/projects/spotify.png",
            tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            github: "https://github.com/aronjoji",
            live: "https://aronjoji.online/",
            icon: <Music className="w-5 h-5" />
        },
        {
            title: "WhatsApp Automation Bot",
            category: "Automation",
            description: "Advanced bot for content downloading, video compression, smart link detection, and Spotify metadata integration.",
            image: "/projects/whatsapp.png",
            tech: ["Python", "Node.js", "Proxy Handling", "FFmpeg"],
            github: "https://github.com/aronjoji",
            live: "https://aronjoji.online/",
            icon: <Bot className="w-5 h-5" />
        },
        {
            title: "College Portal",
            category: "Django / Web",
            description: "Comprehensive management system featuring student/teacher dashboards, MCQ exams, and attendance tracking.",
            image: "/projects/college.png",
            tech: ["Django", "Python", "PostgreSQL", "JavaScript"],
            github: "https://github.com/aronjoji",
            live: "https://aronjoji.online/",
            icon: <School className="w-5 h-5" />
        }
    ];

    return (
        <section id="projects" className="py-24">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="text-primary font-semibold tracking-widest uppercase">My Works</span>
            </div>
            <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-card group overflow-hidden border-white/5 hover:border-primary/30 transition-all flex flex-col h-full"
                    >
                        <div className="relative overflow-hidden aspect-video">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                            <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary border-primary/20">
                                {project.icon}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2 py-1 text-[10px] rounded bg-white/5 text-gray-300 border border-white/10 uppercase font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Github className="w-4 h-4" /> Code
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto"
                                >
                                    <ExternalLink className="w-4 h-4" /> Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
