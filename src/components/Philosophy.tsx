import { useRef } from "react";
import { Dumbbell, Flame, Target } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

type PhilosophyProps = { reducedMotion: boolean };

const principles = [
  { title: "Strength", text: "Build a stronger body with intentional overload and progressive routines.", icon: Dumbbell },
  { title: "Discipline", text: "Build consistency through coaching, structure and measurable habits.", icon: Flame },
  { title: "Performance", text: "Become better every day with data-backed workouts and recovery planning.", icon: Target },
];

export default function Philosophy({ reducedMotion }: PhilosophyProps) {
  const ref = useRef<HTMLElement | null>(null);
  useScrollAnimation(ref, reducedMotion);

  return (
    <section id="philosophy" ref={ref} className="mx-auto grid max-w-7xl gap-12 px-4 py-24 md:grid-cols-2 md:px-8">
      <img
        data-reveal
        src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1400&q=80"
        alt="Premium training floor with athlete preparing for strength workout"
        className="h-full min-h-[420px] w-full object-cover"
        loading="lazy"
      />
      <div>
        <p data-reveal className="text-xs font-semibold tracking-[0.24em] text-[var(--accent)]">
          VOLT PHILOSOPHY
        </p>
        <h2 data-reveal className="mt-3 text-4xl font-bold text-[var(--text)] md:text-5xl">
          Training Is More Than Exercise.
        </h2>
        <p data-reveal className="mt-5 text-[var(--muted)]">
          VOLT FITNESS combines elite coaching, premium facilities and disciplined systems so every member trains with
          purpose and evolves with confidence.
        </p>
        <div className="mt-10 space-y-7">
          {principles.map((item) => (
            <div data-reveal key={item.title} className="flex gap-4">
              <item.icon className="mt-1 text-[var(--accent)]" />
              <div>
                <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="text-[var(--muted)]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
