"use client";

import React from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
            <Header />

            <section className="pt-40 pb-24 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary/10 blur-[150px] rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <Link href="/" className="group flex items-center gap-4 text-foreground/50 hover:text-foreground transition-all">
                            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-foreground/10 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300">
                                <ArrowLeft size={20} />
                            </div>
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Geri Qayıt</span>
                        </Link>
                    </motion.div>

                    <About />
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
