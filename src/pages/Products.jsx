import React from "react";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils/createPageUrl";
import ImageCarousel from "../components/ui/imagecarousel"; // <-- carousel component

/* ------------------------------------------------------------------
   Sample product data – each product now carries an `images` array.
   Replace the URLs with the real image locations you have.
------------------------------------------------------------------ */
const productList = [
  {
    id: 1,
    name: "Spearmint Leaves (Freeze‑Dried)",
    description:
      "10 oz bright, refreshing mint – perfect for teas and desserts.",
    price: 9.99,
    color: "mint",
    images: [
      "/mint3.jpeg",
	"/mint4.jpeg",
	"/mint6.jpeg",
	"/mint7.jpeg",
    ],
  },
  {
    id: 2,
    name: "Lavender Buds (Freeze‑Dried)",
    description:
      "10 oz calming lavender – great for infusions and culinary creations.",
    price: 11.99,
    color: "lavender",
    images: [
      "/lavandar.jpg",
    ],
  },
  {
    id: 3,
    name: "Mix of All (Freeze‑Dried)",
    description:
      "10 oz blend of lavender & spearmint – heavenly treats in one bag.",
    price: 10.49,
    color: "green",
    images: [
      "/onetwo.jpg",
    ],
  },
  {
    id: 4,
    name: "Yaupon Elderberry & Hibiscus",
    description:
      "3 oz 12-servings blend with yaupon offers an earthy balance with elderberry and hibiscus combine for a satisfying tart and tangy sweetness. The combo provides triple immune boosting while detoxifying the body.",
    price: 10.49,
    color: "purple",
    images: [
      "/Mantera Tea Tin WEB-Hibiscus.png",
"/Elderwoods Tea Yaupon, Elderberry, Hibiscus.jpg",
"/Yaupon, Elderberry, and Hibiscus Circle.png",
"/Elderwoods Mantera Collection Tea Sell Sheet.jpg",
"/Elderwoods Tea Company Front Page.jpg",

    ],
  },
{
    id: 4,
    name: "Yaupon Lemonbalm & Lemongrass",
    description:
      "3 oz 12-servings blend of a Coastal Carolina tradition that uplifts your mood and soothes the digestive system. The phytochemicals fight fatigue and boost the immune system, leading to a great alternative to coffee.",
    price: 10.49,
    color: "purple",
    images: [
      "/Mantera Tea Tin WEB-Lemonbalm.png",
"/Yaupon Lemonbalm and Lemongrass.png",
"/Elderwoods Mantera Collection Tea Sell Sheet.jpg",
"/Elderwoods Tea Company Front Page.jpg",
    ],
  },
{
    id: 4,
    name: "Yaupon Sage & Lavender",
    description:
      "3 oz 12-servings blend of soothing sage and calming lavendar to form a robust tea that clears the mind. Promoting relaxation while having the caffeine in yaupon helps a stressful workday be easier to handle.",
    price: 10.49,
    color: "purple",
    images: [
      "/Mantera Tea Tin WEB-Lavender.png",
"/Yaupon Sage and Lavender Circle.png",
"/Elderwoods Mantera Collection Tea Sell Sheet.jpg",
"/Elderwoods Tea Company Front Page.jpg",
    ],
  },
{
    id: 4,
    name: "Yaupon Tulsi, Anise Hyssop, & Blackberry Leaf",
    description:
      "3 oz 12-servings blend that's full-bodied aromatic and grounding. Plentiful in antioxidants and anti-stress agents. Tulsi basil is known for its healing properties, unique taste, and ability to soothe anxious nerves.",
    price: 10.49,
    color: "purple",
    images: [
      "/Mantera Tea Tin WEB-Anise.png",
"/Tulsi Circle.png",
"/Elderwoods Mantera Collection Tea Sell Sheet.jpg",
"/Elderwoods Tea Company Front Page.jpg",
    ],
  },


];

/* ------------------------------------------------------------------
   Stub for adding a product to the cart.
   Replace this with your real cart context / Redux dispatch later.
------------------------------------------------------------------ */
function addToCart(product) {
  // Example: store in localStorage (same format Cart.jsx expects)
  const stored = localStorage.getItem("cart");
  const current = stored ? JSON.parse(stored) : [];

  // If the product already exists, just bump the quantity
  const existing = current.find((i) => i.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    current.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(current));
  alert(`${product.name} added to cart!`);
}

/* ------------------------------------------------------------------ */
export default function Products() {
  return (
    <section className="page">
      {/* ------- Page Header with Gradient Title ------- */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-purple-700 to-green-700 bg-clip-text text-transparent"> <br />
            Our Products
          </span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Premium freeze‑dried herbs, packaged in Mylar‑sealed bags to keep out
          moisture.
        </p>
      </header>

      {/* ------- Product Grid ------- */}
      <div className="grid md:grid-cols-3 gap-6">
        {productList.map((product) => (
          <article
            key={product.id}
            className="clay-element p-6 flex flex-col justify-between bg-white/70 backdrop-blur-sm rounded-lg"
          >
            {/* ---------- Image carousel ---------- */}
            <ImageCarousel images={product.images} />

            {/* ---------- Title ---------- */}
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
 
            {/* ---------- Description ---------- */}
            <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>

            {/* ---------- Price ---------- */}
            <p className="mt-2 font-bold text-green-800">
              ${product.price.toFixed(2)}
            </p>

            {/* ---------- Add‑to‑Cart button ---------- */}
            <button
              onClick={() => addToCart(product)}
              className="clay-button mt-3 bg-green-100 text-green py-2 px-6 rounded hover:bg-green-700 transition hover:text-white"
            >
              Add to Cart
            </button>
          </article>
        ))}
      </div>

      {/* ------- Optional link back to home ------- */}
      <div className="mt-8 text-center">
        <Link
          to={createPageUrl("Home")}
          className="inline-flex items-center text-green-600 hover:underline"
        >
          <Leaf className="mr-1 w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
