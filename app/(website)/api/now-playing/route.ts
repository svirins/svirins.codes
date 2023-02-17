// import { wrapApiHandlerWithSentry } from '@sentry/nextjs';
import { NextResponse } from 'next/server';

export const runtime = 'experimental-edge';
export const revalidate = 10;

import getNowPlaying from 'lib/spotify-api';

export async function GET(request: Request): Promise<NextResponse> {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false, isError: true });
  }

  const song = await response.json();
  if (song.item === null) {
    return NextResponse.json({ isPlaying: false, isError: false });
  }

  const title = song.item.name as string;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ') as string;
  const songUrl = song.item.external_urls.spotify as string;

  return NextResponse.json({
    artist,
    songUrl,
    title,
    isPlaying: true,
    isError: false
  });
}
