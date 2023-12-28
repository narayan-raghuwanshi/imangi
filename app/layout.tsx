import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { cn } from '@/lib/utils'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Necleo',
  description: 'Dashboard for Necloe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(
          "min-h-screen bg-[#f5F5F5] font-sans antialiased",
          fontSans.variable
        )}>
          <nav>
            <Navbar />
            <Sidebar />
          </nav>
          <main className='flex justify-center items-center'>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
