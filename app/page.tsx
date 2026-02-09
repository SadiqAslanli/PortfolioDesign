import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Dynamic imports for below-the-fold components
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-foreground/5 rounded-3xl" />
});
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <div className="min-h-[600px] w-full animate-pulse bg-foreground/5 rounded-3xl" />
});
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="min-h-[500px] w-full animate-pulse bg-foreground/5 rounded-3xl" />
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="min-h-[400px] w-full animate-pulse bg-foreground/5 rounded-3xl" />
});
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <div className="space-y-0">
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
      <Footer />

      {/* Static noise texture for premium feel - Optimized with hardware acceleration */}
      <div
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] will-change-transform transform-gpu"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          backfaceVisibility: "hidden"
        }}
      ></div>
    </main>
  );
}
