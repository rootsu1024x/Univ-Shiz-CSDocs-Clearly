chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url.match("shizuoka.ac.jp")) {
        chrome.pageAction.show(tabId);
    }
});