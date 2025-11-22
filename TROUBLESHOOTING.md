# Troubleshooting Guide

## Problem: 502 Bad Gateway Error

If you see "502 Bad Gateway" when accessing `localhost:8000`:

### Solution 1: Use 127.0.0.1 instead
Try accessing: `http://127.0.0.1:8000` instead of `http://localhost:8000`

### Solution 2: Check if server is running
1. Look at the terminal/command prompt where you started the server
2. You should see messages like "Serving HTTP on 127.0.0.1 port 8000"
3. If you see errors, the server didn't start properly

### Solution 3: Make sure Python is installed
1. Open Command Prompt or PowerShell
2. Type: `python --version`
3. If you see an error, install Python from https://www.python.org/

### Solution 4: Try a different port
If port 8000 is busy, try port 8080:
```bash
python -m http.server 8080 --bind 127.0.0.1
```
Then access: `http://127.0.0.1:8080`

### Solution 5: Disable VPN/Extensions
- The UrbanVPN extension might be blocking localhost
- Try disabling VPN extensions temporarily
- Or add `127.0.0.1` to VPN exceptions

## Problem: File downloads not working

### Check file names
Files must be named exactly:
- `ksr-learner-android.apk`
- `ksr-learner-windows.exe`
- `ksr-learner-ios.ipa`

### Check file location
Files must be in the `files/` folder:
```
website for ksr learner download/
└── files/
    ├── ksr-learner-android.apk
    ├── ksr-learner-windows.exe
    └── ksr-learner-ios.ipa
```

### Check browser console
1. Press F12 to open Developer Tools
2. Go to Console tab
3. Look for any red error messages
4. Common errors:
   - 404 Not Found = File doesn't exist or wrong name
   - CORS error = Need to use web server (not file://)

## Problem: Server won't start

### Python not found
- Install Python from https://www.python.org/
- Make sure to check "Add Python to PATH" during installation
- Restart your computer after installation

### Port already in use
If you see "Address already in use":
1. Close other programs using port 8000
2. Or use a different port (8080, 3000, etc.)

### Firewall blocking
Windows Firewall might block the server:
1. Allow Python through firewall when prompted
2. Or manually add exception in Windows Firewall settings

## Quick Test Steps

1. **Start server:**
   - Double-click `start-server.bat`
   - Or run: `python -m http.server 8000 --bind 127.0.0.1`

2. **Open browser:**
   - Go to: `http://127.0.0.1:8000`
   - You should see the KSR Learner website

3. **Test download:**
   - Click any download button
   - File should download (if file exists in `files/` folder)

4. **Check terminal:**
   - You should see GET requests logged
   - Example: `127.0.0.1 - - [date] "GET /files/ksr-learner-windows.exe HTTP/1.1" 200 -`

## Still having issues?

1. Check that all files are in the correct location
2. Verify file names match exactly (case-sensitive)
3. Make sure you're using `http://127.0.0.1:8000` not `file:///`
4. Try a different browser (Chrome, Firefox, Edge)
5. Disable browser extensions temporarily
6. Check Windows Firewall settings

