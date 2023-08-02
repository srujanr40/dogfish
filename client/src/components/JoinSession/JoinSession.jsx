import './JoinSession.css';
import Navbar from '../Navbar/Navbar.jsx';
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "react-chat-elements/dist/main.css"
import { MessageList, Input } from "react-chat-elements"
import Button from "@mui/material/Button";
import { updateSessionAsync, deleteSessionAsync } from "../../redux/session/sessionThunks";
import Map from "./Map"
import { getChatAsync, updateChatAsync } from "../../redux/chat/chatThunks";
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

    const [isEditable, setIsEditable] = useState(false);
    const [editedSession, setEditedSession] = useState({ ...session });
    const [curSession, setCurSession] = useState({ ...session });

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
        dispatch(updateChatAsync({ groupId, chat }))
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
        setEditedSession({ ...curSession });
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

    return (
        <div className="container">
            <Navbar />
            <div className="mainPart">
                <div className="splits">
                    <div className="mainInfo">
                        <img className="placeholder-image" src={curSession.image} alt="placeholder" />
                        <h5>Event</h5>
                        {isEditable ? (
                            <input
                                type="text"
                                value={editedSession.name}
                                onChange={(e) =>
                                    setEditedSession({ ...editedSession, name: e.target.value })
                                }
                            />
                        ) : (
                            <h4>{curSession.name}</h4>
                        )}
                        <h5>Location</h5>
                        {isEditable ? (
                            <input
                                type="text"
                                value={editedSession.location}
                                onChange={(e) =>
                                    setEditedSession({ ...editedSession, location: e.target.value })
                                }
                            />
                        ) : (
                            <h4>{curSession.location}</h4>
                        )}
                        <h5>City</h5>
                        {isEditable ? (
                            <input
                                type="text"
                                value={editedSession.city}
                                onChange={(e) =>
                                    setEditedSession({ ...editedSession, city: e.target.value })
                                }
                            />
                        ) : (
                            <h4>{curSession.city}</h4>
                        )}
                        <h5>Description</h5>
                        {isEditable ? (
                            <input
                                type="text"
                                value={editedSession.description}
                                onChange={(e) =>
                                    setEditedSession({ ...editedSession, description: e.target.value })
                                }
                            />
                        ) : (
                            <h4>{curSession.description}</h4>
                        )}
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
                    <Divider />
                    <div className="equipmentInfo">
                        <h5>Equipment Needed</h5>
                        <h4>{curSession.equipment}</h4>
                        <h5>Players Needed</h5>
                        <h4>{curSession.playersNeeded}</h4>
                    </div>
                </div>
                <div className="splits">
                    <Box sx={{
                        width: 400,
                        height: 550,
                        overflow: "auto",
                    }}>
                        <MessageList
                            referance={listReference}
                            className='message-list'
                            lockable={true}
                            toBottomHeight={'100%'}
                            dataSource={chat} />

                    </Box>

                    <Box>
                        <Input
                            className='rce-example-input'
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
                <div className="splits">
                    <Map session={session} />
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
                    <Link to={{ pathname: '/dashboard' }} style={{ marginRight: '10px', textDecoration: 'none' }}>
                        <span className="closeButton">
                            &times;
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
