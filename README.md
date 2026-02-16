# Mohamed Abdelbasit — AI Engineer & Instructor Portfolio

A modern, high-converting personal portfolio website designed for recruiters and potential clients. Built with clean HTML, CSS, and JavaScript — no build tools required.

## Features

- **Dark/Light Mode** — Smooth theme toggle with localStorage persistence
- **Responsive Design** — Mobile-optimized layout
- **Smooth Animations** — Scroll reveal, hover effects, loading animation
- **SEO Optimized** — Semantic HTML, meta tags, accessible structure
- **Premium Design** — Apple + Linear + Framer inspired aesthetics

## Quick Start

1. Open `index.html` in a browser, or
2. Serve locally: `npx serve .` or `python -m http.server 8000`
3. Deploy to Netlify, Vercel, or any static host

## Customization

### Update Your Links

Edit `js/main.js` and update the `CONFIG` object:

```javascript
const CONFIG = {
  cvUrl: 'https://your-domain.com/cv.pdf',  // Your CV download link
  githubUrl: 'https://github.com/yourusername',
  linkedinUrl: 'https://linkedin.com/in/yourusername',
};
```

### Update Social Links in HTML

Search for `href="https://github.com"` and `href="https://linkedin.com"` in `index.html` and replace with your actual profile URLs.

### Project Photos

Replace the placeholder SVGs in `assets/projects/` with real screenshots of your projects: `exoplanets.jpg`, `classification.jpg`, `crash.jpg`, `bank.jpg` — then update the `<img src>` paths in `index.html`.

### Profile Photo

Replace the `.profile-placeholder` div in the Hero section with an `<img>` tag:

```html
<div class="hero-image">
  <img src="assets/profile.jpg" alt="Mohamed Abdelbasit" class="profile-img">
</div>
```

Add to CSS: `.profile-img { width: 280px; height: 280px; border-radius: 20px; object-fit: cover; }`

## Structure

```
mohamed-abdelbasit-portfolio/
├── index.html          # Main HTML
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Theme, animations, interactions
├── assets/
│   ├── profile.png     # Your photo
│   ├── projects/       # Project screenshots (exoplanets, classification, crash, bank)
│   └── Mohamed-Abdelbasit-CV.pdf
└── README.md
```

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS variables, flexbox, grid, and Intersection Observer.
