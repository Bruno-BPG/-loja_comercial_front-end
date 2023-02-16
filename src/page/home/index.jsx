import Card from "../../components/cards"
import React, { useState } from "react";
import "./css.css";

export function Home (){
    const [page, setPage] = useState(1);

    return <div>

        <header>
          <img className="imgLogo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="fdsfds"></img>
        </header>

        <div className="conteinersBotoes">
          <button onClick={()=>{setPage(1)}} className="btnGeracoes">1</button>
          <button onClick={()=>{setPage(2)}} className="btnGeracoes">2</button>
          <button onClick={()=>{setPage(3)}} className="btnGeracoes">3</button>
          <button onClick={()=>{setPage(4)}} className="btnGeracoes">4</button>
          <button onClick={()=>{setPage(5)}} className="btnGeracoes">5</button>
        </div>

        <div className="conteiner">
          <Card geracao={page}></Card>
        </div>

    </div>
}