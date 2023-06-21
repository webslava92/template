import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { createAppTheme } from "./theme";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { themeContext } from "./providers/theme-provider";

const AppContainer = () => {
  const [theme, setTheme] = useState<"light" | "dark">(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const colorTheme = useMemo(
    () => ({
      toggleThemeMode: () => {
        setTheme((prevTheme) => {
          const newTheme = prevTheme === "light" ? "dark" : "light";

          localStorage.setItem("theme", newTheme);

          return newTheme;
        });
      },
    }),
    []
  );

  const muiTheme = createAppTheme(theme);
  useEffect(() => {
    Object.assign(window, { theme: muiTheme });
  }, [muiTheme]);

  return (
    <themeContext.Provider value={colorTheme}>
      <ThemeProvider theme={muiTheme}>
        <App />
      </ThemeProvider>
    </themeContext.Provider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
