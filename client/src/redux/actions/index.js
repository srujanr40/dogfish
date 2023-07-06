export const addChat = (groupId, chat) => {
	return {
		type: 'ADD_CHAT',
		payload: {groupId : groupId, chat: chat}
	};
};