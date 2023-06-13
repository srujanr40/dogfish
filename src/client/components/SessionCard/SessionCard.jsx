import * as React from 'react';
import  { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

// props should contain the session and a onMoreInfo callback function to call when More Info is clicked.
export default function SessionCard(props) {
  const [isMoreInfoOpen, setIsMoreInfoOpen] = useState(false);

  const handleOpenMoreInfo = () => {
      setIsMoreInfoOpen(true);
      props.onMoreInfo(1);
      // props.onMoreInfo(props.session.id); uncomment when session cards are properly set up
  };

    return (
        <Card sx={{maxWidth: '250px', minWidth: '250px', backgroundColor: 'white'}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography gutterBottom variant="p" component="div">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/join?groupId=${props.groupId}`} style={{marginRight: '10px'}}>
                    <Button sx={{color: "white", backgroundColor: "lightsalmon", textTransform: "none"}} size="small">Join</Button>
                </Link>
                <Button onClick={handleOpenMoreInfo} sx={{color: "white", backgroundColor: "lightsalmon", textTransform: "none"}} size="small">More
                    info</Button>
            </CardActions>
        </Card>
    );
}