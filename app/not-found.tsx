"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
            {/* Logo */}
            <div className="absolute top-10 left-10 z-20">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-10 w-10 transition-transform group-hover:scale-110">
                        <Image
                            src="/logo.png"
                            alt="NARİNCİ Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full" />

            <div className="relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring" }}
                >
                    <h1 className="text-[15vw] font-black text-foreground/5 leading-none select-none drop-shadow-sm">
                        404
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="-mt-[5vw]"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">
                        Səhifə <span className="text-gradient">Tapılmadı</span>
                    </h2>
                    <p className="text-lg text-foreground/50 max-w-md mx-auto mb-10 leading-relaxed">
                        Axtardığınız səhifə silinmiş, adı dəyişdirilmiş və ya müvəqqəti olaraq əlçatmaz ola bilər.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="h-14 px-8 rounded-2xl bg-accent text-white font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl shadow-accent/20 active:scale-95 group"
                        >
                            <Home size={18} /> Ana Səhifəyə Qayıt
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="h-14 px-8 rounded-2xl border border-foreground/10 bg-foreground/5 text-foreground font-bold flex items-center gap-3 hover:bg-foreground/10 transition-all active:scale-95"
                        >
                            <ArrowLeft size={18} /> Geri Dön
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[15%] w-12 h-12 rounded-xl bg-accent/20 border border-accent/20 backdrop-blur-sm hidden md:block"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[15%] w-16 h-16 rounded-2xl bg-accent-secondary/20 border border-accent-secondary/20 backdrop-blur-sm hidden md:block"
            />
        </main>
    );
}
