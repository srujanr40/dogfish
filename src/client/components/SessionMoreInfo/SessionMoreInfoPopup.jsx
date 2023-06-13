import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import "./SessionMoreInfo.css";

export default function SessionMoreInfoPopup(props) {
  const sessions = useSelector((state) => state.fetchSession);
  const session = sessions.find((element) => element.groupId === props.sessionID);

  return (
    <div id="session-more-info-popup">
      <div id="session-more-info-content">
        <Box>
          <Typography variant="h3" gutterBottom className="popup-title">
            {session.name}
          </Typography>
          <Box className="popup-details">
            <div className="main-text">
              <Box>
                <Typography variant="h5" gutterBottom className="session-sport">
                <b>Sport:</b> {session.sport}
                </Typography>
                <Typography variant="h5" gutterBottom className="session-description">
                  <b>Description:</b> {session.description}
                </Typography>
              </Box>
            </div>
            <div className="additional-details">
              <Box>
                <Typography variant="h5" gutterBottom className="session-location">
                <b>Where:</b> {session.location}, {session.city}
                </Typography>
                <Typography variant="h5" gutterBottom className="session-equipment">
                <b>Missing Equipment:</b> {session.equipment}
                </Typography>
                <Typography variant="h5" gutterBottom className="session-players-needed">
                <b>Missing Players:</b> {session.playersNeeded}
                </Typography>
              </Box>
            </div>
          </Box>
        </Box>
        <span className="close" onClick={props.closeModal}>
          <CloseIcon />
        </span>
      </div>
    </div>
  );
}
