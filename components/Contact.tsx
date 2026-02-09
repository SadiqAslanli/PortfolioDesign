"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[150px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Əlaqə</h2>
                            <h3 className="text-4xl font-bold md:text-5xl mb-8">Gəlin Yeni Bir <span className="text-gradient">İşə Başlayaq</span></h3>
                            <p className="text-lg text-foreground/50 mb-12">
                                Suallarınız var və ya yeni bir layihə haqqında danışmaq istəyirsiniz?
                                Bizə yazın və ya zəng edin, komandamız sizə ən qısa zamanda geri dönəcək.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6 group">
                                    <div className="h-12 w-12 rounded-xl glass border border-foreground/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-foreground/40 uppercase tracking-wider mb-1">Telefon</div>
                                        <div className="text-lg font-bold text-foreground">+994 50 000 00 00</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="h-12 w-12 rounded-xl glass border border-foreground/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-foreground/40 uppercase tracking-wider mb-1">Email</div>
                                        <div className="text-lg font-bold text-foreground">info@portfolio.az</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="h-12 w-12 rounded-xl glass border border-foreground/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm text-foreground/40 uppercase tracking-wider mb-1">Ünvan</div>
                                        <div className="text-lg font-bold text-foreground">Bakı, Azərbaycan</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="glass border border-foreground/10 rounded-3xl p-8 md:p-12"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">Adınız</label>
                                        <input
                                            type="text"
                                            placeholder="Adınız Soyadınız"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">Email</label>
                                        <input
                                            type="email"
                                            placeholder="email@example.com"
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">Mövzu</label>
                                    <input
                                        type="text"
                                        placeholder="Müzakirə etmək istədiyiniz mövzu"
                                        className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/40">Mesajınız</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Layihəniz haqqında qısa məlumat..."
                                        className="w-full bg-foreground/5 border border-foreground/10 rounded-xl px-4 py-4 text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>

                                <button className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg shadow-accent/25">
                                    Mesajı Göndər <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
