import { useEffect, useState } from "react";
// 👇 importá SOLO la función
import { getArtworks } from "../api/artworks";
import { Box, CircularProgress, Typography, Card, CardMedia, CardContent } from "@mui/material";

// 👇 definí el tipo localmente
type Artwork = { id: number; title: string; thumbnailUrl: string; url: string };

export default function Artworks(){
  const [items, setItems] = useState<Artwork[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getArtworks(24).then(setItems).catch((e)=>setError(e?.message ?? "Error"));
  }, []);

  if (error) return <Box className="container"><Typography color="error">{error}</Typography></Box>;
  if (!items) return <Box className="container"><CircularProgress/></Box>;

  return (
    <Box className="container">
      <Typography variant="h4" gutterBottom>Obras (demo)</Typography>
      <div className="grid">
        {items.map(a => (
          <Card key={a.id}>
            <CardMedia component="img" height="140" image={a.thumbnailUrl} alt={a.title}/>
            <CardContent>
              <Typography variant="subtitle1">{a.title}</Typography>
              <Typography variant="caption" className="muted">#{a.id}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </Box>
  );
}
