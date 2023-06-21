import { createTheme } from "@mui/material";
import { cyan, grey, indigo } from "@mui/material/colors";

export const createAppTheme = (theme?: "light" | "dark") => {
  const muiTheme = createTheme({
    palette: {
      mode: theme,
    },
    components: {
      MuiButton: {
        defaultProps: {
          color: "primary",
          variant: "contained",
        },
      },
      MuiTextField: {
        defaultProps: {
          margin: "normal",
          variant: "outlined",
          size: "small",
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: "outlined",
          style: {},
          SelectDisplayProps: {
            style: {
              paddingTop: 10,
              paddingBottom: 10,
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          formControl: {
            marginRight: "1rem",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&$focused": {
              color: theme === "light" ? indigo[500] : grey[50],
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: theme === "light" ? "" : cyan[200],
          },
        },
      },
    },
  });

  return muiTheme;
};
