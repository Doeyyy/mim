import { useEffect } from "react";
import { StickyTopBar } from "@/components/StickyTopBar";
import { useReveal } from "@/hooks/use-reveal";

const TheDonsCode = () => {
  useReveal();

  useEffect(() => {
    document.title = "The Don's Code — 30 Rules for Power, Loyalty and Leadership";
    const meta =
      document.querySelector('meta[name="description"]') ||
      (() => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        document.head.appendChild(m);
        return m;
      })();
    meta.setAttribute(
      "content",
      "The Don's Code by Don Mimmo Catalano — thirty rules for power, loyalty and leadership. A PDF you will read once and keep forever.",
    );
  }, []);

  return (
    <main className="bg-ink text-cream overflow-x-hidden">
      <StickyTopBar />

      {/* SECTION 1 — Product Hero */}
      <section className="relative min-h-[90vh] w-full overflow-hidden grain pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-12">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_85%_25%,hsl(var(--gold)/0.18),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_10%_85%,hsl(var(--gold)/0.06),transparent_60%)]" />
        <div
          aria-hidden
          className="absolute -top-10 md:-top-20 left-[-2%] font-gobold italic text-[18rem] md:text-[32rem] leading-none text-cream/[0.025] select-none pointer-events-none tracking-tighter"
        >
          C
        </div>
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_220px_60px_hsl(var(--ink))]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="reveal flex items-center gap-4 mb-8 md:mb-10">
              <span className="h-px w-10 bg-gold/60" />
              <span className="eyebrow text-gold/80">A Don Mimmo Original</span>
            </div>

            <h1 className="hero-h1 reveal">
              The <span className="text-gold">Don's Code</span>
            </h1>

            <p className="reveal serif italic text-2xl md:text-3xl text-cream/90 mt-8 leading-snug">
              30 Rules for Power, Loyalty and Leadership
            </p>

            <div className="reveal mt-10 space-y-2 serif text-lg md:text-xl text-cream/80">
              <p>By Don Mimmo Catalano</p>
              <p className="italic text-gold">A PDF you will read once and keep forever.</p>
            </div>

            <div className="reveal mt-10 md:mt-12 flex flex-wrap items-center gap-5">
              <a href="#purchase" className="btn-don">
                <span>Get The Don's Code · $17</span>
                <span aria-hidden className="arrow">→</span>
              </a>
              <a href="#what" className="btn-don-ghost">
                What is inside
              </a>
            </div>
          </div>

          {/* PDF mockup column */}
          <div className="lg:col-span-5 order-1 lg:order-2 reveal">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Glow behind */}
              <div
                aria-hidden
                className="absolute -inset-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 60% at 50% 50%, hsl(var(--gold) / 0.25), transparent 70%)",
                }}
              />
              {/* The "PDF" mockup — dark cover with gold typography */}
              <div className="relative aspect-[3/4] bg-ink-elevated border border-gold/30 [box-shadow:0_40px_80px_-20px_hsl(var(--ink)/0.9),0_0_0_1px_hsl(var(--gold)/0.2),inset_0_0_120px_20px_hsl(var(--ink))] grain overflow-hidden">
                {/* Inner gold frame */}
                <div className="absolute inset-4 border border-gold/40" />
                {/* Top eyebrow */}
                <div className="absolute top-10 left-0 right-0 text-center">
                  <p className="eyebrow text-gold/80">A Don Mimmo Original</p>
                </div>
                {/* Center stack */}
                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                  <p className="font-gobold uppercase italic text-gold text-4xl md:text-5xl leading-[0.9] tracking-tight">
                    The
                    <br />
                    Don's
                    <br />
                    Code
                  </p>
                  <div className="mt-6 flex items-center gap-3 w-full max-w-[180px]">
                    <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
                    <span className="h-1.5 w-1.5 rotate-45 bg-gold/80" />
                    <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
                  </div>
                  <p className="serif italic text-cream/85 text-sm md:text-base mt-6 leading-snug">
                    30 Rules for Power,
                    <br />
                    Loyalty and Leadership
                  </p>
                </div>
                {/* Signature */}
                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <p className="serif italic text-gold text-sm">Don Mimmo Catalano</p>
                </div>
                {/* Subtle scanlines */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, hsl(var(--cream)) 0px, hsl(var(--cream)) 1px, transparent 1px, transparent 3px)",
                  }}
                />
              </div>
              {/* Floor reflection */}
              <div
                aria-hidden
                className="absolute left-6 right-6 -bottom-6 h-12 blur-2xl opacity-60"
                style={{ background: "radial-gradient(ellipse, hsl(var(--ink)) 0%, transparent 70%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — What It Is */}
      <section
        id="what"
        className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border"
      >
        <div className="absolute inset-0 bg-ink-elevated" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_70%_at_88%_12%,hsl(var(--gold)/0.10),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent pointer-events-none" />
        <div
          aria-hidden
          className="absolute -top-10 right-[-3%] font-gobold italic text-[20rem] md:text-[36rem] leading-none text-cream/[0.025] select-none pointer-events-none tracking-tighter"
        >
          D
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">The Origin</span>
          </div>

          <h2 className="text-display text-cream text-4xl md:text-6xl mb-12 md:mb-16 reveal">
            What is <span className="italic text-gold">The Don's Code?</span>
          </h2>

          <div className="space-y-7 md:space-y-9">
            <p className="reveal serif italic leading-snug text-xl md:text-2xl text-cream/90">
              Thirty years ago I started writing things down.
              <br />
              Not for publication. Not for business.
              <br />
              For myself. Rules I had learned the hard way.
              <br />
              Principles that kept me alive, kept me trusted,
              <br />
              kept me in the room when others were removed from it.
            </p>

            <p className="reveal serif text-xl md:text-2xl text-cream/85 leading-snug">
              I never planned to share them.
            </p>

            <p className="reveal serif italic text-xl md:text-2xl text-cream/90 leading-snug">
              But people kept asking.
              <br />
              In the comments. In the DMs.
              <br />
              The same question, a thousand different ways:
              <br />
              <span className="text-gold">Don Mimmo, how do you think?</span>
            </p>

            <p className="reveal serif text-xl md:text-2xl text-cream leading-snug">
              This is the answer.
            </p>

            <p className="reveal serif italic text-xl md:text-2xl text-cream/90 leading-snug">
              Thirty rules. Thirty pages.
              <br />
              No theory. No inspiration.
              <br />
              Just what I learned.
            </p>

            <div className="reveal pt-2">
              <p className="italic text-gold serif text-2xl md:text-3xl">Ascolta bene.</p>
              <p className="eyebrow text-cream/60 mt-3">Don Mimmo</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — What Is Inside */}
      <section className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_55%_at_8%_15%,hsl(var(--gold)/0.08),transparent_60%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">The Contents</span>
          </div>

          <h2 className="text-display text-cream text-4xl md:text-6xl mb-14 md:mb-20 reveal">
            Inside <span className="italic text-gold">The Don's Code.</span>
          </h2>

          <ol className="space-y-px bg-border">
            {[
              "The rule that saved me more times than any other.",
              "The three people every leader must find before they need them.",
              "Why the quietest person in any room is the most dangerous.",
              "How to know if someone truly respects you, or is performing it.",
              "The only way to build loyalty that survives a crisis.",
              "When to speak. When to stay completely silent.",
              "Why threats always fail, and what to do instead.",
              "How to leave anything at the right moment.",
              "The difference between a leader and a legacy.",
            ].map((line, i) => (
              <li
                key={i}
                className="reveal bg-ink p-5 md:p-8 flex gap-4 md:gap-6 items-baseline"
              >
                <span className="font-gobold italic text-gold text-lg md:text-2xl shrink-0 w-8 md:w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="serif italic text-base md:text-2xl text-cream/95 leading-snug">
                  {line}
                </p>
              </li>
            ))}
          </ol>

          <div className="reveal mt-12 md:mt-16 flex items-center gap-4">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          <p className="reveal mt-10 md:mt-12 serif italic text-xl md:text-2xl text-cream text-center">
            And <span className="text-gold">21 more rules</span> I have never published anywhere else.
          </p>
        </div>
      </section>

      {/* SECTION 4 — Who It Is For */}
      <section className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border">
        <div className="absolute inset-0 bg-ink-elevated" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_92%_85%,hsl(var(--gold)/0.07),transparent_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {/* For you */}
          <div className="reveal bg-ink-elevated p-7 md:p-14">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="h-px w-10 bg-gold/60" />
              <span className="eyebrow text-gold/80">For You</span>
            </div>
            <h3 className="text-display text-cream text-2xl md:text-4xl mb-8 md:mb-10 leading-tight">
              This is <span className="italic text-gold">for you</span> if:
            </h3>
            <ul className="space-y-4 md:space-y-5 serif italic text-base md:text-xl text-cream/90 leading-snug">
              {[
                "You lead people and you are doing it alone.",
                "You have been betrayed and you want to understand why.",
                "You are building something and you want it to outlast you.",
                "You feel respected publicly and questioned privately.",
                "You are powerful enough to be dangerous to the wrong people.",
              ].map((line, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-gold mt-2.5 h-px w-5 bg-gold/70 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not for you */}
          <div className="reveal bg-ink p-7 md:p-14">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="h-px w-10 bg-cream/40" />
              <span className="eyebrow text-cream/60">Not For You</span>
            </div>
            <h3 className="text-display text-cream text-2xl md:text-4xl mb-8 md:mb-10 leading-tight">
              This is <span className="italic text-cream/70">not for you</span> if:
            </h3>
            <ul className="space-y-4 md:space-y-5 serif italic text-base md:text-xl text-cream/75 leading-snug">
              {[
                "You are looking for a shortcut.",
                "You want to be told what you want to hear.",
                "You are not ready to hear difficult things clearly.",
              ].map((line, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-cream/40 mt-2.5 h-px w-5 bg-cream/30 shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto mt-16 md:mt-20 text-center reveal">
          <p className="serif text-2xl md:text-3xl text-cream/95 leading-snug">
            The Don's Code is not a comfort.
          </p>
          <p className="serif italic text-2xl md:text-3xl text-gold leading-snug mt-2">
            It is a mirror.
          </p>
        </div>
      </section>

      {/* SECTION 5 — Purchase */}
      <section
        id="purchase"
        className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border"
      >
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,hsl(var(--gold)/0.12),transparent_60%)]" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="reveal flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">The Code</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <h2 className="font-gobold uppercase italic text-cream text-5xl md:text-7xl leading-[0.9] tracking-tight reveal">
            The <span className="text-gold">Don's Code</span>
          </h2>
          <p className="reveal serif italic text-xl md:text-2xl text-cream/85 mt-6">
            30 Rules for Power, Loyalty and Leadership
          </p>

          <div className="reveal mt-12 md:mt-14 space-y-2 serif text-lg md:text-xl text-cream/85">
            <p>One payment. Instant download.</p>
            <p className="italic text-gold">Yours to keep. Yours to return to.</p>
          </div>

          <div className="reveal mt-12 md:mt-14">
            <p className="font-gobold italic text-gold text-7xl md:text-8xl leading-none">$17</p>
          </div>

          <div className="reveal mt-10 md:mt-12">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-disabled
              className="btn-don"
              style={{ padding: "1.25rem 2.5rem" }}
            >
              <span>I want The Don's Code</span>
              <span aria-hidden className="arrow">→</span>
            </a>
          </div>

          <div className="reveal mt-12 md:mt-14 space-y-2 text-cream/70 text-sm md:text-base leading-relaxed">
            <p>PDF delivered instantly. Works on all devices.</p>
            <p>
              If you are not satisfied, reply to your receipt and I will refund you.
              <br />
              <span className="italic text-cream/85">No questions asked.</span>
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Testimonials (placeholder until launch) */}
      <section className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border">
        <div className="absolute inset-0 bg-ink-elevated" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_55%_at_8%_85%,hsl(var(--gold)/0.06),transparent_60%)]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="reveal flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">What Readers Say</span>
            <span className="h-px w-10 bg-gold/60" />
          </div>

          <h2 className="text-display text-cream text-4xl md:text-6xl mb-14 md:mb-16 reveal">
            What <span className="italic text-gold">readers say.</span>
          </h2>

          {/* Placeholder testimonials — replace after first 50 purchases */}
          <div className="space-y-12 md:space-y-16">
            {[1, 2, 3].map((n) => (
              <figure key={n} className="reveal">
                <blockquote className="serif italic text-2xl md:text-3xl text-gold/30 leading-snug">
                  &ldquo;Testimonial coming soon.&rdquo;
                </blockquote>
                <figcaption className="mt-4 eyebrow text-cream/30">
                  Reader, Country
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="reveal mt-16 md:mt-20 serif italic text-base md:text-lg text-cream/50">
            Real words from real readers will appear here after launch.
          </p>
        </div>
      </section>
    </main>
  );
};

export default TheDonsCode;
