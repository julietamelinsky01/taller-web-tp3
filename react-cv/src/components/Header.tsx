import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Header(){
  const { isAuthenticated, logout } = useAuth();
  return (
    <AppBar position="static" sx={{ background:"#111" }}>
      <Toolbar sx={{ gap:2 }}>
        <Typography variant="h6" component={Link} to="/" sx={{ flex:1 }}>CV React</Typography>
        <Box sx={{ display:"flex", gap:2 }}>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/projects">Projects</Button>
          <Button color="inherit" component={Link} to="/artworks">Artworks</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          {!isAuthenticated
            ? <Button color="secondary" variant="outlined" component={Link} to="/login">Login</Button>
            : <Button color="secondary" variant="outlined" onClick={logout}>Logout</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
