// src/components/BlogPost.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

const BlogPost = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogPost;
