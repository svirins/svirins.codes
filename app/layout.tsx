'use client';
import 'styles/globals.css';
import { font_sans, font_mono } from 'fonts';
import Footer from 'components/Footer';
import Header from 'components/Header';

// TODO: Move mono font to snippets layout

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning={true}
      className={`${font_sans.variable} ${font_mono.variable}`}
    >
      <head />
      <body className='bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
        <Header />
        <main
          id='skip'
          className='flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900'
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
