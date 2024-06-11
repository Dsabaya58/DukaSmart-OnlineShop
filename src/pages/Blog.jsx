// src/pages/BlogPage.js
import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import BlogPost from '../components/blog/BlogPost';
import NewPostForm from '../components/blog/NewPost';
import MacImage from '../assets/images/macbook.jpg'
import KeyImage from '../assets/images/keyboard.jpg'
import DroneImage from '../assets/images/drone.jpg'
import BagImage from '../assets/images/bag.jpg'
import AxeImage from '../assets/images/axe.jpg'
import NareImage from '../assets/images/nare.jpg'

const initialPosts = [
  {
    title: 'Macbook Pro',
    description: 'Description of Product 1',
    image: MacImage
  },
  {
    title: 'Oruma Keyboard',
    description: 'Description of Product 2',
    image: KeyImage
  },
  {
    title: 'Oruma Drone',
    description: 'Description of Product 3',
    image: DroneImage
  },
  {
    title: 'Derri Bag',
    description: 'Description of Product 3',
    image: BagImage
  },
  {
    title: 'Axe',
    description: 'Description of Product 3',
    image: AxeImage
  },
  {
    title: 'Nare Lighter',
    description: 'Description of Product 3',
    image: NareImage
  }
];

const Blog = () => {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Product Blog
      </Typography>
      <NewPostForm addPost={addPost} />
      <Typography variant="h3" component="h1" gutterBottom>
        New Products' Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <BlogPost title={post.title} description={post.description} image={post.image} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog;
