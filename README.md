# MSBA Learning Hub — Faysal's job-prep cockpit

A single-page interactive app that distills your 10 MSBA courses into:

- **Dashboard** — at-a-glance stats and a recommended study path.
- **Course Library** — 12 cards, one per course. Each course has:
  - **Quick Read** — key takeaways + 5-minute recap
  - **Concepts** — short cards for each idea
  - **Formulas** — the equations you must recognize on sight
  - **Interview Qs** — expandable Q&A by difficulty (Basic / Intermediate / Advanced)
  - **My Files** — a link to your original folder on disk
- **Interview Prep** — flashcard mode with filters by course, level, shuffle, and progress bar
- **Mind Map** — NotebookLM-style radial map of the MSBA toolkit. Pan, zoom, click a node to dive in.
- **Glossary** — 30+ key terms with quick definitions.

## How to open

Double-click **`Launch.bat`** (Windows) — or just open `index.html` in any browser.
Works fully offline; Tailwind loads from CDN the first time.

## Keyboard shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus search |
| `D` | Dashboard |
| `L` | Course Library |
| `I` | Interview Prep |
| `M` | Mind Map |
| `G` | Glossary |
| `←` `→` | Prev / Next flashcard |
| `Space` | Flip flashcard |

## Files

```
MSBA-Learning-Hub/
├── index.html   ← the app
├── data.js      ← curated knowledge base (edit to add notes)
├── Launch.bat   ← Windows launcher
└── README.md
```

## How to extend

Open `data.js` and edit any course block — add more takeaways, concepts, formulas, or interview questions. Refresh the browser, changes appear instantly. The structure for each course:

```js
{
  id, code, name, icon, color, folder, summary,
  keyTakeaways: [string],
  concepts: [{title, body}],
  formulas: [{name, expr, when}],
  interview: [{q, a, level: 'Basic'|'Intermediate'|'Advanced'}]
}
```

Sources combined: your slides/PDFs/notebooks from each course folder + standard MSBA fundamentals (CRISP-DM, OWASP LLM Top 10, INFORMS aCAP body of knowledge, etc.).
