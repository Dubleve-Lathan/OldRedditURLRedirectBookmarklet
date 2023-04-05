//I prefer the old reddit format, so I made this bookmarklet for quick redirects
javascript:(()=>{let currentURL = window.location.href;let newURL = currentURL.split("https://www.");
window.location.replace("https://old." + newURL[1]);})();