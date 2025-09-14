import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useContent } from "@/content/ContentContext";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content, locale, setLocale } = useContent();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = content.nav.items;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Language change via dropdown
  const changeLanguage = (lang: "en" | "es" | "ar") => setLocale(lang);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono font-bold text-xl gradient-text"
            >
              {content.footer.brand}
            </motion.div>

            {/* Desktop Navigation */}
            <div
              className={`hidden md:flex items-center space-x-8 ${
                locale === "ar" ? "space-x-reverse" : ""
              }`}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Controls */}
            <div
              className={`flex items-center space-x-4 ${
                locale === "ar" ? "space-x-reverse" : ""
              }`}
            >
              {/* Language Dropdown (Desktop) */}
              <div className="hidden sm:flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`items-center space-x-1 ${
                        locale === "ar" ? "space-x-reverse" : ""
                      }`}
                    >
                      <Globe className="h-4 w-4" />
                      <span>{locale.toUpperCase()}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="min-w-[10rem]">
                    <DropdownMenuItem onSelect={() => changeLanguage("en")}>
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => changeLanguage("es")}>
                      Español
                    </DropdownMenuItem>
                    <DropdownMenuItem onSelect={() => changeLanguage("ar")}>
                      العربية
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="cyber-glow"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: locale === "ar" ? "-100%" : "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : locale === "ar" ? "-100%" : "100%",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 500 }}
        className={`fixed top-0 ${
          locale === "ar" ? "left-0" : "right-0"
        } h-full w-80 glass-strong z-40 md:hidden`}
      >
        <div className="pt-20 px-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 + 0.2 }}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full ${
                locale === "ar" ? "text-right" : "text-left"
              } py-4 text-lg font-medium hover:text-primary transition-colors`}
            >
              {item.label}
            </motion.button>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isMobileMenuOpen ? 1 : 0,
              x: isMobileMenuOpen ? 0 : 20,
            }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-8 border-t border-border"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start mb-4"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Language: {locale.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[10rem]">
                <DropdownMenuItem onSelect={() => changeLanguage("en")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => changeLanguage("es")}>
                  Español
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => changeLanguage("ar")}>
                  العربية
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
}
