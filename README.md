# Bird's-eye Czech

A small static study site for learning Czech from zero while living in Prague for a year.

It deliberately combines three layers:

- **First-week field guide** — practical Czech for transport, Kolej 17. listopadu, dorm setup, shopping, food, and airport travel.
- **Bird's-eye grammar map** — a top-down overview of the Czech system: sound/spelling, seven cases, gender and animacy, agreement, pronouns/clitics, verbs, aspect, word order, negation, and a recommended learning order.
- **Pronunciation decoder + drills** — spelling-to-sound rules, comparisons with familiar languages, Czech TTS examples, and focused listening contrasts.

The design follows the same low-dependency philosophy as `ten-days-in-istanbul` and `esponyol-inator`: plain HTML/CSS/JS, responsive layout, no build system, no framework.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Files

- `index.html` — first-week field guide
- `grammar.html` — top-down Czech grammar overview
- `pronunciation.html` — spelling/pronunciation decoder
- `pronunciation-drills.html` — listening contrasts and spelling reflex drills
- `styles.css` — shared responsive styling
- `pronunciation.css` / `pronunciation-drills.css` — pronunciation-specific styling
- `app.js` — mission filters, search, translation toggle, learned-state tracking
- `pronunciation.js` / `pronunciation-drills.js` — browser Czech TTS and listening interactions

Learned phrases are stored only in browser `localStorage`.

## GitHub Pages

This is a plain static site, so GitHub Pages should publish directly from the repository rather than through a custom Actions workflow.

Configure **Settings → Pages → Build and deployment** as:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/ (root)`

Expected project URL:

`https://aeirya.github.io/birds-eye-czech/`

## Content direction

The site should grow around **useful examples that expose structure**, rather than isolated vocabulary lists or exhaustive paradigms. A good addition teaches something immediately useful and links it to a grammatical mechanism.

Examples:

- `Jsem na koleji.` ↔ `Jdu na kolej.` → locative vs accusative
- `Můžu platit kartou?` → instrumental
- `Letím do Španělska.` → `do` + genitive
- `byt` ↔ `být` → vowel length, not stress
- `rada` ↔ `řada` → `r` vs Czech `ř`

## License

GPL-3.0-or-later.
