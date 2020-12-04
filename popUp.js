
document.querySelector("#AddSelector").addEventListener('submit', event => {
    event.preventDefault()
    let data = new FormData(event.target)
    let selector = data.get('type') + data.get('selector')

    chrome.storage.sync.get(["selectors"], result => {
        let tab = [];
        if (typeof result.selectors == "undefined"){
            tab.push(selector);
            chrome.storage.sync.set({"selectors": tab})
        } else {
            tab = result.selectors
            if (!tab.includes(selector)){
                tab.push(selector);
                chrome.storage.sync.set({"selectors": tab})
            } else {
                alert("Le selectors existe déja.")
            }
        }
    });
})

const generateListe = target => {
    let list = document.querySelector('div#list')
    list.innerHTML = "";
    chrome.storage.sync.get(["selectors"], result => {
        if (typeof result.selectors !== "undefined") {
            result.selectors.forEach(selector => {
                let data = utf8_to_b64(selector)
                list.innerHTML += `<div> ${selector} <img id="${data}" src='clear.svg' alt='clear'/></div>`
                document.querySelector(`#${data}`).addEventListener('click', () => {
                    deleteSelector(b64_to_utf8(data))
                })
            })
            target.style.display = "none"
        } else {
            list.innerHTML = "<div> Auncune selecteurs </div>"
            target.style.display = "unset"
            target.innerHTML = "Refresh"
        }
    })
}

const deleteSelector = selector => {
    chrome.storage.sync.get(["selectors"], result => {
        let tab = result.selectors
        if (typeof tab !== "undefined" && tab.includes(selector)){
            tab.splice(tab.indexOf(selector, 1))
            chrome.storage.sync.set({"selectors": tab})
            generateListe(document.querySelector("#h-liste > .btn"))
        }
    })
}

document.querySelector("#h-liste > .btn").addEventListener('click', event => {
    generateListe(event.target);
})

const utf8_to_b64 = str => {
    return window.btoa(unescape(encodeURIComponent(str)));
}

const b64_to_utf8 = str => {
    return decodeURIComponent(escape(window.atob(str)));
}