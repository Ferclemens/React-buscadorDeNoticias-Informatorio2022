import { render, screen } from '@testing-library/react';
import Buscador from './Buscador';
import '@testing-library/jest-dom'

test('render input de buscador', async () => {
    render(<Buscador/>)
    const input = screen.getAllByPlaceholderText(/buscar noticias/i)
    
    await waitFor(()=> {
        expect(input).toBeInTheDocument()  
    })
  })