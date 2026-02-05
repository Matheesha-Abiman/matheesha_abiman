'use client';

import { useTheme } from './ThemeProvider';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-14 h-14 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: theme === 'dark' ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <FiMoon className="w-6 h-6 text-primary-600 dark:text-accent-400" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'light' ? 0 : 180,
                    scale: theme === 'light' ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <FiSun className="w-6 h-6 text-amber-500" />
            </motion.div>
        </motion.button>
    );
}
