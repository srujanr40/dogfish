
const initialState = [
    {name: "Casual ultimate frisbee!", sport: "Frisbee", description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow"
        , city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee", playersNeeded: 3, groupId: 1},
    {name: "Casual ultimate frisbee!", sport: "Frisbee", description: "Ultimate at the field", city: "Vancouver", location: "MacInnes Field",
        equipment: "Frisbee", playersNeeded: 3, groupId: 1},
    {name: "Soccer Hangout", sport: "Soccer", description: "after school soccer session", city: "Vancouver", location: "MacInnes Field",
        equipment: "Soccerball", playersNeeded: 2, groupId: 2},
    {name: "Beginner's basketball", sport: "Basketball", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Basketball",
        playersNeeded: 1, groupId: 3},
    {name: "Casual Badminton", sport: "Badminton", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Racket",
        playersNeeded: 1, groupId: 4},
    {name: "Intro Tennis", sport: "Tennis", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Tennis balls",
        playersNeeded: 1, groupId: 5},
    {name: "Contact football", sport: "Football", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Shoulder pads",
        playersNeeded: 7, groupId: 6},
    {name: "Casual water polo", sport: "Water Polo", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "N/A",
        playersNeeded: 4, groupId: 7},]

const fetchedSessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SESSIONS':
            return action.payload;
        default:
            return state;
    }
};


export default fetchedSessionReducer;