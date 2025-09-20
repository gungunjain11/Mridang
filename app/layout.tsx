import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ChatbotTrigger } from "@/components/chat/chatbot-trigger"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mridang - AI-Powered Marketplace for Indian Artisans",
  description:
    "Discover authentic Indian crafts and connect with local artisans. Empowering traditional craftsmanship through modern technology.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ChatbotTrigger />
        <Analytics />
      </body>
    </html>
  )
}
