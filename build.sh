#!/bin/bash

# Build script for Hoverscope extension
# Packages the extension for both Chrome and Firefox for store submission

VERSION="1.4.0"

# Files to include in the extension packages
FILES="manifest.json background.js content.js styles.css telescopes.json icon128.png"

echo "Building Hoverscope v${VERSION} for store submission..."

# Clean up old builds
rm -f hoverscope-chrome-v${VERSION}.zip
rm -f hoverscope-firefox-v${VERSION}.zip

# Build Chrome version
echo "Building Chrome version..."
cp manifest.chrome.json manifest.json
zip -q hoverscope-chrome-v${VERSION}.zip $FILES
echo "  ✓ Created hoverscope-chrome-v${VERSION}.zip"

# Build Firefox version
echo "Building Firefox version..."
cp manifest.firefox.json manifest.json
zip -q hoverscope-firefox-v${VERSION}.zip $FILES
echo "  ✓ Created hoverscope-firefox-v${VERSION}.zip"

echo ""
echo "Store packages ready for upload!"
echo ""
echo "For local development:"
echo "  Chrome:  cp manifest.chrome.json manifest.json"
echo "  Firefox: cp manifest.firefox.json manifest.json"
echo "Then load the extension directly from this folder (no unzipping needed)."
