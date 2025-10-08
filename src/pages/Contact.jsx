// src/pages/Contact.jsx
import { Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { createPageUrl } from "../utils/createPageUrl" 

export default function Contact() {
  return (
    <section className="clay-element p-8 max-w-2xl mx-auto my-12">
      <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lavender-700 to-mint-700">
        Get in Touch
      </h1>

      <div className="space-y-4 items-center text-center flex flex-col items-center justify-center items-center">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-lavender-700" />
          <span className="text-gray-800">elderwoodstea@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-lavender-700" />
          <span className="text-gray-800">PO Box 1887 Pittsboro NC. 27312</span>
        </div>
      </div>

      <Link
        to={createPageUrl("Home")}
        className="clay-button mt-8 inline-block bg-lavender-200 hover:bg-lavender-300"
      >
        Back to Home
      </Link>
    </section>
  )
}
