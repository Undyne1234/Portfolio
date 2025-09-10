# Wesley — Software Engineer (Portfolio)

A fast, minimal portfolio to showcase projects, achievements, and CV. Built with **Vite + React + TypeScript** and **regular CSS** (no Tailwind). Sleek, simple, and easy to maintain.

**Live site:** `https://<your-username>.github.io/<your-repo>/`  
**Repo:** `https://github.com/<your-username>/<your-repo>`

---

## ✨ Features

- Vite + React + TypeScript
- All content editable from a single data file
- Featherweight icons via `lucide-react`
- GitHub Pages–friendly paths

---

## 🧱 Tech Stack

- **Frontend:** React, TypeScript, Vite  
- **Styling:** **Vanilla CSS** (global file + optional CSS Modules)  
- **Icons:** `lucide-react`  
- **Deploy:** GitHub Pages (Actions or `gh-pages`)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (LTS)
- **npm** (or pnpm/yarn)

### Install & Run
```bash
# install deps
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

---

## 🗂️ Project Structure
```
.
├─ public/                 # static files (favicons, og-image, etc.)
├─ src/
│  ├─ assets/              # images you import in components
│  ├─ data/profile.ts      # <— your content lives here
│  ├─ components/          # UI pieces
│  ├─ pages/               # page shells
│  ├─ main.tsx             # app entry
│  └─ index.css            # global CSS
├─ vite.config.ts
├─ package.json
└─ README.md
```

---

## 🎨 Styling (Pure CSS)

- Global styles in `src/index.css`
- Optional: CSS Modules for component-scoped styles (`Component.module.css`)

**Example `src/index.css` (starter):**
```css
/* Modern, minimal base */
:root {
  --bg: #0f1115;
  --card: #151924;
  --text: #e7ecf1;
  --muted: #a6b0bf;
  --accent: #6aa6ff;
  --radius: 16px;
}

* { box-sizing: border-box; }
html, body, #root { height: 100%; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: var(--text);
  background: radial-gradient(1200px 600px at 80% -20%, #182032 0%, #0f1115 60%);
  line-height: 1.6;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 24px;
}

.card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
}

.grid {
  display: grid;
  gap: 16px;
}

@media (min-width: 800px) {
  .grid.cols-2 { grid-template-columns: 1fr 1fr; }
  .grid.cols-3 { grid-template-columns: repeat(3, 1fr); }
}

.small { font-size: 0.9rem; color: var(--muted); }
.h1 { font-size: 2rem; margin: 0 0 8px; }
.h2 { font-size: 1.4rem; margin: 16px 0 8px; }
.tag {
  display: inline-block;
  padding: 2px 10px;
  border: 1px solid #2a3450;
  border-radius: 999px;
  font-size: 0.8rem;
  color: var(--muted);
  margin-right: 6px;
}
```

**Example CSS Module (`ProjectCard.module.css`):**
```css
.card { composes: card from '../index.css'; }
.title { font-weight: 600; margin: 0 0 6px; }
.tags { margin-top: 8px; }
```

**Usage in a component:**
```tsx
import styles from './ProjectCard.module.css';

export function ProjectCard({ title, tags, children }) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
      <div className="tags">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </article>
  );
}
```

---

## ✍️ Editing Content

All content is centralized in `src/data/profile.ts`:

- `PROFILE`: name, title, blurb, location, email, phone, `cvUrl`
- `LINKS`: GitHub, LinkedIn
- `SKILLS`: grouped skills
- `ACHIEVEMENTS`: highlight cards
- `PROJECTS`: portfolio cards (name, tags, blurb, links)
- `CV`: CV (summary, experience, education, skills, links)

> Tip: Keep blurbs short (1–2 lines). Recruiters skim.

---

## 🖼️ Images & Assets

For **React components**, prefer importing images from `src/assets` so Vite handles hashing and base paths:

```tsx
import profilePic from '@/assets/profile.jpg'; // set up @ alias if you like

export function Avatar() {
  return <img src={profilePic} alt="Profile picture" width={180} height={180} />;
}
```

Assets in `public/` are served at the site root. On GitHub Pages, avoid hardcoded leading slashes in React components.

---

## ⚙️ Vite Base (GitHub Pages)

If the site is published at `https://<user>.github.io/<repo>/`, set `base`:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<your-repo>/', 
});
```

Rebuild after changing `base`.

---

## 🌐 Deploying to GitHub Pages

### Option A — GitHub Actions (recommended)

1. **Settings → Pages → Build and deployment → Source:** GitHub Actions
2. Add workflow at `.github/workflows/pages.yml`:

```yml
name: Deploy Vite to GitHub Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Option B — `gh-pages` CLI

```bash
npm install -D gh-pages
```
Add scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy:
```bash
npm run deploy
```

---

## 🐾 Troubleshooting

- **404s / “can’t find main.tsx” on Pages:**  
  `vite.config.ts` is missing `base: '/<your-repo>/'`. Add it, rebuild, redeploy.

- **Images not showing:**  
  Import them from `src/assets` and use `<img src={imported} />`. Avoid leading `/` paths.

---

## 🧭 Roadmap

- [ ] Project detail pages (modal/route)  
- [ ] Dark mode toggle  
- [ ] Print-perfect CV stylesheet  
- [ ] Lighthouse pass for A11y/SEO/Perf

---

## 🐺 Contact

- **Email:** wesley06@zeelandnet.nl  
- **GitHub:** https://github.com/Undyne1234  
- **LinkedIn:** https://www.linkedin.com/in/wesley-de-ruiter-8291a3346/

---

## 📜 License

MIT © Wesley
