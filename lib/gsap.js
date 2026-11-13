"use client";

import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// One easing and a few durations everywhere (matches the site's motion tokens).
export const EASE = "power3.out";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// useLayoutEffect on the client so hidden start states apply before the first paint.
export const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export { gsap, ScrollTrigger };
