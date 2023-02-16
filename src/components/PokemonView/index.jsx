import React, {
    useEffect,
    useState,
  } from 'react';
  import { useParams } from 'react-router-dom';
  
  const PokemonView = () => {
    const [pokemon, setPokemon] = useState(null);
    const params = useParams();
  
    useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
        .then((r) => r.json())
        .then((json) => {
          setPokemon(json);
        });
    }, [params]);
  
    if (!pokemon) {
      return null;
    }
  
    return (
      <div className="PokemonView">
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        Abilities
        <ul className="PokemonView__abilities">
          {pokemon.abilities.map((item, index) => (
            <li key={index}>{item.ability.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PokemonView;
  