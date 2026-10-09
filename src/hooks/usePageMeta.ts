import { useEffect } from "react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/config/seo";

interface PageMetaOptions {
  /** Document <title> and og:title / twitter:title. */
  title: string;
  /** meta description and og:description / twitter:description. */
  description: string;
  /**
   * The route path this page is mounted at, e.g. "/about". Used to build
   * the canonical URL and og:url for THIS page specifically — without it,
   * every route would report the homepage as canonical (a real bug the
   * previous static-only index.html meta tags had).
   */
  path: string;
  /** Absolute image URL for social-share previews. Defaults to the site's OG image. */
  image?: string;
}

const setMeta = (selector: string, attr: string, value: string) => {
  let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    const isLink = selector.startsWith("link");
    el = document.createElement(isLink ? "link" : "meta");
    // Re-apply the identifying attribute (name=/property=/rel=) so the
    // element can be found again on the next render.
    const match = selector.match(/\[(.+?)="(.+?)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

/**
 * Sets per-page <title>, meta description, canonical URL, and Open Graph /
 * Twitter Card tags for SEO and social sharing.
 *
 * Lightweight alternative to react-helmet — no extra dependency needed
 * since this project only needs a handful of per-page tags, not a full
 * head-management library.
 */
export const usePageMeta = ({ title, description, path, image }: PageMetaOptions) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image ?? DEFAULT_OG_IMAGE;

    document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);

    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[property="og:site_name"]', "content", SITE_NAME);

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
  }, [title, description, path, image]);
};
