import 'styles/globals.css';
import { font_sans } from 'fonts';
import Footer from 'components/Footer';
import Header from 'components/Header';

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
      <body className='bg-gray-900 text-gray-100'>
        <Header />
        <main
          id='skip'
          className='flex flex-col justify-center px-8 bg-gray-900 min-w-full'
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
