import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './CreateSession.css'

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

    const new_session = { session_name, 
        session_sport, 
        session_description, 
        session_city,
        session_location,
        session_equipment_needed,
        session_players_needed,
    }

    dispatch() //add function here that handles what happens with the data at submit
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
          <Box item xs={6} sx={{alignItems: 'center', justifyContent: 'center', width: { sm: 450, md: 300, lg: 400 }, paddingRight: 2}}>
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

          <Box item xs={6} sx={{ alignItems: 'center', justifyContent: 'center', width: { sm: 450, md: 300, lg: 400 } }}>
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
        <Button variant="contained">Submit</Button>
      </Stack>
    </div>
  );
}
