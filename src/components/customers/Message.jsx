import React from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, Avatar, ListItemAvatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  backgroundColor: '#f0f0f0',
  borderRadius: '10px',
  padding: '10px',
});

const StyledButton = styled(Button)({
  backgroundColor: '#64b5f6',
  color: '#212121',
  '&:hover': {
    backgroundColor: '#42a5f5',
  },
});

const Messages = () => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5" gutterBottom>Messages</Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Shawn Gracia" src="S" />
            </ListItemAvatar>
            <ListItemText
              primary="Shawn Gracia"
              secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            />
            <StyledButton variant="contained">Reply</StyledButton>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="J W" src="J" />
            </ListItemAvatar>
            <ListItemText
              primary="Joseph Fabrizio"
              secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            />
            <StyledButton variant="contained">Reply</StyledButton>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Damian" src="D" />
            </ListItemAvatar>
            <ListItemText
              primary="Damian David"
              secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            />
            <StyledButton variant="contained">Reply</StyledButton>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="Mzito" src="M" />
            </ListItemAvatar>
            <ListItemText
              primary="Mzito Davii"
              secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
            />
            <StyledButton variant="contained">Reply</StyledButton>
          </ListItem>
        </List>
      </CardContent>
    </StyledCard>
  );
};

export default Messages;
