// src/App.js
import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import ThemeToggleButton from './theme/ThemeToggleButton';

function DashboardContent() {
  // an example child component that consumes the context
  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Dashboard</h1>
      <ThemeToggleButton />
      <p>
        This is a dashboard. The theme applies globally and persists across reloads.
      </p>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <DashboardContent />
    </ThemeProvider>
  );
}

export default App;
