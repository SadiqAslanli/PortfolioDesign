import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />

      {/* Static noise texture for premium feel */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03]" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
    </main>
  );
}
