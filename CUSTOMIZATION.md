# Quick Customization Guide

This guide will help you quickly customize the most important parts of your website.

**Note:** All website content is in Spanish. This guide is in English for technical reference.

## 🎯 Top Priority Customizations

### 1. Business Contact Information

**File:** `index.html`

Search for and replace:
- Phone: `(555) 123-4567` → Your phone number
- Email: `info@ederbarbershop.com` → Your email
- Address: `123 Main Street, Downtown Area, City, State 12345` → Your address

### 2. Business Name (if different)

**File:** `index.html`

Search for: `Eder Barber Shop` or `EDER BARBER SHOP`
Replace with: Your business name (maintain the same case/format)

### 3. Business Hours

**File:** `index.html`

Find the section with `id="book"` and update the hours in the "Business Hours" card.

### 4. Services & Pricing

**File:** `index.html`

Find the section with `id="services"` and update:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-cut"></i>  <!-- Change icon if needed -->
    </div>
    <h3>Service Name</h3>  <!-- Update name -->
    <p>Service description</p>  <!-- Update description -->
    <span class="price">$25</span>  <!-- Update price -->
</div>
```

Also update the same services in the booking form dropdown (search for `<select id="service"`).

### 5. Colors

**File:** `css/styles.css`

At the very top, find the `:root` section and change:

```css
:root {
    --primary-color: #d4af37;  /* Main brand color (gold) */
    --secondary-color: #1a1a1a;  /* Dark backgrounds */
    --accent-color: #c9a22c;  /* Hover/accent color */
}
```

Try these popular color schemes:

**Classic Barber (Red & Black):**
```css
--primary-color: #dc3545;
--secondary-color: #1a1a1a;
--accent-color: #c82333;
```

**Modern Blue:**
```css
--primary-color: #0066cc;
--secondary-color: #1a1a1a;
--accent-color: #0052a3;
```

**Elegant Dark:**
```css
--primary-color: #8b7355;
--secondary-color: #0f0f0f;
--accent-color: #6d5a45;
```

### 6. Team Members

**File:** `index.html`

Find the section with `id="team"` and update each team member:

```html
<div class="team-member">
    <div class="member-photo">
        <i class="fas fa-user-tie"></i>
        <!-- Or replace with: <img src="images/team/name.jpg" alt="Barber Name"> -->
    </div>
    <h3>Barber Name</h3>  <!-- Update name -->
    <p class="member-title">Title/Role</p>  <!-- Update title -->
    <p class="member-bio">Bio description</p>  <!-- Update bio -->
    <div class="member-social">
        <a href="INSTAGRAM_URL"><i class="fab fa-instagram"></i></a>
        <a href="FACEBOOK_URL"><i class="fab fa-facebook"></i></a>
    </div>
</div>
```

## 📸 Adding Your Own Images

### Create Image Folders

```bash
mkdir -p images/gallery images/team
```

### For Gallery Photos

**File:** `index.html`

Replace this:
```html
<div class="gallery-item">
    <div class="gallery-placeholder">
        <i class="fas fa-camera"></i>
        <p>Haircut Gallery</p>
    </div>
</div>
```

With this:
```html
<div class="gallery-item">
    <img src="images/gallery/cut1.jpg" alt="Haircut style description">
</div>
```

### For Team Photos

Replace the `.member-photo` content:
```html
<div class="member-photo">
    <img src="images/team/eder.jpg" alt="Eder Martinez" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

### For Hero Background

**File:** `css/styles.css`

Find `.hero {` and add:
```css
.hero {
    /* ... existing styles ... */
    background-image: url('../images/hero-background.jpg');
    background-size: cover;
    background-position: center;
}
```

### For About Section Image

**File:** `index.html`

Replace this:
```html
<div class="image-placeholder">
    <i class="fas fa-store"></i>
</div>
```

With this:
```html
<img src="images/barbershop-interior.jpg" alt="Eder Barber Shop Interior" style="width: 100%; height: 100%; object-fit: cover;">
```

## 🗺️ Adding Google Maps

