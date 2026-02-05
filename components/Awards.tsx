'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';

export default function Awards() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const awards = [
        {
            title: 'Introduction to UI/UX Design',
            provider: 'Alison',
            description: 'Completed a CPD certified program covering user experience and interface design principles',
            year: '2026',
        },
        {
            title: 'Front-End Web Development',
            provider: 'University of Moratuwa',
            description: 'Participated in an online learning programme through the Faculty of IT and CODL',
            year: '2025',
        },
        {
            title: 'Web Design for Beginners',
            provider: 'University of Moratuwa',
            description: 'Successfully completed the online learning programme in web design',
            year: '2025',
        },
        {
            title: 'Python for Beginners',
            provider: 'University of Moratuwa',
            description: 'Completed the online learning programme covering fundamental programming concepts, data structures, and algorithmic logic',
            year: '2025',
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 },
    };

    return (
        <section id="awards" className="py-20 relative" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        Awards & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                        Continuous learning and professional development achievements
                    </p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                        variants={container}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                    >
                        {awards.map((award, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                className="glass rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                                whileHover={{ scale: 1.05, rotate: 1 }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                                        <FiAward className="w-6 h-6 text-primary-600 dark:text-accent-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-lg font-bold gradient-text">
                                                {award.title}
                                            </h3>
                                            <span className="text-xs px-2 py-1 rounded-full bg-primary-500/20 text-primary-700 dark:bg-accent-500/20 dark:text-accent-300 shrink-0">
                                                {award.year}
                                            </span>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            {award.provider}
                                        </p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            {award.description}
                                        </p>
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
