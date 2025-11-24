# 🚀 Quick Deployment Guide

## Fastest Way to Deploy (Choose One)

### ⚡ Option 1: Vercel (Recommended - 2 minutes)

1. **Push to GitHub** (if not already):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy" (Vercel auto-detects everything!)

**Done!** Your site will be live in ~2 minutes at `your-project.vercel.app`

---

### ⚡ Option 2: Netlify (2 minutes)

1. **Build locally**:

   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the `dist` folder
   - Your site is live!

**Or via GitHub**:

- Push to GitHub
- Go to [netlify.com](https://netlify.com)
- "New site from Git" → Connect GitHub → Deploy

---

### ⚡ Option 3: GitHub Pages (3 minutes)

1. **Install gh-pages**:

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update vite.config.js base path**:

   ```js
   base: '/your-repo-name/', // Replace with your GitHub repo name
   ```

3. **Deploy**:

   ```bash
   npm run deploy:github
   ```

4. **Enable Pages**:
   - Go to repo Settings → Pages
   - Source: `gh-pages` branch
   - Your site: `https://yourusername.github.io/your-repo-name/`

---

## 🎯 One-Command Deploy

After initial setup, you can deploy with:

```bash
# Vercel
npm run deploy:vercel

# Netlify
npm run deploy:netlify

# GitHub Pages
npm run deploy:github
```

---

## 📝 Pre-Deployment Checklist

- [ ] Update `public/sitemap.xml` with your domain
- [ ] Update `public/robots.txt` with your domain
- [ ] Test everything locally: `npm run build && npm run preview`
- [ ] Verify all images load correctly
- [ ] Check all links work

---

## 🔗 Custom Domain

After deployment:

- **Vercel**: Project Settings → Domains → Add domain
- **Netlify**: Site Settings → Domain Management → Add domain

Both platforms provide free SSL certificates automatically!

---

**Need help?** Check `DEPLOYMENT.md` for detailed instructions.
