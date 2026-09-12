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
