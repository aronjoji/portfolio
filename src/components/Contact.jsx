import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Globe, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const GOOGLE_FORM_ACTION =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfbeZ73okM_WypjWycoXoiy98uzk2L9xQhXKTEQm43gggrZpQ/formResponse';

const ENTRY_IDS = {
    name: 'entry.690104609',
    email: 'entry.1685492856',
    message: 'entry.1489936622',
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const body = new URLSearchParams();
        body.append(ENTRY_IDS.name, formData.name);
        body.append(ENTRY_IDS.email, formData.email);
        body.append(ENTRY_IDS.message, formData.message);

        try {
            await fetch(GOOGLE_FORM_ACTION, {
                method: 'POST',
                mode: 'no-cors', // Google Forms doesn't support CORS
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body.toString(),
            });
            // With no-cors we can't read the response, but if the fetch didn't throw, it was sent
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section id="contact" className="py-24">
            <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full -ml-32 -mb-32"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Have a project in mind or just want to chat? Feel free to reach out. I'm always open to new opportunities and creative collaborations.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <p className="font-semibold">aronjoji@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-semibold">Kerala, India</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Website</p>
                                    <a href="https://aronjoji.online/" className="font-semibold hover:text-primary transition-colors">aronjoji.online</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-all"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                required
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary/50 focus:outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="neon-button w-full flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'sending' ? (
                                <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                            ) : status === 'success' ? (
                                <>Message Sent! <CheckCircle className="w-4 h-4" /></>
                            ) : (
                                <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>

                        {status === 'success' && (
                            <p className="text-center text-sm text-green-400 mt-2">
                                Thank you! Your message has been sent successfully.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="text-center text-sm text-red-400 mt-2">
                                Something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
