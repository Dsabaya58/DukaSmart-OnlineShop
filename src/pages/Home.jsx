import React from 'react';
import { Container, Box, Typography, Button, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoryIcon from '@mui/icons-material/Category';
import PhotoSlider from '../components/PhotoSlider';
import HeadImage from '../assets/images/head.jpg';
import HandImage from '../assets/images/handbag.jpg';
import JblImage from '../assets/images/jbl.jpg';
import KiatuImage from '../assets/images/kiatu.jpg';
import LukuImage from '../assets/images/luku.jpg';
import KisuImage from '../assets/images/kisu.jpg';
import ManImage from '../assets/images/manbag.jpg';
import CameraImage from '../assets/images/camera.jpg';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';


// different image URLs here
const productImages = [
  HeadImage,
  HandImage,
  ManImage,
  JblImage,
  KiatuImage,
  LukuImage,
  CameraImage,
  KisuImage,
];

function Home() {
  const bannerStyles = {
    background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
    color: '#fff',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  };

  return (
    <Box sx={{ width: '100%', padding: 0, margin: 0 }}>
      <PhotoSlider /><br /><br />
      <Box sx={bannerStyles}>
        <Typography variant="h4" component="div">
          New Year Sale Offer 2024 - 20% OFF
        </Typography>
        <Link to={'/orders'}>
          <Button variant="contained" color="secondary">
            Start Shopping
          </Button>
        </Link>
        
      </Box>

      <Divider />

      <Box 
      sx={{ 
          width: '100%', 
          padding: '16px', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent:"center", 
          alignItems: 'center' 
        }}>
        <Typography variant="h4">Our Top Categories</Typography>
        <Grid container spacing={2} justifyContent="center">
          {['Electronics', 'Books', 'Jewelry', 'Toys', 'Sports', 'Watches', 'Games', 'Fine arts', 'Software', 'Furniture'].map((category) => (
            <Grid item key={category}>
              <Button startIcon={<CategoryIcon />} variant="outlined">
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider />

      <Box sx={{ width: '100%', padding: '16px' }}>
        <Typography variant="h4">Popular Products 2024</Typography>
        <Grid container spacing={2}>
          {productImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ width: '100%' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={image}
                  alt={`product image ${index + 1}`}
                />
                <CardContent>
                  <Typography variant="h6">Product</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Brand Name
                  </Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">$24.56</Typography>
                    <Box>
                      <IconButton>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton>
                        <ShoppingCartIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
