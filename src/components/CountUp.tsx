import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number; // ms
  className?: string;
  suffix?: string;
  prefix?: string;
  format?: (n: number) => string;
}

const defaultFormat = (n: number) => Math.round(n).toLocaleString("en-US");

/**
 * Animated number that counts from 0 to `target` when it scrolls into view.
 * Uses requestAnimationFrame with an ease-out cubic curve for a premium feel.
 * Respects prefers-reduced-motion.
 */
export const CountUp = ({
  target,
  duration = 2200,
  className,
  suffix = "",
  prefix = "",
  format = defaultFormat,
}: CountUpProps) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (reduced) {
        setValue(target);
        return;
      }

      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setValue(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            start();
            io.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {format(value)}
      {suffix}
    </span>
  );
};