1. Go to https://www.google.com/maps
2. Search for your business address
3. Click "Share" button
4. Click "Embed a map"
5. Copy the `<iframe>` code
6. In `index.html`, find `.map-placeholder` div and replace with your iframe:

```html
<div class="contact-map">
    <iframe 
        src="YOUR_GOOGLE_MAPS_EMBED_URL" 
        width="100%" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>
```

## 📱 Social Media Links

Update social media links throughout the site:

**In Footer and Contact sections:**
```html
<a href="https://facebook.com/yourpage" class="social-link">
    <i class="fab fa-facebook"></i>
</a>
<a href="https://instagram.com/yourpage" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
<a href="https://twitter.com/yourpage" class="social-link">
    <i class="fab fa-twitter"></i>
</a>
<a href="https://tiktok.com/@yourpage" class="social-link">
    <i class="fab fa-tiktok"></i>
</a>
```

## 📝 Booking Form Setup

### Option 1: Netlify Forms (Easiest)

**File:** `index.html`

Update the form tag:
```html
<form class="booking-form" name="booking" method="POST" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="booking">
    <!-- Add this hidden field for spam protection -->
    <p style="display: none;">
        <label>Don't fill this out: <input name="bot-field"></label>
    </p>
    <!-- ... rest of form fields ... -->
</form>
```

**File:** `js/main.js`

Comment out or remove the `bookingForm.addEventListener('submit', ...)` section.

After deployment, you'll receive form submissions in your Netlify dashboard.

### Option 2: Email Integration

Use services like:
- **Formspree**: https://formspree.io (Easy setup)
- **EmailJS**: https://www.emailjs.com (Free tier available)
- **Web3Forms**: https://web3forms.com (Simple and free)

## 🎨 Testimonials

**File:** `index.html`

Find the testimonials section and update:

```html
<div class="testimonial-card">
    <div class="stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>  <!-- Remove stars for lower ratings -->
    </div>
    <p class="testimonial-text">"Your customer review here..."</p>
    <div class="testimonial-author">
        <strong>Customer Name</strong>
        <span>Regular Customer</span>
    </div>
</div>
```

## 🔍 SEO Improvements

**File:** `index.html`

Update the meta description in the `<head>` section:

```html
<meta name="description" content="Your custom description about your barber shop services and location">
<title>Your Business Name - Professional Barber Services in [City]</title>
```

Add more meta tags:
```html
<meta name="keywords" content="barber shop, haircut, beard trim, [your city], men's grooming">
<meta name="author" content="Eder Barber Shop">

<!-- Open Graph for social media -->
<meta property="og:title" content="Eder Barber Shop">
<meta property="og:description" content="Professional barbering services">
<meta property="og:image" content="https://yourwebsite.com/images/og-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

## ⚡ Quick Testing Checklist

After customization:

- [ ] Test all internal links (click every navigation item)
- [ ] Test booking form submission
- [ ] Check phone number links on mobile
- [ ] Verify email links open mail client
- [ ] Test on mobile device (or use browser dev tools)
- [ ] Check all images load correctly
- [ ] Verify Google Maps shows correct location
- [ ] Test social media links
- [ ] Check all text for typos
- [ ] Verify business hours are correct

## 🆘 Common Issues

### Images Not Showing
- Check file paths are correct
- Ensure images are in the `images/` folder
- Verify image file names match exactly (case-sensitive)

### Form Not Working
- Make sure you've deployed to Netlify
- Check that `data-netlify="true"` is in the form tag
- Look for form submissions in Netlify dashboard

### Mobile Menu Not Working
- Clear browser cache
- Check that `js/main.js` is linked correctly
- Open browser console (F12) to check for errors

### Wrong Colors
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check CSS file saved properly
- Verify color codes are valid hex codes

## 💡 Pro Tips

1. **Backup First**: Make a copy of files before editing
2. **One Change at a Time**: Test after each change
3. **Use Browser DevTools**: Right-click → Inspect to test CSS changes live
4. **Mobile First**: Always check mobile view
5. **Fast Images**: Compress images before uploading (use tinypng.com)

---

**Designed by Sirob Labs**

Need more help? Check the main README.md file for detailed documentation!

