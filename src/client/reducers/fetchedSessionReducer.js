
const initialState = [
    {name: "Frisbee", description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow"
        , city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee", playersNeeded: 3, groupId: 1},
    {name: "Frisbee", description: "Ultimate at the field", city: "Vancouver", location: "MacInnes Field",
        equipment: "Frisbee", playersNeeded: 3, groupId: 1},
    {name: "Soccer", description: "after school soccer session", city: "Vancouver", location: "MacInnes Field",
        equipment: "Frisbee", playersNeeded: 3,groupId: 2},
    {name: "Basketball", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
        playersNeeded: 3,groupId: 3},
    {name: "Badminton", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
        playersNeeded: 3, groupId: 4},
    {name: "Tennis", description: "play time", city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
        playersNeeded: 3,groupId: 5},
    {name: "Football", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
        playersNeeded: 3, groupId: 6},
    {name: "Water Polo", description: "play time",city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee",
        playersNeeded: 3, groupId: 7},]

const fetchedSessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_SESSIONS':
            return action.payload;
        default:
            return state;
    }
};


export default fetchedSessionReducer;