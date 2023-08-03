import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Featured from "../FeaturedCard/Featured.jsx";
import Card from "../Card/Card.jsx";
import SessionCard from "../SessionCard/SessionCard.jsx";
import Filter from "../Filter/Filter.jsx";
import "./Dashboard.css";
import "../styles.module.css";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Fade from '@mui/material/Fade';
import { Grid } from "@mui/material";
import CreateSessionPopup from "../CreateSession/CreateSessionPopup.jsx";
import SessionMoreInfoPopup from "../SessionMoreInfo/SessionMoreInfoPopup.jsx";
import { useSelector } from "react-redux";
import { getSessionsAsync } from "../../redux/session/sessionThunks.js";
import {useDispatch} from 'react-redux';

export default function Dashboard() {

  const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] =
    useState(false);
  const sessions = useSelector((store) => store.sessionReducer).sessions;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionsAsync('near_you'))
      .then((sessions) => {
        const near_you = sessions.payload
        setNearYouSessions(near_you);
      })
      .catch((error) => {
        console.error('Error fetching near you sessions:', error);
      });

    dispatch(getSessionsAsync('Frisbee'))
      .then((sessions) => {
        const frisbeeSessionsData = sessions.payload;
        setFrisbeeSessions(frisbeeSessionsData);
      })
      .catch((error) => {
        console.error('Error fetching Frisbee sessions:', error);
      });
      dispatch(getSessionsAsync('Soccer'))
      .then((sessions) => {
        const soccer = sessions.payload;
        setSoccerSessions(soccer);
      })
      .catch((error) => {
        console.error('Error fetching Frisbee sessions:', error);
      });
  }, [dispatch]);

  const [nearYouSessions, setNearYouSessions] = useState([]);
  const [frisbeeSessions, setFrisbeeSessions] = useState([]);
  const [soccerSessions, setSoccerSessions] = useState([]);

  const openCreateSessionModal = () => {
    setIsCreateSessionModalOpen(true);
  };

  const closeCreateSessionModal = () => {
    setIsCreateSessionModalOpen(false);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="createSessionButton">
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
      <div className="featuredContainer">
        <Featured />
      </div>
      <div className="sessionsContainer">
        <Card sessions={nearYouSessions} name={'Activities near you'} />
        <Card sessions={frisbeeSessions} name={'Frisbee'} />
        <Card sessions={soccerSessions} name={'Soccer'} />
        <Card sessions={sessions} name={'All'} />
      </div>
    </div>
  );
}
