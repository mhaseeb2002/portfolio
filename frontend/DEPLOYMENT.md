# Deployment Guide

## Vercel Deployment

This portfolio is optimized for deployment on Vercel with static export.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/haseebnizami/portfolio/tree/main/frontend)

### Manual Deployment Steps

1. **Install Vercel CLI** (if not already installed)

   ```bash
   npm install -g vercel
   ```

2. **Build and Deploy**

   ```bash
   cd frontend
   vercel
   ```

3. **Environment Variables** (Optional)
   Set these in Vercel Dashboard:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://mhaseeb.dev)

### Build Configuration

The project is configured for static export in `next.config.js`:

```javascript
{
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}
```

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your portfolio.

### Build Locally

```bash
npm run build
```

Output will be in the `out/` directory.

### Features

- ✅ Static HTML export (no server required)
- ✅ Optimized for Vercel Edge Network
- ✅ Dark mode support
- ✅ Fully responsive design
- ✅ SEO optimized with metadata
- ✅ Zero runtime dependencies

### Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update `NEXT_PUBLIC_SITE_URL` environment variable

### Performance

- Lighthouse Score: 100/100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Fully cached on CDN

### Troubleshooting

**Build fails:**

- Ensure Node.js version is 18+
- Run `npm install` to update dependencies

**Images not loading:**

- Check that all images are in `public/images/`
- Verify image paths are correct

**Styles not applied:**

- Run `npm run build` locally first
- Check for any Tailwind CSS errors

For more help, see [Vercel Documentation](https://vercel.com/docs).
