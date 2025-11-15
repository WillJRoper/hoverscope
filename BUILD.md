# Building Hoverscope

This extension supports both Chrome and Firefox, which require slightly different manifest files.

## Quick Build

To build both versions at once:

```bash
./build.sh
```

This creates:
- `hoverscope-chrome-v1.4.0.zip` - for Chrome Web Store
- `hoverscope-firefox-v1.4.0.zip` - for Firefox Add-ons

## Manual Build

### For Chrome:
```bash
cp manifest.chrome.json manifest.json
zip -r hoverscope-chrome.zip manifest.json background.js content.js styles.css telescopes.json icon128.png
```

### For Firefox:
```bash
cp manifest.firefox.json manifest.json
zip -r hoverscope-firefox.zip manifest.json background.js content.js styles.css telescopes.json icon128.png
```

## Development

### Testing Chrome locally:
```bash
cp manifest.chrome.json manifest.json
# Load unpacked extension in Chrome from this directory
```

### Testing Firefox locally:
```bash
cp manifest.firefox.json manifest.json
# Load temporary add-on in Firefox from this directory
```

## File Structure

- `manifest.chrome.json` - Chrome-specific manifest (uses service_worker)
- `manifest.firefox.json` - Firefox-specific manifest (uses scripts, includes gecko settings)
- `manifest.json` - Generated file (gitignored, created by build script)
- Source files: `background.js`, `content.js`, `styles.css`, `telescopes.json`, `icon128.png`

## Version Updates

When releasing a new version:
1. Update version in both `manifest.chrome.json` and `manifest.firefox.json`
2. Update `VERSION` in `build.sh`
3. Run `./build.sh`
4. Upload the generated zip files to respective stores
