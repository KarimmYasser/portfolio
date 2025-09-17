import { useState, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { useSceneSettings } from "@/scene/SceneSettingsContext";
const ThreeBackground = lazy(() => import("@/components/ThreeBackground"));
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
    const onThemeChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as
        | { theme?: "dark" | "light" }
        | undefined;
      if (detail?.theme) {
        setIsDark(detail.theme === "dark");
      }
    };
    window.addEventListener("themechange", onThemeChange as EventListener);
    return () =>
      window.removeEventListener("themechange", onThemeChange as EventListener);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Notify listeners (e.g., terminal) that theme changed
    window.dispatchEvent(
      new CustomEvent("themechange", {
        detail: { theme: newTheme ? "dark" : "light" },
      })
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Three.js Background (lazy) */}
      {
        <Suspense fallback={null}>
          <ThreeBackground />
        </Suspense>
      }

      {/* Navigation */}
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      {/* Page Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <AboutSection />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SkillsSection />
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ProjectsSection />
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ExperienceSection />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactSection />
        </motion.div>

        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
}
