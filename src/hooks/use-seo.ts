import { useEffect } from "react";

interface SEOOptions {
  title: string;
  description: string;
  path: string; // e.g. "/", "/partners"
  image?: string;
  type?: "website" | "article" | "product";
}

const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const useSEO = ({ title, description, path, image, type = "website" }: SEOOptions) => {
  useEffect(() => {
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://donmimmocatalano.com";
    const url = `${origin}${path}`;
    const ogImage = image
      ? image.startsWith("http")
        ? image
        : `${origin}${image}`
      : `${origin}/don-mimmo.jpg`;

    document.title = title;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertLink("canonical", url);

    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
    upsertMeta('meta[property="og:image"]', "property", "og:image", ogImage);

    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  }, [title, description, path, image, type]);
};
