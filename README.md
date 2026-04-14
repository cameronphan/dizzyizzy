# Dizzy Izzy — Official Website

Built with Next.js 14, hosted on Vercel.

## Stack
- **Framework**: Next.js 14 (App Router)
- **Hosting**: Vercel
- **Domain**: Cloudflare
- **Tickets**: Ticket Tailor (embedded)
- **Forms**: Formspree (requires setup — see below)

---

## How to make edits

All content is in the `src/app/` folder. Each page has its own folder:

| Page | File to edit |
|------|-------------|
| Home | `src/app/page.tsx` |
| Shows | `src/app/shows/page.tsx` |
| Music | `src/app/music/page.tsx` |
| Videos | `src/app/videos/page.tsx` |
| Merch | `src/app/merch/page.tsx` |
| About | `src/app/about/page.tsx` |
| Contact | `src/app/contact/page.tsx` |

After editing any file and pushing to GitHub, Vercel automatically rebuilds and deploys the site within ~30 seconds.

---

## Adding photos

1. Add image files to the `/public/images/` folder in GitHub
2. Reference them in your pages as `/images/your-photo.jpg`

---

## Adding videos (Videos page)

Open `src/app/videos/page.tsx` and add to the `videos` array:

```js
const videos = [
  { id: 'YOUR_YOUTUBE_VIDEO_ID', title: 'Video Title', category: 'Music Video' },
];
```

The video ID is the part after `watch?v=` in a YouTube URL.

---

## Setting up the contact form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form ID (looks like `xpzgkrqb`)
4. Open `src/app/contact/page.tsx`
5. Find `YOUR_FORM_ID` and replace it with your actual ID
6. Push to GitHub — forms will now deliver to your email

---

## Setting up merch (Printful)

1. Set up your store on [printful.com](https://printful.com)
2. Get your embed code from Printful
3. Open `src/app/merch/page.tsx`
4. Replace the placeholder section with your embed code

---

## Colors & fonts

All design tokens are in `src/styles/globals.css` under `:root { }`.

Main colors:
- `--accent-gold: #d4a843` — primary accent
- `--accent-rust: #c4522a` — secondary accent
- `--bg-primary: #0e0d0b` — main background
- `--text-primary: #f0e6cc` — main text

Fonts: Bebas Neue (display), DM Serif Display (serif), DM Sans (body)
