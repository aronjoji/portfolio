import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Activity, GitCommit, Star, GitBranch } from 'lucide-react';

const GitHubActivity = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(max-width: 768px)');
        setIsMobile(mq.matches);
        const handler = (e) => setIsMobile(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    // Mock data for futuristic visualization
    const stats = [
        { label: "Repositories", value: "45+", icon: <Star className="w-4 h-4 text-yellow-500" /> },
        { label: "Total Commits", value: "1.2k+", icon: <GitCommit className="w-4 h-4 text-primary" /> },
        { label: "Prj. Completed", value: "30+", icon: <GitBranch className="w-4 h-4 text-green-500" /> },
        { label: "Contributed To", value: "12+", icon: <Activity className="w-4 h-4 text-secondary" /> },
    ];

    const cellCount = isMobile ? 168 : 350;

    // Memoize grid colors so Math.random() is called only once
    const gridCells = useMemo(() => {
        return [...Array(cellCount)].map((_, i) => {
            const r = Math.random();
            const bg = r > 0.8 ? 'rgba(0, 210, 255, 0.8)' :
                r > 0.6 ? 'rgba(0, 210, 255, 0.4)' :
                    r > 0.4 ? 'rgba(0, 210, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)';
            return { id: i, bg };
        });
    }, [cellCount]);

    return (
        <section id="github" className="py-24">
            <div className="glass-card p-8 border-white/5 relative overflow-hidden">
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <Github className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold">GitHub Contributions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 glass-card border-white/5 flex flex-col items-center text-center group hover:border-primary/50 transition-all"
                            >
                                <div className="mb-4">{stat.icon}</div>
                                <span className="text-3xl font-bold mb-1 group-hover:neon-text transition-colors">{stat.value}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Activity Widget — memoized, fewer cells on mobile */}
                    <div className="glass-card p-6 bg-white/5 border-white/5 flex flex-col items-center">
                        <div className="flex justify-between w-full text-xs text-gray-500 mb-4 px-2">
                            <span>Contribution Activity</span>
                            <span className="text-primary hover:underline cursor-pointer">@aronjoji</span>
                        </div>
                        <div className="flex flex-wrap gap-[2px] justify-center">
                            {gridCells.map((cell) => (
                                <div
                                    key={cell.id}
                                    className="w-3 h-3 rounded-[1px]"
                                    style={{ backgroundColor: cell.bg }}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubActivity;
