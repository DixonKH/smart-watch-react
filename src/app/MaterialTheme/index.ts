import { createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";
import shadow from "./shadow";
import typography from "./typography";
import { maxWidth } from "@mui/system";

/**
 * LIGHT THEME (DEFAULT)
 */
const light = {
  palette: {
    type: "light",
    background: {
      default: "#f4f3ec",
      paper: common.white,
    },
    primary: {
      contrastText: "#ff7739",
      main: "#000000",
    },
    secondary: {
      contrastText: "#000000",
      main: "#ff7739",
    },
    text: {
      primary: "#000000",
      secondary: "#ff7739",
      dark: common.black,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { height: "100%" },
        body: { background: "#f4f3ec", height: "100%", minHeight: "100%" },
      },
    },
  },
  shadow,
  typography,
};

// A custom theme for this app
let theme = createTheme(light);
theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1300px",
          },
        },
      },
    },
  },
});

export default theme;
