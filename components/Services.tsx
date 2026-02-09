"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Layout, Film, Globe, Smartphone, Rocket, X, ChevronRight } from "lucide-react";

interface Service {
    title: string;
    description: string;
    image: string;
    icon: React.ElementType;
    color: string;
}

const services: Service[] = [
    {
        title: "Brend & Qrafik Dizayn",
        description: "Brendinizin vizual kimliyini yaradan kreativ qrafik həllər, loqo dizaynı və çap materialları.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
        icon: Palette,
        color: "#f43f5e",
    },
    {
        title: "UI / UX Dizayn",
        description: "İstifadəçiləriniz üçün intuitiv, estetik və istifadəsi rahat rəqəmsal interfeyslərin hazırlanması.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
        icon: Layout,
        color: "#3b82f6",
    },
    {
        title: "Motion Design & Video",
        description: "Brendinizi canlandıran motion qrafika, 2D/3D animasiyalar və professional video montaj xidmətləri.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        icon: Film,
        color: "#10b981",
    },
    {
        title: "Veb Sayt",
        description: "Modern, sürətli və bütün cihazlara uyğun (responsive) korporativ və e-ticarət saytlarının qurulması.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
        icon: Globe,
        color: "#a855f7",
    },
    {
        title: "Mobil Tətbiq",
        description: "iOS və Android platformaları üçün yüksək performanslı və müasir mobil tətbiqlər.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
        icon: Smartphone,
        color: "#fb923c",
    },
    {
        title: "Brend Qurulması",
        description: "Sıfırdan brend strategiyasının qurulması, adlandırma (naming) və bazar mövqeləndirmə xidmətləri.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop",
        icon: Rocket,
        color: "#6366f1",
    },
];

const Services = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Xidmətlərimiz</h2>
                    <h3 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">Biz Nə <span className="text-gradient">Təklif Edirik?</span></h3>
                    <p className="max-w-2xl mx-auto text-foreground/50 text-lg">
                        Sizin rəqəmsal transformasiyanız üçün tam spektr xidmətlər təqdim edirik.
                        İdeyadan tətbiqə qədər hər addımda yanınızdayıq.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedService(service)}
                            className="group p-8 rounded-[2.5rem] border border-foreground/5 glass-dark hover:border-accent/30 transition-all duration-500 cursor-pointer relative overflow-hidden active:scale-95"
                        >
                            <div
                                className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-foreground/5 transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:rotate-6 group-hover:scale-110 shadow-inner"
                                style={{ color: service.color }}
                            >
                                <service.icon size={30} />
                            </div>
                            <h4 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors">{service.title}</h4>
                            <p className="text-foreground/50 leading-relaxed mb-6 line-clamp-2">
                                {service.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 text-gradient">
                                Ətraflı Öyrən <ChevronRight size={14} />
                            </div>

                            {/* Decorative background element */}
                            <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors will-change-transform" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Service Detail Popup */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
                        />
                        <motion.div
                            layoutId={`service-${selectedService.title}`}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative w-full max-w-2xl glass border border-foreground/10 rounded-[3rem] overflow-hidden notch-shadow bg-background"
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 h-12 w-12 rounded-full bg-foreground/5 hover:bg-accent hover:text-white flex items-center justify-center z-50 text-foreground transition-all hover:rotate-90"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8 md:p-12 flex flex-col items-center text-center">
                                <div
                                    className="mb-8 h-20 w-20 flex items-center justify-center rounded-[1.5rem] bg-foreground/5 shadow-inner"
                                    style={{ color: selectedService.color }}
                                >
                                    <selectedService.icon size={40} />
                                </div>

                                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                                    {selectedService.title}
                                </h2>

                                <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent mb-8" />

                                <p className="text-foreground/60 text-lg leading-relaxed mb-10">
                                    {selectedService.description}
                                </p>





                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="mt-12 w-full py-5 rounded-2xl bg-foreground text-background font-black uppercase tracking-[0.2rem] text-sm hover:bg-accent hover:text-white transition-all active:scale-[0.98] shadow-xl"
                                >
                                    Geri Qayıt
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services;
