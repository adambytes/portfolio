import Script from 'next/script'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

export default function Analytics() {
  return (
    <>
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "69d202cc789d4b8cae5130755bb7c5e3"}'
      />
      <VercelAnalytics />
    </>
  )
}
