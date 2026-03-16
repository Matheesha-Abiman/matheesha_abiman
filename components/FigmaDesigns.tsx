'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiFigma, FiExternalLink } from 'react-icons/fi';

export default function FigmaDesigns() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const designs = [
        {
            title: 'E-Commerce Mobile App',
            description: 'A modern, user-centric mobile application design for seamless online shopping experiences. It focuses on clarity and effortless user flow.',
            link: 'https://www.figma.com/design/k2H4PzeDiX0ZtkLZu5A46f/Ecommerce?node-id=0-1&t=Upz8y23sRYuQX7uB-1',
            category: 'Mobile App',
            gradient: 'from-pink-500 to-rose-500',
        },
        {
            title: 'TasteNest Restaurant Website',
            description: 'An elegant and appetizing web interface designed for a premium dining restaurant, highlighting menus and reservations.',
            link: 'https://www.figma.com/design/PxOMMnFe19OIymTs0twDeR/TasteNest?node-id=0-1&t=0bIKZMcjt5dmRJtt-1',
            category: 'Web Design',
            gradient: 'from-orange-500 to-amber-500',
        },
        {
            title: 'Coffee Shop Website',
            description: 'A warm and inviting website layout tailored for a boutique coffee shop and roastery, reflecting a cozy atmosphere.',
            link: 'https://www.figma.com/design/pj6QqIzKbjHM7zLTqIfL2z/coffee-shop?node-id=0-1&t=VCMvSsoK6x98BWIA-1',
            category: 'Web Design',
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            title: 'Coffee Shop Mobile App',
            description: 'An intuitive mobile app design featuring interactive menus, customized brewing choices, and smooth ordering flows.',
            link: 'https://www.figma.com/design/uzeBJ8oKfqNubGf1eC1rbg/Coffee-Mobile?node-id=0-1&t=40icNhH8yHIeix5u-1',
            category: 'Mobile App',
            gradient: 'from-blue-500 to-indigo-500',
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
        <section id="figma-designs" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-6 border-primary-500/30 shadow-lg shadow-primary-500/10 mx-auto table"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ delay: 0.1, type: "spring" as const, stiffness: 100 }}
                    >
                        <FiFigma className="text-primary-600 dark:text-accent-400 w-4 h-4" />
                        <span className="text-primary-600 dark:text-accent-400 font-bold text-sm tracking-wider uppercase">
                            UI/UX Portfolio
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-glow">
                        Creative <span className="gradient-text">Designs</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg leading-relaxed">
                        A curated collection of visually stunning interfaces, crafted with precision in Figma.
                    </p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                    >
                        {designs.map((design, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring" as const, stiffness: 300, damping: 20 }}
                            >
                                <div className="glass flex flex-col rounded-3xl p-6 h-full hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-accent-500/15 transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-500/40 dark:hover:border-accent-500/40 overflow-hidden">
                                    {/* Gradient accent line */}
                                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${design.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                                    
                                    {/* Figma Embed Container */}
                                    <div className="relative w-full overflow-hidden rounded-2xl aspect-[16/10] mb-6 shadow-md bg-gray-50 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 transition-colors group-hover:border-primary-500/30 dark:group-hover:border-accent-500/30">
                                       <iframe 
                                            className="w-full h-full border-none"
                                            src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(design.link)}`} 
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    <div className="flex flex-col flex-grow">
                                        <div className="flex items-center justify-between mb-3">
                                            <motion.span
                                                className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${design.gradient} text-white shadow-md`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {design.category}
                                            </motion.span>
                                            <div className="flex gap-2">
                                                <div className="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                                                    <FiFigma className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                                                </div>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors duration-300">
                                            {design.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                                            {design.description}
                                        </p>

                                        {/* View Source Button anchored to bottom */}
                                        <div className="mt-auto">
                                            <motion.a
                                                href={design.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-gray-900/20 dark:shadow-white/20"
                                                whileHover={{ y: -2 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <FiFigma className="w-4 h-4" />
                                                Open in Figma
                                                <FiExternalLink className="w-4 h-4 ml-1" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
