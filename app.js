const selectors = ['.FbsYi', '.vdo_floating', '#vdo_ads_frame', '.ts-inpage-push-dating']

console.log(localStorage.getItem("test"))

const deleteAdd = () => {
    selectors.forEach(selector => {
        let adds = document.querySelectorAll(selector)
        adds.forEach(add => {
            if (add.innerHTML !== '') console.log(add)
            add.style.display = 'none'
            add.innerHTML = ''
            add.src = ''
        })
    });
}

deleteAdd()

window.setInterval(deleteAdd, 1000)