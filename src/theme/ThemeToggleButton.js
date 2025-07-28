// src/theme/ThemeToggleButton.js
import React from 'react';
import useTheme from './useTheme';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        cursor: 'pointer',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        background: theme === 'dark' ? '#333' : '#f0f0f0',
        color: theme === 'dark' ? '#f0f0f0' : '#333',
      }}
    >
      {theme === 'dark' ? '🌙 Dark Mode' : '🌞 Light Mode'}
    </button>
  );
}
