'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiMail, FiPhone, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useEffect, useState } from 'react';

// Fixed particle positions to avoid hydration mismatch
const particles = [
    { left: 5, top: 10, delay: 0 },
    { left: 15, top: 80, delay: 0.5 },
    { left: 25, top: 30, delay: 1 },
    { left: 35, top: 60, delay: 1.5 },
    { left: 45, top: 20, delay: 0.3 },
    { left: 55, top: 70, delay: 0.8 },
    { left: 65, top: 40, delay: 1.2 },
    { left: 75, top: 85, delay: 0.6 },
    { left: 85, top: 15, delay: 1.4 },
    { left: 95, top: 50, delay: 0.2 },
    { left: 10, top: 45, delay: 0.7 },
    { left: 30, top: 90, delay: 1.1 },
    { left: 50, top: 5, delay: 0.4 },
    { left: 70, top: 55, delay: 0.9 },
    { left: 90, top: 25, delay: 1.3 },
];

const ROLES = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Creative Thinker",
    "Problem Solver"
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Parallax effect for profile image
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;
        const pauseTime = 2000;

        const timer = setTimeout(() => {
            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            } else {
                setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Left side - Text content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            className="inline-block px-5 py-2.5 rounded-full glass mb-8 border-primary-500/30 shadow-lg shadow-primary-500/10"
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" as const, stiffness: 100 }}
                            whileHover={{ scale: 1.08, boxShadow: "0 10px 40px -10px rgba(99, 102, 241, 0.4)" }}
                        >
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-primary-600 dark:text-accent-400 font-bold text-sm tracking-wider uppercase">
                                    Available for Work
                                </span>
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span className="gradient-text">Matheesha Abiman</span>
                        </motion.h1>

                        {/* Role with animation */}
                        <motion.div
                            className="mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <motion.span
                                className="inline-block text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                                animate={{
                                    backgroundPosition: ['0% center', '200% center'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                Full-Stack Developer & UI/UX Designer
                            </motion.span>
                        </motion.div>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Passionate about crafting <span className="font-semibold text-primary-600 dark:text-accent-400">exceptional digital experiences</span>.
                            I blend technical expertise with design sensibility to build scalable, user-centric applications.
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <a href="#contact" className="btn btn-primary group">
                                <span className="relative z-10 flex items-center gap-2">
                                    <FiMail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    Get in Touch
                                </span>
                            </a>
                            <a href="/Matheesha_Abiman_CV.pdf" download className="btn btn-outline group">
                                <span className="relative z-10 flex items-center gap-2">
                                    <FiDownload className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                                    Download CV
                                </span>
                            </a>
                        </motion.div>


                    </motion.div>

                    {/* Right side - Profile image */}
                    <motion.div
                        className="flex-shrink-0 relative"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        style={{ y: y1 }}
                    >
                        <motion.div
                            className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Abstract Shapes behind */}
                            <motion.div
                                className="absolute -top-10 -right-10 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-[3rem]"
                                animate={{ rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-10 -left-10 w-full h-full bg-gradient-to-tl from-accent-500/20 to-transparent rounded-[3rem]"
                                animate={{ rotate: [0, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm z-10 glass">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 mix-blend-overlay z-20" />
                                <Image
                                    src="/profile.png"
                                    alt="Matheesha Abiman"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                className="absolute -right-8 top-20 glass px-4 py-3 rounded-2xl z-20 shadow-xl flex items-center gap-3"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                    <FiGithub className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-medium">Github</div>
                                    <div className="text-sm font-bold">Contributor</div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="absolute -left-8 bottom-20 glass px-4 py-3 rounded-2xl z-20 shadow-xl flex items-center gap-3"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            >
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                    <FiLinkedin className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-500 font-medium">LinkedIn</div>
                                    <div className="text-sm font-bold">Connect</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="text-xs font-medium tracking-widest uppercase text-gray-400">Scroll</div>
                <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-primary-500"
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
