import { AppBar, Link, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <AppBar
      position="static"
      color="primary"
      elevation={0}
      className="position-relative bg-transparent"
    >
      <Toolbar className="d-flex justify-content-between container">
        <Link to="/" component={RouterLink} color="inherit" underline="none">
          christophersnay.com
        </Link>
      </Toolbar>
    </AppBar>
  );
}
