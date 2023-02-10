import { wrapApiHandlerWithSentry } from '@sentry/nextjs';
import getNowPlaying from 'lib/spotify-api';
interface ICurrentlyPlaying {
  songUrl?: string;
  artist?: string;
  title?: string;
  isPlaying: boolean;
}
export const config = {
  runtime: 'edge'
};

async function handler(): Promise<ICurrentlyPlaying | Response> {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  const song = await response.json();
  if (song.item === null) {
    return new Response(JSON.stringify({ isPlaying: false }), {
      status: 200,
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  const title = song.item.name;
  const artist = song.item.artists
    .map((_artist: { name: string }) => _artist.name)
    .join(', ');
  const songUrl = song.item.external_urls.spotify;
  return new Response(
    JSON.stringify({
      artist,
      songUrl,
      title,
      isPlaying: true
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    }
  );
}

export default wrapApiHandlerWithSentry(handler);
