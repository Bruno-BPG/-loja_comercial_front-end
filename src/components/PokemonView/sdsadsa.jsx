import PokemonView from "./sdsadsa";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./css2.css";

export function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function Pokepage() {
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

    let tipo = primeiraLetraMaiuscula(pokemon.types[0].type.name)

    return (
        <div className={`pokemonTipo${tipo}`}>
            <PokemonView arrPokemon={pokemon}></PokemonView>
        </div>
    );
}
