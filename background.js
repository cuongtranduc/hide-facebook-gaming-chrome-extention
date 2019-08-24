chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.sendMessage( tabId, {
    message: 'url_changed',
    url: changeInfo.url
  })
});
