import './App.css';
import Buscador from './components/Buscador';
import ListaNoticias from './components/ListaNoticias';
import {BrowserRouter, Routes, Route,} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element= {<Buscador />}/>
        <Route path='/buscador' element={<Buscador />}/>
        <Route path='/listaNoticias' element={<ListaNoticias />}/>
        <Route path='*' element={"Error 404: Not Found"}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
