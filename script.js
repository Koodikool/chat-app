
const input = document.querySelector('#write')
const nameInput = document.querySelector('#name')
const messagesDiv = document.querySelector('#messages')
input.focus()

input.onkeyup = function(event) {
    if (event.key === 'Enter') {
        const newMessage = '<p>' + nameInput.value + ': ' + input.value + '</p>'
        messagesDiv.innerHTML = messagesDiv.innerHTML + newMessage
        input.value = ''
    }
}

async function getMessages() {
    const messages = await fetchGET('https://app.koodikool.ee/sdb/chatapp-messages')
    for (const message of messages) {
        const messageHTML = '<p>' + message.user + ': ' + message.message + '</p>'
        messagesDiv.innerHTML = messagesDiv.innerHTML + messageHTML
    }
}
getMessages()
