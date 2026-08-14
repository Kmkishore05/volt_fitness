import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StatisticsProps = { reducedMotion: boolean };

const stats = [
  { value: 12000, suffix: "+", label: "Active Members" },
  { value: 50, suffix: "+", label: "Expert Trainers" },
  { value: 150000, suffix: "+", label: "Workouts Completed" },
  { value: 98, suffix: "%", label: "Member Satisfaction" },
];

export default function Statistics({ reducedMotion }: StatisticsProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const context = gsap.context(() => {
      stats.forEach((_, idx) => {
        const target = el.querySelector<HTMLSpanElement>(`[data-counter='${idx}']`);
        if (!target) return;
        const obj = { val: 0 };
        const end = stats[idx].value;
        gsap.to(obj, {
          val: end,
          duration: 1.6,
          scrollTrigger: { trigger: target, start: "top 88%" },
          onUpdate: () => {
            target.textContent = `${Math.round(obj.val).toLocaleString()}${stats[idx].suffix}`;
          },
        });
      });
    }, el);
    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section ref={ref} className="border-y border-[var(--border)] bg-[var(--surface)]/50 py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:px-8">
        {stats.map((item, idx) => (
          <div key={item.label}>
            <p className="text-4xl font-black text-[var(--text)]">
              <span data-counter={idx}>{reducedMotion ? `${item.value.toLocaleString()}${item.suffix}` : "0"}</span>
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
