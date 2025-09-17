import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, Menu, X, Globe, Sparkles, Battery } from "lucide-react";
import { useContent } from "@/content/ContentContext";
import { useSceneSettings } from "@/scene/SceneSettingsContext";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content, locale, setLocale } = useContent();
  const { showBackground, setShowBackground, lowPower, setLowPower } =
    useSceneSettings();
  const navRef = useRef<HTMLElement | null>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure the actual nav height (accounts for safe areas, content changes, wrapping)
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const measure = () => setNavHeight(el.offsetHeight || 0);
    measure();
    const RO = (window as any).ResizeObserver;
    const ro = RO ? new RO(() => measure()) : null;
    ro && ro.observe(el as Element);
    window.addEventListener("resize", measure);
    return () => {
      ro && ro.disconnect && ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [isScrolled, isMobileMenuOpen, locale]);

  const navItems = content.nav.items;

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      const headerH = (navRef.current?.offsetHeight ?? 0) + 8; // small extra gap
      const y = element.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Language change via dropdown
  const changeLanguage = (lang: "en" | "es" | "ar") => setLocale(lang);

  // Lock body scroll when mobile menu is open to prevent background content moving
  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        id="site-nav"
        ref={navRef as any}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 pt-3 pb-3 transition-all duration-300 ${
          isScrolled ? "glass py-4" : "py-6"
        }`}
        style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.5rem)" }}
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
                      size="sm"
                      className={`items-center space-x-1 ${
                        locale === "ar" ? "space-x-reverse" : ""
                      }`}
                    >
                      <Globe className="h-4 w-4" />
                      <span>{locale.toUpperCase()}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="min-w-[10rem] z-[80]"
                    sideOffset={6}
                  >
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
              <Button size="sm" onClick={toggleTheme}>
                {isDark ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Low Power Toggle */}
              <Button
                size="sm"
                onClick={() => setLowPower(!lowPower)}
                title="Toggle Low Power Mode"
                aria-pressed={lowPower}
              >
                <Battery className="h-4 w-4" />
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

      {/* Spacer matches the real nav height to prevent content overlap */}
      <div aria-hidden style={{ height: navHeight }} />

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
        } h-full glass-strong overflow-y-auto`}
      >
        {/* Drawer Header */}
        <div
          className={`sticky top-0 z-[1] flex items-center justify-between px-6 py-4 bg-background/90 backdrop-blur border-b border-border ${
            locale === "ar" ? "flex-row-reverse" : ""
          }`}
          style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.5rem)" }}
        >
          <div className="font-mono font-bold text-lg gradient-text">
            {content.footer.brand}
          </div>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="px-6 pt-4 pb-8">
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
            <div
              className={`text-sm mb-3 ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              <span className="inline-flex items-center gap-2 opacity-80">
                <Globe className="h-4 w-4" />
                <span>Language</span>
              </span>
            </div>
            <div
              className={`flex gap-2 ${
                locale === "ar" ? "justify-end" : "justify-start"
              }`}
            >
              <Button
                variant={locale === "en" ? "default" : "outline"}
                size="sm"
                onClick={() => changeLanguage("en")}
              >
                EN
              </Button>
              <Button
                variant={locale === "es" ? "default" : "outline"}
                size="sm"
                onClick={() => changeLanguage("es")}
              >
                ES
              </Button>
              <Button
                variant={locale === "ar" ? "default" : "outline"}
                size="sm"
                onClick={() => changeLanguage("ar")}
              >
                AR
              </Button>
            </div>
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
          className="fixed inset-0 bg-black/50 z-[60] md:hidden"
        />
      )}
    </>
  );
}
