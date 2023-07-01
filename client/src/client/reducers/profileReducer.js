async function getProfile() {
    let getProfileResponse = await fetch('http://localhost:3001/profile');
    let data = await getProfileResponse.json();
    return data;
}

var initialState = {
    profile: await getProfile()
}

const profileReducer = (state = initialState, action) => {
	switch(action.type) {
        case 'UPDATE_PROFILE':
            return {
                ...state,
                profile: action.payload
            }
		default:
			return state;
	}
};


export default profileReducer;