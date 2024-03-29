import * as React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Featured from '../FeaturedCard/Featured.jsx';
import SessionCard from '../SessionCard/SessionCard.jsx';
import './MySessions.css';
import "../styles.module.css"
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CreateSessionPopup from '../CreateSession/CreateSessionPopup.jsx';
import SessionMoreInfoPopup from '../SessionMoreInfo/SessionMoreInfoPopup.jsx';
import { useSelector } from "react-redux";


export default function MySessions() {
    const [isSessionMoreInfoModalOpen, setIsSessionMoreInfoModalOpen] = useState(false);
    const [selectedSessionId, setSelectedItemId] = useState(null);
    const profile = useSelector((store) => store.profileReducer).profile;
    var sessions = useSelector(state => state.sessionReducer).sessions;

    const openSessionMoreInfoModal = (itemId) => {
        setSelectedItemId(itemId);
        setIsSessionMoreInfoModalOpen(true)
    };

    const closeSessionMoreInfoModal = () => {
        setSelectedItemId(null);
        setIsSessionMoreInfoModalOpen(false)
    };

    // filters so that only sessions that are joined are displayed
    const joinedSessions = sessions.filter(
        (element) => element.members && element.members.some(member => member && member.email === profile.email)
    );



    return (
        <div className="container">
            <Navbar />
            <div className="sessionsCont">
                <ul className="sessions">
                    {joinedSessions.map((element, index) => (
                        <SessionCard key={index} session={element} onMoreInfo={openSessionMoreInfoModal} />
                    ))}
                </ul>

                {isSessionMoreInfoModalOpen && (
                    <div>
                        <SessionMoreInfoPopup sessionID={selectedSessionId} open={openSessionMoreInfoModal} closeModal={closeSessionMoreInfoModal} />
                    </div>
                )}

            </div>
        </div>
    )
}