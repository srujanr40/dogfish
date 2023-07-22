import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from '@mui/material';

const Featured = () => {
  const featuredSessions = useSelector((store) => store.sessionReducer).featuredSessions;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    ltr: true,
  };

  return (
    <Card
      sx={{
        backgroundColor: '#1C1E25',
        maxWidth: '100%',
        margin: '0 auto',
        borderRadius: '10px'
      }}
    >
      <Slider {...settings}>
        {featuredSessions.map((session, index) => (
          <div key={index}>
            <CardMedia component="img" height="300" image={session.image} alt={`Slide ${index + 1}`} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                {session.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                {session.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{ color: 'white', backgroundColor: '#DD4D2B', textTransform: 'none', '&:hover': { backgroundColor: '#FF6E6E' } }} size="small">
                Join
              </Button>
              <Button
                sx={{ color: 'black', backgroundColor: '#4D96B6', textTransform: 'none', '&:hover': { backgroundColor: '#FFD43D' } }}
                size="small"
              >                More Info
              </Button>
            </CardActions>
          </div>
        ))}
      </Slider>
    </Card>
  );
};

export default Featured;
