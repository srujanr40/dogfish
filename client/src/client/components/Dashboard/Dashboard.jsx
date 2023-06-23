import * as React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Featured from '../FeaturedCard/Featured.jsx';
import SessionCard from '../SessionCard/SessionCard.jsx';
import './Dashboard.css';
import "../styles.module.css"
import Divider from '@mui/material/Divider';
import Fab, { fabClasses } from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CreateSessionPopup from '../CreateSession/CreateSessionPopup.jsx';
import SessionMoreInfoPopup from '../SessionMoreInfo/SessionMoreInfoPopup.jsx';
import { useSelector } from "react-redux";

export default function Dashboard() {
  const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] = useState(false);
  const [selectedSessionId, setSelectedItemId] = useState(null);
  var sessions = useSelector(state => state.sessionReducer).sessions;

  const [isSessionMoreInfoModalOpen, setIsSessionMoreInfoModalOpen] = useState(false);

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
        <div className="featuredAndCreate"></div>
        <Divider />
        <Featured />
      </div>
      <div className="sessionsContainer">
        <h2 style={{ color: 'white' }}>Activities near you</h2>
        <Divider sx={{ backgroundColor: 'gray' }} />
        <div className="scrollableContainer">
          <ul className="sessionsList">
            {sessions.map((element, index) => (
              <SessionCard
                joined={element.joined}
                key={index}
                name={element.name}
                description={element.description}
                groupId={element.groupId}
                onMoreInfo={openSessionMoreInfoModal}
                image={element.image}
              />
            ))}
          </ul>
        </div>
        <h2 style={{ color: 'white' }}>Newly added</h2>
        <Divider sx={{ backgroundColor: 'gray' }} />
        <div className="scrollableContainer">
          <ul className="sessionsList">
            {sessions.map((element, index) => (
              <SessionCard
                key={index}
                name={element.name}
                description={element.description}
                groupId={element.groupId}
                onMoreInfo={openSessionMoreInfoModal}
                image={element.image}
              />
            ))}
          </ul>
        </div>

        {isSessionMoreInfoModalOpen && (
          <div>
            <SessionMoreInfoPopup sessionID={selectedSessionId} closeModal={closeSessionMoreInfoModal} />
          </div>
        )}
      </div>
    </div>
  )
}
