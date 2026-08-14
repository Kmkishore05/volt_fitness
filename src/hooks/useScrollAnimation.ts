import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  ref: RefObject<HTMLElement | null>,
  reducedMotion: boolean,
  selector = "[data-reveal]"
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (reducedMotion) {
      gsap.set(element.querySelectorAll(selector), { opacity: 1, y: 0 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        selector,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 75%",
          },
        }
      );
    }, element);

    return () => context.revert();
  }, [ref, reducedMotion, selector]);
}
