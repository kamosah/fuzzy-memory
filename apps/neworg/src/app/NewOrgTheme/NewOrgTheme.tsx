import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { theme } from './constants';

/* eslint-disable-next-line */
export interface NewOrgThemeProps {
  children: React.ReactNode;
}

export function NewOrgTheme({ children }: NewOrgThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider>{children}</StyledEngineProvider>
    </ThemeProvider>
  );
}

export default NewOrgTheme;
