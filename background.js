// Background service worker for Hoverscope
// Loads telescope database and caches it

const DATABASE_URL = 'https://raw.githubusercontent.com/nataliehogg/hoverscope/main/database.json';

// Load bundled data on installation - this is the PRIMARY data source
chrome.runtime.onInstalled.addListener(async () => {
  console.log('Hoverscope installed, loading databases...');
  await loadBundledData();
  await loadNamesData();
  // Try to fetch updates from GitHub
  // await tryUpdateFromGitHub();
});

// Load the bundled database.json file
async function loadBundledData() {
  try {
    const response = await fetch(chrome.runtime.getURL('database.json'));
    const data = await response.json();
    await chrome.storage.local.set({
      telescopeData: data,
      lastUpdate: Date.now(),
      dataSource: 'bundled'
    });
    console.log('Hoverscope: Loaded', Object.keys(data).length, 'telescopes from bundled database');
  } catch (error) {
    console.error('Hoverscope: Error loading bundled data:', error);
  }
}

// Load the bundled names.json file
async function loadNamesData() {
  try {
    const response = await fetch(chrome.runtime.getURL('names.json'));
    const data = await response.json();
    await chrome.storage.local.set({
      namesData: data
    });
    console.log('Hoverscope: Loaded', Object.keys(data).length, 'names from bundled database');
  } catch (error) {
    console.error('Hoverscope: Error loading names data:', error);
  }
}

// Try to update from GitHub (optional - only if you've set up a GitHub repo)
async function tryUpdateFromGitHub() {
  // Skip if using default placeholder URL
  if (DATABASE_URL.includes('YOUR_USERNAME')) {
    console.log('Hoverscope: GitHub updates not configured (using bundled data only)');
    return;
  }
  
  try {
    const response = await fetch(DATABASE_URL);
    if (!response.ok) {
      console.log('Hoverscope: Could not fetch from GitHub, using bundled data');
      return;
    }
    
    const data = await response.json();
    await chrome.storage.local.set({ 
      telescopeData: data,
      lastUpdate: Date.now(),
      dataSource: 'github'
    });
    console.log('Hoverscope: Updated database from GitHub');
  } catch (error) {
    console.log('Hoverscope: Using bundled data (GitHub fetch failed)');
  }
}

// Handle messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getTelescopeData') {
    chrome.storage.local.get('telescopeData', (result) => {
      sendResponse(result.telescopeData || {});
    });
    return true; // Keep channel open for async response
  }

  if (request.action === 'getNamesData') {
    chrome.storage.local.get('namesData', (result) => {
      sendResponse(result.namesData || {});
    });
    return true; // Keep channel open for async response
  }

  if (request.action === 'forceUpdate') {
    tryUpdateFromGitHub().then(() => {
      sendResponse({ success: true });
    });
    return true;
  }
});
