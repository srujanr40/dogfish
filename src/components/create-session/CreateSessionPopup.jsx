import CreateSessionTextFields from "./CreateSessionTextFields";
import Typography from '@mui/material/Typography';

export default function CreateSessionPopup() {

  return (
    <div>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'medium' }}>
            Create a new Session
        </Typography>
        <CreateSessionTextFields />
    </div>
  );
}
