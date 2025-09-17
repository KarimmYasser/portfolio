import { useTerminalOverlay } from "./TerminalOverlayContext";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CmdInput from "./components/CmdInput";
import CmdOutput from "./components/CmdOutput";
import { useContent } from "@/content/ContentContext";
import { useSceneSettings } from "@/scene/SceneSettingsContext";

export default function TerminalOverlay() {
  const { open, setOpen } = useTerminalOverlay();
  const { locale, setLocale } = useContent();
  const { showBackground, setShowBackground, lowPower, setLowPower } = useSceneSettings();
  const [items, setItems] = useState<JSX.Element[]>([]);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const addOutput = (els: JSX.Element[]) => {
    if (els.length === 0) {
      setItems([]); // clear
    } else {
      setItems((prev) => prev.concat(els));
    }
  };

  useEffect(() => {
    outputRef.current?.scrollTo({
      top: outputRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [items, open]);

  // Ensure input is focused when overlay opens
  useEffect(() => {
    if (open) {
      // Delay focus slightly to ensure input is mounted
      const id = window.setTimeout(() => inputRef.current?.focus(), 0);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  // Show a tip at terminal start about Tab/Shift+Tab usage (localized)
  useEffect(() => {
    if (!open) return;
    const tipByLocale: Record<string, string> = {
      en: "Tip: Press Tab to autocomplete commands. Shift+Tab cycles backward. Press Tab with an empty prompt to browse all commands.",
      es: "Consejo: Pulsa Tab para autocompletar comandos. Shift+Tab retrocede. Pulsa Tab con el prompt vacío para explorar todos los comandos.",
      ar: "تلميح: استخدم Tab لإكمال الأوامر تلقائيًا. استخدم Shift+Tab للتنقّل للخلف. اضغط Tab بدون كتابة لاكتشاف جميع الأوامر.",
    };
    const tip = tipByLocale[locale] ?? tipByLocale.en;
    setItems((prev) => {
      if (prev.length > 0) return prev;
      return [
        <li key="terminal-tip" className="w-full max-w-full">
          <div
            className={`text-xs italic text-cyber-green/80 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            {tip}
          </div>
        </li>,
      ];
    });
  }, [open, locale]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);
  if (!open) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center pointer-events-auto"
      onMouseDownCapture={(e) => {
        const clickedInside = cardRef.current?.contains(e.target as Node);
        if (!clickedInside) {
          setOpen(false);
          return;
        }
        // If clicked inside the card, keep focus on input to continue typing
        setTimeout(() => inputRef.current?.focus(), 0);
      }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={cardRef}
        className="relative w-[92vw] sm:w-[90vw] md:w-[85vw] lg:w-[70vw] max-w-3xl mx-auto rounded-2xl shadow-lg p-0 border border-cyber-green bg-black/90"
      >
        <div className="p-0 text-white">
          <div
            className={`bg-black/80 h-10 flex items-center px-3 sm:px-4 rounded-t-2xl border-b border-cyber-green ${
              locale === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <div className="flex-1 text-center text-xs text-cyber-green font-mono">
              portfolio: ~
            </div>
            <button
              aria-label="Close terminal"
              className="text-cyber-green border border-cyber-green rounded px-2 py-0.5 text-sm font-bold hover:bg-black/60"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div
            ref={outputRef}
            className={`h-[60vh] overflow-y-auto px-4 py-4 font-mono text-sm ${
              locale === "ar" ? "text-right" : ""
            }`}
            onMouseDown={() => inputRef.current?.focus()}
          >
            <ul
              className={`flex flex-col w-full ${
                locale === "ar" ? "items-end" : "items-start"
              }`}
            >
              <CmdOutput items={items} />
              <CmdInput
                addOutput={addOutput}
                onExit={() => setOpen(false)}
                inputRef={inputRef}
                env={{
                  setTheme: (mode) => {
                    const root = document.documentElement;
                    const isDark = root.classList.contains('dark');
                    let next: 'dark' | 'light';
                    if (mode === 'toggle') {
                      next = isDark ? 'light' : 'dark';
                    } else {
                      next = mode;
                    }
                    if (next === 'dark') {
                      root.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                    } else {
                      root.classList.remove('dark');
                      localStorage.setItem('theme', 'light');
                    }
                    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: next } }));
                  },
                  setLocale: (lang) => setLocale(lang),
                  goto: (hash) => {
                    const target = document.querySelector(hash) as HTMLElement | null;
                    const header = document.getElementById('site-nav');
                    const headerH = (header?.offsetHeight ?? 0) + 8;
                    if (target) {
                      const y = target.getBoundingClientRect().top + window.scrollY - headerH;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  },
                  openProject: (id) => {
                    const section = document.querySelector('#projects');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                    // slight delay to ensure cards are mounted
                    setTimeout(() => {
                      const card = document.querySelector(`[data-project-id="${id}"]`) as HTMLElement | null;
                      if (card) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        card.classList.add('ring-2', 'ring-cyber-green');
                        setTimeout(() => card.classList.remove('ring-2', 'ring-cyber-green'), 1500);
                      }
                    }, 250);
                  },
                  setBackground: (on) => setShowBackground(on),
                  setLowPower: (on) => setLowPower(on),
                }}
              />
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
