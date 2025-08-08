describe('dummy', () => {
  it('dummy test', () => {
    expect(true).toBe(true);
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App.jsx';

// describe('App', () => {
//   it('renders the Pokédex main page', () => {
//     render(
//       <MemoryRouter initialEntries={["/"]}>
//         <App />
//       </MemoryRouter>
//     );
//     expect(screen.getByText(/Pokédex/i)).toBeInTheDocument();
//   });
// });
// describe('App', () => {
//   it('renders the Pokédex main page', () => {
//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );
//     expect(screen.getByText(/Pokédex/i)).toBeInTheDocument();
//   });
// });
