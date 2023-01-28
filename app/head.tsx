import { NextSeo } from 'next-seo';
import { DEFAULT_SEO } from 'config';

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="svirins.codes rss feed"
        href="/rss.xml"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        name="robots"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          `
        }}
      />
      <NextSeo {...DEFAULT_SEO} useAppDir={true} />
    </>
  );
}
