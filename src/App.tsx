import { ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import { useCustomTheme } from './lib';
import { Hero, Navbar, Gallery, Contacts, Parallax } from './components';

export const App = () => {
  const { theme } = useCustomTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Parallax />
      <Box sx={{ backgroundColor: theme.palette.background.paper }}>
        <Hero />
        <Gallery />
        <Contacts />
      </Box>
    </ThemeProvider>
  );
};
