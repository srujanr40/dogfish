export const createNewSession = (new_session) => {
	return {
		type: 'CREATE_NEW_SESSION',
		payload: new_session
	};
};