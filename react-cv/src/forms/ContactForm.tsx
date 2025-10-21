import { useForm } from "react-hook-form";
import { Box, Button, TextField, Alert } from "@mui/material";
type FormData = { name:string; email:string; message:string };

export default function ContactForm(){
  const { register, handleSubmit, formState:{ errors, isSubmitSuccessful }, reset } = useForm<FormData>();
  const onSubmit = (data:FormData) => { console.log("Submit", data); reset(); };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display:"grid", gap:2 }}>
      {isSubmitSuccessful && <Alert severity="success">¡Mensaje enviado!</Alert>}
      <TextField label="Nombre" {...register("name",{ required:"Obligatorio", minLength:{ value:2, message:"Mínimo 2" }})} error={!!errors.name} helperText={errors.name?.message}/>
      <TextField label="Email" type="email" {...register("email",{ required:"Obligatorio", pattern:{ value:/^\S+@\S+$/i, message:"Email inválido" }})} error={!!errors.email} helperText={errors.email?.message}/>
      <TextField label="Mensaje" multiline minRows={4} {...register("message",{ required:"Obligatorio", minLength:{ value:10, message:"Mínimo 10" }})} error={!!errors.message} helperText={errors.message?.message}/>
      <Button type="submit" variant="contained">Enviar</Button>
    </Box>
  );
}
