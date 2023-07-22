import Divider from "@mui/material/Divider";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Featured from "../FeaturedCard/Featured.jsx";
import SessionCard from "../SessionCard/SessionCard.jsx";
import Filter from "../Filter/Filter.jsx";
import "./Dashboard.css";
import "../styles.module.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateSessionPopup from "../CreateSession/CreateSessionPopup.jsx";
import SessionMoreInfoPopup from "../SessionMoreInfo/SessionMoreInfoPopup.jsx";
import { useSelector } from "react-redux";
import { getSessionsAsync } from "../../redux/session/sessionThunks.js";
import {useDispatch} from 'react-redux';


export default function Card (props) {

    const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] =
        useState(false);
    const [isSessionMoreInfoModalOpen, setIsSessionMoreInfoModalOpen] =
        useState(false);
    const [selectedSessionId, setSelectedItemId] = useState(null);

    const openCreateSessionModal = () => {
        setIsCreateSessionModalOpen(true);
      };
    
      const closeCreateSessionModal = () => {
        setIsCreateSessionModalOpen(false);
      };
    
      const openSessionMoreInfoModal = (itemId) => {
        setSelectedItemId(itemId);
        setIsSessionMoreInfoModalOpen(true);
      };
    
      const closeSessionMoreInfoModal = () => {
        setSelectedItemId(null);
        setIsSessionMoreInfoModalOpen(false);
      };

    return (<>
        <div className="featuredAndCreate">
          <h3>Activities near you</h3>
          {!isCreateSessionModalOpen && (
            <Fab
              variant="extended"
              color="primary"
              aria-label="create"
              onClick={openCreateSessionModal}
            >
              <AddIcon />
              Create Session
            </Fab>
          )}

          {isCreateSessionModalOpen && (
            <div>
              <CreateSessionPopup closeModal={closeCreateSessionModal} />
            </div>
          )}
        </div>
        <Divider />
    </>)
}