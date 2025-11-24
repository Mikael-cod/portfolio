# Deployment Guide - Portfolio Website

This guide will help you deploy your portfolio to various hosting platforms.

## 🚀 Quick Deploy Options

### Option 1: Deploy to Vercel (Recommended - Easiest)

1. **Install Vercel CLI** (optional, you can also use the web interface):
   ```bash
   npm install -g vercel
   ```

2. **Deploy from command line**:
   ```bash
   vercel
   ```
   Follow the prompts to link your project.

3. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite and deploy automatically

**Advantages**: Free, automatic HTTPS, CDN, easy custom domain

---

### Option 2: Deploy to Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```
   Or drag and drop the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

4. **Or deploy via GitHub**:
   - Push your code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

**Advantages**: Free, automatic HTTPS, form handling, easy setup

---

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Update vite.config.js**:
   ```js
   export default defineConfig({
     base: '/your-repo-name/', // Replace with your GitHub repo name
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Select source: `gh-pages` branch
   - Your site will be at: `https://yourusername.github.io/your-repo-name/`

---

### Option 4: Deploy to Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Public directory: `dist`
   - Single-page app: Yes
   - Automatic builds: No

4. **Build and deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

---

### Option 5: Deploy to AWS S3 + CloudFront

1. **Install AWS CLI**:
   ```bash
   # Windows: Download from AWS website
   # Or use: choco install awscli
   ```

2. **Configure AWS**:
   ```bash
   aws configure
   ```

3. **Create S3 bucket**:
   ```bash
   aws s3 mb s3://your-portfolio-bucket-name
   ```

4. **Enable static website hosting**:
   ```bash
   aws s3 website s3://your-portfolio-bucket-name --index-document index.html
   ```

5. **Build and upload**:
   ```bash
   npm run build
   aws s3 sync dist/ s3://your-portfolio-bucket-name --delete
   ```

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure to:

- [ ] Update `public/sitemap.xml` with your actual domain
- [ ] Update `public/robots.txt` with your actual domain
- [ ] Test all links and functionality locally
- [ ] Optimize images (compress if needed)
- [ ] Check that all social media links work
- [ ] Verify contact information is correct
- [ ] Test on mobile devices
- [ ] Check browser console for errors

---

## 🔧 Environment Setup

### Required Environment Variables (if needed)

Create a `.env` file for any API keys or environment-specific settings:

```env
# Example (if you add contact form backend later)
CONTACT_FORM_API_KEY=your_api_key_here
```

---

## 📝 Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Custom Domain Setup

### For Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### For Netlify:
1. Go to Site settings
2. Click "Domain management"
3. Add custom domain
4. Configure DNS as instructed

---

## 🔄 Continuous Deployment

Both Vercel and Netlify support automatic deployments:
- Every push to `main` branch triggers a new deployment
- Pull requests create preview deployments
- No manual steps needed after initial setup

---

## 📊 Performance Optimization

After deployment, check:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

---

## 🆘 Troubleshooting

### Build fails:
- Check Node.js version (should be 16+)
- Delete `node_modules` and `package-lock.json`, then `npm install`
- Check for syntax errors in code

### 404 errors on refresh:
- Ensure SPA redirects are configured (already in `netlify.toml` and `vercel.json`)
- Check base path in `vite.config.js`

### Images not loading:
- Verify image paths are correct
- Check that images are in `public/images/` folder
- Ensure paths start with `/images/` not `./images/`

---

## 📞 Need Help?

If you encounter issues:
1. Check the platform's documentation
2. Review build logs in the deployment dashboard
3. Test locally first with `npm run build && npm run preview`

---

**Recommended**: Start with **Vercel** or **Netlify** for the easiest deployment experience!

