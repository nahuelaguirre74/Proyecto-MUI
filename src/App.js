import React from "react";
import Header from "./components/Header";
import { CssBaseline, Container } from "@mui/material";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Portfolio from "./components/Portfolio";

const App = ()=>{
  return(
    <div>
      <CssBaseline/>
      <Header/>
      <Container>
        <AboutUs />
        <Services/>
        <Testimonials/>
        <Portfolio/>
      </Container>
    </div>
  );
};

export default App;