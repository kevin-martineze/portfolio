"use client";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
//? COMPONENTS
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
//? DATA
import { personalInfo, socialLinks } from "@/data/portfolio";

const socialIconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
  Twitter: <Twitter size={20} />,
  Mail: <Mail size={20} />,
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="orb orb-pink w-[400px] h-[400px] top-0 left-1/3" />
      <div className="orb orb-violet w-[300px] h-[300px] bottom-0 right-0" />

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
            <span className="gradient-text">Contacto</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Conectemos</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Siempre estoy abierto a nuevas oportunidades, colaboraciones y
              conversaciones interesantes. No dudes en contactarme a través del
              formulario o mis redes sociales.
            </p>

            {/* Info items */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                  aria-label={link.name}
                >
                  {socialIconMap[link.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="glass rounded-2xl p-6 sm:p-8 space-y-5 hover:border-primary/20 transition-all duration-500"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input
                    id="contact-name"
                    placeholder="Tu nombre"
                    className="bg-background/50 border-border focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-background/50 border-border focus:border-primary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-subject"
                  className="text-sm font-medium"
                >
                  Asunto
                </label>
                <Input
                  id="contact-subject"
                  placeholder="¿Sobre qué quieres hablar?"
                  className="bg-background/50 border-border focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium"
                >
                  Mensaje
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="Cuéntame sobre tu proyecto..."
                  rows={5}
                  className="bg-background/50 border-border focus:border-primary/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6"
              >
                <Send
                  size={16}
                  className="mr-2 group-hover:translate-x-1 transition-transform"
                />
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
