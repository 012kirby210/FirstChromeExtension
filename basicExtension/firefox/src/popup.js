let changeColor = document.getElementById('changeColor');

// retrieve color set by the background script on the installed event
chrome.storage.sync.get('color', function(data){
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value',data.color);
});

// logic/business layer
changeColor.onclick = function(element){
  let color = element.target.value;
  chrome.tabs.query(
    { active: true, currentWindow: true },
    function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        { code: 'document.body.style.backgroundColor = "' + color + '";'},
        function(results){
          console.log('the color of the background have been changed.');
        }
      );
    }
  );
}
