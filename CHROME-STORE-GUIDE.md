# Publishing Hoverscope to Chrome Web Store

This guide walks you through publishing Hoverscope so users can install it with one click.

## Why Publish?

✅ **One-click installation** - No "Load unpacked" needed  
✅ **Automatic updates** - Push updates to all users instantly  
✅ **Professional presence** - Shows up in Chrome Web Store search  
✅ **Build trust** - Google-verified extension  
✅ **Analytics** - See how many people use it  

## Cost & Requirements

- **One-time fee:** $5 (to register as Chrome Web Store developer)
- **Time:** ~1 hour for first submission, then 1-3 days review
- **Requirements:** Google account, payment method, extension files

---

## Step 1: Prepare Your Extension

### Files you already have:
- ✅ manifest.json
- ✅ All code files
- ✅ Icons (16x16, 48x48, 128x128)
- ✅ Store icons created (128x128, 440x440)
- ✅ Promotional banner (1400x560)

### Additional items needed:

1. **Screenshots** (1-5 recommended)
   - Take screenshots of Hoverscope in action on arXiv
   - Show the tooltip appearing over "JWST", "Hubble", etc.
   - Recommended size: 1280x800 or 640x400
   - Save as PNG

2. **Promotional images** (already created!)
   - Small tile: 440x280 (use store_icon_440.png)
   - Marquee: 1400x560 (already created: store_banner_1400x560.png)

3. **Description text** (see template below)

---

## Step 2: Package Your Extension

Create a ZIP file with all extension files:

```bash
cd hoverscope
zip -r hoverscope-chrome-v1.3.zip manifest.json background.js content.js styles.css telescopes.json icon*.png
```

**Important:** Do NOT include:
- ❌ README files
- ❌ Documentation
- ❌ Python scripts
- ❌ Store promotional images (uploaded separately)

Only include files needed for the extension to run.

---

## Step 3: Register as Developer

1. Go to: https://chrome.google.com/webstore/devconsole/
2. Sign in with your Google account
3. Pay the **$5 one-time registration fee**
4. Accept the developer agreement

---

## Step 4: Create New Item

1. Click **"New Item"** button
2. Upload your `hoverscope-chrome-v1.3.zip` file
3. Click **"Upload"**

---

## Step 5: Fill in Store Listing

### **Product Details:**

**Display Name:**
```
Hoverscope - Telescope Info for arXiv
```

**Summary:** (132 char max)
```
Hover over telescope names on arXiv to instantly see specifications, launch dates, wavelengths, and survey details.
```

**Description:**
```
🔭 Hoverscope - Telescope & Satellite Information at Your Fingertips

Tired of Googling telescope specifications while reading astronomy papers? Hoverscope shows you everything you need to know with a simple hover.

✨ HOW IT WORKS
Just hover over any telescope or satellite name on arXiv (e.g., JWST, Hubble, Chandra, ALMA, Gaia) and instantly see:
• Launch date
• Wavelength coverage
• Survey area
• Location (orbit or ground)
• Current operational status
• Brief mission description

🎯 PERFECT FOR
• Astronomy researchers reading papers
• Graduate students learning about instruments
• Anyone exploring arXiv astronomy sections

📚 INCLUDED TELESCOPES
30+ major telescopes and instruments including:
• Space telescopes: JWST, Hubble, Chandra, Spitzer, Kepler, TESS, Gaia, Euclid
• Ground-based: ALMA, VLA, SDSS, Vera Rubin Observatory (LSST)
• Missions: Planck, Fermi, XMM-Newton, and more
• JWST instruments: MIRI, NIRSpec, NIRCam

🔄 ALWAYS UP-TO-DATE
The database can be easily updated with new telescopes and missions.

🎨 FEATURES
• Clean, unobtrusive tooltips
• Dark mode support
• Works on paper abstracts and full PDFs
• No data collection - completely private
• Lightweight and fast

🌟 OPEN TO CONTRIBUTIONS
Want to add a telescope? Found outdated information? Contributions welcome!

Perfect for anyone who reads astronomy papers and wants quick access to telescope specifications without breaking their reading flow.
```

