import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "FoodPwa - Lightweight Food Delivery App",
    description: "Order food from your favorite restaurants",
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
            <div className="min-h-screen bg-background">{children}</div>
        </ThemeProvider>
        </body>
        </html>
    )
}

