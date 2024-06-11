import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ color }) => ({
  marginBottom: '16px', 
  backgroundColor: color,
  color: '#212121',
}));

const StatCard = ({ title, value, percentage, color }) => {
  return (
    <StyledCard color={color}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography>Up to {percentage} From Last Year</Typography>
      </CardContent>
    </StyledCard>
  );
};

export default StatCard;
