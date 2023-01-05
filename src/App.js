import { Switch, Route } from "react-router-dom";

// import api from "../src/components/api";
// import Cards from "./components/cards/index"

// import React, { useState,useEffect } from 'react';

import LoginFrom from "./components/loginFrom/index";
import CadastroFrom from "./components/cadastroForm/index";

function App() {
  // const [listaPokemons, setListaPokemons] = useState("");

  // useEffect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setListaPokemons(response);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // let array = []

  // for (let i = 1; i < 151; i++) {

  //   api.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  //   .then((response) => array.push(response.data))
  //   .catch((err) => {
  //     alert("ocoreu um erro tente outro email");
  //     console.error("ops!" + err);
  // });

  // }

  // console.log(array)

  // console.log(listaPokemons)

  return (
    <Switch>
      <Route exact path="/">
        <LoginFrom></LoginFrom>
      </Route>
      <Route exact path="/cadastro">
        <CadastroFrom></CadastroFrom>
      </Route>
      <Route exact path="/drinks">
        drinks
      </Route>
    </Switch>
    // <div>
    //   <div>
    //     <Cards></Cards>
    //   </div>
    // </div>
    // <Switch>
    //   <Route exact path="/">
    //     gdgdf
    //   </Route>
    //   <Route exact path="/fruits">
    //     fruits
    //   </Route>
    //   <Route exact path="/drinks">
    //     drinks
    //   </Route>
    // </Switch>
  );
}

export default App;
