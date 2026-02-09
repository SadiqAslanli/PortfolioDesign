"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

const ProjectCard = ({ project, onOpen }: { project: Project, onOpen: (p: Project) => void }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-foreground/5 glass-dark notch-shadow bg-background flex flex-col h-full"
        >
            <div className="aspect-[16/10] w-full overflow-hidden relative cursor-pointer" onClick={() => onOpen(project)}>
                <motion.div
                    className="absolute inset-0"
                    style={{
                        scale: imageScale,
                        y: imageY
                    }}
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-40" />

                {/* Floating Category Badge on Image */}
                <div className="absolute top-6 left-6 z-10">
                    <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-accent/90 backdrop-blur-md shadow-lg shadow-accent/20">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-8 md:p-10 relative z-10 w-full flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-6">
                    <h4 className="text-3xl md:text-4xl font-bold tracking-tighter group-hover:text-accent transition-colors text-foreground">{project.title}</h4>
                    <div className="flex gap-3">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-10 w-10 flex items-center justify-center rounded-full border border-foreground/10 hover:border-accent/40 hover:bg-accent/5 cursor-pointer transition-all text-foreground/40 hover:text-accent"
                        >
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </div>

                <p className="text-foreground/50 mb-10 leading-relaxed max-w-sm text-lg flex-grow">{project.description}</p>

                <motion.button
                    onClick={() => onOpen(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-auto flex items-center gap-4 px-8 py-4 rounded-2xl bg-foreground/5 border border-foreground/10 text-xs font-black uppercase tracking-[0.2em] text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all group/btn shadow-inner w-fit"
                >
                    LAYİHƏNİ İNCELE
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
            </div>
        </motion.div >
    );
};

const Projects = () => {
    const containerRef = useRef(null);
    const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yCode1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const yCode2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const yCode3 = useTransform(scrollYProgress, [0, 1], [0, -250]);

    return (
        <section ref={containerRef} id="projects" className="py-32 relative overflow-hidden">
            {/* Background text decoration */}
            <div className="absolute top-40 left-10 text-[15rem] font-black text-foreground/[0.03] pointer-events-none select-none">
                WORKS
            </div>

            {/* Parallax Code Elements */}
            <motion.div style={{ y: yCode1 }} className="absolute top-20 right-[10%] text-accent/20 font-mono text-2xl pointer-events-none hidden lg:block">
                {"<div>"}
            </motion.div>
            <motion.div style={{ y: yCode2 }} className="absolute top-[40%] left-[5%] text-foreground/10 font-mono text-xl pointer-events-none hidden lg:block">
                npm install framer-motion
            </motion.div>
            <motion.div style={{ y: yCode3 }} className="absolute bottom-20 right-[15%] text-accent-secondary/20 font-mono text-3xl pointer-events-none hidden lg:block">
                {"{ ...portfolio }"}
            </motion.div>
            <motion.div style={{ y: yCode1 }} className="absolute top-[60%] right-[5%] text-foreground/10 font-mono text-lg pointer-events-none hidden lg:block">
                const [state, setState] = useState();
            </motion.div>

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-accent" /> Portfoliomuz
                        </h2>
                        <h3 className="text-5xl font-bold md:text-7xl lg:text-8xl leading-[1.1] text-foreground">
                            Seçilmiş <span className="text-gradient">İşlərimiz</span>
                        </h3>
                    </div>
                    <div className="max-w-md border-l border-foreground/10 pl-8 hidden md:block">
                        <p className="text-foreground/50 text-lg leading-relaxed">
                            Hər bir layihəmiz keyfiyyət və innovasiyanın bariz nümunəsidir.
                            Mükəmməllik standartımızdır.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:mt-24">
                    {projects.slice(0, 4).map((project) => (
                        <ProjectCard key={project.title} project={project} onOpen={setSelectedProject} />
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link href="/projects">
                        <button className="h-16 px-12 rounded-full border border-foreground/10 bg-foreground/5 hover:bg-accent hover:text-white hover:border-accent transition-all font-bold text-lg backdrop-blur-md">
                            Bütün Layihələrə Bax →
                        </button>
                    </Link>
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
                                <div className="lg:w-1/2 aspect-video lg:aspect-auto overflow-hidden relative min-h-[300px]">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
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
    );
};

export default Projects;
