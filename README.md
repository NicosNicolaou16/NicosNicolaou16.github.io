# NicosNicolaou16.github.io

My personal portfolio / website — [nicosnicolaou16.github.io](https://nicosnicolaou16.github.io/) 😉👇

A hand-built, static portfolio for a Senior Software Engineer working in **Android** and **Flutter**. No framework, no build step — just HTML, CSS, and a little vanilla JavaScript, deployed to GitHub Pages via GitHub Actions.

## ✨ Sections

- **Hero** — intro, quick stats, and social links
- **About** — background and what I'm currently working on
- **Experience & Education** — a timeline of roles and degrees
- **Projects** — selected open-source libraries, pub.dev packages, and sample apps
- **Writing** — recent articles (full archive on Medium)
- **Toolbox** — languages and tools

## 🧱 Tech

- Static **HTML / CSS / JS** (no Jekyll, no dependencies)
- Google Fonts: Space Grotesk, JetBrains Mono, Inter
- `IntersectionObserver` scroll reveals, `prefers-reduced-motion` respected
- Deployed with **GitHub Actions** → GitHub Pages

## 📁 Structure

```
.
├── index.html              # the page
├── assets/
│   ├── styles.css          # all styles
│   └── main.js             # scroll-reveal animations
├── .github/workflows/
│   └── deploy.yml          # GitHub Pages deployment
├── .nojekyll               # tell Pages to skip Jekyll
└── README.md
```

## 🚀 Run locally

No build needed. Either open `index.html` directly, or serve it:

```bash
# Python
python3 -m http.server 4000
# then visit http://localhost:4000
```

## 🔧 Deployment

Every push to `main` triggers the workflow in `.github/workflows/deploy.yml`, which uploads the site and publishes it to GitHub Pages.

One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.

## 🔗 Links

- GitHub — [@NicosNicolaou16](https://github.com/NicosNicolaou16)
- LinkedIn — [nicos-nicolaou](https://www.linkedin.com/in/nicos-nicolaou-a16720aa)
- Medium — [@nicosnicolaou](https://medium.com/@nicosnicolaou)
- Bluesky — [@nicolaounicos.bsky.social](https://bsky.app/profile/nicolaounicos.bsky.social)
- Twitter/X — [@nicolaou_nicos](https://x.com/nicolaou_nicos)
- YouTube — [@nicosnicolaou16](https://www.youtube.com/@nicosnicolaou16)
- pub.dev — [packages](https://pub.dev/publishers/nicosnicolaou.com/packages)
- Linktree — [nicos_nicolaou](https://linktr.ee/nicos_nicolaou)

## 📄 License

Released under the [MIT License](LICENSE).
