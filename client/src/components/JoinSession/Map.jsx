import './JoinSession.css';
import Navbar from '../Navbar/Navbar.jsx';
import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation} from "react-router-dom";
import "react-chat-elements/dist/main.css"
import { MessageList, Input } from "react-chat-elements"
import Button from "@mui/material/Button";
import { addChatAsync } from "../../redux/chat/chatThunks";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
    const { isMapLoaded } = useLoadScript(
        {
            googleMapsApiKey: "AIzaSyAe4G85edT2a9BPunRUIV-WnVvON6DAquQ",
        }
    );
    console.log(!isMapLoaded)

    return (
        (!isMapLoaded) && <><Box sx={{
            width: 400,
            height: 600,
            backgroundColor: 'primary.dark',
        }} /><GoogleMap
            zoom={10}
            center={{ lat: 44, lng: 84 }}
        ></GoogleMap></>
    );
}