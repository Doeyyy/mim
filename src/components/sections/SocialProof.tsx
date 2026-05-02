import { CountUp } from "@/components/CountUp";

const IG_FOLLOWERS = 41400;

const testimonials = [
  {
    handle: "@marco_v",
    body: "Finalmente qualcuno che parla con la verità. Every word lands.",
  },
  {
    handle: "@elena.r",
    body: "I've watched every video twice. There is nothing else like this on the internet.",
  },
  {
    handle: "@thomas_w",
    body: "Three minutes of Don Mimmo is worth a year of business school. Ascolta bene indeed.",
  },
];

const Instagram = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
const TikTok = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.6 6.3a5 5 0 0 1-3.4-1.6 5 5 0 0 1-1.3-2.7H11v13.4a2.4 2.4 0 1 1-2.4-2.4c.27 0 .53.04.78.12V9.5a5.7 5.7 0 0 0-.78-.05 5.7 5.7 0 1 0 5.7 5.7V8.93a8 8 0 0 0 5.3 1.97V7.32a4.7 4.7 0 0 1-0-.02z"/>
  </svg>
);
const YouTube = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.2-1C16.6 4 12 4 12 4s-4.6 0-7.9.2c-.5.1-1.4.1-2.2 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1C6 20 12 20 12 20s4.6 0 7.9-.2c.5-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 14.8V8.4l6 3.2-6 3.2z"/>
  </svg>
);

export const SocialProof = () => {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-display text-cream text-4xl md:text-6xl mb-16 md:mb-20 reveal">
          What people say
          <br />
          about <span className="italic text-gold">Don Mimmo.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-ink p-8 md:p-10 reveal flex flex-col justify-between min-h-[220px]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="serif text-lg md:text-xl text-cream/90 leading-snug">"{t.body}"</p>
              <p className="eyebrow text-gold mt-8">{t.handle}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28 text-center reveal">
          <p className="text-display text-gold text-5xl md:text-7xl">
            <CountUp target={IG_FOLLOWERS} />
          </p>
          <p className="serif text-xl md:text-2xl text-cream/90 mt-4">
            people follow Don Mimmo on Instagram.
          </p>
          <p className="serif text-xl md:text-2xl text-cream mt-2">
            <span className="italic text-gold">Join them. Then go further.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mt-12">
            <a
              href="https://www.instagram.com/donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
            >
              <Instagram />
              <span className="eyebrow">@donmimmocatalano</span>
            </a>
            <a
              href="https://www.tiktok.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
            >
              <TikTok />
              <span className="eyebrow">@donmimmocatalano</span>
            </a>
            <a
              href="https://youtube.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
            >
              <YouTube />
              <span className="eyebrow">@donmimmocatalano</span>
            </a>
          </div>
        </div>

        <footer className="mt-24 pt-10 border-t border-border text-center">
          <p className="eyebrow text-cream/50">© Don Mimmo Catalano · Ascolta bene</p>
        </footer>
      </div>
    </section>
  );
};
