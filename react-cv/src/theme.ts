import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#e91e63" }, // Rosa principal
    secondary: { main: "#7b1fa2" }, // Violeta de apoyo
    background: { default: "#ffffff" },
    text: { primary: "#222", secondary: "#666" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiAppBar: { styleOverrides: { root: { background: "#111" } } },
    MuiButton: { styleOverrides: { root: { textTransform: "none", borderRadius: 12 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 16 } } },
  },
});
