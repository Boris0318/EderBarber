# Eder Barber Shop Website

A professional, modern, and fully responsive website for Eder Barber Shop. Built with pure HTML, CSS, and JavaScript, ready for deployment on Netlify.

**Language:** All content is in Spanish (Español)

**Designed by:** Sirob Labs

## 🌟 Features

- **Fully Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Complete Sections:**
  - Hero section with call-to-action
  - About section with feature highlights
  - Services showcase with pricing
  - Photo gallery placeholder
  - Team members section
  - Customer testimonials slider
  - Booking form
  - Contact information with map placeholder
  - Footer with quick links
- **Interactive Elements:**
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu
  - Auto-rotating testimonials
  - Form validation
  - Scroll-to-top button
  - Notification system
  - Parallax effects
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Fast loading with minimal dependencies
- **Netlify Ready** - Pre-configured for instant deployment

## 📁 Project Structure

```
EgarSalon/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # All JavaScript functionality
├── netlify.toml        # Netlify configuration
├── _redirects          # Netlify redirects
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Using a Local Server (Recommended)

For the best development experience, use a local server:

**Option 1: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Using Node.js**
```bash
npx serve
```

**Option 3: Using VS Code Live Server**
- Install the "Live Server" extension
- Right-click on `index.html`
- Select "Open with Live Server"

Then visit `http://localhost:8000` (or the port shown) in your browser.

## 🌐 Deploy to Netlify

### Method 1: Drag and Drop (Easiest)

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up or log in
3. Drag and drop the entire `EgarSalon` folder onto the Netlify dashboard
4. Your site will be live in seconds!

### Method 2: Deploy from Git

1. Push your code to GitHub, GitLab, or Bitbucket
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Choose your repository
5. Build settings (leave as default):
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your project
cd EgarSalon

# Deploy
netlify deploy --prod
```

## ⚙️ Customization Guide

### 1. Update Business Information

Edit `index.html` and update:

- **Business Name** - Search for "Eder Barber Shop" and replace
- **Phone Number** - Update `(555) 123-4567` with your actual number
- **Email** - Update `info@ederbarbershop.com`
- **Address** - Update the address in the Contact section
- **Business Hours** - Modify hours in the Booking section

### 2. Update Services and Pricing

In `index.html`, find the Services section (search for `id="services"`) and update:
- Service names
- Descriptions
- Prices

### 3. Update Team Members

In the Team section, modify:
- Names
- Titles
- Bio descriptions
- Add actual social media links

### 4. Add Your Own Images

Create an `images` folder and add your photos:

```
EgarSalon/
├── images/
│   ├── hero-bg.jpg
│   ├── about.jpg
│   ├── gallery/
│   │   ├── cut1.jpg
│   │   ├── cut2.jpg
│   │   └── ...
│   └── team/
│       ├── barber1.jpg
│       └── ...
```

Then update the HTML:

**For the hero section** - Add this style in `styles.css`:
```css
.hero {
    background-image: url('../images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

**For gallery images** - Replace the `.gallery-placeholder` divs with:
```html
<div class="gallery-item">
    <img src="images/gallery/cut1.jpg" alt="Haircut style">
</div>
```

**For team photos** - Replace the `.member-photo` content:
```html
<div class="member-photo">
    <img src="images/team/barber1.jpg" alt="Barber name">
</div>
```

### 5. Customize Colors

Edit `css/styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #d4af37;     /* Gold - change to your brand color */
    --secondary-color: #1a1a1a;   /* Dark background */
    --accent-color: #c9a22c;      /* Darker gold */
    /* ... */
}
```

### 6. Add Google Maps

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. In `index.html`, find `.map-placeholder` and replace with your iframe

### 7. Connect Booking Form

The form currently shows a notification. To connect it to a backend:

**Option A: Use Netlify Forms (Recommended)**

1. Add `netlify` attribute to the form in `index.html`:
```html
<form class="booking-form" id="bookingForm" name="booking" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="booking">
    <!-- rest of form fields -->
</form>
```

2. Remove or comment out the JavaScript form handler in `js/main.js`

**Option B: Use Formspree**

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form action:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option C: Use EmailJS**

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Follow their setup instructions
3. Update the JavaScript in `js/main.js`

### 8. Add Social Media Links

Update the social media links in:
- Footer section
- Team member social links
- Contact section

Replace `#` with your actual social media URLs.

## 📱 Responsive Breakpoints

The website is responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Small Mobile: Below 480px

## 🎨 Typography

The website uses:
- **Bebas Neue** - For headings (loaded from Google Fonts)
- **Montserrat** - For body text (loaded from Google Fonts)

To change fonts, update the Google Fonts link in `index.html` and the CSS variables in `styles.css`.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📦 Dependencies

### External Resources
- **Font Awesome 6.4.0** - For icons
- **Google Fonts** - For typography (Bebas Neue, Montserrat)

All other functionality is built with vanilla JavaScript - no frameworks required!

## 🎯 SEO Tips

1. **Update Meta Tags** - Edit the meta description in `index.html`
2. **Add Alt Text** - When adding images, always include descriptive alt text
3. **Create Sitemap** - Generate and add a `sitemap.xml` file
4. **Add robots.txt** - Create a `robots.txt` file in the root directory
5. **Google Analytics** - Add your tracking code before the closing `</head>` tag
6. **Schema Markup** - Consider adding LocalBusiness schema markup

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add this before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

## 🔒 Security Headers

Security headers are pre-configured in `netlify.toml`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

## 🚀 Performance Optimization

The website is already optimized, but you can further improve:

1. **Optimize Images** - Use compressed JPG/PNG or modern formats (WebP)
2. **Enable Caching** - Already configured in `netlify.toml`
3. **Lazy Loading** - Add `loading="lazy"` to image tags
4. **Minify Files** - Use tools to minify CSS and JS for production

## 📝 License

This website template is provided as-is for use by Eder Barber Shop.

## 🤝 Support

For customization help or questions:
1. Check the comments in the code files
2. Refer to this README
3. Consult the official documentation for HTML, CSS, and JavaScript

## ✅ Deployment Checklist

Before going live, make sure to:

- [ ] Update all business information (name, phone, email, address)
- [ ] Add your own images
- [ ] Customize colors to match your brand
- [ ] Update services and pricing
- [ ] Add team member information
- [ ] Connect the booking form
- [ ] Add Google Maps embed
- [ ] Update social media links
- [ ] Test on multiple devices
- [ ] Test all links and forms
- [ ] Add favicon (optional)
- [ ] Set up custom domain on Netlify (optional)
- [ ] Test the live site thoroughly

## 🎉 You're All Set!

Your professional barber shop website is ready to impress customers and attract new business. Good luck!

---

**Diseñado con ❤️ por Sirob Labs para Eder Barber Shop**

