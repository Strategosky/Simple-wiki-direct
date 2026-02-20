# Simple Wiki Direct 🧩

A lightweight browser extension that seamlessly connects complex Wikipedia articles to their "Simple English" counterparts.

🌐 **[Visit the Official Website](https://strategosky.github.io/Simple-wiki-direct/)**

## What it does
Whenever you hover over a Wikipedia link, the extension silently queries the Wikipedia API. If a Simple English version of that article exists, a floating, neon `&` icon will appear perfectly anchored to the word. Clicking it opens the simplified article in a new tab.

## How to Install (Developer Mode)
Since this extension is not yet published on the official Mozilla Add-on store, you can load it manually:
1. Clone this repository or download the ZIP.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click the **Load Temporary Add-on...** button.
4. Select the `manifest.json` file from this folder.
5. Go to any standard Wikipedia page and hover over links to see it in action!

## Repository Overview
* `manifest.json` - The core configuration mapping for the browser extension.
* `background.js` - Script to handle toolbar icon clicks and website redirection.
* `content.js` - The JavaScript logic handling event delegation, API fetching, and smart DOM positioning.
* `style.css` - The styling, layout, and 3D Y-axis rotation animations.
* `index.html` - The source code for the GitHub Pages landing website.
* `logo.png` - The custom branding icon for the extension.

## Tech Stack
* Vanilla JavaScript (ES6+ async/await)
* CSS3 (Flexbox, Keyframes, 3D Transforms)
* HTML5
