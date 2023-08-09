import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import { useDispatch, useSelector } from 'react-redux';
import { updateSessionAsync } from '../../redux/session/sessionThunks';
import './SessionCard.css';
import DateRangeIcon from '@mui/icons-material/DateRange';

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
    let updatedMembers = [...session.members, profile];
    let updatedSession = { ...session, members: updatedMembers };
    dispatch(updateSessionAsync(updatedSession));
  }

  const leaveButton = () => {
    let session = props.session;
    let updatedMembers = session.members.filter((member) => member.email !== profile.email);
    let updatedSession = { ...session, members: updatedMembers };
    dispatch(updateSessionAsync(updatedSession));
  }

  const isMember = props.session.members.some(member => member && member.email === profile.email)

  const isFeatured = props.featured;
  const formattedDate = new Date(props.session.dateTime).toLocaleDateString('en-US', {
    // weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    isMember ? (
      <Link to={`/join?groupId=${props.session.groupId}`} className="session-card-link">
        <Card
          className={`session-card ${isMember ? 'member' : ''}`}
          sx={{
            maxWidth: `${isFeatured ? '100%' : "250px"}`,
            minWidth: '250px',
            minHeight: `${isFeatured ? "415px" : "315px"}`,
            maxHeight: '315px',
            backgroundColor: '#1C1E25',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '10px',
            transition: 'transform 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = `${isFeatured? '' :'scale(1.02)' }` )}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        >
          <CardMedia
            component="img"
            height={`${isFeatured ? "250" : "150"}`}
            image={props.session.image}
            alt="image"
          />
          <CardContent sx={{ color: 'white' }}>
            <div className="card-title">
              <Typography gutterBottom variant="h5" component="div">
                {props.session.name}
              </Typography>
            </div>
            <div className="card-description">
              <Typography gutterBottom variant="p" component="div">
                {props.session.description}
              </Typography>
            </div>
          </CardContent>
          <CardActions style={{ marginTop: 'auto', justifyContent: 'space-between' }}>
            {!isMember && (
              <Link to={`/join?groupId=${props.session.groupId}`} style={{ marginRight: '10px' }}>
                <Button
                  sx={{ color: 'white', backgroundColor: '#DD4D2B', textTransform: 'none', '&:hover': { backgroundColor: '#FF6E6E' } }}
                  size="small" onClick={joinButton}
                >
                  Join
                </Button>
              </Link>
            )}
            {isMember && (
              <Button sx={{ color: 'white', backgroundColor: '#DD4D2B', textTransform: 'none', '&:hover': { backgroundColor: '#FF6E6E' } }} size="small"       onClick={(event) => {
                event.stopPropagation();
                event.preventDefault();
                leaveButton();
              }}>
                Leave
              </Button>
            )}
            <Button 
            startIcon={<DateRangeIcon />}
             size="small" 
             sx={{ color: 'black', backgroundColor: '#4D96B6', textTransform: 'none', '&:hover': { backgroundColor: '#4D96B6' } }}
             >
                {formattedDate}
              </Button>
          </CardActions>
        </Card>
      </Link>
    ) : (
      <Card
        className={`session-card ${isMember ? 'member' : ''}`}
        sx={{
          minWidth: '250px',
          maxWidth: `${isFeatured ? '100%' : "250px"}`,
          minHeight: `${isFeatured ? "415px" : "315px"}`,
          maxHeight: '315px',
          backgroundColor: '#1C1E25',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '10px',
          transition: 'transform 0.2s',
          cursor: 'pointer'
        }}

        onMouseEnter={(e) => (e.currentTarget.style.transform = `${isFeatured? '' :'scale(1.02)' }` )}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
        onClick={handleOpenMoreInfo}
      >
        <CardMedia
          component="img"
          height={`${isFeatured ? "250" : "150"}`}
          image={props.session.image}
          alt="image"
        />
        <CardContent sx={{ color: 'white' }}>
          <div className="card-title">
            <Typography gutterBottom variant="h5" component="div">
              {props.session.name}
            </Typography>
          </div>
          <div className="card-description">
            <Typography gutterBottom variant="p" component="div">
              {props.session.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions style={{ marginTop: 'auto', justifyContent: 'space-between' }}>
          {!isMember && (
            <Link to={`/join?groupId=${props.session.groupId}`} style={{ marginRight: '10px' }}>
              <Button
                sx={{ color: 'white', backgroundColor: '#DD4D2B', textTransform: 'none', '&:hover': { backgroundColor: '#FF6E6E' } }}
                size="small" onClick={joinButton}
              >
                Join
              </Button>
            </Link>
          )}
          {isMember && (
            <Button sx={{color: 'white', backgroundColor: '#DD4D2B', textTransform: 'none', '&:hover': { backgroundColor: '#FF6E6E' } }} size="small"       onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              leaveButton();
            }}>
              Leave
            </Button>
          )}
          <Button 
          startIcon={<DateRangeIcon />}
           size="small" 
           sx={{color: 'black', backgroundColor: '#4D96B6', textTransform: 'none', '&:hover': { backgroundColor: '#4D96B6' } }}
           >
              {formattedDate}
            </Button>
        </CardActions>
      </Card>
    )
  );
}
