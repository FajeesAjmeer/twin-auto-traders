import { useEffect } from "react";

/**
 * Sets the page <title> and meta description for SEO.
 * Lightweight alternative to react-helmet — no extra dependency needed
 * since this project only needs per-page title/description, not a full
 * head-management library.
 */
export const usePageMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [title, description]);
};
