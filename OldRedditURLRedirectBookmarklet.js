//I prefer the old reddit format, so I made this bookmarklet to let me quickly switch any tab I view to the older reddit view
javascript:(()=>{let currentURL = window.location.href;let newURL = currentURL.split("https://www.");
window.location.replace("https://old." + newURL[1]);})();