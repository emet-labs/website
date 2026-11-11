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

- `src/config/site.ts`: site metadata, navigation and external links.
  Change values here rather than in components.
- `src/styles/global.css`: design tokens (colour, type scale, radius) and the shared utilities:
  `wrap`, `measure`, `meta` (small, tracked Public Sans caps for labels, times and status), `ticks`
  (corner marks for measured grids), `.statement`, `.quiet` (the quieter half of a two-tone
  statement), `.link` and `.prose-emet`. The default Tailwind palette is cleared, so every
  colour comes from these tokens.
- `src/components/`:
  - `Header`, `Footer`, `Logo`, `Button`, `PageHeader`, `Fonts`.
  - `Section`: a named header row on a hairline, then free composition. `tone="panel"` is
    the inset ink brand panel; use it for a page's signature moment and its close.
  - `ContactSection`: the closing ink panel.
  - `JsonBlock` and `ShellBlock`: build-time JSON and shell syntax highlighting, used on
    trace-grab. `ShellBlock` adds a copy button when JavaScript is available.
  - `TraceField`: the homepage's Fig. 1, one agent task traced across six systems.
  - `StoryTrace`: the homepage's sticky three-step diagram.
  - `RuleExample`: "one rule, three answers". It is used on Sentinel only, by design: the
    homepage carries no product example.
- Every diagram is an illustration and is labelled as one. None shows product output.
- Motion:
  - Fig. 1 sweeps once on load.
  - The story diagram changes state with scroll on wide screens.
  - The header gains a hairline once the page scrolls.
  - Under `prefers-reduced-motion`, Fig. 1 appears complete and the story diagram switches
    states without transitions. Without JavaScript, the diagrams show their final state and
    all text is visible.
- `public/brand/`: the logo lockup, owl mark and share image, derived from the supplied artwork
  without redrawing or recolouring it. The logo's owl face is negative space, so place it on a light surface (bone or card).

## Typography

- **Forum** (display: titles, statements) and **Public Sans** (text and interface) are
  self-hosted from `public/fonts/` as WOFF2 under the SIL Open Font License 1.1. Each font's
  `OFL.txt` sits beside it. Pages make no third-party font requests.
- The type scale is in `global.css` (`--text-hero` down to `--text-meta`). Forum has one
  weight, so hierarchy comes from size and space.

## Colour

All colours are tokens in `src/styles/global.css` (the default Tailwind palette is cleared).

- Surfaces: paper (bone) `#f3f1ec`, card `#faf9f6`, mist (sand) `#e8e4dc`, and the ink panel
  `#1a1c27`.
- Text: ink `#1a1c27`, slate `#474957`, dusk `#615c6b`; on ink, white `#f6f4ef` and haze
  `#b9b7c2`.
- Ember (`#b0462a`, `#e0805e` on ink) marks only what is violated or missing.
- Diagrams use one hue per system (`--color-sys-*`), the same in every diagram. Code uses the
  `--color-code-*` tokens.
- The logo (`public/brand/`) is used unchanged.

## Product images

`public/product/*.webp` are screenshots of the Sentinel dashboard, captured from its production
build against a local mock API with synthetic data (no customer data, credentials or hosts).
Phone-sized crops (`*-mobile.webp`) are served with `<picture>` below 40rem.
