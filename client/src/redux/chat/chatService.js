const getChat = async () => {
    const response = await fetch('http://localhost:3001/chat', {
        method: 'GET'
    });
    return await response.json();
};

const createNewChat = async (chat) => {
    await fetch('http://localhost:3001/chat', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })
    const response = await fetch('http://localhost:3001/chat', {
        method: 'GET'
    });
    return await response.json()
}

const updateChat = async (chat) => {
    const response = await fetch('http://localhost:3001/chat', {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })

    return await response.json()
}

export default {
    getChat,
    createNewChat: createNewChat,
    updateChat
};