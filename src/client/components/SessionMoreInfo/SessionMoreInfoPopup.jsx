import "./SessionMoreInfo.css";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemText } from '@mui/material';
import Typography from "@mui/material/Typography";

// props should contain a session ID and a closeModal callback for when the more info popup's close button is pressed.
export default function SessionMoreInfoPopup(props) {
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
                    Hockey at the Park
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
                    Sport: Hockey
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
                    Join us at the local park for some hockey scrimmages this Saturday. New and experienced players are welcome!
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
                    Where: Vancouver
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
                    Missing Equipment:
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Helmet"
                        secondary="Missing: 2"
                      />
                    </ListItem>,
                    <ListItem>
                      <ListItemText
                        primary="Stick"
                        secondary="Missing: 3"
                      />
                    </ListItem>
                  </List>

                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      justifyContent: "center",
                      fontWeight: "medium",
                    }}
                  >
                    Missing Players:
                  </Typography>

                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Goalie"
                        secondary="Missing: 1"
                      />
                    </ListItem>,
                    <ListItem>
                      <ListItemText
                        primary="Defenseman"
                        secondary="Missing: 2"
                      />
                    </ListItem>
                  </List>
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
