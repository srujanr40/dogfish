

const initialState = {
    name: 'Taqdeer',
    equipment: ['Rackets'],
    interests: ['Handball', 'Badminton'],
    location: 'Vancouver',
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