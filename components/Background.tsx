'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Animated lines configuration
const horizontalLines = [
    { y: '15%', delay: 0, duration: 15 },
    { y: '35%', delay: 3, duration: 18 },
    { y: '55%', delay: 1, duration: 20 },
    { y: '75%', delay: 4, duration: 16 },
    { y: '90%', delay: 2, duration: 22 },
];

const verticalLines = [
    { x: '10%', delay: 0.5, duration: 17 },
    { x: '30%', delay: 2.5, duration: 19 },
    { x: '50%', delay: 1.5, duration: 21 },
    { x: '70%', delay: 3.5, duration: 16 },
    { x: '90%', delay: 0, duration: 18 },
];

const AnimatedLine = ({
    isHorizontal,
    position,
    delay,
    duration
}: {
    isHorizontal: boolean;
    position: string;
    delay: number;
    duration: number;
}) => {
    return (
        <motion.div
            className={`absolute ${isHorizontal ? 'left-0 right-0 h-px' : 'top-0 bottom-0 w-px'}`}
            style={{
                [isHorizontal ? 'top' : 'left']: position,
                background: isHorizontal
                    ? 'linear-gradient(90deg, transparent 0%, rgba(99, 102, 241, 0.15) 20%, rgba(139, 92, 246, 0.2) 50%, rgba(99, 102, 241, 0.15) 80%, transparent 100%)'
                    : 'linear-gradient(180deg, transparent 0%, rgba(99, 102, 241, 0.15) 20%, rgba(139, 92, 246, 0.2) 50%, rgba(99, 102, 241, 0.15) 80%, transparent 100%)',
            }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0.3, 0.7, 0.3],
                [isHorizontal ? 'scaleX' : 'scaleY']: [0.8, 1, 0.8],
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

// Flowing light particle on a line
const FlowingParticle = ({
    isHorizontal,
    position,
    delay
}: {
    isHorizontal: boolean;
    position: string;
    delay: number;
}) => {
    return (
        <motion.div
            className={`absolute w-20 h-px ${isHorizontal ? '' : 'rotate-90'}`}
            style={{
                [isHorizontal ? 'top' : 'left']: position,
                [isHorizontal ? 'left' : 'top']: '-10%',
                background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent)',
            }}
            animate={{
                [isHorizontal ? 'left' : 'top']: ['0%', '120%'],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                delay,
                ease: "linear",
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
            {/* Subtle gradient background */}
            <div className="premium-bg" aria-hidden="true" />

            {/* Animated lines grid */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]" aria-hidden="true">
                {/* Horizontal lines */}
                {horizontalLines.map((line, index) => (
                    <AnimatedLine
                        key={`h-${index}`}
                        isHorizontal={true}
                        position={line.y}
                        delay={line.delay}
                        duration={line.duration}
                    />
                ))}

                {/* Vertical lines */}
                {verticalLines.map((line, index) => (
                    <AnimatedLine
                        key={`v-${index}`}
                        isHorizontal={false}
                        position={line.x}
                        delay={line.delay}
                        duration={line.duration}
                    />
                ))}

                {/* Flowing light particles */}
                {horizontalLines.slice(0, 3).map((line, index) => (
                    <FlowingParticle
                        key={`fp-${index}`}
                        isHorizontal={true}
                        position={line.y}
                        delay={index * 3}
                    />
                ))}
            </div>

            {/* Minimal grid pattern */}
            <div className="rect-pattern" aria-hidden="true" />
        </>
    );
}
