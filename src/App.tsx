import Home from "./pages/Home";
import { useReducedMotionPreference } from "./hooks/useReducedMotionPreference";
import { useTheme } from "./hooks/useTheme";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is VOLT FITNESS beginner-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We create structured plans for beginner to advanced levels." },
    },
    {
      "@type": "Question",
      name: "Do memberships include progress tracking?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every plan includes progress analytics through the member tracking system.",
      },
    },
  ],
};

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const reducedMotion = useReducedMotionPreference();

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Home isDark={isDark} onToggleTheme={toggleTheme} reducedMotion={reducedMotion} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
