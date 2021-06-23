import { createMuiTheme } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
      contrastText: "#f1f1f1",
    },
    secondary: {
      main: green[500],
      contrastText: "#f1f1f1",
    },
  },
  typography: {
    h5: {
      fontSize: "1.4rem",
    },
    h4: {
      fontSize: "1.7rem",
    },
    h3: {
      fontSize: "2.4rem",
    },
    h2: {
      fontSize: "3.2rem",
    },
    h1: {
      fontSize: "3.8rem",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
        borderRadius: "6px",
        padding: [[6, 30]],
        fontWeight: 500,
      },
    },
    MuiCssBaseline: {
      "@global": {
        "*": {
          "scrollbar-width": "thin",
        },
        "*::-webkit-scrollbar": {
          width: "3px",
          height: "3px",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
    },
    MuiInput: {
      root: {
        paddingTop: 8,
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiTextField: {
      InputLabelProps: {
        shrink: true,
      },
    },
  },
});

export default theme;
