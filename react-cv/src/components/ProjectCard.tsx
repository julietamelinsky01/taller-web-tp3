import { Card, CardContent, CardMedia, Typography } from "@mui/material";
export default function ProjectCard({ title, description, img }:{ title:string; description:string; img:string; }){
  return (
    <Card>
      <CardMedia component="img" height="140" image={img} alt={title}/>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{description}</Typography>
      </CardContent>
    </Card>
  );
}
