# Instagram post renderer

Renders the PNGs in `../` at Instagram's native sizes — feed posts 1080×1350,
stories 1080×1920 — using the site's own Recoleta and Poppins files so the posts
match banjarahub.com exactly. Poppins Medium carries the Devanagari glyphs, so the
Hindi lines render in the brand font too.

## Regenerate

```
npm i playwright
node render.js
```

The script needs `recoleta_bold.ttf`, `poppins_medium.ttf` and `logo.png` beside it —
copy them in from the repo root first:

```
cp ../../../{recoleta_bold.ttf,poppins_medium.ttf,logo.png} .
```

It prints `rendered/height` per post and flags any post whose text overflows its frame.

## Edit a post

`posts.js` holds one entry per post: the file name, the size (`feed` or `story`),
the background (`g-maroon`, `g-cream`, `g-dark`, `g-indigo`) and the body markup.
`base.css` holds the shared type scale, the abhla (mirror) dot field and the
diamond band. Change the copy in `posts.js`, re-run, check the overflow column.

## Grid order

Posts 01–10 are sequenced so the profile grid alternates maroon → cream → maroon.
Post them in order and the grid composes itself.

## App-screen posts (11–15)

Posts 11–15 show the real product UI. The phone mockups and screen CSS in `app.css`
are lifted verbatim from `index.html` — the same `.phone`, `.screen-profile`,
`.screen-explore` and iOS messages markup the website renders — so the posts and the
site can never drift apart. `appposts.js` holds the screen markup; `render-app.js`
renders them and warns if a phone runs into the footer lockup.

When the real app UI changes, update the mockups in `index.html` first, then re-run
the extraction so the posts follow.

## Promo assets

`promo.js` / `promo.css` / `render-promo.js` render everything in `docs/promo/` —
A4 posters at 300dpi, WhatsApp status frames, square ads, Facebook cover, link-share
image and the Play Store feature graphic. `qr.png` is a high-error-correction QR for
https://banjarahub.com, the same URL the website's own QR codes encode.

## R-series — posts built on the real app (use these)

`realposts.js` / `real.css` render `R1`–`R6`, matching the product as it actually
ships: the `banjaraHub` wordmark, the credits model, Browse by Profession / State,
and the bottom nav (Home · Matches · Messages · Profile). The pastel feature-card
system, the corner badge and the Play Store badge follow the brand's existing
creative. `caravan.png` is the Jai Sevalal footer band taken from that creative.

The real app's feature set, as shown on the home screen:
Government ID verified profiles · screenshot blocked · personal info protected ·
women register free · no subscription, credits that don't expire · more filters ·
Marathi, Kannada and Telugu · Google Play.

Posts 11–15 were built from the phone mockups in `index.html`, which do NOT match
the shipped app (they show a Bazar tab and a 3-in-1 layout the app's nav does not
have). Treat 11–15 as unusable until the website mockups are reconciled with the
product.
