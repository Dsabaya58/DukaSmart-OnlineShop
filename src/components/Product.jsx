// src/components/Product.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Product = ({ product, addToCart }) => {
  // Custom styles for the Card component
  const cardStyle = {
    backgroundColor: '#e0f2f1', // Set the background color here
    color: 'black', // Optionally, set the text color for better readability
    minWidth: '250px', // Minimum width for the card
    minHeight: '300px', // Minimum height for the card
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };

  return (
    <Card sx={cardStyle}>
      <CardMedia
        component="img"
        height="150px"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {product.price}
        </Typography>
      </CardContent>
      <Button variant="contained" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Card>
  );
};

export default Product;
