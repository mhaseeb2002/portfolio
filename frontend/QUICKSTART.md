# Quick Start Guide

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Push to GitHub (if not already)
```bash
cd /Users/muhammadhaseeb/Documents/haseeb/portfolio
git add frontend/
git commit -m "Update portfolio frontend for Vercel deployment"
git push origin main
```

### Step 2: Deploy to Vercel

**Option A: One-Click Deploy**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Select the `frontend` directory as the root
5. Click "Deploy"

**Option B: CLI Deploy**
```bash
cd frontend
npm install -g vercel
vercel
```

### Step 3: Configure Domain (Optional)
1. Go to project settings in Vercel
2. Add your custom domain
3. Update DNS records as instructed
4. Add environment variable:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

## ✅ What's Ready

- ✅ Static HTML export (no server needed)
- ✅ All personal links updated
- ✅ 4 certificates displayed (3 active + AWS coming soon)
- ✅ Dark mode working
- ✅ Fully responsive
- ✅ SEO optimized
- ✅ Zero backend dependencies

## 🎯 Next Actions

1. **Deploy Now**: Use one of the methods above
2. **Test Live**: Visit your Vercel URL
3. **Add Domain**: Configure custom domain if desired
4. **Update AWS Cert**: When you pass the exam, update `src/components/Certifications.tsx`:
   ```typescript
   {
     name: 'AWS Certified Solutions Architect',
     status: 'verified',  // Change from 'coming-soon'
     verifyUrl: 'https://your-credly-link',
     // ... rest stays same
   }
   ```

## 📱 Test Locally First

```bash
cd frontend
npm run dev
# Visit http://localhost:3000
```

## 🔍 Verify Build

```bash
cd frontend
npm run build
# Should complete with no errors
# Output in out/ directory
```

## 📝 Need Help?

- See [README.md](./README.md) for full documentation
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment details
- See [CHANGES.md](./CHANGES.md) for what changed

## 🎨 Customize Later

Want to change colors, add projects, or update content?
1. Edit files in `src/components/`
2. Run `npm run build`
3. Push to GitHub
4. Vercel auto-deploys

---

**Your portfolio is ready to go live! 🚀**

