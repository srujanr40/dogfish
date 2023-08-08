import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";
import "./SessionMoreInfo.css";
import Dialog from '@mui/material/Dialog';

export default function SessionMoreInfoPopup(props) {
  const sessions = useSelector((state) => state.sessionReducer).sessions;
  const session = sessions.find((element) => element.groupId === props.sessionID);
  const formattedDate = new Date(session.dateTime).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <Dialog open={props.open} onClose={props.closeModal} maxWidth="sm" fullWidth>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
      <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginTop: '3rem', fontSize: '2.1rem', textAlign: 'center', flex: 1 }}>
        {session.name}
      </Typography>
      <IconButton aria-label="close" onClick={props.closeModal}>
        <CloseIcon />
      </IconButton>
    </div>
    <DialogContent style={{ textAlign: 'center', height: '400px' }}>
      <Typography variant="body1" gutterBottom style={{ marginTop: '2rem', marginBottom: '2rem', fontSize: '1.2rem' }}>
        {session.description}
      </Typography>
      <Typography variant="body2" gutterBottom style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
        <span style={{ color: '#DD4D2B', fontSize: '1.5rem' }}>{session.city}</span>
      </Typography>
      <Typography variant="body2" gutterBottom style={{ marginTop: '1rem', fontSize: '1.3rem', fontWeight: 'bold', fontStyle: 'bold' }}>
        {session.location}
      </Typography>
      <Typography variant="body2" gutterBottom style={{ marginTop: '1rem', fontSize: '2.1rem', color: '#DD4D2B' }}>
        {session.sport}
      </Typography>
      <Typography variant="body2" gutterBottom style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
        {formattedDate}
      </Typography>
    </DialogContent>
  </Dialog>
  );
}

