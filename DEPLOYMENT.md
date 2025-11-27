# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy via Vercel CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy the project:**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No**
   - Project name? **puttinggreen-installer-directory** (or your choice)
   - Directory? **./** (current directory)
   - Override settings? **No**

3. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub first, then:
   git remote add origin https://github.com/YOUR_USERNAME/puttinggreen-installer-directory.git
   git branch -M main
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset:** Next.js
     - **Root Directory:** ./
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next`
     - **Install Command:** `npm install`
   - Click **Deploy**

3. **Access your live site:**
   - Vercel will provide a URL like: `https://puttinggreen-installer-directory.vercel.app`
   - The installer directory is at: `/installers-test`

---

## Environment Variables

This project doesn't require any environment variables for the test task. In production, you might add:

```env
# Future additions
NEXT_PUBLIC_API_URL=https://api.puttinggreen.com
DATABASE_URL=postgresql://...
```

---

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Update your DNS records as instructed

---

## Continuous Deployment

Once deployed via GitHub:
- Every push to `main` branch triggers a production deployment
- Pull requests get automatic preview deployments
- Vercel provides deployment previews with unique URLs

---

## Troubleshooting

### Build fails on Vercel
- Ensure all dependencies are in `package.json` (not just devDependencies)
- Check that TypeScript compiles: `npx tsc --noEmit`
- Verify build works locally: `npm run build`

### Page not found
- Remember the route is `/installers-test`, not `/`
- Update homepage in README after deployment

### Slow initial load
- This is normal for serverless cold starts
- Consider upgrading to Vercel Pro for faster Edge Functions

---

## Post-Deployment Checklist

- [ ] Verify `/installers-test` loads correctly
- [ ] Test all filters (search, city, skill level)
- [ ] Test sorting functionality
- [ ] Open installer detail sheets
- [ ] Test on mobile device
- [ ] Update README.md with live demo link
- [ ] Share deployment URL with Jeremy Still

---

## Deployment URL Format

Your deployment will be available at:
```
https://puttinggreen-installer-directory-[hash].vercel.app/installers-test
```

Or with custom domain:
```
https://yourdomain.com/installers-test
```
