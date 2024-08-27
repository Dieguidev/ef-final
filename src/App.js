import './App.css';
import Cabecera from './Cabecera';
import FechaHora from './FechaYHora';

import Login from './Login';
import { Menu } from './Menu';
import Pie from './Pie';


function App() {
  return (
    <div className='container'>
      <Menu/>
      <Cabecera/>
      <FechaHora/>
      <Login/>
      <Pie/>
    </div>
  );
}

export default App;
