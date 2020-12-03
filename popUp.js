
console.log("test")


document.querySelector("#AddSelector").addEventListener('submit', event => {
    event.preventDefault()
    let data = new FormData(event.target)

    data.forEach(r => {
        console.log(r)
    })


})