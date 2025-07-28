// src/theme/ThemeContext.js
import React, { createContext, useEffect, useState, useCallback } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const THEME_KEY = 'dashboard-theme';

function getSystemTheme() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

function getInitialTheme() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    } else {
      return getSystemTheme();
    }
  }
  return 'light';
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  // Sync theme to localStorage and to body class
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.body.classList.remove('theme-light', 'theme-dark');
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  // Listen to system theme changes if no saved preference
  useEffect(() => {
    if (localStorage.getItem(THEME_KEY)) return;
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const changeHandler = () => {
      setTheme(matcher.matches ? 'dark' : 'light');
    };
    matcher.addEventListener('change', changeHandler);
    return () => matcher.removeEventListener('change', changeHandler);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = React.useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
