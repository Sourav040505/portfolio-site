// api/now-playing.js
// Vercel serverless function — proxies Spotify "Currently Playing" API
// so client secrets never touch the frontend.

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID?.trim();
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET?.trim();
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN?.trim();

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';
const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played?limit=1';

async function getAccessToken() {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });
  
  if (!res.ok) {
    const text = await res.text();
    console.error(`Token endpoint returned status ${res.status}: ${text}`);
    throw new Error(`Spotify token error: ${res.status}`);
  }
  
  return res.json();
}

export default async function handler(req, res) {
  // CORS — allow your frontend origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

    // Try currently playing first
    const npRes = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (npRes.status === 204) {
      // Nothing playing right now, fall back to recently played
      return await handleRecentlyPlayed(access_token, res);
    }

    if (!npRes.ok) {
      const text = await npRes.text();
      console.warn(`Spotify currently-playing returned status ${npRes.status}: ${text}`);
      // If it's a 403 or other subscription/auth error, try recently played, or return fallback
      return await handleRecentlyPlayed(access_token, res);
    }

    const data = await npRes.json();
    const track = data.item;

    if (!track) {
      return await handleRecentlyPlayed(access_token, res);
    }

    return res.status(200).json({
      isPlaying: data.is_playing,
      track: {
        title: track.name,
        artist: track.artists.map((a) => a.name).join(', '),
        album: track.album.name,
        albumArt: track.album.images?.[0]?.url ?? null,
        spotifyUrl: track.external_urls.spotify,
        duration: track.duration_ms,
        progress: data.progress_ms,
      },
    });
  } catch (err) {
    console.error('Spotify API error:', err);
    return res.status(200).json({ 
      isPlaying: false, 
      track: null, 
      error: err.message || 'Failed to fetch Spotify data' 
    });
  }
}

async function handleRecentlyPlayed(accessToken, res) {
  try {
    const rpRes = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    if (!rpRes.ok) {
      const text = await rpRes.text();
      console.warn(`Spotify recently-played returned status ${rpRes.status}: ${text}`);
      return res.status(200).json({ 
        isPlaying: false, 
        track: null, 
        error: `Spotify API status ${rpRes.status}` 
      });
    }

    const rpData = await rpRes.json();
    const track = rpData.items?.[0]?.track;

    if (!track) {
      return res.status(200).json({ isPlaying: false, track: null });
    }

    return res.status(200).json({
      isPlaying: false,
      track: {
        title: track.name,
        artist: track.artists.map((a) => a.name).join(', '),
        album: track.album.name,
        albumArt: track.album.images?.[0]?.url ?? null,
        spotifyUrl: track.external_urls.spotify,
        duration: track.duration_ms,
        progress: 0,
      },
    });
  } catch (e) {
    console.error('Error in recently played fallback:', e);
    return res.status(200).json({ isPlaying: false, track: null });
  }
}
