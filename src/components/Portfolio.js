import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

const projects = [
    { title: "Proyecto 1", image: "https://www.iebschool.com/blog/wp-content/uploads/2021/04/image-6-1024x736.png" },
    { title: "Proyecto 2", image: "https://www.iebschool.com/blog/wp-content/uploads/2023/06/image-9-636x1024.png" },

];

const Portfolio = () => {
    return (
        <Container>
            <Box my={5}>
                <Typography variant="h4" gutterBottom>Portafolio</Typography>
                <Grid container spacing={3}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Paper
                                elevation={3}
                                style={{
                                    backgroundImage: `url(${project.image})`,
                                    backgroundSize: "cover",
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: '20px',
                                }}
                            >
                                <Typography variant="h6" style={{ color: '#fff' }}>
                                    {project.title}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Portfolio;