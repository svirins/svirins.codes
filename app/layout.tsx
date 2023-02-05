'use client';
import 'styles/globals.css';
import { font_sans } from 'fonts';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { ServerThemeProvider } from '@wits/next-themes';

// TODO: Move mono font to snippets layout

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute='class'>
      <html
        lang='en'
        suppressHydrationWarning={true}
        className={`${font_sans.variable}`}
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
    </ServerThemeProvider>
  );
}
