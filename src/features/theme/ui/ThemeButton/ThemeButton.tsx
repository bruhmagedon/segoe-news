import { Theme } from '@/app/providers/ThemeProvider/ThemeContext';
import { useTheme } from '@/app/providers/ThemeProvider/useTheme';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className='ease transition-all duration-500 ease-out' onClick={toggleTheme}>
      {theme === Theme.LIGHT ? <Sun width={35} height={35} /> : <Moon width={35} height={35} />}
    </div>
  );
};

export default ThemeButton;
