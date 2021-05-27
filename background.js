const fetchGET = async function(uri) {
    const request = await fetch(uri)
    const text = await request.text()
    let json
    try {
        json = JSON.parse(text)
    } catch (e) { /* ignore */ }
    return json || text
}

const fetchPOST = async function(uri, content) {
    const request = await fetch(uri, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(content)
    })
    const text = await request.text()
    let json
    try {
        json = JSON.parse(text)
    } catch (e) { /* ignore */ }
    return json || text
}

async function populate() {
    const messages = await fetchGET("https://app.koodikool.ee/sdb/chatapp-messages")
    if (!messages.length) {
        fetchPOST("https://app.koodikool.ee/sdb/chatapp-messages", {user: "Krister", message: "Tere!"})
    }

}
populate()
