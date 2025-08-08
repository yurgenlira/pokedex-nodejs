
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useApi from './useApi.js';
import LoadingSpinner from './LoadingSpinner.jsx';
import ErrorMessage from './ErrorMessage.jsx';

const getPokemonId = (url) => {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  if (match) return match[1];
  // fallback for old API format
  const parts = url.split('/').filter(Boolean);
  return parts[parts.length - 1];
};

const getSpriteUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

const PokemonList = () => {
  const { data, loading, error } = useApi('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    if (data && data.results) {
      const withIds = data.results.map((pokemon) => {
        const id = getPokemonId(pokemon.url);
        return { ...pokemon, id };
      });
      setPokemonList(withIds);
    }
  }, [data]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className='list-container'>
      {pokemonList.map((pokemon) => (
        <Link
          to={`/pokemon/${pokemon.name}`}
          className='list-item'
          key={pokemon.name}
          style={{ backgroundImage: `url(${getSpriteUrl(pokemon.id)})` }}
        >
          <div className='list-item-name'>{pokemon.name.toLowerCase()}</div>
        </Link>
      ))}
    </div>
  );
};

export default PokemonList;
