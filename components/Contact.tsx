'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const contactInfo = [
        {
            icon: FiMail,
            title: 'Email',
            value: 'matheeshaabi@gmail.com',
            link: 'mailto:matheeshaabi@gmail.com',
        },
        {
            icon: FiPhone,
            title: 'Phone',
            value: '+94 74 219 0328',
            link: 'tel:+94742190328',
        },
        {
            icon: FiMapPin,
            title: 'Location',
            value: 'Galle, Sri Lanka',
            link: null,
        },
    ];

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/Matheesha-Abiman', label: 'GitHub' },
        { icon: FiLinkedin, href: 'https://www.linkedin.com/in/matheesha-abiman-8550b62a3/', label: 'LinkedIn' },
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
        hidden: { opacity: 0, y: 30, scale: 0.95 },
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
        <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
            {/* Minimal Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent dark:via-gray-800/20" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.div
                        className="inline-block px-5 py-2.5 rounded-full glass mb-6 border-primary-500/30 shadow-lg shadow-primary-500/10"
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                        transition={{ delay: 0.1, type: "spring" as const, stiffness: 100 }}
                    >
                        <span className="text-primary-600 dark:text-accent-400 font-bold text-sm tracking-wider uppercase">
                            Let&apos;s Connect
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black mb-4 text-gray-900 dark:text-white text-glow">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-14 text-lg max-w-2xl mx-auto leading-relaxed">
                        I&apos;m always open to new opportunities and collaborations.
                        Feel free to reach out — let&apos;s create something amazing together!
                    </p>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'show' : 'hidden'}
                    >
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={cardVariants}
                                className="group"
                                whileHover={{ y: -5 }}
                            >
                                {item.link ? (
                                    <a href={item.link} className="block h-full">
                                        <div className="glass rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white/50 dark:bg-gray-900/50">
                                            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                                {item.value}
                                            </p>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="glass rounded-2xl p-8 h-full border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50">
                                        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        className="glass rounded-3xl p-10 mb-12 bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                            Ready to build something incredible?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-lg mx-auto">
                            Whether you have a project idea, job opportunity, or just want to chat about tech,
                            I&apos;d love to hear from you.
                        </p>
                        <motion.a
                            href="mailto:matheeshaabi@gmail.com"
                            className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300"
                            whileHover={{ scale: 1.08, boxShadow: "0 20px 50px -10px rgba(139, 92, 246, 0.5)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <FiSend className="w-5 h-5" />
                            Send Message
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.7 }}
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-800"
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
