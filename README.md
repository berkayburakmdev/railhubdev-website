# RailDevHub Landing Page

Modern, multi-page corporate website built with Astro for GitHub Pages deployment.

> **⚠️ Educational Project Notice**
>
> This project is developed for educational purposes only and does not reflect real-world data or services.
> All content, projects, and information presented are fictional and created solely for learning and demonstration purposes.

## 🚀 Live Demo

[berkayburakmdev.github.io/railhubdev-website](https://berkayburakmdev.github.io/railhubdev-website/)

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
   - (No custom domain needed - using GitHub's default)

2. **Automatic Deployment**:
   - Push to `main` branch automatically triggers deployment
   - Check Actions tab for deployment status
   - Live site: https://berkayburakmdev.github.io/railhubdev-website/

3. **Manual Deployment**:
   - Go to Actions tab
   - Run the "Deploy to GitHub Pages" workflow manually

### Files Created:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `CNAME` - Domain configuration (optional)
- `.nojekyll` - Disables Jekyll processing
- `scripts/copy-github-files.js` - Copies required files to dist

## Features

- 🎓 **Educational Project Notice** - Clear disclaimer banner at the top
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

