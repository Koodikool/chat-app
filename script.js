
const input = document.querySelector('#write')

input.onkeyup = function(event) {
    if (event.key === 'Enter') {
        const messagesDiv = document.querySelector('#messages')
        const newMessage = '<p>' + input.value + '</p>'
        messagesDiv.innerHTML = messagesDiv.innerHTML + newMessage
        input.value = ''
    }
}
