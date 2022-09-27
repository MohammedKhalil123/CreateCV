import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Oswald",
  },
  palette: {
    primary: {
      main: "#002463",
    },
    secondary: {
      main: "#FCB730",
    },
    error: {
      main: "rgb(236, 75, 75)",
    },
  },
});

export default theme;
