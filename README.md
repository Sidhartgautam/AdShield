# 🛡️ Lynnchsid's AdShield

## Project Overview

**Lynnchsid's AdShield** is a lightweight and efficient Chrome extension designed to block unwanted advertisements and trackers, providing a cleaner and faster Browse experience. Built on Manifest V3, it leverages Chrome's `declarativeNetRequest` API for performant and privacy-focused content blocking.

## Features

* **Effective Ad Blocking:** Blocks common ad networks and tracking domains.
* **Redirect Prevention:** Helps prevent malicious ad pages from opening or redirecting your Browse.
* **Manifest V3 Compliant:** Utilizes Chrome's latest extension platform for enhanced security, privacy, and performance.
* **Declarative Rules:** Rules are processed natively by Chrome, leading to minimal performance overhead.
* **Simple & Focused:** Designed to be straightforward and effective without unnecessary complexities.

## Technologies Used

* **Google Chrome Extension Platform (Manifest V3)**
* **`declarativeNetRequest` API:** For efficient and declarative content blocking.
* **JavaScript:** For background service worker and any dynamic rule management (currently minimal).
* **JSON:** For defining blocking rules.

## Setup Instructions

Follow these steps to load Lynnchsid's AdShield into your Chrome browser.

### 1. Project Files

Ensure you have the following three files in a single directory (e.g., `adshield-extension`):

* `manifest.json`
* `background.js`
* `rules.json`


Load the Extension in Chrome
Open Chrome Extensions Page:

Type chrome://extensions into your browser's address bar and press Enter.

Enable Developer Mode:

In the top-right corner of the Extensions page, toggle on the "Developer mode" switch.

Load Unpacked Extension:

Click the "Load unpacked" button that appears.

Navigate to and select the root folder where you saved your manifest.json, background.js, and rules.json files.

Verify:

Lynnchsid's AdShield should now appear in your list of extensions without any red error messages.

How to Verify it's Working
Visit Ad-Heavy Websites:

Navigate to websites that are typically filled with advertisements (e.g., free news sites, video platforms).

Observe if banners, pop-ups, or video ads are no longer appearing, or if there are empty spaces where they used to be.

Use Chrome Developer Tools (Network Tab):

Open Developer Tools (Ctrl+Shift+I or Cmd+Option+I).

Go to the "Network" tab.

Reload the page.

Look for requests with a Status of (canceled) or that appear in red. These are often the blocked ad requests. You can also use the filter bar to search for domains like doubleclick.net, googlesyndication.com, etc.

Contributing
This project is a personal learning endeavor, but suggestions for improving blocking effectiveness (e.g., new ad domains/patterns to block) are always welcome! Feel free to open an issue or submit a pull request.

License
[Lynnch Siddhu]