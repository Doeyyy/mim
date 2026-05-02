import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CountUp } from "@/components/CountUp";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import heroPortrait from "@/assets/hero-portrait.jpg";

// Update with the exact reel/post you want featured.
const FEATURED_IG_POST = "https://www.instagram.com/donmimmocatalano/";
const IG_FOLLOWERS = 41400;

export const AudienceProof = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <section className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border">
      <div className="absolute inset-0 bg-ink-elevated" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_70%_at_88%_12%,hsl(var(--gold)/0.10),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="reveal flex items-center gap-4 mb-8">
          <span className="h-px w-10 bg-gold/60" />
          <span className="eyebrow text-gold/80">The Audience</span>
        </div>

        <h2 className="text-display text-cream text-4xl md:text-6xl mb-10 md:mb-14 reveal">
          Who follows <span className="italic text-gold">Don Mimmo.</span>
        </h2>

        <div className="reveal mb-12 md:mb-16 grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3 order-2 md:order-1">
            <p className="font-gobold uppercase italic text-2xl sm:text-3xl md:text-5xl text-cream leading-tight">
              <CountUp target={IG_FOLLOWERS} />+ <span className="text-gold">on Instagram</span>
            </p>
            <p className="eyebrow text-cream/60 mt-3">Growing</p>
          </div>

          {/* Instagram-style preview card */}
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="md:col-span-2 order-1 md:order-2 group block max-w-[320px] mx-auto md:mx-0 md:ml-auto w-full text-left transition-transform duration-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Open Don Mimmo Instagram post"
          >
            <div className="bg-ink border border-border shadow-[0_30px_60px_-20px_hsl(var(--ink)/0.9)] overflow-hidden">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <span
                  className="h-9 w-9 rounded-full p-[2px]"
                  style={{
                    background:
                      "conic-gradient(from 180deg, hsl(var(--gold)), hsl(var(--gold)/0.4), hsl(var(--gold)))",
                  }}
                >
                  <span className="block h-full w-full rounded-full bg-ink p-[2px]">
                    <img
                      src={heroPortrait}
                      alt=""
                      className="h-full w-full rounded-full object-cover object-[60%_15%]"
                    />
                  </span>
                </span>
                <div className="leading-tight">
                  <p className="text-cream text-sm font-semibold">donmimmocatalano</p>
                  <p className="text-cream/50 text-xs serif italic">Naples · Italy</p>
                </div>
                <span className="ml-auto text-cream/60 text-lg">···</span>
              </div>

              <div className="relative aspect-square overflow-hidden bg-ink">
                <img
                  src={heroPortrait}
                  alt="Don Mimmo Catalano on Instagram"
                  className="h-full w-full object-cover object-[60%_15%] [filter:grayscale(15%)_contrast(1.15)_brightness(0.9)] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-gobold italic text-cream text-lg leading-tight drop-shadow-lg">
                    "Wisdom is <span className="text-gold">earned</span>, never given."
                  </p>
                </div>
                <svg
                  className="absolute top-3 right-3 h-5 w-5 text-cream/90 drop-shadow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="m10 9 5 3-5 3z" fill="currentColor" />
                </svg>
              </div>

              <div className="px-4 py-3 space-y-2">
                <div className="flex items-center gap-4 text-cream">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m22 2-7 20-4-9-9-4z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="ml-auto eyebrow text-gold/80 text-[10px] group-hover:text-gold transition-colors">
                    View profile →
                  </span>
                </div>
                <p className="text-cream text-sm">
                  <span className="font-semibold">12,438</span>
                  <span className="text-cream/60"> likes</span>
                </p>
              </div>
            </div>
          </button>
        </div>

        <div className="space-y-6 md:space-y-7 max-w-2xl">
          <p className="reveal serif text-lg md:text-2xl text-cream/90 leading-snug">
            Founders. CEOs. Senior executives.
            <br />
            People who build things and lead people.
          </p>
          <p className="reveal serif italic text-lg md:text-2xl text-cream/85 leading-snug">
            They do not follow Don Mimmo for entertainment.
            <br />
            They follow because something he said changed how they think.
          </p>
        </div>

      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-xl bg-ink border-border p-0 overflow-hidden max-h-[92vh] overflow-y-auto">
          <DialogTitle className="sr-only">Don Mimmo Catalano on Instagram</DialogTitle>
          <DialogDescription className="sr-only">
            Featured Instagram post from @donmimmocatalano
          </DialogDescription>

          <div className="p-4 md:p-6 bg-ink">
            {lightboxOpen && (
              <InstagramEmbed url={FEATURED_IG_POST} className="flex justify-center" />
            )}
          </div>

          <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-border">
            <p className="serif italic text-cream/75 text-sm">
              Watch the full reel on Instagram.
            </p>
            <a
              href={FEATURED_IG_POST}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-gold hover:text-cream transition-colors text-xs"
            >
              Open on Instagram →
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
