// src/pages/Article.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

/**
 * Build a map of slug → import function.
 * We reuse the same glob pattern as the index page.
 */
const articleModules = import.meta.glob("./../blog/**/*.jsx");

/**
 * Given a slug, find the matching module path.
 * The slug is either the explicit `meta.slug` you exported,
 * or the filename (without extension) if you omitted it.
 */
function findModulePathBySlug(slug) {
  // Iterate over all module paths
  for (const path of Object.keys(articleModules)) {
    // Extract the filename part (e.g., "./../blog/FirstPost.jsx")
    const filename = path.split("/").pop().replace(".jsx", "");

    // Try to import the module just enough to read its meta
    // (we’ll do a synchronous check because we already have the path)
    // NOTE: this is a *dynamic import* – it returns a promise.
    // To avoid awaiting here, we’ll just compare the filename.
    if (filename === slug) {
      return path; // direct filename match
    }
  }
  return null; // not found
}

/**
 * Article page – loads the full component for the given slug.
 */
export default function Article() {
  const { slug } = useParams(); // from the URL: /blog/:slug
  const [Component, setComponent] = useState(null);
  const [meta, setMeta] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 1️⃣ Find the module path that corresponds to the slug
    const modulePath = findModulePathBySlug(slug);

    if (!modulePath) {
      setError(`Article not found (slug: ${slug})`);
      return;
    }

    // 2️⃣ Dynamically import the module
    articleModules[modulePath]()
      .then((mod) => {
        // The default export is the article component
        setComponent(() => mod.default);
        // Grab the meta for a nice header (optional)
        setMeta(mod.meta || { title: slug });
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load article.");
      });
  }, [slug]);

  if (error) {
    return (
      <section className="max-w-3xl mx-auto py-12 px-4 md:px-0">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p>{error}</p>
        <Link to="/blog" className="text-blue-600 underline">
          ← Back to blog index
        </Link>
      </section>
    );
  }

  // While the component is loading
  if (!Component) {
    return (
      <section className="max-w-3xl mx-auto py-12 px-4 md:px-0">
        <p>Loading article…</p>
      </section>
    );
  }

  // Render the article component
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 md:px-0">
      {/* Optional header using meta */}
      {meta && (
        <header className="mb-8">
          <h1 className="text-4xl font-bold">{meta.title}</h1>
          {meta.date && (
            <p className="text-sm text-gray-500">Published on {meta.date}</p>
          )}
        </header>
      )}

      {/* The article content itself */}
      <Component />

      {/* Back link */}
      <div className="mt-12">
        <Link to="/blog" className="text-blue-600 underline">
          ← Back to blog index
        </Link>
      </div>
    </section>
  );
}
