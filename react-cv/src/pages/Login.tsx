import { Box, Button, Typography } from "@mui/material";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
  const { login } = useAuth();
  const navigate = useNavigate();
  return (
    <Box className="container">
      <Typography variant="h4" gutterBottom>Login</Typography>
      <Button variant="contained" onClick={()=>{ login(); navigate("/projects",{ replace:true }); }}>
        Iniciar sesión
      </Button>
    </Box>
  );
}
