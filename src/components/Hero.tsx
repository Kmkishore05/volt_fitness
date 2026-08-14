import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  reducedMotion: boolean;
};

export default function Hero({ reducedMotion }: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (reducedMotion) {
      gsap.set(".hero-animate", { opacity: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-animate",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.14, ease: "power3.out", delay: 0.2 }
      );

      gsap.to(".hero-bg", {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=2000&q=80"
        alt="Athlete training intensely with battle ropes in a premium gym"
        className="hero-bg absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="noise-overlay absolute inset-0 opacity-30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <p className="hero-animate text-sm font-semibold tracking-[0.28em] text-[var(--accent)]">PREMIUM PERFORMANCE CLUB</p>
        <h1 className="hero-animate mt-4 max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl lg:text-8xl">
          Become Stronger Than Yesterday.
        </h1>
        <p className="hero-animate mt-6 max-w-2xl text-lg text-zinc-200">
          Train with purpose. Build strength. Transform your body and mindset with a smarter approach to fitness.
        </p>
        <div className="hero-animate mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="rounded-full bg-[var(--accent)] px-7 py-3 font-semibold text-black">
            Start Your Journey
          </a>
          <a href="#programs" className="rounded-full border border-white/50 px-7 py-3 font-semibold text-white">
            Explore Programs
          </a>
        </div>
        <div className="hero-animate mt-10 grid max-w-xl grid-cols-3 gap-4 text-white">
          {[
            ["12K+", "Members"],
            ["50+", "Expert Trainers"],
            ["98%", "Satisfaction"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-zinc-300">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#philosophy"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/40 p-3 text-white"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
