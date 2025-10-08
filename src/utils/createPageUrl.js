// src/utils/createPageUrl.js

/**
 * Simple helper that converts a page identifier into a URL path.
 *
 * @param {string} page - The logical page name (e.g., "Home", "Products")
 * @returns {string} The URL path that React Router expects.
 */
export function createPageUrl(page) {
  // Normalise the input (case‑insensitive)
  const normalized = String(page).trim().toLowerCase()

  // Map the known pages to their routes
  const map = {
    home: '/',
    products: '/products',
    about: '/about',
    contact: '/contact',
    legal: '/legal',
    cart: '/cart',
  }

  // Fallback to '/' if the page name isn’t recognised
  return map[normalized] ?? '/'
}
