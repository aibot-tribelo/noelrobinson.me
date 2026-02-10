# Noel Robinson - Personal Website

A modern, fast personal website built with Astro, Tailwind CSS, and TypeScript.

## 🚀 Live Site

**Current deployment:** [https://aibot-tribelo.github.io/noelrobinson.me/](https://aibot-tribelo.github.io/noelrobinson.me/)

## ✨ Features

- ⚡️ **Lightning-fast** - Built with Astro SSG for optimal performance
- 🎨 **Modern Design** - Clean, dark theme with subtle animations
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- 🔍 **SEO Optimized** - Meta tags, Open Graph, sitemap, robots.txt
- 🚀 **Auto-deploy** - GitHub Actions deploys to GitHub Pages on every push
- ♿️ **Accessible** - Semantic HTML and proper contrast ratios

## 📦 Tech Stack

- [Astro](https://astro.build/) - Static Site Generator
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- GitHub Actions - CI/CD
- GitHub Pages - Hosting

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch via GitHub Actions.

### Workflow Details

- **Build**: Installs dependencies and builds the Astro site
- **Deploy**: Uploads the `dist` folder to GitHub Pages
- **Permissions**: Uses `id-token: write` and `pages: write` for secure deployment

## 🔄 Transferring to the Correct GitHub Account

This repository was initially created under `aibot-tribelo` for testing. To transfer it to the `noelrobinson` account:

### Option 1: Transfer Repository (Recommended)

1. The owner of `aibot-tribelo` can transfer the repo:
   ```bash
   gh repo transfer aibot-tribelo/noelrobinson.me noelrobinson
   ```

2. After transfer, update the URLs in:
   - `astro.config.mjs` - Change `site` to `https://noelrobinson.github.io`
   - `public/robots.txt` - Update sitemap URL

3. Re-enable GitHub Pages in the new repository:
   - Go to Settings → Pages
   - Source: GitHub Actions
   - The workflow will auto-deploy

### Option 2: Clone to New Repository

1. Create a new repo as `noelrobinson`:
   ```bash
   gh repo create noelrobinson/noelrobinson.me --public
   ```

2. Update remote and push:
   ```bash
   git remote set-url origin git@github.com:noelrobinson/noelrobinson.me.git
   git push -u origin main
   ```

3. Follow step 2-3 from Option 1 above

## 📊 Performance

Built for speed with Lighthouse scores target of 90+:
- Fast page loads
- Optimized assets
- Static generation
- Minimal JavaScript

## 📄 License

© 2026 Noel Robinson. All rights reserved.
