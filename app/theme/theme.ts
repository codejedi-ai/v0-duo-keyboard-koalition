'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFA500', // Orange
      light: '#FFB732',
      dark: '#CC8400',
      contrastText: '#000000',
    },
    secondary: {
      main: '#4A4A4A', // Dark Gray
      light: '#6B6B6B',
      dark: '#2A2A2A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#000000',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#9CA3AF',
    },
  },
  typography: {
    fontFamily: 'inherit',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      background: 'linear-gradient(90deg, #FFFFFF 0%, #E5E7EB 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          padding: '12px 24px',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 4px 12px rgba(255, 165, 0, 0.3)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom right, #1F2937, #111827, #1F2937)',
          border: '1px solid rgba(255, 165, 0, 0.2)',
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
          '&:hover': {
            borderColor: 'rgba(255, 165, 0, 0.4)',
            boxShadow: '0 8px 24px rgba(255, 165, 0, 0.1)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom right, #1F2937, #111827, #1F2937)',
          border: '1px solid rgba(255, 165, 0, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover fieldset': {
              borderColor: '#FFA500',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFA500',
            },
          },
        },
      },
    },
  },
});

export default theme;

