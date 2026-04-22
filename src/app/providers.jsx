import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '../context/ThemeContext';

export const AppProviders = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </HelmetProvider>
  );
};

