import './JoinSession.css';
import Navbar from '../Navbar/Navbar.jsx';
import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation, useNavigate} from "react-router-dom";
import "react-chat-elements/dist/main.css"
import {MessageList, Input} from "react-chat-elements"
import Button from "@mui/material/Button";
import {updateSessionAsync, deleteSessionAsync} from "../../redux/session/sessionThunks";
import Map from "./Map"
import {getChatAsync, updateChatAsync} from "../../redux/chat/chatThunks";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const listReference = React.createRef();
const inputReference = React.createRef();

export default function JoinSession() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const searchParams = new URLSearchParams(location.search);
    const groupId = searchParams.get('groupId');
    const sessions = useSelector(state => state.sessionReducer).sessions;
    const session = sessions.find(element => element.groupId === groupId);
    const sessionDate = new Date(session.dateTime)
    const profile = useSelector(state => state.profileReducer).profile;
    let chats = useSelector(state => state.chatReducer).chats;
    let chat = chats.find(element => element.groupId === groupId)
    if (chat === undefined) {
        chat = []
    } else {
        chat = chat.chats
        if (chat.length !== 0) {
            sortChat()
        }
    }
    let updatedPlayersNeeded = session.playersNeeded - (session.members.length - 1);
    if(updatedPlayersNeeded < 0) {
        updatedPlayersNeeded = 0;
    }

    const [isEditable, setIsEditable] = useState(false);
    const [editedSession, setEditedSession] = useState({...session});
    const [curSession, setCurSession] = useState({...session});

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(getChatAsync());
        }, 1500);

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [dispatch]);

    const AddMessage = () => {
        const value = inputReference.current.value;
        if (value.length === 0)
            return
        const chat = {
            position: 'right',
            type: 'text',
            title: profile.name,
            text: value,
            date: new Date(),
        }
        inputReference.current.value = ''
        dispatch(updateChatAsync({groupId, chat}))
    }

    function sortChat() {
        chat = chat.map(item => {
            if (item.title === profile.name) {
                return {
                    ...item,
                    position: "right"
                };
            } else {
                return {
                    ...item,
                    position: "left"
                };
            }
        });
    }

    const handleEditSession = () => {
        setIsEditable(true);
    };

    const handleCancelEdit = () => {
        setIsEditable(false);
        setEditedSession({...curSession});
    };

    const handleSaveEdit = () => {
        dispatch(updateSessionAsync(editedSession));
        setIsEditable(false);
        setCurSession(editedSession);
    };

    const handleDeleteSession = async () => {
        dispatch(deleteSessionAsync(groupId)).then(() => {
            navigate("/dashboard");
            navigate(0);
        });
    };

    const handleGoogleAutocompleteChange = async (location) => {
        setEditedSession({...editedSession, location: location.label})
    };

    function arrayToString(arr) {
        if(arr.length > 0) {
            let result = '';
            for (let i = 0; i < arr.length - 1; i++) {
                result += arr[i].name;
                result += ', ';
            }
            result += arr[arr.length - 1].name;
            return result;
        }
    }

    function arrayToEquipmentString(equipment) {
        if(equipment.length > 0) {
            let result = '';
            for (let i = 0; i < equipment.length - 1; i++) {
                result += equipment[i][0];
                result += ' ';
                result += equipment[i][1];
                result += ', ';
            }
            result += equipment[equipment.length - 1][0];
            result += ' ';
            result += equipment[equipment.length - 1][1];
            return result;
        }

    }

    return (
        <div className="container">
            <Navbar/>
            <div className="mainPart">
                <div className={`splits${isEditable ? 'Edit' : ''}`}>
                    <div className='mainInfo'>
                        <img className="session-image" src={curSession.image} alt="placeholder"/>
                        {isEditable ? (
                            <div style={{marginBottom: '2vh'}}>
                                <h4 className='textMargin'>Event: </h4>
                                <input
                                    type="text"
                                    value={editedSession.name}
                                    onChange={(e) =>
                                        setEditedSession({...editedSession, name: e.target.value})
                                    }
                                />
                            </div>
                        ) : (
                            <h4 className='textMargin'>Event: {curSession.name}</h4>
                        )}
                        <Divider className='divider'/>
                        {isEditable ? (
                            <div style={{marginBottom: '2vh'}}>
                                <h4 className='textMargin'>Location: </h4>
                                <GooglePlacesAutocomplete
                                    apiKey={process.env.REACT_APP_GOOGLE_MAPS_API}
                                    selectProps={{
                                        onChange: handleGoogleAutocompleteChange,
                                        placeholder: editedSession.location,
                                    }}
                                />
                            </div>
                        ) : (
                            <h4 className='textMargin'>Location: {curSession.location}</h4>
                        )}
                        <Divider className='divider'/>
                        {isEditable ? (
                            <div style={{marginBottom: '2vh'}}>
                                <h4 className='textMargin'>City: </h4>
                                <input
                                    type="text"
                                    value={editedSession.city}
                                    onChange={(e) =>
                                        setEditedSession({...editedSession, city: e.target.value})
                                    }
                                />
                            </div>
                        ) : (
                            <h4 className='textMargin'>City: {curSession.city}</h4>
                        )}
                        <Divider className='divider'/>
                        <h4 className='textMargin'>Players Needed: {updatedPlayersNeeded}</h4>
                        <h4 className='textMargin'>Members: {arrayToString(session.members)}</h4>
                        <Divider className='divider'/>
                        <h4 className='textMargin'>Date: {sessionDate.toLocaleDateString("en-US")}</h4>
                        <Divider className='divider'/>
                        {isEditable ? (
                            <div style={{marginBottom: '2vh'}}>
                                <h4 className='textMargin'>Description: </h4>
                                <input
                                    type="text"
                                    value={editedSession.description}
                                    onChange={(e) =>
                                        setEditedSession({...editedSession, description: e.target.value})
                                    }
                                />
                            </div>
                        ) : (
                            <h4 className='textMargin'>Description: {curSession.description}</h4>
                        )}
                        <Divider className='divider'/>
                        <div className="equipmentInfo">
                            <h4 className='textMargin'>Equipment Needed:</h4>
                            <h4 className='textMargin'>{arrayToEquipmentString(curSession.equipment)}</h4>
                        </div>
                        {isEditable && (
                            <div className="editButtons">
                                <Button
                                    sx={{
                                        color: "white",
                                        backgroundColor: "#DD4D2B",
                                        "&:hover": {
                                            backgroundColor: "#ab371b",
                                        },
                                        textTransform: "none",
                                    }}
                                    variant="contained"
                                    onClick={handleSaveEdit}
                                >
                                    Save
                                </Button>
                                <Button
                                    sx={{
                                        color: "white",
                                        backgroundColor: "#DD4D2B",
                                        "&:hover": {
                                            backgroundColor: "#ab371b",
                                        },
                                        textTransform: "none",
                                    }}
                                    variant="contained"
                                    onClick={handleCancelEdit}
                                >
                                    Cancel
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <div className={`splits${isEditable ? 'Edit' : ''}`}>
                    <Box sx={{
                        width: 400,
                        height: 550,
                        backgroundColor: 'white',
                        overflow: "auto",
                    }}>
                        <MessageList
                            referance={listReference}
                            className='message-list'
                            lockable={true}
                            toBottomHeight={'100%'}
                            dataSource={chat}/>

                    </Box>
                    <Divider className='divider'/>
                    <Box>
                        <Input
                            placeholder='Write your message here.'
                            defaultValue=''
                            referance={inputReference}
                            maxHeight={50}
                            onKeyPress={(e) => {
                                if (e.shiftKey && e.charCode === 13) {
                                    return true
                                }
                                if (e.charCode === 13) {
                                    AddMessage()
                                }
                            }}

                            rightButtons={<Button sx={{
                                color: 'white', backgroundColor: 'lightsalmon', '&:hover': {
                                    backgroundColor: '#ffc4ad'
                                }, textTransform: 'none'
                            }}
                                                  size="small" text='Submit' onClick={() => AddMessage()}>Send</Button>}
                        />

                    </Box>
                </div>
                <div className={`splits${isEditable ? 'Edit' : ''}`}>
                    <Map session={session}/>
                </div>
                <div className="ownerButtons">
                    {session.owner === profile.email && (
                        <div className="buttonWrapper">
                            {!isEditable && (
                                <Button
                                    sx={{
                                        color: "white",
                                        backgroundColor: "#DD4D2B",
                                        "&:hover": {
                                            backgroundColor: "#ab371b",
                                        },
                                        textTransform: "none",
                                        marginBottom: "10px"
                                    }}
                                    variant="contained"
                                    onClick={handleEditSession}
                                >
                                    Update Session
                                </Button>
                            )}
                            <Button
                                sx={{
                                    color: "white",
                                    backgroundColor: "#ff0000",
                                    "&:hover": {
                                        backgroundColor: "#bf0000",
                                    },
                                    textTransform: "none",
                                }}
                                variant="contained"
                                onClick={handleDeleteSession}
                            >
                                Delete Session
                            </Button>
                        </div>
                    )}
                </div>
                <div className="end">
                    <Link to={{pathname: '/dashboard'}} style={{marginRight: '10px', textDecoration: 'none'}}>
                        <span className="closeButton">
                            &times;
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
        ;
}