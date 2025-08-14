// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4f46e5",   // Indigo 600
      light: "#818cf8",
      dark: "#3730a3",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#14b8a6",   // Teal 500
      light: "#2dd4bf",
      dark: "#0d9488",
      contrastText: "#0b0f19",
    },
    info: {
      main: "#22d3ee",   // Sky/Cyan pop
    },
    success: { main: "#10b981" },
    warning: { main: "#f59e0b" },
    error: { main: "#ef4444" },
    background: {
      default: "#f7f8fb",
      paper: "#ffffff",
    },
    text: {
      primary: "#0b0f19",
      secondary: "#475569",
    },
    divider: "rgba(2,6,23,0.08)",
  },
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica Neue', Arial, sans-serif`,
    h1: { fontWeight: 800, letterSpacing: -0.5 },
    h2: { fontWeight: 800, letterSpacing: -0.5 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 700 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow:
            "0 10px 30px rgba(15, 23, 42, 0.06), 0 2px 8px rgba(15, 23, 42, 0.04)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
      variants: [
        {
          props: { variant: "gradient" },
          style: {
            background:
              "linear-gradient(90deg, #4f46e5 0%, #14b8a6 100%)",
            color: "#fff",
          },
        },
      ],
    },
  },
});

export default theme;
