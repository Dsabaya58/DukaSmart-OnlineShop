import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Typography } from '@mui/material';
import { Add as AddIcon, Dashboard as DashboardIcon } from '@mui/icons-material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem>
          <Avatar alt="Jamie Chastain" src="/static/images/avatar/1.jpg" />
          <Typography variant="h6" noWrap component="div">
            Jamie Chastain
          </Typography>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Product" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
