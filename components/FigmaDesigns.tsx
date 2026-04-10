'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiFigma, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FigmaDesigns() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [showAll, setShowAll] = useState(false);

    const designs = [
        {
            title: 'E-Commerce Mobile App',
            description: 'Modern mobile app for seamless online shopping with intuitive user flow.',
            link: 'https://www.figma.com/design/k2H4PzeDiX0ZtkLZu5A46f/Ecommerce?node-id=0-1&t=Upz8y23sRYuQX7uB-1',
            category: 'Mobile App',
            gradient: 'from-pink-500 to-rose-500',
            glowColor: 'rgba(244,63,94,0.3)',
        },
        {
            title: 'TasteNest Restaurant',
            description: 'Elegant web interface for a premium dining restaurant with menus and reservations.',
            link: 'https://www.figma.com/design/PxOMMnFe19OIymTs0twDeR/TasteNest?node-id=0-1&t=0bIKZMcjt5dmRJtt-1',
            category: 'Web Design',
            gradient: 'from-orange-500 to-amber-500',
            glowColor: 'rgba(249,115,22,0.3)',
        },
        {
            title: 'Coffee Shop Website',
            description: 'Warm boutique coffee shop website reflecting a cozy roastery atmosphere.',
            link: 'https://www.figma.com/design/pj6QqIzKbjHM7zLTqIfL2z/coffee-shop?node-id=0-1&t=VCMvSsoK6x98BWIA-1',
            category: 'Web Design',
            gradient: 'from-emerald-500 to-teal-500',
            glowColor: 'rgba(16,185,129,0.3)',
        },
        {
            title: 'Coffee Shop Mobile App',
            description: 'Intuitive mobile app with custom menus, brewing choices and smooth ordering flows.',
            link: 'https://www.figma.com/design/uzeBJ8oKfqNubGf1eC1rbg/Coffee-Mobile?node-id=0-1&t=40icNhH8yHIeix5u-1',
            category: 'Mobile App',
            gradient: 'from-blue-500 to-indigo-500',
            glowColor: 'rgba(99,102,241,0.3)',
        },
        {
            title: 'Visit Sri Lanka',
            description: 'Vibrant desktop website promoting Sri Lanka as a premier travel destination.',
            link: 'https://www.figma.com/design/nmeaZZV8rVbdRjcGHtPwxg/Visit-Sri-Lanka?node-id=0-1&t=kUpU9A83gxTrLu9N-1',
            category: 'Web Design',
            gradient: 'from-violet-500 to-purple-600',
            glowColor: 'rgba(139,92,246,0.3)',
        },
        {
            title: 'GEO-CLEAN',
            description: 'Smart mobile app for on-demand cleaning services — cleaners scan QR codes, selfie check-ins, GPS tracking & admin reporting.',
            link: 'https://www.figma.com/design/RzBdBoyqu1wcmRIO6OKPuB/GEO-CLEAN?node-id=0-1&t=vX5nXGLC7TUmo8LW-1',
            category: 'Mobile App',
            gradient: 'from-cyan-500 to-sky-500',
            glowColor: 'rgba(6,182,212,0.3)',
        },
    ];

    const visibleDesigns = showAll ? designs : designs.slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 16,
            },
        },
    };

    const Card = ({ design, index }: { design: typeof designs[0]; index: number }) => {
        const [isLoaded, setIsLoaded] = useState(false);

        return (
        <motion.div
            key={index}
            variants={cardVariants}
            className="group relative"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring' as const, stiffness: 300, damping: 22 }}
        >
            {/* Glow bloom behind card */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10 scale-95"
                style={{ background: design.glowColor }}
            />

            <div className="glass flex flex-col rounded-xl p-3 h-full border border-gray-200/50 dark:border-gray-700/50 group-hover:border-primary-500/40 dark:group-hover:border-accent-500/40 overflow-hidden relative transition-all duration-500">
                {/* Top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${design.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Shimmer sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none z-10" />

                {/* Figma Embed Placeholder vs Iframe */}
                <div className="relative w-full overflow-hidden rounded-xl aspect-[16/9] mb-3 bg-gray-100 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 shadow-md group-hover:shadow-lg transition-all duration-500">
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
                        {!isLoaded ? (
                            <button
                                onClick={() => setIsLoaded(true)}
                                className="w-full h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-[#1e1e1e] hover:bg-gray-100 dark:hover:bg-[#252525] transition-colors group/btn"
                            >
                                <div className={`p-3 rounded-full bg-gradient-to-br ${design.gradient} mb-2 shadow-md group-hover/btn:scale-110 transition-transform`}>
                                    <FiFigma className="w-6 h-6 text-white" />
                                </div>
                                <span className="font-semibold text-xs text-gray-600 dark:text-gray-300">Load Preview</span>
                            </button>
                        ) : (
                            <iframe
                                className="w-full h-full border-none bg-white dark:bg-[#1e1e1e]"
                                src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(design.link)}`}
                                allowFullScreen
                            />
                        )}
                    </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                        <motion.span
                            className={`px-2.5 py-0.5 text-[11px] font-bold rounded-full bg-gradient-to-r ${design.gradient} text-white shadow-sm tracking-wide`}
                            whileHover={{ scale: 1.08, y: -1 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            {design.category}
                        </motion.span>
                        <motion.div
                            className="p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                            whileHover={{ rotate: 20, scale: 1.15 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            <FiFigma className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                        </motion.div>
                    </div>

                    <h3 className="text-base font-bold mb-1 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors duration-300 leading-snug">
                        {design.title}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3 flex-grow">
                        {design.description}
                    </p>

                    <motion.a
                        href={design.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg font-bold text-xs text-white bg-gradient-to-r ${design.gradient} shadow-md transition-all duration-300`}
                        whileHover={{ y: -2, scale: 1.02, boxShadow: `0 8px 24px ${design.glowColor}` }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <FiFigma className="w-3.5 h-3.5" />
                        Open in Figma
                        <FiExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
        );
    };

    return (
        <section id="figma-designs" className="py-24 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-6 border-primary-500/30 shadow-lg shadow-primary-500/10 mx-auto table"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ delay: 0.1, type: 'spring' as const, stiffness: 100 }}
                    >
                        <FiFigma className="text-primary-600 dark:text-accent-400 w-4 h-4" />
                        <span className="text-primary-600 dark:text-accent-400 font-bold text-sm tracking-wider uppercase">
                            UI/UX Portfolio
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-glow">
                        Creative <span className="gradient-text">Designs</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto text-lg leading-relaxed">
                        A curated collection of visually stunning interfaces, crafted with precision in Figma.
                    </p>

                    {/* Grid of Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                        key={showAll ? 'all' : 'partial'} // Re-trigger animation when state changes
                    >
                        {visibleDesigns.map((design, i) => (
                            <Card key={`design-${i}`} design={design} index={i} />
                        ))}
                    </motion.div>

                    {/* Show More / Show Less Button */}
                    {designs.length > 3 && (
                        <motion.div 
                            className="flex justify-center mt-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="btn btn-outline flex items-center gap-2 group px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-gray-700 dark:text-gray-300 transition-all duration-300"
                            >
                                <span className="font-semibold text-sm">
                                    {showAll ? 'Show Less Designs' : 'Show All Designs'}
                                </span>
                                {showAll ? (
                                    <FiChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                                ) : (
                                    <FiChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                                )}
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
