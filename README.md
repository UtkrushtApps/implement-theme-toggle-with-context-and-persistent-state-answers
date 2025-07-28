1. **Create a ThemeContext and Provider**:
   - In `src/theme/ThemeContext.js`, define a `ThemeContext` with React's `createContext`.
   - Create a `ThemeProvider` that:
     - Determines initial theme by checking `localStorage` for a saved theme; if absent, uses the system's color scheme (`dark`/`light`).
     - Stores the active theme in state.
     - On theme change, updates both `localStorage` and the `body` class to either `theme-light` or `theme-dark`.
     - Observes system theme changes if the user hasn't set a preference.
     - Exposes the `theme` and a `toggleTheme` function via context.

2. **Make a Custom Hook for Theme Context Usage**:
   - In `src/theme/useTheme.js`, export a default hook that returns `useContext(ThemeContext)`.

3. **Build a Theme Toggle Button**:
   - In `src/theme/ThemeToggleButton.js`, make a `ThemeToggleButton` component that calls `toggleTheme` from context and displays the current mode.

4. **Integrate ThemeProvider in the App**:
   - In `src/App.js`, wrap your main content/components in `ThemeProvider`. Use the toggle button in your interface. (A sample dashboard is provided.)

5. **Set Up the App Entry and Styles**:
   - In `src/index.js`, import the App and your CSS. Render the app.
   - In `src/index.css`, define styles for `.theme-light` and `.theme-dark` on the `body`, so the theme applies globally. You can include button styles as well.

6. **Test the behavior**:
   - Theme reflects immediately on toggle (UI and body class update).
   - Reload persists preferred theme.
   - The first visit respects system preference.
   - All components see theme via context, not props.
