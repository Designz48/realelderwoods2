// src/pages/About.jsx
import { Link } from "react-router-dom"
import { Leaf } from "lucide-react"
import { createPageUrl } from "../utils/createPageUrl"

export default function About() {
  return (
    <section className="clay-element p-8 max-w-3xl mx-auto my-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="clay-element bg-gradient-to-br from-mint-200 to-lavender-200 p-2">
          <Leaf className="w-6 h-6 text-mint-700" />
        </div>
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mint-700 to-lavender-700">
          About Elderwoods Tea
        </h1>
      </div>

      <p className="text-gray-700 mb-4">
        Elderwoods Tea began as a small family‑run operation dedicated to preserving the pure flavor of
        home‑grown herbs through freeze‑drying. Our mission is to bring the garden’s freshness
        straight to your kitchen, all while using sustainable, paper‑bag packaging.
      </p>

      <p className="text-gray-700">
        We grow mint, lavender, rosemary, and a variety of seasonal herbs on our organic
        farm in the Pacific Northwest. Each batch is harvested at peak potency, flash‑frozen,
        and sealed to retain aroma, color, and nutritional value.
      </p>

      <Link
        to={createPageUrl("Products")}
        className="clay-button mt-6 inline-block bg-mint-200 hover:bg-mint-300"
      >
        Browse Our Products
      </Link>
    </section>
  )
}
