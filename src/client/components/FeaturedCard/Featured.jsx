import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Featured = () => {
  const featured = useSelector((state) => state.featuredSession);
  const images = featured.image;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    ltr: true, // Set RTL (right-to-left) mode
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
        {images.map((image, index) => (
          <div key={index}>
            <CardMedia component="img" height="400" image={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {featured.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {featured.description}
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
    </Card>
  );
};

export default Featured;
