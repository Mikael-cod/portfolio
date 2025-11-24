# Quick Setup Guide

## First Time Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Your Information**
   - Edit `src/data/personal.json` with your details
   - Add your profile photo to `public/images/profile.jpg`
   - Update social media links in `personal.json`

3. **Add Your Projects**
   - Edit `src/data/projects.json`
   - Add project images to `public/images/projects/`
   - Update image paths in the JSON file

4. **Add Your Skills**
   - Edit `src/data/skills.json`
   - Set skill levels (0-100) and categories

5. **Add Certificates**
   - Edit `src/data/certificates.json`
   - Add certificate images to `public/images/certs/`

6. **Add Work Experience**
   - Edit `src/data/experience.json`
   - Include your job history with details

7. **Customize Colors (Optional)**
   - Edit CSS variables in `src/styles/main.css`
   - Change `--color-primary`, `--color-secondary`, etc.

8. **Update SEO (Optional)**
   - Edit `index.html` meta tags
   - Update `public/sitemap.xml` with your domain
   - Update `public/robots.txt` with your domain

9. **Add Resume (Optional)**
   - Place your resume PDF in `public/resume.pdf`
   - Update the path in `personal.json` if different

## Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## Build for Production

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## Deploy

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `deploy` script (see README.md)

## Need Help?

Check the main `README.md` for detailed documentation.

