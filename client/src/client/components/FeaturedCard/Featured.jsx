import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Featured() {
  return (
    <Card sx={{backgroundColor: 'white' }}>
      <CardMedia
        component="img"
        alt="badminton image placeholder"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Badminton @ SRC
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Blah blah blah
        </Typography>
      </CardContent>
      <CardActions>
        <Button sx={{color: "white", backgroundColor: "lightsalmon", textTransform:"none"}} size="small">Join</Button>
        <Button sx={{color: "white", backgroundColor: "lightsalmon", textTransform: "none"}} size="small">More Info</Button>
      </CardActions>
    </Card>
  );
}