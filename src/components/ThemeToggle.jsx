import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, getEffectiveTheme } = useTheme();

  const getIcon = () => {
    const effectiveTheme = getEffectiveTheme();
    
    if (effectiveTheme === 'light') {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      );
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 grid place-items-center bg-zinc-900/10 dark:bg-zinc-50/10 rounded-xl ring-inset ring-1 ring-zinc-900/[0.02] dark:ring-zinc-50/[0.02] backdrop-blur-2xl hover:bg-zinc-900/15 dark:hover:bg-zinc-50/15 transition-[transform,background-color] active:scale-95 text-zinc-900 dark:text-zinc-50"
      title={`Current theme: ${getEffectiveTheme()} (click to toggle)`}
    >
      {getIcon()}
    </button>
  );
};

export default ThemeToggle; 