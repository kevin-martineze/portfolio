"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";

//? COMPONENTS
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
//? DATA
import { projects, type Project } from "@/data/portfolio";

function ProjectCard({
  project,
  index,
  onSelect,
}: {
  project: Project;
  index: number;
  onSelect: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group perspective-1000"
    >
      <div className="relative h-full glass rounded-3xl overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="p-8 sm:p-10 flex flex-col h-full relative z-10">
          {/* Project header */}
          <div className="flex justify-between items-start mb-6">
            <span className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground/60 border border-border/40 px-2 py-0.5 rounded-md">
              Project {String(index + 1).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/60 hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/60 hover:text-primary transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground/80 leading-relaxed mb-8 flex-grow font-medium">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-secondary/50 border-none text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <Button
            size="sm"
            variant="outline"
            onClick={() => onSelect(project)}
            className="w-full text-xs font-bold uppercase tracking-widest py-5 rounded-xl border-border/60 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300"
          >
            <Eye size={14} className="mr-2" />
            Explorar Proyecto
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="orb orb-violet w-[400px] h-[400px] top-0 right-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-4 font-heading text-foreground">
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-muted-foreground/70 max-w-lg mx-auto font-medium">
            Una selección de proyectos que demuestran mi experiencia en
            desarrollo frontend
          </p>
          <div className="w-12 h-1.5 bg-primary/20 mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onSelect={setSelected}
            />
          ))}
        </div>
      </div>

      {/* Project detail dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg glass border-border/40 rounded-3xl p-0 overflow-hidden shadow-2xl">
          {selected && (
            <div className="flex flex-col">
              {/* Header image/gradient */}
              <div className="h-32 bg-primary/10 relative">
                <div className="absolute inset-0 grid-bg opacity-30" />
              </div>

              <div className="p-8 -mt-12 relative z-10">
                <div className="glass w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl border-border/40">
                  🚀
                </div>

                <DialogHeader className="text-left">
                  <DialogTitle className="text-3xl font-black tracking-tighter mb-4 text-foreground">
                    {selected.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground/80 leading-relaxed text-base font-medium">
                    {selected.longDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-wrap gap-2 mt-6">
                  {selected.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  {selected.liveUrl && (
                    <a
                      href={selected.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        className="w-full bg-primary py-6 rounded-xl font-bold uppercase tracking-widest text-xs"
                        size="sm"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Ver Demo
                      </Button>
                    </a>
                  )}
                  {selected.githubUrl && (
                    <a
                      href={selected.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        className="w-full py-6 rounded-xl font-bold uppercase tracking-widest text-xs"
                        variant="outline"
                        size="sm"
                      >
                        <Github size={14} className="mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}
                  {!selected.liveUrl && !selected.githubUrl && (
                    <div className="text-center w-full py-4 px-6 rounded-2xl bg-muted/30 border border-border/50">
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                        Proyecto Privado
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
