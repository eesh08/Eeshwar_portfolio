# Deployment Guide

This guide covers deploying your portfolio to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest and recommended way to deploy your Next.js portfolio.

### Steps:

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/log in with GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Click "Import"

3. **Configure**:
   - Framework: Next.js (auto-detected)
   - Root Directory: ./ (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Environment Variables: (none needed for basic setup)

4. **Deploy**:
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain:
1. Go to Vercel Dashboard
2. Select your project
3. Go to "Settings" → "Domains"
4. Add your custom domain
5. Follow DNS configuration instructions

## 📦 GitHub Pages

### Limitations:
- Requires static export
- No dynamic features
- No API routes

### Steps:

1. **Update next.config.ts**:
```ts
const nextConfig: NextConfig = {
  output: 'export',
  unoptimized: true,
};
```

2. **Build and push**:
```bash
npm run build
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages"
   - Source: "GitHub Actions"
   - Deploy Next.js with GitHub Actions

## 🐳 Docker Deployment

### Create Dockerfile:

```dockerfile
FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🏢 Other Hosting Options

### Netlify:
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### AWS Amplify:
1. Connect GitHub repository
2. Select Next.js framework
3. Configure build settings
4. Deploy

### Heroku:
1. Create Procfile:
```
web: npm start
```

2. Deploy:
```bash
git push heroku main
```

## 🔒 Environment Variables

If you need environment variables in production:

1. Create `.env.local` (don't commit this):
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

2. For Vercel:
   - Go to Project Settings → Environment Variables
   - Add your variables
   - Redeploy

3. For other platforms:
   - Follow their documentation for environment variables

## 🔍 SEO Optimization

Before deploying:

1. Update `app/layout.tsx` metadata
2. Add favicons to `public/` folder
3. Update Open Graph tags:
```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your description",
  openGraph: {
    title: "Your Name",
    description: "Your description",
    url: "https://yourdomainname.com",
  },
};
```

## 📊 Analytics

### Google Analytics:

1. Create account at [google.com/analytics](https://analytics.google.com)
2. Get your Tracking ID
3. Add to your site using `next/script`

### Vercel Analytics:

Automatically included if you use Vercel!

## 🧪 Pre-deployment Checklist

- [ ] All links are working
- [ ] Contact form is functional
- [ ] Images are optimized
- [ ] No console errors
- [ ] Mobile responsive
- [ ] SEO metadata updated
- [ ] Social links updated
- [ ] Email addresses are real
- [ ] Fonts loaded correctly
- [ ] Page load speed is good

## 🐛 Troubleshooting

### Build fails:
```bash
npm run build
# Check for errors in output
```

### Styling issues:
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Performance issues:
- Optimize images
- Code splitting
- Remove unused packages

## 📞 Support

For deployment help:
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- Create an issue in your repository

---

Good luck with your deployment! 🎉
