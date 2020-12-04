let timer = false;
let selectors = [];

chrome.storage.sync.get(['active'], result => {
    if (result.active){
        chrome.storage.sync.get(['selectors'], result => {
            selectors = result.selectors
            deleteAdd()
        });
    }
})

const deleteAdd = () => {
    selectors.forEach(selector => {
        const adds = document.querySelectorAll(selector)
        adds.forEach(add => {
            if (add.innerHTML !== '') console.log(add)
            add.style.display = 'none'
            add.innerHTML = ''
            add.src = ''
        })
    });
}

const update = () => {
    if (!timer) {
        timer = true
        deleteAdd()
        setTimeout(() => {
            timer = false
        }, 1000)
    }
}

window.addEventListener("DOMNodeInserted", update)