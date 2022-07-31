import './App.css';
import {BrowserRouter, Routes, Route, Navigate,} from "react-router-dom"
import LandingPage from './components/LandingPage';
import NoMatch404 from './components/errors/NoMatch404';
import Consigna from './components/Consigna';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element= {<LandingPage />}/>
        <Route path='/buscador' element={<LandingPage />}/>
        <Route path='*' element={<NoMatch404 />}/>
        <Route path='/error' element={<Navigate replace to='/buscador'/>}/>
        <Route path='/consigna' element={<Consigna/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
