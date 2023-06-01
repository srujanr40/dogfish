import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CreateSessionTextFields() {
  const [session_name, setName] = useState("");
  const [session_sport, setSport] = useState("");
  const [session_description, setDescription] = useState("");
  const [session_city, setCity] = useState("");
  const [session_location, setLocation] = useState("");
  const [session_equipment_needed, setEquipmentNeeded] = useState("");
  const [session_players_needed, setPlayersNeeded] = useState("");

  return (
    <div id="create-session-text-fields">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="session-name"
          label="Session Name"
          margin="normal"
          value={session_name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <TextField
          required
          id="session-sport"
          label="Sport"
          margin="normal"
          value={session_sport}
          onChange={(e) => setSport(e.target.value)}
        /><br />

        <TextField
          multiline
          id="session-description"
          label="Description"
          margin="normal"
          value={session_description}
          rows={4}
          onChange={(e) => setDescription(e.target.value)}
        /><br />

        <TextField
          required
          id="session-city"
          label="City"
          margin="normal"
          value={session_city}
          onChange={(e) => setCity(e.target.value)}
        /><br />

        <TextField
          required
          id="session-location"
          label="Field Location"
          margin="normal"
          value={session_location}
          onChange={(e) => setLocation(e.target.value)}
        /><br />

        <TextField
          required
          multiline
          rows={4}
          id="session-equipment-needed"
          label="Equipment Needed"
          margin="normal"
          value={session_equipment_needed}
          onChange={(e) => setEquipmentNeeded(e.target.value)}
        /><br />

        <TextField
          required
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
    </div>
  );
}
