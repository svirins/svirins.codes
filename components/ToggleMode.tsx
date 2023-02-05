'use client';

// import { useState, useEffect } from 'react';
import { useTheme } from '@wits/next-themes';
export default function ToggleMode() {
  // const [mode, setMode] = useState('dark');
  // useEffect(() => {
  //   if (document.documentElement.classList.contains('dark')) {
  //     setMode('dark');
  //   } else {
  //     setMode('light');
  //   }
  // }, []);
  // const onClick = () => {
  //   const toggle = document.documentElement.classList.toggle('dark');
  //   const theme = toggle ? 'dark' : 'light';
  //   window.localStorage.setItem('theme', theme);
  //   setMode(theme);
  // };
  const { theme, setTheme, resolvedTheme } = useTheme();
  const onClick = () => {};
  return (
    <button
      aria-label='Toggle Dark Mode'
      type='button'
      title={`Enable ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className='w-6 h-9 flex items-center justify-center'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        className='w-6 h-6 text-gray-800 dark:text-gray-200 transition-all hover:scale-110 duration-150 ease-in-out'
      >
        {theme === 'dark' || resolvedTheme === 'dark' ? (
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
          />
        ) : (
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
          />
        )}
      </svg>
    </button>
  );
}
