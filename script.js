
const input = document.querySelector('#write')
const nameInput = document.querySelector('#name')
const messagesDiv = document.querySelector('#messages')
input.focus()

input.onkeyup = function(event) {
    if (event.key === 'Enter') {
        const data = {
            user: nameInput.value,
            message: input.value
        }
        fetchPOST('https://app.koodikool.ee/sdb/chatapp-messages', data)
        input.value = ''
    }
}

async function getMessages() {
    const messages = await fetchGET('https://app.koodikool.ee/sdb/chatapp-messages')
    messagesDiv.innerHTML = ''
    for (const message of messages) {
        const messageHTML = '<p>' + message.user + ': ' + message.message + '</p>'
        messagesDiv.innerHTML = messagesDiv.innerHTML + messageHTML
    }
}
getMessages()
const fetchDelayMilliseconds = 5000
setInterval(getMessages, fetchDelayMilliseconds)
