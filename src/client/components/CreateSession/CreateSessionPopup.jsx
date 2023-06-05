import CreateSessionTextFields from "./CreateSessionTextFields";
import CreateSessionImage from "./CreateSessionImage";
import Grid from "@mui/material/Grid";
import CreateSession from "./CreateSession.css";

import Typography from "@mui/material/Typography";

export default function CreateSessionPopup(props) {
  return (
    <div id="create-session-popup">
      <div id="create-session-content" style={{ padding: 50 }}>
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
        <Grid container spacing={20}>
          <Grid item xs={7}>
            <CreateSessionTextFields />
          </Grid>
          <Grid item xs={5}>
            <CreateSessionImage />
          </Grid>
        </Grid>

        <span className="close" onClick={props.closeModal}>
          &times;
        </span>
      </div>
    </div>
  );
}
