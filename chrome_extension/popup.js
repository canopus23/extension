document.addEventListener('DOMContentLoaded', function() {
    var ncertLink = document.getElementById('ncertLink');
    ncertLink.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://www.tiwariacademy.com/ncert-solutions/' }); // Replace 'https://example.com' with the actual URL
    });
  
    var ncertBook = document.getElementById('ncertBook');
    ncertBook.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://www.tiwariacademy.com/ncert-books/' });
    });

    var discussion = document.getElementById('discussion');
    discussion.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://discussion.tiwariacademy.com' });
    });
  
    var sample_Papers = document.getElementById('sample_Papers');
    sample_Papers.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://www.tiwariacademy.com/cbse-sample-papers/' });
    });

    var Offline_Apps = document.getElementById('Offline_Apps');
    Offline_Apps.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://www.tiwariacademy.com/ncert-solutions/apps/' });
    });

    var hindi_web = document.getElementById('hindi_web');
    hindi_web.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://hindi.tiwariacademy.com/' });
    });

    var grammer = document.getElementById('grammer');
    grammer.addEventListener('click', function() {
      chrome.tabs.create({ url: 'https://www.tiwariacademy.com/english-language/grammar/' });
    });
   
});
  