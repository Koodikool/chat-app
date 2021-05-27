
const input = document.querySelector('#write')
const nameInput = document.querySelector('#name')
input.focus()

input.onkeyup = function(event) {
    if (event.key === 'Enter') {
        const messagesDiv = document.querySelector('#messages')
        const newMessage = '<p>' + nameInput.value + ': ' + input.value + '</p>'
        messagesDiv.innerHTML = messagesDiv.innerHTML + newMessage
        input.value = ''
    }
}
