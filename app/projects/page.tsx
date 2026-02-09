"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, X, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = React.useState<any>(null);

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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-24"
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                            Bütün <span className="text-gradient">Layihələrimiz</span>
                        </h1>
                        <p className="text-xl text-foreground/50 max-w-2xl mx-auto leading-relaxed">
                            İndiyə qədər həyata keçirdiyimiz bütün rəqəmsal həllər burada cəmlənmişdir.
                            Hər bir layihə bizim üçün yeni bir təcrübə və uğur hekayəsidir.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                onOpen={setSelectedProject}
                            />
                        ))}
                    </div>
                </div>

                {/* Project Popup */}
                <AnimatePresence>
                    {selectedProject && (
                        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProject(null)}
                                className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                            />
                            <motion.div
                                layoutId={selectedProject.title}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="relative w-full max-w-4xl glass-dark border border-foreground/10 rounded-[2.5rem] overflow-hidden notch-shadow bg-background"
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 h-12 w-12 rounded-full bg-background/10 hover:bg-accent/20 flex items-center justify-center z-50 text-foreground transition-all hover:rotate-90 group"
                                >
                                    <X size={24} className="group-hover:text-accent" />
                                </button>

                                <div className="flex flex-col lg:flex-row h-full">
                                    <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden relative">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                    </div>
                                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                        <span className="text-xs font-black text-accent uppercase tracking-[0.3em] mb-4">
                                            {selectedProject.category}
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">
                                            {selectedProject.title}
                                        </h2>
                                        <p className="text-foreground/60 text-lg leading-relaxed mb-8">
                                            {selectedProject.description}
                                        </p>
                                        <div className="flex flex-wrap gap-4 mt-auto">
                                            <a
                                                href={selectedProject.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-accent text-white font-bold hover:scale-105 transition-transform shadow-lg shadow-accent/25"
                                            >
                                                <ExternalLink size={20} /> Canlı Bax
                                            </a>
                                            <button
                                                onClick={() => setSelectedProject(null)}
                                                className="px-8 py-4 rounded-2xl border border-foreground/10 hover:bg-foreground/5 font-bold transition-all"
                                            >
                                                Geri Qayıt
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </section>

            <Footer />
        </main>
    );
};

export default ProjectsPage;
