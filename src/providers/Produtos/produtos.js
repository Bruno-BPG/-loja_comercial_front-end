import { createContext, useContext, useState } from "react";

export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
// console.log(children)
    const [Produtos, setProdutos] = useState([
        { name: "MotoG4 play, 16GB, 2G Ram",  price: 400, image: "https://t.ctcdn.com.br/r-O7LSxQVnuKr3vf-iK1ZDG5Ulc=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i409191.png" },
        { name: "Xaomi Redmi, 64GB, 4G Ram", price: 2000, image: "https://t.ctcdn.com.br/1MwzdGrQtVX4Dw1Vv_ZW3Chutvk=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i523786.png" },
        { name: "Samsung s20, 128GB, 6G Ram", price: 1599, image: "https://t.ctcdn.com.br/yPRhQDUdn2dW79v5rwCGrEQVwEw=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413740.png" },
	])

    return (
        <ProdutosContext.Provider value={{ Produtos }}>
            {children}
        </ProdutosContext.Provider>    
    );
};

export const useProdutos = ()=> useContext(ProdutosContext)