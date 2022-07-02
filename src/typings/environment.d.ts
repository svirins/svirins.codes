declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SANITY_DATASET: 'development';
      NEXT_PUBLIC_SANITY_PROJECT_ID: string;
      NODE_ENV: 'development' | 'production';
      VERCEL_ENV: 'development' | 'production';
      SANITY_API_TOKEN: string;
      SANITY_PREVIEW_SECRET: string;
      SANITY_STUDIO_REVALIDATE_SECRET: string;
      NEXT_PUBLIC_LOGFLARE_KEY: string;
      NEXT_PUBLIC_LOGFLARE_TOKEN: string;
      NEXT_PUBLIC_PANELBEAR_SITE_ID: string;
      NEXT_PUBLIC_PRODUCTION_SITE_URL: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REFRESH_TOKEN: string;
    }
  }
}

export {};