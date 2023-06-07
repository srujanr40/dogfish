import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createNewSession } from "../../actions";
import "./CreateSession.css";
import React from "react";

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

export default function CreateSessionTextFields() {
  const [session, setSession] = useState({
    session_name: "",
    session_sport: "",
    session_description: "",
    session_city: "",
    session_location: "",
    session_equipment_needed: "",
    session_players_needed: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const new_session = {
      session_name,
      session_sport,
      session_description,
      session_city,
      session_location,
      session_equipment_needed,
      session_players_needed,
    };

    dispatch(createNewSession(new_session)); //add function here that handles what happens with the data at submit
    setSession({
      session_name: "",
      session_sport: "",
      session_description: "",
      session_city: "",
      session_location: "",
      session_equipment_needed: "",
      session_players_needed: "",
    });
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
              onChange={(e) =>
                setSession((prevState) => ({
                  ...prevState,
                  session_name: e,
                }))
              }
            />
            <br />

            <TextField
              required
              fullWidth
              id="session-sport"
              label="Sport"
              margin="normal"
              value={session_sport}
              onChange={(e) =>
                setSession((prevState) => ({
                  ...prevState,
                  session_sport: e,
                }))
              }
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
              onChange={(e) =>
                setSession((prevState) => ({
                  ...prevState,
                  session_description: e,
                }))
              }
            />
            <br />

            <TextField
              required
              fullWidth
              id="session-city"
              label="City"
              margin="normal"
              value={session_city}
              onChange={(e) =>
                setSession((prevState) => ({
                  ...prevState,
                  session_city: e,
                }))
              }
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
              onChange={(e) =>
                setSession((prevState) => ({
                  ...prevState,
                  session_location: e,
                }))
              }
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
              onChange={(e) =>
                setSession((prevState) => ({
                  ...prevState,
                  session_equipment_needed: e,
                }))
              }
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
              onChange={(e) =>
                setSession((prevState) => ({
                  ...prevState,
                  session_players_needed: e,
                }))
              }
            />
          </Box>
        </Box>
      </Box>
      <Stack
        sx={{
          paddingTop: 3,
        }}
      >
        <Button variant="contained">Submit</Button>
      </Stack>
    </div>
  );
}
