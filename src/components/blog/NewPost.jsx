// src/components/NewPostForm.js
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const NewPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, description, image });
    setTitle('');
    setDescription('');
    setImage('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Add New Post
      </Typography>
      <TextField
        fullWidth
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        label="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" type="submit">
        Add Post
      </Button>
    </Box>
  );
};

export default NewPostForm;
