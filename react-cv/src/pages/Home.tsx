import { Box, Typography } from "@mui/material";
export default function Home(){
  return (
    <Box className="container">
      <Typography variant="h3" gutterBottom>Hola! Soy Julieta ✨</Typography>
      <Typography className="muted">Frontend | Angular | React | C++ | Bases de Datos</Typography>
      <Typography sx={{ mt:4 }}>Última actualización: {new Date().getFullYear()}</Typography>
    </Box>
  );
}
