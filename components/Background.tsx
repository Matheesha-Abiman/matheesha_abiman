'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Large, professional floating wash configuration
const floatingOrbs = [
    { size: 900, x: '-10%', y: '-10%', color: 'rgba(99, 102, 241, 0.05)', delay: 0, duration: 40 }, // Top Left
    { size: 800, x: '60%', y: '5%', color: 'rgba(139, 92, 246, 0.04)', delay: 2, duration: 45 },  // Top Right
    { size: 850, x: '50%', y: '50%', color: 'rgba(236, 72, 153, 0.03)', delay: 4, duration: 42 }, // Bottom Right
    { size: 700, x: '-5%', y: '60%', color: 'rgba(99, 102, 241, 0.04)', delay: 1, duration: 38 }, // Bottom Left
];

// Professional Meteorite configuration
const meteorites = [
    { startX: 10, startY: -5, delay: 0 },
    { startX: 50, startY: -10, delay: 8 },
    { startX: 80, startY: -5, delay: 15 },
    { startX: 30, startY: -10, delay: 22 },
];

// Floating Orb Component
const FloatingOrb = ({
    size,
    x,
    y,
    color,
    delay,
    duration
}: {
    size: number;
    x: string;
    y: string;
    color: string;
    delay: number;
    duration: number;
}) => {
    return (
        <motion.div
            className="absolute rounded-full"
            style={{
                width: size,
                height: size,
                left: x,
                top: y,
                backgroundColor: color,
                filter: 'blur(150px)', // Increased blur for professional "wash" look
            }}
            animate={{
                x: [0, 30, -20, 15, 0],
                y: [0, -20, 25, -15, 0],
                scale: [1, 1.05, 0.98, 1.02, 1],
            }}
            transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
            }}
        />
    );
};

// Larger, Slower Meteorite Component
const Meteorite = ({ startX, startY, delay }: { startX: number; startY: number; delay: number }) => {
    return (
        <motion.div
            className="absolute"
            style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: '2px', // Slightly visible head
                height: '2px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                boxShadow: `
                    0 0 4px 1px rgba(255, 255, 255, 0.6),
                    0 0 10px 2px rgba(139, 92, 246, 0.4)
                `,
            }}
            initial={{
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.5,
            }}
            animate={{
                opacity: [0, 1, 1, 0],
                x: [0, 400, 800], // Travel further across screen
                y: [0, 400, 800],
                scale: [0.5, 1, 0.4],
            }}
            transition={{
                duration: 4, // Slower for professional feel
                repeat: Infinity,
                delay,
                repeatDelay: 12,
                ease: "easeOut",
            }}
        >
            {/* Long, professional tail */}
            <div
                className="absolute"
                style={{
                    width: '150px', // Much larger tail
                    height: '1px',
                    background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.2), transparent)',
                    transform: 'rotate(-45deg) translateX(-150px)', // Adjusted for new tail size
                    transformOrigin: 'right center',
                }}
            />
        </motion.div>
    );
};

// Larger grid pattern
const AnimatedGrid = () => {
    return (
        <motion.div
            className="fixed inset-0 pointer-events-none z-[-1]"
            style={{
                backgroundImage: `
                    linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '120px 120px', // Larger grid cells
            }}
            animate={{
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
                duration: 12, // Slower breathing
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
};

export default function Background() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            {/* Base gradient background */}
            <div className="premium-bg" aria-hidden="true" />

            {/* Animated floating orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]" aria-hidden="true">
                {floatingOrbs.map((orb, index) => (
                    <FloatingOrb
                        key={`orb-${index}`}
                        size={orb.size}
                        x={orb.x}
                        y={orb.y}
                        color={orb.color}
                        delay={orb.delay}
                        duration={orb.duration}
                    />
                ))}

                {/* Professional meteorites */}
                {meteorites.map((meteor, index) => (
                    <Meteorite
                        key={`meteor-${index}`}
                        startX={meteor.startX}
                        startY={meteor.startY}
                        delay={meteor.delay}
                    />
                ))}
            </div>

            {/* Large subtle grid */}
            <AnimatedGrid />
        </>
    );
}
