// src/components/Layout.jsx
import { Leaf, Mail, Instagram, Facebook } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { createPageUrl } from "../utils/createPageUrl"
import { ShoppingBag } from "lucide-react";   // ← add this line

export default function Layout({ children, currentPageName }) {
  const location = useLocation()

  const navLinks = [
    { name: "Home", page: "Home", color: "green" },
    { name: "Products", page: "Products", color: "purple" },
    { name: "About", page: "About", color: "blue" },
    { name: "Contact", page: "Contact", color: "green" },
    { name: <ShoppingBag className="w-5 h-5 inline-block" />, page: "Cart", color: "blue" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-2 z-20 bg-white/90 shadow-lg mx-2 mt-1 mb-1 rounded-[25px]">
        <div className="max-w-8xl mx-auto px-1 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="clay-element bg-gradient-to-br from-green-200 to-purple-200 p-3">
                <Leaf className="w-6 h-6 text-green-700 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-purple-700 bg-clip-text text-transparent">
                  Elderwoods Tea
                </h1>
                <p className="text-xs text-gray-600 -mt-1">
                  Organic Freeze‑Dried Teas &amp; Herbs
                </p>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link to={createPageUrl(link.page)} key={link.page}>
                  <button
                    className={`clay-button px-6 py-2 ${
                      location.pathname === createPageUrl(link.page)
                        ? `bg-${link.color}-100 text-${link.color}-700`
                        : "bg-white/50 hover:bg-green-50"
                    }`}
                  >
                    {link.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 min-h-screen px-1">{children}</main>

      {/* Footer */}
      <footer className="clay-element bg-white/60 backdrop-blur-sm mx-4 mt-16 mb-4">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="clay-element bg-gradient-to-br from-green-200 to-purple-200 p-2">
                  <Leaf className="w-5 h-5 text-green-700" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-700 to-purple-700 bg-clip-text text-transparent">
                  Elderwoods Tea
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium freeze‑dried organic herbs, grown with love and preserved with care for your culinary adventures.
              </p>
            </div>

            {/* Quick links column */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    to={createPageUrl(link.page)}
                    className="block text-gray-600 hover:text-green-700 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social column */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Connect With Us</h4>
              <div className="flex gap-3">
                <a href="#" className="clay-button bg-green-100 hover:bg-green-200 p-3 block">
                  <Instagram className="w-4 h-4 text-green-700" />
                </a>
                <a href="#" className="clay-button bg-blue-100 hover:bg-blue-200 p-3 block">
                  <Facebook className="w-4 h-4 text-blue-700" />
                </a>
                <Link to={createPageUrl("Contact")} className="clay-button bg-purple-100 hover:bg-purple-200 p-3 block">
                  <Mail className="w-4 h-4 text-purple-700" />
                </Link>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                © 2024 Elderwoods Tea. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
