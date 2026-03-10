import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index, handleLiveClick }) => {
    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group overflow-hidden border-white/5 hover:border-primary/30 transition-all flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]"
        >
            <div className="relative overflow-hidden aspect-video">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary border-primary/20 backdrop-blur-md">
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
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                    >
                        <Github className="w-4 h-4 transition-transform group-hover/link:scale-110" /> Code
                    </a>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => handleLiveClick(e, project)}
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors ml-auto group/link"
                        >
                            <ExternalLink className="w-4 h-4 transition-transform group-hover/link:scale-110" /> Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
