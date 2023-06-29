const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

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

const images = ['https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/115/217/492629987.jpg',
    'https://clutchpoints.com/_next/image?url=https%3A%2F%2Fwp.clutchpoints.com%2Fwp-content%2Fuploads%2F2022%2F10%2FTop-15-Fantasy-Basketball-Small-Forwards-In-2022-23-NBA-Season-Ranked.jpg&w=3840&q=75',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRjjzK1bkG_CBDBHsxCD_lW9DtGRS-kiqbA&usqp=CAU'
]
const featuredSessions = [
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

// GET all sessions
router.get('/', function (req, res, next) {
  return res.status(200).send(sessions);
});

// ADD a new session
router.post('/', function (req, res, next) {
    let new_session = req.body
    new_session.groupId = uuidv4()
    sessions.push(new_session)

    return res.status(200).send(new_session);
});

// GET featured sessions
router.get('/featured', function (req, res, next) {
    return res.status(200).send(featuredSessions);
});

module.exports = router;
