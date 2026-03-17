"use client"

import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { useTheme } from "../contexts/ThemeContext"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = ["Home", "About", "Skills", "Projects", "Education", "Contact"]

  const getLinkHref = (item) => {
    const sectionId = item.toLowerCase()
    if (sectionId === "home") return "/"
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`
  }

  return (
    <nav className="fixed top-4 w-full flex justify-center z-50 px-4">
      {/* Floating Navbar */}
      <div
        className={`flex items-center justify-between w-full max-w-5xl px-6 py-2
        rounded-full
        backdrop-blur-xl
        ${
          theme === "dark"
            ? "bg-black/40 border-white/20 text-white"
            : "bg-white/70 border-gray-200 text-gray-800"
        }
        border
        shadow-lg
        transition-all duration-300`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={getLinkHref(item)}
              className={`font-medium transition-colors duration-200 ${
                theme === "dark"
                  ? "text-white/90 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {item}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all hover:scale-110 ${
              theme === "dark" ? "bg-white/20" : "bg-gray-100"
            }`}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all ${
              theme === "dark" ? "bg-white/20" : "bg-gray-100"
            }`}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-20 w-[90%] max-w-md backdrop-blur-xl border rounded-2xl shadow-xl p-4 md:hidden ${
            theme === "dark"
              ? "bg-black/60 border-white/20"
              : "bg-white/90 border-gray-200"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={getLinkHref(item)}
              className={`block py-2 font-medium ${
                theme === "dark"
                  ? "text-white hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
