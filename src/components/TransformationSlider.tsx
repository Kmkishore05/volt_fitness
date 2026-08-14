import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TransformationSliderProps = { reducedMotion: boolean };

export default function TransformationSlider({ reducedMotion }: TransformationSliderProps) {
  const ref = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(52);

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        ".transform-reveal",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          scrollTrigger: { trigger: element, start: "top 72%" },
        }
      );
    }, element);
    return () => context.revert();
  }, [reducedMotion]);

  const updatePosition = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, next)));
  };

  return (
    <section id="transformation" ref={ref} className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <h2 className="transform-reveal text-4xl font-bold text-[var(--text)] md:text-5xl">Your Transformation Starts Here.</h2>
      <p className="transform-reveal mt-3 max-w-2xl text-[var(--muted)]">
        Compare the journey and visualize what consistency, coaching and discipline can build.
      </p>
      <div
        ref={trackRef}
        className="transform-reveal relative mt-10 h-[420px] cursor-ew-resize overflow-hidden border border-[var(--border)]"
        onPointerDown={(e) => {
          updatePosition(e.clientX);
          (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (e.buttons > 0) updatePosition(e.clientX);
        }}
      >
        <img
          src="https://images.pexels.com/photos/12966655/pexels-photo-12966655.jpeg"
          alt="Before transformation athlete starting fitness journey"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img
            src="https://images.pexels.com/photos/14513405/pexels-photo-14513405.jpeg"
            alt="After transformation athlete with improved physique and confidence"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-y-0 w-0.5 bg-white" style={{ left: `${position}%` }} aria-hidden />
        <motion.button
          type="button"
          role="slider"
          aria-label="Before and after transformation slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          className="absolute top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border-2 border-white bg-black/70 text-white"
          style={{ left: `calc(${position}% - 20px)` }}
          whileTap={{ scale: 0.95 }}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
          }}
        >
          ||
        </motion.button>
        <span className="absolute left-4 top-4 bg-black/60 px-3 py-1 text-xs font-semibold text-white">BEFORE</span>
        <span className="absolute right-4 top-4 bg-black/60 px-3 py-1 text-xs font-semibold text-white">AFTER</span>
      </div>
    </section>
  );
}
