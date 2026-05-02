export const TheLetters = () => {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 bg-ink-elevated">
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow text-gold mb-8 reveal">The Don's Letters</p>

        <h2 className="text-display text-cream text-4xl md:text-6xl reveal">
          What happens when
          <br />
          you <span className="italic text-gold">subscribe?</span>
        </h2>

        <div className="mt-12 md:mt-16 space-y-7 serif text-xl md:text-2xl text-cream/90 leading-snug">
          <p className="reveal">You receive The Don's Letters.</p>
          <p className="reveal">
            One message at a time. Never rushed. Never scheduled. When I have something worth
            sharing, a lesson, a principle, a story I have never told publicly, you will be
            the first to receive it.
          </p>
          <p className="reveal">
            These are not the posts I share on Instagram.
            <br />
            <span className="text-gold italic">These are the things I share only here.</span>
          </p>
          <p className="reveal text-cream">Straight from Don Mimmo. Straight to you.</p>
        </div>

        <a
          href="#subscribe"
          className="mt-14 inline-flex items-center gap-3 eyebrow text-gold border-b border-gold pb-2 hover:text-cream hover:border-cream transition-colors reveal"
        >
          Enter your name and email above
          <span>↑</span>
        </a>
      </div>
    </section>
  );
};
