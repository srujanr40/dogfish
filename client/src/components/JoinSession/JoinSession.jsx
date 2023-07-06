import './JoinSession.css';
import Navbar from '../Navbar/Navbar.jsx';
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation} from "react-router-dom";
import "react-chat-elements/dist/main.css"
import { MessageList, Input } from "react-chat-elements"
import Button from "@mui/material/Button";
import {addChat} from "../../redux/actions";
const listReference = React.createRef();
const inputReference = React.createRef();

export default function JoinSession() {
    const location = useLocation();
    const dispatch = useDispatch();
    const searchParams = new URLSearchParams(location.search);
    const groupId = searchParams.get('groupId');
    const sessions = useSelector(state => state.sessionReducer).sessions;
    const session = sessions.find(element => element.groupId == groupId)
    const name = useSelector(state => state.profileReducer).name;
    let chats = useSelector(state => state.chatRed.chats);
    let chat = chats.find(element => element.groupId == groupId)
    if(chat === undefined) {
        chat = []
    } else {
        chat = chat.chat
    }

    const AddMessage = () => {
        const value = inputReference.current.value;
        if(value.length === 0)
            return
        const newChat = {
            position: 'right',
            type: 'text',
            title:name,
            text: value,
            date: new Date(),
        }
        inputReference.current.value = ''
        dispatch(addChat(groupId, newChat))
    }
    return (
        <div className="container">
            <Navbar/>
            <div className="mainPart">
                <div className="splits">
                    <div className="mainInfo">
                        <img className="placeholder-image" src={session.image} alt="placeholder"/>
                        <h5>Event</h5>
                        <h4>{session.name}</h4>
                        <h5>Location</h5>
                        <h4>{session.location}</h4>
                        <h5>City</h5>
                        <h4>{session.city}</h4>
                        <h4>{session.description}</h4>
                    </div>
                    <Divider/>
                    <div className="equipmentInfo">
                        <h5>Equipment Needed</h5>
                        <h4>{session.equipment}</h4>
                        <h5>Players Needed</h5>
                        <h4>{session.playersNeeded}</h4>
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

                            rightButtons={<Button sx={{ color: 'white', backgroundColor: 'lightsalmon', '&:hover': {
                                    backgroundColor: '#ffc4ad'} ,textTransform: 'none' }}
                                                  size="small" text='Submit' onClick={() => AddMessage()}>Send</Button>}
                        />

                    </Box>
                </div>
                <div className="splits">
                    <Box sx={{
                        width: 400,
                        height: 600,
                        backgroundColor: 'primary.dark',
                    }}/>
                </div>
                <div className="end">
                    <Link to={{ pathname: '/' }} style={{marginRight: '10px', textDecoration: 'none'}}>
                        <span className="closeButton">
                            &times;
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
}
