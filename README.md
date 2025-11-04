# RailDevHub Landing Page

Modern, multi-page corporate website built with Astro for GitHub Pages deployment.

## 🚀 Live Demo

[railhubdev-landing.github.io](https://railhubdev-landing.github.io)

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see the site.

## Build & Deploy

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for GitHub Pages deployment.

## GitHub Pages Deployment

This project is fully configured for GitHub Pages deployment:

### Setup Steps:
1. **Repository Settings**:
   - Go to Settings → Pages
   - Source: "GitHub Actions"
   - Custom domain: `railhubdev-landing.github.io`

2. **Automatic Deployment**:
   - Push to `main` branch automatically triggers deployment
   - Check Actions tab for deployment status
   - Live site: https://railhubdev-landing.github.io

3. **Manual Deployment**:
   - Go to Actions tab
   - Run the "Deploy to GitHub Pages" workflow manually

### Files Created:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `CNAME` - Custom domain configuration
- `.nojekyll` - Disables Jekyll processing
- `scripts/copy-github-files.js` - Copies required files to dist

## Features

- 🌙 Dark theme (optimized for developer experience)
- 🎨 Modern design with Tailwind CSS
- ⚡ Fast static site generation with Astro
- 📱 Fully responsive
- ✨ Smooth animations and transitions
- 🏗️ Clean component architecture

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **UI Components**: React
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

