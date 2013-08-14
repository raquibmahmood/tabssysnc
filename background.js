var tabbs = {};
chrome.browserAction.onClicked.addListener(function(tab) {
  //chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")});

  //chrome.tabs.create({url:"http://code.google.com"});
	loadWindowList();

});

chrome.tabs.onCreated.addListener(function(){
	//alert('tab created');
});

chrome.tabs.onHighlighted.addListener(function(){
	
});

function createTabData(id) {
  return {
    'index': parseInt(document.getElementById('index_' + id).value),
    'windowId': parseInt(document.getElementById('windowId_' + id).value),
    'index': parseInt(document.getElementById('index_' + id).value),
    'url': document.getElementById('url_' + id).value,
    'selected': document.getElementById('selected_' + id).value ? true : false
  }
}
function createTab() {
  var args = createTabData('new')
  
  try {
    chrome.tabs.create(args);
  } catch (e) {
    alert(e);
  }
}

function loadWindowList() {
  	chrome.windows.getAll({ populate: true }, function(windowList) {
    tabs = {};
    tabIds = [];
	tt = [];
    for (var i = 0; i < windowList.length; i++) {
//		tabs = windowList[i].tabs;
		tt = windowList[i].tabs;				
		alert(tt[0].url);
	}
	/*
    for (var i = 0; i < windowList.length; i++) {
      windowList[i].current = (windowList[i].id == currentWindowId);
      windowList[i].focused = (windowList[i].id == focusedWindowId);

      for (var j = 0; j < windowList[i].tabs.length; j++) {
        tabIds[tabIds.length] = windowList[i].tabs[j].id;
        tabs[windowList[i].tabs[j].id] = windowList[i].tabs[j];
      }
    }
	
    var input = new JsExprContext(windowList);
    var output = document.getElementById('windowList');

    jstProcess(input, output);
	*/
  });
}