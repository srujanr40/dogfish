const getProfile = async () => {
    const email = localStorage.getItem("currentUser");
    console.log(email);
    try {
        const url = `http://localhost:3001/profile?email=${encodeURIComponent(email)}`;
        const response = await fetch(url, {
            method: 'GET'
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const message = await response.json();
        console.log(email);
        console.log(message);
        return message;
    } catch (error) {
        console.error('Error fetching profile:', error.message);
        throw error;
    }
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