import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NexusAI - Transform Your Workflow with Intelligent Automation",
  description:
    "NexusAI is an AI-powered productivity platform that learns your patterns, automates repetitive tasks, and helps you focus on what matters most.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusai.vercel.app",
    title: "NexusAI - Transform Your Workflow with Intelligent Automation",
    description:
      "NexusAI is an AI-powered productivity platform that learns your patterns, automates repetitive tasks, and helps you focus on what matters most.",
    siteName: "NexusAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusAI - Transform Your Workflow with Intelligent Automation",
    description:
      "NexusAI is an AI-powered productivity platform that learns your patterns, automates repetitive tasks, and helps you focus on what matters most.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'