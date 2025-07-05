
const blockedUrls = [
  "*://*.doubleclick.net/*",
  "*://*.googlesyndication.com/*",
  "*://*.adservice.google.com/*",
  "*://*.youtube.com/api/stats/ads*",
  "*://*.adsafeprotected.com/*",
  "*://*.adserver.*/*",
  "*://*.googleadservices.com/*",
  "*://*.pagead2.googlesyndication.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked ad URL:", details.url);
    return { cancel: true };
  },
  { urls: blockedUrls },
  ["blocking"]
);

