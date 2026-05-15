"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Coffee, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#profil", label: "Profil" },
  { href: "#menu", label: "Menu" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-coffee-950/95 backdrop-blur-md shadow-lg border-b border-coffee-800/50" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-coffee-700 flex items-center justify-center group-hover:bg-coffee-600 transition-colors">
                <Coffee className="w-5 h-5 text-cream-100" />
              </div>
              <span className="font-display text-xl md:text-2xl font-bold text-cream-100 tracking-tight">Kopi Langit</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-cream-300 hover:text-cream-100 text-sm font-medium transition-colors relative group">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <a href="https://wa.me/6281234567890?text=Halo%20Kopi%20Langit%2C%20saya%20mau%20reservasi%20meja" target="_blank" rel="noopener noreferrer"
                className="bg-coffee-600 hover:bg-coffee-500 text-cream-100 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95">
                Reservasi
              </a>
            </nav>

            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-cream-100 hover:bg-coffee-800 rounded-lg transition-colors" aria-label="Toggle menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-coffee-950/98 backdrop-blur-lg pt-20">
            <nav className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.a key={link.href} href={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)} className="text-cream-100 text-2xl font-display font-semibold hover:text-coffee-400 transition-colors">
                  {link.label}
                </motion.a>
              ))}
              <motion.a href="https://wa.me/6281234567890?text=Halo%20Kopi%20Langit%2C%20saya%20mau%20reservasi%20meja" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="mt-4 bg-coffee-600 text-cream-100 px-8 py-3 rounded-full text-lg font-semibold">
                Reservasi via WhatsApp
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
