import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
import Heading from "../components/ui/Heading";
import Paragraph from "../components/ui/Paragraph";
import { createPageUrl } from "../utils/createPageUrl";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 px-4 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={1} className="text-white">
          <Leaf className="inline-block mr-2 w-8 h-8" />
          Fresh, Freeze‑Dried Herbs Delivered to Your Door
        </Heading>

        <Paragraph className="text-white opacity-90">
          Preserve the aroma, flavor, and health benefits of premium herbs
          without any additives. Perfect for teas, tinctures, and culinary
          creations.
        </Paragraph>

        <Link
          to={createPageUrl("shop")}
          className="inline-block mt-6 bg-white text-green-800 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Browse the Collection
        </Link>
      </div>
    </section>
  );
}
