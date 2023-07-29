const getProfile = async () => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/profile`, {
        method: 'GET'
    });
    return await response.json();
};

const updateProfile = async (new_details) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/profile`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_details)
    })

    return await response.json();
}

export default {
    getProfile,
    updateProfile
};