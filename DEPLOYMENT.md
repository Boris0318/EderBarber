# Netlify Deployment Guide

This guide will walk you through deploying your Eder Barber Shop website to Netlify in just a few minutes.

## 🚀 Method 1: Drag & Drop (Fastest - 2 minutes)

This is the easiest way to get your site online instantly!

### Step-by-Step:

1. **Go to Netlify**
   - Visit https://www.netlify.com
   - Click "Sign up" (you can use GitHub, GitLab, Bitbucket, or email)

2. **Access the Deploy Area**
   - After logging in, you'll see your dashboard
   - Look for the section that says "Want to deploy a new site without connecting to Git? Drag and drop your site folder here"

3. **Drag Your Folder**
   - Open your file explorer/finder
   - Locate the `EgarSalon` folder (the entire folder containing all files)
   - Drag and drop it onto the Netlify dashboard

4. **Wait for Deployment**
   - Netlify will upload and deploy your site (takes 10-30 seconds)
   - You'll get a random URL like `random-name-123456.netlify.app`

5. **Done! Your site is live!**
   - Click the URL to view your live website
   - Share this URL with anyone

### Optional: Change Your Site Name

1. In your Netlify dashboard, click on your site
2. Go to "Site settings"
3. Click "Change site name"
4. Enter your desired name (e.g., `eder-barber-shop`)
5. Your new URL will be: `eder-barber-shop.netlify.app`

## 🔗 Method 2: Deploy from Git (Recommended for Updates)

This method allows you to update your site automatically when you push changes.

### Step-by-Step:

1. **Create a Git Repository**
   ```bash
   cd EgarSalon
   git init
   git add .
   git commit -m "Initial commit - Eder Barber Shop website"
   ```

2. **Push to GitHub**
   - Create a new repository on GitHub.com
   - Follow GitHub's instructions to push your code:
   ```bash
   git remote add origin https://github.com/yourusername/eder-barber-shop.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Log in to Netlify
   - Click "New site from Git"
   - Choose "GitHub" (or your Git provider)
   - Authorize Netlify to access your repositories
   - Select your `eder-barber-shop` repository

4. **Configure Build Settings**
   - **Build command:** Leave empty (or enter nothing)
   - **Publish directory:** `/` (just a forward slash)
   - Click "Deploy site"

5. **Automatic Deployments**
   - Now, every time you push to GitHub, Netlify will automatically update your site!

## 💻 Method 3: Netlify CLI (For Developers)

### Setup:

1. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org

2. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

3. **Login to Netlify**
   ```bash
   netlify login
   ```
   - This will open a browser window to authorize

### Deploy:

1. **Navigate to your project**
   ```bash
   cd EgarSalon
   ```

2. **Deploy to Netlify**
   ```bash
   netlify deploy
   ```
   - Follow the prompts
   - When asked for the publish directory, enter: `.` (just a dot)

3. **For Production Deployment**
   ```bash
   netlify deploy --prod
   ```

## 🌐 Custom Domain Setup (Optional)

Want to use your own domain like `www.ederbarbershop.com`?

### If You Already Own a Domain:

1. **In Netlify Dashboard**
   - Go to your site
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain name

2. **Update Your DNS**
   - Netlify will provide DNS instructions
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Update DNS records as instructed by Netlify
   - Wait 24-48 hours for DNS propagation

### Buy a Domain Through Netlify:

1. In "Domain settings"
2. Click "Add custom domain"
3. Click "Register a new domain"
4. Search for available domains
5. Purchase directly through Netlify (easiest option)

## 🔒 Enable HTTPS (Free & Automatic)

Netlify provides free SSL certificates automatically!

1. Go to "Domain settings"
2. Scroll to "HTTPS"
3. Click "Verify DNS configuration"
4. Click "Provision certificate"
5. Wait a few minutes - done! Your site is now secure with HTTPS

## 📧 Form Submissions Setup

Your booking form is already configured to work with Netlify Forms!

### Enable Netlify Forms:

The form in your `index.html` needs to have these attributes (already included if you follow the CUSTOMIZATION.md guide):

```html
<form name="booking" method="POST" data-netlify="true">
    <input type="hidden" name="form-name" value="booking">
    <!-- ... form fields ... -->
</form>
```

### View Form Submissions:

1. In Netlify dashboard, go to your site
2. Click "Forms" in the top menu
3. You'll see all form submissions here
4. Set up email notifications:
   - Click "Settings and usage"
   - Add notification email addresses

## 📊 Analytics (Optional but Recommended)

### Netlify Analytics:

1. In your site dashboard
2. Click "Analytics" tab
3. Click "Enable analytics"
4. $9/month - Shows visitor stats, top pages, etc.

### Free Alternative - Google Analytics:

1. Sign up at https://analytics.google.com
2. Create a property for your website
3. Get your tracking ID
4. Add this to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads correctly on desktop
- [ ] Site loads correctly on mobile
- [ ] All navigation links work
- [ ] Booking form submits successfully
- [ ] Phone number links work on mobile
- [ ] Email links open mail client
- [ ] Social media links go to correct pages
- [ ] Google Maps shows correct location
- [ ] All images load (if you added them)
- [ ] Test from different devices/browsers

## 🔄 Updating Your Site

### If you used Drag & Drop:
1. Make changes to your local files
2. Go to Netlify dashboard
3. Go to "Deploys" tab
4. Drag and drop the updated folder
5. New version is live in seconds!

### If you used Git:
1. Make changes to your local files
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update services and pricing"
   git push
   ```
3. Netlify automatically deploys the changes!

## 🐛 Troubleshooting

### Site Not Loading
- Check the deploy log in Netlify dashboard
- Ensure all files uploaded correctly
- Try a hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

### Form Not Working
- Verify `data-netlify="true"` is in the form tag
- Check form submissions in Netlify Forms tab
- Ensure form has `name` attribute

### Images Not Showing
- Verify image paths are correct and relative (e.g., `images/photo.jpg`)
- Check images uploaded to Netlify
- Look in browser console (F12) for 404 errors

### Mobile Menu Not Working
- Clear browser cache
- Check JavaScript console for errors
- Verify `js/main.js` is loading

### CSS Not Loading
- Hard refresh your browser
- Check `css/styles.css` path in HTML
- Verify CSS file uploaded to Netlify

## 📱 Testing Tools

Test your deployed site:

- **Mobile Friendly Test**: https://search.google.com/test/mobile-friendly
- **Page Speed**: https://pagespeed.web.dev
- **SSL Test**: https://www.ssllabs.com/ssltest/
- **Broken Links**: https://www.brokenlinkcheck.com

## 💰 Costs

- **Netlify Hosting**: FREE forever (includes SSL, forms, and 100GB bandwidth/month)
- **Custom Domain**: $10-15/year (if buying new)
- **Netlify Analytics**: $9/month (optional)
- **Netlify Forms**: Free for 100 submissions/month

The free tier is more than enough for most small business websites!

## 🎉 Success!

Your website is now live and accessible to the world!

### Share Your Site:
- Add the URL to your business cards
- Share on social media
- Add to Google My Business
- Include in email signatures

### Next Steps:
1. Submit to Google Search Console
2. Create Google My Business listing
3. Share on social media platforms
4. Ask customers to leave reviews
5. Keep content updated regularly

## 🆘 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Community Forum**: https://answers.netlify.com
- **Support**: support@netlify.com

---

**Designed by Sirob Labs**

**Congratulations on launching your website! 🚀**

