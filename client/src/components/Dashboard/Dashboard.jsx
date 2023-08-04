import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Featured from "../FeaturedCard/Featured.jsx";
import Card from "../Card/Card.jsx";
import "./Dashboard.css";
import "../styles.module.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateSessionPopup from "../CreateSession/CreateSessionPopup.jsx";
import { getSessionsAsync, getSessionsNearYouAsync } from "../../redux/session/sessionThunks.js";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {

  const profile = useSelector(state => state.profileReducer).profile;
  const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] =
    useState(false);

  const dispatch = useDispatch();

  const [nearYouSessions, setNearYouSessions] = useState([]);
  const [frisbeeSessions, setFrisbeeSessions] = useState([]);
  const [soccerSessions, setSoccerSessions] = useState([]);
  const [allSessions, setAllSessions] = useState([]);

  useEffect(() => {
    dispatch(getSessionsAsync(''))
    .then((sessions) => {
      const all = sessions.payload
      setAllSessions(all);
    })
    .catch((error) => {
      console.error('Error fetching near you sessions:', error);
    });

    dispatch(getSessionsNearYouAsync(profile.location))
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
  }, [dispatch, allSessions, profile.location]);

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
        <Card sessions={allSessions} name={'All'} />
      </div>
    </div>
  );
}
