// src/components/BlogCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ meta }) {
  return (
    <li className="border-b pb-4">
      <Link
        to={`/blog/${meta.slug}`}
        className="block hover:bg-gray-50 transition rounded p-2"
      >
        <h2 className="text-2xl font-semibold text-gray-800">{meta.title}</h2>
        <p className="text-sm text-gray-500">{meta.date}</p>
        {meta.excerpt && (
          <p className="mt-2 text-gray-700">{meta.excerpt}</p>
        )}
      </Link>
    </li>
  );
}
