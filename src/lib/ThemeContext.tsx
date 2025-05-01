import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { createTheme, Theme } from '@mui/material/styles';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderCustom = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem('isDarkMode') === 'true';
  const [isDarkMode, setIsDarkMode] = useState(savedTheme || false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundColor: isDarkMode ? '#000' : '#fff',
                color: isDarkMode ? '#fff' : '#000',
              },
            },
          },
        },
      }),
    [isDarkMode],
  );

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('isDarkMode', String(newValue));
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useCustomTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useCustomTheme must be used within ThemeProviderCustom');
  return context;
};
