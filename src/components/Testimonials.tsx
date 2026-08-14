import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Nisha Verma",
    age: 29,
    goal: "Body Recomposition",
    quote:
      "VOLT completely changed the way I approach training. The coaches, tracking system and community keep me consistent.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Arjun Patel",
    age: 34,
    goal: "Strength and Endurance",
    quote: "The structure feels premium and the progress dashboard keeps me focused every week.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Rhea Kapoor",
    age: 26,
    goal: "Athletic Performance",
    quote: "From nutrition planning to workouts, every touchpoint is intentional. This is elite coaching.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  const item = testimonials[index];

  return (
    <section className="mx-auto max-w-4xl px-4 py-24 md:px-8">
      <h2 className="text-center text-4xl font-bold text-[var(--text)] md:text-5xl">What Members Say</h2>
      <div className="mt-10 border border-[var(--border)] bg-[var(--surface)] p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={item.name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) setIndex((i) => (i + 1) % testimonials.length);
              if (info.offset.x > 80) setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
            }}
          >
            <img src={item.image} alt={`${item.name} testimonial profile`} className="h-20 w-20 object-cover" loading="lazy" />
            <div className="mt-4 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <p className="mt-5 text-lg text-[var(--text)]">"{item.quote}"</p>
            <p className="mt-4 font-semibold text-[var(--text)]">{item.name}</p>
            <p className="text-sm text-[var(--muted)]">
              Age {item.age} | Goal: {item.goal}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 flex gap-3">
          <button onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)} className="border border-[var(--border)] p-2">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => setIndex((i) => (i + 1) % testimonials.length)} className="border border-[var(--border)] p-2">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
