// 1. Create the outer box AND the inner span
const btn = document.createElement('div');
btn.id = 'simple-wiki-btn';

const amp = document.createElement('span');
amp.id = 'simple-wiki-amp';
amp.textContent = '&';

btn.appendChild(amp);
document.body.appendChild(btn);

let currentSimpleUrl = "";
let hideTimeout;
const apiCache = {}; 

async function checkSimpleWikiExists(articleTitle) {
    if (apiCache[articleTitle] !== undefined) {
        return apiCache[articleTitle]; 
    }

    const apiUrl = `https://simple.wikipedia.org/w/api.php?action=query&titles=${articleTitle}&format=json&origin=*`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const exists = !data.query.pages["-1"]; 
        apiCache[articleTitle] = exists; 
        return exists;
    } catch (error) {
        return false;
    }
}

document.addEventListener('mouseover', async (e) => {
    const link = e.target.closest('a[href^="/wiki/"]');
    
    // Ignore if not a link, not in the main article, or is a special page (like Help:)
    if (!link || !link.closest('#bodyContent') || link.getAttribute('href').includes(':')) return;

    clearTimeout(hideTimeout);
    
    let rawUrl = link.getAttribute('href').split('/wiki/')[1];
    rawUrl = rawUrl.split('#')[0]; 
    const articleTitle = decodeURIComponent(rawUrl);
    
    const exists = await checkSimpleWikiExists(articleTitle);
    
    if (exists) {
        currentSimpleUrl = `https://simple.wikipedia.org/wiki/${rawUrl}`;
        
        // --- SMART POSITIONING ---
        // Get the exact dimensions and position of the hovered word
        const rect = link.getBoundingClientRect();
        
        // rect.right is the end of the word. We add window.scrollX in case the user scrolled horizontally
        btn.style.left = `${rect.right + window.scrollX}px`;
        
        // rect.top is the top of the word. We subtract 15 to make it float slightly above the word. 
        // We add window.scrollY to account for scrolling down the page.
        btn.style.top = `${rect.top + window.scrollY - 15}px`;
        
        btn.classList.add('visible');
    }
});

document.addEventListener('mouseout', (e) => {
    const link = e.target.closest('a[href^="/wiki/"]');
    if (link && link.closest('#bodyContent')) {
        hideTimeout = setTimeout(() => {
            btn.classList.remove('visible');
        }, 300);
    }
});

btn.addEventListener('mouseover', () => clearTimeout(hideTimeout));
btn.addEventListener('mouseout', () => {
    hideTimeout = setTimeout(() => btn.classList.remove('visible'), 300);
});

btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    if (currentSimpleUrl) {
        window.open(currentSimpleUrl, '_blank'); 
        btn.classList.remove('visible');
    }
});
