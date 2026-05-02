import { useEffect, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        // Very subtle parallax — vertical only, capped so the face never moves onto the text
        const y = Math.min(window.scrollY * 0.15, 60);
        setOffset(y);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-end overflow-hidden grain pt-24 md:pt-32"
    >
      {/* Deep ink base */}
      <div className="absolute inset-0 bg-ink" />

      {/* Subtle animated grain/noise texture base */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Cinematic shadow halo behind the portrait — increases separation from background */}
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-[70%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 70% at 70% 50%, hsl(var(--ink) / 0.0) 0%, hsl(var(--ink) / 0.55) 55%, hsl(var(--ink) / 0.95) 90%)",
          transform: `translate3d(-100px, ${-offset}px, 0)`,
        }}
      />

      {/* Mobile: portrait as full-bleed background, anchored so face sits in upper third */}
      <img
        src={heroPortrait}
        alt="Don Mimmo Catalano portrait"
        className="md:hidden absolute inset-x-0 top-0 h-[65%] w-full object-cover object-[60%_15%] opacity-90 [filter:grayscale(20%)_contrast(1.2)_brightness(0.85)_saturate(1.1)] will-change-transform"
        style={{ transform: `translate3d(0, ${-offset * 0.4}px, 0)` }}
      />

      {/* Desktop / tablet: portrait anchored right with parallax */}
      <img
        src={heroPortrait}
        alt=""
        aria-hidden
        className="hidden md:block absolute inset-y-0 right-0 h-full w-auto max-w-none object-cover object-right opacity-95 [filter:grayscale(20%)_contrast(1.2)_brightness(0.88)_saturate(1.1)_drop-shadow(0_30px_60px_hsl(var(--ink)/0.85))_drop-shadow(0_0_120px_hsl(var(--ink)/0.6))] will-change-transform"
        style={{ transform: `translate3d(-100px, ${-offset}px, 0)` }}
      />

      {/* Warm gold rim light bleeding from the right — cinematic backlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_80%_at_92%_30%,hsl(var(--gold)/0.18),transparent_60%)]" />

      {/* Cool atmospheric haze drifting from upper-left */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_10%_15%,hsl(var(--gold)/0.06),transparent_55%)]" />

      {/* Mobile: hard ink floor below the face so the headline sits on solid black */}
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent from-10% via-ink/85 via-26% to-ink to-36%" />
      {/* Desktop: soft bottom-up fade */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-transparent" />

      {/* Left-side ink wash (desktop only) to lift copy off the portrait */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-ink via-ink/85 via-30% to-transparent to-55%" />

      {/* Top fade to blend with the sticky header */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />

      {/* Subtle horizontal scanline / film texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--cream)) 0px, hsl(var(--cream)) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_260px_80px_hsl(var(--ink))]" />

      {/* Faint gold accent line at the very bottom — editorial touch */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pb-10 md:pb-28 mt-[10vh] md:mt-0">
        <h1 className="font-gobold italic uppercase text-cream text-6xl sm:text-8xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem] leading-[0.9] tracking-tight [text-shadow:0_2px_0_rgba(0,0,0,0.6)] reveal in-view">
          DON MIMMO
          <br />
          <span className="text-gold">CATALANO</span>
        </h1>

        <div className="mt-5 md:mt-14 max-w-2xl">
          <p className="text-cream text-base sm:text-2xl md:text-3xl serif leading-tight">
            30 years.
            <br />
            Four continents.
            <br />
            Everything I learned about power, loyalty and leadership.
          </p>

          <p className="mt-5 md:mt-10 italic text-gold text-lg sm:text-xl md:text-2xl serif">
            Ascolta bene.
          </p>

          <div className="mt-5 md:mt-10 flex flex-wrap items-center gap-4 md:gap-5">
            <a href="#subscribe" className="btn-don">
              <span>Get The Don's Letters</span>
              <span aria-hidden className="arrow">→</span>
            </a>
            <a href="#subscribe" className="btn-don-ghost">
              For those who listen.
            </a>
          </div>
        </div>

        <div className="mt-8 md:mt-20 flex items-center gap-3 text-cream/60 eyebrow animate-pulse">
          <span>Scroll</span>
          <span className="h-px w-10 bg-cream/40" />
        </div>
      </div>
    </section>
  );
};
