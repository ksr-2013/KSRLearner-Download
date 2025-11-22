# Deployment Guide

## Option 1: Netlify (Recommended - Easiest)

### Method A: Drag and Drop
1. Go to https://app.netlify.com/
2. Sign up/Login (free account)
3. Drag and drop your entire project folder onto Netlify
4. Your site will be live in seconds!
5. Netlify will give you a URL like: `https://random-name-123.netlify.app`

### Method B: Git Integration
1. Create a GitHub repository
2. Push your code to GitHub
3. Connect GitHub to Netlify
4. Netlify will auto-deploy on every push

### Custom Domain (Optional)
- Go to Site settings → Domain management
- Add your custom domain
- Follow DNS setup instructions

---

## Option 2: GitHub Pages (Free)

### Steps:
1. **Create GitHub Repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., `ksr-learner-downloads`)
   - Make it public

2. **Upload Files:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/ksr-learner-downloads.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings
   - Scroll to Pages section
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Click Save

4. **Your site will be at:**
   - `https://YOUR-USERNAME.github.io/ksr-learner-downloads/`

**Note:** GitHub Pages has a 100MB file size limit per file. If your files are larger, use Netlify instead.

---

## Option 3: Vercel (Free)

### Steps:
1. Go to https://vercel.com/
2. Sign up/Login
3. Click "Add New Project"
4. Import your Git repository OR drag and drop folder
5. Deploy!

---

## Option 4: Custom Server

### Requirements:
- Web hosting with FTP/SFTP access
- PHP, Node.js, or Python support (optional)

### Steps:
1. Upload all files via FTP/SFTP
2. Make sure `files/` folder is uploaded
3. Set proper file permissions (755 for folders, 644 for files)
4. Access your site via your domain

---

## Pre-Deployment Checklist

- [ ] All app files are in `files/` folder:
  - [ ] `ksr-learner-android.apk`
  - [ ] `ksr-learner-windows.exe`
  - [ ] `ksr-learner-ios.ipa`
- [ ] File names match exactly (case-sensitive)
- [ ] Tested locally with web server
- [ ] All downloads work correctly
- [ ] Updated iOS App Store link (if needed)

---

## File Size Considerations

### GitHub Pages:
- **Limit:** 100MB per file
- **Total:** 1GB repository limit
- If files are larger → Use Netlify

### Netlify:
- **Free tier:** 100GB bandwidth/month
- **File size:** No strict limit
- **Best for:** Large files

### Vercel:
- **Free tier:** 100GB bandwidth/month
- **File size:** No strict limit

---

## After Deployment

1. **Test Downloads:**
   - Visit your live site
   - Click each download button
   - Verify files download correctly

2. **Update Links:**
   - Share your new URL
   - Update any documentation

3. **Monitor:**
   - Check download statistics (if available)
   - Monitor bandwidth usage

---

## Troubleshooting Deployment

### Files not downloading?
- Check file names match exactly
- Verify `files/` folder was uploaded
- Check file permissions on server

### 404 errors?
- Ensure all files are in correct locations
- Check case sensitivity of file names
- Verify server configuration

### Large file uploads failing?
- Use Git LFS for large files (GitHub)
- Or use Netlify/Vercel which handle large files better

---

## Quick Deploy Commands

### Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy
netlify deploy --prod
```

### Vercel CLI:
```bash
npm install -g vercel
vercel
vercel --prod
```

---

## Recommended: Netlify

**Why Netlify?**
- ✅ Easiest deployment (drag & drop)
- ✅ Free SSL certificate
- ✅ No file size limits
- ✅ Fast CDN
- ✅ Custom domain support
- ✅ Automatic HTTPS

**Get started:** https://app.netlify.com/drop

