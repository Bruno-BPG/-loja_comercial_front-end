import React, { useState, useEffect } from "react";
import api from "../api";

// import "./css.css";

import { useHistory } from "react-router-dom";

function Card ({geracao}){

  const history = useHistory()

  const [pokemons, setPokemons] = useState([]);

    useEffect(() => {

    api
    .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=649")
    .then((response) => setPokemons(response.data.results))
    
    .catch((err) => {
      // alert("ocoreu um erro");
      console.error("ops!" + err);
    });

  },[]);

  const primeiraGeracao = pokemons.filter((word,index) => index <= 150);
  
  const segundaGeracao = pokemons.filter((word,index) => index >= 151 && index <= 250);
  
  const terceiraGeracao = pokemons.filter((word,index) => index >= 251 && index <= 385);
  
  const quartaGeracao = pokemons.filter((word,index) => index >= 386 && index <= 492);
  
  const quintaGeracao = pokemons.filter((word,index) => index >= 493 && index <= 649);

    // console.log(primeiraGeracao[0])


  if(geracao === 1){
    return primeiraGeracao.map((iten, indexGeneros) => (
      <div className="card" key={indexGeneros}>
        <div className="internalCard">
          <span>{iten.name}</span>
          <span>#{indexGeneros+1}</span>
        </div>
          <img className="imgPokemon" onClick={()=>{history.push(`/pokemon/${indexGeneros+1}`)}} alt={iten.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${1+indexGeneros +".svg"}`}></img>
      </div>
    ))
  }

  if(geracao === 2){
    return segundaGeracao.map((iten, indexGeneros) => (
      <div className="card" key={indexGeneros}>
        <div className="internalCard">
          <span>{iten.name}</span>
          <span>#{indexGeneros+152}</span>
        </div>
          <img className="imgPokemon" onClick={()=>{history.push(`/pokemon/${indexGeneros+152}`)}} alt={iten.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${152+indexGeneros +".svg"}`}></img>
      </div>
    ))
  }

  if(geracao === 3){
    return terceiraGeracao.map((iten, indexGeneros) => (
      <div className="card" key={indexGeneros}>
        <div className="internalCard">
          <span>{iten.name}</span>
          <span>#{indexGeneros+252}</span>
        </div>
          <img className="imgPokemon" onClick={()=>{history.push(`/pokemon/${indexGeneros+252}`)}} alt={iten.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${252+indexGeneros +".svg"}`}></img>
      </div>
    ))
  }

  if(geracao === 4){
    return quartaGeracao.map((iten, indexGeneros) => (
      <div className="card" key={indexGeneros}>
        <div className="internalCard">
          <span>{iten.name}</span>
          <span>#{indexGeneros+387}</span>
        </div>
          <img className="imgPokemon" onClick={()=>{history.push(`/pokemon/${indexGeneros+387}`)}} alt={iten.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${387+indexGeneros +".svg"}`}></img>
      </div>
    ))
  }

  else{
    return quintaGeracao.map((iten, indexGeneros) => (
      <div className="card" key={indexGeneros}>
        <div className="internalCard">
          <span>{iten.name}</span>
          <span>#{indexGeneros+494}</span>
        </div>
          <img className="imgPokemon" onClick={()=>{history.push(`/pokemon/${indexGeneros+494}`)}} alt={iten.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${494+indexGeneros +".svg"}`}></img>
      </div>
    ))
  }

}

export default Card