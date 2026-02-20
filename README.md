# Simple Wiki Direct "&"

A lightweight browser extension that seamlessly connects complex Wikipedia articles to their "Simple English" counterparts.

## What it does
Whenever you hover over a Wikipedia link, the extension silently queries the Wikipedia API. If a Simple English version of that article exists, a floating, neon `&` icon will appear perfectly anchored to the word. Clicking it opens the simplified article in a new tab.

## Repository Overview
* `manifest.json` - The core configuration mapping for the browser extension.
* `content.js` - The JavaScript logic handling event delegation, API fetching, and smart DOM positioning.
* `style.css` - The styling, layout, and 3D Y-axis rotation animations.
* `index.html` - The source code for the GitHub Pages landing website.
* `logo.png` - The custom branding icon for the extension.

## Tech Stack
* Vanilla JavaScript (ES6+ async/await)
* CSS3 (Flexbox, Keyframes, 3D Transforms)
* HTML5
