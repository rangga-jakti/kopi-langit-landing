"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <motion.a href="https://wa.me/6281234567890?text=Halo%20Kopi%20Langit%2C%20saya%20mau%20reservasi%20meja" target="_blank" rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-600 hover:bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors" aria-label="Chat WhatsApp">
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">1</span>
    </motion.a>
  )
}
