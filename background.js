chorme.tabs.query({active: true,currentWindow: true}, (tabs) => {
    console.logs(tabs[0],url);
})