'use client';

import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorSize = isHovered ? 40 : 12;

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics for the cursor
    const springConfig = { damping: 25, stiffness: 400 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX - cursorSize / 2);
            mouseY.set(e.clientY - cursorSize / 2);
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        // Add event listeners for hover effects
        const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');

        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Global mouse movement
        window.addEventListener('mousemove', moveMouse);

        // Observer for dynamic elements (optional, but good for SPAs)
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const newElements = document.querySelectorAll('a, button, .cursor-pointer');
                    newElements.forEach((el) => {
                        el.removeEventListener('mouseenter', handleMouseEnter); // clean up
                        el.addEventListener('mouseenter', handleMouseEnter);
                        el.removeEventListener('mouseleave', handleMouseLeave); // clean up
                        el.addEventListener('mouseleave', handleMouseLeave);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, [cursorSize, mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 bg-primary-500 rounded-full mix-blend-difference pointer-events-none z-[9999]"
            style={{
                x: cursorX,
                y: cursorY,
                width: cursorSize,
                height: cursorSize,
            }}
            animate={{
                width: cursorSize,
                height: cursorSize,
                backgroundColor: isHovered ? '#fff' : '#6366f1', // Turn white on hover (mix-blend-diff looks cool)
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
            }}
        >
            {/* Optional inner ring or glow */}
        </motion.div>
    );
}
