const getForum = async () => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/forum`, {
        method: 'GET'
    });
    return await response.json();
};

const createNewForum = async (forum) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/forum`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(forum)
    })

    return await response.json()
}

const updateForum = async (forum) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/forum`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(forum)
    })

    return await response.json()
}

export default {
    getForum,
    createNewForum,
    updateForum
};