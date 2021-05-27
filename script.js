
const input = document.querySelector('#write')
const nameInput = document.querySelector('#name')
const messagesDiv = document.querySelector('#messages')
const membersDiv = document.querySelector('#members')
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
    const members = []
    for (const message of messages) {
        if (!members.includes(message.user)) {
            members.push(message.user)
        }
    }
    console.log(members)

    let membersHTML = ''
    for (const newMember of members) {
        const newMemberHTML = '<p>' + newMember + '</p>'
        membersHTML = membersHTML + newMemberHTML
    }
    console.log(membersHTML)
    membersDiv.innerHTML = membersHTML
}
getMessages()
const fetchDelayMilliseconds = 5000
setInterval(getMessages, fetchDelayMilliseconds)
