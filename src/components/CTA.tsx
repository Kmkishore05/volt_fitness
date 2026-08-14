import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CTAProps = { reducedMotion: boolean };

export default function CTA({ reducedMotion }: CTAProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: el, start: "top 75%" } }
      );
    }, el);
    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24">
      <img
        src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=2000&q=80"
        alt="Athlete preparing for intense workout under dramatic lights"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="cta-content relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="text-4xl font-bold text-white md:text-6xl">Your Strongest Version Is Waiting.</h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-200">Stop waiting for motivation. Build discipline.</p>
        <a href="#contact" className="mt-8 inline-flex rounded-full bg-[var(--accent)] px-8 py-3 font-semibold text-black">
          Start Your Transformation
        </a>
      </div>
    </section>
  );
}
