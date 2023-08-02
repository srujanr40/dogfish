const getChat = async () => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/chat`, {
        method: 'GET'
    });
    return await response.json();
};

const createNewChat = async (chat) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(chat)
    })

    return await response.json()
}

const updateChat = async (chat) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/chat`, {
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