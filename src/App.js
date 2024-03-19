import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormOfertas from './page/ofertas/FormOfertas.js';
import ListOfertas from './page/ofertas/ListOfertas.js';

function App() {
  return (
    <BrowserRouter>

    <div>
      <Header/>
    </div>

      <div className="App">
        
      <Routes>
          <Route path='/' element = {<ListOfertas/>}/>
          <Route path='Ofertas' element = {<FormOfertas/>}/> 
      </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;
