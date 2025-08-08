

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useApi from './useApi.js';
import LoadingSpinner from './LoadingSpinner.jsx';
import ErrorMessage from './ErrorMessage.jsx';

const statOrder = [
  'speed',
  'special-defense',
  'special-attack',
  'defense',
  'attack',
  'hp',
];

const PokemonPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useApi(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const { data: listData } = useApi('https://pokeapi.co/api/v2/pokemon?limit=151');
  const [nameById, setNameById] = useState({});

  useEffect(() => {
    if (listData && listData.results) {
      const map = {};
      listData.results.forEach((p, idx) => {
        map[idx + 1] = p.name;
      });
      setNameById(map);
    }
  }, [listData]);

  // For navigation
  const id = data?.id;
  const prevName = id > 1 && nameById[id - 1] ? nameById[id - 1] : null;
  const nextName = id < 151 && nameById[id + 1] ? nameById[id + 1] : null;

  // For abilities
  const abilities = data?.abilities?.map((a) => ({
    name: a.ability.name,
    isHidden: a.is_hidden,
  })) || [];

  if (loading || !Object.keys(nameById).length) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!data) return null;

  // Get the primary type for coloring
  const mainType = data?.types?.[0]?.type?.name;
  const typeClass = mainType ? `pokemon-type-${mainType}` : '';

  return (
    <>
      <div className='links'>
        {prevName ? (
          <Link to={`/pokemon/${prevName}`}>Previous</Link>
        ) : <span />}
        <Link to='/'>Home</Link>
        {nextName ? (
          <Link to={`/pokemon/${nextName}`}>Next</Link>
        ) : <span />}
      </div>
      <div className={`pokemon-page ${typeClass}`}>
        <div
          className='pokemon-image'
          style={{ backgroundImage: `url(${data.sprites.front_default})` }}
        />
        <div className='pokemon-info'>
          <div className='pokemon-name'>{data.name.toLowerCase()}</div>
          <div className='pokemon-stats' data-testid='stats'>
            <table>
              <tbody>
                {statOrder.map((stat) => {
                  const statObj = data.stats.find((s) => s.stat.name === stat);
                  return (
                    <tr key={stat}>
                      <td className='pokemon-stats-name'>{stat.replace('-', ' ').toLowerCase()}</td>
                      <td className='pokemon-stats-value'>{statObj ? statObj.base_stat : '-'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className='pokemon-abilities'>
            {abilities.map((ab, i) => (
              <div className='pokemon-ability' key={ab.name}>
                <div className='pokemon-ability-type'>Hidden ability</div>
                <div className='pokemon-ability-name'>{ab.name.toLowerCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonPage;
