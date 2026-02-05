'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMenu, FiX, FiCode } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    // Dynamic opacity for header background
    const bgOpacity = useTransform(scrollY, [0, 50], [0, 0.8]);
    const borderOpacity = useTransform(scrollY, [0, 50], [0, 1]);
    const blurAmount = useTransform(scrollY, [0, 50], [0, 16]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#education', label: 'Education' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: isScrolled ? 'var(--card-bg)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(16px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--card-border)' : '1px solid transparent',
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        className="relative group flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-primary-500/50 transition-shadow duration-300">
                            MA
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 hidden sm:block">
                            Portfolio
                        </span>
                    </motion.a>

                    {/* Desktop Navigation with animated border */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="relative px-2 py-1 rounded-full">
                            {/* Animated border lights - more visible */}
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                {/* Primary rotating light */}
                                <motion.div
                                    className="absolute w-32 h-32 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-90"
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        top: '-60%',
                                        left: '40%',
                                        transformOrigin: '50% 180%',
                                        filter: 'blur(4px)',
                                    }}
                                />
                                {/* Secondary rotating light - opposite direction */}
                                <motion.div
                                    className="absolute w-24 h-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80"
                                    animate={{
                                        rotate: [360, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    style={{
                                        bottom: '-60%',
                                        right: '40%',
                                        transformOrigin: '50% -80%',
                                        filter: 'blur(4px)',
                                    }}
                                />
                            </div>

                            {/* Border and background */}
                            <div className="absolute inset-[2px] rounded-full bg-white/90 dark:bg-gray-900/95 backdrop-blur-md" />
                            <div className="absolute inset-0 rounded-full border border-indigo-200/50 dark:border-indigo-500/30" />

                            {/* Nav links */}
                            <div className="relative flex items-center">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded-full group"
                                    >
                                        <span className="relative z-10">{link.label}</span>
                                        <span className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Social & Theme */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-3 pr-3 border-r border-gray-200 dark:border-gray-700">
                            <motion.a
                                href="https://github.com/Matheesha-Abiman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-accent-400 transition-all"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiGithub className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="https://linkedin.com/in/matheesha-abiman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-accent-400 transition-all"
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </motion.a>
                        </div>

                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <FiX className="w-6 h-6" />
                            ) : (
                                <FiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden glass border-t border-gray-200/50 dark:border-gray-800/50 overflow-hidden"
                >
                    <div className="px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-accent-400 pl-4 border-l-2 border-transparent hover:border-primary-500 dark:hover:border-accent-500 transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="flex items-center gap-6 pt-6 mt-6 border-t border-gray-200 dark:border-gray-800">
                            <a
                                href="https://github.com/Matheesha-Abiman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                            >
                                <FiGithub className="w-5 h-5" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://linkedin.com/in/matheesha-abiman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-accent-400 transition-colors"
                            >
                                <FiLinkedin className="w-5 h-5" />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
