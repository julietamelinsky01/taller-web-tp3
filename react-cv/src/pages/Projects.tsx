import { Box, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { title:"PropControl", description:"Microservicios Go + React + MySQL", img:"https://picsum.photos/seed/prop/640/360" },
  { title:"CV Angular", description:"TP2: Angular + PrimeNG + Interceptor", img:"https://picsum.photos/seed/angular/640/360" },
  { title:"CG Labs", description:"Pyglet + ModernGL + Shaders", img:"https://picsum.photos/seed/cg/640/360" },
];

export default function Projects(){
  return (
    <Box className="container">
      <Typography variant="h4" gutterBottom>Proyectos</Typography>
      <div className="grid">
        {projects.map((p) => (<ProjectCard key={p.title} {...p}/>))}
      </div>
    </Box>
  );
}

