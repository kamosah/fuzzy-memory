import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material';

export const themeObject: ThemeOptions = {};

const createdTheme = createTheme(themeObject);

export const theme = responsiveFontSizes(createdTheme);
