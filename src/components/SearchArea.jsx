// src/components/SearchArea.js
import React from 'react';
import TextField from '@mui/material/TextField';

const SearchArea = ({ handleSearchChange }) => {
  return (
    <TextField
      fullWidth
      label="Search Products"
      variant="outlined"
      onChange={handleSearchChange}
      sx={{ width: '30%', mx: '20px' }} // Adjust the width and centering here
    />
  );
};

export default SearchArea;
