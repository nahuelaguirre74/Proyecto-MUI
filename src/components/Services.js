import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";


const services = [
    {title: "Diseño web", description: "Creación de sitios web moderno"},
    {title: "Desarrollo de aplicaciones", description: "Soluciones a medida para tu negocio"},
    {title: "SEO", description:"Mejoramos la visibilidad de tu sitio web en los motores de búsqueda"},
    
];

const Services = ()=>{
    return(
        <Container >
            <Box my={5}>
                <Typography variant="h4" gutterBottom>
                    Servicios 
                </Typography>
                <Grid container spacing={3}>
                    {services.map((service, index)=>(
                        <Grid item xs={12} md={6} key={index}>
                            <Paper elevation={3} style={{padding: '20px'}}>
                                <Typography variant="h6">{service.title}</Typography>
                                <Typography variant="body1">{service.description}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;