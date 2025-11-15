# Installing Hoverscope in Firefox

Hoverscope works in Firefox, but the installation process is slightly different from Chrome.

## Option 1: Temporary Installation (Quick Testing)

**Best for:** Trying out Hoverscope or personal use  
**Limitation:** Extension is removed when Firefox restarts

### Steps:

1. Open Firefox
2. Type `about:debugging` in the address bar
3. Click **"This Firefox"** on the left sidebar
4. Click **"Load Temporary Add-on..."**
5. Navigate to your `hoverscope` folder
6. Select the **`manifest.json`** file
7. Done! The extension is now active

### Testing:
- Go to https://arxiv.org/abs/2401.17399
- Hover over "JWST" or "Hubble"
- Tooltip should appear!

**Note:** You'll need to repeat these steps each time you restart Firefox.

---

## Option 2: Persistent Installation (Firefox Developer Edition)

**Best for:** Regular use without re-installing  
**Requirement:** Firefox Developer Edition or Nightly

### Steps:

1. **Download Firefox Developer Edition:**  
   https://www.mozilla.org/en-US/firefox/developer/

2. **Disable signature requirement:**
   - Type `about:config` in the address bar
   - Click "Accept the Risk and Continue"
   - Search for: `xpinstall.signatures.required`
   - Double-click to set it to **false**

3. **Load the extension:**
   - Type `about:debugging` in the address bar
   - Click **"This Firefox"**
   - Click **"Load Temporary Add-on..."**
   - Select `manifest.json` from your hoverscope folder

The extension will now persist across browser restarts!

---

## Option 3: Self-Distribution (Advanced)

**Best for:** Distributing to a team or organization

### Steps:

1. **Package the extension:**
   ```bash
   cd hoverscope
   zip -r hoverscope.xpi .
   ```

2. **Sign the extension:**
   - Create account at: https://addons.mozilla.org/developers/
   - Go to: https://addons.mozilla.org/developers/addon/submit/distribution
   - Select "On your own" (self-distribution)
   - Upload your `.xpi` file
   - Mozilla will sign it and return a signed `.xpi`

3. **Install the signed extension:**
   - Drag and drop the signed `.xpi` file into Firefox
   - Or: `about:addons` → Gear icon → "Install Add-on From File"

---

## Option 4: Publish to Firefox Add-ons Store (Recommended for Public Release)

**Best for:** Sharing with the astronomy community

### Requirements:
- Mozilla Add-ons account
- Extension must pass automated + manual review
- Free!

### Steps:

1. **Create account:**  
   https://addons.mozilla.org/developers/

2. **Package extension:**
   ```bash
   cd hoverscope
   zip -r ../hoverscope-firefox.zip *
   ```

3. **Submit for review:**
   - Go to: https://addons.mozilla.org/developers/addon/submit/
   - Upload your zip file
   - Fill in details:
     - **Name:** Hoverscope
     - **Summary:** "Hover over telescope and satellite names on arXiv to see specifications"
     - **Category:** Science & Education
     - **License:** MIT
     - **Privacy Policy:** "No data collection"

4. **Wait for review** (usually 1-3 days)

5. **Once approved:**  
   Users can install with one click from: `https://addons.mozilla.org/firefox/addon/hoverscope/`

---

## Manifest Compatibility

Good news! The current `manifest.json` is compatible with both Chrome and Firefox. You don't need to make any changes.

Both browsers support:
- ✅ Manifest V3
- ✅ Content scripts
- ✅ Background service workers
- ✅ Storage API
- ✅ Same permissions model

---

## Troubleshooting Firefox

### Issue: "This add-on could not be installed because it appears to be corrupt"
**Solution:** Make sure you're selecting the `manifest.json` file, not a folder.

### Issue: Extension disappears after restart (regular Firefox)
**Solution:** This is normal for temporary add-ons. Use Firefox Developer Edition or publish to AMO.

### Issue: Console shows errors about service worker
**Solution:** Firefox has slightly different service worker behavior. Check the Browser Console (Ctrl+Shift+J) for details.

### Issue: Tooltips don't appear
**Solution:** 
1. Press Ctrl+Shift+J to open Browser Console
2. Look for "Hoverscope:" messages
3. Follow the same troubleshooting as Chrome (see TROUBLESHOOTING.md)

---

## Differences Between Chrome and Firefox

### Chrome:
- Developer mode required for unpacked extensions
- Persists until manually removed
- Access via: `chrome://extensions/`

### Firefox (Regular):
- Temporary add-ons removed on restart
- No developer mode needed
- Access via: `about:debugging`

### Firefox (Developer Edition):
- Can persist unsigned extensions
- Requires config change
- Best for development/testing

---

## Recommended Approach

**For personal use:**  
→ Use temporary add-on (re-load after each restart)

**For team/lab:**  
→ Self-sign and distribute `.xpi` file

**For public sharing:**  
→ Publish to Firefox Add-ons store (free, best UX)

---

## Distribution Checklist

When you're ready to share Hoverscope publicly:

- [ ] Create promotional images (screenshots on arXiv)
- [ ] Write good description highlighting astronomy use case
- [ ] Submit to Chrome Web Store ($5 one-time fee)
- [ ] Submit to Firefox Add-ons (free)
- [ ] Share on astronomy forums/Twitter/r/Astronomy
- [ ] Consider making a GitHub repo for community contributions

Let me know if you need help with any of these steps!
