import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freecodecamplogo from './img/logo.png';
import {useState} from 'react';


function App() {

  const [numClick, setNumClick] = useState(0); /* por convencion set es para asignar a algo. como actualizar numero de click */

  const manejarClick = () => {
    setNumClick (numClick + 1);
  };

  const reiniciarContador = () => {
    setNumClick (0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freecodecamplogo}
          alt='Logo de freecodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClick= {numClick} />
        <Boton
          texto='click'
          esBotondeClick={true}
          manejarClick={manejarClick} />
        <Boton
          texto='Reiniciar'
          esBotondeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
