import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ArtTrack, DashboardCustomizeOutlined, Group, Inventory2, MonitorOutlined, Notifications, Settings, ShoppingCartCheckout, VerticalAlignBottomOutlined } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import Popover from '@mui/material/Popover';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/Devices';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import { Outlet, NavLink } from 'react-router-dom';
import { useThemeContext } from '../components/ThemeContext'; // Ensure this path is correct

const navigationItems = [
  {
    text: 'Home',
    icon: <MonitorOutlined />,
    path: '/home'
  },
  {
    text: 'Dashboard',
    icon: <DashboardCustomizeOutlined />,
    path: '/products'
  },
  {
    text: 'Blog',
    icon: <VerticalAlignBottomOutlined />,
    path: '/blog'
  },
  {
    text: 'Customers',
    icon: <Group />,
    path: '/customers'
  },
  {
    text: 'Products',
    icon: <ShoppingCartCheckout />,
    path: '/orders'
  },
  {
    text: 'Reports',
    icon: <ArtTrack />,
    path: '/reports'
  },
]

const linkStyles = {
  textDecoration: 'none',
  color: '#000',
}

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SettingsPopover = ({ anchorEl, handleClose }) => {
  const { mode, toggleTheme } = useThemeContext();
  const [direction, setDirection] = React.useState('ltr');

  const open = Boolean(anchorEl);
  const id = open ? 'settings-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ padding: 2, maxWidth: 300, height: '80vh' }}>
        <Typography variant="h6">Settings</Typography>

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1">Mode</Typography>
          <ButtonGroup fullWidth>
            <Button
              variant={mode === 'light' ? 'contained' : 'outlined'}
              startIcon={<LightModeIcon />}
              onClick={() => toggleTheme('light')}
            >
              Light
            </Button>
            {/* <Button
              variant={mode === 'system' ? 'contained' : 'outlined'}
              startIcon={<DevicesIcon />}
              onClick={() => toggleTheme('system')}
            >
              System
            </Button> */}
            <Button
              variant={mode === 'dark' ? 'contained' : 'outlined'}
              startIcon={<DarkModeIcon />}
              onClick={() => toggleTheme('dark')}
            >
              Dark
            </Button>
          </ButtonGroup>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1">Direction</Typography>
          <ButtonGroup fullWidth>
            <Button
              variant={direction === 'ltr' ? 'contained' : 'outlined'}
              startIcon={<FormatTextdirectionLToRIcon />}
              onClick={() => setDirection('ltr')}
            >
              Left to right
            </Button>
            <Button
              variant={direction === 'rtl' ? 'contained' : 'outlined'}
              startIcon={<FormatTextdirectionRToLIcon />}
              onClick={() => setDirection('rtl')}
            >
              Right to left
            </Button>
          </ButtonGroup>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle1">Color</Typography>
          <Button variant="outlined" fullWidth>Edit documentation colors</Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default function MainLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const [settingsAnchorEl, setSettingsAnchorEl] = React.useState(null);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = React.useState(null);

  const handleOpenSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSettingsOpen = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
  };

  const handleNotificationsOpen = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };

  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DukaSmart
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open notifications"
            onClick={handleNotificationsOpen}
            sx={{ marginLeft: 'auto' }}
          >
            <Notifications />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open settings"
            onClick={handleSettingsOpen}
          >
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {navigationItems.map((item, index) => (
            <NavLink to={item.path} style={linkStyles} key={index}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
          <ListItemButton onClick={handleOpenSubMenu}>
            <ListItemIcon>
              <Inventory2 />
            </ListItemIcon>
            <ListItemText primary="Inventory" />
            {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to='/admin/overview' style={linkStyles}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary="Overview" />
                </ListItemButton>
              </NavLink>
              <NavLink to='/admin/other' style={linkStyles}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary="Other" />
                </ListItemButton>
              </NavLink>
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
      <SettingsPopover anchorEl={settingsAnchorEl} handleClose={handleSettingsClose} />
    </Box>
  );
}
