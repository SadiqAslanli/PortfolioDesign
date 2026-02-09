"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const MouseFollower = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth transition settings
    const springConfig = { damping: 40, stiffness: 200, mass: 1 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
            {/* Primary soft Glow */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                }}
                className="absolute h-[800px] w-[800px] -ml-[400px] -mt-[400px] rounded-full bg-accent/20 blur-[130px] will-change-transform"
            />
            {/* Core vibrant Glow */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                }}
                className="absolute h-[400px] w-[400px] -ml-[200px] -mt-[200px] rounded-full bg-accent/30 blur-[90px] will-change-transform"
            />
        </div>
    );
};
