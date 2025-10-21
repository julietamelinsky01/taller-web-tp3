import { Box, Button, Typography, Paper, Stack } from "@mui/material";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <Paper elevation={3} sx={{ p: 4, width: "min(520px, 92vw)", borderRadius: 3 }}>
        <Stack spacing={3}>
          <Typography variant="h4">Login</Typography>
          <Button
            onClick={() => { login(); navigate("/projects", { replace: true }); }}
            variant="contained"
            size="large"
          >
            Iniciar sesión
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
