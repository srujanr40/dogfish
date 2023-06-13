import "./SessionMoreInfo.css";
import { useSelector } from 'react-redux';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// props should contain a session ID and a closeModal callback for when the more info popup's close button is pressed.
export default function SessionMoreInfoPopup(props) {
  const sessions = useSelector(state => state.fetchSession);
  const session = sessions.find(element => element.groupId === props.sessionID)

  return (
    <div id="session-more-info-popup">
      <div id="session-more-info-content">
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              justifyContent: "center",
              fontWeight: "medium",
            }}
          >
            Session Info
          </Typography>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", lg: "row", } }}>
            <div id="session-more-info-popup-text">
              <Box className="main-text" sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", }
              }}>
                <Box sx={{ alignItems: 'center', justifyContent: 'center', width: { sm: 450, md: 300, lg: 400 }, paddingRight: 2 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      justifyContent: "center",
                      fontWeight: "medium",
                    }}
                  >
                    {session.name}
                  </Typography>
                  <br />

                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      justifyContent: "center",
                      fontWeight: "medium",
                    }}
                  >
                    Sport: {session.sport}
                  </Typography>
                  <br />

                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      justifyContent: "center",
                      fontWeight: "medium",
                    }}
                  >
                    {session.description}
                  </Typography>
                </Box>
              </Box>

              <Box className="additional-details" sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "column", md: "column", lg: "row", }
              }}>
                <Box sx={{ alignItems: 'center', justifyContent: 'center', width: { sm: 450, md: 300, lg: 400 }, paddingRight: 2 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      justifyContent: "center",
                      fontWeight: "medium",
                    }}
                  >
                    Where: {session.location}, {session.city}
                  </Typography>
                  <br />

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      justifyContent: "center",
                      fontWeight: "medium",
                    }}
                  >
                    Missing Equipment: {session.equipment}
                  </Typography>
                  <br />

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      justifyContent: "center",
                      fontWeight: "medium",
                    }}
                  >
                    Missing Players: {session.playersNeeded}
                  </Typography>
                  <br />
                </Box>
              </Box>
            </div>
          </Box>
        </Box>

        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
      </div>
    </div>
  );
}
