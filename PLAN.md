# Marketing Site Plan — trace-grab + Sentinel + Emet Labs

## 0. Design posture

**Design-agnostic, content-ready.** The goal is to ship the information architecture, content, and technical scaffolding now — leaving visual treatment for the designer. Every section below specifies *what to say* and *what to show*, not pixel-level design. The existing design system (Satoshi sans, Sentient serif, white/black/light, Tailwind v4) stays as-is; the designer refines from there.

Three rules from the reference material that shape the content, not the CSS:

1. **Checkable, not reassuring** (trace-grab README philosophy + Inflection: "documentation IS the marketing"). Every claim on the site is verifiable with a command. No "powerful, seamless, scalable."
2. **The product is the hello world** (Inflection: "docker run hello-world works the first time, every time — proof by doing"). The `npx` command is the primary CTA, not "Contact us."
3. **Show, don't pitch** (Inflection: "developers judge by hands-on evidence, not brand promises"). Code snippets and terminal output over feature grids and testimonial carousels.

---

## 1. Site map

```
/                      Homepage — Emet Labs (company + program overview)
/trace-grab            trace-grab marketing page (PRIMARY)
/sentinel              Sentinel description page (coming soon, redirects to trace-grab)
/about                 About Emet Labs
/blog                  Blog (unchanged — no posts yet)
/careers               (unchanged — placeholder)
/legal                 (unchanged)
/privacy               (unchanged)
```

**Nav change:** Replace "Trace Bounty" with "trace-grab" in the header. Keep Sentinel, About, Blog. The nav order puts the live product first.

---

## 2. Homepage (/)

**Goal:** Orient a visitor in 10 seconds — what Emet Labs does, what trace-grab is, how to get it. Not overbearing: one screen of content, then the program.

### Section 1 — Hero (full viewport)

```
[eyebrow] Open source · Apache-2.0

Trace-grab.
Tokenize trace exports on your own machine.
Nothing leaves your environment.

[terminal block]
$ npx @emetlabs/trace-grab grab ./langsmith-export --out ./corpus
✓ Wrote 100 record(s) to ./corpus

[primary CTA: npm package ↗]  [secondary CTA: View on GitHub ↗]
```

- The terminal block is the hero visual — not a screenshot, not an illustration. Actual command, actual output. (Emil Kowalski: the interface *is* the demo.)
- No "Coming soon." trace-grab is live. The homepage leads with the live product.
- Company name "Emet Labs" moves to the header (already there) — the hero is about the product, not the company.

### Section 2 — What it does (3 short paragraphs, not feature cards)

```
## What it does

Reads a trace export on your machine, normalizes it to span-shaped records,
replaces every string value with a stable token derived from a secret salt
that stays on your machine, and writes a bundle to a directory you name.

One pass. No network. No prompts. No account.

## What it does not do

Never contacts an Emet endpoint — there is none in the source.
No telemetry, analytics, or update check.
One runtime dependency. No postinstall script.
```

- Direct from the README. The "does not do" section is the trust claim — each line is checkable. (Inflection: "transparency builds trust.")
- No feature-grid with icons. Prose. The absence of features IS the feature.

### Section 3 — The program (short)

```
## The trace-grab program

Trace-grab is the contributor-side half of Emet Labs' AI security research.
Partners run it locally, hand us the sanitized corpus, and we analyze it with
Sentinel — our runtime verification engine for agentic AI systems.

Sentinel is in private development. If you're a platform team that wants to
verify what your agents actually did, [read about Sentinel](/sentinel) or
[start with trace-grab](/trace-grab).

[CTA: Start with trace-grab →]
```

- This is the only place Sentinel is mentioned on the homepage. No heavy pitch. The program framing comes from the trace-grab PRD: contributor-side tool + receiving-side analysis.

### Section 4 — Footer (existing, unchanged)

---

## 3. trace-grab page (/trace-grab)

**Goal:** The primary marketing page. A developer lands here from npm, GitHub, or a link — they should understand, trust, and install in under 2 minutes.

### Section 1 — Hero

```
[eyebrow] @emetlabs/trace-grab · v0.1.1 · Apache-2.0

# trace-grab

Read trace exports. Tokenize every string value. Write a bundle to your disk.
Nothing leaves your environment unless you send it yourself.

[terminal block — the install + run command]
$ npx @emetlabs/trace-grab grab ./langsmith-export --out ./corpus

[npm badge: npm version]  [provenance badge: SLSA]  [GitHub stars]
```

### Section 2 — Before / after (the core demonstration)

```
## Deny by default, equality preserved

Every string value becomes a stable token. Numbers, booleans, timestamps,
durations, and status codes pass through. Field names pass through. Values do not.

[code block — JSON before/after side by side or stacked]
// before
{ "name": "modify_account", "inputs": { "account": "acct_1208", "actor": "alice@corp.com" } }

// after
{ "name": "modify_account", "inputs": { "account": "TOK_4f1ab9c072", "actor": "TOK_88b0e13a5d" } }

The same value always produces the same token. Equality is preserved; identity is not.
```

