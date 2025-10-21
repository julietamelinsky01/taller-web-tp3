import { useForm } from "react-hook-form";
import { Box, Button, TextField, Snackbar, Alert } from "@mui/material";
import { useState } from "react";

type FormData = { name:string; email:string; message:string };

export default function ContactForm(){
  const { register, handleSubmit, formState:{ errors }, reset } = useForm<FormData>();
  const [ok, setOk] = useState(false);

  const onSubmit = (data:FormData) => {
    console.log("Submit", data);
    setOk(true);
    reset();
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display:"grid", gap:2 }}>
        <TextField label="Nombre"
          {...register("name", { required:"Campo obligatorio", minLength:{ value:2, message:"Mínimo 2 caracteres" } })}
          error={!!errors.name} helperText={errors.name?.message} />

        <TextField label="Email" type="email"
          {...register("email", { required:"Campo obligatorio", pattern:{ value:/^\S+@\S+$/i, message:"Email inválido" } })}
          error={!!errors.email} helperText={errors.email?.message} />

        <TextField label="Mensaje" multiline minRows={4}
          {...register("message", { required:"Campo obligatorio", minLength:{ value:10, message:"Mínimo 10 caracteres" } })}
          error={!!errors.message} helperText={errors.message?.message} />

        <Button type="submit" variant="contained" size="large">Enviar</Button>
      </Box>

      <Snackbar open={ok} autoHideDuration={2500} onClose={()=>setOk(false)} anchorOrigin={{ vertical:"bottom", horizontal:"center" }}>
        <Alert severity="success" variant="filled" onClose={()=>setOk(false)}>¡Mensaje enviado!</Alert>
      </Snackbar>
    </>
  );
}
