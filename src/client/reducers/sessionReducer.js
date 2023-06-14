const image = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
const initialState = [
	{name: "Frisbee Meetup", description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow"
		, city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee", playersNeeded: 3, groupId: 1,
		image: image, sport: "Frisbee"},
	{name: "Frisbee", description: "Ultimate at the field", city: "Vancouver", location: "MacInnes Field",
		equipment: "Frisbee", playersNeeded: 3, groupId: 1, image: image, sport: "Frisbee"},
	{name: "Soccer Evening", description: "after school soccer session", city: "Vancouver", location: "MacInnes Field",
		equipment: "Football", playersNeeded: 3,groupId: 2, image: image, sport: "Soccer"},
	{name: "Basketball", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3,groupId: 3, image: image, sport: "Basketball"},
	{name: "Badminton", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3, groupId: 4, image: image, sport: "Badminton"},
	{name: "Tennis", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3,groupId: 5, image: image, sport: "Tennis"},
	{name: "Football", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3, groupId: 6, image: image, sport: "Soccer"},
	{name: "Water Polo", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3, groupId: 7, image: image, sport: "Water Polo"},]


export const createNewSession = (state = initialState, action) => {
	switch(action.type) {
        case 'CREATE_NEW_SESSION':
			state.push(action.payload)
            return action.payload;
		default:
			return state;
	}
};

export const fetchSession = (state = initialState, action) => {
	switch(action.type) {
		case 'FETCH_SESSIONS':
			return action.payload;
		default:
			return state;
	}
};