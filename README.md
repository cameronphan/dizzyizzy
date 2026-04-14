# Dizzy Izzy — Official Website

## How to update
Edit file → GitHub Desktop commit & push → live in ~30 seconds.

## Adding videos
No videos page currently. When ready, ask Claude to add one.

## Adding photos
Drop files into `public/photos/` — reference as `/photos/filename.jpg`

## Contact form (Formspree)
1. formspree.io → free account → create form → copy ID
2. Open `src/app/contact/page.tsx` → replace `YOUR_FORM_ID`

## Email list
Currently disabled (Coming Soon). When ready, replace the disabled input in `src/app/page.tsx` email section with a working Mailchimp or Formspree embed.

## Merch (Printful)
Open `src/app/page.tsx` → find the merch placeholder section → replace with Printful embed.

## Colors
`src/styles/globals.css` → `:root`
- `--purple: #9b6dff`
- `--black: #06050a`
- `--cream: #ede8f5`
