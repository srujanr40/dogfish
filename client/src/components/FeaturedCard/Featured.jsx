import React, { useState }from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card } from '@mui/material';
import SessionCard from '../SessionCard/SessionCard';
import SessionMoreInfoPopup from '../SessionMoreInfo/SessionMoreInfoPopup';

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
    <>
    <Card
      sx={{
        backgroundColor: '#1C1E25',
        maxWidth: '100%',
        margin: '0 auto',
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
    </Card>
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
