import { ReactNode, useMemo, useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

const defaultTheme = (localStorage.getItem('DARK_THEME') as Theme) || Theme.LIGHT;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
