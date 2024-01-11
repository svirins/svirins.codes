export const getAccessToken = async () => {
  const basic = btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)
  try {
    const tokenResponse = await fetch(process.env.SPOTIFY_TOKEN_ENDPOINT!, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
      }),
    })
    return tokenResponse.json()
  } catch (e) {
    console.log(e)
    return {
      status: 'error',
    }
  }
}

interface IcurrentlyPlaying {
  is_playing: boolean
  title?: string
  artist?: string
  songUrl?: string
}

export const getNowPlaying = async (): Promise<IcurrentlyPlaying | undefined> => {
  try {
    const { access_token } = await getAccessToken()
    const spotifyResponse = await fetch(process.env.SPOTIFY_NOW_PLAYING_ENDPOINT!, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      next: { revalidate: 1 },
      // cache: 'no-cache'
    })
    console.log('Spotify response is: ', spotifyResponse)
    const data = await spotifyResponse.json()
    console.log('Spotify data is: ', data)

    if (data.error?.status || data?.is_playing === false) {
      return {
        is_playing: false,
      }
    }
    const title = data?.item.name
    const artist = data?.item.artists.map((_artist: { name: string }) => _artist.name).join(', ')
    const songUrl = data?.item.external_urls.spotify
    return {
      title,
      artist,
      songUrl,
      is_playing: data.is_playing,
    }
  } catch (e) {
    if (e instanceof Error) {
      console.log('An error occurs!: ', e.message)
    } else {
      console.log('Unknown error')
      return { is_playing: false }
    }
  }
}
