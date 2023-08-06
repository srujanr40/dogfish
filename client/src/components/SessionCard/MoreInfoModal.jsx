import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const MoreInfoModal = (props) => {
  const { open, onClose, session } = props;
  const youtubeOpts = {
    height: '250',
    width: '100%',
  };

  const formattedDate = new Date(session.dateTime).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', marginTop: '3rem', fontSize: '2.1rem', textAlign: 'center', flex: 1 }}>
          {session.name}
        </Typography>
        <IconButton aria-label="close" onClick={onClose}>
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
      <img src={session.image} alt="Session" style={{ borderRadius: '10px', width: '100%', height: 'auto' }} />
    </Dialog>
  );
};

export default MoreInfoModal;