- This is the "show, don't tell" moment. The before/after IS the product pitch. (Inflection: "the product speaks for itself.")

### Section 3 — Verify the claims (the trust table)

```
## What it does not do

| Claim | Verify |
|---|---|
| Never contacts an Emet endpoint | `grep -ri emet src/` prints nothing |
| No telemetry, analytics, or update check | `grep -riE "telemetry\|analytics\|update.?check" src/` prints nothing |
| No postinstall script | `jq '.scripts.postinstall // "absent"' package.json` → "absent" |
| One runtime dependency | `jq '.dependencies \| length' package.json` → 1 |
| No network primitive outside the fetcher | `bun test test/no-egress.test.ts` |
| Published with SLSA provenance | See the Provenance badge on npm |

Each claim is something to verify, not a promise.
```

- Directly from the README. This table is the conversion mechanism — it's what makes a security reviewer say "ok, I trust this." (Inflection: "developers judge credibility by the quality of documentation.")

### Section 4 — Sources

```
## Sources

| Source | How |
|---|---|
| Files you exported (LangSmith export, OTLP JSON, plain JSONL) | `grab ./dir` — no credentials |
| LangSmith API | `grab --from langsmith-api <project>` — forthcoming |

The file path is recommended. No credentials, works offline, and the tool
cannot have read anything beyond the files you handed it.
```

### Section 5 — Install + quickstart (the frictionless onboarding)

```
## Quickstart

[terminal block]
$ npx @emetlabs/trace-grab grab ./your-export --out ./corpus
✓ Wrote 100 record(s) to ./corpus

Your bundle:
  corpus.jsonl    — tokenized records
  manifest.json   — counts, hashes, generator info
  policy.yaml     — the policy that was applied
  report.md        — every plaintext field, in plain text

Zero configuration is a valid configuration. With no tracegrab.yaml at all,
you get the safe default.
```

- (Inflection: "frictionless onboarding matters most — Twilio's Quickstarts remain a benchmark for fast Hello World moments.")

### Section 6 — Policy (brief)

```
## Policy

To let a specific field through in plaintext, name it in tracegrab.yaml:

[yaml block]
reveal:
  - outputs.status
  - inputs.currency
drop:
  - inputs.patient_id
time: shift

The four dispositions — reveal, drop, time, and the tokenized default —
live in the full policy reference.
```

### Section 7 — Provenance + trust

```
## Provenance

The published package carries SLSA provenance — a build attestation tying the
tarball to a commit and a workflow run in this repo, signed via sigstore.
Publishing uses GitHub OIDC trusted publishing — no npm access token is stored.

Verify the Provenance badge on the npm package page, or check the sigstore
transparency log.

[links: npm ↗ · GitHub ↗ · sigstore ↗]
```

### Section 8 — Links / next steps

```
[GitHub ↗]  [npm ↗]  [docs ↗]  [README ↗]
```

---

## 4. Sentinel page (/sentinel)

**Goal:** Describe what Sentinel is, honestly and briefly. "Coming soon." Redirect attention to trace-grab as the available thing.

```
[eyebrow] In private development

# Sentinel

Causality-aware runtime verification for agentic AI systems.

Sentinel checks what a deployment actually did against user-supplied
Specifications and reports both the conclusion and the evidence supporting it.
It never turns missing evidence into a pass.

## How it fits with trace-grab

Partners run trace-grab locally to produce a sanitized trace corpus.
Sentinel ingests that corpus and verifies it against specifications —
absence, existence, precedence, response — using causal-frontier evaluation
that preserves the event-specific causal DAG.

## Status

Sentinel is in private development. The specification language, scoped
cut-lattice evaluators, and the SagaShop testbed are live internally.
The dashboard and control plane are scaffolded.

If you want to start now, [trace-grab is available](/trace-grab).
The corpus you produce today is what Sentinel will verify tomorrow.

[CTA: Start with trace-grab →]
```

- No feature lists, no architecture diagrams, no API docs. This is a "what it is" page, not a "how to use it" page.
- The redirect to trace-grab is gentle — "the corpus you produce today is what Sentinel will verify tomorrow." (Inflection: "ads must lead to docs, sandboxes, or code — not gated ebooks.")

---

## 5. About page (/about)

Update from "Coming Soon" to a real company description:

```
## About

Emet Labs builds security tooling for agentic AI systems.

Our first tool, trace-grab, is an open-source CLI that lets platform teams
sanitize trace exports on their own machines — zero egress, deny-by-default,
provenance-published. It's the contributor-side half of a two-part program.

The other half, Sentinel, is a causality-aware runtime verification engine
that ingests sanitized corpora and checks them against specifications. It's
in private development.

We're a small team. We write things down. We ship open source when the trust
model demands it and proprietary when the enforcement surface does.
[Contact us →]
```

---

## 6. Design principles (for the designer)

These are constraints from the reference material, distilled to rules a designer can work with. Not CSS — direction.

