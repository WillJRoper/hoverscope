# Hoverscope Troubleshooting Guide

## Nothing happens when I hover over telescope names

### Step 1: Check the Browser Console

1. Open the arXiv page where you're testing
2. Press **F12** (or right-click → Inspect)
3. Click the **Console** tab
4. Look for messages starting with "Hoverscope:"

**What you should see:**
```
Hoverscope: Initializing...
Hoverscope: Loaded 30 telescopes/satellites
Hoverscope: Sample telescopes: jwst, hubble, chandra, spitzer, kepler
Hoverscope: Found X elements to process
Hoverscope: Found and marked X telescope mentions
Hoverscope: Initialization complete
```

### Step 2: Diagnose the Issue

**If you see "No telescope data available":**
- The background script didn't load the data
- Solution: Go to `chrome://extensions/`, find Hoverscope, click **Remove**, then reinstall

**If you see "No target elements found on page":**
- You might not be on an arXiv paper page
- Solution: Go to a paper abstract page like: https://arxiv.org/abs/2401.17399
- Or the full paper page: https://arxiv.org/pdf/2401.17399

**If you see "Found 0 telescope mentions":**
- The paper might not mention any telescopes in our database
- Try searching for "JWST" or "Hubble" on arXiv and open those papers

**If you don't see ANY Hoverscope messages:**
- The content script isn't running
- Check if you're on arxiv.org (not export.arxiv.org or ar5iv.org)
- Try refreshing the page

### Step 3: Check Extension Status

1. Go to `chrome://extensions/`
2. Find **Hoverscope**
3. Make sure it's **enabled** (toggle switch should be blue/on)
4. Click **Details**
5. Scroll to **Site access** - should say "On specific sites" with arxiv.org listed
6. Try clicking **Reload** button (circular arrow icon)

### Step 4: Check Background Service Worker

1. Go to `chrome://extensions/`
2. Find Hoverscope
3. Click **Service worker** link (or "Inspect views")
4. In the console, check for errors
5. Type: `chrome.storage.local.get('telescopeData', console.log)`
6. You should see an object with telescope data

**If you see empty object {}:**
- Background worker failed to load data
- Solution: Remove and reinstall the extension

### Step 5: Test on Known Pages

Try these arXiv pages that definitely mention telescopes:

1. https://arxiv.org/abs/2401.17399 - JWST paper
2. https://arxiv.org/abs/2312.00903 - Mentions multiple telescopes
3. https://arxiv.org/abs/astro-ph/0606440 - Hubble Deep Field

Hover over "JWST", "Hubble", or "Chandra" in the title or abstract.

## Common Issues

### Issue: Extension installed but icon doesn't appear
**Solution:** This is normal - Hoverscope doesn't have a toolbar icon. It works automatically on arXiv pages.

### Issue: Tooltips appear but are empty
**Cause:** Telescope data structure issue  
**Solution:** Redownload the extension files, especially `telescopes.json`

### Issue: Some telescope names work, others don't
**Cause:** Some names might not be in the database or have typos  
**Solution:** Check `telescopes.json` for the exact name and aliases

### Issue: "Failed to load extension" error
**Cause:** Missing files or incorrect manifest  
**Solution:** Make sure ALL files are in the folder:
- manifest.json
- background.js
- content.js
- styles.css
- telescopes.json
- icon16.png, icon48.png, icon128.png

### Issue: Works in Chrome but not Firefox
**Cause:** Firefox handles temporary extensions differently  
**Solution:** Use Firefox Developer Edition or wait for signed version

## Still Not Working?

### Nuclear Option: Complete Reinstall

1. Go to `chrome://extensions/`
2. Remove Hoverscope completely
3. Close ALL Chrome windows
4. Reopen Chrome
5. Reinstall Hoverscope
6. Go directly to: https://arxiv.org/abs/2401.17399
7. Refresh the page (Ctrl+R or Cmd+R)
8. Hover over "JWST" in the title

### Check File Permissions

Make sure Chrome can read all files:
- Right-click the hoverscope folder → Properties
- Ensure files aren't marked as "Read-only" or blocked

### Try a Different Browser

Install in Edge or Brave to see if it's a Chrome-specific issue.

## Getting Help

If none of this works, share:
1. Your Chrome version (chrome://version/)
2. Operating system
3. Console messages (screenshot)
4. Which arXiv page you're testing on

## Debug Mode

Want more detailed logging? Edit `content.js` and change line 9 to:
```javascript
const DEBUG = true;
```

This will add extra console messages showing exactly what the extension is doing.
