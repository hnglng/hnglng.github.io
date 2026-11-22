# hnglng.github.io

A small personal homepage — plain HTML, CSS, and a few lines of JavaScript.
No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | All page content. Look for `<!-- EDIT: ... -->` comments. |
| `styles.css` | Design tokens (colors, type, spacing) and layout. |
| `main.js` | Light/dark theme toggle and footer year. |

## Editing

1. Replace the placeholders in `index.html`: name, tagline, bio, email, links,
   and the three sample writing entries.
2. To change the palette, edit the CSS custom properties at the top of
   `styles.css` (`--bg`, `--text`, `--accent`, …). Both light and dark themes
   are defined there.
3. Projects currently point at real repositories; update the titles,
   descriptions, and tags to taste.

## Preview locally

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

This repository is named `hnglng.github.io`, so GitHub Pages serves the default
branch from its root:

1. Commit and push to `main`.
2. In **Settings → Pages**, set **Source** to *Deploy from a branch*, branch
   `main`, folder `/ (root)`.
3. The site appears at <https://hnglng.github.io/> within a minute or two.

`.nojekyll` is included so GitHub serves the files as-is without running Jekyll.
