import CreateSessionTextFields from "./CreateSessionTextFields";
import CreateSessionImage from "./CreateSessionImage";
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';

export default function CreateSessionPopup() {

  return (
    <div id='create-session-popup' style={{padding: 50}}>
        <Typography variant="h2" gutterBottom 
        sx={{ fontWeight: 'medium', 
        borderBottom: '1.2px solid black',
          paddingBottom: '5px', }}>
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
    </div>
  );
}
