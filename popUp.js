
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

document.querySelector("#h-liste > .btn").addEventListener('click', event => {
    event.target.style.display = "none"
    generateListe()
})

const generateListe = () => {
    let list = document.querySelector('div#list')
    list.innerHTML = "";
    chrome.storage.sync.get(["selectors"], result => {
        if (typeof result.selectors !== "undefined") {
            result.selectors.forEach(selector => {
                let img = document.createElement('img')
                list.innerHTML += `<div> ${selector} <img onclick="deleteSelector('${selector}')" src='clear.svg' alt='clear'/></div>`
            })
        }
    })
}

const deleteSelector = selector => {
    chrome.storage.sync.get(["selectors"], result => {
        let tab = result.selectors
        if (typeof tab !== "undefined" && tab.includes(selector)){
            tab.splice(tab.indexOf(selector, 1))
            console.log(tab);
        }
    })
}
