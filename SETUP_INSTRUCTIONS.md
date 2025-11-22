# How to Add Your App Files

## Step 1: Prepare Your Files

Make sure you have your app files ready:
- **Android**: Your `.apk` file
- **Windows**: Your `.exe` file  
- **iOS**: Your `.ipa` file (or use App Store link only)

## Step 2: Rename Your Files

Rename your files to match exactly (case-sensitive):

1. **Android APK** → `ksr-learner-android.apk`
2. **Windows EXE** → `ksr-learner-windows.exe`
3. **iOS IPA** → `ksr-learner-ios.ipa`

## Step 3: Place Files in Directory

1. Copy your renamed files into the `files/` folder:
   ```
   website for ksr learner download/
   └── files/
       ├── ksr-learner-android.apk
       ├── ksr-learner-windows.exe
       └── ksr-learner-ios.ipa
   ```

## Step 4: Test Locally

### Option A: Direct File Opening (Limited)
- Simply open `index.html` in your browser
- Downloads may work, but some browsers block local file downloads

### Option B: Local Web Server (Recommended)
Use a local web server for proper testing:

**Using Python:**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Node.js:**
```bash
npx http-server
```
Then open the URL shown (usually `http://localhost:8080`)

**Using PHP:**
```bash
php -S localhost:8000
```
Then open: `http://localhost:8000`

## Step 5: Deploy to Web Server

When deploying to a web server (Netlify, GitHub Pages, Vercel, etc.):

1. **Upload all files** including the `files/` folder
2. **Ensure proper MIME types** are configured:
   - `.apk` → `application/vnd.android.package-archive`
   - `.exe` → `application/x-msdownload`
   - `.ipa` → `application/octet-stream`

### For Netlify:
- Drag and drop your entire folder
- Files will be served automatically

### For GitHub Pages:
- Push to a GitHub repository
- Enable GitHub Pages in settings
- Files will be accessible at: `https://yourusername.github.io/repo-name/files/filename`

### For Custom Server:
- Upload via FTP/SFTP
- Make sure the `files/` folder has read permissions

## Step 6: Update File Paths (If Needed)

If your files are hosted on a CDN or different server, edit `script.js`:

```javascript
// In the triggerDownload() function, change:
const fileUrl = `files/${fileName}`;

// To your CDN URL:
const fileUrl = `https://your-cdn.com/files/${fileName}`;
// Or
const fileUrl = `https://your-server.com/downloads/${fileName}`;
```

## Step 7: Update iOS App Store Link (Optional)

In `index.html`, find the iOS App Store button and update the `href`:

```html
<a href="https://apps.apple.com/app/ksr-learner" target="_blank" ...>
```

Replace with your actual App Store URL. Note: Users can download the IPA file directly or use the App Store link.

## Troubleshooting

### Downloads Not Working?
1. **Check file names** - Must match exactly: 
   - `ksr-learner-android.apk`
   - `ksr-learner-windows.exe`
   - `ksr-learner-ios.ipa`
2. **Check file location** - Files must be in the `files/` folder
3. **Use a web server** - Local file opening may block downloads
4. **Check browser console** - Look for 404 errors (file not found)

### File Size Issues?
- Update the file sizes in `index.html` to match your actual file sizes
- Current sizes shown: Android (26 MB), Windows (488 MB), iOS (11 MB)

### CORS Issues?
- If hosting files on a different domain, ensure CORS headers are set
- Or use the same domain for files and website

## File Structure After Setup

```
website for ksr learner download/
├── index.html
├── styles.css
├── script.js
├── README.md
├── SETUP_INSTRUCTIONS.md
└── files/
    ├── README.txt
    ├── ksr-learner-android.apk  ← Your Android app
    ├── ksr-learner-windows.exe  ← Your Windows app
    └── ksr-learner-ios.ipa      ← Your iOS app
```

## Need Help?

- Check browser console (F12) for errors
- Verify file paths are correct
- Ensure web server is running if testing locally
- Check file permissions on web server

