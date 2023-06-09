import './JoinSession.css';
import Navbar from '../Navbar/Navbar.jsx';
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {useState} from "react";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export default function JoinSession(props) {
    // const { groupId } = this.props.location.state;
    let stockPlaceholderImageURL = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
    const [sampleInfo, setSampleInfo] = useState(
        {
            name: "Frisbee", description: "Ultimate at the field behind the Nest, going to meet around 3pm tomorrow"
            , city: "Vancouver", location: "MacInnes Field", equipment: "Frisbee", playersNeeded: 3
        })

    return (
        <div className="container">
            <Navbar/>
            <div className="mainPart">
                <div className="splits">
                    <div className="mainInfo">
                        <img className="placeholder-image" src={stockPlaceholderImageURL} alt="placeholder"/>
                        <h5>Event</h5>
                        <h4>{sampleInfo.name}</h4>
                        <h5>Location</h5>
                        <h4>{sampleInfo.location}</h4>
                        <h5>City</h5>
                        <h4>{sampleInfo.city}</h4>
                        <h4>{sampleInfo.description}</h4>
                    </div>
                    <Divider/>
                    <div className="equipmentInfo">
                        <h5>Equipment Needed</h5>
                        <h4>{sampleInfo.equipment}</h4>
                        <h5>Players Needed</h5>
                        <h4>{sampleInfo.playersNeeded}</h4>
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
                    <Link to={{ pathname: '/', state: { groupId: props.groupId} }} style={{marginRight: '10px', textDecoration: 'none'}}>
                        <span className="closeButton">
                            &times;
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
}
