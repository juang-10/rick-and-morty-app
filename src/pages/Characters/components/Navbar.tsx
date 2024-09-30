import { AppBar, Link, Toolbar, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"
import { RoutesApp } from "../../../models"

export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Rick & Morty WiKi
        </Typography>
        <Link component={RouterLink} to={RoutesApp.CHARACTERS} color="inherit" sx={{ mr: 2 }}>Characters</Link>
        <Link component={RouterLink} to={RoutesApp.EPISODES} color="inherit" sx={{ mr: 2 }}>Episode</Link>
        <Link component={RouterLink} to={RoutesApp.LOCATIONS} color="inherit" sx={{ mr: 2 }}>Location</Link>
      </Toolbar>
    </AppBar>
  )
}