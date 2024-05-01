import "./App.css";

import WelcomePanel from "./components/WelcomePanel";

import ThemeProvider, { useTheme } from "./components/context/ThemeContext";
import UserProvider from "./components/context/UserContext";

export default function MyApp() {
  return (
    <ThemeProvider>
      <UserProvider>

      <WelcomePanel />
      <ToggleTheme />

      </UserProvider>
    </ThemeProvider>
  );
}

function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <label>
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={(e) => {
          setTheme(e.target.checked ? "dark" : "light");
        }}
      />
      Use dark mode
    </label>
  );
}
