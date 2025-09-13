// src/app/layout.js - Add Google Fonts
import { Playfair_Display, Inter, Montserrat } from 'next/font/google'
import './globals.css'

// Configure fonts
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'A Room of My Own - Photography Portfolio',
  description: 'Personal photography portfolio and travel stories',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}