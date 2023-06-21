import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import React, { useContext } from "react";
import { themeContext } from "../providers/theme-provider";

export const ThemeSelector = () => {
  const theme = useTheme();
  const themeMode = useContext(themeContext);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
      height="100%"
    >
      <IconButton onClick={themeMode.toggleThemeMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};
