'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
import Image from 'next/image';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const projects = [
        {
            title: 'EasyInvoice',
            description: 'A cross-platform mobile billing app enabling users to create, manage, and share professional invoices directly from their devices with PDF generation and instant sharing.',
            tech: ['React Native', 'Firebase', 'Expo'],
            techIcons: ['react', 'firebase'],
            github: 'https://github.com/Matheesha-Abiman/EasyInvoice.git',
            category: 'Mobile',
            year: '2025',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Strategic Patient Risk Stratification',
            description: 'Predictive risk model using custom Vitality Complexity Index (VCI) to stratify patients into risk categories.',
            tech: ['Python', 'BeautifulSoup', 'Seaborn'],
            techIcons: ['python'],
            category: 'Data Science',
            year: '2025',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            title: 'RideEasy',
            description: 'A full-stack bike rental platform with secure authentication, bike booking system, and admin analytics dashboard.',
            tech: ['MERN Stack', 'TypeScript', 'Redux'],
            techIcons: ['mongodb', 'express', 'react', 'nodejs', 'typescript'],
            //front
            github: 'https://github.com/Matheesha-Abiman/rideeasy_rentals_backend.git',

            category: 'Web',
            year: '2025',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Ceylon Antique Marketplace',
            description: 'A full-stack e-commerce platform for buying/selling Sri Lankan antiques with secure JWT authentication and PayHere payment gateway integration.',
            tech: ['Spring Boot', 'MySQL', 'JavaScript'],
            techIcons: ['spring', 'mysql', 'javascript'],
            github: 'https://github.com/Matheesha-Abiman/Ceylon_antique.git',
            category: 'Web',
            year: '2025',
            gradient: 'from-orange-500 to-amber-500',
        },
        {
            title: 'Serenity Therapy Center Management',
            description: 'A desktop system to handle patient registrations, therapy sessions, and secure therapist authentication with Hibernate ORM.',
            tech: ['JavaFX', 'Hibernate', 'MySQL'],
            techIcons: ['java', 'mysql'],
            github: 'https://github.com/Matheesha-Abiman/Mental-Health-Therapy-Center.git',
            category: 'Desktop',
            year: '2024',
            gradient: 'from-teal-500 to-cyan-500',
        },
        {
            title: 'Institute Management System',
            description: 'Standalone application managing student enrollments, course administration, and financial operations with JasperReports integration.',
            tech: ['Java', 'MySQL', 'JasperReports'],
            techIcons: ['java', 'mysql'],
            github: 'https://github.com/Matheesha-Abiman/institute-mgmt-system.git',
            category: 'Desktop',
            year: '2024',
            gradient: 'from-rose-500 to-red-500',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100,
                damping: 15,
            }
        },
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block px-5 py-2.5 rounded-full glass mb-6 border-primary-500/30 shadow-lg shadow-primary-500/10 mx-auto table"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ delay: 0.1, type: "spring" as const, stiffness: 100 }}
                    >
                        <span className="text-primary-600 dark:text-accent-400 font-bold text-sm tracking-wider uppercase">
                            My Work
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-glow">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
                        A showcase of my recent work across web, mobile, and desktop applications
                    </p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative"
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                            >
                                <div className="glass rounded-3xl p-7 h-full hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-accent-500/15 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/40 dark:hover:border-accent-500/40 overflow-hidden">
                                    {/* Gradient accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    {/* Category badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.span
                                            className={`px-4 py-1.5 text-xs font-bold rounded-full bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {project.category}
                                        </motion.span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{project.year}</span>
                                    </div>

                                    {/* Project title */}
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm leading-relaxed min-h-[4.5rem]">
                                        {project.description}
                                    </p>

                                    {/* Tech stack icons with animation */}
                                    <div className="flex flex-wrap gap-3 mb-5">
                                        {project.techIcons.map((icon, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="w-10 h-10 p-2 rounded-xl bg-white/80 dark:bg-gray-800/80 shadow-md border border-gray-200/50 dark:border-gray-700/50"
                                                whileHover={{
                                                    scale: 1.2,
                                                    rotate: 10,
                                                    transition: { type: "spring", stiffness: 400 }
                                                }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Image
                                                    src={`https://go-skill-icons.vercel.app/api/icons?i=${icon}`}
                                                    alt={icon}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                    unoptimized
                                                />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tech.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    {project.github && (
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-accent-400 hover:text-primary-700 dark:hover:text-accent-300 transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            <FiGithub className="w-4 h-4" />
                                            View Code
                                            <span className="text-lg">→</span>
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
