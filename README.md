# What's That Part?

Mobile web guessing game. A zoomed-in close-up of a part appears; guess it, tap to reveal the name and what it does, tap again for the next one.

Play: https://abcdmku.github.io/part-guess/

## Adding parts

Everything lives in `items.js`. Each entry is one isolated photo in `images/`:

```js
{ "name": "Spark plug", "set": "Cars", "img": "images/spark-plug.jpg", "fact": "...", "focus": [50, 60] }
```

A new `set` value shows up as a filter on the start screen. `focus` (x%, y%) is optional and picks where the close-up zooms.

`tools/gather.mjs` searches product photos for a list of `Set|Name|query` lines and saves thumbnails for picking; `tools/fetch-images.mjs` downloads the picks into `images/` and rewrites `items.js`.
