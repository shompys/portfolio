//import {v4 as genId} from 'uuid';
import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Inicio from './components/inicio/Inicio';
import Footer from './components/footer/Footer';
import Conocimientos from './components/conocimientos/Conocimientos';
import SobreMi from './components/sobreMi/SobreMi';
import Proyectos from './components/proyectos/Proyectos';
import Contacto from './components/contacto/Contacto';
import ScrollAnimation from './helpers/scrollAnimation/ScrollAnimation.jsx';


function App() {
  
  return (
    <div className="App">
      <ScrollAnimation/>
      <Nav />
      <Inicio/>
      <SobreMi/>
      <Conocimientos/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
      
    </div>
  );
}

export default App;
