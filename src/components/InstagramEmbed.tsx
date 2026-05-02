import { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  /** Full Instagram permalink, e.g. https://www.instagram.com/p/SHORTCODE/ or /reel/SHORTCODE/ */
  url: string;
  className?: string;
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

/**
 * Renders a real Instagram embed using Instagram's blockquote + embed.js.
 * The script is loaded once and shared across instances.
 */
export const InstagramEmbed = ({ url, className }: InstagramEmbedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SRC = "https://www.instagram.com/embed.js";

    const process = () => {
      try {
        window.instgrm?.Embeds.process();
      } catch {
        /* no-op */
      }
    };

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SRC}"]`,
    );

    if (existing && window.instgrm) {
      process();
      return;
    }

    if (!existing) {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      s.onload = process;
      document.body.appendChild(s);
    } else {
      existing.addEventListener("load", process, { once: true });
    }

    // Re-process shortly after mount in case the script loaded earlier
    const t = setTimeout(process, 300);
    return () => clearTimeout(t);
  }, [url]);

  return (
    <div ref={ref} className={className}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#000",
          border: 0,
          margin: 0,
          maxWidth: "540px",
          minWidth: "280px",
          width: "100%",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
};
