function main() {
  document.addEventListener('DOMSubtreeModified', function(event) {
    var dom = document.querySelector(`
      #mainContainer
          #pagelet_gaming_destination_rhc
    `);
    if(dom) {
      dom.style.display = "none";
    };
  });
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'url_changed') {
      main();
    }
});
