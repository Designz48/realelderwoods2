// src/pages/blog/Blog.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob("./../blog/**/*.jsx");
    const entries = Object.entries(modules);

    // Load only the meta objects (no heavy component import)
    Promise.all(
      entries.map(([path, importer]) =>
        importer().then((mod) => mod.meta || {
          // fallback if meta missing
          slug: path.split("/").pop().replace(".jsx", ""),
          title: "Untitled",
          date: "1970-01-01",
          excerpt: "",
        })
      )
    )
      .then((metas) => {
        metas.sort((a, b) => (a.date < b.date ? 1 : -1));
        setArticles(metas);
      })
      .catch((err) => console.error("Failed to load blog metas:", err));
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-8">📝 Elderwoods Blog</h1>

      {articles.length === 0 ? (
        <p>Loading articles…</p>
      ) : (
        <ul className="space-y-6">
          {articles.map((a) => (
            <li key={a.slug} className="border-b pb-4">
              <Link
                to={`/blog/${a.slug}`}
                className="block hover:bg-gray-50 transition rounded p-2"
              >
                <h2 className="text-2xl font-semibold text-gray-800">
                  {a.title}
                </h2>
                <p className="text-sm text-gray-500">{a.date}</p>
                {a.excerpt && (
                  <p className="mt-2 text-gray-700">{a.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
