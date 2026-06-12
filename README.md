# Personal site

A minimal Jekyll site for a research/engineering portfolio. Neo-grotesque type
(Geist + Geist Mono), a numbered "gutter" side-nav, and a light/dark toggle that
remembers your choice. Built to run free on GitHub Pages.

```
.
├── _config.yml          ← site identity (name, tagline, status, URL)
├── _data/
│   ├── nav.yml          ← the 5 nav items
│   ├── socials.yml      ← sidebar links (GitHub, LinkedIn, …)
│   └── experience.yml   ← the Experience timeline
├── _includes/           ← head, sidebar, post-list, theme-init
├── _layouts/            ← default, page, post
├── _posts/              ← research + essay entries (Markdown)
├── assets/
│   ├── css/main.css     ← all styling + the two theme token blocks
│   ├── js/theme.js      ← toggle logic
│   └── cv/cv.pdf        ← drop your CV PDF here
├── index.html           ← home / about
├── experience.html · research.html · essays.html · cv.html
```

## Run it locally

Requires Ruby. Then:

```bash
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

## Deploy to GitHub Pages

1. Create a repo named `USERNAME.github.io` (use your GitHub username).
2. Push these files to the `main` branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Wait ~1 minute; the site appears at `https://USERNAME.github.io`.
5. Set `url:` in `_config.yml` to that address (used by SEO tags and the sitemap).

## Make it yours

- **Identity** — edit `_config.yml`: `name`, `tagline`, `role`, `statement`, `status`, `email`.
- **Links** — edit `_data/socials.yml`. Icons are [Tabler](https://tabler.io/icons) names.
- **Timeline** — edit `_data/experience.yml`.
- **Posts** — add Markdown files to `_posts/` named `YYYY-MM-DD-title.md`. Set
  `categories: research` or `categories: essays` in the front-matter; the listing
  pages and homepage pick them up automatically. `summary:` is the grey subtitle.
- **CV** — put `cv.pdf` in `assets/cv/`, then edit the prose in `cv.html`.

## Change the look

Everything theme-able lives in two blocks at the top of `assets/css/main.css`:
`:root` (light) and `[data-theme="dark"]` (dark). To swap the accent colour,
change `--accent` in both. To swap fonts, change `--font-body` / `--font-mono`
and update the Google Fonts `<link>` in `_includes/head.html`.
