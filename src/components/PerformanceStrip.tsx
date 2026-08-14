import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type PerformanceStripProps = { reducedMotion: boolean };

const items = ["Strength Blocks", "Athletic Conditioning", "Performance Testing", "Recovery Protocols", "Coach Feedback Loop"];

export default function PerformanceStrip({ reducedMotion }: PerformanceStripProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;

    const track = el.querySelector<HTMLElement>(".strip-track");
    if (!track) return;

    const context = gsap.context(() => {
      gsap.to(track, {
        xPercent: -45,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "+=500",
          scrub: true,
          pin: true,
        },
      });
    }, el);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section ref={ref} className="overflow-hidden py-20">
      <div className="strip-track flex w-[180%] gap-6 px-4 md:px-8">
        {items.map((item) => (
          <div key={item} className="flex-1 border border-[var(--border)] bg-[var(--surface)] p-8 text-2xl font-semibold text-[var(--text)]">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
