export const createNewSession = (new_session) => {
	return {
		type: 'CREATE_NEW_SESSION',
		payload: new_session
	};
};

export const updateProfile = profile => {
	return {
		type: 'UPDATE_PROFILE',
		payload: profile
	};
};

export const featuredSession = (session) => {
	return {
		type: 'FEATURED_SESSION',
		payload: session
	};
};