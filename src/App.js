import './App.css';
import Buscador from './components/Buscador';
import NoticiaDetalle from './components/NoticiaDetalle';
import {BrowserRouter, Routes, Route,} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element= {<Buscador />}/>
        <Route path='/buscador' element={<Buscador />}/>
        <Route path='/noticia/:id' element={<NoticiaDetalle />}/>
        <Route path='*' element={"Error 404: Not Found"}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
