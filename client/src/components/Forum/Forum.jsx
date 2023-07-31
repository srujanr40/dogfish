import './Forum.css';
import Navbar from "../Navbar/Navbar";
import React, {useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {Input, MessageList} from "react-chat-elements";
import Button from "@mui/material/Button";
import {getForumAsync, updateForumAsync} from "../../redux/forum/forumThunks";
import Divider from "@mui/material/Divider";

const listReference = React.createRef();
const inputReference = React.createRef();

export default function Forum() {
    const dispatch = useDispatch();
    const [currentForum, setCurrentForum] = useState("basketball");
    const profile = useSelector(state => state.profileReducer).profile;
    let chats = useSelector(state => state.forumReducer).chats;
    let chat = chats.find(element => element.groupId === currentForum)
    if (chat === undefined) {
        chat = []
    } else {
        chat = chat.chats
        if (chat.length !== 0) {
            sortChat()
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(getForumAsync());
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
        dispatch(updateForumAsync({currentForum, chat}))
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

    function handleClick(event, selection) {
        setCurrentForum(selection)
    }

    return (
        <div>
            <Navbar/>
            <div>
                <div className="forumBar">
                    <Box sx={{flexGrow: 1}}>
                        <AppBar position="static" sx={{
                            backgroundColor: '#FFFFFF', color: '#253341', height: '7vh',
                            justifyContent: 'center'
                        }}>
                            <Toolbar>
                                <MenuItem selected={currentForum === "basketball"}
                                          onClick={(event) => handleClick(event, "basketball")}>
                                    Basketball
                                </MenuItem>
                                <MenuItem selected={currentForum === "soccer"}
                                          onClick={(event) => handleClick(event, "soccer")}>
                                    Soccer
                                </MenuItem>
                                <MenuItem selected={currentForum === "frisbee"}
                                          onClick={(event) => handleClick(event, "frisbee")}>
                                    Frisbee
                                </MenuItem>
                                <MenuItem selected={currentForum === "baseball"}
                                          onClick={(event) => handleClick(event, "baseball")}>
                                    Baseball
                                </MenuItem>
                                <MenuItem selected={currentForum === "tennis"}
                                          onClick={(event) => handleClick(event, "tennis")}>
                                    Tennis
                                </MenuItem>
                                <MenuItem selected={currentForum === "volleyball"}
                                          onClick={(event) => handleClick(event, "volleyball")}>
                                    Volleyball
                                </MenuItem>
                                <MenuItem selected={currentForum === "other"}
                                          onClick={(event) => handleClick(event, "other")}>
                                    Other
                                </MenuItem>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>
                <Divider sx={{backgroundColor: 'lightgray', height: '0.1vh'}}/>
                <div style={{paddingTop: '1.5vh', backgroundColor: 'whitesmoke'}}>
                    <Box sx={{height: 560, overflow: "auto"}}>
                        <MessageList
                            referance={listReference}
                            className='message-list'
                            lockable={true}
                            toBottomHeight={'100%'}
                            dataSource={chat}/>

                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        paddingLeft: '2vw',
                        paddingRight: '2vw',
                    }}>
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

                            rightButtons={<Button sx={{ width: '8vw',
                                color: 'white', backgroundColor: 'lightsalmon', '&:hover': {
                                    backgroundColor: '#ffc4ad'
                                }, textTransform: 'none'
                            }}
                                                  size="small" text='Submit' onClick={() => AddMessage()}>Send</Button>}
                        />

                    </Box>
                </div>
            </div>
        </div>
    )
}
