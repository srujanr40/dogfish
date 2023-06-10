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
import {useSelector} from "react-redux";


export default function Dashboard() {
    const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] = useState(false);
    const sessions = useSelector(state => state.fetchSession);
    const [cardList, setCardList] = useState(sessions.slice(0, 5));
    const [secondCardList, setSecondCardList] = useState(sessions.slice(3, 7));

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
                <ul className="sessionsList">
                    {cardList.map((element, index) => (
                        <SessionCard name={element.name} description={element.description} groupId={element.groupId}/>
                    ))}
                </ul>
            </div>
            <div className="sessionsContainer">
                <h4>Soccer</h4>
                <Divider />
                <ul className="sessionsList">
                    {secondCardList.map((element, index) => (
                        <SessionCard name={element.name} description={element.description} groupId={element.groupId}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}