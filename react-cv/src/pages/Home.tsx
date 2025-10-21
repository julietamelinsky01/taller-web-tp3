import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  // 👉 Cambiá esta ruta si subís tu foto a /src/assets
  const photo = "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=800&auto=format&fit=crop";
  const fallback = "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d?q=80&w=800&auto=format&fit=crop";

  return (
    <Box sx={{ bgcolor: "background.default" }}>
      {/* HERO */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background:
            "radial-gradient(1200px 600px at -10% -10%, #ffd1e1 0%, transparent 60%), radial-gradient(800px 400px at 110% -10%, #f8bbd0 0%, transparent 60%), linear-gradient(180deg, #fff 0%, #fff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    lineHeight: 1.05,
                    letterSpacing: "-0.5px",
                    background:
                      "linear-gradient(90deg, #e91e63 0%, #f06292 45%, #ff80ab 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hola! Soy Julieta ✨
                </Typography>

                <Typography variant="h6" color="text.secondary">
                  Frontend • Angular • React • C++ • Bases de Datos
                </Typography>

                <Stack direction="row" spacing={1} sx={{ pt: 1, flexWrap: "wrap", gap: 1 }}>
                  {["React", "Angular", "TypeScript", "Material UI", "Node", "SQL"].map((s) => (
                    <Chip key={s} label={s} color="primary" variant="outlined" />
                  ))}
                </Stack>

                <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                  <Button
                    component={RouterLink}
                    to="/projects"
                    variant="contained"
                    size="large"
                    sx={{ px: 3 }}
                  >
                    Ver proyectos
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    sx={{ px: 3 }}
                  >
                    Contacto
                  </Button>
                </Stack>

                <Typography variant="body2" sx={{ pt: 1 }} color="text.secondary">
                  Última actualización: {new Date().getFullYear()}
                </Typography>
              </Stack>
            </Grid>

            {/* Foto / avatar */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={6}
                sx={{
                  p: 1.5,
                  borderRadius: 4,
                  background:
                    "linear-gradient(180deg, rgba(233,30,99,.15), rgba(255,255,255,1))",
                }}
              >
                <Box
                  component="img"
                  src={photo}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallback;
                  }}
                  alt="Foto de Julieta"
                  sx={{
                    width: "100%",
                    height: { xs: 260, md: 360 },
                    objectFit: "cover",
                    borderRadius: 3,
                    display: "block",
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* STATS / ABOUT SHORT */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {[
            { k: "Años estudiando", v: "3+" },
            { k: "Proyectos", v: "8+" },
            { k: "Tecnologías", v: "12+" },
          ].map((s, i) => (
            <Grid item xs={12} sm={4} key={i}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  background:
                    "radial-gradient(200px 120px at 0% 0%, rgba(233,30,99,.06), transparent)",
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 800, color: "primary.main" }}>
                  {s.v}
                </Typography>
                <Typography color="text.secondary">{s.k}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* mini about */}
        <Paper
          elevation={0}
          sx={{
            mt: 4,
            p: { xs: 3, md: 4 },
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Sobre mí
          </Typography>
          <Typography color="text.secondary">
            Soy desarrolladora frontend con foco en experiencias limpias y accesibles.
            Me gusta trabajar con React/Angular, Material UI y buenas prácticas.
            Busco desafíos donde pueda aprender y aportar valor real a los usuarios.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
