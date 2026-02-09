"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";
import { Shield, Zap, Heart, Globe } from "lucide-react";
import Image from "next/image";

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (isInView && nodeRef.current) {
            const node = nodeRef.current;
            const numericValue = parseInt(value.replace(/\D/g, ''));
            const suffix = value.replace(/\d/g, '');

            const controls = animate(0, numericValue, {
                duration,
                onUpdate(v: number) {
                    node.textContent = Math.round(v) + suffix;
                },
            });

            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return <span ref={nodeRef}>0</span>;
};

const stats = [
    { label: "Uğurlu Layihə", value: "150+", icon: Shield },
    { label: "Məmnun Müştəri", value: "120+", icon: Heart },
    { label: "İllik Təcrübə", value: "5+", icon: Globe },
];

const About = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yFloating = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={sectionRef} id="about" className="py-24 relative overflow-hidden w-full">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 aspect-square overflow-hidden rounded-3xl border border-foreground/10 glass">
                            {/* This would be an image, using a placeholder gradient for now */}
                            <div className="h-full w-full bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center p-12">
                                <div className="text-center">
                                    <div className="relative h-48 w-48 mx-auto mb-6 transition-all hover:scale-105 duration-700">
                                        <Image
                                            src="/logo.png"
                                            alt="NARİNCİ Logo"
                                            fill
                                            className="object-contain drop-shadow-[0_0_30px_rgba(255,126,51,0.3)]"
                                        />
                                    </div>
                                    <h3 className="text-3xl font-black text-foreground tracking-tighter uppercase">Narinci</h3>
                                </div>
                            </div>
                        </div>

                        {/* Floating decoration with parallax */}
                        <motion.div
                            style={{ y: yFloating }}
                            className="absolute -bottom-10 -right-10 h-40 w-40 glass rounded-2xl p-6 hidden md:block z-20 shadow-2xl"
                        >
                            <span className="text-4xl font-bold text-accent">
                                <Counter value="5+" />
                            </span>
                            <p className="text-sm text-foreground/60">İllik Sənaye Təcrübəsi</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Haqqımızda</h2>
                        <h3 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-8 leading-tight">
                            Biz Rəqəmsal Dünyada <span className="text-gradient">İz Buraxırıq</span>
                        </h3>
                        <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
                            Bizim komanda dizayn və kodun mükəmməl kəsişməsində işləyir. Hər bir layihəmiz müştərilərimizin
                            biznesini bir pillə yuxarı daşımaq üçün hədəfə alınmışdır. Strateji düşüncə və innovativ
                            texnologiyaları birləşdirərək, gələcəyin həllərini bu gün qururuq.
                        </p>


                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group relative p-8 rounded-3xl glass-dark border border-foreground/10 hover:border-accent/40 transition-all duration-500 overflow-hidden"
                                >
                                    {/* Gradient background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Icon with gradient background */}
                                    <div className="relative mb-6 inline-flex">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-secondary opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-full" />
                                        <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                            <stat.icon size={28} className="text-accent" />
                                        </div>
                                    </div>

                                    {/* Counter */}
                                    <div className="relative text-5xl font-black mb-3 text-foreground group-hover:text-accent transition-colors duration-500">
                                        <Counter value={stat.value} />
                                    </div>

                                    {/* Label */}
                                    <div className="relative text-sm text-foreground/60 font-bold uppercase tracking-widest">
                                        {stat.label}
                                    </div>

                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
