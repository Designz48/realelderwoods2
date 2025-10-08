// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Heart } from "lucide-react";
import { createPageUrl } from "../utils/createPageUrl";

import TwoColumn from "../components/ui/twocolumn";          // ← your two‑column component
import ImageSlideshow from "../components/ui/imageslideshow"; // ← carousel component

/* -----------------------------------------------------------------
   Tiny fallback Button component (replace with your own shared button)
   ----------------------------------------------------------------- */
const Button = ({ children, className, ...rest }) => (
  <button className={`clay-button ${className}`} {...rest}>
    {children}
  </button>
);

/* -----------------------------------------------------------------
   Image URLs for the Yaupon carousel – they must live in
   public/images/ (e.g. public/images/yaupon-1.jpg)
   ----------------------------------------------------------------- */
const yauponImages = [
  "/mint3.jpeg",
  "/Elderwoods Tea Yaupon, Elderberry, Hibiscus.jpg",
  "/freezedryer.jpeg",
];

const yauponImages2 = [
  "/mint2.jpeg",
  "/mint1",
];

export default function Home() {
  return (
    <div>
      {/* ==================== HERO / CALL‑TO‑ACTION ==================== */}
      <section className="backdrop-blur-sm py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
          {/* ----- Left column – text & CTAs ----- */}
          <div className="w-full md:w-1/2 space-y-8 text-left">
            {/* Gradient heading */}
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-700 to-green-700 bg-clip-text text-transparent md:text-5x1">
                Pure Herbs,
              </span>
              <br />
              <span className="text-3xl md:text-5xl font-bold text-gray-800">
                Perfect Flavor
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl">
              Make a cup of natural tea or a culinary treat with our
              quality freeze‑dried herbs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Shop Now */}
              <Link to={createPageUrl("Products")}>
                <Button className="bg-green-100 text-green-800 px-8 py-3 text-lg font-medium w-full sm:w-auto rounded hover:bg-green-700 hover:text-white transition">
                  <ShoppingBag className="w-5 h-5 mr-2 inline-block" />
                  Shop Now
                </Button>
              </Link>

              {/* Our Story */}
              <Link to={createPageUrl("About")}>
                <Button className="bg-white text-gray-700 px-8 py-3 text-lg w-full sm:w-auto rounded hover:bg-gray-100 transition">
                  <Heart className="w-5 h-5 mr-2 inline-block" />
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
          {/* ----- Right column – image placeholder ----- */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-end">
            <div className="w-45 h-45 bg-mint-200 flex items-center justify-center text-gray-500 rounded-lg shadow-sm">
	<ImageSlideshow className="w-[600px] h-[725px]" images={yauponImages} interval={5000} />
            </div>
          </div>
        </div>
      </section>



			{/* ==================== SECOND TWO‑COLUMN BLOCK ====================
          Image slideshow (carousel) on the right side
      =============================================================== */}
      <TwoColumn
        leftContent={<ImageSlideshow images={yauponImages2} interval={5000} />
                  }
        rightContent={  <>
            <h2 className="text-3xl font-bold mb-4">Grown good</h2>
            <p className="text-gray-700">
              Using organic seeds, soil, and rainwater in raised beds, our herbs are 100% natural and ready-to-eat. By harvesting the leaves and flowers early morning, rinse thoroughly, and freeze immediately, we preserve as much moisture and essential oils from the herbs-- giving you peak flavor.
	    </p> <br />
	    <p className="text-gray-700">
              After freezing, we take the leaves into freezedryer trays where they suck water out at and below 150 degrees without damaging the molecules as dyhydrating does.
            </p><br />
	    <p className="text-gray-700">
              Finally, we take the freezedried leaves and store them in Mylar bags, the most effective at keeping moisture out. However, you needn't worry if bags are left open for awhile since most of our herbs don't accumulate moisture as quickly as others-- like tomatoes. At last, and in only 5 steps, it's your turn to brew these fresh herbs into tea or your favorite treat!
            </p>

          </>
   }
      />
<br /><br /><br />
{/* ==================== FIRST TWO‑COLUMN BLOCK ====================
          Static image (teabox.gif) on the right side
      =============================================================== */}
      <TwoColumn
        leftContent={
          <>
            <h2 className="text-3xl font-bold mb-4 text-center">Try Yaupon</h2>
            <p className="text-gray-700 text-center">
              Unique packaging, for a unique tea. Yaupon is an indigenous North
              American caffeinated tea that gives a little kick without the buzz.
              It has antioxidants and is a healthy alternative to coffee. As part
              of our original Yaupon dehydrated tea stock, these containers are
              simple to <br /> open, stack, and store.
            </p> <br />
	<div className="flex flex-col gap-4">
      	      <Link to={createPageUrl("Products")}>
                <Button className="items-center bg-green-100 text-orange-800 px-8 py-3 text-lg font-medium w-full sm:w-auto rounded hover:bg-orange-700 hover:text-white transition">
		Buy Yaupon
                </Button>
              </Link>
	</div>

          </>
        }
        rightContent={
          <img
            src="/teabox.gif"
            alt="Teabox illustration"
            className="w-full h-full object-cover rounded-lg"
          />

        }
	   /><br /><br /><br /><br />
<div>
	<h1>Want to know more?</h1>
	<p>We have our own blog that describes the ins-&-outs of what makes our tea brand different.<br />Including how freezedrying preserves both flavor and nutrition, why peppermint is an <br /> underrated super tea for more than an upset stomach, and more tea where that came from!</p>
</div>





     </div>
  );
}
