'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript,
    SiPython, SiNodedotjs, SiMongodb, SiFirebase,
    SiTailwindcss, SiFigma, SiMysql, SiSpringboot, SiHibernate
} from 'react-icons/si';
import { FaJava, FaCode, FaPaintBrush, FaServer, FaDatabase } from 'react-icons/fa';

const skillCategories = [
    {
        title: 'Languages',
        icon: FaCode,
        gradient: 'from-blue-600 to-cyan-500',
        skills: [
            { name: 'Java', icon: FaJava, color: '#ED8B00' },
            { name: 'Python', icon: SiPython, color: '#3776AB' },
            { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        ],
    },
    {
        title: 'Frontend',
        icon: FaPaintBrush,
        gradient: 'from-purple-600 to-pink-500',
        skills: [
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
            { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
            { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
        ],
    },
    {
        title: 'Backend',
        icon: FaServer,
        gradient: 'from-green-600 to-emerald-500',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
            { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
            { name: 'Hibernate', icon: SiHibernate, color: '#59666C' },
        ],
    },
    {
        title: 'Database',
        icon: FaDatabase,
        gradient: 'from-orange-600 to-amber-500',
        skills: [
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Tech Stack
                        </span>
                    </motion.h2>
                </motion.div>

                {/* Skills Grid - Horizontal layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, categoryIndex) => {
                        const CategoryIcon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                                className="group"
                            >
                                <motion.div
                                    className="relative h-full p-6 rounded-3xl bg-white/5 dark:bg-gray-900/50 backdrop-blur-xl border border-white/10 dark:border-gray-700/50"
                                    whileHover={{
                                        y: -8,
                                        boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.25)',
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Gradient border glow on hover */}
                                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />

                                    {/* Category Header */}
                                    <div className="relative flex flex-col items-center text-center mb-8">
                                        <motion.div
                                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4`}
                                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                            transition={{ duration: 0.5 }}
                                            style={{
                                                boxShadow: '0 10px 40px -10px rgba(99, 102, 241, 0.5)',
                                            }}
                                        >
                                            <CategoryIcon className="w-8 h-8 text-white" />
                                        </motion.div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                            {category.title}
                                        </h3>
                                    </div>

                                    {/* Skills - 3D Icons */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {category.skills.map((skill, skillIndex) => {
                                            const SkillIcon = skill.icon;
                                            return (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                                    transition={{ delay: categoryIndex * 0.15 + skillIndex * 0.1 + 0.3 }}
                                                    className="flex flex-col items-center gap-2 group/skill"
                                                >
                                                    <motion.div
                                                        className="relative w-14 h-14 rounded-2xl flex items-center justify-center cursor-pointer"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
                                                            boxShadow: `0 4px 20px ${skill.color}30`,
                                                        }}
                                                        whileHover={{
                                                            scale: 1.2,
                                                            rotateY: 15,
                                                            rotateX: -10,
                                                            boxShadow: `0 15px 40px ${skill.color}50`,
                                                        }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                                    >
                                                        {/* 3D glow effect */}
                                                        <motion.div
                                                            className="absolute inset-0 rounded-2xl opacity-0 group-hover/skill:opacity-100"
                                                            style={{
                                                                background: `radial-gradient(circle at 30% 30%, ${skill.color}60, transparent 70%)`,
                                                                filter: 'blur(8px)',
                                                            }}
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                        <SkillIcon
                                                            className="w-7 h-7 relative z-10"
                                                            style={{ color: skill.color }}
                                                        />
                                                    </motion.div>
                                                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">
                                                        {skill.name}
                                                    </span>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
