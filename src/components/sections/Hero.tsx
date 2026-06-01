import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import KeyholeHero from "@/components/visuals/KeyholeHero";

const Hero = () => {
  return (
    <section className="relative min-h-[min(100svh,800px)] overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20"
              style={{paddingTop: 'clamp(2rem, 8vw, 4rem)', paddingBottom: 'clamp(2rem, 6vw, 3rem)', background: 'linear-gradient(135deg, #0B0F1A 0%, #1A2332 100%)'}}>
      
      {/* BRIGHT CYAN GLOW */}
      <div className="absolute top-1/2 right-1/4 z-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-[#63F0DD]/20 blur-[100px]" aria-hidden />
      
      {/* ADDITIONAL BLUE ACCENT */}
      <div className="absolute top-1/3 left-1/4 z-0 h-[300px] w-[300px] rounded-full bg-[#17306C]/15 blur-[80px]" aria-hidden />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-center gap-4 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-2 inline-flex items-center rounded-full border border-[rgba(139,124,255,0.4)] px-4 py-2 text-xs font-medium tracking-[0.15em] text-[var(--purple-primary)]"
            >
              THE INTELLIGENCE BEHIND TRUST
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="display-hero text-[#EDF2F4]"
            >
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                AI-Driven Compliance.
              </motion.span>
              <br />
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                Zero Guesswork.
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-3 max-w-xl text-base leading-relaxed text-[#D1D5DB]"
            >
              Privanta transforms fragmented data into real-time intelligence, enabling organizations to operate with
              confidence and control.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-4 flex flex-wrap items-center gap-4"
            >
              <Button variant="hero" size="default" className="group" asChild>
                <a href="#contact">
                  Request Private Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                </a>
              </Button>
              <Button
                variant="secondary"
                size="default"
                asChild
              >
                <Link to="/products">Explore Intelligence</Link>
              </Button>
            </motion.div>
          </div>
          <KeyholeHero />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
