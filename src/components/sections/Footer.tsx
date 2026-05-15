"use client"

import { Coffee, MapPin, Phone, Clock, Instagram, Facebook, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-coffee-950 border-t border-coffee-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-coffee-700 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-cream-100" />
              </div>
              <span className="font-display text-xl font-bold text-cream-100">Kopi Langit</span>
            </a>
            <p className="text-cream-300/60 text-sm leading-relaxed mb-6">Kedai kopi premium di Bandung dengan biji pilihan dan suasana hangat. Datang sebagai tamu, pulang sebagai keluarga.</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/kopilangit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-coffee-800/50 hover:bg-coffee-700/50 rounded-lg flex items-center justify-center text-cream-300 hover:text-cream-100 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/kopilangit" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-coffee-800/50 hover:bg-coffee-700/50 rounded-lg flex items-center justify-center text-cream-300 hover:text-cream-100 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-cream-100 mb-4">Navigasi</h3>
            <ul className="space-y-3">
              {[{ href: "#profil", label: "Profil Kedai" }, { href: "#menu", label: "Menu Unggulan" }, { href: "#lokasi", label: "Lokasi & Jam Buka" }, { href: "#faq", label: "FAQ" }].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream-300/60 hover:text-coffee-400 text-sm transition-colors inline-flex items-center gap-1 group">
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />{link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-cream-100 mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coffee-400 shrink-0 mt-0.5" />
                <span className="text-cream-300/60 text-sm">Jl. Babakan No.36a<br />Bandung, Jawa Barat 40191</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-coffee-400 shrink-0" />
                <a href="tel:+6281234567890" className="text-cream-300/60 hover:text-coffee-400 text-sm transition-colors">0812-3456-7890</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-coffee-400 shrink-0 mt-0.5" />
                <span className="text-cream-300/60 text-sm">Selasa — Minggu<br />08.00 — 19.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-coffee-800/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream-400/40 text-sm">© 2024 Kopi Langit. All rights reserved.</p>
          <p className="text-cream-400/40 text-sm">Dibuat dengan ☕ di Bandung</p>
        </div>
      </div>
    </footer>
  )
}