### From Emil Kowalski (animation + design engineering):
- Motion is purposeful. Animate state changes (appear, disappear, layout shift), not decorative elements.
- The right easing: ease-out for entrances, ease-in for exits, custom cubic-bezier for the rest. Never `linear`.
- Duration: 200–400ms for UI, 400–600ms for larger transitions. Never more than 600ms unless it's a deliberate spectacle.
- Apple's design principles translated to web: deference (content first, UI recedes), clarity (legible at every size), depth (layering conveys hierarchy).

### From TasteSkill (anti-slop, design systems):
- Dual-mode by default. Plan for dark mode from the start — contrast and hierarchy parity.
- Audit-first on redesigns. Before adding, remove what's generic.
- Real design systems when applicable. Don't invent a component vocabulary — use what exists (the current Satoshi/Sentient/Tailwind system is fine).
- Hard pre-flight check: every section must justify its existence. If it reads like a template, cut it.

### From Impeccable (slop detection, design vocabulary):
- No italic serif display headings (the AI slop tell). Sentient serif is fine for body/large text, but don't do the "italic serif gradient hero word" pattern.
- No generic drop shadows on cards. If a card needs elevation, use a border or a subtle background, not `shadow-2xl`.
- No "hero eyebrow chip" pattern (the small pill badge above the H1). Use a plain text eyebrow instead.
- No nested cards (card inside card inside card). One level of containment.
- No numbered section labels (01 Discover, 02 Design...). If sequence matters, use real content.
- No icon-tile stacks (grid of icon + title + one-liner). Prose or tables, not icon grids.
- No "AI is thinking" loading shimmer. Real loading states or none.

### From the Inflection article (devtools marketing):
- Documentation IS the marketing. The trace-grab page IS the docs landing page.
- The install command is the CTA. Not "Book a demo," not "Contact sales."
- Show code, not screenshots of code.
- No gated content. Everything is open.
- Provenance and open source are the trust signals, not testimonials.

### Design-agnostic constraint:
- Keep the current stack: Astro + SolidJS + Tailwind v4, Satoshi sans, Sentient serif.
- Build content in semantic HTML sections with Tailwind utility classes. No new design tokens, no new components beyond what exists.
- The designer can restyle everything later — the structure and content survive a visual pass.

---

## 7. Technical scaffolding (what to build now)

### Files to create/modify:

1. **`/src/pages/trace-grab.astro`** — new page, ~8 sections as outlined above. Pure Astro, no SolidJS needed (static content + terminal code blocks). Uses BaseLayout.

2. **`/src/pages/sentinel.astro`** — rewrite from empty to the "coming soon + description + redirect to trace-grab" content.

3. **`/src/pages/index.astro`** — rewrite hero to lead with trace-grab instead of "Emet Labs. / AI Security / Coming soon." Add the program section.

4. **`/src/pages/about.astro`** — rewrite from "Coming Soon" to the company description.

5. **`/src/components/Header.astro`** — update nav: replace "Trace Bounty" with "trace-grab".

6. **No new components needed.** Terminal blocks are `<pre><code>` with Tailwind. The before/after JSON is the same. The trust table is an HTML table. Keep it simple — the designer will componentize later.

### What NOT to build:
- No animation library (no Framer Motion, no GSAP). Motion is the designer's call.
- No new CSS beyond Tailwind utilities. No design tokens, no CSS variables beyond what's in `global.css`.
- No MDX, no content collections. The content is in the `.astro` files directly — it's marketing copy, not CMS-managed.
- No dark mode yet. Plan for it (TasteSkill: dual-mode by default), but don't implement it — that's a design decision.

### Dev server:
The AGENTS.md says to use `astro dev --background`. I'll start it and verify each page renders without errors.

---

## 8. Content source mapping

Where the content comes from (all already written, verified, and shipped):

| Section | Source |
|---|---|
| trace-grab hero + what it does | README.md lines 1–15, 25–37 |
| Before/after tokenization | README.md lines 45–60 |
| Trust table | README.md lines 29–37 |
| Sources table | README.md lines 99–107 |
| Quickstart | README.md lines 14–15 + actual CLI output |
| Policy brief | README.md lines 62–75 |
| Provenance | README.md lines 39–43 (the paragraph we just updated) |
| Sentinel description | sentinel/README.md lines 1–17 |
| Sentinel + trace-grab relationship | sentinel/README.md + trace-grab PRD lines 46–48 |
| About / company | Synthesized from both READMEs + existing site |

---

## 9. What "done" looks like

- `/trace-grab` is a complete, static marketing page with install command, before/after, trust table, sources, quickstart, policy brief, and provenance — all content from the shipped README.
- `/sentinel` describes what Sentinel is, says "coming soon," and redirects to trace-grab.
- `/` leads with trace-grab, mentions the program, links to Sentinel.
- `/about` has a real company description.
- Nav reflects the live product.
- Every page renders on the dev server without errors.
- No visual design decisions are locked in — a designer can take the `.astro` files and restyle without restructuring content.
