import './JoinSession.css';
import Navbar from '../Navbar/Navbar.jsx';
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {useSelector} from 'react-redux';
import {Link, useLocation} from "react-router-dom";

export default function JoinSession() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const groupId = searchParams.get('groupId');
    let stockPlaceholderImageURL = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    const sessions = useSelector(state => state.fetchSession);
    const session = sessions.find(element => element.groupId == groupId)

    return (
        <div className="container">
            <Navbar/>
            <div className="mainPart">
                <div className="splits">
                    <div className="mainInfo">
                        <img className="placeholder-image" src={stockPlaceholderImageURL} alt="placeholder"/>
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
                        height: 600,
                        backgroundColor: 'primary.dark',
                    }}/>
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
