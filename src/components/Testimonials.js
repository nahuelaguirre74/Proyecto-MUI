import React from "react";
import { Container, Typography, Box, Paper, Grid } from "@mui/material";

const testimonials = [
    { name: "Alan Touring", comment: "Excelente servicio y resultados asombrosos" },
    { name: "Paul Alen", comment: "Muy profesionales y creativos, justo lo que buscamos" },
];

const Testimonials = () => {
    return (
        <Container>
            <Box my={5}>
                <Typography variant="h4" gutterBottom>Testimonios</Typography>
                <Grid container spacing={3}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper elevation={3} style={{ padding: '20px' }}>
                                <Typography variant="h6">{testimonial.name}</Typography>
                                <Typography variant="body1">{testimonial.comment}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Testimonials;
