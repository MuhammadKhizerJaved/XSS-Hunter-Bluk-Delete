document.addEventListener('DOMContentLoaded', function() {
	// For Button 1 (Delete 5 Pages)
    var checkPageButton = document.getElementById('b1');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.executeScript({file: "js/delete5pages.js"});
      });
    }, false);
	// For Button 1 (Delete 25 Pages)
		var checkPageButton1 = document.getElementById('b2');
    checkPageButton1.addEventListener('click', function() {
      chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.executeScript({file: "js/delete25pages.js"});
      });
    }, false);
	// For Button 1 (Delete 50 Pages)
		var checkPageButton2 = document.getElementById('b3');
		checkPageButton2.addEventListener('click', function() {
			chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.executeScript({file: "js/delete50pages.js"});
			});
		}, false);
	// For Button 1 (Delete 100 Pages)
		var checkPageButton3 = document.getElementById('b4');
		checkPageButton3.addEventListener('click', function() {
			chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.executeScript({file: "js/delete100pages.js"});
			});
		}, false);
	// For Button 1 (Delete 500 Pages)
		var checkPageButton4 = document.getElementById('b5');
		checkPageButton4.addEventListener('click', function() {
			chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.executeScript({file: "js/delete500pages.js"});
			});
		}, false);

  }, false);
