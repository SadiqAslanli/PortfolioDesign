"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectCard = ({ project, index, onOpen }: { project: any, index: number, onOpen?: (p: any) => void }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? 50 : 100, index % 2 === 0 ? -50 : -100]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    return (
        <motion.div
            ref={cardRef}
            style={{ y }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-foreground/10 glass-dark notch-shadow mb-12 bg-background flex flex-col items-center"
        >
            <div className="aspect-[16/10] w-full overflow-hidden relative cursor-pointer" onClick={() => onOpen?.(project)}>
                <motion.div
                    className="absolute inset-0"
                    style={{
                        scale: imageScale,
                        y: imageY
                    }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-80"
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

            <div className="p-8 md:p-10 relative z-10 w-full">
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

                <p className="text-foreground/50 mb-10 leading-relaxed max-w-sm text-lg">{project.description}</p>

                <motion.button
                    onClick={() => onOpen?.(project)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 px-8 py-4 rounded-2xl bg-foreground/5 border border-foreground/10 text-xs font-black uppercase tracking-[0.2em] text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all group/btn shadow-inner"
                >
                    LAYİHƏNİ İNCELE
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
