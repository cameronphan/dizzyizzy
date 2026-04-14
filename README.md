# Dizzy Izzy — Official Website

Built with Next.js 15, hosted on Vercel, domain on Cloudflare.

## Tech Stack
- **Framework**: Next.js 15 (App Router, TypeScript)
- **Fonts**: Anton (poster titles), Cormorant Garamond (serif), Space Mono (body/mono)
- **Icons**: Custom SVG components in `src/components/Icons.tsx`
- **Hosting**: Vercel (auto-deploys on GitHub push)
- **Tickets**: Ticket Tailor box office embed (Shows page)
- **Forms**: Formspree (requires setup — see below)

---

## Editing content

| Page    | File                              |
|---------|-----------------------------------|
| Home    | `src/app/page.tsx`                |
| Shows   | `src/app/shows/page.tsx`          |
| Music   | `src/app/music/page.tsx`          |
| Videos  | `src/app/videos/page.tsx`         |
| Merch   | `src/app/merch/page.tsx`          |
| About   | `src/app/about/page.tsx`          |
| Contact | `src/app/contact/page.tsx`        |

Edit any file → GitHub Desktop commit & push → Vercel auto-deploys in ~30 seconds.

---

## Adding your photos

1. Add image files to `/public/images/` in GitHub
2. In the page file, find the `photoPlaceholder` div and replace with:
   ```jsx
   <img src="/images/your-photo.jpg" alt="Dizzy Izzy" className={styles.photo} />
   ```

---

## Adding videos (Videos page)

Open `src/app/videos/page.tsx` and add to the `videos` array:
```js
const videos = [
  { id: 'YOUTUBE_VIDEO_ID', title: 'Song Name', category: 'Music Video' },
];
```
The video ID is the part after `?v=` in a YouTube URL.

---

## Setting up the contact form (Formspree — free)

1. Go to formspree.io → create a free account
2. Create a new form → copy your Form ID (e.g. `xpzgkrqb`)
3. Open `src/app/contact/page.tsx`
4. Find `YOUR_FORM_ID` and replace it with your ID
5. Push to GitHub — forms now deliver to your email

---

## Adding merch (Printful)

1. Set up your Printful store
2. Get the embed code from Printful dashboard
3. Open `src/app/merch/page.tsx`
4. Replace the placeholder section with the embed code

---

## Colors & design tokens

All colors are in `src/styles/globals.css` under `:root {}`:

```css
--purple: #9b6dff       /* main accent */
--black:  #06050f       /* background */
--cream:  #ede8f5       /* text */
```

---

## Ticker text

Edit the items array in `src/components/Ticker.tsx` to change the scrolling text.