**Category:**
- Primary: **Productivity**
- Secondary: **Education**

**Language:**
- English

---

### **Graphic Assets:**

Upload the images we created:

1. **Store icon (128x128):**  
   Upload: `store_icon_128.png`

2. **Screenshots:**  
   Take 3-5 screenshots showing:
   - Tooltip on "JWST"
   - Tooltip on "Hubble"  
   - Tooltip on "ALMA"
   - Abstract page with multiple telescopes highlighted
   - PDF view with tooltips

3. **Small promotional tile (440x280):**  
   Upload: `store_icon_440.png` (you may need to crop to 440x280)

4. **Marquee promotional tile (1400x560):**  
   Upload: `store_banner_1400x560.png`

---

### **Additional Information:**

**Official URL:** (optional)
```
https://github.com/yourusername/hoverscope
```

**Homepage URL:** (optional)
```
https://github.com/yourusername/hoverscope
```

**Support URL:** (optional)
```
https://github.com/yourusername/hoverscope/issues
```

---

### **Privacy:**

**Single Purpose:**
```
This extension helps users quickly access telescope and satellite specifications while reading astronomy papers on arXiv.
```

**Permission Justifications:**

- **Storage:** Required to cache the telescope database locally for fast access
- **Host permissions (raw.githubusercontent.com):** Optional, for future updates from GitHub

**Privacy Policy:** (if you don't have a website, you can use this)
```
Hoverscope does not collect, store, or transmit any user data. All processing happens locally in your browser. The extension only accesses arXiv.org to detect telescope names in papers you're reading. No analytics, tracking, or third-party services are used.
```

---

### **Distribution:**

**Visibility:**
- ✅ Public (recommended)
- Or: Unlisted (only people with link can find it)

**Regions:**
- All regions (recommended)

**Pricing:**
- Free

---

## Step 6: Submit for Review

1. Review all information
2. Click **"Submit for Review"**
3. Wait for Google's review (usually 1-3 business days)

### What Google Checks:
- ✅ Code quality and security
- ✅ Permissions match functionality
- ✅ No malware or tracking
- ✅ Description is accurate
- ✅ Icons and screenshots are appropriate

---

## Step 7: After Approval

Once approved, your extension will be live at:
```
https://chrome.google.com/webstore/detail/hoverscope/[YOUR-EXTENSION-ID]
```

Users can install with one click!

### Next Steps:
1. **Share it:**
   - Post on r/Astronomy
   - Tweet to astronomy community
   - Share on astronomy Slack/Discord channels
   - Email astronomy departments

2. **Update the README:**
   Add installation link:
   ```
   Install from Chrome Web Store: [link]
   ```

3. **Monitor reviews:**
   - Respond to user feedback
   - Fix bugs quickly
   - Add requested telescopes

---

## Updating Your Extension

When you want to push updates:

1. Update version in `manifest.json`: `"version": "1.4.0"`
2. Create new ZIP file
3. Go to Chrome Web Store Developer Dashboard
4. Click on Hoverscope
5. Click **"Package"** → **"Upload new package"**
6. Submit for review
7. Updates roll out automatically to all users once approved

---

## Marketing Ideas

Once published:

1. **Academic outreach:**
   - Email astronomy departments
   - Post on arxiv-announce mailing list
   - Share on astronomy social media

2. **Content:**
   - Write a blog post about it
   - Demo video on YouTube
   - GIF showing it in action

3. **Community:**
   - Make a GitHub repo for contributions
   - Accept telescope additions from community
   - Feature user testimonials

---

## Cost Summary

- **Chrome Web Store registration:** $5 (one-time)
- **Hosting:** $0 (extension files hosted by Google)
- **Updates:** $0 (unlimited)
- **Firefox Add-ons:** $0 (if you publish there too)

**Total cost to publish:** $5 forever!

---

## Timeline

- Registration: 5 minutes
- Filling in details: 30-60 minutes
- First review: 1-3 business days
- Updates after that: 1-2 business days

---

## Support

If you need help with any step:
1. Chrome Web Store documentation: https://developer.chrome.com/docs/webstore/
2. Email me your questions!

Good luck with the launch! 🚀
