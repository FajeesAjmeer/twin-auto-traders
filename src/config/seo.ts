/**
 * Single source of truth for the site's production URL and shared SEO
 * defaults. Centralised here so that if a custom domain is connected
 * later (e.g. twinautotraders.lk), it only needs to change in one place
 * instead of being hunted down across index.html, the sitemap, and every
 * page's canonical/OG tags.
 */
export const SITE_URL = "https://twin-auto-traders.vercel.app";

export const SITE_NAME = "Twin Auto Traders";

// Default social-share image (1200x630 — the size Facebook/WhatsApp/
// Twitter expect for a link preview card).
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const BUSINESS = {
  name: SITE_NAME,
  phone: "+94740505718",
  email: "twinautotraders@gmail.com",
  address: {
    locality: "Kalmunai",
    region: "Eastern Province",
    country: "LK",
  },
  sameAs: [
    "https://www.facebook.com/share/1HiqFvUcWe/",
    "https://www.instagram.com/twin_auto_traders",
    "https://www.tiktok.com/@twin_auto_traders",
  ],
};
