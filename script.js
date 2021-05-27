console.log("This message appears in the Dev Console")

const input = document.querySelector('#write')
console.log(input.id)

input.onkeyup = function(event) {
    console.log(input.value)
    console.log(event.key)
    if (event.key === 'Enter') {
        console.log("Enter was pressed")
        const messagesDiv = document.querySelector('#messages')
        console.log(messagesDiv.innerHTML)
        const newMessage = '<p>' + input.value + '</p>'
        console.log(newMessage)
        messagesDiv.innerHTML = messagesDiv.innerHTML + newMessage
    }
}
