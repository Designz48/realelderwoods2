// src/pages/Products.jsx
import { Leaf } from "lucide-react"
import { Link } from "react-router-dom"
import { createPageUrl } from "../utils/createPageUrl"

const productList = [
  {
    id: 1,
    name: "Mint Leaves (Freeze‑Dried)",
    description: "Bright, refreshing mint perfect for teas and desserts.",
    price: "$9.99",
    color: "mint",
  },
  {
    id: 2,
    name: "Lavender Buds (Freeze‑Dried)",
    description: "Calming lavender for infusions and culinary creations.",
    price: "$11.99",
    color: "lavender",
  },
  {
    id: 3,
    name: "Rosemary Sprigs (Freeze‑Dried)",
    description: "Robust rosemary ideal for savory dishes and marinades.",
    price: "$10.49",
    color: "green",
  },
]

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto my-12 space-y-8">
      <header className="clay-element p-6 text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-mint-700 to-lavender-700">
          Our Products
        </h1>
        <p className="text-gray-600 mt-2">
          Premium freeze‑dried herbs, packaged in eco‑friendly paper bags.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {productList.map((p) => (
          <article
            key={p.id}
            className="clay-element p-6 flex flex-col justify-between bg-white/70 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="clay-element bg-gradient-to-br from-mint-200 to-lavender-200 p-2">
                <Leaf className="w-5 h-5 text-mint-700" />
              </div>
              <h2 className="text-xl font-semibold">{p.name}</h2>
            </div>

            <p className="text-gray-700 flex-grow">{p.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-lg font-bold">{p.price}</span>
              <Link
                to={createPageUrl("Contact")}
                className="clay-button bg-mint-200 hover:bg-mint-300 px-4 py-2 text-sm"
              >
                Order
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
