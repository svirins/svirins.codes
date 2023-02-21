import 'styles/globals.css';
import { font_sans } from 'fonts';
import Footer from 'components/Footer';
import Header from 'components/Header';
// import Providers from 'components/Providers';
import { AnalyticsWrapper } from 'components/AnalyticsWrapper';
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
        {/* <Providers> */}
          <Header />
          <main
            id='skip'
            className='flex flex-col justify-center px-6 bg-gray-900 min-w-full'
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
