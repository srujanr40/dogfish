import * as React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Featured from '../FeaturedCard/Featured.jsx';
import SessionCard from '../SessionCard/SessionCard.jsx';
import './Dashboard.css';
import "../styles.module.css"
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CreateSessionPopup from '../CreateSession/CreateSessionPopup.jsx';


export default function Dashboard() {
    const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] = useState(false);

    const openCreateSessionModal = () => {
        setIsCreateSessionModalOpen(true);
      };
    
      const closeCreateSessionModal = () => {
        setIsCreateSessionModalOpen(false);
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
                            <CreateSessionPopup closeModal={closeCreateSessionModal}/>
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
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                </div>
            </div>
            <div className="sessionsContainer">
                <h4>Soccer</h4>
                <Divider />
                <div className="sessionsList">
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                    <SessionCard />
                </div>
            </div>
        </div>
    )
}