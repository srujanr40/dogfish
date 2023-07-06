const initialState = {
    chats: [
        {
            groupId: 1,
            chat: [
                {
                    position: "left",
                    type: "text",
                    title: "Kursat",
                    text: "Hey everyone!",
                    date: new Date()
                },
                {
                    position: 'left',
                    type: 'text',
                    title: "Bob",
                    text: 'Hello, I have some equipment we can use',
                    date: new Date(),
                },
                {
                    position: 'left',
                    type: 'text',
                    title: "Michael",
                    text: 'Great, good to hear!',
                    date: new Date()
                }
            ]
        },
        {
            groupId: 2,
            chat: [
                {
                    position: "left",
                    type: "text",
                    title: "Richard",
                    text: "Hello!",
                    date: new Date()
                },
                {
                    position: 'left',
                    type: 'text',
                    title: "Keith",
                    text: 'Hi!',
                    date: new Date()
                },
                {
                    position: 'left',
                    type: 'text',
                    title: "Michael",
                    text: 'Heyy',
                    date: new Date()
                }
            ]
        }
    ]
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHAT':
            const { groupId, chat } = action.payload;
            return {
                ...state,
                chats: state.chats.map(chatGroup => {
                    if (chatGroup.groupId == groupId) {
                        return {
                            ...chatGroup,
                            chat: [...chatGroup.chat, chat]
                        };
                    }
                    return chatGroup;
                })
            };
        default:
            return state;
    }
};

export default chatReducer;