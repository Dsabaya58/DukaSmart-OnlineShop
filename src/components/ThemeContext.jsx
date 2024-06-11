// src/ThemeContext.js
import React, { createContext, useState, useMemo, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode,
      },
    }),
    [mode]
  );

  const toggleTheme = (newMode) => {
    setMode(newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
