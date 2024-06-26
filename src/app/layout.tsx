import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ReduxProvider from "@/provider/ReduxProvider"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "OmniBrain",
  description: "Ai chatbot",
  icons: {
    icon: "/omnibrain_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
