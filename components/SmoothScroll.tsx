'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        // Use autoRaf instead of manual requestAnimationFrame to prevent duplicate updates if supported by version
        // Fallback or exact standard config just in case autoRaf isn't standard in their specific lenis version:
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
