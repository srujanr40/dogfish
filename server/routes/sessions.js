const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRjjzK1bkG_CBDBHsxCD_lW9DtGRS-kiqbA&usqp=CAU'
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
        dateTime:" dayjs('2022-04-17T15:30')",
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
        dateTime:" dayjs('2022-04-17T15:30')",
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
        dateTime:" dayjs('2022-04-17T15:30')",
        type: "outdoor"
    },
    {
      name: "Basketball",
      description: "play time",
      city: "Vancouver",
      location: "MacInnes Field",
      equipment: "Frisbee",
      playersNeeded: 3,
      groupId: 3,
      image: image,
      sport: "Basketball",
      joined: false,
      dateTime: "dayjs('2022-04-17T15:30')"
  },
  {
      name: "Badminton",
      description: "play time",
      city: "Vancouver",
      location: "MacInnes Field",
      equipment: "Frisbee",
      playersNeeded: 3,
      groupId: 4,
      image: image,
      sport: "Badminton",
      joined: true,
      dateTime: "dayjs('2022-04-17T15:30')"
  },
  {
      name: "Tennis",
      description: "play time",
      city: "Vancouver",
      location: "MacInnes Field",
      equipment: "Frisbee",
      playersNeeded: 3,
      groupId: 5,
      image: image,
      sport: "Tennis",
      joined: true,
      dateTime: "dayjs('2022-04-17T15:30')"
  },
  {
      name: "Football",
      description: "play time",
      city: "Vancouver",
      location: "MacInnes Field",
      equipment: "Frisbee",
      playersNeeded: 3,
      groupId: 6,
      image: image,
      sport: "Soccer",
      joined: false,
      dateTime: "dayjs('2022-04-17T15:30')"
  },
  {
      name: "Water Polo",
      description: "play time",
      city: "Vancouver",
      location: "MacInnes Field",
      equipment: "Frisbee",
      playersNeeded: 3,
      groupId: 7,
      image: image,
      sport: "Water Polo",
      joined: true,
      dateTime: "dayjs('2022-04-17T15:30')"
  }
    
]

router.get('/', function (req, res, next) {
  console.log("i am here")
  return res.status(200).send(sessions);
});

router.get('/filter', function (req, res, next) {
	const filterName = req.query.filter;
	if (filterName === '')
		return res.send(sessions)
	let filterArray = sessions.filter(item => item.type === filterName);
	return res.status(200).send(filterArray);
  });

module.exports = router;
