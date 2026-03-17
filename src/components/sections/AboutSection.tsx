"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Terminal, Zap } from "lucide-react";

//? COMPONENTS
import { Badge } from "@/components/ui/badge";
//? DATA
import { personalInfo } from "@/data/portfolio";
//? ASSETS
import PhotoLinkedin from "@/assets/PhotoLinkedin.png";

interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: <Code2 size={20} />,
    title: "Clean Code",
    description: "Código limpio, mantenible y escalable",
  },
  {
    icon: <Terminal size={20} />,
    title: "Full Stack Development",
    description: "Dominio de frontend, backend y bases de datos",
  },
  {
    icon: <Zap size={20} />,
    title: "Performance",
    description: "Aplicaciones optimizadas y de alta velocidad",
  },
];

const techStack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "React Native",
  "NestJS",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 font-heading text-foreground">
            Sobre <span className="gradient-text">mí</span>
          </h2>
          <div className="w-12 h-1.5 bg-primary/20 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Avatar + decorative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-8 rounded-3xl bg-primary/5 blur-3xl" />

              <div className="relative glass rounded-[2.5rem] p-10 border-border/40 shadow-2xl">
                <div className="w-48 h-48 mx-auto mb-8 rounded-3xl bg-primary/5 flex items-center justify-center text-7xl shadow-inner border border-border/20">
                  <Image
                    src={PhotoLinkedin}
                    alt="Photo Linkedin"
                    width={192}
                    height={192}
                    className="rounded-3xl"
                  />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-center mb-2 text-foreground">
                  {personalInfo.name}
                </h3>
                <p className="text-muted-foreground/60 text-center text-xs font-bold uppercase tracking-widest mb-10">
                  {personalInfo.location} · {personalInfo.title}
                </p>

                {/* Highlights */}
                <div className="space-y-4">
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{}}
                      transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-border/30 group"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-tight text-foreground">
                          {item.title}
                        </p>
                        <p className="text-xs text-muted-foreground/80 leading-relaxed italic">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Description + Tech */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-8">
              <p className="text-xl sm:text-2xl text-foreground font-bold leading-tight tracking-tight">
                {personalInfo.description}
              </p>

              <p className="text-base text-muted-foreground/80 leading-relaxed font-medium">
                Me especializo en construir aplicaciones web con React y el
                ecosistema de Next.js, así como aplicaciones móviles con React
                Native. Creo en el poder del desarrollo robusto y el diseño
                funcional: interfaces que no solo se ven increíbles, sino que
                resuelven problemas reales. Siempre estoy explorando nuevas
                tecnologías y mejores prácticas para entregar experiencias de
                usuario excepcionales en múltiples plataformas.
              </p>

              {/* Tech stack */}
              <div className="pt-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 mb-6 flex items-center gap-4">
                  Tech Stack <div className="h-px flex-grow bg-border/40" />
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{}}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-4 py-2 text-xs font-bold bg-secondary/30 text-muted-foreground hover:bg-primary hover:text-primary-foreground border-none transition-all duration-300 cursor-default rounded-xl"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
