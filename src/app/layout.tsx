import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
          <SpeedInsights />
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "69d202cc789d4b8cae5130755bb7c5e3"}'
          />
        </div>
      </body>
    </html>
  )
}
