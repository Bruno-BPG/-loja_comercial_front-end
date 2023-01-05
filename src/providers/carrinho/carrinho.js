import { createContext, useContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
// console.log(children)
    const [Carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const addItem = (item) => {

        // console.log(item)

        const montarIten = {name:item.name, id:Math.random(), price:item.price, image:item.image}

        // console.log(montarIten)

        setCarrinho([...Carrinho, montarIten]);
        localStorage.setItem("cart" , JSON.stringify([...Carrinho, montarIten]))

    };

    const removerItem = (item) => {
        console.log(item)
        const filtro = Carrinho.filter((elemt)=>
            elemt.id !==  item.id
        )

        setCarrinho(filtro)
        localStorage.setItem("cart" , JSON.stringify(filtro))

        
    };

    const removerTodos = () => {

        setCarrinho([])
        localStorage.setItem("cart" , JSON.stringify([]))

        
    };

    return (
        <CarrinhoContext.Provider value={{ Carrinho, removerItem, addItem, removerTodos}}>
            {children}
        </CarrinhoContext.Provider>    
    );
};

export const useCarrinho = () => useContext(CarrinhoContext)