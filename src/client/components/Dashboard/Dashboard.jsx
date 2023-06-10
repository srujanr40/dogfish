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
    const [cardList, setCardList] = useState([
        {name: "Frisbee", description: "Ultimate at the field"},
        {name: "Soccer", description: "after school soccer session"},
        {name: "Basketball", description: "play time"},
        {name: "Badminton", description: "play time"},
        {name: "Tennis", description: "play time"},
        {name: "Football", description: "play time"},
        {name: "Water Polo", description: "play time"},
    ]);
    const [secondCardList, setSecondCardList] = useState([
        {name: "Soccer", description: "mini league"},
        {name: "Football", description: "after school football session"},
        {name: "Football", description: "saturday football"},
        {name: "Soccer", description: "5 players needed"},
        {name: "Soccer", description: "test"},
        {name: "Soccer", description: "field tonight"},
    ]);

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
                        <SessionCard name={element.name} description={element.description}/>
                    ))}
                </ul>
            </div>
            <div className="sessionsContainer">
                <h4>Soccer</h4>
                <Divider />
                <ul className="sessionsList">
                    {secondCardList.map((element, index) => (
                        <SessionCard name={element.name} description={element.description}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}