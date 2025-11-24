# Modern JavaScript Developer Portfolio

A beautiful, responsive, and accessible developer portfolio website built with vanilla JavaScript, HTML5, and modern CSS. This portfolio showcases your projects, skills, certificates, work experience, and provides an easy way for visitors to get in touch.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Accessible**: Built with accessibility in mind (ARIA labels, keyboard navigation, semantic HTML)
- **SEO Optimized**: Includes meta tags, sitemap, and robots.txt
- **Fast Performance**: Optimized for speed with lazy loading and efficient code
- **Interactive Elements**: 
  - Animated skill progress bars
  - Project filtering by technology
  - Certificate lightbox viewer
  - Smooth scrolling navigation
  - Contact form with validation
- **Easy to Customize**: All content is stored in JSON files for easy updates

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy.

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── images/          # Place your images here
│   │   ├── projects/    # Project thumbnails
│   │   ├── certs/       # Certificate images
│   │   └── profile.jpg  # Your profile photo
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── data/            # JSON data files
│   │   ├── personal.json
│   │   ├── projects.json
│   │   ├── certificates.json
│   │   ├── skills.json
│   │   └── experience.json
│   ├── js/
│   │   └── main.js      # Main JavaScript file
│   └── styles/
│       └── main.css     # Main stylesheet
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📝 Customization Guide

### 1. Update Personal Information

Edit `src/data/personal.json`:

```json
{
  "name": "Your Name",
  "title": "Your Job Title",
  "location": "Your Location",
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567",
  "languages": ["English", "Spanish"],
  "bio": "Your bio here...",
  "photo": "/images/profile.jpg",
  "resumeUrl": "/resume.pdf",
  "social": {
    "github": "https://github.com/username",
    "linkedin": "https://linkedin.com/in/username",
    "twitter": "https://twitter.com/username"
  }
}
```

### 2. Add Your Projects

Edit `src/data/projects.json`:

```json
[
  {
    "id": "project-001",
    "title": "Project Name",
    "slug": "project-slug",
    "shortDescription": "Brief description",
    "longDescription": "Detailed description",
    "technologies": ["React", "Node.js"],
    "image": "/images/projects/project-thumb.png",
    "demoUrl": "https://demo-url.com",
    "repoUrl": "https://github.com/username/repo",
    "date": "2025-01-01",
    "featured": true
  }
]
```

### 3. Add Your Skills

Edit `src/data/skills.json`:

```json
[
  {
    "name": "JavaScript",
    "level": 90,
    "category": "Frontend"
  }
]
```

### 4. Add Certificates

Edit `src/data/certificates.json`:

```json
[
  {
    "id": "cert-001",
    "title": "Certificate Name",
    "issuer": "Issuing Organization",
    "issueDate": "2024-01-01",
    "image": "/images/certs/certificate.png",
    "verifyUrl": "https://verification-url.com"
  }
]
```

### 5. Add Work Experience

Edit `src/data/experience.json`:

```json
[
  {
    "id": "exp-001",
    "title": "Job Title",
    "company": "Company Name",
    "location": "Location",
    "startDate": "2023-01-01",
    "endDate": null,
    "current": true,
    "description": "Job description",
    "responsibilities": ["Responsibility 1", "Responsibility 2"],
    "technologies": ["React", "Node.js"]
  }
]
```

### 6. Customize Colors

Edit CSS variables in `src/styles/main.css`:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  /* ... other colors */
}
```

## 🎨 Styling

The portfolio uses CSS custom properties (variables) for easy theming. All colors, spacing, and typography can be customized by modifying the variables in `src/styles/main.css`.

## 📧 Contact Form

The contact form is currently set up for client-side validation. To actually send emails, you'll need to:

1. Set up a backend service (Node.js/Express, serverless function, etc.)
2. Update the form submission handler in `src/js/main.js`
3. Consider using services like:
   - Formspree
   - EmailJS
   - Netlify Forms
   - AWS SES
   - SendGrid

## 🚢 Deployment

### Quick Deploy (Recommended)

**See [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) for the fastest deployment options!**

### Available Deployment Options

1. **Vercel** (Easiest - Recommended)
   - Push to GitHub → Connect to Vercel → Auto-deploy
   - Or run: `npm run deploy:vercel`
   - See `DEPLOYMENT.md` for details

2. **Netlify**
   - Drag & drop `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or run: `npm run deploy:netlify`
   - See `DEPLOYMENT.md` for details

3. **GitHub Pages**
   - Run: `npm install --save-dev gh-pages`
   - Update `vite.config.js` base path
   - Run: `npm run deploy:github`
   - See `DEPLOYMENT.md` for details

**For detailed instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)**

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - feel free to use this portfolio for your own projects!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Built with ❤️ using vanilla JavaScript, HTML5, and CSS3**

