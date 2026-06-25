const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';

async function getAccessToken() {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
    body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token }),
  });
  if (!res.ok) throw new Error('Token refresh failed');
  const data = await res.json();
  return data.access_token;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=60');

  if (!client_id || !client_secret || !refresh_token) {
    return res.status(503).json({ error: 'Spotify not configured' });
  }

  try {
    const access_token = await getAccessToken();
    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false, title: 'Not playing', artist: '' });
    }

    const song = await response.json();
    const { item, is_playing: isPlaying } = song;
    const progress = item?.duration_ms
      ? Math.round(((song.progress_ms ?? 0) / item.duration_ms) * 100)
      : 0;

    return res.status(200).json({
      isPlaying,
      title: item?.name ?? 'Unknown',
      artist: item?.artists?.map((a) => a.name).join(', ') ?? '',
      albumImageUrl: item?.album?.images?.[0]?.url ?? null,
      songUrl: item?.external_urls?.spotify ?? null,
      progress,
    });
  } catch {
    return res.status(500).json({ error: 'Spotify fetch failed' });
  }
}
