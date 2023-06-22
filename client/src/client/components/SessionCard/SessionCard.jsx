import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function SessionCard(props) {
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const handleOpenMoreInfo = () => {
    setIsMoreInfoOpen(true);
    props.onMoreInfo(props.groupId);
  };

  return (
    <Card sx={{ maxWidth: '250px', minWidth: '250px', backgroundColor: 'white', display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: 'auto' }}>
        {!props.joined && (
          <Link to={`/join?groupId=${props.groupId}`} style={{ marginRight: '10px' }}>
            <Button
              sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none' }}
              size="small"
            >
              Join
            </Button>
          </Link>
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
