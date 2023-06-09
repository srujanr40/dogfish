import * as React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Featured from '../FeaturedCard/Featured.jsx';
import SessionCard from '../SessionCard/SessionCard.jsx';
import './Dashboard.css';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CreateSessionPopup from '../CreateSession/CreateSessionPopup.jsx';
import SessionMoreInfoPopup from '../SessionMoreInfo/SessionMoreInfoPopup.jsx';


export default function Dashboard() {
    const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] = useState(false);
    const [isSessionMoreInfoModalOpen, setIsSessionMoreInfoModalOpen] = useState(false);
    const [selectedSessionId, setSelectedItemId] = useState(null);

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
                <h4>Activities near you</h4>
                <Divider />
                <div className="sessionsList">
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                </div>

                <h4>Soccer</h4>
                <Divider />
                <div className="sessionsList">
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                    <SessionCard onMoreInfo={openSessionMoreInfoModal}/>
                </div>

                {isSessionMoreInfoModalOpen && (
                    <div>
                        <SessionMoreInfoPopup sessionID="1" closeModal={closeSessionMoreInfoModal} />
                    </div>
                )}
            </div>
        </div>
    )
}