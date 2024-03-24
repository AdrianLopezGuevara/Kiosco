'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f3f4f6',
            paper: '#fff',
        },
        primary: {
            main: '#4b6e4e',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f50057',
            contrastText: '#fff',
        },
        error: {
            main: '#f44336',
            contrastText: '#fff',
        },
        warning: {
            main: '#ff9800',
            contrastText: '#fff',
        },
        info: {
            main: '#2196f3',
            contrastText: '#fff',
        },
        success: {
            main: '#4caf50',
            contrastText: '#fff',
        },
        
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;