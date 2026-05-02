const Instagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
const TikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.6 6.3a5 5 0 0 1-3.4-1.6 5 5 0 0 1-1.3-2.7H11v13.4a2.4 2.4 0 1 1-2.4-2.4c.27 0 .53.04.78.12V9.5a5.7 5.7 0 0 0-.78-.05 5.7 5.7 0 1 0 5.7 5.7V8.93a8 8 0 0 0 5.3 1.97V7.32a4.7 4.7 0 0 1-0-.02z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.2-1C16.6 4 12 4 12 4s-4.6 0-7.9.2c-.5.1-1.4.1-2.2 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1C6 20 12 20 12 20s4.6 0 7.9-.2c.5-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 14.8V8.4l6 3.2-6 3.2z" />
  </svg>
);

export const WatchAndFollow = () => {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <p className="eyebrow text-gold mb-6 reveal">Watch</p>
        <h2 className="text-display text-cream text-4xl md:text-6xl reveal">
          What you can <span className="italic text-gold">expect.</span>
        </h2>
        <p className="serif text-xl md:text-2xl text-cream/85 mt-8 max-w-2xl reveal">
          Short. Direct. No filler. The same voice, only deeper in your inbox.
        </p>

        <div className="mt-14 md:mt-20 reveal">
          <div className="relative w-full aspect-video bg-ink-elevated border border-border overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/uS29ysWpIxc"
              title="Don Mimmo Catalano on YouTube"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-between gap-6 reveal">
          <p className="serif text-lg md:text-xl text-cream/85">
            Follow Don Mimmo where he posts every day:
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://youtube.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-ink px-5 py-3 eyebrow hover:bg-cream transition-colors"
            >
              <YouTubeIcon />
              YouTube
            </a>
            <a
              href="https://www.instagram.com/donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-5 py-3 eyebrow hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram />
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-5 py-3 eyebrow hover:border-gold hover:text-gold transition-colors"
            >
              <TikTok />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
