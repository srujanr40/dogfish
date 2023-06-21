import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';

const Featured = () => {
  const featuredSessions = useSelector((state) => state.featuredSession);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    ltr: true,
  };

  return (
    <Card
      sx={{
        backgroundColor: 'black',
        maxWidth: '100%',
        margin: '0 auto',
      }}
    >
      <Slider {...settings}>
        {featuredSessions.map((session, index) => (
          <div key={index}>
            <CardMedia component="img" height="400" image={session.image} alt={`Slide ${index + 1}`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                {session.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                {session.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none' }} size="small">
                Join
              </Button>
              <Button sx={{ color: 'white', backgroundColor: 'lightsalmon', textTransform: 'none' }} size="small">
                More Info
              </Button>
            </CardActions>
          </div>
        ))}
      </Slider>
    </Card>
  );
};

export default Featured;
