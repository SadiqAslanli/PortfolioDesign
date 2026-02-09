"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Zap, Mail, Sun, Moon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
    { name: "Ana Səhifə", href: "/", icon: Home },
    { name: "Haqqımızda", href: "/about", icon: User },
    { name: "Layihələr", href: "/projects", icon: Briefcase },
    { name: "Xidmətlər", href: "/services", icon: Zap },
    { name: "Əlaqə", href: "/contact", icon: Mail },
];

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    const toggleMenu = (e?: React.MouseEvent) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 transition-all duration-500">
            <motion.nav
                layout
                initial={false}
                animate={{
                    width: "100%",
                    maxWidth: "1200px",
                    height: "70px",
                    borderRadius: "24px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="glass notch-shadow flex items-center justify-center border-b border-foreground/5 relative px-6 z-[120]"
            >
                <div className={`flex w-full items-center justify-between gap-8 max-w-7xl mx-auto h-[70px]`}>
                    {/* Logo / Brand */}
                    <div className="flex items-center gap-2 whitespace-nowrap z-10">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative h-10 w-10 transition-transform group-hover:rotate-6">
                                <Image
                                    src="/logo.png"
                                    alt="NARİNCİ Logo"
                                    fill
                                    className="object-contain drop-shadow-md"
                                />
                            </div>
                            <span className="font-black tracking-tighter text-foreground text-lg uppercase">NARİNCİ</span>
                        </Link>
                    </div>

                    {/* Desktop Nav Items - Always Visible */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative flex items-center gap-2 px-6 py-3 text-[11px] font-black text-foreground/70 transition-all hover:text-accent group whitespace-nowrap rounded-full hover:bg-accent/5"
                            >
                                <item.icon size={16} className="text-accent group-hover:scale-110 transition-transform" />
                                <span className="uppercase tracking-[0.2em]">{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 z-30">
                        {/* Theme Toggle - Hidden on Mobile Menu Open */}
                        {!mobileMenuOpen && (
                            <button
                                onClick={toggleTheme}
                                className="h-11 w-11 flex items-center justify-center rounded-xl bg-foreground/5 hover:bg-accent/10 transition-all text-foreground/70 hover:text-accent shadow-inner group"
                            >
                                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                        )}

                        {/* Burger / X Button (Mobile Only) */}
                        <button
                            onClick={(e) => toggleMenu(e)}
                            className="flex md:hidden h-11 w-11 items-center justify-center rounded-xl bg-accent text-white transition-all active:scale-90 relative z-[110]"
                            aria-label="Menu Toggle"
                        >
                            <div className="relative w-5 h-4">
                                <motion.span
                                    animate={mobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                                    className="absolute top-1/2 left-0 h-[2px] w-5 bg-current rounded-full"
                                />
                                <motion.span
                                    animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    className="absolute top-1/2 left-0 h-[2px] w-5 bg-current rounded-full"
                                />
                                <motion.span
                                    animate={mobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                                    className="absolute top-1/2 left-0 h-[2px] w-5 bg-current rounded-full"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Sidebar Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[101] md:hidden"
                        />

                        {/* Sidebar Content */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-[70%] sm:w-[50%] bg-background border-l border-foreground/10 z-[105] md:hidden shadow-2xl flex flex-col p-8 pt-24"
                        >
                            <div className="flex flex-col gap-4">
                                {navItems.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-4 px-4 py-5 text-lg font-black text-foreground/80 transition-all hover:bg-accent/5 hover:text-accent rounded-2xl group border border-transparent active:scale-[0.98]"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-foreground/40 group-hover:bg-accent group-hover:text-white transition-all shadow-inner">
                                                <item.icon size={24} />
                                            </div>
                                            <span className="whitespace-nowrap tracking-tighter uppercase text-sm">{item.name}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
