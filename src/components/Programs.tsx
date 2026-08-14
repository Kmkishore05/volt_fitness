import { motion } from "framer-motion";
import { Activity, Timer, ShieldCheck, PersonStanding, Weight, Flame } from "lucide-react";

const programs = [
  {
    title: "Strength Training",
    description: "Build muscle, strength and power.",
    difficulty: "Intermediate",
    duration: "60 min",
    icon: Weight,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "HIIT",
    description: "High-intensity training designed for maximum conditioning.",
    difficulty: "Advanced",
    duration: "40 min",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Personal Training",
    description: "One-on-one coaching tailored to your goals.",
    difficulty: "Custom",
    duration: "50 min",
    icon: PersonStanding,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Functional Fitness",
    description: "Improve mobility, balance and real-world performance.",
    difficulty: "All levels",
    duration: "45 min",
    icon: Activity,
    image: "https://images.pexels.com/photos/5611633/pexels-photo-5611633.jpeg",
  },
  {
    title: "Weight Management",
    description: "Structured training and lifestyle guidance.",
    difficulty: "Beginner",
    duration: "55 min",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1549570652-97324981a6fd?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Programs Built For Real Progress.</h2>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Structured tracks built for measurable outcomes, from foundational fitness to elite-level conditioning.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, idx) => (
          <motion.article
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden border border-[var(--border)] bg-[var(--surface)]"
          >
            <img src={program.image} alt={`${program.title} workout session`} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <program.icon className="text-[var(--accent)]" />
                <span className="text-xs text-[var(--muted)]">{program.difficulty}</span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--text)]">{program.title}</h3>
              <p className="text-sm text-[var(--muted)]">{program.description}</p>
              <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                <span className="inline-flex items-center gap-1">
                  <Timer size={14} /> {program.duration}
                </span>
                <a href="#schedule" className="font-semibold text-[var(--accent)]">
                  View Program
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
