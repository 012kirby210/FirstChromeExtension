/** background.js - PremierExtension - background script */

chrome.runtime.onInstalled.addListener(function(){
  chrome.storage.sync.set({color: '#3aa757'}, function(){
    console.log("The color key has been set.");
  });

  let pageActionRule =
  {
    conditions: [
      new chrome.declarativeContent.PageStateMatcher(
        {
          pageUrl: {
            hostEquals: 'developer.chrome.com',
            schemes: ['https']
          }
        }
      )
    ],
    actions: [
      new chrome.declarativeContent.ShowPageAction()
    ]
  };
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
    chrome.declarativeContent.onPageChanged.addRules([pageActionRule]);
  });
});
