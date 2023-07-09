const getProfile = async () => {
    const response = await fetch('http://localhost:3001/profile', {
        method: 'GET'
    });
    return await response.json();
};

const updateProfile = async (new_details) => {
    const response = await fetch('http://localhost:3001/profile', {
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