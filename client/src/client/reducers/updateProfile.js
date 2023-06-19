

const initialState = {
    name: 'Taqdeer',
    equipment: ['Rackets'],
    interests: ['Handball', 'Badminton'],
    location: 'Vancouver',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiYqZov0ldg_3RvHvEAnc98CAcPe9XrCcOFdzguShdQ&s"
}

const updateProfile = (state = initialState, action) => {
	switch(action.type) {
        case 'UPDATE_PROFILE':
            return action.payload;
		default:
			return state;
	}
};


export default updateProfile;