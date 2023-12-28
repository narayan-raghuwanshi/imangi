import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const font = Inter({ subsets: ['latin'] });

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
        <body  className={font.className}>
          <Navbar />
          <Sidebar />
          <main className='flex justify-center items-center'>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
