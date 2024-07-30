import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const HHeader = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open)
    };

    const drawerItems = (
        <List>
            {['Sobre Nosotros', 'Servicios', 'Testimonios', 'Portafolio', 'Contacto'].map((text, index) => (
                <ListItem button key={index}>
                    <ListItemText primary={text} />

                </ListItem>
            ))}
        </List>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: '1' }}>
                    Landing Page Profesional
                </Typography>
                <div className="menu-buttons">
                    <Button color="inherit">Sobre Nosotros</Button>
                    <Button color="inherit">Servicios</Button>
                    <Button color="inherit">Testimonios</Button>
                    <Button color="inherit">Portafolio</Button>
                    <Button color="inherit">Contacto</Button>
                </div>

                <IconButton color="inherit" edge="end" onClick={toggleDrawer()} className="menu-icon">
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>{drawerItems}</Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default HHeader;