"use client";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";

//? COMPONENTS
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
//? DATA
import { personalInfo } from "@/data/portfolio";

export default function HeroSection() {
  function handleScroll(href: string) {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="orb orb-violet w-[500px] h-[500px] -top-40 -right-40" />
      <div className="orb orb-cyan w-[400px] h-[400px] -bottom-32 -left-32" />
      <div className="orb orb-pink w-[300px] h-[300px] top-1/3 left-1/2" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center">
        {/* Availability badge */}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 font-heading leading-none"
        >
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground/90 mb-6 tracking-tight"
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-xl mx-auto text-base sm:text-lg text-muted-foreground/70 mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            onClick={() => handleScroll("#contact")}
            className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base rounded-xl shadow-lg shadow-primary/20"
          >
            <Send
              size={18}
              className="mr-2 group-hover:translate-x-1 transition-transform"
            />
            Contáctame
          </Button>
          <a 
            href="/hv.pdf" 
            download="CV_Kevin_Martinez.pdf"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group px-8 py-6 text-base rounded-xl border-border hover:border-primary/50 hover:bg-primary/5"
            )}
          >
            <Download
              size={18}
              className="mr-2 group-hover:translate-y-0.5 transition-transform"
            />
            Descargar HV
          </a>
        </motion.div>

        {/* Tech decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-6 text-muted-foreground/40 font-mono text-sm"
        >
          <span>React</span>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <span>Next.js</span>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <span>TypeScript</span>
          <span className="w-1 h-1 rounded-full bg-primary/40" />
          <span>Tailwind</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => handleScroll("#about")}
          className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={16} className="animate-scroll" />
        </button>
      </motion.div>
    </section>
  );
}
