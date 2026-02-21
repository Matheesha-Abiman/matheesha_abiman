'use client';

import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiHeart, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Matheesha-Abiman', icon: FiGithub, color: 'hover:border-indigo-400 hover:bg-black' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/matheesha-abiman', icon: FiLinkedin, color: 'hover:border-indigo-400 hover:bg-blue-600' },
    { name: 'Email', href: 'mailto:matheeshaabi@gmail.com', icon: FiMail, color: 'hover:border-indigo-400 hover:bg-red-600' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative overflow-hidden">
            {/* Gradient top border */}
            <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            {/* Main footer content */}
            <div className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand Section */}
                        <div className="lg:col-span-2">
                            <motion.h3
                                className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                Matheesha Abiman
                            </motion.h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-md">
                                Full-Stack Developer & UI/UX Designer passionate about crafting innovative digital experiences with clean code and beautiful interfaces.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all shadow-sm hover:shadow-md ${social.color}`}
                                            aria-label={social.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -3 }}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-5">
                                Quick Links
                            </h4>
                            <nav className="space-y-3">
                                {navLinks.slice(0, 4).map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                                        whileHover={{ x: 4 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>
                        </div>

                        {/* More Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-5">
                                More
                            </h4>
                            <nav className="space-y-3">
                                {navLinks.slice(4).map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        className="block text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                                        whileHover={{ x: 4 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-200 dark:bg-gray-800 mb-8" />

                    {/* Bottom bar */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-1.5">
                            © {new Date().getFullYear()} Designed with
                            <FiHeart className="w-4 h-4 text-red-500" />
                            by Matheesha Abiman
                        </p>

                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                            whileHover={{ y: -2 }}
                        >
                            Back to top
                            <span className="w-8 h-8 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white group-hover:border-transparent transition-all">
                                <FiArrowUp className="w-4 h-4" />
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
