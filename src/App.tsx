import { Paper } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';
import AppFooter from './components/AppFooter';

function App() {
  const location = useLocation();
  const mainClassName =
    location.pathname == '/'
      ? 'd-flex flex-column flex-grow-1 w-100'
      : 'container d-flex flex-column flex-grow-1 w-100 mt-3';

  return (
    <>
      {/* <AppHeader /> */}
      <Paper component="main" className={mainClassName} elevation={0}>
        <Outlet />
      </Paper>
      <AppFooter />
    </>
  );
}

export default App;
