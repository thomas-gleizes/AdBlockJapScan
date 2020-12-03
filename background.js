chrome.runtime.onInstalled.addListener(() => {
    //chrome.storage.sync.clear()
    //chrome.storage.sync.set({"selectors": []});
    chrome.storage.sync.get(['selectors'], result => console.log(result))
})