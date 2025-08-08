import React from 'react';
import { render, screen } from '@testing-library/react';
import PokemonList from '../src/PokemonList.jsx';

jest.mock('../src/useApi.js', () => () => ({
  data: { results: [{ name: 'bulbasaur' }, { name: 'charmander' }] },
  loading: false,
  error: null
}));

describe('PokemonList', () => {
  it('renders a list of Pokémon', () => {
    render(<PokemonList />);
    expect(screen.getByText('bulbasaur')).toBeInTheDocument();
    expect(screen.getByText('charmander')).toBeInTheDocument();
  });
});
