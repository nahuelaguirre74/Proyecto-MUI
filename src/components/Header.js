import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Header = ()=>{
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{flexGrow:1}}>
                    Landing Page Professional
                </Typography>
                <Button color="inherit">Sobre Nosotros</Button>
                <Button color="inherit">Servicios</Button>
                <Button color="inherit">Testimonios</Button>
                <Button color="inherit">Portafolio</Button>
                <Button color="inherit">Contacto</Button>
                
            </Toolbar>
        </AppBar>
    );
};

export default Header;