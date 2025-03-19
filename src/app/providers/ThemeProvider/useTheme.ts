import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    setTheme?.(newTheme);
    localStorage.setItem('DARK_THEME', newTheme);
  };

  return { theme, toggleTheme };
};
