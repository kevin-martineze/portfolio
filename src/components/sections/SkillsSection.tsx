"use client";
import { motion } from "framer-motion";
import {
  Monitor,
  Cloud,
  Terminal,
  Smartphone,
  ShieldCheck,
  Layers,
  type LucideIcon,
} from "lucide-react";

//? DATA
import { skills } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Monitor: Monitor,
  Smartphone: Smartphone,
  Terminal: Terminal,
  Cloud: Cloud,
  ShieldCheck: ShieldCheck,
  Layers: Layers,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="orb orb-cyan w-[350px] h-[350px] bottom-0 left-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">
            Mis <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tecnologías y herramientas con las que trabajo diariamente
          </p>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon] || Layers;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                className="group p-8 rounded-[2.5rem] bg-secondary/5 border border-border/20 hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-500"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary/60 group-hover:text-primary transition-colors duration-500">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-foreground/90">
                    {category.category}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground/60 mb-8 leading-relaxed font-medium">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-secondary/20 text-muted-foreground/70 text-[11px] font-bold border border-transparent hover:border-primary/10 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
