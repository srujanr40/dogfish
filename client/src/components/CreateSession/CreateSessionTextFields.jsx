import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Tooltip, Chip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { createNewSessionAsync } from "../../redux/session/sessionThunks";
import "./CreateSession.css";
import { createNewChatAsync } from "../../redux/chat/chatThunks";
import equipmentParse from "../../common/equipmentParse";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const { v4: uuidv4 } = require('uuid');

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

let stockPlaceholderImageURL =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";

export default function CreateSessionTextFields(props) {
    const profile = useSelector((store) => store.profileReducer).profile;
    const [session_name, setName] = useState("");
    const [session_sport, setSport] = useState("");
    const [session_description, setDescription] = useState("");
    const [session_city, setCity] = useState("");
    const [session_location, setLocation] = useState("");
    const [session_equipment_needed, setEquipmentNeeded] = useState([]);
    const [new_equipment, setNewEquipment] = useState("");
    const [session_players_needed, setPlayersNeeded] = useState("");
    const [session_image, setSessionImage] = useState("");
    const [session_date_time, setDateTime] = useState(dayjs("2023-10-17T15:30"));
    const [isFormValid, setIsFormValid] = useState(false);

    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        // Function to be called after myState is updated
        validityCheck();
    }, [session_name, session_sport, session_description, session_city, session_location, session_equipment_needed,
        session_players_needed, session_image, session_date_time])

    const handleInputChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleAddButtonClick = () => {
        setSessionImage(imageUrl);
    };

    const handleAddEquipment = () => {
        if (session_equipment_needed) {
            setEquipmentNeeded([...session_equipment_needed, new_equipment]);
            setNewEquipment('');
        }
    };

    const handleDeleteEquipment = (equipment) => {
        setEquipmentNeeded(session_equipment_needed.filter(item => item !== equipment))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const groupId = uuidv4();
        let parsedEquipment = equipmentParse(session_equipment_needed)

        const new_session = {
            name: session_name,
            description: session_description,
            city: session_city,
            location: session_location.label,
            equipment: parsedEquipment,
            playersNeeded: session_players_needed,
            image: session_image,
            sport: session_sport,
            dateTime: session_date_time,
            members: [profile],
            owner: profile.email,
            groupId: groupId,
        };

        const new_chat = {
            lastModified: new Date(),
            groupId: groupId,
            chats: []
        }

        dispatch(createNewSessionAsync(new_session)); //add function here that handles what happens with the data at submit
        dispatch(createNewChatAsync(new_chat))

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

    function validityCheck() {
        if (
            session_name !== "" &&
            session_sport !== "" &&
            session_city !== "" &&
            session_location !== "" &&
            session_players_needed !== "" &&
            session_date_time !== "" &&
            session_date_time.unix() >= Date.now() / 1000
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }


    return (
        <div id="create-session-form">
            <Box
                sx={{
                    display: "flex", width: '100%',
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
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="session-sport"
                                label="Sport"
                                margin="normal"
                                value={session_sport}
                                onChange={(e) => {
                                    setSport(e.target.value);
                                }}
                            />
                            <TextField
                                multiline
                                fullWidth
                                id="session-description"
                                label="Description"
                                margin="normal"
                                value={session_description}
                                rows={4}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="session-city"
                                label="City"
                                margin="normal"
                                value={session_city}
                                onChange={(e) => {
                                    setCity(e.target.value);
                                }}
                            />
                        </Box>

                        <Box
                            sx={{
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <TextField
                                sx={{
                                    width: 320,
                                }}
                                id="session-equipment-needed"
                                label='# items, equipment name'
                                margin="normal"
                                value={new_equipment}
                                onChange={(e) => {
                                    setNewEquipment(e.target.value);
                                }}
                            />
                            <Button
                                variant="contained"
                                sx={{ mt: 1, p: 2 }}
                                color="primary"
                                size="small"
                                onClick={handleAddEquipment}
                                disabled={!new_equipment}
                            >
                                Add
                            </Button>
                            <div>
                                {session_equipment_needed &&
                                    session_equipment_needed.map((equipment) => (
                                        <Chip
                                            key={equipment}
                                            label={equipment}
                                            onDelete={() => handleDeleteEquipment(equipment)}
                                            style={{ margin: "5px" }}
                                        />
                                    ))}
                            </div>
                            <Box sx={{width: '400px' }}>
                                <TextField
                                    sx={{width: '320px'}}
                                    type="text"
                                    placeholder="Enter image URL"
                                    value={imageUrl}
                                    onChange={handleInputChange}
                                />
                                <Button
                                    variant="contained"
                                    sx={{ mt: 1, p: 2,}}
                                    color="primary"
                                    size="small"
                                    onClick={handleAddButtonClick}
                                >
                                    Add
                                </Button>                            
                            </Box>
                            <TextField
                            sx={{width: "140px"}}
                                required
                                id="session-players-needed"
                                label="Players Needed"
                                margin="normal"
                                value={session_players_needed}
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(e) => {
                                    setPlayersNeeded(e.target.value);
                                }}
                            />
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    sx={{ width: "235px" }}
                                    label="Select Date"
                                    value={session_date_time}
                                    onChange={(e) => {
                                        setDateTime(e);
                                    }}
                                />
                            </LocalizationProvider>
                            <Box sx={{ ml: 1, mt: 1, width: '390px' }}>
                                <GooglePlacesAutocomplete
                                    apiKey={process.env.REACT_APP_GOOGLE_MAPS_API}
                                    selectProps={{
                                        session_location,
                                        onChange: setLocation,
                                        placeholder: "Location",
                                    }}
                                />
                            </Box>


                        </Box>
                    </Box>
                </Box>
                <Box sx={{ ml: 5, mt: 1 }}>
                    {session_image ? (
                        <img className="upload-image" src={session_image} alt="Selected" />
                    ) : (
                        <div>
                            <img
                                className="upload-image"
                                src={stockPlaceholderImageURL}
                                alt="placeholder"
                            />
                        </div>
                    )}
                    <br />

                </Box>
            </Box>
            <Box sx={{ m: 1, display: 'flex', gap: 2}}>
                <Button
                    variant="contained"
                    size="medium"
                    color="success"
                    onClick={handleSubmit}
                    disabled={!isFormValid}
                >
                    Create
                </Button>
                <Button
                    variant="contained"
                    size="medium"
                    color="error"
                    onClick={props.closeModal}
                >
                    Cancel
                </Button>
            </Box>
        </div>
    );
}