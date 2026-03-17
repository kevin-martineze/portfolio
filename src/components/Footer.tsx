import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

//? DATA
import { socialLinks } from "@/data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
  Mail: <Mail size={18} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold gradient-text">KM</span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Diseñando el futuro, un pixel a la vez.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card hover:bg-accent hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kevin Martinez. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Hecho con <Heart size={12} className="text-red-500 fill-red-500" />{" "}
            y Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
