"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowLeft, Github, Chrome, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => setIsLoading(false), 2000);
    };

    return (
        <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden transition-colors duration-500">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary/10 blur-[120px] rounded-full animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-[440px] z-10"
            >
                {/* Back Link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-foreground/40 hover:text-accent transition-colors mb-8 group"
                >
                    <div className="h-8 w-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                        <ArrowLeft size={14} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest">Ana Səhifəyə Qayıt</span>
                </Link>

                {/* Login Card */}
                <div className="glass border border-foreground/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden bg-white/70 dark:bg-black/40 backdrop-blur-3xl">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="h-16 w-16 bg-gradient-to-tr from-accent to-accent-secondary rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-accent/20"
                        >
                            <Lock className="text-white" size={28} />
                        </motion.div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Xoş Gəlmisiniz</h1>
                        <p className="text-foreground/50 text-sm">Hesabınıza daxil olmaq üçün məlumatları doldurun</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">E-poçt Ünvanı</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-accent transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    required
                                    placeholder="narinci@example.az"
                                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl py-4 pl-12 pr-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 ml-1">Şifrə</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-accent transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="••••••••"
                                    className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl py-4 pl-12 pr-12 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/5 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-1">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative h-5 w-5 bg-foreground/5 border border-foreground/10 rounded-md group-hover:border-accent transition-colors flex items-center justify-center">
                                    <input type="checkbox" className="peer absolute opacity-0 cursor-pointer" />
                                    <div className="h-2.5 w-2.5 bg-accent rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-xs text-foreground/60 group-hover:text-foreground transition-colors">Məni xatırla</span>
                            </label>
                            <button type="button" className="text-xs font-bold text-accent hover:underline">Şifrəni unutmusunuz?</button>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold rounded-2xl shadow-xl shadow-accent/20 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            {isLoading ? (
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                <>
                                    Daxil Ol
                                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="mt-10">
                        <div className="relative mb-8 text-center">
                            <div className="absolute top-1/2 left-0 w-full h-px bg-foreground/10" />
                            <span className="relative bg-background px-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/30 transition-colors duration-500">və ya</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="h-14 rounded-2xl border border-foreground/10 bg-foreground/5 flex items-center justify-center gap-3 hover:bg-foreground/10 transition-all font-bold text-xs uppercase tracking-wider">
                                <Chrome size={18} /> Google
                            </button>
                            <button className="h-14 rounded-2xl border border-foreground/10 bg-foreground/5 flex items-center justify-center gap-3 hover:bg-foreground/10 transition-all font-bold text-xs uppercase tracking-wider">
                                <Github size={18} /> GitHub
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="mt-10 text-center text-sm text-foreground/40">
                        Hesabınız yoxdur? <Link href="/register" className="font-bold text-accent hover:underline">Qeydiyyatdan keçin</Link>
                    </p>
                </div>
            </motion.div>
        </main>
    );
}
