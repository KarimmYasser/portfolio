import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Mail,
  Download,
  Terminal as TerminalIcon,
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useContent } from "@/content/ContentContext";
import { useTerminalOverlay } from "@/terminal/TerminalOverlayContext";
import CarShowcase from "@/components/CarShowcase";

export default function HeroSection() {
  const { content, locale } = useContent();
  const { setOpen } = useTerminalOverlay();
  // Social links sourced from localized content with safe fallbacks
  const socials = content.socials || [];
  const githubUrl = socials.find((s) => s.icon === "github")?.href;
  const linkedinUrl = socials.find((s) => s.icon === "linkedin")?.href;
  const emailUrl =
    socials.find((s) => s.icon === "mail")?.href ||
    (content.meta?.email ? `mailto:${content.meta.email}` : undefined);
  // Resume URL can come from env or public file fallback
  const resumeUrl = (import.meta as any).env?.VITE_RESUME_URL ?? "/resume.pdf";
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mb-16 md:mb-24"
    >
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative">
          <div className="text-center max-w-4xl mx-auto lg:text-left z-30">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-cyber-blue font-mono text-lg">
                {content.hero.greeting}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 gradient-text"
            >
              {content.hero.name}
            </motion.h1>

            {/* Tagline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-muted-foreground"
            >
              {content.hero.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              {content.hero.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="cyber-glow font-semibold px-8 py-4 rounded-xl"
              >
                {content.hero.ctas.seeProjects}
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="cyber-border font-semibold px-8 py-4 rounded-xl"
              >
                {content.hero.ctas.getInTouch}
                <Mail className="ml-2 h-4 w-4" />
              </Button>

              <Button
                onClick={() => setOpen(true)}
                size="lg"
                className="font-mono px-8 py-4 rounded-xl bg-black text-cyber-green border border-cyber-green hover:bg-black/80 hover:text-cyber-green/90 focus:outline-none focus:ring-2 focus:ring-cyber-green transition-colors flex items-center justify-center"
              >
                <span className="flex items-center space-x-2 rtl:space-x-reverse">
                  <span>Open in Terminal</span>
                  <TerminalIcon className="h-4 w-4" />
                </span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className={`flex ${
                locale === "ar" ? "justify-end" : "justify-start"
              } lg:justify-start space-x-6 ${
                locale === "ar" ? "space-x-reverse" : ""
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                className="cyber-glow"
                asChild
                disabled={!githubUrl}
              >
                <a
                  href={githubUrl || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <SiGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="cyber-glow"
                asChild
                disabled={!linkedinUrl}
              >
                <a
                  href={linkedinUrl || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="cyber-glow"
                asChild
                disabled={!emailUrl}
              >
                <a href={emailUrl || undefined} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="cyber-glow" asChild>
                <a href={resumeUrl} download aria-label="Download Resume">
                  <Download className="h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
          {/* Right: Car Showcase */}
          <div className="full-bleed md:max-w-3xl md:mx-auto w-screen md:w-full relative z-20">
            <CarShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
