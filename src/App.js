//import {v4 as genId} from 'uuid';
import './App.css';

import Nav from './components/nav/Nav';
import Inicio from './components/inicio/Inicio';
import Yo from './components/yo/Yo';
import Footer from './components/footer/Footer';
import Conocimientos from './components/conocimientos/Conocimientos';

function App() {
  return (
    <div className="App">
      <>
      <Nav />
      <Inicio/>
      <Conocimientos/>
      <Yo/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
