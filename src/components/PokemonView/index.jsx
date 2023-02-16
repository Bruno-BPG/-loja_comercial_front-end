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

    console.log(pokemon.stats[0])
  
    return (
      <div className="conteinerCardGrande">
        <h1 className='ajustarCentro'>{pokemon.name}</h1>
        <div className='ajustarCentro'>
          <img className="imgGrandePokemon" alt={pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${params.id}.svg`}></img>
        </div>
        
        <div className='tipoDosPokemons'>
          <p className='tipoGrass'>{pokemon.types[0].type.name}</p>
          <p className='tipoGrass'>{pokemon.types[1]?.type.name}</p>
        </div>

        <h1 className='ajustarCentro'>{"status"}</h1>
        <div className='conteinerStatus'>
        {
          pokemon.stats.map((iten,index)=>(
            <div  key={index}>
              <div>{iten.stat.name}</div>
              <div>{iten.base_stat}</div>
            </div>
          ))
        }
        </div>

      </div>
    );
  };
  
  export default PokemonView;
  