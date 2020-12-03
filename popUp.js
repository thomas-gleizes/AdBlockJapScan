
console.log("test")
const key = "selectors";




document.querySelector("#AddSelector").addEventListener('submit', event => {
    event.preventDefault()
    let data = new FormData(event.target)
    let selector = data.get('type') + data.get('selector')

    chrome.storage.sync.get(["selectors"], result => {
        let tab = [];
        if (typeof result.selectors == "undefined"){
            tab.push(selector);
            console.log(tab)
            chrome.storage.sync.set({"selectors": tab})
        } else {
            tab = result.selectors

            console.log(tab)
            if (!tab.includes(selector)){
                tab.push(selector);
                chrome.storage.sync.set({"selectors": tab})
            }
        }
    });
})




/*
 chrome.storage.sync.set({key: value}, function() {
          console.log('Value is set to ' + value);
        });

 chrome.storage.sync.get(['key'], function(result) {
          console.log('Value currently is ' + result.key);
 });
 */