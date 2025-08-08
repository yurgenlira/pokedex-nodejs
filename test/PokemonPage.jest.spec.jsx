import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PokemonPage from '../src/PokemonPage.jsx';

jest.mock('../src/useApi.js', () => () => ({
  data: {
    name: 'bulbasaur',
    sprites: { front_default: 'bulbasaur.png' },
    abilities: [
      { ability: { name: 'overgrow' } }
    ],
    stats: [
      { stat: { name: 'hp' }, base_stat: 45 }
    ]
  },
  loading: false,
  error: null
}));

describe('PokemonPage', () => {
  it('renders Pokémon details', () => {
    render(
      <MemoryRouter initialEntries={['/pokemon/bulbasaur']}>
        <Routes>
          <Route path='/pokemon/:name' element={<PokemonPage />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('overgrow')).toBeInTheDocument();
    expect(screen.getByText(/hp/i)).toBeInTheDocument();
  });
});
