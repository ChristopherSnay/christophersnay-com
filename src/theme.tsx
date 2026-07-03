import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: "12px !important",
          paddingRight: "12px !important",
        },
      },
    },
  },
  palette: {
    mode: "dark",
  },
});
