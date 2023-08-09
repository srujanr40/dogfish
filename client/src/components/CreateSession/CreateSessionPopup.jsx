import CreateSessionTextFields from "./CreateSessionTextFields";

import "./CreateSession.css";
import Box from "@mui/material/Box";


import Typography from "@mui/material/Typography";


export default function CreateSessionPopup(props) {
  return (
    <div id="create-session-popup">
      <div id="create-session-content">
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              justifyContent: "center",
              fontWeight: "medium",
            }}
          >
            Create a new Session
          </Typography>
          <CreateSessionTextFields closeModal={props.closeModal}/>
        </Box>
      </div>
    </div>
  );
}
