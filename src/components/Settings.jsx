import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material'; // Import ButtonGroup
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DevicesIcon from '@mui/icons-material/Devices';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import { useThemeContext } from './ThemeContext';

const Settings = () => {
  const { mode, toggleTheme } = useThemeContext();
  const [direction, setDirection] = useState('ltr');

  return (
    <Box sx={{ padding: 2, maxWidth: 300, height: '80vh', border: '1px solid #ccc', borderRadius: 2, backgroundColor: 'background.default', color: 'text.primary' }}>
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
  );
};

export default Settings;
