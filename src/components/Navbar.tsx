import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = ["Home", "Programs", "Trainers", "Schedule", "Membership", "Progress", "Contact"];

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

export default function Navbar({ isDark, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 20);
      setProgress(height > 0 ? (y / height) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-1 w-full bg-[var(--surface)]/30">
        <div className="h-full bg-[var(--accent)] transition-all duration-200" style={{ width: `${progress}%` }} />
      </div>
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "border-b border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-xl" : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-2 text-[var(--text)]">
            <Zap className="text-[var(--accent)]" />
            <span className="text-lg font-extrabold tracking-[0.2em]">VOLT FITNESS</span>
          </a>
          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--text)]">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <a
              href="#membership"
              className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-semibold text-black transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            >
              Join Now
            </a>
          </div>
          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <button
              className="rounded-full border border-[var(--border)] p-2 text-[var(--text)]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle mobile menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-[var(--bg)] px-6 pt-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="space-y-6">
              {links.map((item, idx) => (
                <motion.li
                  key={item}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.06 }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block text-3xl font-semibold text-[var(--text)]"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href="#membership"
              className="mt-10 inline-flex w-fit rounded-full bg-[var(--accent)] px-6 py-3 font-semibold text-black"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => setOpen(false)}
            >
              Join Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
