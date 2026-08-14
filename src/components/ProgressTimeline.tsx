import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ProgressTimelineProps = { reducedMotion: boolean };

const milestones = [
  ["Week 1", "Started Training"],
  ["Week 4", "Completed 20 Workouts"],
  ["Week 8", "Lost 3 kg"],
  ["Week 12", "Personal Best"],
];

export default function ProgressTimeline({ reducedMotion }: ProgressTimelineProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: { trigger: el, start: "top 75%" },
        }
      );
    }, el);
    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <h2 className="text-4xl font-bold text-[var(--text)] md:text-5xl">Workout Progress Timeline</h2>
      <div className="mt-10 border-l border-[var(--border)] pl-8">
        {milestones.map(([week, note]) => (
          <article key={week} className="timeline-item relative mb-8">
            <span className="absolute -left-[38px] top-1 h-3 w-3 bg-[var(--accent)]" />
            <p className="text-sm text-[var(--accent)]">{week}</p>
            <h3 className="text-xl font-semibold text-[var(--text)]">{note}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
