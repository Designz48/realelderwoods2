// src/pages/BlogPost.jsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";



/* --------------------------------------------------------------
   Dummy data – replace with real fetch / CMS integration later
   -------------------------------------------------------------- */
const POSTS = {
  "first-sip": {
    title: "The First Sip: How Freeze‑Dryed Tea Changed My Mornings",
    date: "2024-08-15",
    tags: ["Tea", "Health", "Freeze‑dry"],
    cover:
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80",
    content: `
<p>There’s something magical about opening a tin of freeze‑dried tea…</p>

<h2>Why freeze‑dry?</h2>
<p>Freezing the leaves at peak freshness and then sublimating the ice preserves aroma, antioxidants, and flavor better than traditional drying.</p>

<h2>My ritual</h2>
<ul>
  <li>Boil fresh water (just off the boil).</li>
  <li>Add one teaspoon of the dried leaves.</li>
  <li>Steep for 30 seconds, stir, and enjoy.</li>
</ul>

<p>It’s quick, mess‑free, and the taste is surprisingly vibrant.</p>
`,
  },

  // 👉 Add more posts here following the same shape
};

export default function BlogPost() {
  const { slug } = useParams(); // e.g. "/blog/first-sip"
  const post = POSTS[slug];

  // Scroll to top whenever the slug changes (nice UX)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <Layout currentPageName="Blog">
        <section className="max-w-2xl mx-auto py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="text-gray-600 mb-6">
            The article you’re looking for doesn’t exist (or the slug is
            misspelled).
          </p>
          <Link
            to={createPageUrl("Blog")}
            className="inline-flex items-center text-green-600 hover:underline"
          >
            <ArrowLeft className="mr-1 w-5 h-5" />
            Back to blog index
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout currentPageName="Article">
      <article className="max-w-4xl mx-auto py-12 px-4 md:px-0">
        {/* ----- Cover image ----- */}
        {post.cover && (
          <img
            src={post.cover}
            alt={post.title}
            className="w-full rounded-lg shadow-md mb-8"
          />
        )}

        {/* ----- Header (title, meta, share) ----- */}
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>

            <span className="flex items-center gap-1">
              <Tag size={14} />
              {post.tags?.join(", ")}
            </span>

            <button
              className="flex items-center gap-1 text-gray-500 hover:text-green-600 transition-colors"
              onClick={() => {
                const url = window.location.href;
                navigator.clipboard.writeText(url);
                alert("Link copied to clipboard!");
              }}
            >
              <Share2 size={14} />
              Share
            </button>
          </div>
        </header>

        {/* ----- Body content (raw HTML) ----- */}
        <section
          className="prose prose-lg max-w-none text-gray-800"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* ----- Optional CTA (link to shop) ----- */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            to={createPageUrl("Products")}
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Explore Our Tea Collection
          </Link>
        </div>
      </article>
    </Layout>
  );
}
