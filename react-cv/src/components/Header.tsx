import { AppBar, Toolbar, Typography, Button, Box, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Header(){
  const { isAuthenticated, logout } = useAuth();

  const linkStyle = ({ isActive }: {isActive:boolean}) => ({
    color: "inherit",
    textDecoration: "none",
    opacity: isActive ? 1 : 0.8,
    fontWeight: isActive ? 700 : 500,
  });

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar sx={{ gap: 2, px: 0 }}>
          <Typography variant="h6" sx={{ flex: 1 }}>
            CV React
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <NavLink to="/" style={linkStyle}>HOME</NavLink>
            <NavLink to="/projects" style={linkStyle}>PROJECTS</NavLink>
            <NavLink to="/artworks" style={linkStyle}>ARTWORKS</NavLink>
            <NavLink to="/contact" style={linkStyle}>CONTACT</NavLink>
          </Box>
          {!isAuthenticated ? (
            <Button variant="outlined" color="secondary" component={NavLink} to="/login">LOGIN</Button>
          ) : (
            <Button variant="outlined" color="secondary" onClick={logout}>LOGOUT</Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
