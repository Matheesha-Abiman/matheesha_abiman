'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUsers, FiCalendar, FiMapPin, FiAward, FiBookOpen, FiShare2 } from 'react-icons/fi';

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const experiences = [
        {
            title: 'Student Committee Organizer',
            company: 'IJSE – Institute of Software Engineering',
            location: 'Galle, Sri Lanka',
            period: 'Dec 2025 – Present',
            description: [
                'Organized academic and extracurricular events, workshops, and programs.',
                'Coordinated effectively with lecturers and student teams to ensure event success.',
                'Managed communications and developed leadership, teamwork, and event management skills.',
            ],
            current: true,
            icon: FiUsers,
            color: 'from-indigo-500 to-purple-500',
        },
        {
            title: 'Student Committee Social Media Coordinator',
            company: 'IJSE – Institute of Software Engineering',
            location: 'Galle, Sri Lanka',
            period: 'Dec 2024 – Nov 2025',
            description: [
                'Planned social media strategies and created promotional content for academic events.',
                'Participated in student projects, enhancing digital presence and engagement.',
                'Developed strong coordination, leadership, and communication skills.',
            ],
            current: false,
            icon: FiShare2,
            color: 'from-violet-500 to-fuchsia-500',
        },
        {
            title: 'Graduate Student / Campus Volunteer',
            company: 'The Beeline Campus',
            location: 'Galle, Sri Lanka',
            period: 'Mar 2023 – Jul 2023',
            description: [
                'Participated in student-led academic projects and campus activities.',
                'Gained valuable exposure to collaborative learning and team coordination.',
                'Contributed to the success of various campus initiatives and events.',
            ],
            current: false,
            icon: FiBookOpen,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Science Society Member',
            company: "St. Aloysius' College",
            location: 'Galle, Sri Lanka',
            period: '2019 – 2022',
            description: [
                'Engaged in science events, workshops, and competitions.',
                'Developed analytical, research, and teamwork skills through practical projects.',
                'Contributed to organizing school-level science exhibitions and quizzes.',
            ],
            current: false,
            icon: FiAward,
            color: 'from-emerald-500 to-teal-500',
        },
    ];

    return (
        <section id="experience" className="py-24 relative" ref={ref}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">
                        Journey & Growth
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Leadership & Volunteering
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        My journey of growth through leadership roles and community engagement
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Center line */}
                    {/* Center line with animated beam */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-200 dark:from-indigo-900 dark:via-purple-900 dark:to-indigo-900 transform md:-translate-x-1/2 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-indigo-600 to-transparent dark:via-indigo-400"
                            animate={{ top: ['-20%', '120%'] }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>

                    {experiences.map((exp, index) => {
                        const IconComponent = exp.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -30 : 30 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={`relative mb-12 last:mb-0 flex items-start gap-6 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                                    <motion.div
                                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                                    >
                                        <IconComponent className="w-5 h-5 text-white" />
                                    </motion.div>
                                    {exp.current && (
                                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                                        </span>
                                    )}
                                </div>

                                {/* Spacer for mobile */}
                                <div className="w-16 md:hidden" />

                                {/* Content Card */}
                                <div className={`flex-1 md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                                    <motion.div
                                        className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all hover:shadow-lg"
                                        whileHover={{ y: -4 }}
                                    >
                                        {/* Header */}
                                        <div className="mb-4">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                                                {exp.company}
                                            </p>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500 dark:text-gray-500">
                                            <span className="flex items-center gap-1">
                                                <FiCalendar className="w-3 h-3" />
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiMapPin className="w-3 h-3" />
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <ul className="space-y-2">
                                            {exp.description.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>

                                {/* Spacer for desktop */}
                                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}