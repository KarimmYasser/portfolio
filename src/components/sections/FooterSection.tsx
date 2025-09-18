import { motion } from "framer-motion";
import { Heart, Mail, ArrowUp } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useContent } from "@/content/ContentContext";
import Logo from "@/components/Logo";

export default function FooterSection() {
  const { content, locale } = useContent();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = content.socials.map((s) => ({
    icon:
      s.icon === "github"
        ? SiGithub
        : s.icon === "linkedin"
        ? SiLinkedin
        : s.icon === "x"
        ? SiX
        : Mail,
    href: s.href,
    label: s.label,
  }));

  const navLinks = content.nav.items;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative py-20 mt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <div className="mb-4">
                <a
                  href="#home"
                  aria-label={content.footer.brand}
                  className="inline-flex items-center"
                >
                  <Logo height={32} className="drop-shadow-sm" />
                </a>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                {content.footer.tagline}
              </p>
            </div>

            <div
              className={`flex space-x-4 ${
                locale === "ar" ? "space-x-reverse" : ""
              }`}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 rounded-lg bg-glass border border-border flex items-center justify-center hover:cyber-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 pb-1">
              {content.footer.navHeading}
            </h4>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`block text-muted-foreground hover:text-primary transition-colors ${
                    locale === "ar" ? "text-right" : "text-left"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-lg mb-4 pb-1">
              {content.footer.contactHeading}
            </h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{content.meta.email}</p>
              <p>{content.meta.phone}</p>
              <p>{content.meta.location}</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div
            className={`flex items-center space-x-2 text-muted-foreground ${
              locale === "ar" ? "space-x-reverse" : ""
            }`}
          >
            <span>
              {content.footer.rights
                .replace("{year}", String(currentYear))
                .replace("♥", "")}
            </span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </div>

          <div
            className={`flex items-center space-x-4 ${
              locale === "ar" ? "space-x-reverse" : ""
            }`}
          >
            <span className="text-sm text-muted-foreground">
              {content.footer.builtWith}
            </span>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="cyber-border hover:cyber-glow"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute top-10 right-10 w-2 h-2 bg-cyber-blue rounded-full opacity-40"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="absolute top-20 left-20 w-3 h-3 border border-cyber-purple rounded-full opacity-30"
        />
      </div>
    </footer>
  );
}
