import React from 'react';
import PropTypes from 'prop-types';

const PokemonAbility = ({ ability }) => (
  <div className='pokemon-ability'>
    <h4>{ability.name}</h4>
    <p>{ability.effect}</p>
  </div>
);

PokemonAbility.propTypes = {
  ability: PropTypes.shape({
    name: PropTypes.string.isRequired,
    effect: PropTypes.string
  }).isRequired
};

export default PokemonAbility;
