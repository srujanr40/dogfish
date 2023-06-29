import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Featured from '../FeaturedCard/Featured.jsx';
import SessionCard from '../SessionCard/SessionCard.jsx';
import Filter from '../Filter/Filter.jsx';
import './Dashboard.css';
import "../styles.module.css"
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CreateSessionPopup from '../CreateSession/CreateSessionPopup.jsx';
import SessionMoreInfoPopup from '../SessionMoreInfo/SessionMoreInfoPopup.jsx';
import { useSelector } from "react-redux";
import { getSessionsAsync } from '../../thunks/thunks';
import {useDispatch} from 'react-redux';


export default function Dashboard() {
    const dispatch = useDispatch();

    const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] = useState(false);
    const [isSessionMoreInfoModalOpen, setIsSessionMoreInfoModalOpen] = useState(false);
    const [selectedSessionId, setSelectedItemId] = useState(null);

    useEffect(() => {
        dispatch(getSessionsAsync());
    }, []);

    const sessions = useSelector(store => store.sessionReducer).sessions;


    const openCreateSessionModal = () => {
        setIsCreateSessionModalOpen(true);
    };

    const closeCreateSessionModal = () => {
        setIsCreateSessionModalOpen(false);
    };

    const openSessionMoreInfoModal = (itemId) => {
        setSelectedItemId(itemId);
        setIsSessionMoreInfoModalOpen(true)
    };

    const closeSessionMoreInfoModal = () => {
        setSelectedItemId(null);
        setIsSessionMoreInfoModalOpen(false)
    };

    // only display sessions not joined
    const availableSessions = sessions.filter(element => element.joined === false);


    return (
        <div className="container">
            <Navbar />
            <div className="featuredContainer">
                <div className="featuredAndCreate">
                    <h4>Featured</h4>
                    <Fab variant="extended" color="primary" aria-label="create" onClick={openCreateSessionModal}>
                        <AddIcon />
                        Create Session
                    </Fab>

                    {isCreateSessionModalOpen && (
                        <div>
                            <CreateSessionPopup closeModal={closeCreateSessionModal} />
                        </div>
                    )}
                </div>
                <Divider />
                <Featured />
            </div>
            <div className="sessionsContainer">
                <div>
                    <h4>Activities near you</h4>
                    <Filter />
                </div>
                <Divider />
                <ul className="sessionsList">
                    {availableSessions.map((element, index) => (
                        <SessionCard key={index} name={element.name} description={element.description} groupId={element.groupId} onMoreInfo={openSessionMoreInfoModal} />
                    ))}
                </ul>
                <h4>Soccer</h4>
                <Divider />
                <ul className="sessionsList">
                    {availableSessions.map((element, index) => (
                        <SessionCard key={index} name={element.name} description={element.description} groupId={element.groupId} onMoreInfo={openSessionMoreInfoModal} />
                    ))}
                </ul>

                {isSessionMoreInfoModalOpen && (
                <div>
                    <SessionMoreInfoPopup sessionID={selectedSessionId} closeModal={closeSessionMoreInfoModal} />
                </div>
                )}
                
            </div>
        </div>
    )
}