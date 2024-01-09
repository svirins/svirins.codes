import '@/styles/global.css';
import type { Metadata } from 'next';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/app/ui/footer';
import { Navbar } from '@/app/ui/navbar';
import { PreloadResources } from '@/app/preload';

export const metadata: Metadata = {
  metadataBase: new URL('https://svirins.codes'),
  title: {
    default: 'Dzmitry Sviryn',
    template: '%s | Dzmitry Sviryn'
  },
  description:
    'A full-stack developer passionate about React ecosystem, TypeScript and serverless backends.',
  openGraph: {
    title: 'Dzmitry Sviryn',
    description:
      'A full-stack developer passionate about React ecosystem, TypeScript and serverless backends.',
    url: 'https://svirins.codes',
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
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100">
      <body className="antialiased max-w-2xl my-16 flex-col md:flex-row mx-4 lg:mx-auto">
        <main
          className="flex-auto min-w-0 flex flex-col px-2 md:px-0"
        >
          <Navbar />
          {children}
          <Footer />
        </main>
        <Analytics />
        <SpeedInsights />
        <PreloadResources />
      </body>
    </html>
  );
}
