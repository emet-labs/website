# Emet Labs public website

The site at [emetlabs.ai](https://emetlabs.ai). Built with Astro and Tailwind CSS v4,
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
- `src/styles/global.css`: design tokens (colour, type scale, radius) and the shared utilities:
  `wrap`, `measure`, `meta` (the mono "instrument voice" for indexes, times and status), `ticks`
  (corner marks for measured grids), `.statement`, `.quiet` (the quieter half of a two-tone
  statement), `.link` and `.prose-emet`. The default Tailwind palette is cleared, so every
  colour comes from these tokens.
- `src/components/`:
  - `Header`, `Footer`, `Logo`, `Button`, `PageHeader`, `Fonts`.
  - `Section`: an indexed header row on a hairline, then free composition. `tone="panel"` is
    the inset navy brand panel; use it for a page's signature moment and its close.
  - `ContactSection`: the closing navy panel.
  - `TraceField`: the homepage's Fig. 1, one agent task traced across six systems.
  - `StoryTrace`: the homepage's sticky three-step diagram.
  - `RuleExample`: "one rule, three answers". It is used on Sentinel only, by design: the
    homepage carries no product example.
- Every diagram is an illustration and is labelled as one. None shows product output.
- Motion:
  - Fig. 1 sweeps once on load.
  - The story diagram changes state with scroll on wide screens.
  - The header gains a hairline once the page scrolls.
  - Under `prefers-reduced-motion`, everything appears in its final state. Without JavaScript,
    the diagrams show their final state and all text is visible.
- `public/brand/`: the logo lockup, owl mark and share image, derived from the supplied artwork
  without redrawing or recolouring it. The logo's owl face is negative space, so place it on white.

## Typography

- **Minerva Modern** (display) is licensed through Adobe Fonts and must be served from Adobe's
  CDN. Do not commit its font files. To enable it, create an Adobe Fonts web project containing
  Minerva Modern (Regular, Italic), allow `emetlabs.ai` and `localhost`, set the project's font
  display to `fallback` (a short block, then the fallback serif if the font is slow, which limits late reflow), and paste the project ID into `ADOBE_FONTS_KIT_ID` in `src/config/site.ts`
  (or set `PUBLIC_ADOBE_FONTS_KIT_ID` for a local build). Until then, headings use Georgia
  (`--font-display` in `global.css`) and the build prints a warning. Once Minerva is live,
  retune `--text-display--letter-spacing` and consider a metric-matched fallback face.
- **Satoshi** (text) is self-hosted from `public/fonts/satoshi/` under the Fontshare licence.

## Brand colours

Taken from the logo: ink `#262c57` (the navy of the wordmark and owl), dusk `#5d5872` (the
midpoint of the owl's gradient), silver `#9b9ca1` (the head and the dot; decorative only), on
paper `#ffffff` with mist `#f4f4f7` for code and hover surfaces.
