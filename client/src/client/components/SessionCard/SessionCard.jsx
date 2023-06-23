import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';


export default function SessionCard(props) {
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const handleOpenMoreInfo = () => {
    setIsMoreInfoOpen(true);
    props.onMoreInfo(props.groupId);
  };

  return (
    <Card sx={{ maxWidth: '250px', minWidth: '250px', backgroundColor: '#052465', display: 'flex', flexDirection: 'column' }}>
    <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="image"
        />
      <CardContent sx={{color: 'white'}}>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: 'auto', justifyContent: 'space-between' }}>
        {props.joined? (
        <Button disabled
        sx={{color: 'white', backgroundColor: '#FDB501', textTransform: 'none' }}
        size="small"
      >
        Joined &#x2713;
      </Button> ) : (
          <Link to={`/join?groupId=${props.groupId}`} style={{ marginRight: '10px' }}>
            <Button
              sx={{ color: 'black', backgroundColor: '#FDB501', textTransform: 'none' }}
              size="small"
            >
              Join
            </Button>
          </Link>
        ) 

    }
        <Button
          onClick={handleOpenMoreInfo}
          sx={{ color: 'black', backgroundColor: '#FDB501', textTransform: 'none' }}
          size="small"
        >
          More info
        </Button>
      </CardActions>
    </Card>
  );
}
