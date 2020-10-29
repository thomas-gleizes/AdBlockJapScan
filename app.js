const selectors = ['.FbsYi', '.vdo_floating']

const deleteAdd = () => {
    selectors.forEach(selector => {
        let adds = document.querySelectorAll(selector)
        adds.forEach(add => {
            if (add.innerHTML !== '') console.log(add)
            add.innerHTML = ''
            add.src = '';
        })
    });
}

deleteAdd()

window.setInterval(deleteAdd, 1000)