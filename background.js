// This listens for a click on the extension's toolbar icon
chrome.action.onClicked.addListener(() => {
    // Opens your GitHub Pages website in a new tab
    chrome.tabs.create({ 
        url: "https://strategosky.github.io/Simple-wiki-direct/" 
    });
});
