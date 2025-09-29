import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export const useLenisScroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  window.lenis = new Lenis({
    duration: 2.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.6,
    touchMultiplier: 1.2,
    infinite: false,
    orientation: "vertical",
    gestureOrientation: "vertical",
    normalizeWheel: true,
    lerp: 0.05,
  });

  window.lenis.on("scroll", ({ scroll, limit }) => {
    ScrollTrigger.update();
  });

  function raf(time) {
    window.lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
