import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('render noticias header', () => {
  render(<App />)
  //screen.debug()
  const title = screen.getByText(/buscador de noticias/i)
  expect(title).toBeInTheDocument()
})
test('render noticias footer', () => {
  render(<App />)
  //screen.debug()
  const title = screen.getByText(/fernando o. clemens/i)
  expect(title).toBeInTheDocument()
})
