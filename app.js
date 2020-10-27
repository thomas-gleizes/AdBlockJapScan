
const selectors = ['.FbsYi']

selectors.forEach(selector => {
    let adds = document.querySelectorAll(selector)
    adds.forEach(add => {
        add.innerHTML = ''
        add.src = '';
    })
});