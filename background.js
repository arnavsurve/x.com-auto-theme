chrome.runtime.onMessage.addListener((message, sender) => {
  if (message.mode && sender.tab && sender.tab.url.includes("x.com")) {
    chrome.cookies.set({
      url: "https://x.com",
      name: "night_mode",
      value: message.mode,
      domain: "x.com",
      path: "/",
    });
  }
});
