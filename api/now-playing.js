// api/now-playing.js
// Vercel serverless function — proxies Last.fm API
// so client credentials never touch the frontend.

const API_KEY = process.env.LASTFM_API_KEY?.trim();
const USERNAME = process.env.LASTFM_USERNAME?.trim();

export default async function handler(req, res) {
  // CORS — allow your frontend origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (!API_KEY || !USERNAME) {
    return res.status(200).json({
      isPlaying: false,
      track: null,
      error: 'Last.fm API key or username is not configured',
    });
  }

  try {
    const response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
    );

    if (!response.ok) {
      throw new Error(`Last.fm API returned status ${response.status}`);
    }

    const data = await response.json();
    const track = data.recenttracks?.track?.[0];

    if (!track) {
      return res.status(200).json({ isPlaying: false, track: null });
    }

    // Check if the track is currently playing
    const isPlaying = track['@attr']?.nowplaying === 'true';

    // Get the largest image available
    const images = track.image || [];
    const albumArt = images[images.length - 1]?.['#text'] || null;

    return res.status(200).json({
      isPlaying,
      track: {
        title: track.name,
        artist: track.artist?.['#text'] || 'Unknown Artist',
        album: track.album?.['#text'] || 'Unknown Album',
        albumArt,
        spotifyUrl: track.url || 'https://www.last.fm',
        duration: 0, // Last.fm does not return duration for recent tracks
        progress: 0,
      },
    });
  } catch (err) {
    console.error('Last.fm API error:', err);
    return res.status(200).json({
      isPlaying: false,
      track: null,
      error: err.message || 'Failed to fetch Last.fm data',
    });
  }
}
