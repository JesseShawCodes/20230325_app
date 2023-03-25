import { render, screen } from '@testing-library/react';
import App from './App';

test('renders initial App Component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Videos/i);
  expect(linkElement).toBeInTheDocument();
});
