import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { updateSessionAsync } from '../../redux/session/sessionThunks';

export default function SessionCard(props) {
  const dispatch = useDispatch();

  const profile = useSelector((store) => store.profileReducer).profile;
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const handleOpenMoreInfo = () => {
    setIsMoreInfoOpen(true);
    props.onMoreInfo(props.session.groupId);
  };

  function joinButton() {
    let session = props.session;
    let updatedMembers = [...session.members, profile.name];
    let updatedSession = { ...session, members: updatedMembers };
    dispatch(updateSessionAsync(updatedSession));
  }

  const leaveButton = () => {
    let session = props.session;
    let updatedMembers = session.members.filter(member => member !== profile.name);
    let updatedSession = { ...session, members: updatedMembers };
    dispatch(updateSessionAsync(updatedSession));
  };

  const isMember = props.session.members.includes(profile.name);

  return (
    <Card sx={{ maxWidth: '250px', minWidth: '250px', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.session.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {props.session.description}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: 'auto' }}>
        {!isMember && (
          <Link to={`/join?groupId=${props.session.groupId}`} style={{ marginRight: '10px' }}>
            <Button
              sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none' }}
              size="small" onClick={joinButton}
            >
              Join
            </Button>
          </Link>
        )}
        {isMember && (
          <Button sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none' }} size="small" onClick={leaveButton}>
            Leave
          </Button>
        )}
        <Button
          onClick={handleOpenMoreInfo}
          sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none' }}
          size="small"
        >
          More info
        </Button>
      </CardActions>
    </Card>
  );
}
