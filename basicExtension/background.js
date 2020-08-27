/** background.js - PremierExtension - background script */

chrome.runtime.onInstalled.addListener(function(){
  chrome.storage.sync.set({color: '#3aa757'}, function(){
    console.log("The color key has been set.");
  });

  chrome.webRequest.onCompleted.addListener(
    function(details){
      console.log('webRequest');
      console.log(details);
      if (details.tabId >= 0 ) {
        chrome.pageAction.show(details.tabId);
      }
    }, {urls: ['https://developer.mozilla.org/*']}
  );
  /*let urlFilters = { urls: ['https://developer.mozilla.org/*']};
  chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tabInfo, urlFilters){
        console.log(tabInfo);
        chrome.pageAction.show(tabId);
    }
  );*/

  let statusFilter = { properties: ['status']};
  chrome.tabs.onUpdated.addListener(
    function(tabId, changeInfo, tabInfo, statusFilter){
      if (changeInfo.status === 'loading'){
        chrome.pageAction.hide(tabId);
      }
    }
  );

  function logTabs(tabs) {
    let tab = tabs[0]; // Safe to assume there will only be one result
    console.log(tab.url);
}

browser.tabs.query({currentWindow: true, active: true}).then(logTabs, console.error);


});
