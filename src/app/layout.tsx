import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import Analytics from '../components/Analytics/index'

const Switch = dynamic(() => import('@/components/Switch'))

export const metadata: Metadata = {
  title: 'Adam Liang',
  description: 'Everyones favorite software engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body data-theme="dark">
        <div className="flex flex-col h-screen">
          <Suspense fallback={<Loading />}>
            <Switch className="mt-8 self-center" />
          </Suspense>
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  )
}
