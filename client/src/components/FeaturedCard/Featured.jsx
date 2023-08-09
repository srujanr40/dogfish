import React, { useState }from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '@mui/material';
import SessionCard from '../SessionCard/SessionCard';
import SessionMoreInfoPopup from '../SessionMoreInfo/SessionMoreInfoPopup';
import { Box } from '@mui/material';
import './Featured.css'

import { Divider } from '@mui/material';

const Featured = () => {
  const featuredSessions = useSelector((store) => store.sessionReducer).featuredSessions;

  const [isSessionMoreInfoModalOpen, setIsSessionMoreInfoModalOpen] =
  useState(false);
const [selectedSessionId, setSelectedItemId] = useState(null);

const openSessionMoreInfoModal = (itemId) => {
  setSelectedItemId(itemId);
  setIsSessionMoreInfoModalOpen(true);
};

const closeSessionMoreInfoModal = () => {
  setSelectedItemId(null);
  setIsSessionMoreInfoModalOpen(false);
};

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    ltr: true,
  };

  return (
    <>
    <Box
      sx={{
        backgroundColor: 'whitesmoke',
        width: '100%',
        margin: '0 auto',
        mt: 1,
        borderRadius: '10px',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.005')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'none')}
    >
      <Slider {...settings}>
        {featuredSessions.map((session, index) => (
          <SessionCard key={index} session={session} featured={true} onMoreInfo={openSessionMoreInfoModal}/>
        ))}
      </Slider>
    </Box>
    {isSessionMoreInfoModalOpen && (
        <div>
          <SessionMoreInfoPopup
            sessionID={selectedSessionId}
            closeModal={closeSessionMoreInfoModal}
            open={isSessionMoreInfoModalOpen}
          />
        </div>
      )}
    </>
  );
};

export default Featured;
