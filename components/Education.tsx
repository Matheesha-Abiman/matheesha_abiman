'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { HiAcademicCap, HiCodeBracket, HiBeaker } from 'react-icons/hi2';

export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const education = [
        {
            degree: 'Bachelor of Information Technology',
            institution: 'University of Moratuwa',
            location: 'Moratuwa, Sri Lanka',
            period: 'July 2025 – Present',
            icon: HiAcademicCap,
            color: 'from-indigo-500 to-purple-500',
        },
        {
            degree: 'Graduate Diploma in Software Engineering',
            institution: 'IJSE - Institute of Software Engineering',
            location: 'Galle, Sri Lanka',
            period: 'March 2024 – Present',
            icon: HiCodeBracket,
            color: 'from-violet-500 to-fuchsia-500',
        },
        {
            degree: 'G.C.E. Advanced Level (Physical Sciences)',
            institution: "St. Aloysius' College",
            location: 'Galle, Sri Lanka',
            period: '2009 – 2022',
            icon: HiBeaker,
            color: 'from-blue-500 to-cyan-500',
        },
    ];

    return (
        <section id="education" className="py-24 relative" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
                        Academic Background
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Education
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {education.map((edu, index) => {
                        const IconComponent = edu.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all hover:shadow-md">
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                                {edu.institution}
                                            </p>
                                            <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-500">
                                                <span className="flex items-center gap-1.5">
                                                    <FiCalendar className="w-3.5 h-3.5" />
                                                    {edu.period}
                                                </span>
                                                <span className="flex items-center gap-1.5">
                                                    <FiMapPin className="w-3.5 h-3.5" />
                                                    {edu.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
