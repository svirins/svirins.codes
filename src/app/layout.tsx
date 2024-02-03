import '@/styles/global.css'

import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  title: {
    default: 'Dzmitry Sviryn',
    template: '%s | Dzmitry Sviryn'
  },
  description:
    'Full-stack developer with a passion for the Next.js, TypeScript and databases.',
  openGraph: {
    title: 'Dzmitry Sviryn',
    description:
      'Full-stack developer with a passion for the Next.js, TypeScript and databases.',
    url: process.env.NEXT_PUBLIC_URL!,
    siteName: 'Dzmitry Sviryn',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: 'Dzmitry Sviryn',
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en" suppressHydrationWarning>
    <html lang="en">
      <body className="my-8  min-h-lvh max-w-2xl  bg-gray-900 px-6 text-gray-300 md:px-0 mx-auto">
        <main className="flex flex-col h-dvh">
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
