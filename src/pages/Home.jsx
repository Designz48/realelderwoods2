// src/pages/Home.jsx
import { Link } from "react-router-dom"
import { ShoppingBag, Heart } from "lucide-react"
import { createPageUrl } from "../utils/createPageUrl"

/* -------------------------------------------------
   Tiny fallback Button component (replace with your own
   shared <Button> if you already have one)
   ------------------------------------------------- */
const Button = ({ children, className, ...rest }) => (
  <button className={`clay-button ${className}`} {...rest}>
    {children}
  </button>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-mint-50 flex flex-col">
      {/* -------------------------------------------------
          Call‑to‑Action – two columns:
          • left column: left‑aligned text & CTAs
          • right column: right‑aligned image placeholder,
            no rounded box, just a plain background area
         ------------------------------------------------- */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* NOTE: bg-white/50 → bg-transparent */}
          <div className="clay-element bg-transparent p-12 relative overflow-hidden flex flex-col md:flex-row items-start">
            {/* ----- Decorative pastel blobs (unchanged) ----- */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full translate-x-20 translate-y-20" />

            {/* ----- Left column – text & CTAs (left‑aligned) ----- */}
            <div className="w-full md:w-1/2 space-y-8 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Ready to experience{" "}
                <span className="bg-gradient-to-r from-green-700 to-purple-700 bg-clip-text text-transparent">
                  pure flavor
                </span>
                ?
              </h2>

              <p className="text-lg text-gray-600 max-w-2xl">
                Join hundreds of tea enthusiasts who trust Elderwoods Tea for the highest
                quality freeze‑dried herbs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                {/* Shop Now */}
                <Link to={createPageUrl("Products")}>
                  <Button className="bg-green-100 text-green-800 px-8 py-3 text-lg font-medium w-full sm:w-auto">
                    <ShoppingBag className="w-5 h-5 mr-2 inline-block" />
                    Shop Now
                  </Button>
                </Link>

                {/* Our Story */}
                <Link to={createPageUrl("About")}>
                  <Button className="bg-white text-gray-700 px-8 py-3 text-lg w-full sm:w-auto">
                    <Heart className="w-5 h-5 mr-2 inline-block" />
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>

            {/* ----- Right column – image placeholder (right‑aligned) ----- */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-end">
              {/* Replace this <div> with an <img> when you have the real picture */}
              <div className="w-64 h-64 bg-mint-200 flex items-center justify-center text-gray-500">
                Image Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
