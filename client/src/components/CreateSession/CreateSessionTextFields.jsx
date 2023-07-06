import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createNewSessionAsync } from "../../redux/session/sessionThunks";
import "./CreateSession.css";

const equipmentInfo = (
  <React.Fragment>
    <div>Enter information about the equipment in the following format:</div>
    <div style={{ textAlign: "center" }}>"Quantity, Equipment Name"</div>
    <br />
    <div>Example:</div>
    <div>1, Baseball Bat</div>
    <div>4, Tennis Ball</div>
    <div>2, Hockey Stick</div>
    <div>1, Volleyball Net</div>
  </React.Fragment>
);

let stockPlaceholderImageURL = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='

export default function CreateSessionTextFields(props) {
  const [session_name, setName] = useState("");
  const [session_sport, setSport] = useState("");
  const [session_description, setDescription] = useState("");
  const [session_city, setCity] = useState("");
  const [session_location, setLocation] = useState("");
  const [session_equipment_needed, setEquipmentNeeded] = useState("");
  const [session_players_needed, setPlayersNeeded] = useState("");
  const [session_image, setSessionImage] = useState("");
  const [session_date_time, setDateTime] = useState(dayjs("2022-04-17T15:30"));

  const dispatch = useDispatch();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSessionImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const new_session = {
      name: session_name,
      description: session_description,
      city: session_city,
      location: session_location,
      equipment: session_equipment_needed,
      playersNeeded: session_players_needed,
      image: session_image,
      sport: session_sport,
      dateTime: session_date_time,
      joined: false,
    };

    dispatch(createNewSessionAsync(new_session)); //add function here that handles what happens with the data at submit

    setName("");
    setSport("");
    setDescription("");
    setCity("");
    setLocation("");
    setEquipmentNeeded("");
    setPlayersNeeded("");
    setSessionImage("");
    setDateTime("");

    props.closeModal();
  };

  return (
    <div id="create-session-text-fields">
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            className="text-fields"
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
            }}
          >
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: { sm: 450, md: 300, lg: 400 },
                paddingRight: 2,
              }}
            >
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

            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: { sm: 450, md: 300, lg: 400 },
              }}
            >
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
                rows={3}
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

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  fullWidth
                  label="Select Date"
                  value={session_date_time}
                  onChange={(e) => setDateTime(e)}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
        <Box sx={{ paddingLeft: {sm: 10, md: 20}, paddingTop : 2}}>
          {session_image ? (
            <img className="upload-image" src={session_image} alt="Selected"/>
          ) : (
            <div>
              <img className="upload-image" src={stockPlaceholderImageURL} alt='placeholder'/>
            </div>
          )}
          <br />
          <input type="file" onChange={handleImageUpload} accept="image/*" />
        </Box>
      </Box>
      <Stack
        sx={{
          paddingTop: 3,
        }}
      >
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </div>
  );
}
