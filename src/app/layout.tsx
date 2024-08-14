import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ReduxProvider from "@/provider/ReduxProvider"
const inter = Inter({ subsets: ["latin"] })
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "OmniBrain",
  description: "Ai chatbot",
  icons: {
    icon: "/omnibrain_logo.png",
  },
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SpeedInsights />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
