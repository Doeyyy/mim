export const WhoIsDonMimmo = () => {
  const paragraphs = [
    "I ran complex organisations for 30 years. Across four continents. In environments where the cost of a wrong decision was not a bad quarter. It was everything.",
    "I learned things in those years that no business school teaches. About power. About loyalty. About who to trust and who to watch. About when to speak and when to say nothing at all.",
    "Now I share what I learned.",
    "Not theories. Not frameworks. What I actually lived.",
  ];

  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden grain">
      {/* Deep ink base with a touch of elevation */}
      <div className="absolute inset-0 bg-ink-elevated" />

      {/* Warm gold haze drifting from the upper-right — cinematic backlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_70%_at_88%_12%,hsl(var(--gold)/0.10),transparent_60%)]" />

      {/* Cool low-light pool from the lower-left */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_55%_at_8%_92%,hsl(var(--gold)/0.05),transparent_60%)]" />

      {/* Top fade to blend seamlessly with the hero ink */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
      {/* Bottom fade so the next section breathes */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent pointer-events-none" />

      {/* Subtle film scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(var(--cream)) 0px, hsl(var(--cream)) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Oversized editorial backdrop letter */}
      <div
        aria-hidden
        className="absolute -top-10 md:-top-20 right-[-4%] md:right-[2%] font-gobold italic text-[28rem] md:text-[44rem] leading-none text-cream/[0.025] select-none pointer-events-none tracking-tighter"
      >
        D
      </div>

      {/* Vertical gold hairline — editorial column rule */}
      <div className="hidden md:block absolute left-[max(2rem,calc(50%-28rem))] top-24 bottom-24 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent pointer-events-none" />

      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_220px_60px_hsl(var(--ink))]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Eyebrow with gold rule */}
        <div className="reveal flex items-center gap-4 mb-8 md:mb-10">
          <span className="h-px w-10 bg-gold/60" />
          <span className="eyebrow text-gold/80">The Man</span>
        </div>

        <h2 className="text-display text-cream text-4xl md:text-6xl mb-12 md:mb-16 reveal">
          Who is <span className="italic text-gold">Don Mimmo Catalano?</span>
        </h2>

        <div className="space-y-7 md:space-y-9">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="reveal serif italic leading-snug text-xl md:text-2xl text-cream/90"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Gold divider */}
        <div className="reveal mt-16 md:mt-20 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
          <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        <div className="mt-12 md:mt-14 reveal">
          <p className="italic text-gold serif text-2xl md:text-3xl">Ascolta bene.</p>
          <p className="eyebrow text-cream/60 mt-3">Don Mimmo</p>
        </div>
      </div>
    </section>
  );
};
