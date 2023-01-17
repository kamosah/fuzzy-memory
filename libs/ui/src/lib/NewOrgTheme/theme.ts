import { responsiveFontSizes, Theme, ThemeOptions } from '@mui/material';
import { createTheme } from '@mui/material';

export const newOrgThemeObject: ThemeOptions = {};

export const createdTheme: Theme = createTheme(newOrgThemeObject);

export const newOrgTheme = responsiveFontSizes(createdTheme);
