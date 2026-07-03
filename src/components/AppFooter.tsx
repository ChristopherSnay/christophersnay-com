import { AppBar, Toolbar, Typography } from "@mui/material";

export default function AppFooter() {
  return (
    <AppBar position="relative" elevation={1} className="position-relative">
      <div className="container">
        <Toolbar className="d-flex flex-column justify-content-center">
          <Typography variant="body2" color="textDisabled">
            christophersnay.com © {new Date().getFullYear()}
          </Typography>
        </Toolbar>
      </div>
    </AppBar>
  );
}
