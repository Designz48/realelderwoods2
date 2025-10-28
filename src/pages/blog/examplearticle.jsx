// src/blog/ExampleArticle.jsx
import React from "react";
/* eslint-disable react-refresh/only-export-components */
/* -------------------------------------------------
   1️⃣  Metadata – the blog index reads this.
   ------------------------------------------------- */
export const meta = {
  // The slug is derived from the filename, but you can override it here.
  slug: "example-article",            // <-- optional, defaults to filename
  title: "How to Add a Dynamic PayPal SDK to a Multi‑Page React App",
  date: "2025‑10‑15",                 // ISO‑like string – you can format later
  // Short teaser shown on the blog index page
  excerpt:
    "Learn a clean way to load the PayPal JavaScript SDK only on pages that need it, using a tiny React loader component.",
};

/* -------------------------------------------------
   2️⃣  The article content – any JSX you like.
   ------------------------------------------------- */
export default function ExampleArticle() {
  return (
    <article className="prose max-w-3xl mx-auto py-8">
      <h1>{meta.title}</h1>
      <p><em>Published on {meta.date}</em></p>

      <p>
        This is the body of the article. You can embed images,
        code blocks, tables, videos, etc. The only requirement is that
        the component returns valid JSX.
      </p>

      {/* Example of embedding the PayPal loader we built earlier */}
      <h2>Dynamic PayPal Loader recap</h2>
      <p>
        The <code>PayPalLoader</code> component injects the PayPal SDK
        script only when the page mounts, keeping the bundle small.
      </p>

      {/* You can import other components here if you want */}
      {/* <PayPalLoader clientId={import.meta.env.VITE_PAYPAL_CLIENT_ID} /> */}
    </article>
  );
}
