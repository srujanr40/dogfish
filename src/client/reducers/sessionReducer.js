
const initialState = {}

const sessionReducer = (state = initialState, action) => {
	switch(action.type) {
        case 'CREATE_NEW_SESSION':
            return action.payload;
		default:
			return state;
	}
};


export default sessionReducer;