import '@/styles/global.css'
import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer } from '@/app/ui/footer'
import { Navbar } from '@/app/ui/navbar'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: {
    default: 'Dzmitry Sviryn',
    template: '%s | Dzmitry Sviryn',
  },
  description:
    'A full-stack developer passionate about React ecosystem, TypeScript and serverless backends.',
  openGraph: {
    title: 'Dzmitry Sviryn',
    description:
      'A full-stack developer passionate about React ecosystem, TypeScript and serverless backends.',
    url: process.env.NEXT_PUBLIC_URL!,
    siteName: 'Dzmitry Sviryn',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Dzmitry Sviryn',
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-gray-950 text-gray-100">
      <body className="antialiased max-w-2xl my-16 flex flex-col mx-6 lg:mx-auto px-2 md:px-0 min-h-lvh">
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}