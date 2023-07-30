import Navbar from "../Navbar/Navbar";
import React, {useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import {useDispatch, useSelector} from "react-redux";
import {Input, MessageList} from "react-chat-elements";
import Button from "@mui/material/Button";
// import {getChatAsync, updateChatAsync} from "../../redux/chat/chatThunks";
import {createNewForumAsync, getForumAsync, updateForumAsync} from "../../redux/forum/forumThunks";
import {createNewChatAsync} from "../../redux/chat/chatThunks";

const listReference = React.createRef();
const inputReference = React.createRef();

export default function Forum() {
    const dispatch = useDispatch();
    const [currentForum, setCurrentForum] = useState("basketball");
    const profile = useSelector(state => state.profileReducer).profile;
    let forums = useSelector(state => state.forumReducer);
    // console.log(forums)
    if (forums === undefined) {
        chat = []
    } else {
        forums = forums.chats
    }
    // let chats = useSelector(state => state.chatReducer).chats;
    let chat = forums.find(element => element.groupId === currentForum)
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

    return (
        <div>
            <Navbar/>
            <div>
                <div className="forumBar">
                    <Box sx={{flexGrow: 1}}>
                        <AppBar position="static" sx={{backgroundColor: '#FFFFFF', color: '#253341'}}>
                            <Toolbar>
                                <MenuItem onClick={() => setCurrentForum("basketball")}>
                                    Basketball
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    console.log('ff')
                                    setCurrentForum("soccer")
                                }}>
                                    Soccer
                                </MenuItem>
                                <MenuItem onClick={() => setCurrentForum("frisbee")}>
                                    Frisbee
                                </MenuItem>
                                <MenuItem onClick={() => setCurrentForum("baseball")}>
                                    Baseball
                                </MenuItem>
                                <MenuItem onClick={() => setCurrentForum("tennis")}>
                                    Tennis
                                </MenuItem>
                                <MenuItem onClick={() => setCurrentForum("volleyball")}>
                                    Volleyball
                                </MenuItem>
                                <MenuItem onClick={() => setCurrentForum("other")}>
                                    Other
                                </MenuItem>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>
                <div>
                    <Box sx={{overflow: "auto"}}>
                        <MessageList
                            referance={listReference}
                            className='message-list'
                            lockable={true}
                            toBottomHeight={'100%'}
                            dataSource={chat}/>

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
            </div>
        </div>
    )
}
