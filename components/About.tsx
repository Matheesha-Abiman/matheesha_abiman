'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiDownload } from 'react-icons/fi';

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });



    return (
        <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-primary-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-l from-accent-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.div
                        className="inline-block px-5 py-2.5 rounded-full glass mb-6 border-primary-500/30 shadow-lg shadow-primary-500/10 mx-auto table"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ delay: 0.1, type: "spring" as const, stiffness: 100 }}
                    >
                        <span className="text-primary-600 dark:text-accent-400 font-bold text-sm tracking-wider uppercase">
                            Get to Know Me
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-center mb-4 text-glow">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-14 text-lg max-w-xl mx-auto">
                        Passionate developer with a love for creating impactful solutions
                    </p>

                    <motion.div
                        className="glass rounded-3xl p-8 md:p-12 mb-12"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                I am a <span className="font-semibold text-primary-600 dark:text-accent-400">Full-Stack Developer</span> and <span className="font-semibold text-primary-600 dark:text-accent-400">UI/UX Engineer</span> with a dual academic background in Computer Science at <span className="font-semibold text-primary-600 dark:text-accent-400">IJSE</span> and Information Technology at the <span className="font-semibold text-primary-600 dark:text-accent-400">University of Moratuwa</span>. I specialize in architecting end-to-end web solutions, seamlessly integrating robust server-side logic with pixel-perfect, interactive user interfaces.
                            </p>

                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                My expertise spans the entire product lifecycle from conceptualizing complex user flows and high-fidelity prototypes to deploying scalable, secure architectures. I am committed to engineering systems that are not only visually stunning but also performant, maintainable, and optimized for an exceptional user experience.
                            </p>

                            {/* Contact Details Grid */}
                            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Name:</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Matheesha Abiman</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email:</h4>
                                    <a href="mailto:matheeshaabi@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                                        matheeshaabi@gmail.com
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone:</h4>
                                    <a href="tel:+94742190328" className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors">
                                        +94 74 219 0328
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">Location:</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Galle, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="/Matheesha_Abiman_CV.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1"
                                >
                                    <FiDownload className="w-5 h-5" />
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </motion.div>


                </motion.div>
            </div>
        </section>
    );
}
