# Emet Labs public website

The site at [emetlabs.ai](https://emetlabs.ai). Built with Astro, Tailwind CSS v4 and SolidJS,
deployed to GitHub Pages by `.github/workflows/astro.yml` on every push to `main`.

## Development

```sh
bun install
bunx astro dev      # or: astro dev --background (see AGENTS.md)
bunx astro build    # static output in dist/
```

## Structure

- `src/config/site.ts`: site metadata, navigation, external links and the Adobe Fonts project ID.
  Change values here rather than in components.
- `src/styles/global.css`: design tokens (colour, type scale, radius, motion) and the few shared
  utilities (`wrap`, `measure`, `label`, `.link`, `.statement`, `.prose-emet`). The default
  Tailwind palette is cleared, so every colour comes from these tokens.
- `src/components/`: `Header`, `Footer`, `Logo`, `Button`, `PageHeader`, `Section` (the one
  section primitive: label in the left margin, content on columns 4–12), `Rows` (ruled
  term/description lists), `ContactSection`, `Fonts`.
- `public/brand/`: the logo lockup, owl mark and share image, derived from the supplied artwork
  without redrawing or recolouring it. The logo's owl face is negative space, so place it on white.

## Typography

- **Minerva Modern** (display) is licensed through Adobe Fonts and must be served from Adobe's
  CDN. Do not commit its font files. To enable it, create an Adobe Fonts web project containing
  Minerva Modern (Regular, Italic), allow `emetlabs.ai` and `localhost`, set the project's font
  display to `swap`, and paste the project ID into `ADOBE_FONTS_KIT_ID` in `src/config/site.ts`
  (or set `PUBLIC_ADOBE_FONTS_KIT_ID` for a local build). Until then, headings use the local
  serif fallback stack in `global.css`.
- **Satoshi** (text) is self-hosted from `public/fonts/satoshi/` under the Fontshare licence.

## Brand colours

Taken from the logo: ink `#262c57` (the navy of the wordmark and owl), dusk `#5d5872` (the
midpoint of the owl's gradient), silver `#9b9ca1` (the head and the dot; decorative only), on
paper `#ffffff` with mist `#f4f4f7` for code and hover surfaces.
