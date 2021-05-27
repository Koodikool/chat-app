console.log("This message appears in the Dev Console")

const input = document.querySelector('#write')
console.log(input.id)

input.onkeyup = function(event) {
    console.log(input.value)
    console.log(event.key)
    if (event.key === 'Enter') {
        console.log("Enter was pressed")
    }
}
