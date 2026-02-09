"use client";

import React, { useState, useEffect } from "react";
import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
    const [time, setTime] = useState<string>("");
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const bakuTime = now.toLocaleTimeString("az-AZ", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });
            setTime(bakuTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: "Ana Səhifə", href: "/" },
        { name: "Haqqımızda", href: "/about" },
        { name: "Layihələr", href: "/projects" },
        { name: "Xidmətlər", href: "/services" },
        { name: "Əlaqə", href: "/contact" },
    ];

    const socialLinks = [
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ];

    return (
        <footer className="relative overflow-hidden bg-background border-t border-foreground/5">
            {/* Background gradient decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-accent/[0.05] pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 group mb-6">
                            <div className="relative h-10 w-10 transition-transform group-hover:scale-110 group-hover:rotate-6">
                                <Image
                                    src="/logo.png"
                                    alt="NARİNCİ Logo"
                                    fill
                                    className="object-contain drop-shadow-lg"
                                />
                            </div>
                            <span className="font-black tracking-tighter text-foreground text-2xl uppercase">NARİNCİ</span>
                        </Link>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                            Rəqəmsal dünyada innovativ həllər təqdim edirik.
                            Biznesinizi gələcəyə hazırlayırıq.
                        </p>

                        {/* Live Clock */}
                        <div className="inline-flex items-center gap-3 px-4 py-3 rounded-2xl glass border border-accent/20 bg-gradient-to-br from-accent/5 to-accent-secondary/5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-accent/20 rounded-full blur-md animate-pulse" />
                                <div className="relative h-2 w-2 rounded-full bg-accent" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-mono font-black text-foreground tracking-wider">{time}</span>
                                <span className="text-[10px] uppercase tracking-wider text-foreground/40 font-bold">Bakı, Azərbaycan</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-6">Keçidlər</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-foreground/60 hover:text-accent transition-colors text-sm font-medium hover:translate-x-1 inline-block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-6">Əlaqə</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Mail size={16} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-0.5">Email</p>
                                    <a href="mailto:info@narinci.az" className="text-sm font-bold text-foreground hover:text-accent transition-colors">
                                        info@narinci.az
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Phone size={16} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-0.5">Telefon</p>
                                    <a href="tel:+994501234567" className="text-sm font-bold text-foreground hover:text-accent transition-colors">
                                        +994 50 123 45 67
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <MapPin size={16} className="text-accent" />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/40 uppercase tracking-wider mb-0.5">Ünvan</p>
                                    <p className="text-sm font-bold text-foreground">
                                        Bakı, Azərbaycan
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-foreground mb-6">Sosial</h4>
                        <div className="flex gap-3 mb-8">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="h-11 w-11 rounded-xl border border-foreground/10 bg-foreground/5 hover:bg-accent hover:border-accent hover:text-white text-foreground/60 flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-1 group"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div className="space-y-3">
                            <p className="text-sm text-foreground/60 font-medium">
                                Yeniliklərdən xəbərdar olun
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email ünvanınız"
                                    className="flex-1 px-4 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                                />
                                <button className="px-5 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-bold transition-all hover:scale-105 active:scale-95">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-foreground/5 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-foreground/40 text-sm">
                            © {new Date().getFullYear()} NARİNCİ. Bütün hüquqlar qorunur.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="#" className="text-foreground/40 hover:text-accent transition-colors">Məxfilik</Link>
                            <Link href="#" className="text-foreground/40 hover:text-accent transition-colors">Şərtlər</Link>
                            <Link href="#" className="text-foreground/40 hover:text-accent transition-colors">Kuki</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 h-12 w-12 rounded-full bg-accent text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-50"
                    aria-label="Yuxarı qayıt"
                >
                    <ArrowUp size={20} />
                </motion.button>
            )}
        </footer>
    );
};

export default Footer;
