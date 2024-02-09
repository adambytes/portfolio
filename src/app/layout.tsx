import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'

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
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "69d202cc789d4b8cae5130755bb7c5e3"}'
        ></script>
      </head>
      <body data-theme="dark">
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
