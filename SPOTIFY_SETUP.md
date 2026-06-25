# Spotify "Now Playing" Setup

Follow these steps to show your real Spotify track on the portfolio.

## 1. Create a Spotify Developer App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create an app → note **Client ID** and **Client Secret**
3. Edit Settings → add Redirect URI: `http://localhost:3000/callback` (for token generation)

## 2. Get a Refresh Token

Use Spotify's Authorization Code flow with scope `user-read-currently-playing`:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/callback&scope=user-read-currently-playing
```

After login, exchange the code for tokens (use Postman or curl). Save the **refresh token** — it doesn't expire unless revoked.

## 3. Add Environment Variables (Vercel)

In your Vercel project → Settings → Environment Variables:

| Variable | Value |
|---|---|
| `SPOTIFY_CLIENT_ID` | Your Client ID |
| `SPOTIFY_CLIENT_SECRET` | Your Client Secret |
| `SPOTIFY_REFRESH_TOKEN` | Your refresh token |

## 4. Deploy

The API route lives at `api/spotify-now-playing.js`. After deploying to Vercel, the System Monitor widget will fetch live data automatically.

## Local testing

Run `npx vercel dev` to test the API locally with env vars loaded.

Without setup, the widget shows "Not connected" — the rest of the site works fine.
