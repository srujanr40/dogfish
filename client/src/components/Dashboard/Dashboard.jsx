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
  const profile = useSelector((state) => state.profileReducer).profile;
  const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] = useState(false);
  const dispatch = useDispatch();

  const [allSessions, setAllSessions] = useState([]);

  useEffect(() => {
    fetchSessions();
  }, [dispatch, profile.location]);

  const fetchSessions = async () => {
    try {
      const allSessionsRes = await dispatch(getSessionsAsync(""));
      const allSessionsData = allSessionsRes.payload;
      setAllSessions(allSessionsData);

      dispatch(getSessionsNearYouAsync(profile.location))
      .then((sessions) => {
        const near_you = sessions.payload
        setNearYouSessions(near_you);
      })
      .catch((error) => {
        console.error('Error fetching near you sessions:', error);
      });

      const frisbeeSessionsData = allSessionsData.filter(
        (session) => session.sport === "Frisbee"
      );
      setFrisbeeSessions(frisbeeSessionsData);

      const soccerSessionsData = allSessionsData.filter(
        (session) => session.sport === "Soccer"
      );
      setSoccerSessions(soccerSessionsData);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

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
        <Card sessions={allSessions} name={'All'} />
      </div>
    </div>
  );
}
