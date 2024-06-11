// src/components/PhotoSlider.jsx
import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import MacImage from '../assets/images/macbook.jpg'
import KeyImage from '../assets/images/keyboard.jpg'
import DroneImage from '../assets/images/drone.jpg'

const photos = [
  { src: MacImage, caption: 'New Arrivals' },
  { src: KeyImage, caption: 'Deals of the day!' },
  { src: DroneImage, caption: 'Free Delivery ' },
];

const PhotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100',
        height: '300px',
        margin: 'auto',
        borderRadius: '12px', // Add border radius to the main box
        overflow: 'hidden', // Ensure children respect the border radius
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Optional: add a shadow for better appearance
      }}
    >
      {photos.map((photo, index) => (
        <Box
          key={index}
          sx={{
            display: currentIndex === index ? 'block' : 'none',
            width: '100%',
            height: '300px', // Set height to 100px
            position: 'relative',
          }}
        >
          <img
            src={photo.src}
            alt={`Slide ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px', // Add border radius to images
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '8px',
              left: '16px',
              color: '#f2f2f2',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '8px 12px',
              borderRadius: '4px',
            }}
          >
            <Typography variant="body1">{photo.caption}</Typography>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '8px',
              right: '16px',
              color: '#f2f2f2',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '4px 8px',
              borderRadius: '4px',
            }}
          >
            <Typography variant="body2">{`${index + 1} / ${photos.length}`}</Typography>
          </Box>
        </Box>
      ))}

      <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          color: 'white',
          backgroundColor: 'rgba(0,0,0,0.5)',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
        }}
      >
        <ArrowForwardIos />
      </IconButton>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        {photos.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            style={{
              height: '15px',
              width: '15px',
              margin: '0 2px',
              backgroundColor: currentIndex === index ? '#717171' : '#bbb',
              borderRadius: '50%',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PhotoSlider;
