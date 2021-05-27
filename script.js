
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

async function getMessages() {
    console.log('Start getting messages from server')
    const messages = await fetchGET('https://app.koodikool.ee/sdb/chatapp-messages')
    console.log(messages)
    for (const message of messages) {
        console.log(message)
    }
}
getMessages()
