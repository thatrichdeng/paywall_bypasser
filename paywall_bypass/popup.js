function getCurrentTabUrl(callback) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const tab = tabs[0];
        const url = tab.url;
        callback(url);
    });
}

document.getElementById('openSciHub').addEventListener('click', function() {
    getCurrentTabUrl(function(currentUrl) {
        const sciHubBaseUrl = 'https://sci-hub.se/';
        // Use DOI if current page has one, else just try with the URL
        const sciHubUrl = sciHubBaseUrl + currentUrl;
        chrome.tabs.create({ url: sciHubUrl });
    });
});

document.getElementById('open12ft').addEventListener('click', function() {
    getCurrentTabUrl(function(currentUrl) {
        const bypassUrl = 'https://12ft.io/proxy?q=' + encodeURIComponent(currentUrl);
        chrome.tabs.create({ url: bypassUrl });
    });
});