import { createContext } from "react";

export const themeContext = createContext({
  toggleThemeMode: () => {},
});

export const { Consumer: ThemeConsumer, Provider: ThemeProvider } =
  themeContext;
