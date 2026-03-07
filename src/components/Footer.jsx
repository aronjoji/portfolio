import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="text-xl font-bold neon-text font-outfit">AJ</h3>
                    <p className="text-gray-500 text-sm mt-2">© 2026 Aron Joji. All rights reserved.</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/aronjoji" target="_blank" className="text-gray-400 hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <Instagram className="w-5 h-5" />
                    </a>
                </div>

                <div className="text-gray-500 text-sm">
                    Built with React & Tailwind
                </div>
            </div>
        </footer>
    );
};

export default Footer;
