import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { RoutesApp } from '../../../models';

export const Navbar = () => {
  const path = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rick & Morty WiKi
        </Typography>
        <Link
          sx={{
            textDecoration: path.pathname === '/' ? 'underline' : 'none',
            mr: 2,
          }}
          component={RouterLink}
          to={RoutesApp.CHARACTERS}
          color="inherit"
        >
          Characters
        </Link>
        <Link
          component={RouterLink}
          to={RoutesApp.EPISODES}
          color="inherit"
          sx={{
            textDecoration:
              path.pathname === RoutesApp.EPISODES ? 'underline' : 'none',
            mr: 2,
          }}
        >
          Episode
        </Link>
        <Link
          component={RouterLink}
          to={RoutesApp.LOCATIONS}
          color="inherit"
          sx={{
            textDecoration:
              path.pathname === RoutesApp.LOCATIONS ? 'underline' : 'none',
            mr: 2,
          }}
        >
          Location
        </Link>
      </Toolbar>
    </AppBar>
  );
};
