# Dizzy Izzy — Official Website

## How to update the site
Edit any file → GitHub Desktop commit & push → Vercel auto-deploys in ~30 seconds.

## Adding videos
Open `src/app/videos/page.tsx` and add to the `videos` array:
```js
{ id: 'YOUTUBE_VIDEO_ID', title: 'Song Name', category: 'Music Video' }
```

## Adding photos
Drop files into `public/photos/` and reference them as `/photos/filename.jpg`

## Setting up the contact form
1. Go to formspree.io → free account → create form → copy ID
2. Open `src/app/contact/page.tsx`
3. Replace `YOUR_FORM_ID` with your actual ID

## Setting up merch
1. Set up Printful store → get embed code
2. Open `src/app/merch/page.tsx` → replace placeholder with embed code

## Colors
Edit `src/styles/globals.css` → `:root` section
- `--purple: #9b6dff` main accent
- `--black: #060508` background
- `--cream: #f0eaf8` text
