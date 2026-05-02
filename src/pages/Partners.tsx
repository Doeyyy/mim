import { useEffect, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { StickyTopBar } from "@/components/StickyTopBar";
import { useReveal } from "@/hooks/use-reveal";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CountUp } from "@/components/CountUp";
import { InstagramEmbed } from "@/components/InstagramEmbed";
import heroPortrait from "@/assets/hero-portrait.jpg";

// Update this with the exact reel/post you want featured in the lightbox.
// Must be a public post URL like https://www.instagram.com/reel/SHORTCODE/
const FEATURED_IG_POST = "https://www.instagram.com/donmimmocatalano/";
const IG_FOLLOWERS = 41400;

const contactSchema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(100),
  brand: z.string().trim().min(1, "Brand or company is required").max(150),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell me a little more").max(2000),
});

const Partners = () => {
  useReveal();

  useEffect(() => {
    document.title = "Work With Don Mimmo Catalano — Brand Partnerships";
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
      "Brand partnerships with Don Mimmo Catalano. Selective collaborations with founders, executives and a global audience that listens.",
    );
  }, []);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse({ name, brand, email, message });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message received. I respond to the ones that belong here.");
      setName("");
      setBrand("");
      setEmail("");
      setMessage("");
      setLoading(false);
    }, 500);
  };

  return (
    <main className="bg-ink text-cream overflow-x-hidden">
      <StickyTopBar />

      {/* SECTION 1 — Hero */}
      <section className="relative min-h-[100svh] md:min-h-[88vh] w-full flex items-end md:items-center overflow-hidden grain pt-24 md:pt-40 pb-10 md:pb-32 px-6 md:px-12">
        <div className="absolute inset-0 bg-ink" />

        {/* Mobile: portrait as full-bleed background, face anchored upper third */}
        <img
          src={heroPortrait}
          alt="Don Mimmo Catalano portrait"
          className="md:hidden absolute inset-x-0 top-0 h-[60%] w-full object-cover object-[60%_15%] opacity-90 [filter:grayscale(20%)_contrast(1.2)_brightness(0.85)_saturate(1.1)]"
        />

        {/* Desktop: portrait anchored right with cinematic shadow */}
        <img
          src={heroPortrait}
          alt=""
          aria-hidden
          className="hidden md:block absolute inset-y-0 right-0 h-full w-auto max-w-none object-cover object-right opacity-95 translate-x-[-8%] lg:translate-x-[-12%] xl:translate-x-[-16%] [filter:grayscale(20%)_contrast(1.2)_brightness(0.88)_saturate(1.1)_drop-shadow(0_30px_60px_hsl(var(--ink)/0.85))_drop-shadow(0_0_120px_hsl(var(--ink)/0.6))]"
        />

        {/* Cinematic shadow halo behind portrait (desktop) */}
        <div
          aria-hidden
          className="hidden md:block absolute inset-y-0 right-0 w-[70%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 70% 50%, hsl(var(--ink) / 0.0) 0%, hsl(var(--ink) / 0.55) 55%, hsl(var(--ink) / 0.95) 90%)",
          }}
        />

        {/* Warm gold rim light */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_92%_30%,hsl(var(--gold)/0.18),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_10%_85%,hsl(var(--gold)/0.06),transparent_60%)]" />

        {/* Mobile: hard ink floor for text legibility */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-transparent from-10% via-ink/85 via-26% to-ink to-36%" />
        {/* Desktop: left ink wash so copy lifts off the portrait */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-ink via-ink/85 via-30% to-transparent to-55%" />

        {/* Top fade to blend with sticky header */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink to-transparent pointer-events-none" />

        <div
          aria-hidden
          className="absolute -top-10 md:-top-20 left-[-2%] font-gobold italic text-[16rem] md:text-[28rem] leading-none text-cream/[0.025] select-none pointer-events-none tracking-tighter"
        >
          M
        </div>
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_220px_60px_hsl(var(--ink))]" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full mt-[14vh] md:mt-0">
          <div className="reveal flex items-center gap-4 mb-4 md:mb-10">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">Brand Partnerships</span>
          </div>

          <h1 className="hero-h1 reveal !text-[52px] sm:!text-8xl md:!text-[5rem] lg:!text-[6.25rem] xl:!text-[7.5rem] leading-[0.9] max-w-[14ch] md:max-w-[12ch] lg:max-w-[11ch] xl:max-w-[10ch] [text-wrap:balance]">
            Work With
            <br />
            <span className="text-gold">
              Don Mimmo
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Catalano
            </span>
          </h1>

          <div className="mt-5 md:mt-8 max-w-2xl md:max-w-xl space-y-3 md:space-y-4">
            <p className="reveal serif italic text-sm md:text-xl text-cream/90 leading-snug">
              I am selective about who I associate with.
              <br />
              My audience knows this.
              <br />
              That is why an endorsement from Don Mimmo
              <br />
              means something they cannot buy elsewhere.
            </p>
            <p className="reveal serif text-sm md:text-[1.3125rem] text-gold italic md:whitespace-nowrap">
              If your brand belongs in this world, let us talk.
            </p>
            <div className="reveal pt-2 md:pt-4">
              <a href="#contact" className="btn-don whitespace-nowrap">
                <span>Start The Conversation</span>
                <span aria-hidden className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — The Audience */}
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
                {/* Header */}
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

                {/* Media */}
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
                  {/* Reel icon */}
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

                {/* Footer */}
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

          <div className="reveal mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {[
              { label: "Average Reel", value: "5,000 to 15,000", sub: "views" },
              { label: "Average Slide", value: "10,000 to 30,000", sub: "reach" },
              { label: "Paid Reach", value: "900,000+", sub: "per boosted post" },
              { label: "Engagement", value: "Deeply loyal", sub: "Comments are conversations, not reactions" },
            ].map((stat) => (
              <div key={stat.label} className="bg-ink-elevated p-6 md:p-10">
                <p className="eyebrow text-gold/80 mb-3 md:mb-4">{stat.label}</p>
                <p className="font-gobold italic text-xl md:text-3xl text-cream leading-tight">
                  {stat.value}
                </p>
                <p className="serif italic text-cream/60 mt-2 text-sm md:text-base">{stat.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 — Partnership formats */}
      <section className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_55%_at_8%_15%,hsl(var(--gold)/0.08),transparent_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">What Don Mimmo Offers</span>
          </div>

          <h2 className="text-display text-cream text-4xl md:text-6xl mb-14 md:mb-20 reveal">
            Partnership <span className="italic text-gold">formats.</span>
          </h2>

          <div className="space-y-px bg-border">
            {[
              {
                title: "Integrated Reel",
                lines: [
                  "Don Mimmo tells a story. Your brand is part of the story.",
                  "Not an ad. A narrative that earns its place in the content.",
                  "Delivered in Don Mimmo's voice. Written by Don Mimmo's team.",
                ],
              },
              {
                title: "Wisdom Slide Integration",
                lines: [
                  "A principle or insight that connects naturally to your brand's values.",
                  "Dark background. Gold text. Don Mimmo's portrait.",
                  "The most shareable format in the account.",
                ],
              },
              {
                title: "Dedicated Email",
                lines: [
                  "One message to Don Mimmo's subscriber list.",
                  "The most exclusive placement available.",
                  "Reserved for brands that align completely with the community.",
                ],
              },
              {
                title: "Long-Term Partnership",
                lines: [
                  "Three to six month exclusive arrangements.",
                  "Don Mimmo endorses one brand per category.",
                  "Preferred rates. First access to new formats.",
                ],
              },
            ].map((fmt, i) => (
              <div key={fmt.title} className="reveal bg-ink p-6 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10">
                <div className="md:col-span-5 flex items-baseline gap-4">
                  <span className="eyebrow text-gold/70 shrink-0">0{i + 1}</span>
                  <h3 className="font-gobold uppercase italic text-xl md:text-3xl text-cream leading-tight">
                    {fmt.title}
                  </h3>
                </div>
                <div className="md:col-span-7 space-y-2">
                  {fmt.lines.map((l, j) => (
                    <p
                      key={j}
                      className={`serif text-base md:text-xl leading-snug ${
                        j === 0 ? "text-cream/95" : "text-cream/75 italic"
                      }`}
                    >
                      {l}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — What Don Mimmo Does Not Do */}
      <section className="relative py-20 md:py-40 px-6 md:px-12 overflow-hidden grain border-t border-border">
        <div className="absolute inset-0 bg-ink-elevated" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_60%_at_92%_85%,hsl(var(--gold)/0.07),transparent_60%)]" />
        <div
          aria-hidden
          className="absolute -bottom-10 left-[-4%] font-gobold italic text-[18rem] md:text-[32rem] leading-none text-cream/[0.025] select-none pointer-events-none tracking-tighter"
        >
          NO
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">The Line</span>
          </div>

          <h2 className="text-display text-cream text-4xl md:text-6xl mb-12 md:mb-16 reveal">
            Don Mimmo does not <span className="italic text-gold">work with everyone.</span>
          </h2>

          <div className="space-y-7 md:space-y-9">
            <p className="reveal serif text-xl md:text-2xl text-cream/95 leading-snug">
              No gambling. No alcohol. No get-rich-quick schemes.
              <br />
              No brands that conflict with the values of the community.
              <br />
              No content that feels like advertising rather than wisdom.
            </p>

            <div className="reveal flex items-center gap-4 py-2">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="h-1.5 w-1.5 rotate-45 bg-gold/70" />
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
            </div>

            <p className="reveal serif italic text-xl md:text-2xl text-cream/90 leading-snug">
              If what you sell genuinely serves the people who follow Don Mimmo,
              <br />
              we will find a way to work together.
              <br />
              If it does not, this is not the right partnership.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Contact */}
      <section
        id="contact"
        className="relative py-20 md:py-40 px-6 md:px-12 border-t border-border overflow-hidden grain"
      >
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_70%_at_50%_0%,hsl(var(--gold)/0.10),transparent_60%)]" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="reveal flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-gold/60" />
            <span className="eyebrow text-gold/80">Contact</span>
          </div>

          <h2 className="text-display text-cream text-4xl md:text-6xl reveal">
            Start the <span className="italic text-gold">conversation.</span>
          </h2>

          <div className="reveal mt-10 md:mt-12 space-y-3 serif italic text-lg md:text-xl text-cream/85 leading-snug">
            <p>Tell me about your brand.</p>
            <p>Tell me what you are building.</p>
            <p>
              Tell me why you think Don Mimmo's audience
              <br />
              is the right audience for what you offer.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-12 md:mt-16 space-y-4 reveal">
            <input
              type="text"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full bg-ink-elevated border border-border px-6 py-5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="text"
              required
              maxLength={150}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Brand / Company"
              className="w-full bg-ink-elevated border border-border px-6 py-5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <input
              type="email"
              required
              maxLength={255}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full bg-ink-elevated border border-border px-6 py-5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors"
            />
            <textarea
              required
              maxLength={2000}
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the partnership you have in mind"
              className="w-full bg-ink-elevated border border-border px-6 py-5 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full eyebrow bg-gold text-ink px-8 py-6 hover:bg-cream transition-colors disabled:opacity-60"
            >
              {loading ? "..." : "Send"}
            </button>
          </form>

          <div className="reveal mt-12 md:mt-14 space-y-2 serif italic text-lg md:text-xl text-cream/85 leading-snug text-center">
            <p>I read every message personally.</p>
            <p className="text-gold">I respond to the ones that belong here.</p>
            <p className="eyebrow not-italic text-cream/60 pt-4">Don Mimmo</p>
          </div>
        </div>
      </section>
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
    </main>
  );
};

export default Partners;
