import { Box, Typography } from "@mui/material";
import ContactForm from "../forms/ContactForm";
export default function Contact(){
  return (
    <Box className="container">
      <Typography variant="h4" gutterBottom>Contacto</Typography>
      <ContactForm/>
    </Box>
  );
}
