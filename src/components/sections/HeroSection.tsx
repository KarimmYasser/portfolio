import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useContent } from "@/content/ContentContext";

export default function HeroSection() {
  const { content, locale } = useContent();
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
        <div className="text-center max-w-4xl mx-auto">
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
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className={`flex justify-center space-x-6 ${
              locale === "ar" ? "space-x-reverse" : ""
            }`}
          >
            <Button variant="ghost" size="sm" className="cyber-glow">
              <SiGithub className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="cyber-glow">
              <SiLinkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="cyber-glow">
              <Mail className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="cyber-glow">
              <Download className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-4 h-4 bg-cyber-blue rounded-full opacity-60 float"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        className="absolute top-1/3 right-16 w-6 h-6 border-2 border-cyber-purple rotate-45 opacity-40 float"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-cyber-pink rounded-full opacity-30 float"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground cursor-pointer"
          onClick={scrollToProjects}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
