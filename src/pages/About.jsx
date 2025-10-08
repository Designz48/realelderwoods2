// src/pages/About.jsx
import { Link } from "react-router-dom"
import { Leaf } from "lucide-react"
import { createPageUrl } from "../utils/createPageUrl"

export default function About() {
  return (
<section className="p-8 flex flex-col items-center justify-center items-center max-w-6x1 mx-auto my-12"> 
      <img class="shadow-lg w-full h-96 max-w-screen-md object-cover rounded-lg" src="mint1" alt="Descriptive Alt Text" /> <br /><br />
      <div className="flex gap-4 mb-6">
        <div className="clay-element bg-gradient-to-br from-mint-200 to-lavender-200 p-2">
	<Leaf className="w-6 h-6 text-mint-700" />
        </div>

        <h1 className="text-3xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-mint-700 to-lavender-700">
          How we began 
        </h1>
      </div>
      
           
      <p className="text-gray-700 mb-10">
        After a productive few years selling fresh farm products at Biofarm, one of our passionate employees discovered her love for creating unique, earthy-inspired blends. Having been drinking Yaopon- a caffinated tea, she decided to try out a side adventure that blossomed into Elderwoods that became our very own offshoot from Biofarm, where we grew all the herbs for her creations!
		<br /> <br /> 
	Even though we faced some bumps along the road, including drinking coffee and re-locating our farm- leading to several years of files sitting on an old hard drive, our family farm decided to reignite our passion for tea. Having now bought our exciting addition to tea-making, the freezedryer, we've been able to bring our former employee's vision back to life! We're happy to offer you a selection of delicious, pesticide-free non-gmo herbs, carefully picked from ingredients grown on our farm. After having health complications with coffee and having now made a calculated switch to teas, we hope you'll join us in the change to better health!
			</p>

      <p className="text-gray-700">
        We grow mint, lavender, rosemary, and a variety of seasonal herbs on our organic
        farm in the Atlantic North East. Each batch is harvested in the morning to maintain tenderness, washed, frozen immediately,
        and freezedried to retain aroma, color, and nutritional value.
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
