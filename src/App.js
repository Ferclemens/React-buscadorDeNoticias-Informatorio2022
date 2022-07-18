import './App.css';
import {BrowserRouter, Routes, Route, Navigate,} from "react-router-dom"
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element= {<LandingPage />}/>
        <Route path='/buscador' element={<LandingPage />}/>
        <Route path='*' element={"Error 404: Not Found"}/>
        <Route path='/error' element={<Navigate replace to='/buscador'/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
