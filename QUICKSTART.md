# Quick Start Guide - Hoverscope

## Installation (5 minutes)

### Step 1: Get the Files
You should have a folder called `hoverscope` containing these files:
- manifest.json
- content.js
- background.js
- styles.css
- telescopes.json
- icon16.png, icon48.png, icon128.png
- README.md

### Step 2: Load into Chrome/Edge/Brave

1. Open your browser
2. Type `chrome://extensions/` in the address bar and press Enter
3. **Turn ON "Developer mode"** (toggle switch in top-right corner)
4. Click **"Load unpacked"** button
5. Navigate to and select the `hoverscope` folder
6. Done! You should see Hoverscope in your extensions list

### Step 3: Test It Out

1. Go to https://arxiv.org/
2. Open any astronomy paper (try searching "JWST" or "Hubble")
3. Hover your mouse over telescope names like:
   - JWST
   - Hubble
   - Chandra
   - ALMA
   - Gaia
   
4. You should see a tooltip with detailed information!

## Common Issues

**"Load unpacked" button is grayed out?**
→ Make sure Developer mode is enabled (toggle in top-right)

**Nothing happens when I hover?**
→ Refresh the arXiv page after installing the extension

**Tooltip appears but is empty?**
→ Check browser console for errors (F12 → Console tab)

## Next Steps

### For Personal Use
You're all set! The extension will automatically update its telescope database daily.

### To Share With Others
See README.md for instructions on:
- Publishing to Chrome Web Store (makes installation one-click for users)
- Setting up a GitHub repository for the telescope database
- Contributing new telescopes to the database

## Updating the Database

To add new telescopes, edit `telescopes.json` following this structure:

```json
{
  "unique_id": {
    "name": "Telescope Name",
    "aliases": ["Alternative names", "Acronyms"],
    "type": "Space Telescope",
    "launch_date": "Date",
    "wavelengths": "Range",
    "location": "Where it is",
    "status": "Operational/Decommissioned/In Development",
    "description": "What it does"
  }
}
```

Save the file and reload the extension in `chrome://extensions/`.

## Questions?

Check the full README.md for complete documentation!
