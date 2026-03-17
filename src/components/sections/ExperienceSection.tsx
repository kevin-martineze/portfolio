"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
//? DATA
import { experiences } from "@/data/portfolio";
//? ASSETS
import LogoPangea from "@/assets/team_pangea_logo.jpeg";
import LogoSempertex from "@/assets/sempertex_sa_logo.jpeg";

const logoMap: Record<string, typeof LogoPangea> = {
  "/logos/pangea.jpeg": LogoPangea,
  "/logos/sempertex.jpeg": LogoSempertex,
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">
            <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Mi trayectoria profesional en el desarrollo web
          </p>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                } flex-row text-left`}
              >
                {/* Timeline dot */}
                {/* <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10 shadow-lg shadow-primary/30" /> */}

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div
                  className={`flex-1 pl-10 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"} md:w-1/2`}
                >
                  <div className="glass rounded-2xl p-6 hover:border-primary/20 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                    {/* Header */}
                    <div
                      className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-border/40 shadow-sm">
                        {exp.logo && logoMap[exp.logo] ? (
                          <Image
                            src={logoMap[exp.logo]}
                            alt={exp.company}
                            width={48}
                            height={48}
                            className="object-contain p-1"
                          />
                        ) : (
                          <div className="w-full h-full bg-primary/10 text-primary flex items-center justify-center">
                            <Briefcase size={20} />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {exp.position}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Period */}
                    <p className="text-xs font-mono text-muted-foreground mb-3">
                      {exp.period}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className={`space-y-2 ${isLeft ? "md:text-left" : ""}`}>
                      {exp.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-muted-foreground/80"
                        >
                          <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
