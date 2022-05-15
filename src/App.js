import Logo from './imagenes/freecodecamp-logo.jpg';
import './App.css';
/*import Tarea from './componentes/Tareas';*/
/*import TareaFormulario from './componentes/TareaFormuladrio';*/
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacuion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={Logo}
          className='freecodecamp-logo'
          alt="logo de freecodecamp"
        />
      </div>
      <div className='tareas-listas-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
