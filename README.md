Projeto E-Commerce Digital

Documentacao do projeto de e-commerce desenvolvido com React e Vite.

Para estilisar o projeto eu usei ia(Mais especifico usei o antyGravity o agente era o Gemini 3.1 (high)) pois sou ruim e não gosto de estilisar <3

1. Uso do useContext
import {createContext, useState} from 'react'

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

Eu o criei no arquivo src/contexts/CartContext.jsx utilizando createContext.
Os dados que armazenei foi a lista de produtos no carrinho e a funcao para alterar essa lista.
O que o carrinho faz, os produtos podem ser adicionados no final da lista, removidos usando seu indice, e a lista e esvaziada ao pagar.
o carrimho é consumido em Card.jsx e Details.jsx para adicionar itens. Em Cart.jsx para listar os itens, mostrar o total, remover produtos e esvaziar o carrinho.

2. Consumo da API
Eu configurei o jsaon-server com a biblioteca json-server. No package.json, usei o script json-server --watch db.json --port 3001.
os EndPoints foram o "/products" para listar e adicionar, e "/products/id" para ver detalhes de um item.
as requizições uitilizadas foram GET em Home.jsx e Details.jsx para buscar os produtos no localhost na porta 3001 e POST em Register.jsx para salvar um novo produto.

3. Estrutura Geral do Projeto
Organizacao das pastas: 
src/components guarda os componentes menores da interface. 
src/pages guarda as telas principais. 
src/contexts guarda os estados do Context API.
sobre as páginaw Home lista os produtos, Details mostra a visao unica de um produto, Carrinho exibe os produtos adicionados nele e o quanto isso tudo daria e o Cadastro tem um formulario para criar um novo produto.
A navegação é Controlado pelo react-router-dom, com um menu fixo no topo e botoes nos cards.

4. Funcionalidades Implementadas
Eu desenvolvi uma loja com lista de itens, paginas dinamicas, carrinho e tela de registro de novos produtos.
Para o formulário eu usei o useRef para ler os dados. Antes de enviar para a API, checa se os campos estao preenchidos, se o preco e numero e se o link da imagem comeca com http.

5. Como Rodar o Projeto
Dependencias: React, react-router-dom, Tailwind CSS e json-server.
Passo 1: Rode npm install para baixar os pacotes.
Passo 2: Rode npm run server para ligar o banco de dados local.
Passo 3: Rode npm run dev para iniciar o site no seu navegador.
