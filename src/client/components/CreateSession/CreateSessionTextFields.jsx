import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Tooltip } from "@mui/material";
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createNewSession } from "../../actions";
import './CreateSession.css'
import React from "react";

const equipmentInfo = (
  <React.Fragment>
    <div>Enter information about the equipment in the following format:</div>
    <div style={{textAlign: "center"}}>"Quantity, Equipment Name"</div><br />
    <div>Example:</div>
    <div>1, Baseball Bat</div>
    <div>4, Tennis Ball</div>
    <div>2, Hockey Stick</div>
    <div>1, Volleyball Net</div>
  </React.Fragment>
)

export default function CreateSessionTextFields() {
  const [session_name, setName] = useState("");
  const [session_sport, setSport] = useState("");
  const [session_description, setDescription] = useState("");
  const [session_city, setCity] = useState("");
  const [session_location, setLocation] = useState("");
  const [session_equipment_needed, setEquipmentNeeded] = useState("");
  const [session_players_needed, setPlayersNeeded] = useState("");

  

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const image = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    const randomInt = Math.floor(Math.random() * 10001)
    const new_session = {name: session_name, description: session_description, city: session_city,
        location: session_location, equipment: session_equipment_needed, playersNeeded: session_players_needed,
        groupId: randomInt, image: image, sport: session_sport}

    dispatch(createNewSession(new_session)) //add function here that handles what happens with the data at submit
    setName("");
    setSport("");
    setDescription("");
    setCity("");
    setLocation("");
    setEquipmentNeeded("");
    setPlayersNeeded("");
  };

  return (
    <div id="create-session-text-fields">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <Box className="text-fields" sx={{
          display: "flex", 
          flexDirection: { xs: "column", sm: "column", md: "column", lg: "row",}}}>
          <Box sx={{alignItems: 'center', justifyContent: 'center', width: { sm: 450, md: 300, lg: 400 }, paddingRight: 2}}>
            <TextField
              required
              fullWidth
              id="session-name"
              label="Session Name"
              margin="normal"
              value={session_name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <TextField
              required
              fullWidth
              id="session-sport"
              label="Sport"
              margin="normal"
              value={session_sport}
              onChange={(e) => setSport(e.target.value)}
            />
            <br />

            <TextField
              multiline
              fullWidth
              id="session-description"
              label="Description"
              margin="normal"
              value={session_description}
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />

            <TextField
              required
              fullWidth
              id="session-city"
              label="City"
              margin="normal"
              value={session_city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Box>

          <Box sx={{ alignItems: 'center', justifyContent: 'center', width: { sm: 450, md: 300, lg: 400 } }}>
            <TextField
              required
              fullWidth
              id="session-location"
              label="Field Location"
              margin="normal"
              value={session_location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <br />

            <TextField
              required
              multiline
              fullWidth
              rows={4}
              id="session-equipment-needed"
              label="Equipment Needed"
              margin="normal"
              value={session_equipment_needed}
              onChange={(e) => setEquipmentNeeded(e.target.value)}
            />
            <Tooltip title={equipmentInfo} arrow>
              <Button>MORE INFO</Button>
            </Tooltip>
            <br />

            <TextField
              required
              fullWidth
              id="session-players-needed"
              label="Players Needed"
              margin="normal"
              value={session_players_needed}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => setPlayersNeeded(e.target.value)}
            />
          </Box>
        </Box>
      </Box>
      <Stack sx={{
          paddingTop: 3,
        }}>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Stack>
    </div>
  );
}
