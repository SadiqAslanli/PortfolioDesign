"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yBackground = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <section ref={containerRef} id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden py-24 w-full">
            {/* Parallax Background blobs */}
            <motion.div
                style={{ y: yBackground }}
                className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
            />
            <motion.div
                style={{ y: yBackground }}
                className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-accent-secondary/20 blur-[120px]"
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    style={{ y: yText, opacity, scale }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-6"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-bold text-accent backdrop-blur-md uppercase tracking-wider"
                    >
                        🚀 NARİNCİ
                    </motion.span>

                    <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                        <span className="text-foreground">Gözəl və Funksional</span>{" "}
                        <span className="text-gradient">Rəqəmsal Təcrübələr</span>
                    </h1>

                    <p className="max-w-2xl text-lg text-foreground/60 md:text-xl">
                        Biz sizin ideyalarınızı üstün dizayn və ən müasir texnologiyalarla canlandırırıq.
                        Müasir biznes üçün premium veb həllər.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                        <Link href="/projects">
                            <button className="h-14 rounded-full bg-accent px-8 text-lg font-semibold text-white transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20">
                                Layihələrə Bax
                            </button>
                        </Link>
                        <Link href="/#contact">
                            <button className="h-14 rounded-full border border-foreground/10 bg-foreground/5 px-8 text-lg font-semibold text-foreground backdrop-blur-md transition-all hover:bg-foreground/10">
                                Bizimlə Əlaqə
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/20 p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="h-2 w-1.5 rounded-full bg-foreground/60"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
