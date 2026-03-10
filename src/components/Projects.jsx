import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Music, Bot, School, X, AlertTriangle, ExternalLink } from 'lucide-react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: "AnonTruth",
            category: "Full Stack / MERN",
            description: "Anonymous Truth is a web platform where users can post anonymous confessions and read confessions shared by others. It focuses on privacy, simplicity, and a clean user experience.",
            image: "/projects/anontruth.png",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Render"],
            github: "https://github.com/aronjoji",
            live: "https://anontruth-anonymous-confessions-platform.onrender.com",
            icon: <MessageSquare className="w-5 h-5" />,
            requiresWarning: true
        },
        {
            title: "Spotify Clone",
            category: "MERN Stack",
            description: "A full-featured music streaming platform with real-time messaging, online status, and an admin panel for content management.",
            image: "/projects/spotify.png",
            tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            github: "https://github.com/aronjoji",
            live: "https://audix-musix.onrender.com/",
            icon: <Music className="w-5 h-5" />,
            requiresWarning: true
        },
        {
            title: "WhatsApp Automation Bot",
            category: "Automation",
            description: "Advanced bot for content downloading, video compression, smart link detection, and Spotify metadata integration.",
            image: "/projects/whatsapp.png",
            tech: ["Python", "Node.js", "Proxy Handling", "FFmpeg"],
            github: "https://github.com/aronjoji",
            icon: <Bot className="w-5 h-5" />
        },
        {
            title: "College Portal",
            category: "Django / Web",
            description: "Comprehensive management system featuring student/teacher dashboards, MCQ exams, and attendance tracking.",
            image: "/projects/college.png",
            tech: ["Django", "Python", "PostgreSQL", "JavaScript"],
            github: "https://github.com/aronjoji",
            icon: <School className="w-5 h-5" />
        }
    ];

    const handleLiveClick = (e, project) => {
        if (project.requiresWarning) {
            e.preventDefault();
            setSelectedProject(project);
        }
    };

    return (
        <section id="projects" className="py-24">
            <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="text-primary font-semibold tracking-widest uppercase">My Works</span>
            </div>
            <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={i}
                        handleLiveClick={handleLiveClick}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative glass-card max-w-md w-full p-8 border border-primary/20 shadow-[0_0_50px_rgba(0,210,255,0.1)]"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold">Important Note</h3>
                            </div>

                            <p className="text-gray-400 mb-8 leading-relaxed">
                                This project is hosted on a <span className="text-white font-semibold">free tier</span>.
                                It may take up to <span className="text-primary font-bold">90 seconds</span> to spin up
                                for the first time. Thanks for your patience!
                            </p>

                            <div className="flex flex-col gap-3">
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setSelectedProject(null)}
                                    className="neon-button text-center flex items-center justify-center gap-2"
                                >
                                    Proceed to Website <ExternalLink className="w-4 h-4" />
                                </a>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-gray-400 hover:text-white text-sm transition-colors py-2"
                                >
                                    Cancel
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
