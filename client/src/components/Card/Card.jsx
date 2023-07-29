import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import SessionCard from "../SessionCard/SessionCard.jsx";
import "../styles.module.css";
import SessionMoreInfoPopup from "../SessionMoreInfo/SessionMoreInfoPopup.jsx";


export default function Card (props) {
    const [isSessionMoreInfoModalOpen, setIsSessionMoreInfoModalOpen] =
        useState(false);
    const [selectedSessionId, setSelectedItemId] = useState(null);
    
    const openSessionMoreInfoModal = (itemId) => {
    setSelectedItemId(itemId);
    setIsSessionMoreInfoModalOpen(true);
    };

    const closeSessionMoreInfoModal = () => {
    setSelectedItemId(null);
    setIsSessionMoreInfoModalOpen(false);
    };

    return (<>
        <h3>{props.name}</h3>
        <Divider />
        <ul className="sessionsList">
          {props.sessions.map((element, index) => (
            <SessionCard
              key={index}
              session={element}
              onMoreInfo={openSessionMoreInfoModal}
            />
          ))}
        </ul>

        {isSessionMoreInfoModalOpen && (
          <div>
            <SessionMoreInfoPopup
              sessionID={selectedSessionId}
              closeModal={closeSessionMoreInfoModal}
            />
          </div>
        )}
        <Divider />
    </>)
}