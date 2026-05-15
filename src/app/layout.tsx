import type { Metadata } from "next"
import { Playfair_Display, Lora } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", display: "swap" })

export const metadata: Metadata = {
  title: "Kopi Langit — Kedai Kopi Premium di Bandung",
  description: "Nikmati secangkir kopi berkualitas dengan suasana hangat dan nyaman di Kopi Langit, Bandung. Reservasi via WhatsApp sekarang.",
  keywords: ["kopi langit", "kedai kopi bandung", "coffee shop bandung", "kopi premium bandung", "cafe bandung"],
  openGraph: { title: "Kopi Langit — Kedai Kopi Premium di Bandung", description: "Nikmati secangkir kopi berkualitas dengan suasana hangat dan nyaman di Kopi Langit, Bandung.", type: "website", locale: "id_ID" },
  twitter: { card: "summary_large_image", title: "Kopi Langit — Kedai Kopi Premium di Bandung", description: "Nikmati secangkir kopi berkualitas dengan suasana hangat dan nyaman di Kopi Langit, Bandung." },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${lora.variable}`}>
      <body className="min-h-screen bg-coffee-950 text-cream-100 font-body">{children}</body>
    </html>
  )
}
