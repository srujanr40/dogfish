import dayjs from 'dayjs';

const image = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
const initialState = {
	sessions: [
	{name: "Frisbee Meetup", description: "Ultimate at the field behind the Nest"
		, city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee", playersNeeded: 3, groupId: 1,
		image: image, sport: "Frisbee", joined: true, dateTime: dayjs('2022-04-17T15:30')},
	{name: "Frisbee", description: "Ultimate at the field", city: "Vancouver", location: "MacInnes Field",
		equipment: "Frisbee", playersNeeded: 3, groupId: 1, image: image, sport: "Frisbee", joined: false, dateTime: dayjs('2022-04-17T15:30')},
	{name: "Soccer Evening", description: "after school soccer session", city: "Vancouver", location: "MacInnes Field",
		equipment: "Football", playersNeeded: 3,groupId: 2, image: image, sport: "Soccer", joined: true, dateTime: dayjs('2022-04-17T15:30')},
	{name: "Basketball", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3,groupId: 3, image: image, sport: "Basketball", joined: false, dateTime: dayjs('2022-04-17T15:30')},
	{name: "Badminton", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3, groupId: 4, image: image, sport: "Badminton", joined: false, dateTime: dayjs('2022-04-17T15:30')},
	{name: "Tennis", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3,groupId: 5, image: image, sport: "Tennis", joined: false, dateTime: dayjs('2022-04-17T15:30')},
	{name: "Football", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3, groupId: 6, image: image, sport: "Soccer", joined: false, dateTime: dayjs('2022-04-17T15:30')},
	{name: "Water Polo", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
		playersNeeded: 3, groupId: 7, image: image, sport: "Water Polo",joined: true, dateTime: dayjs('2022-04-17T15:30')},]
	}


const images = ['https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/115/217/492629987.jpg',
				'https://clutchpoints.com/_next/image?url=https%3A%2F%2Fwp.clutchpoints.com%2Fwp-content%2Fuploads%2F2022%2F10%2FTop-15-Fantasy-Basketball-Small-Forwards-In-2022-23-NBA-Season-Ranked.jpg&w=3840&q=75',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRjjzK1bkG_CBDBHsxCD_lW9DtGRS-kiqbA&usqp=CAU'
				]
const initialfeaturedSession = [
	{
		name: "Basketball", 
		description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow", 
		city: "Vancouver", 
		location: "MacInnes Field", 
		equipment: "Basketball", 
		playersNeeded: 3, 
		groupId: 1,
		image: images[0], 
		sport: "Basketball"
	},
	{
		name: "Football", 
		description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow", 
		city: "Vancouver", 
		location: "MacInnes Field", 
		equipment: "Basketball", 
		playersNeeded: 3, 
		groupId: 1,
		image: images[1], 
		sport: "Basketball"
	},
	{
		name: "Hockey", 
		description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow", 
		city: "Vancouver", 
		location: "MacInnes Field", 
		equipment: "Basketball", 
		playersNeeded: 3, 
		groupId: 1,
		image: images[2], 
		sport: "Basketball"
	}

]

export const sessionReducer = (state = initialState, action) => {
	switch(action.type) {
        case 'CREATE_NEW_SESSION':
			return {
				...state,
				sessions: [...state.sessions, action.payload]
			}
		default:
			return state;
	}
};

export const featuredSession = (state = initialfeaturedSession, action) => {
	switch(action.type) {
		case 'FEATURED_SESSION':
			return action.payload;
		default:
			return state;
	}
};