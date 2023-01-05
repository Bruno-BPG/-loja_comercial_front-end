import { ProdutosProvider } from "./Produtos/produtos";
import { CarrinhoProvider } from "./carrinho/carrinho";


const Providers = ({ children }) => {
    return <ProdutosProvider>
        <CarrinhoProvider>
        {children}
        </CarrinhoProvider>
        </ProdutosProvider>
};

export default Providers;