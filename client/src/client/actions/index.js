export const getSessions = (sessions) => {
	return {
		type: 'GET_SESSIONS',
		payload: sessions
	};
};

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

export const addChat = (groupId, chat) => {
	return {
		type: 'ADD_CHAT',
		payload: {groupId : groupId, chat: chat}
	};
};

export const getFeaturedSessions = (session) => {
	return {
		type: 'GET_FEATURED_SESSIONS',
		payload: session
	};
};