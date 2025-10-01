// src/pages/Legal.jsx
import { Link } from "react-router-dom"
import { createPageUrl } from "../utils/createPageUrl"

export default function Legal() {
  return (
    <section className="clay-element p-8 max-w-3xl mx-auto my-12">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-mint-700 to-lavender-700">
        Legal Information
      </h1>

      <article className="prose prose-sm text-gray-800">
        <h2>Terms of Service</h2>
        <p>
          By accessing or using Elderwoods Tea’s website you agree to be bound by these Terms of
          Service. All purchases are subject to our refund policy and shipping terms.
        </p>

        <h2>Privacy Policy</h2>
        <p>
          We collect only the information necessary to process orders and improve your experience.
          Your data is never sold to third parties and is stored with end‑to‑end encryption.
        </p>

        <h2>Shipping & Returns</h2>
        <p>
          Orders are shipped within 2–3 business days via standard USPS delivery. Returns are accepted
          within 30 days of receipt for unopened products.
        </p>
      </article>

      <Link
        to={createPageUrl("Home")}
        className="clay-button mt-8 inline-block bg-mint-200 hover:bg-mint-300"
      >
        Return to Home
      </Link>
    </section>
  )
}
