import { Header } from '@/widgets/header';
import { Outlet } from 'react-router-dom';
import { Theme } from '../providers/ThemeProvider/ThemeContext';
import { useTheme } from '../providers/ThemeProvider/useTheme';
import { cn } from '@/shared/utils/cn';

function BaseLayout() {
  const { theme } = useTheme();

  return (
    <div
      className={cn(theme === Theme.DARK ? 'dark' : 'light', 'dark:bg-dark-theme dark:text-white')}
    >
      <Header />
      <div className='min-h-screen p-5'>
        <Outlet />
      </div>
    </div>
  );
}

export default BaseLayout;
