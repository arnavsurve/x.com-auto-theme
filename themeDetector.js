const isDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
chrome.runtime.sendMessage({ mode: isDark ? "2" : "0" });
