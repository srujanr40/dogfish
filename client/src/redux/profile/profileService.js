const getProfile = async () => {
    const email = localStorage.getItem("currentUser");
    try {
        const url = `${process.env.REACT_APP_REST_API_URL}/profile?email=${encodeURIComponent(email)}`;
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const message = await response.json();
        return message;
    } catch (error) {
        console.error('Error fetching profile:', error.message);
        throw error;
    }
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

const addProfile = async (new_profile) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(new_profile)
    })

    return await response.json();
}

export default {
    getProfile,
    updateProfile,
    addProfile,
};