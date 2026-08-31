# Bird's-eye Czech

A small static study site for learning Czech from zero while living in Prague for a year.

It deliberately combines two layers:

- **First-week field guide** — practical Czech for transport, Kolej 17. listopadu, dorm setup, shopping, food, and airport travel.
- **Bird's-eye grammar map** — a top-down overview of the Czech system: sound/spelling, seven cases, gender and animacy, agreement, pronouns/clitics, verbs, aspect, word order, negation, and a recommended learning order.

The design follows the same low-dependency philosophy as `ten-days-in-istanbul` and `esponyol-inator`: plain HTML/CSS/JS, responsive layout, no build system, no framework.

## Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Files

- `index.html` — first-week field guide
- `grammar.html` — top-down Czech grammar overview
- `styles.css` — shared responsive styling
- `app.js` — mission filters, search, translation toggle, learned-state tracking

Learned phrases are stored only in browser `localStorage`.

## GitHub Pages

The Pages workflow publishes the static site on pushes to `main`.

Expected project URL:

`https://ojs-inator.github.io/birds-eye-czech/`

## Content direction

The site should grow around **useful examples that expose structure**, rather than isolated vocabulary lists or exhaustive paradigms. A good addition teaches something immediately useful and links it to a grammatical mechanism.

Examples:

- `Jsem na koleji.` ↔ `Jdu na kolej.` → locative vs accusative
- `Můžu platit kartou?` → instrumental
- `Letím do Španělska.` → `do` + genitive

## License

GPL-3.0-or-later.
