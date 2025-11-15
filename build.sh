#!/bin/bash

# Build script for Hoverscope extension
# Packages the extension for both Chrome and Firefox

VERSION="1.4.0"

echo "Building Hoverscope v${VERSION}..."

# Clean up old builds
rm -f hoverscope-chrome-v${VERSION}.zip
rm -f hoverscope-firefox-v${VERSION}.zip

# Build Chrome version
echo "Building Chrome version..."
cp manifest.chrome.json manifest.json
zip -r hoverscope-chrome-v${VERSION}.zip \
  manifest.json \
  background.js \
  content.js \
  styles.css \
  telescopes.json \
  icon128.png

# Build Firefox version
echo "Building Firefox version..."
cp manifest.firefox.json manifest.json
zip -r hoverscope-firefox-v${VERSION}.zip \
  manifest.json \
  background.js \
  content.js \
  styles.css \
  telescopes.json \
  icon128.png

echo "Done! Created:"
echo "  - hoverscope-chrome-v${VERSION}.zip"
echo "  - hoverscope-firefox-v${VERSION}.zip"
echo ""
echo "Note: manifest.json now points to the Firefox version."
echo "To develop/test Chrome locally, run: cp manifest.chrome.json manifest.json"
