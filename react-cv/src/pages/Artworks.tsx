import { useEffect, useState } from "react";
import { getArtworks } from "../api/artworks";
import {
  Box, Typography, Card, CardContent, Grid,
  Skeleton, Chip, Stack, CardActionArea
} from "@mui/material";

type Artwork = { id:number; title:string; thumbnailUrl:string; url:string };

export default function Artworks(){
  const [items, setItems] = useState<Artwork[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Lista de títulos personalizados en español
  const niceTitles = [
    "Puente industrial", "Escritorio minimalista", "Cascada en el bosque",
    "Frutillas frescas", "Ciudad al atardecer", "Calle empedrada",
    "Playa dorada", "Montaña nevada", "Café y notebook",
    "Arquitectura moderna", "Cielo nocturno", "Paleta de colores"
  ];

  useEffect(() => {
    getArtworks(12)
      .then(setItems)
      .catch((e)=>setError(e?.message ?? "Error"));
  }, []);

  if (error) {
    return (
      <Box className="container">
        <Typography variant="h5" color="error">Ups… {error}</Typography>
      </Box>
    );
  }

  return (
    <Box className="container" sx={{ py: 3 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography variant="h4">Portfolio</Typography>
        <Chip label={`${items?.length ?? 12} proyectos`} color="secondary" variant="outlined" />
      </Stack>

      {!items ? (
        <Grid container spacing={3}>
          {Array.from({ length: 12 }).map((_,i)=>(
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
              <Skeleton sx={{ mt: 1 }} />
              <Skeleton width="60%" />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3}>
          {items.map(a => {
            const fallback = `https://picsum.photos/seed/${a.id}/800/450`;
            const href = a.url || fallback;
            const nice = niceTitles[(a.id - 1) % niceTitles.length];

            return (
              <Grid item xs={12} sm={6} md={4} key={a.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform .15s ease, box-shadow .2s ease",
                    "&:hover": { transform: "translateY(-4px)", boxShadow: 6 },
                  }}
                >
                  <CardActionArea href={href} target="_blank" rel="noreferrer">
                    <Box
                      component="img"
                      src={href}
                      alt={nice}
                      loading="lazy"
                      onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = fallback; }}
                      sx={{
                        width: "100%",
                        height: 200,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                    <CardContent>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        sx={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {nice}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Proyecto #{a.id}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
}
