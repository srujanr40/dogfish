import './JoinSession.css';
import Navbar from '../Navbar/Navbar.jsx';
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {useSelector} from 'react-redux';
import {Link, useLocation} from "react-router-dom";
import "react-chat-elements/dist/main.css"
import { MessageList, Input } from "react-chat-elements"
import Button from "@mui/material/Button";
import {useState} from "react";
const listReference = React.createRef();
const inputReference = React.createRef();

export default function JoinSession() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const groupId = searchParams.get('groupId');
    const sessions = useSelector(state => state.sessionReducer).sessions;
    const session = sessions.find(element => element.groupId == groupId)

    const [messageListArray, setMessageListArray] = useState([
        {
            position:"left",
            type:"text",
            title:"Kursat",
            text:"Hey everyone!",
        },
        {
            position: 'left',
            type: 'text',
            title:"Bob",
            text: 'Hello, I have some equipment we can use',
        },
        {
            position: 'left',
            type: 'text',
            title:"Michael",
            text: 'Great, good to hear!',
            date: new Date(),
        }
    ])

    const addMessage = () => {
        const value = inputReference.current.value;
        if(value.length === 0)
            return
        const newMessage = {
            position: 'right',
            type: 'text',
            title:"Edvin",
            text: value,
            date: new Date(),
        }
        inputReference.current.value = ''
        setMessageListArray([...messageListArray, newMessage])

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
                            dataSource={messageListArray} />

                    </Box>
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
                                addMessage()
                            }
                        }}

                        rightButtons={<Button sx={{ color: 'white', backgroundColor: 'lightsalmon', '&:hover': {
                                backgroundColor: '#ffc4ad'} ,textTransform: 'none' }}
                                              size="small" text='Submit' onClick={() => addMessage()}>Join</Button>}
                    />
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
