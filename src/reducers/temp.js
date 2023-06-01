const temp = (count = 0, action) => {
	switch(action.type) {
        case 'SOMETHING':
            return count + action.payload;
		default:
			return count;
	}
};

export default temp;