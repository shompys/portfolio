//import {v4 as genId} from 'uuid';
import './App.css';
import Nav from './components/nav/Nav';
import Inicio from './components/inicio/Inicio';
import Footer from './components/footer/Footer';
import Conocimientos from './components/conocimientos/Conocimientos';
import SobreMi from './components/sobreMi/SobreMi';
import ScrollAnimation from './helpers/scrollAnimation/ScrollAnimation';


function App() {
 
  ScrollAnimation()

  return (
    <div className="App">
      <Nav />
      <Inicio/>
      <SobreMi/>
      <Conocimientos/>
      <Footer/>
      
    </div>
  );
}

export default App;
