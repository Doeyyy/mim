import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Instagram = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);
const TikTok = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.6 6.3a5 5 0 0 1-3.4-1.6 5 5 0 0 1-1.3-2.7H11v13.4a2.4 2.4 0 1 1-2.4-2.4c.27 0 .53.04.78.12V9.5a5.7 5.7 0 0 0-.78-.05 5.7 5.7 0 1 0 5.7 5.7V8.93a8 8 0 0 0 5.3 1.97V7.32a4.7 4.7 0 0 1-0-.02z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 7.5s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.2-1C16.6 4 12 4 12 4s-4.6 0-7.9.2c-.5.1-1.4.1-2.2 1C1.2 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1C6 20 12 20 12 20s4.6 0 7.9-.2c.5-.1 1.4-.1 2.2-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 14.8V8.4l6 3.2-6 3.2z" />
  </svg>
);

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/partners", label: "Partners" },
  { to: "/the-dons-code", label: "The Don's Code" },
];

export const StickyTopBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-ink/85 backdrop-blur-md border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-12 md:h-14 flex items-center justify-between gap-4">
        <Link to="/" className="eyebrow text-cream hover:text-gold transition-colors truncate">
          Don Mimmo Catalano
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="eyebrow text-cream hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          {/* Social icons — desktop only */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="https://youtube.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 text-cream hover:text-gold transition-colors"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.instagram.com/donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-cream hover:text-gold transition-colors"
            >
              <Instagram />
            </a>
            <a
              href="https://www.tiktok.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 text-cream hover:text-gold transition-colors"
            >
              <TikTok />
            </a>
          </div>

          <a
            href="#subscribe"
            className="hidden md:inline-flex eyebrow bg-gold text-ink px-4 py-2 hover:bg-cream transition-colors whitespace-nowrap"
          >
            Subscribe
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 text-cream hover:text-gold transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile collapsible panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-border/60 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-4 py-4 flex flex-col">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="eyebrow text-cream hover:text-gold transition-colors py-3 border-b border-border/40"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="#subscribe"
            onClick={() => setOpen(false)}
            className="eyebrow bg-gold text-ink px-4 py-3 mt-4 hover:bg-cream transition-colors text-center whitespace-nowrap"
          >
            Subscribe
          </a>
          <div className="flex items-center justify-center gap-4 pt-4">
            <a
              href="https://youtube.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="p-2 text-cream hover:text-gold transition-colors"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://www.instagram.com/donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-cream hover:text-gold transition-colors"
            >
              <Instagram />
            </a>
            <a
              href="https://www.tiktok.com/@donmimmocatalano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 text-cream hover:text-gold transition-colors"
            >
              <TikTok />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
