import Divider from "@mui/material/Divider";
import React, { useState } from "react";
import SessionCard from "../SessionCard/SessionCard.jsx";
import "../styles.module.css";
import SessionMoreInfoPopup from "../SessionMoreInfo/SessionMoreInfoPopup.jsx";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box } from "@mui/material";

import './Card.css'

export default function Card(props) {
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

  if (!props.sessions) {
    return null;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 5,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
        }
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: false,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 1,
          infinite: false,

        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
        }
      }
    ]
  };

  return (
    <>
      <h3>{props.name}</h3>
      <Divider sx={{mt: -2}}/>
      {props.sessions.length === 0 ? (
        <p>No activities</p>
      ) : (
        <Box 
          sx={{
          backgroundColor: 'whitesmoke',
          width: '100%',
          margin: '0 auto',
          mt: 2,
          transition: 'transform 0.2s',
        }}>
          <Slider {...settings} >
          {props.sessions.map((element, index) => (
            <SessionCard
              key={index}
              session={element}
              onMoreInfo={openSessionMoreInfoModal}
            />
          ))}
          </Slider>
        </Box>
      )}

      {isSessionMoreInfoModalOpen && (
        <div>
          <SessionMoreInfoPopup
            open={openSessionMoreInfoModal}
            sessionID={selectedSessionId}
            closeModal={closeSessionMoreInfoModal}
          />
        </div>
      )}
    </>
  );
}
