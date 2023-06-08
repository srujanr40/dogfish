import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SessionCard(props) {
  return (
    <Card sx={{ maxWidth: '250px', minWidth: '250px', backgroundColor: 'white' }}>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.name}
        </Typography>
        <Typography gutterBottom variant="p" component="div">
            {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color: "white", backgroundColor: "lightsalmon", textTransform:"none"}} size="small">Join</Button>
        <Button sx={{color: "white", backgroundColor: "lightsalmon", textTransform:"none"}} size="small">More info</Button>
      </CardActions>
    </Card>
  );
}