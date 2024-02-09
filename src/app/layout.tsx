import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import Cursor from '@/components/Cursor'

const Switch = dynamic(() => import('@/components/Switch'))

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adam Liang',
  description: "Adam Liang's personal website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body data-theme="dark">
        <Cursor />
        <div className="flex flex-col h-screen">
          <Suspense fallback={<Loading />}>
            <Switch className="mt-8 self-center" />
          </Suspense>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
