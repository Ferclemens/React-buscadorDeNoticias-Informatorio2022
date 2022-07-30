import { fireEvent, render, screen } from '@testing-library/react';
import LandingPage from './LandingPage';
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import Buscador from './Buscador';


let inputBuscador
let botonBuscar
beforeEach(() => {
    render(<LandingPage/>)
    inputBuscador = screen.getByPlaceholderText(/buscar noticias/i)
    botonBuscar = screen.getByText(/buscar/i)
})  
test ('si se renderiza el input del buscador al iniciar', () => {
    expect(inputBuscador).toBeInTheDocument()
})
test ('si se renderiza el boton buscar', () => {
    expect(botonBuscar).toBeInTheDocument()
})