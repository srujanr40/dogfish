import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Featured from "../FeaturedCard/Featured.jsx";
import Card from "../Card/Card.jsx";
import "./Dashboard.css";
import "../styles.module.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CreateSessionPopup from "../CreateSession/CreateSessionPopup.jsx";
import { getSessionsNearYouAsync } from "../../redux/session/sessionThunks.js";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {

  const sessions = useSelector(state => state.sessionReducer).sessions;
  const profile = useSelector(state => state.profileReducer).profile;
  const [isCreateSessionModalOpen, setIsCreateSessionModalOpen] =
    useState(false);
  const [filteredSessions, setFilteredSessions] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchSessions = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filtered = sessions.filter((session) =>
      session.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSessions(filtered);
  };

  const dispatch = useDispatch();

  const [nearYouSessions, setNearYouSessions] = useState([]);
  const [interestedSportsSessions, setInterestedSportsSessions] = useState([]);

  useEffect(() => {
    let sportCategoriesArrays = [];
    profile.interests.forEach((sport) => {
      sportCategoriesArrays.push(sessions.filter((session) => session.sport.toLowerCase() === sport.toLowerCase()))
    })
    setInterestedSportsSessions(sportCategoriesArrays)
  }, [dispatch, sessions, profile.interests]);

  useEffect(() => {
    dispatch(getSessionsNearYouAsync(profile.location))
      .then((sessions) => {
        const near_you = sessions.payload
        setNearYouSessions(near_you);
      })
      .catch((error) => {
        console.error('Error fetching near you sessions:', error);
      });
  }, [dispatch, sessions, profile.location]);

  const openCreateSessionModal = () => {
    setIsCreateSessionModalOpen(true);
  };

  const closeCreateSessionModal = () => {
    setIsCreateSessionModalOpen(false);
  };

  return (
    <div className="container">
      <Navbar onSearch={handleSearchSessions} />
      {searchTerm ? (
          <div className='searchContainer'>
            <div className="createSessionButton">
              <Fab variant="extended" color="primary" aria-label="create" onClick={openCreateSessionModal}>
                <AddIcon/>
                Create Session
              </Fab>
            </div>
            <Card sessions={filteredSessions} name={'Filtered Sessions'}/>
          </div>
        ) : (
      <>
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
        <Card sessions={sessions} name={'All'} />
        <Card sessions={nearYouSessions} name={'Activities near you'} />
        {interestedSportsSessions.map((sessionsArray, index) => (
          sessionsArray && sessionsArray[0] && <Card key={index} sessions={sessionsArray} name={sessionsArray[0].sport} />
        ))}
      </div>
      </>)}
    </div>
  );
}
