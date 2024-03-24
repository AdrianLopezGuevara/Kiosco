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
        },
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;