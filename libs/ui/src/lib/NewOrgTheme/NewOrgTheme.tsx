import { ThemeProvider } from '@mui/material';
import { newOrgTheme } from './theme';

export interface NewOrgThemeProps {
  children: React.ReactNode;
}

export function NewOrgTheme({ children }: NewOrgThemeProps) {
  return <ThemeProvider theme={newOrgTheme}>{children}</ThemeProvider>;
}

export default NewOrgTheme;
