const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const sessions = [
    {
        name: "Frisbee Meetup",
        description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow",
        city: "Vancouver",
        location: "MacInnes Field",
        equipment: "Frisbee",
        playersNeeded: 3,
        groupId: 1,
        image: image,
        sport: "Frisbee",
        joined: false,
        dateTime: dayjs('2022-04-17T15:30'),
        type: "outdoor",
    },
    {
        name: "Frisbee",
        description: "Ultimate at the field",
        city: "Vancouver",
        location: "MacInnes Field",
        equipment: "Frisbee",
        playersNeeded: 3,
        groupId: 1,
        image: image,
        sport: "Frisbee",
        joined: false,
        dateTime: dayjs('2022-04-17T15:30'),
        type: "indoor",
    },
    {
        name: "Soccer Evening",
        description: "after school soccer session",
        city: "Vancouver",
        location: "MacInnes Field",
        equipment: "Football",
        playersNeeded: 3,
        groupId: 2,
        image: image,
        sport: "Soccer",
        joined: false,
        dateTime: dayjs('2022-04-17T15:30'),
        type: "outdoor,"
    },
    
]

router.get('/', function (req, res, next) {
  return res.status(200).send(sessions);
});

router.get('/filter', function (req, res, next) {
	const filterName = req.query.filter;
	if (filterName === '')
		return res.send(defaultItems)
	let filterArray = defaultItems.filter(item => item.type === filterName);
	return res.status(200).send(filterArray);
  });

module.exports = router;
