import 'styles/globals.css';
import { font_sans } from 'fonts';
import Footer from 'components/Footer';
import Header from 'components/Header';
import type { Metadata } from 'next';

// import Providers from 'components/Providers';
import { AnalyticsWrapper } from 'components/AnalyticsWrapper';

export const metadata: Metadata = {
  title: {
    default: 'Dzmitry Sviryn',
    template: '%s | Dzmitry Sviryn'
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Dzmitry Sviryn',
    description: 'Full-stack developer passionate about Next.js.',
    url: 'https://svirins.codes',
    siteName: 'Dzmitry Sviryn',
    images: [
      {
        url: 'https://www.svirins.codes/social-banner.webp',
        width: 1200,
        height: 675,
        alt: 'My cat and my gear',
        type: 'image/webp'
      }
    ],
    locale: 'en-US',
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
  },
  icons: {
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
      className={`${font_sans.variable}`}
    >
      <head />
      <body className='bg-gray-900 text-gray-100 antialiased'>
        {/* <Providers> */}
        <Header />
        <main
          id='skip'
          className='flex flex-col justify-center px-6 min-w-full'
        >
          {children}
          <AnalyticsWrapper />
        </main>
        <Footer />
        {/* </Providers> */}
      </body>
    </html>
  );
}
